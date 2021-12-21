import "./App.css";
import background from "../src/Components/face (1) (2).mp4";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import { Component } from "react";
import Clarifai from "clarifai";
import SideBar from "./Components/SideBar/SideBar";
import SignInAndUp from "./Components/SignInAndUp/SignInAndUp";

const app = new Clarifai.App({
  apiKey: "93ced7709c8a48e8b99270c21b466389",
  apiEndpoint: "https://api.clarifai.com",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      LinkInput: "",
      ImgURL: "",
      box: [],
      route: "SignInAndUp",
    };
  }
  CalcFaceLocation = (data) => {
    const image = document.getElementById("inputimg");
    const width = image.width;
    const height = image.height;
    return data.outputs[0].data.regions.map((face) => {
      const clarifaiFace = face.region_info.bounding_box;
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
      };
    });
  };
  displayFaceBox = (box) => {
    this.setState({ box: box });
  };
  OnLinkInputChange = (event) => {
    this.setState({ LinkInput: event.target.value });
  };
  Detection = () => {
    this.setState({ ImgURL: this.state.LinkInput });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.LinkInput)
      .then((response) => {
        this.displayFaceBox(this.CalcFaceLocation(response)).catch((err) =>
          console.log(err)
        );
      });
  };

  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  render() {
    return (
      <div className="App">
        <video className="videoTag" autoPlay loop muted>
          <source src={background} type="video/mp4" />
        </video>
        {this.state.route === "SignInAndUp" ? (
          <SignInAndUp onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <SideBar onRouteChange={this.onRouteChange} />
            <ImageLinkForm
              Detection={this.Detection}
              OnLinkInputChange={this.OnLinkInputChange}
            />
            <FaceRecognition box={this.state.box} ImgURL={this.state.ImgURL} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
