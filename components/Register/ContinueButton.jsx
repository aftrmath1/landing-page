import { useEffect, useState } from "react";
import { FiArrowRight, FiRotateCw } from "react-icons/fi";

export default function ContinueButton({ disabled, onClick, loading }) {
  return (
    <button
      className={`mt-8 border-2 transition rounded-md p-2 w-full text-white grow ${
        disabled || loading
          ? "bg-gray-300 cursor-not-allowed"
          : "border-primary bg-primary hover:bg-indigo-700 hover:border-indigo-700"
      }`}
      onClick={onClick}
      type="submit"
      disabled={disabled}
    >
      <span className="text-lg font-bold inline-flex items-center justify-center">
        {!loading ? (
          <>
            Continue
            <FiArrowRight className="ml-2 hover:-translate-x-2" />
          </>
        ) : (
          <FiRotateCw className="ml-2 animate-spin" />
        )}
      </span>
    </button>
  );
}
