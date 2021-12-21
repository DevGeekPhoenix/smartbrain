const ImageLinkForm = ({ OnLinkInputChange, Detection }) => {
  return (
    <div className="detectionform">
      <p>{"Input Your Image Link For Detecting It's Face"}</p>
      <div className="linkinputandbtn">
        <input className="linkinput" onChange={OnLinkInputChange} />
        <button className="detectbtn" onClick={Detection}>
          Detect
        </button>
      </div>
    </div>
  );
};
export default ImageLinkForm;
