import { useState } from "react";

function App() {
  let [selectable, setSelectable] = useState(0);

  function selectAOption(num) {
    setSelectable(num);
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[600px] h-[650px] formBG">
          <h1 className="text-[26px] font-semibold mt-5 ml-7 ">Contact Us</h1>
          <form>
            <div className="flex">
              <p className="ml-6 mt-4">
                <label htmlFor="" className="text-[16px] ">
                  Firstname <span className="ml-2">*</span>
                </label>
                <br />
                <input
                  type="text"
                  className="border-2 inp cursor-pointer px-3  py-[11px] mt-2 rounded-lg formBorderColor w-[17vw]"
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
                  className="border-2 px-3 inp  py-[11px] mt-2 rounded-lg formBorderColor  w-[17vw]"
                  name=""
                  required
                  id="name"
                />
              </p>
            </div>

            <div>
              <p className="ml-6 mt-4">
                <label htmlFor="" className="text-[16px] ">
                  Email <span className="ml-2">*</span>
                </label>
                <br />
                <input
                  type="text"
                  className=" border-2  px-3 inp inp  py-[11px] mt-2 rounded-lg formBorderColor  w-[36vw]"
                  name=""
                  required
                  id="name"
                />
              </p>
            </div>

            <div>
              <p className="ml-6 mt-4 relative">
                <label htmlFor="" className="text-[16px] ">
                  Query Type<span className="ml-2">*</span>
                </label>
                <br />

                <input
                  type="radio"
                  className="absolute bottom-4 left-5 "
                  name=""
                  
                  checked={selectable == 1}
                  onClick={() => selectAOption(1)}
                  id=""
                />
                <span className="absolute top-11 text-[16px] left-10">
                  Supply Query
                </span>
                <input
                  type="text"
                  className="border-2 inp   py-[11px] mt-2 rounded-lg formBorderColor w-[17vw]"
                  name=""
                  disabled
                  id="name"
                />
                <input
                  type="radio"
                  className="absolute bottom-4 left-[310px] "
                  name=""
                  checked={selectable == 2}
                  onClick={() => selectAOption(2)}
                  id=""
                />
                <span className="absolute top-11 text-[16px] left-[330px]">
                  General Query
                </span>
                <input
                  type="text"
                  className="border-2 inp  ml-[24px]  py-[11px] mt-2 rounded-lg formBorderColor w-[17vw]"
                  name=""
                  disabled
                  id="name"
                />
              </p>
            </div>

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
                  className="w-[36vw]  py-2 px-3 mt-2 border-2 rounded-lg formBorderColor "
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
            <button
              type="submit"
              className="w-[36vw] mt-4 ml-6 text-white py-3 rounded-lg bg-[#0c7d69]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
