"use client";
import React from "react";

export default function Sidebar({ currentStep }) {
  return (
    <div className="flex flex-col w-[30%] h-full bg-sidebar bg-no-repeat bg-center bg-cover rounded-lg">
      <div className="flex flex-col gap-5 p-12">
        {[1, 2, 3, 4].map((step) => (
          <div className="flex items-center gap-4" key={step}>
            <div
              className={`flex justify-center items-center w-10 h-10 border-2 rounded-full ${currentStep === step
                ? "border-lightBlue bg-lightBlue"
                : "border-lightBlue"
                }`}
            >
              <span
                className={`${currentStep === step ? "text-marineBlue" : "text-alabaster"
                  } bold`}
              >
                {step}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-nowrap text-lightGray">
                STEP {step}
              </span>
              <span className="text-nowrap text-alabaster bold">
                {step === 1
                  ? "YOUR INFO"
                  : step === 2
                    ? "SELECT PLAN"
                    : step === 3
                      ? "ADD-ONS"
                      : "SUMMARY"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
