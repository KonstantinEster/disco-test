import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import * as sanitizeHtml from "sanitize-html";
import { useParams, NavLink } from "react-router-dom";
import { addArtwork } from "../../store/reducers/Artworks/artworks.actions";
import { ARTWORK_FIELD } from "../../constants";
import { getImgUrl, getAspect } from "../../helpers";
import { Img } from "../../components";
import cn from "classnames";

const Artwork = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const artwork = useSelector(
    (state) => state.artworks.singleArtworkData[id],
    shallowEqual
  );

  const {
    thumbnail,
    config,
    image_id,
    artist_title,
    dimensions,
    publication_history,
    title,
  } = artwork ?? {};

  const getArtworkData = () => {
    dispatch(
      addArtwork({
        id,
        fields: ARTWORK_FIELD,
      })
    );
  };

  useEffect(() => {
    if (!artwork) {
      getArtworkData();
    }
  }, [artwork]);

  return (
    <section className="artwork">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-lg-3 col-lg-8 offset-lg-2 col-12">
            <NavLink to={-1}>Back</NavLink>
            {!!artwork && (
              <div className="artwork__content">
                <h1>{title}</h1>
                <div
                  className={cn("artwork__img", {
                    "aspect-ratio": thumbnail?.height && thumbnail?.width,
                  })}
                  style={{ ["--aspect-ratio"]: getAspect(thumbnail) }}
                >
                  <Img
                    src={getImgUrl(config?.iiif_url, image_id)}
                    alt_text={thumbnail?.alt_text}
                  />
                </div>
                <p>
                  <strong>{artist_title}</strong>
                </p>
                <p>{dimensions}</p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(publication_history),
                  }}
                ></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artwork;
