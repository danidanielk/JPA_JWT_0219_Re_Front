import ChoicePostComponent from "../component/ChoicePostComponent"
import Footer from "../component/Footer"
import Header from "../component/Header"

function ChoicePost(){
return(

    <>
       <div className="max-w-2xl mx-auto ">
        <div className="px-3 py-2">
          {/*  */}
          <Header />
          {/*  */}

          <ChoicePostComponent />
        </div>

        {/*  */}
        <Footer />
        {/*  */}
      </div>
    </>
)


}
export default ChoicePost
