function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[600px] h-[600px] formBG">
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
                  className="border  py-[11px] mt-2 rounded-lg formBorderColor px-10"
                  name=""
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
                  className="border  py-[11px] mt-2 rounded-lg formBorderColor px-10"
                  name=""
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
                  className="border  py-[11px] mt-2 rounded-lg formBorderColor px-[180px]"
                  name=""
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
                  id=""
                />
                <span className="absolute top-11 text-[16px] left-10">
                  Supply Query
                </span>
                <input
                  type="text"
                  className="border  py-[11px] mt-2 rounded-lg formBorderColor px-10"
                  name=""
                  id="name"
                />
                <input
                  type="radio"
                  className="absolute bottom-4 left-5 "
                  name=""
                  id=""
                />
                <span className="absolute top-11 text-[16px] left-10">
                  
                </span>
                <input
                  type="text"
                  className="border  py-[11px] mt-2 rounded-lg formBorderColor px-10"
                  name=""
                  id="name"
                />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
