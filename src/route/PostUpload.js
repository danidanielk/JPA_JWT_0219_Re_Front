import Footer from "../component/Footer";
import Header from "../component/Header";
import PostUploadComponent from "../component/PostUploadComponent";

function PostUpload() {
  return (
    <>
      <div className="max-w-2xl mx-auto ">
        <div className="px-3 py-2">
          {/*  */}
          <Header />
          {/*  */}

          <PostUploadComponent />
        </div>

        {/*  */}
        <Footer />
        {/*  */}
      </div>
    </>
  );
}
export default PostUpload;
