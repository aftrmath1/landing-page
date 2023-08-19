import ContinueButton from "./ContinueButton";
import PreviousButton from "./PreviousButton";
import Link from "next/link";
import { useState } from "react";
import { payments } from "./data";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function PlanOption({ children, onClick }) {
  return (
    <div className="flex items-center my-1">
      <input
        type="radio"
        name="plan"
        className="radio radio-xs radio-primary mr-3 mb-1"
        onChange={onClick}
      />
      <p className="text-sm xl:text-md">{children}</p>
    </div>
  );
}

export default function ChoosePlan({ onReady,onPreviousStep }) {
  const goBack = (e) => {
    e.preventDefault();
    onPreviousStep();
  };

  const handleSubmit = e => {
    e.preventDefault();
    onReady({ name: selectedPlanName, id: selectedPlanId, monthly });
  };

  const [monthly, setMonthly] = useState(false);
  const toggleMonthly = () => setMonthly(!monthly);
  const [selectedPlanName, setSelectedPlanName] = useState("");
  const [selectedPlanId, setSelectedPlanId] = useState("");

  return (
    <form className="px-16 w-full pb-10" onSubmit={handleSubmit}>
      <div className="">
        <label class="font-semibold mb-2">Payment</label>
        {/* <input
          type="checkbox"
          value={monthly}
          class="sr-only peer"
          onChange={e => setMonthly(e.target.value)}
        /> */}

        <PlanOption key={"Monthly"} onClick={e => setMonthly("Monthly")}>
          {"Monthly"}
        </PlanOption>

        <PlanOption key={"Yearly"} onClick={e => setMonthly("Yearly")}>
          {"Yearly"}
        </PlanOption>

        {/* <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        <span class="ml-3 text-sm font-medium text-gray-900">Monthly</span> */}
      </div>

      <div className="h-10"/>

      <ul className="flex flex-col w-full">
        <label class="font-semibold mb-2">Plan</label>
        {payments.map(payment => (
          <PlanOption
            key={payment.name}
            onChange={() => {
              setSelectedPlanName(payment.name);
              setSelectedPlanId(payment.monthly);
            }}
          >
            {payment.name}
          </PlanOption>
        ))}
        <Link className="text-sm underline mt-10" href="/pricing" target="_blank">
          Learn more about our plans
        </Link>
      </ul>
      {/* <div className="inline-flex w-full space-x-4">
        <ContinueButton onClick={handleSubmit} />
      </div> */}
      <div className="flex w-full justify-between space-x-4 mt-12">
      <FiArrowLeft className="text-primary w-7 h-7 hover:cursor-pointer hover:opacity-80 duration-300" onClick={goBack}/>
      <FiArrowRight className="text-primary w-7 h-7 hover:cursor-pointer hover:opacity-80 duration-300" onClick={handleSubmit}/>
      </div>
    </form>
  );
}
