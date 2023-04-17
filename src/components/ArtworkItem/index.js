import { getImgUrl, getAspect, getArtworkTitle } from "../../helpers";
import { Img } from "../";
import cn from "classnames";
import "./index.css";

const ArtworkItem = (props) => {
  const { thumbnail, imageId, artistTitle, iiifUrl, title } = props ?? {};

  const { height, width, alt_text } = thumbnail ?? {};

  return (
    <div className="artwork-item">
      <div className="artwork-item__preview">
        <div
          className={cn({
            "aspect-ratio": height && width,
          })}
          style={{ ["--aspect-ratio"]: getAspect(thumbnail) }}
        >
          <Img src={getImgUrl(iiifUrl, imageId)} alt_text={alt_text} />
        </div>
      </div>
      <p className="artwork-item__title">
        {getArtworkTitle(title, artistTitle)}
      </p>
    </div>
  );
};

export default ArtworkItem;
