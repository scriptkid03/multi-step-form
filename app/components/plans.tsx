import { useState, useEffect } from "react";
import Image from "next/image";

export default function StepTwo({ formData, setFormData, nextStep, prevStep }) {
  const [isYearly, setIsYearly] = useState(formData.isYearly);
  const [selectedPlan, setSelectedPlan] = useState(formData.selectedPlan || "Arcade");

  const plans = [
    {
      name: 'Arcade',
      monthlyPrice: '$9/mo',
      yearlyPrice: '$90/yr',
      yearlyBonus: '2 months free',
      icon: '/svgs/icon-arcade.svg',
    },
    {
      name: "Advanced",
      monthlyPrice: "$12/mo",
      yearlyPrice: "$120/yr",
      yearlyBonus: "2 months free",
      icon: "/svgs/icon-advanced.svg",
    },
    {
      name: "Pro",
      monthlyPrice: "$15/mo",
      yearlyPrice: "$150/yr",
      yearlyBonus: "2 months free",
      icon: "/svgs/icon-pro.svg",
    },
  ];

  const toggleSwitch = () => {
    const updatedIsYearly = !isYearly;
    setIsYearly(updatedIsYearly);
    setFormData({ ...formData, isYearly: updatedIsYearly });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFormData({ ...formData, selectedPlan });  // Save selected plan
    nextStep();
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-marineBlue bold text-3xl">Select your plan</span>
        <span className="text-coolGray">You have the option of monthly or yearly billing.</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col h-48 w-40 justify-between border rounded-lg hover:cursor-pointer pt-5 p-3 ${selectedPlan === plan.name ? 'border-purplishBlue bg-alabaster' : 'hover:border-purplishBlue'}`}
                onClick={() => setSelectedPlan(plan.name)}
              >
                <Image src={plan.icon} width={40} height={40} alt={plan.name} />
                <div className="flex flex-col">
                  <span className="medium text-marineBlue">{plan.name}</span>
                  <span className="text-coolGray">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  {isYearly && (
                    <span className="text-marineBlue text-sm">{plan.yearlyBonus}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center w-full p-4 bg-alabaster rounded-lg gap-5">
            <span className={`medium ${!isYearly ? 'text-marineBlue' : 'text-coolGray'}`}>Month</span>
            <div
              className="flex items-center justify-center w-12 h-6 bg-marineBlue rounded-full cursor-pointer"
              onClick={toggleSwitch}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ease-in-out ${isYearly ? 'translate-x-3' : '-translate-x-3'}`}
              ></div>
            </div>
            <span className={`medium ${isYearly ? 'text-marineBlue' : 'text-coolGray'}`}>Year</span>
          </div>
          <div className="flex justify-between items-end mt-16">
            <button className="text-coolGray w-fit hover:text-marineBlue px-5 py-3" onClick={prevStep}>
              Go back
            </button>
            <button className="bg-marineBlue px-5 py-3 w-fit rounded-lg hover:bg-opacity-80" type="submit">
              <span className="text-alabaster">Next Step</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}












// import Image from "next/image";

// export default function StepTwo() {
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

//   const handlePlanSelect = (plan: string) => {
//     setFormData({ ...formData, plan });
//   };

//   return (
//     <>
//       <div className="flex flex-col gap-2">
//         <span className="text-marineBlue bold text-3xl">
//           Select your plan
//         </span>
//         <span className="text-coolGray">
//           You have the option of monthly or yearly billing.
//         </span>
//       </div>
//       <div className="flex flex-col">
//         <div className="flex flex-col gap-3">
//           <div className="flex flex-col gap-5">
//             <div className="flex flex-row justify-between">
//               {plans.map((plan) => (
//                 <div
//                   key={plan.name}
//                   className="flex flex-col h-48 w-40 justify-between border rounded-lg hover:cursor-pointer hover:border-purplishBlue active:bg-magnolia pt-5 p-3"
//                 >
//                   <Image src={plan.icon} width={40} height={40} alt={plan.name} />
//                   <div className="flex flex-col">
//                     <span className="medium text-marineBlue">{plan.name}</span>
//                     <span className="text-coolGray">
//                       {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
//                     </span>
//                     {isYearly && (
//                       <span className="text-marineBlue text-sm">{plan.yearlyBonus}</span>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-center items-center w-full p-4 bg-magnolia rounded-lg gap-5">
//               <span className={`medium ${isYearly ? 'text-coolGray' : 'text-marineBlue'}`}>
//                 Month
//               </span>
//               <div
//                 className="flex items-center justify-center w-12 h-6 bg-marineBlue rounded-full cursor-pointer"
//                 onClick={toggleSwitch}
//               >
//                 <div
//                   className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ease-in-out ${isYearly ? 'translate-x-3' : '-translate-x-3'
//                     }`}
//                 ></div>
//               </div>
//               <span className={`medium ${isYearly ? 'text-marineBlue' : 'text-coolGray'}`}>
//                 Year
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
