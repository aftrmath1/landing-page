import ContinueButton from "./ContinueButton";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

export default function PurchasePlanForm({ onReady, onPreviousStep }) {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "/payment_success",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <form
      className="flex flex-col justify-center items-center px-6 md:px-10 w-full"
      onSubmit={handleSubmit}
    >
      <PaymentElement />
      <ContinueButton />
    </form>
  );
}
