import react from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ ImgURL, box }) => {
  return (
    <div className="detectedimg">
      <div>
        <img id="inputimg" style={{ height: "20rem" }} src={ImgURL} />
        {box.map((box) => {
          return (
            <div
              className="boundingbox"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export default FaceRecognition;
