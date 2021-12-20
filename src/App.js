import "./App.css";
import Rank from "./Components/Rank/Rank";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Logo from "./Components/Logo/Logo";
import Navigation from "./Components/Navigation/Navigation";
import react, { Component } from "react";
import Clarifai from "clarifai";

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
      box: {},
    };
  }
  CalcFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    // console.log(clarifaiFace);
    const image = document.getElementById("inputimg");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };
  displayFaceBox = (box) => {
    this.setState({ box: box });
  };
  OnLinkInputChange = (event) => {
    this.setState({ LinkInput: event.target.value });
  };
  Detection = () => {
    this.setState({ imgURL: this.state.LinkInput });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.LinkInput)
      .then((response) => {
        // console.log(response);
        this.displayFaceBox(this.CalcFaceLocation(response)).catch((err) =>
          console.log(err)
        );
      });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          Detection={this.Detection}
          OnLinkInputChange={this.OnLinkInputChange}
        />
        <FaceRecognition box={this.state.box} ImgURL={this.state.ImgURL} />
      </div>
    );
  }
}

export default App;
