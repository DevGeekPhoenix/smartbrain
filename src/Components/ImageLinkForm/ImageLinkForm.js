const ImageLinkForm = ({ OnLinkInputChange, Detection }) => {
  return (
    <div className="detectionform">
      <div className="detectiontopbox">
        <h4 className="detectionformheading">
          {"Input Your Image Link For Detecting It's Face"}
        </h4>
        <div className="linkinputandbtn">
          <input className="linkinput" onChange={OnLinkInputChange} />
          <button className="detectbtn" onClick={Detection}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
