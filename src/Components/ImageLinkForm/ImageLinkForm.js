const ImageLinkForm = ({ OnLinkInputChange, Detection }) => {
  return (
    <div>
      <p>{"This Magic will detect faces in your pictures. Giv it a try"}</p>
      <div>
        <input onChange={OnLinkInputChange} />
        <button onClick={Detection}>Detect</button>
      </div>
    </div>
  );
};
export default ImageLinkForm;
