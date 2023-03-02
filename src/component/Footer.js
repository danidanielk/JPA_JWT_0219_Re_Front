import { Cookies } from "react-cookie";
function Footer() {
  const upload = () => {
    window.location.assign("/upload");
  };
  const home = () => {
    window.location.assign("/home");
  };
  const profile = () => {
    window.location.assign("/profile");
  };
  const search = () => {
    window.location.assign("/postsearch");
  };
  const logout = () =>{
    const cookie = new Cookies()
    cookie.remove("ddoken")
    window.location.assign("/login")
  }

  return (
    <>
      <div className="flex justify-between items-center mt-4 bg-[#FF6A3D]  px-8 py-1 rounded-full text-gray-500 mb-10">
        <div className="px-7 pt-1 bg-white shadow-lg rounded-2xl">
          <div className="flex flex-row space-x-3">
            <div className="flex group">
              <button
                href="#"
                className="p-3 text-gray-900 hover:text-[#FF6A3D]"
                onClick={home}
              >
                <span className="flex flex-col items-center">
                  <i
                    className="mdi mdi-home-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                              transition-color duration-200"
                  ></i>

                  <span className="text-lg mb-2 transition-all duration-200">
                    Home
                  </span>

                  <span
                    className="h-2 w-2 rounded-full group-hover:bg-[#FF6A3D]
                                              transition-all duration-150 delay-100"
                  ></span>
                </span>
              </button>
            </div>

            <div className="flex group">
              <button
                href="#"
                className="p-3 text-gray-900 hover:text-[#FF6A3D] ml-8"
                onClick={search}
              >
                <span className="flex flex-col items-center">
                  <i
                    className="mdi mdi-compass-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                              transition-color duration-200"
                  ></i>

                  <span className="text-lg mb-2 transition-all duration-200">
                    Search
                  </span>

                  <span
                    className="h-2 w-2 rounded-full group-hover:bg-[#FF6A3D]
                                              transition-all duration-150 delay-100"
                  ></span>
                </span>
              </button>
            </div>

            <div className="flex group">
              <button
                href="#"
                className="p-3 text-yellow-800 hover:text-[#FF6A3D] ml-8"
                onClick={logout}
              >
                <span className="flex flex-col items-center">
                  <i
                    className="mdi mdi-layers-outline mdi-24px mx-1 text-gray-700 group-hover:text-gray-700
                                              transition-color duration-200"
                  ></i>

                  <span className="text-lg mb-2 transition-all duration-200">
                    Logout
                  </span>

                  <span
                    className="h-1 w-5 rounded-full bg-yellow-500 group-hover:bg-[#FF6A3D]
                                              hover:h-3 hover:w-3 transition-all duration-150 delay-100"
                  ></span>
                </span>
              </button>
            </div>

            <div className="flex group">
              <button
                href="#"
                className="p-3 text-gray-900 hover:text-[#FF6A3D] ml-8"
                onClick={upload}
              >
                <span className="flex flex-col items-center">
                  <i
                    className="mdi mdi-basket-plus-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                              transition-color duration-200"
                  ></i>

                  <span className="text-lg mb-2 transition-all duration-200">
                    Upload
                  </span>

                  <span
                    className="h-2 w-2 rounded-full group-hover:bg-[#FF6A3D]
                                              transition-all duration-150 delay-100"
                  ></span>
                </span>
              </button>
            </div>

            <div className="flex group">
              <button
                href="#"
                className="p-3 text-gray-900 hover:text-[#FF6A3D] ml-8"
                onClick={profile}
              >
                <span className="flex flex-col items-center">
                  <i
                    className="mdi mdi-account-circle-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                              transition-color duration-200"
                  ></i>

                  <span className="text-lg mb-2 transition-all duration-200">
                    Profile
                  </span>

                  <span
                    className="h-2 w-2 rounded-full group-hover:bg-[#FF6A3D]
                                              transition-all duration-150 delay-100"
                  ></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
