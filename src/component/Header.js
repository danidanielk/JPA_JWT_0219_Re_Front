import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const userid = new URLSearchParams(location.search).get("userid");

  const photoList = () => {
    window.location.assign("/post");
  };
  const photoHome = () => {
    window.location.assign("/home");
  };

  const [list, setList] = useState({});

  useEffect(() => {
    if (userid) {
      // axios.get(`http://localhost:8080/main/getprofile?userid=${userid}`,{withCredentials:true})
      axios
        .get(`http://localhost:8080/main/getprofile/${userid}`, {
          withCredentials: true,
        })
        .then((response) => {
          setList(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get("http://localhost:8080/main/getmyprofile", {
          withCredentials: true,
        })
        .then((response) => {
          setList(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      <div className="flex flex-col gap-1 text-center">
        <button
          className="block mx-auto bg-center bg-no-repeat bg-cover w-40 h-40 rounded-full border border-gray-500 shadow-lg "
          href=""
          style={{
            backgroundImage: `url(${list.profile})`,
          }}
        ></button>
        <p className="font-serif text-lg font-semibold mt-5 "></p>
        <span className="text-lg text-gray-500"></span>
        <span className="text-lg text-gray-500">Introduce : {list.introduce}</span>
      </div>

      <div className="flex justify-center items-center gap-2 my-3 mt-5">
        <div className="font-semibold text-center mx-4">
          <p className="text-black">{list.boardCount}</p>
          <span className="text-gray-500">Posts</span>
        </div>
        <div className="font-semibold text-center mx-4">
          <p className="text-black">. {list.nickname} .</p>
          <span className="text-gray-500">Nickname</span>
        </div>
        {/* <div className="font-semibold text-center mx-4">
          <p className="text-black">102sadfasdfaweawefawef</p>
          <span className="text-gray-500">Introduce</span>
        </div> */}
      </div>

      <div className="flex justify-center gap-2 my-5">
        <button className="bg-[#FF6A3D] px-10 py-2 rounded-full text-white shadow-lg">
          Follow
        </button>
        <button className="bg-white border border-gray-500 px-10 py-2 rounded-full shadow-lg">
          Message
        </button>
      </div>

      <div className="flex justify-between items-center">
        {/* <button className="w-full py-2 " onClick={photoHome}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button> */}
        {/* <button className="w-full py-2" onClick={photoList}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button> */}
      </div>
    </>
  );
}
export default Header;
