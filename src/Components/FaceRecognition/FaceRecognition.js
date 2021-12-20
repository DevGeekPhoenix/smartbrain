import react from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ ImgURL, box }) => {
  return (
    <div>
      <div style={{ position: "absolute" }}>
        <img id="inputimg" src={ImgURL} />
        <div
          className="boundingbox"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};
export default FaceRecognition;
