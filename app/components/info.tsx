import { useState } from "react";

export default function Step1({ formData, setFormData, nextStep }) {
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let formErrors = { name: "", email: "", phone: "" };

    if (!formData.name) formErrors.name = "This field is required.";
    if (!formData.email) {
      formErrors.email = "This field is required.";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Invalid email format.";
    }
    if (!formData.phone) formErrors.phone = "This field is required.";

    setErrors(formErrors);

    if (!formErrors.name && !formErrors.email && !formErrors.phone) {
      nextStep();
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-marineBlue bold text-3xl">
          Personal info
        </span>
        <span className="text-coolGray">
          Please provide your name, email address, and phone number.
        </span>
      </div>
      <div className="flex flex-col">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label className="text-marineBlue">Name</label>
              {errors.name && (
                <span className="text-strawberryRed text-sm medium">{errors.name}</span>
              )}
            </div>
            <input
              type="name"
              placeholder="e.g. Stephen King"
              className={`border outline-none medium text-marineBlue p-3 rounded-md focus:border-purplishBlue ${errors.name ? "border-strawberryRed" : ""
                }`}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label className="text-marineBlue">Email Address</label>
              {errors.email && (
                <span className="text-strawberryRed text-sm medium">{errors.email}</span>
              )}
            </div>
            <input
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              className={`border outline-none medium text-marineBlue p-3 rounded-md focus:border-purplishBlue ${errors.email ? "border-strawberryRed" : ""
                }`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label className="text-marineBlue">Phone Number</label>
              {errors.phone && (
                <span className="text-strawberryRed text-sm medium">{errors.phone}</span>
              )}
            </div>
            <input
              type="text"
              placeholder="e.g. +1 234 567 890"
              className={`border outline-none medium text-marineBlue p-3 rounded-md focus:border-purplishBlue ${errors.phone ? "border-red-500" : ""
                }`}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end items-end mt-16">
            <button className="bg-marineBlue px-5 py-3 w-fit rounded-lg hover:bg-opacity-80" type="submit">
              <span className="text-alabaster">Next Step</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}










// "use client";
// import React, { useState } from "react";


// export default function StepOne() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validateEmail = (email: string) => {
//     return /\S+@\S+\.\S+/.test(email);
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
//   }

//   return (
//     <>
//       <div className="flex flex-col gap-2">
//         <span className="text-marineBlue bold text-3xl">
//           Personal info
//         </span>
//         <span className="text-coolGray">
//           Please provide your name, email address, and phone number.
//         </span>
//       </div>
//       <div className="flex flex-col">
//         <form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
//           <div className="flex flex-col gap-1">
//             <div className="flex justify-between">
//               <label className="text-marineBlue">Name</label>
//               {errors.name && (
//                 <span className="text-strawberryRed text-sm medium">{errors.name}</span>
//               )}
//             </div>
//             <input
//               type="name"
//               placeholder="e.g. Stephen King"
//               className={`border outline-none medium text-marineBlue p-3 rounded-md focus:border-purplishBlue ${errors.name ? "border-strawberryRed" : ""
//                 }`}
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <div className="flex justify-between">
//               <label className="text-marineBlue">Email Address</label>
//               {errors.email && (
//                 <span className="text-strawberryRed text-sm medium">{errors.email}</span>
//               )}
//             </div>
//             <input
//               type="email"
//               placeholder="e.g. stephenking@lorem.com"
//               className={`border outline-none medium text-marineBlue p-3 rounded-md focus:border-purplishBlue ${errors.email ? "border-strawberryRed" : ""
//                 }`}
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <div className="flex justify-between">
//               <label className="text-marineBlue">Phone Number</label>
//               {errors.phone && (
//                 <span className="text-strawberryRed text-sm medium">{errors.phone}</span>
//               )}
//             </div>
//             <input
//               type="text"
//               placeholder="e.g. +1 234 567 890"
//               className={`border outline-none medium text-marineBlue p-3 rounded-md focus:border-purplishBlue ${errors.phone ? "border-red-500" : ""
//                 }`}
//               value={formData.phone}
//               onChange={(e) =>
//                 setFormData({ ...formData, phone: e.target.value })
//               }
//             />
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
