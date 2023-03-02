import { getValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ChoicePostComponent() {
  function click() {
    window.location.assign(`/home?userid=${userId}`);
  }

  const location = useLocation();
  const userId = new URLSearchParams(location.search).get("userid");
  const boardId = new URLSearchParams(location.search).get("boardid");
  const [data, setData] = useState({});
  const [comment, setComment] = useState("");

  const onComment = (e) => {
    setComment(e.target.value);
  };

  const commentClick = () => {
    const commentData = new FormData();

    commentData.append("comment", comment);
    axios
      .post(
        `http://localhost:8080/board/comment?userid=${userId}&boardid=${boardId}`,
        commentData,{withCredentials:true}
      )
      .then((value) => {
        console.log(value);
        window.location.assign(
        `/choicepost/?userid=${userId}&boardid=${boardId}`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(userId);
    console.log(boardId);
    axios
      .get(
        `http://localhost:8080/board/getpost?userid=${userId}&boardid=${boardId}`
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);
  // const commentList = data.commentList || [];
  const cc = data.commentList || [];
  return (
    <>
      <>
        <button
          className="mb-5 mt-10 font-serif text-lg font-semibold"
          onClick={() => click()}
        >
          - {data.email}
        </button>
        <div
          className="story-ring flex justify-center items-center
                              relative cursor-pointer mb-6
                              transition-all duration-150 delay-100"
        >
          <img className="h-full w-full  rounded-3xl" src={data.photo} />

          <div
            className="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                                  hover:backdrop-blur-xl transition-all duration-150 delay-100"
          >
            <div className="flex text-gray-600 font-light text-lg text-gray-50 mx-6">
              <button className="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2"></button>
              ♡
            </div>

            <div className="flex text-gray-600 font-light text-lg text-gray-50">
              <i className="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2"></i>
              좋아요 1.2k
            </div>
          </div>
        </div>

        <div className="mb-5 mt-10 ">{data.contents}</div>

        <div className="mt-12 flex items-center border-2 mb-6 py-2 px-3 rounded-2xl">
          <input
            className="pl-2 w-full outline-none border-none"
            type="text"
            value={comment}
            id="subTitle"
            onChange={onComment}
            placeholder="Search UserEmail"
          />
          <button onClick={commentClick}>Click</button>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-2 my-3 border-2">
            <h1 className="ml-5 mt-1  font-serif text-lg font-semibold">
              Comment List
            </h1>
            <div className="ml-5 mb-5">
              {cc.map((comment, index) => (
                <p className="border-b mt-1" key={index}>
                  {comment}
                </p>
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
export default ChoicePostComponent;
