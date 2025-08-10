import Banner from "./components/Home/Banner";
import ReviewForm from "./components/Home/ReviewForm/ReviewForm";
import ReviewList from "./components/Home/ReviewList/ReviewList";
import "./index.css";
function App() {
  return (
    <>
      <Banner></Banner>
      <div>
        <ReviewForm></ReviewForm>
        {/* <ReviewList></ReviewList> */}
      </div>
    </>
  );
}

export default App;
