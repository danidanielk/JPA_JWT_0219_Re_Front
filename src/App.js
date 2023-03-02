import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChoicePost from "./route/ChoicePost";
// import Test from "./component/Test";
import Home from "./route/Home";
import Join from "./route/Join";
import Login from "./route/Login";
import Main from "./route/Main";
import MainHeader from "./route/MainHeader";
import Post from "./route/Post";
import PostSearch from "./route/PostSearch";
import PostUpload from "./route/PostUpload";
import ProfileUpdate from "./route/ProfileUpdate";

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/upload" element={<PostUpload />} />
        <Route path="/profile" element={<ProfileUpdate />} />
        <Route path="/postsearch" element={<PostSearch />} />
        <Route path="/choicepost" element={<ChoicePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
