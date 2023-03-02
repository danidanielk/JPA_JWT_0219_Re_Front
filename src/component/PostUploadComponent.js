import axios from "axios";
import { useEffect, useState } from "react";

function PostUploadComponent() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(false);
  //파일 이미지 상태에 저장 변수
  const [selectFile, setSelectFile] = useState("");

  // 여기서부터
  useEffect(() => {
    setLoading(true);
  }, [imageSrc]);

  const onImage = (e) => {
    setSelectFile(e.target.files[0]);

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
  };
  // 여기까지 이미지 업로드시 바로 보여주는 구간.

  const onTitle = (e) => {
    setTitle(e.target.value);
  };

  const onContents = (e) => {
    setContents(e.target.value);
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("file", selectFile);
    formData.append("title", title);
    formData.append("content", contents);

    axios
      .post("http://localhost:8080/board/PostUpload", formData, {
        withCredentials: true,
      })
      .then((value) => {
        console.log(value);
        window.location.assign("/home")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="mt-12 flex items-center border-2 mb-6 py-2 px-3 rounded-2xl">
        <input
          className="pl-2 w-full outline-none border-none"
          type="text"
          value={title}
          id="title"
          onChange={onTitle}
          placeholder="title"
        />
      </div>

      <div className="flex flex-col-1 gap-1 text-center mt-14">
        <input
          className="mt-7 flex items-center border-2 mb-6 py-2 px-3 rounded-2xl"
          placeholder="이미지 선택"
          type="file"
          onChange={onImage}
        ></input>

        {loading && (
          <img
            src={imageSrc}
            alt=""
            className=" bg-center bg-no-repeat bg-cover w-60 h-60 border border-gray-500 shadow-lg ml-12 mt-1"
          />
        )}
      </div>
      <div className="mt-5 mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-[#07074D]"
        ></label>
        <textarea
          rows="4"
          name="message"
          id="message"
          value={contents}
          onChange={onContents}
          placeholder="contents"
          className="mt-12 w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      {/*  */}
      <div className="mt-12 text-center border-2 mb-6 py-2 px-3 rounded-2xl bg-gray-900">
        <button className="text-white hover:text-[#FF6A3D]" onClick={onSubmit}>
          제출
        </button>
      </div>
      {/*  */}
    </>
  );
}
export default PostUploadComponent;
