import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//     return (
//       <>
//         <div className="grid grid-cols-3 gap-2 my-3 border-2">
//           <button
//             className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg"
//             href=""
//             style={{
//               backgroundImage:
//                 "url('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDNfMjk4%2FMDAxNjU0MjQ3MDAzNzQ1.vCVJIVyu7Lbo7HuYsWykLA7hPT0UWPLEf-kKp482Bjsg.7iaBOlRGqUTIC2GwKsPTT9S3Lm-MYC1jIp8wGCLaF1Mg.JPEG.niceguy00%2FSeul_%25BD%25BA%25C5%25B2%25C0%25AF_%25BD%25C5%25BC%25BC%25B0%25E605.jpg&type=sc960_832')",
//             }}
//           ></button>
//         </div>
//       </>
//     );

function HomeComponent() {
  const location = useLocation();
  const getUserId = new URLSearchParams(location.search).get("userid");

  const handleClick = (userId, boardId) => {
    window.location.assign(`/choicepost/?userid=${userId}&boardid=${boardId}`);
  };

  const [list, setList] = useState([]);

  useEffect(() => {
  
    console.log(getUserId)
    if (getUserId !== null) {
      axios
        .get(`http://localhost:8080/board/home/${getUserId}`, { withCredentials: true })
        .then((response) => {
          setList(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } 
    else {
      axios
        .get("http://localhost:8080/board/myhome", {
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
      <div className="grid grid-cols-3 gap-2 my-3 border-2">
        {list.map((value) => (
          <button
            value={value.userid}
            onClick={() => handleClick(value.userId, value.boardId)}
            key={value.email}
            className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg"
            style={{
              backgroundImage: `url(${value.photo})`,
            }}
          ></button>
        ))}
      </div>
    </>
  );
}

export default HomeComponent;
