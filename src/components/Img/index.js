import { WHITE_PIXEL } from "../../constants";
import "./index.css";

const Img = ({ src, alt_text }) => {
  return (
    <img
      loading="lazy"
      alt={alt_text}
      title={alt_text}
      src={src}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = WHITE_PIXEL;
      }}
    />
  );
};

export default Img;
