"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isYearly, setIsYearly] = useState(false);

  const toggleSwitch = () => {
    setIsYearly(!isYearly);
  };

  const plans = [
    {
      name: 'Arcade',
      monthlyPrice: '$9/mo',
      yearlyPrice: '$90/yr',
      yearlyBonus: '2 months free',
      icon: '/svgs/icon-arcade.svg',
    },
    {
      name: 'Advanced',
      monthlyPrice: '$12/mo',
      yearlyPrice: '$120/yr',
      yearlyBonus: '2 months free',
      icon: '/svgs/icon-advanced.svg',
    },
    {
      name: 'Pro',
      monthlyPrice: '$15/mo',
      yearlyPrice: '$150/yr',
      yearlyBonus: '2 months free',
      icon: '/svgs/icon-pro.svg',
    },
  ];

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
      console.log("Form submitted", formData);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-lightBlue">
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex w-[65%] h-[75%] bg-white rounded-xl p-4">
          <div className="flex flex-col w-[30%] h-full bg-sidebar bg-no-repeat bg-center bg-cover rounded-lg">
            <div className="flex flex-col gap-5 p-12">
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center w-10 h-10 border-2 border-lightBlue rounded-full bg-lightBlue">
                  <span className="text-marineBlue bold">1</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-nowrap text-lightGray">STEP 1</span>
                  <span className="text-nowrap text-alabaster bold">YOUR INFO</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center w-10 h-10 border-2 border-lightBlue rounded-full">
                  <span className="text-alabaster bold">2</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-nowrap text-lightGray">STEP 2</span>
                  <span className="text-nowrap text-alabaster bold">SELECT PLAN</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center w-10 h-10 border-2 border-lightBlue rounded-full">
                  <span className="text-alabaster bold">3</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-nowrap text-lightGray">STEP 3</span>
                  <span className="text-nowrap text-alabaster bold">ADD-ONS</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center w-10 h-10 border-2 border-lightBlue rounded-full">
                  <span className="text-alabaster bold">4</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-nowrap text-lightGray">STEP 4</span>
                  <span className="text-nowrap text-alabaster bold">SUMMARY</span>
                </div>
              </div>
            </div>
          </div>
          {/* Personal info */}
          {/* <div className="flex flex-col w-[70%] h-full justify-center mt-5 px-20 gap-10">
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
                    className={`border outline-none medium text-marineBlue p-3 rounded-md focus:border-purplishBlue ${
                      errors.name ? "border-strawberryRed" : ""
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
                    className={`border outline-none medium text-marineBlue p-3 rounded-md focus:border-purplishBlue ${
                      errors.email ? "border-strawberryRed" : ""
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
                    className={`border outline-none medium text-marineBlue p-3 rounded-md focus:border-purplishBlue ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-end items-end mt-16">
                  <button className="bg-marineBlue px-5 py-3 w-fit rounded-lg hover:bg-opacity-80" onSubmit={handleSubmit}>
                    <span className="text-alabaster">Next Step</span>
                  </button>
                </div>
              </form>
            </div>
          </div> */}

          {/* Select Plan */}
          {/* <div className="flex flex-col w-[70%] h-full justify-center mt-5 px-20 gap-10">
            <div className="flex flex-col gap-2">
              <span className="text-marineBlue bold text-3xl">
                Select your plan
              </span>
              <span className="text-coolGray">
                You have the option of monthly or yearly billing.
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row justify-between">
                    {plans.map((plan) => (
                      <div
                        key={plan.name}
                        className="flex flex-col h-48 w-40 justify-between border rounded-lg hover:cursor-pointer hover:border-purplishBlue active:bg-magnolia pt-5 p-3"
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
                  <div className="flex justify-center items-center w-full p-4 bg-magnolia rounded-lg gap-5">
                    <span className={`medium ${isYearly ? 'text-coolGray' : 'text-marineBlue'}`}>
                      Month
                    </span>
                    <div
                      className="flex items-center justify-center w-12 h-6 bg-marineBlue rounded-full cursor-pointer"
                      onClick={toggleSwitch}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ease-in-out ${isYearly ? 'translate-x-3' : '-translate-x-3'
                          }`}
                      ></div>
                    </div>
                    <span className={`medium ${isYearly ? 'text-marineBlue' : 'text-coolGray'}`}>
                      Year
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-end mt-16">
                  <button className="text-coolGray w-fit hover:text-marineBlue px-5 py-3">
                    Go back
                  </button>
                  <button className="bg-marineBlue px-5 py-3 w-fit rounded-lg hover:bg-opacity-80" onSubmit={handleSubmit}>
                    <span className="text-alabaster">Next Step</span>
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          {/* Pick addons */}
          <div className="flex flex-col w-[70%] h-full justify-center mt-5 px-20 gap-10">
            <div className="flex flex-col gap-2">
              <span className="text-marineBlue bold text-3xl">
                Pick add-ons
              </span>
              <span className="text-coolGray">
                Add-ons help enhance your gaming experience.
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center h-20 w-full border rounded-lg hover:border-purplishBlue justify-between p-5">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center justify-center bg-purplishBlue h-4 w-4 p-1 rounded-sm">
                        <Image
                          src="/svgs/icon-checkmark.svg"
                          width={15}
                          height={15}
                          alt="checkmark"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-marineBlue medium">
                          Online service
                        </span>
                        <span className="text-coolGray">
                          Access to multiplayer games
                        </span>
                      </div>
                    </div>
                    <span className="text-purplishBlue">
                      +$1/mo
                    </span>
                  </div>
                  <div className="flex items-center h-20 w-full border rounded-lg hover:border-purplishBlue justify-between p-5">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center justify-center bg-purplishBlue h-4 w-4 p-1 rounded-sm">
                        <Image
                          src="/svgs/icon-checkmark.svg"
                          width={15}
                          height={15}
                          alt="checkmark"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-marineBlue medium">
                          Larger storage
                        </span>
                        <span className="text-coolGray">
                          Extra 1TB of cloud storage
                        </span>
                      </div>
                    </div>
                    <span className="text-purplishBlue">
                      +$2/mo
                    </span>
                  </div>
                  <div className="flex items-center h-20 w-full border rounded-lg hover:border-purplishBlue justify-between p-5">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center justify-center bg-purplishBlue h-4 w-4 p-1 rounded-sm">
                        <Image
                          src="/svgs/icon-checkmark.svg"
                          width={15}
                          height={15}
                          alt="checkmark"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-marineBlue medium">
                          Customizable profile
                        </span>
                        <span className="text-coolGray">
                          Custom theme on your profile
                        </span>
                      </div>
                    </div>
                    <span className="text-purplishBlue">
                      +$2/mo
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-end mt-16">
                  <button className="text-coolGray w-fit hover:text-marineBlue px-5 py-3">
                    Go back
                  </button>
                  <button className="bg-marineBlue px-5 py-3 w-fit rounded-lg hover:bg-opacity-80" onSubmit={handleSubmit}>
                    <span className="text-alabaster">Next Step</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
