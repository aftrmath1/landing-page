import ContinueButton from "./ContinueButton";
import PreviousButton from "./PreviousButton";

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
      className="flex flex-col justify-center items-center px-16 w-full"
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
      <div className="inline-flex w-full space-x-4">
        <PreviousButton onClick={goBack} />
        <ContinueButton onClick={handleSubmit} loading={loading} />
      </div>
    </form>
  );
}
