import react from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ ImgURL, box }) => {
  return (
    <div>
      <img id="inputimg" src={ImgURL} />
      <div
        className="boundingbox"
        style={{
          top: box.top_row,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
      ></div>
    </div>
  );
};
export default FaceRecognition;
