
import {  MoonLoader } from "react-spinners";

function Loader() {
  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
    margin: "5",
    padding: "0",
     // Optional: Add a background color
  };

  return (
    <div style={loaderStyle}>
      <MoonLoader color="#ff0000" size={50} />
    </div>
  );
}

export default Loader;
