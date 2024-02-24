import "./App.css";
import img1 from "../src/img/mexico-city.png";
import "../src/style.css";
import img2 from "../src/img/rio-janeiro.png";

function App() {
  return (
    <div>
      <div
        style={{
          margin: "42px",
          border: "solid 1px black",
          maxWidth: "100vw",
        }}
      >
        <h1 className="title-red">Your name here</h1>
        <br />
        <br />
        <div className="img">
          <img src="img/istanbul.png" className="rounded " alt="" />
          <img src={img1} className="rounded" alt="" />
          <img src={img2} className="rounded" alt="" />
        </div>
        <br />
      </div>
      <br />
      <video width={320} height={240} style={{ marginLeft: "513px" }} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
