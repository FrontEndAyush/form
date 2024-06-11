import { useState } from "react";

function App() {
  let [selectable, setSelectable] = useState(0);

  function selectAOption(num) {
    setSelectable(num);
  }
  return (
    <>
      <div className="flex md:justify-center md:items-center  h-screen">
        <div className="md:w-[42vw] pl-2  w-[100vw] h-fit md:pb-0 pb-5 md:h-[660px]   formBG">
          <h1 className="text-[26px] font-semibold mt-5 ml-7 ">Contact Us</h1>
          <form>
            {/* for firstname and lastname  */}
            <div className="flex flex-col  md:flex-row">
              <p className="ml-6 mt-4">
                <label htmlFor="" className="text-[16px] ">
                  Firstname <span className="ml-2">*</span>
                </label>
                <br />
                <input
                  type="text"
                  className="border-2 inp cursor-pointer px-3  py-[11px] mt-2 rounded-lg formBorderColor md:w-[17vw] w-[80vw]"
                  name=""
                  required
                  id="name"
                />
              </p>
              <p className="ml-6 mt-4">
                <label htmlFor="" className="text-[16px] ">
                  Lastname <span className="ml-2">*</span>
                </label>
                <br />
                <input
                  type="text"
                  className="border-2 px-3 inp  py-[11px] mt-2 rounded-lg formBorderColor  md:w-[17vw] w-[80vw]"
                  name=""
                  required
                  id="name"
                />
              </p>
            </div>
            {/* for email   */}
            <div>
              <p className="ml-6 mt-4">
                <label htmlFor="" className="text-[16px] ">
                  Email <span className="ml-2">*</span>
                </label>
                <br />
                <input
                  type="text"
                  className=" border-2  px-3 inp inp  py-[11px] mt-2 rounded-lg formBorderColor md:w-[36vw] w-[80vw]"
                  name=""
                  required
                  id="name"
                />
              </p>
            </div>

            {/* for query type  */}
            <div className="flex flex-col  md:flex-row">
              <p className="ml-6 mt-4 relative">
                <label htmlFor="" className="text-[16px] ">
                  Query Type <span className="ml-2">*</span>
                </label>
                <br />
                <input
                  type="radio"
                  className="absolute top-12 left-7"
                  name=""
                  onClick={() => selectAOption(1)}
                  checked={selectable == 1}
                  id=""
                />
                <span className="absolute top-[43px] left-[50px]">
                  General Query
                </span>
                <input
                  type="text"
                  className="border-2 inp cursor-pointer px-3  py-[11px] mt-2 rounded-lg formBorderColor md:w-[17vw] w-[80vw]"
                  name=""
                  required
                  disabled
                  id="name"
                />
              </p>
              <p className="ml-6 md:mt-4 mt-0  relative">
                <br />
                <input
                  type="radio"
                  className="absolute top-12 left-7"
                  name=""
                  onClick={() => selectAOption(2)}
                  checked={selectable == 2}
                  id=""
                />
                <span className="absolute top-[43px]  left-[50px]">
                  Supply Query
                </span>
                <input
                  type="text"
                  className="border-2 px-3 inp  py-[11px] mt-2 rounded-lg formBorderColor  md:w-[17vw] w-[80vw]"
                  name=""
                  disabled
                  
                  required
                  id="name"
                />
              </p>
            </div>

            {/* for message  */}
            <div>
              <p className="ml-6 mt-4">
                <label htmlFor="" className="text-[16px] ">
                  Message<span className="ml-2">*</span>
                </label>

                <br />
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  required
                  cols="50"
                  className="w-[80vw] md:w-[36vw]  py-2 px-3 mt-2 border-2 rounded-lg formBorderColor "
                ></textarea>
              </p>
              <br />
            </div>

            <div className="flex ml-6">
              <input type="radio" name="" id="" />
              <p className="text-[16px] ml-2">
                I consent to be connected by the team{" "}
                <span className="ml-2">*</span>
              </p>
            </div>

            {/* submit button  */}
            <div className="relative">
              <button
                type="submit"
                className="w-[80vw] md:w-[36vw] mt-4 ml-6 text-white py-3 rounded-lg bg-[#0c7d69]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
