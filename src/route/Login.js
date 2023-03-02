import axios from "axios";
import { useState } from "react";
import { Cookies } from "react-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onJoin = () => {
    window.location.assign("/join");
  };

  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = () => {
    const logindata = new FormData();
    logindata.append("email", email);
    logindata.append("password", password);
    axios
      .post("http://localhost:8080/main/login", logindata,{headers:{"Content-Type":"application/json"}},{withCredentials:true})
      .then((response) => {
        const token = response.data;
        const cookies = new Cookies();
        cookies.set("ddoken", token, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          path: "/",
        });
        console.log(cookies);

        window.location.assign("/home");
      })
      

      .catch((error) => {
        alert("id,pw 확인");
        console.log(error.HttpStatusCode);
        // console.log(error);
      });
  };

  return (
    <>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Log In</div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Email or Username"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={email}
              onChange={onEmail}
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={password}
              onChange={onPassword}
            />
          </div>

          <button
            className="transform rounded-sm bg-[#FF6A3D] py-2 font-bold duration-300 hover:bg-indigo-400"
            onClick={onLogin}
          >
            LOG IN
          </button>

          <button
            href="#"
            className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
          >
            FORGOT PASSWORD?
          </button>

          <p className="text-center text-lg">
            No account?
            <button
              href="#"
              className="font-medium text-[#FF6A3D] underline-offset-4 hover:underline"
              onClick={onJoin}
            >
              Create One
            </button>
          </p>
        </section>
      </main>
    </>
  );
}
export default Login;
