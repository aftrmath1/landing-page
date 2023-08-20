import ContinueButton from "./ContinueButton";
import PreviousButton from "./PreviousButton";
import { FiArrowLeft, FiArrowRight, FiRotateCw } from "react-icons/fi";

export default function ConfirmPlanForm({
  plan,
  onReady,
  loading,
  onPreviousStep,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onReady();
  };
  const goBack = (e) => {
    e.preventDefault();
    onPreviousStep();
  };
  return (
    <form
      className="flex flex-col justify-center items-center px-6 md:px-10 w-full pb-10"
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-lg p-2 space-y-4">
        <p>
          You have selected the{" "}
          <strong>
            {plan[0]} - {plan[2] ? "Yearly" : "Monthly"}
          </strong>{" "}
          plan.
        </p>
      </div>
      <div className="flex w-full justify-between space-x-4 mt-12">
      <FiArrowLeft className="text-primary w-7 h-7 hover:cursor-pointer hover:opacity-80 duration-300" onClick={goBack}/>
      <FiArrowRight className="text-primary w-7 h-7 hover:cursor-pointer hover:opacity-80 duration-300" onClick={handleSubmit}/>
        {/* <PreviousButton onClick={goBack} />
        <ContinueButton onClick={handleSubmit} loading={loading} /> */}
      </div>
    </form>
  );
}
