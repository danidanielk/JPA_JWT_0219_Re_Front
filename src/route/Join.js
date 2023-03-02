import axios from "axios";
import { useState } from "react";

function Join() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");

  var pw ;
  

  const onName = (e) => {
    setName(e.target.value);
  };
  const onEmail = (e) => {
    setEmail(e.target.value);
  };
  const onPhone = (e) => {
    setPhone(e.target.value);
  };
  const onPassword = (e) => {
    setpassword(e.target.value);
  };
  const onPassword2 = (e) => {
    setpassword2(e.target.value);
  };


  const pw1 = password;
  const pw2 = password2
  if (pw1 !== pw2){
    pw= "비밀번호가 일치하지 않습니다."
  }else{
    pw = null
  }

  const onLogin = () => {
    window.location.assign("/login");
  };
  const onJoin = () => {
    const joindata = new FormData();
    joindata.append("name", name);
    joindata.append("email", email);
    joindata.append("phone", phone);
    joindata.append("password", password);

    axios
      .post("http://localhost:8080/main/join", joindata, {
        headers: { "Content-Type": "application/json" },
      })
      .then((Response) => {
        console.log(Response);
        window.location.assign("/login");
      })
      .catch((error) => {
        console.log(error);
        alert("id 중복 & pw 확인");
      });
  };

  // .catch((error) => {
  //   console.log(error);
  // });

  return (
    <div className="mx-auto flex min-h-screen w-full bg-gray-900 p-4 flex items-center justify-center">
      <div className="bg-gray-900 py-6 px-10 sm:max-w-md w-full ">
        <div className="sm:text-3xl text-2xl font-semibold text-center text-[#FF6A3D]  mb-12">
          Registration
        </div>
        <div className="text-white">
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={name}
              onChange={onName}
            />
          </div>

          <div className="w-full mt-8 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={email}
              onChange={onEmail}
            />
          </div>
          <div className="w-full mt-8 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Phone"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={phone}
              onChange={onPhone}
            />
          </div>
          <div className="w-full mt-8 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={password}
              onChange={onPassword}
            />
          </div>
          <div className="w-full mt-8 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={password2}
              onChange={onPassword2}
            />
          </div>

<div className="flex justify-center">{pw}</div>
          <div className="flex">
            <input type="checkbox" className="border-[#FF6A3D] " value="" />
            <div className="px-3 text-gray-500">
              I accept terms & conditions
            </div>
          </div>

          <div className="flex justify-center my-6">
            <button
              className=" rounded-full  p-3 w-full sm:w-56   bg-[#FF6A3D] text-white text-lg font-semibold "
              onClick={onJoin}
            >
              Create Account
            </button>
          </div>
          <div className="flex justify-center ">
            <p className="text-gray-500">Already have an acount? </p>
            <button href="" className="text-sky-600 pl-2" onClick={onLogin}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Join;
