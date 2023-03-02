import Footer from "../component/Footer";
import Header from "../component/Header";
import HomeComponent from "../component/HomComponent";

function Home() {
  return (
    <>
      <div className="max-w-2xl mx-auto ">
        <div className="px-3 py-2">
          {/*  */}
          <Header />
          {/*  */}

          <HomeComponent />
        </div>

        {/*  */}
        <Footer />
        {/*  */}
      </div>
    </>
  );
}
export default Home;
