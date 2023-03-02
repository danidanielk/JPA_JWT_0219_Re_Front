import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

function PostSearchComponent() {
  const click = (boardId, userId) => {
    window.location.assign(`/choicepost/?userid=${userId}&boardid=${boardId}`);
  };

  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchClick = () => {
    const searchData = new FormData();
    searchData.append("search", search);

    axios
      .post("http://localhost:8080/board/getallboard", searchData)
      .then((response) => {
        setList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {


    axios
      .post("http://localhost:8080/board/getallboard")
      .then((response) => {
        setList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, []);

  return (
    <>
      <div className="mt-12 flex items-center border-2 mb-6 py-2 px-3 rounded-2xl">
        <input
          className="pl-2 w-full outline-none border-none"
          type="text"
          value={search}
          id="subTitle"
          onChange={onSearch}
          placeholder="Search UserEmail"
         
        />
        <button onClick={searchClick}>Click</button>
      </div>
      <div
        className="grid grid-cols-3 gap-2 my-10 border-2 h-full"
        // style={{ overflow: "scroll" }}
      >
        {list.map((value) => (
          <button
            key={value.boardid}
            onClick={() => click(value.boardId, value.userId)}
            className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg"
            style={{
              backgroundImage: `url(${value.photo})`,
              overflow: "auto",
            }}
          ></button>
        ))}
      </div>
    </>
  );
}
export default PostSearchComponent;
