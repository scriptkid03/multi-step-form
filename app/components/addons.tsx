export default function Step3({ formData, setFormData, prevStep }) {

  const addons = [
    {
      name: 'Online service',
      monthlyPrice: '$1/mo',
      yearlyPrice: '$10/yr',
      description: 'Access to multiplayer games',
    },
    {
      name: "Larger storage",
      monthlyPrice: "$2/mo",
      yearlyPrice: "$20/yr",
      description: 'Extra 1TB of cloud storage',
    },
    {
      name: "Custom profile",
      monthlyPrice: "$2/mo",
      yearlyPrice: "$20/yr",
      description: 'Custom theme on your profile',
    },
  ];

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle final form submission
    console.log("Form submitted", formData);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-marineBlue bold text-3xl">
          Pick add-ons
        </span>
        <span className="text-coolGray">
          Add-ons help enhance your gaming experience.
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          {addons.map((addon) => (
            <div className="flex items-center h-20 w-full border rounded-lg hover:border-purplishBlue justify-between p-5">
              <>
                <div key={addon.name} className="flex items-center gap-6">
                  <div className="flex items-center justify-center rounded-sm">
                    <input type="checkbox" className="w-4 h-4 accent-purplishBlue" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-marineBlue medium">
                      {addon.name}
                    </span>
                    <span className="text-coolGray">
                      {addon.description}
                    </span>
                  </div>
                </div>
                <span className="text-purplishBlue">
                  {/* {isYearly ? addon.yearlyPrice : addon.monthlyPrice} */}
                  {addon.monthlyPrice}
                </span>
              </>
            </div>
          ))}
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










// export default function StepThree({ formData, setFormData, isYearly }) {
//   const addons = [
//     { name: "Online service", price: "$1/mo" },
//     { name: "Larger storage", price: "$2/mo" },
//     { name: "Custom profile", price: "$2/mo" },
//   ];

//   const handleAddonChange = (addon: string) => {
//     setFormData((prev: { addons: any[]; }) => ({
//       ...prev,
//       addons: prev.addons.includes(addon)
//         ? prev.addons.filter((item) => item !== addon)
//         : [...prev.addons, addon],
//     }));
//   };

//   return (
//     <>
//       <div className="flex flex-col gap-2">
//         <span className="text-marineBlue bold text-3xl">Pick add-ons</span>
//         <span className="text-coolGray">
//           Add-ons help enhance your gaming experience.
//         </span>
//       </div>
//       <div className="flex flex-col gap-3">
//         {addons.map((addon) => (
//           <div
//             key={addon.name}
//             className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer ${
//               formData.addons.includes(addon.name)
//                 ? "border-purplishBlue bg-magnolia"
//                 : "border-lightGray"
//             }`}
//             onClick={() => handleAddonChange(addon.name)}
//           >
//             <span className="text-marineBlue">{addon.name}</span>
//             <span className="text-coolGray">
//               {isYearly
//                 ? `$${(parseFloat(addon.price.slice(1, -3)) * 10).toFixed(0)}/yr`
//                 : addon.price}
//             </span>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
