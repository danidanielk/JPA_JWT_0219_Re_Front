import axios from "axios";
import { useEffect, useState } from "react";

function ProfileUpdateComponent() {
  const [nickname, setSubtitle] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState("");

  useEffect(() => {
    setLoading(true);
  }, [imageSrc]);
  const onImage = (e) => {
    setProfile(e.target.files[0]);

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
  };

  const onNickname = (e) => {
    setSubtitle(e.target.value);
  };

  const onIntroduce = (e) => {
    setIntroduce(e.target.value);
  };

  const submit = () => {
    const data = new FormData();
    const homeDto = {
      nickname: nickname,
      introduce: introduce,
    };
    // data.append("homeDto", JSON.stringify(homeDto));
    data.append("profile", profile);
    const json = JSON.stringify(homeDto);
    const blob = new Blob([json], { type: "application/json" });
    data.append("homeDto", blob);
    // data.append("nickname",nickname)
    // data.append("introduce",introduce)

    axios
      .patch("http://localhost:8080/main/profileupdate", data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((value) => {
        console.log(value);
        window.location.assign("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="focus:outline-none md:text-2xl text-xl text-center text-gray-800 font-extrabold mb-10 pt-4 mt-32">
        Profile Update
      </div>

      <div className="flex flex-col-1 gap-1 text-center">
        <input
          className="mt-3 flex items-center border-2 mb-6 py-2 px-3 rounded-2xl"
          placeholder="이미지 선택"
          type="file"
          onChange={onImage}
        ></input>

        {loading && (
          <img
            src={imageSrc}
            alt=""
            className="block mx-auto bg-center bg-no-repeat bg-cover w-40 h-40 rounded-full border border-gray-500 shadow-lg "
          />
        )}
      </div>

      <div className="mt-12 flex items-center border-2 mb-6 py-2 px-3 rounded-2xl">
        <input
          className="pl-2 w-full outline-none border-none"
          type="text"
          value={nickname}
          id="subTitle"
          onChange={onNickname}
          placeholder="Nickname"
        />
      </div>

      <div className="mt-12 flex items-center border-2 mb-6 py-2 px-3 rounded-2xl">
        <input
          className="pl-2 w-full outline-none border-none"
          type="text"
          value={introduce}
          id="subTitle"
          onChange={onIntroduce}
          placeholder="Introduce"
        />
      </div>

      <div className="mt-12 text-center border-2 mb-6 py-2 px-3 rounded-2xl bg-gray-900">
        <button className="text-white hover:text-[#FF6A3D]" onClick={submit}>
          제출
        </button>
      </div>
    </>
  );
}
export default ProfileUpdateComponent;
