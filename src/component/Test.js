// import axios from "axios";
// import { useEffect, useState } from "react";
// // import { useCookie } from "react-cookie";
// import Test2 from "./Test2";

// function Test() {

//   const [list, setList] = useState([]);

//   useEffect(() => {
  
//     axios
//       .get("http://localhost:8080/main/validation", {
//         withCredentials: true
//       })
//       .then((response) => {
//         setList(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//       <>
//         {list.map((value) => {
//           return <Test2 list={value} />;
//         })}
//       </>
//     </>
//   );
// }
// export default Test;
