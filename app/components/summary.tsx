export default function Summary(formData, prevStep) {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle final form submission
    console.log("Form submitted", formData);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-marineBlue bold text-3xl">
          Finishing up
        </span>
        <span className="text-coolGray">
          Double-check everything looks OK before confirming.
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-4 p-5 bg-magnolia rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="medium text-marineBlue">
                  Arcade (Monthly)
                </span>
                <span className="w-fit underline text-coolGray hover:text-purplishBlue cursor-pointer">
                  Change
                </span>
              </div>
              <span className="bold text-marineBlue">
                $9/mo
              </span>
            </div>
            <hr className="w-full text-coolGray" />
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-coolGray">
                  Online Service
                </span>
              </div>
              <span className="text-marineBlue">
                + $1/mo
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-coolGray">
                  Larger Storage
                </span>
              </div>
              <span className="text-marineBlue">
                + $2/mo
              </span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-coolGray">
                  Total (per month)
                </span>
              </div>
              <span className="bold text-purplishBlue text-xl">
                + $12/mo
              </span>
            </div>
          </div>
          <div className="flex justify-between items-end mt-16">
            <button className="text-coolGray w-fit hover:text-marineBlue px-5 py-3">
              Go back
            </button>
            <button onClick={handleSubmit} className="bg-purplishBlue px-5 py-3 w-fit rounded-lg hover:bg-opacity-80">
              <span className="text-alabaster">Confirm</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}