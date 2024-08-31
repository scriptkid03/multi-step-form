"use client";
import { useState } from "react";
import StepOne from "./components/info";
import StepTwo from "./components/plans";
import StepThree from "./components/addons";
import Sidebar from "./components/sidebar/sidebar";
import Summary from "./components/summary";

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    isYearly: false,
    addons:[],
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-lightBlue">
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex w-[65%] h-[75%] bg-white rounded-xl p-4">
          <Sidebar currentStep={step}/>
          <div className="flex flex-col w-[70%] h-full justify-center mt-5 px-20 gap-10">
            {/* <Summary/> */}
            {step === 1 && (
              <StepOne
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
              />
            )}
            {step === 2 && (
              <StepTwo
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 3 && (
              <StepThree
              formData={formData} 
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep} 
              // isYearly={isYearly}
            />            
            )}
            {step === 4 && (
              <Summary
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}












// "use client";
// import StepOne from "./components/info";
// import StepTwo from "./components/plans";
// import StepThree from "./components/addons";
// import Image from "next/image";
// import { useState } from "react";


// export default function Home() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     plan: "",
//     addons: [],
//   });
//   const [errors, setErrors] = useState({});
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isYearly, setIsYearly] = useState(false);

//   const toggleSwitch = () => {
//     setIsYearly(!isYearly);
//   };

//   const plans = [
//     {
//       name: "Arcade",
//       monthlyPrice: "$9/mo",
//       yearlyPrice: "$90/yr",
//       yearlyBonus: "2 months free",
//       icon: "/svgs/icon-arcade.svg",
//     },
//     {
//       name: "Advanced",
//       monthlyPrice: "$12/mo",
//       yearlyPrice: "$120/yr",
//       yearlyBonus: "2 months free",
//       icon: "/svgs/icon-advanced.svg",
//     },
//     {
//       name: "Pro",
//       monthlyPrice: "$15/mo",
//       yearlyPrice: "$150/yr",
//       yearlyBonus: "2 months free",
//       icon: "/svgs/icon-pro.svg",
//     },
//   ];

//   const handleNextStep = () => {
//     setCurrentStep((prev) => prev + 1);
//   };

//   const handlePrevStep = () => {
//     setCurrentStep((prev) => prev - 1);
//   };

//   const handleFormSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     let formErrors = { name: "", email: "", phone: "" };

//     if (!formData.name) formErrors.name = "This field is required.";
//     if (!formData.email) {
//       formErrors.email = "This field is required.";
//     } else if (!validateEmail(formData.email)) {
//       formErrors.email = "Invalid email format.";
//     }
//     if (!formData.phone) formErrors.phone = "This field is required.";

//     setErrors(formErrors);

//     if (!formErrors.name && !formErrors.email && !formErrors.phone) {
//       console.log("Form submitted", formData);
//     }
//     if (currentStep === 4) {
//       console.log("Final Form Submission", formData);
//     } else {
//       handleNextStep();
//     }
//   };

//   const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-lightBlue">
//       <div className="flex h-screen w-screen items-center justify-center">
//         <div className="flex w-[65%] h-[75%] bg-white rounded-xl p-4">
//           {/* Sidebar Navigation */}
//           <div className="flex flex-col w-[30%] h-full bg-sidebar bg-no-repeat bg-center bg-cover rounded-lg">
//             <div className="flex flex-col gap-5 p-12">
//               {[1, 2, 3, 4].map((step) => (
//                 <div className="flex items-center gap-4" key={step}>
//                   <div
//                     className={`flex justify-center items-center w-10 h-10 border-2 rounded-full ${
//                       currentStep === step
//                         ? "border-lightBlue bg-lightBlue"
//                         : "border-lightBlue"
//                     }`}
//                   >
//                     <span
//                       className={`${
//                         currentStep === step ? "text-marineBlue" : "text-alabaster"
//                       } bold`}
//                     >
//                       {step}
//                     </span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-nowrap text-lightGray">
//                       STEP {step}
//                     </span>
//                     <span className="text-nowrap text-alabaster bold">
//                       {step === 1
//                         ? "YOUR INFO"
//                         : step === 2
//                         ? "SELECT PLAN"
//                         : step === 3
//                         ? "ADD-ONS"
//                         : "SUMMARY"}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Form Content */}
//           <div className="flex flex-col w-[70%] h-full justify-center mt-5 px-20 gap-10">
//             <form onSubmit={handleFormSubmit} className="flex flex-col gap-10">
//               {currentStep === 1 && (
//                 <StepOne formData={formData} errors={errors} handleChange={handleChange} />
//               )}
//               {currentStep === 2 && (
//                 <StepTwo
//                   plans={plans}
//                   isYearly={isYearly}
//                   toggleSwitch={toggleSwitch}
//                   formData={formData}
//                   setFormData={setFormData}
//                 />
//               )}
//               {currentStep === 3 && (
//                 <StepThree
//                   formData={formData}
//                   setFormData={setFormData}
//                   isYearly={isYearly}
//                 />
//               )}
//               {currentStep === 4 && <StepFour formData={formData} />}

//               <div className={`flex items-end mt-16 ${currentStep > 1 ? "justify-between" : "justify-end"}`}>
//                 {currentStep > 1 && (
//                   <button
//                     type="button"
//                     className="text-coolGray w-fit hover:text-marineBlue px-5 py-3"
//                     onClick={handlePrevStep}
//                   >
//                     Go back
//                   </button>
//                 )}
//                 <button
//                   type="submit"
//                   className="bg-marineBlue px-5 py-3 w-fit rounded-lg hover:bg-opacity-80"
//                   onSubmit={handleFormSubmit}
//                 >
//                   <span className="text-alabaster">
//                     {currentStep === 4 ? "Confirm" : "Next Step"}
//                   </span>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// // Step 1 Component
// // function StepOne({ formData, errors, handleChange }) {
// //   return (
// //     <>
// //       <div className="flex flex-col gap-2">
// //         <span className="text-marineBlue bold text-3xl">Personal info</span>
// //         <span className="text-coolGray">
// //           Please provide your name, email address, and phone number.
// //         </span>
// //       </div>
// //       <div className="flex flex-col gap-3">
// //         <div className="flex flex-col gap-1">
// //           <label className="text-marineBlue">Name</label>
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="e.g. Stephen King"
// //             value={formData.name}
// //             onChange={handleChange}
// //             className={`border p-3 rounded-md ${
// //               errors.name ? "border-strawberryRed" : "border-lightGray"
// //             }`}
// //           />
// //           {errors.name && (
// //             <span className="text-strawberryRed text-sm">{errors.name}</span>
// //           )}
// //         </div>
// //         <div className="flex flex-col gap-1">
// //           <label className="text-marineBlue">Email Address</label>
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="e.g. stephenking@lorem.com"
// //             value={formData.email}
// //             onChange={handleChange}
// //             className={`border p-3 rounded-md ${
// //               errors.email ? "border-strawberryRed" : "border-lightGray"
// //             }`}
// //           />
// //           {errors.email && (
// //             <span className="text-strawberryRed text-sm">{errors.email}</span>
// //           )}
// //         </div>
// //         <div className="flex flex-col gap-1">
// //           <label className="text-marineBlue">Phone Number</label>
// //           <input
// //             type="text"
// //             name="phone"
// //             placeholder="e.g. +1 234 567 890"
// //             value={formData.phone}
// //             onChange={handleChange}
// //             className={`border p-3 rounded-md ${
// //               errors.phone ? "border-strawberryRed" : "border-lightGray"
// //             }`}
// //           />
// //           {errors.phone && (
// //             <span className="text-strawberryRed text-sm">{errors.phone}</span>
// //           )}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // // Step 2 Component
// // function StepTwo({ plans, isYearly, toggleSwitch, formData, setFormData }) {
// //   const handlePlanSelect = (plan) => {
// //     setFormData({ ...formData, plan });
// //   };

// //   return (
// //     <>
// //       <div className="flex flex-col gap-2">
// //         <span className="text-marineBlue bold text-3xl">Select your plan</span>
// //         <span className="text-coolGray">
// //           You have the option of monthly or yearly billing.
// //         </span>
// //       </div>
// //       <div className="flex flex-col gap-3">
// //         <div className="flex flex-row justify-between">
// //           {plans.map((plan) => (
// //             <div
// //               key={plan.name}
// //               className={`flex flex-col h-48 w-40 justify-between border rounded-lg p-3 cursor-pointer ${
// //                 formData.plan === plan.name
// //                   ? "border-purplishBlue bg-magnolia"
// //                   : "border-lightGray"
// //               }`}
// //               onClick={() => handlePlanSelect(plan.name)}
// //             >
// //               <Image
// //                 src={plan.icon}
// //                 width={40}
// //                 height={40}
// //                 alt={`${plan.name} icon`}
// //                 className="self-center"
// //               />
// //               <span className="text-marineBlue text-xl bold">{plan.name}</span>
// //               <span className="text-marineBlue">
// //                 {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
// //               </span>
// //               {isYearly && (
// //                 <span className="text-coolGray">{plan.yearlyBonus}</span>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //         <div className="flex items-center justify-between">
// //           <span className="text-marineBlue bold">Monthly</span>
// //           <label className="relative inline-flex items-center cursor-pointer">
// //             <input
// //               type="checkbox"
// //               className="sr-only peer"
// //               checked={isYearly}
// //               onChange={toggleSwitch}
// //             />
// //             <div
// //               className={`w-11 h-6 bg-lightGray rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 ${
// //                 isYearly ? "bg-lightBlue" : "bg-lightGray"
// //               }`}
// //             ></div>
// //             <span
// //               className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
// //                 isYearly ? "translate-x-5" : "translate-x-0"
// //               }`}
// //             ></span>
// //           </label>
// //           <span className="text-marineBlue bold">Yearly</span>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // // Step 3 Component
// // function StepThree({ formData, setFormData, isYearly }) {
// //   const addons = [
// //     { name: "Online service", price: "$1/mo" },
// //     { name: "Larger storage", price: "$2/mo" },
// //     { name: "Custom profile", price: "$2/mo" },
// //   ];

// //   const handleAddonChange = (addon) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       addons: prev.addons.includes(addon)
// //         ? prev.addons.filter((item) => item !== addon)
// //         : [...prev.addons, addon],
// //     }));
// //   };

// //   return (
// //     <>
// //       <div className="flex flex-col gap-2">
// //         <span className="text-marineBlue bold text-3xl">Pick add-ons</span>
// //         <span className="text-coolGray">
// //           Add-ons help enhance your gaming experience.
// //         </span>
// //       </div>
// //       <div className="flex flex-col gap-3">
// //         {addons.map((addon) => (
// //           <div
// //             key={addon.name}
// //             className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer ${
// //               formData.addons.includes(addon.name)
// //                 ? "border-purplishBlue bg-magnolia"
// //                 : "border-lightGray"
// //             }`}
// //             onClick={() => handleAddonChange(addon.name)}
// //           >
// //             <span className="text-marineBlue">{addon.name}</span>
// //             <span className="text-coolGray">
// //               {isYearly
// //                 ? `$${(parseFloat(addon.price.slice(1, -3)) * 10).toFixed(0)}/yr`
// //                 : addon.price}
// //             </span>
// //           </div>
// //         ))}
// //       </div>
// //     </>
// //   );
// // }

// // // Step 4 Component
// // function StepFour({ formData }) {
// //   const plans = [
// //     {
// //       name: "Arcade",
// //       monthlyPrice: "$9/mo",
// //       yearlyPrice: "$90/yr",
// //       yearlyBonus: "2 months free",
// //     },
// //     {
// //       name: "Advanced",
// //       monthlyPrice: "$12/mo",
// //       yearlyPrice: "$120/yr",
// //       yearlyBonus: "2 months free",
// //     },
// //     {
// //       name: "Pro",
// //       monthlyPrice: "$15/mo",
// //       yearlyPrice: "$150/yr",
// //       yearlyBonus: "2 months free",
// //     },
// //   ];

// //   const selectedPlan = plans.find((plan) => plan.name === formData.plan);

// //   return (
// //     <>
// //       <div className="flex flex-col gap-2">
// //         <span className="text-marineBlue bold text-3xl">Summary</span>
// //         <span className="text-coolGray">
// //           Please review your order before confirming.
// //         </span>
// //       </div>
// //       <div className="flex flex-col gap-3">
// //         <div className="flex justify-between">
// //           <span className="text-marineBlue">
// //             {formData.plan} ({formData.isYearly ? "Yearly" : "Monthly"})
// //           </span>
// //           <span className="text-coolGray">
// //             {formData.isYearly
// //               ? selectedPlan.yearlyPrice
// //               : selectedPlan.monthlyPrice}
// //           </span>
// //         </div>
// //         {formData.addons.length > 0 && (
// //           <>
// //             <hr className="my-4 border-lightGray" />
// //             {formData.addons.map((addon) => (
// //               <div key={addon} className="flex justify-between">
// //                 <span className="text-coolGray">{addon}</span>
// //                 <span className="text-coolGray">
// //                   {formData.isYearly
// //                     ? `$${(parseFloat(addon.price.slice(1, -3)) * 10).toFixed(0)}/yr`
// //                     : addon.price}
// //                 </span>
// //               </div>
// //             ))}
// //           </>
// //         )}
// //       </div>
// //     </>
// //   );
// // }
