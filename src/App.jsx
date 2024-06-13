import { useState } from "react";

function App() {
  let [selectable, setSelectable] = useState(0);
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [submitFormValue, setSubmitFormValue] = useState(0);
  let [isTrue, setIsTrue] = useState(false);

  function selectAOption(num) {
    setSelectable(num);
  }
  function forFirstNameFunc(value) {
    setFirstName(value);
  }
  function forLastNameFunc(value) {
    setLastName(value);
  }
  function forEmailFunc(value) {
    setEmail(value);
  }
  function forMessageFunc(value) {
    setMessage(value);
  }
  function submitTheForm(e, value) {
    e.preventDefault();

    setSubmitFormValue(value);
  }

  return (
    <>
      <div className="flex md:justify-center md:items-center  h-screen">
        <div className="md:w-[42vw] pl-2  w-[100vw] h-fit md:pb-0 pb-5 md:h-[730px]   formBG">
          <h1 className="text-[26px] font-semibold mt-5 ml-7 ">Contact Us</h1>
          <form onSubmit={(e) => submitTheForm(e, 1)}>
            {/* for firstname and lastname  */}
            <div className="flex flex-col  md:flex-row">
              <p className="ml-6 mt-4 relative">
                <label htmlFor="" className="text-[16px] ">
                  Firstname <span className="ml-2">*</span>
                </label>
                <br />
                <input
                  type="text"
                  className={` ${
                    submitFormValue == 1 && firstName == "" ? "borderIn" : ""
                  }  border-2   inp cursor-pointer px-3   py-[11px] mt-2 rounded-lg formBorderColor md:w-[17vw] w-[80vw]`}
                  name=""
                  onChange={(e) => forFirstNameFunc(e.target.value)}
                  id="name"
                />
                <br />

                <span
                  className={`absolute  text-red-500 mt-1 text-[14px]  ${
                    submitFormValue == 1 && firstName == ""
                      ? "block "
                      : "hidden"
                  } mb-4`}
                >
                  This field is empty
                </span>
              </p>
              <p className="ml-6 mt-4">
                <label htmlFor="" className="text-[16px] ">
                  Lastname <span className="ml-2">*</span>
                </label>
                <br />
                <input
                  type="text"
                  className={`border-2 px-3 inp  py-[11px] mt-2 rounded-lg ${
                    submitFormValue == 1 && lastName == "" ? "borderIn" : ""
                  } formBorderColor  md:w-[17vw]  w-[80vw]`}
                  name=""
                  onChange={(e) => forLastNameFunc(e.target.value)}
                  id="name"
                />{" "}
                <br />
                <span
                  className={`absolute  text-red-500 text-[14px]  ${
                    submitFormValue == 1 && lastName == "" ? "block" : "hidden"
                  } mb-4`}
                >
                  This field is empty
                </span>
              </p>
            </div>
            {/* for email   */}
            <div>
              <p className="ml-6 mt-6">
                <label htmlFor="" className="text-[16px] ">
                  Email <span className="ml-2">*</span>
                </label>
                <br />
                <input
                  type="text"
                  className={`border-2  ${
                    submitFormValue == 1 && lastName == "" ? "borderIn" : ""
                  }  px-3 inp inp  py-[11px] mt-2 rounded-lg formBorderColor md:w-[36vw] w-[80vw]`}
                  name=""
                  onChange={(e) => forEmailFunc(e.target.value)}
                  id="name"
                />
                <br />
                <span
                  className={`absolute mt-1  text-red-500 text-[14px]  ${
                    submitFormValue == 1 && email == "" ? "block" : "hidden"
                  } mb-4`}
                >
                  This field is empty
                </span>
              </p>
            </div>

            {/* for query type  */}
            <div className="flex flex-col  md:flex-row">
              <p className="ml-6 mt-7 relative">
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
                  disabled
                  id="name"
                />
                <span
                  className={`absolute mt-1 text-red-500 text-[14px]  ${
                    submitFormValue == 1 && selectable == 0 ? "block" : "hidden"
                  } mb-4`}
                >
                  Atleast select one
                </span>
              </p>
              <p className="ml-6 md:mt-7 mt-0  relative">
                <br />
                <input
                  type="radio"
                  className="absolute top-12 left-7"
                  name=""
                  onClick={() => selectAOption(2)}
                  checked={selectable == 2}
                  id=""
                />
                <span className="absolute mt-1 top-[43px]  left-[50px]">
                  Supply Query
                </span>
                <input
                  type="text"
                  className="border-2 px-3 inp  py-[11px] mt-2 rounded-lg formBorderColor  md:w-[17vw] w-[80vw]"
                  name=""
                  disabled
                  id="name"
                />
              </p>
            </div>

            {/* for message  */}
            <div>
              <p className="ml-6 mt-7">
                <label htmlFor="" className="text-[16px] ">
                  Message<span className="ml-2">*</span>
                </label>

                <br />
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  onChange={(e) => forMessageFunc(e.target.value)}
                  cols="50"
                  className={`w-[80vw] md:w-[36vw]  py-2 px-3 mt-2 border-2 rounded-lg formBorderColor ${
                    submitFormValue == 1 && message == "" ? "borderIn" : ""
                  } `}
                ></textarea>
                <br />
                <span
                  className={`absolute -mt-1  text-red-500 text-[14px] ${
                    submitFormValue == 1 && message == "" ? "block" : "hidden"
                  } mb-4`}
                >
                  This field is empty
                </span>
              </p>
              <br />
            </div>

            <div className="flex ml-6 mt-4">
              <input
                type="radio"
                onClick={() => setIsTrue(true)}
                name=""
                id=""
              />
              <p className="text-[16px] ml-2">
                I consent to be connected by the team{" "}
                <span className="ml-2">*</span>
              </p>
            </div>
            <span
              className={`absolute -mt-0 text-red-500  ml-6 text-[14px]  ${
                submitFormValue == 1 && isTrue == false ? "block" : "hidden"
              } mb-4`}
            >
              Click to agree.
            </span>

            {/* submit button  */}
            <div className="relative mt-7">
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
