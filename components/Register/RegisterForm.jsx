import { useEffect, useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import {
  db,
  createUserWithEmailAndPassword,
  setUserPlan,
} from "../../lib/firebaseClient";
import TextInput from "./TextInput";
import BasicInfoForm from "./BasicInfo";
import ChoosePlanForm from "./ChoosePlan";
import ConfirmPlanForm from "./ConfirmPlanForm";
import PurchasePlanForm from "./PurchasePlanForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import ToastProvider from "./ToastProvider";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState("");
  const [chosenPlan, setChosenPlan] = useState([null, null]);
  const [createdFirebaseUser, setCreatedFirebaseUser] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [steps, setSteps] = useState([
    { name: "Basic Info", active: true, completed: false },
    {
      name: "Choose Plan",
      active: false,
      completed: false,
    },
    {
      name: "Confirm",
      active: false,
      completed: false,
    },
    {
      name: "Purchase",
      active: false,
      completed: false,
    },
  ]);

  const [basicInfoFormLoading, setBasicInfoFormLoading] = useState(false);
  const [confirmPlanFormLoading, setConfirmPlanFormLoading] = useState(false);
  const [purchasePlanFormLoading, setPurchasePlanFormLoading] = useState(false);

  async function createStripeUser(data) {
    if (!Object.values(data).every(Boolean)) {
      throw new Error("Missing required fields!!");
    }
    const res = await axios.post("/api/stripe/customer", {
      name: data.name,
      email: data.email,
    });
    setUserId(res.data.customer.id);
  }
  const nextStep = () => {
    const newSteps = [...steps];
    const activeStepIndex = steps.findIndex(step => step.active);
    newSteps[activeStepIndex].active = false;
    newSteps[activeStepIndex].completed = true;
    newSteps[activeStepIndex + 1].active = true;
    setSteps(newSteps);
  };

  const previousStep = () => {
    const newSteps = [...steps];
    const activeStepIndex = steps.findIndex(step => step.active);
    newSteps[activeStepIndex].active = false;
    newSteps[activeStepIndex].completed = false;
    newSteps[activeStepIndex - 1].active = true;
    setSteps(newSteps);
  };

  // useEffect(() => {
  //   setDisabled(
  //     ![fullName, email, companyName, phoneNumber, jobPosition].every(Boolean)
  //   );
  // }, [fullName, email, companyName, phoneNumber, jobPosition]);

  const handleBasicInfoFormReady = async data => {
    setBasicInfoFormLoading(true);
    setEmail(data.email);
    setCompanyName(data.companyName);
    setJobPosition(data.jobPosition);

    const firstName = data.name.split(" ")[0];
    const lastName = data.name.substring(data.name.indexOf(" "));
    console.log(firstName, lastName);

    const firebaseUser = await createUserWithEmailAndPassword(
      data.email,
      data.password,
      firstName,
      lastName,
      {
        companyName,
        phoneNumber,
        jobPosition,
      }
    );
    if (!firebaseUser.user) {
      if (firebaseUser.error.code === "auth/email-already-in-use") {
        messages.push("Email already in use");
      } else {
        messages.push("Error creating user: " + firebaseUser.error.code);
      }
      setBasicInfoFormLoading(false);
      setTimeout(() => setMessages([]), 5000);
      return;
    }
    setCreatedFirebaseUser(firebaseUser.user);
    await createStripeUser(data);
    setBasicInfoFormLoading(false);
    nextStep();
  };

  const handleChoosePlanFormReady = data => {
    setChosenPlan([data.name, data.id, data.monthly]);
    nextStep();
  };

  const handleConfirmPlanFormReady = async () => {
    setConfirmPlanFormLoading(true);
    const resp = await setUserPlan(createdFirebaseUser.uid, {
      monthly: chosenPlan[2],
      stripeId: chosenPlan[1],
      name: chosenPlan[0],
    });
    if (!resp) {
      setConfirmPlanFormLoading(false);
      messages.push("Error setting user plan");
      setTimeout(() => setMessages([]), 5000);
      return;
    }

    try {
      const { data } = await axios.post("/api/stripe/subscription", {
        customerId: userId,
        priceId: chosenPlan[1],
      });
      const { id, client_secret } = data;
      setClientSecret(client_secret);
      setConfirmPlanFormLoading(false);
      nextStep();
    } catch {
      setBasicInfoFormLoading(false);
      console.error("Error creating subscription");
    }
  };

  const handlePurchasePlanFormReady = data => {
    console.log(data);
    nextStep();
  };

  const statements = {
    1: "Tell us about yourself.",
    2: "Choose a payment plan.",
    3: "Confirm your order.",
    4: "Almost there! Purchase your order now.",
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 justify-center items-center max-w-7xl mx-auto">
        <div className="h-full rounded-xl flex flex-col justify-center w-full grow">
          <h1 className="text-7xl text-primary text-center font-medium max-w-lg mx-auto">
            {statements[steps.findIndex(step => step.active) + 1]}
          </h1>
        </div>
        <div className="my-20 bg-background">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="border rounded-xl w-full h-full flex flex-col justify-center items-center text-gray-900">
              <ul class="steps w-full mb-8 transition-all mt-10">
                {steps.map(step => (
                  <li
                    key={step.name}
                    className={`step transition-all ${
                      step.active || step.completed ? "step-primary" : ""
                    }`}
                  >
                    {step.name}
                  </li>
                ))}
              </ul>
              {
                [
                  <BasicInfoForm
                    onReady={e => handleBasicInfoFormReady(e)}
                    loading={basicInfoFormLoading}
                  />,
                  <ChoosePlanForm
                    onPreviousStep={_ => previousStep()}
                    onReady={e => handleChoosePlanFormReady(e)}
                  />,
                  <ConfirmPlanForm
                    plan={chosenPlan}
                    onReady={handleConfirmPlanFormReady}
                    onPreviousStep={_ => previousStep()}
                    loading={confirmPlanFormLoading}
                  />,
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <PurchasePlanForm
                      onReady={e => handlePurchasePlanFormReady(e)}
                      onPreviousStep={_ => previousStep()}
                    />
                  </Elements>,
                ][steps.indexOf(steps.find(step => step.active))]
              }
            </div>
          </div>
        </div>
      </div>
      <ToastProvider toasts={messages} />
    </>
  );
}
