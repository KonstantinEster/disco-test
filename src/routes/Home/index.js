import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";
import { InView } from "react-intersection-observer";
import { ARTWORKS_LIMIT, ARTWORKS_FIELDS } from "../../constants";
import { addArtworks } from "../../store/reducers/Artworks/artworks.actions";
import { ArtworkItem } from "../../components";

const Home = () => {
  const dispatch = useDispatch();
  const { artworks, config } = useSelector(
    (state) => state.artworks,
    shallowEqual
  );

  const getArtworks = () => {
    const page = Math.floor(artworks?.length / ARTWORKS_LIMIT) + 1;

    dispatch(
      addArtworks({ limit: ARTWORKS_LIMIT, page, fields: ARTWORKS_FIELDS })
    );
  };

  return (
    <section className="home">
      <div className="container">
        <div className="row g-3">
          {artworks.map(({ id, title, artist_title, thumbnail, image_id }) => (
            <div key={id} className="col-sm-3 col-12 g-3">
              <NavLink to={`artworks/${id}`}>
                <ArtworkItem
                  title={title}
                  artistTitle={artist_title}
                  thumbnail={thumbnail}
                  imageId={image_id}
                  iiifUrl={config.iiif_url}
                />
              </NavLink>
            </div>
          ))}
          <div className="col-12">
            <InView
              key={`inview${artworks.at(-1)?.id}`}
              triggerOnce={true}
              style={{ height: "1px" }}
              onChange={(inView) => {
                inView && getArtworks();
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
