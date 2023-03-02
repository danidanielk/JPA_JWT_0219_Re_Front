import Footer from "../component/Footer";
import Header from "../component/Header";
import PostComponent from "../component/PostComponent";

function Post() {
  return (
    <>
      <div className="max-w-2xl mx-auto ">
        <div className="px-3 py-2">
          {/*  */}
          <Header />
          {/*  */}

          <PostComponent />
        </div>

        {/*  */}
        <Footer />
        {/*  */}
      </div>
    </>
  );
}
export default Post;
