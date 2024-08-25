import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-lightBlue">
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex w-[65%] h-[75%] bg-white rounded-xl p-4">
          <div className="flex flex-col w-[30%] h-full bg-sidebar bg-no-repeat bg-center bg-cover rounded-lg">
            <div className="flex flex-col gap-5 p-12">
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center w-10 h-10 border-2 border-lightBlue rounded-full">
                  <span className="text-alabaster">1</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-nowrap text-lightGray">STEP 1</span>
                  <span className="text-nowrap text-alabaster medium">YOUR INFO</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center w-10 h-10 border-2 border-lightBlue rounded-full">
                  <span className="text-alabaster">2</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-nowrap text-lightGray">STEP 2</span>
                  <span className="text-nowrap text-alabaster medium">SELECT PLAN</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center w-10 h-10 border-2 border-lightBlue rounded-full">
                  <span className="text-alabaster">3</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-nowrap text-lightGray">STEP 3</span>
                  <span className="text-nowrap text-alabaster medium">ADD-ONS</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center w-10 h-10 border-2 border-lightBlue rounded-full">
                  <span className="text-alabaster">4</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-nowrap text-lightGray">STEP 4</span>
                  <span className="text-nowrap text-alabaster medium">SUMMARY</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
