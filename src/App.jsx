import { useState } from "react";

function App() {
  let [selectable, setSelectable] = useState(0);

  function selectAOption(num) {
    setSelectable(num);
  }
  return (
    <>
      <div className="flex md:justify-center md:items-center p-6 h-screen">
        <div className="md:w-[43vw] w-[100vw] h-[660px]   formBG">
          <h1 className="text-[26px] font-semibold mt-5 ml-7 ">Contact Us</h1>
          <form>
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

            <div>
              <div className="ml-6 mt-4 flex">
                <label htmlFor="" className="text-[16px] ">
                  Query Type <span className="ml-2">*</span>
                </label>
                <br />
                <input
                  type="text"
                  className="border-2 inp cursor-pointer px-3  py-[11px] mt-2 rounded-lg formBorderColor w-[34vw] "
                  name=""
                  required
                  id="name"
                />
              </div>

              <div className="ml-6 ">
                <input
                  type="text"
                  className="border-2 inp cursor-pointer px-3  py-[11px] mt-2 rounded-lg formBorderColor w-[34vw] "
                  name=""
                  required
                  id="name"
                />
              </div>
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
            <button
              type="submit"
              className="w-[80vw] md:w-[36vw] mt-4 ml-6 text-white py-3 rounded-lg bg-[#0c7d69]"
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
