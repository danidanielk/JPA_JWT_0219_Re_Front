import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PostComponent() {
  return (
    <>
      {/* 포스트 시작 */}
      <div
        className="story-ring flex justify-center items-center
                              relative cursor-pointer mb-6
                              transition-all duration-150 delay-100 mt-3"
      >
        <img
          className="h-full w-full rounded-3xl"
          src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffb%2Fd8%2Ff4%2Ffbd8f450f2bb84bf981fcafdb28356d7.jpg&type=sc960_832"
        />

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

      <div>내용</div>

      <div className="relative mt-3 mb-5">
        <input
          className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 rounded-lg placeholder:text-slate-600 font-medium pr-20"
          type="text"
          placeholder="Write a comment"
        />
      </div>
      <details>
        <summary>comment</summary>
        <div className="pt-2 pb-2 pl-3 w-full h-11  rounded-lg placeholder:text-slate-600 font-medium pr-20">
          <div> NickName : comment</div>
          <div> NickName : comment</div>
        </div>
      </details>

      <div className="flex mb-5 border-b pb-5 border-gray-900"></div>
      {/* 여기까지 카드 끝 */}

      {/* 카드시작 */}
      <div
        className="story-ring flex justify-center items-center
                              relative cursor-pointer mb-6
                              transition-all duration-150 delay-100"
      >
        <img
          className="h-full w-full rounded-3xl"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MTVfMjc5%2FMDAxNjYzMjI4NTkzMDM4.f0JZ3kSncOZUecrbGdhKq1HYEBrs1cRJfvWHTlD4mgMg.PVBKAP3xeFF3gFTJZu05RNNGZpwvLKhUhSGHzKpXMwQg.JPEG.chahong1%2FKakaoTalk_20220915_114942307_02.jpg&type=a340"
        />

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

      <div>내용</div>

      <div className="relative mt-3 mb-5">
        <input
          className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 rounded-lg placeholder:text-slate-600 font-medium pr-20"
          type="text"
          placeholder="Write a comment"
        />
      </div>
      <details>
        <summary>comment</summary>
        <div className="pt-2 pb-2 pl-3 w-full h-11  rounded-lg placeholder:text-slate-600 font-medium pr-20">
          <div> NickName : comment</div>
          <div> NickName : comment</div>
        </div>
      </details>

      <div className="flex mb-5 border-b pb-5 border-gray-900"></div>
      {/* 여기까지 카드 끝 */}
    </>
  );
}
export default PostComponent;
