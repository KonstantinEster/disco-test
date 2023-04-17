import { getArtworks, getArtwork } from "../../../api";
import { ARTWORK_ACTIONS } from "./artworks.constants";

export const addArtworks = (params) => {
  return async (dispatch) => {
    try {
      const data = await getArtworks(params);
      const artworks = await data.json();

      dispatch({
        type: ARTWORK_ACTIONS.ADD,
        payload: artworks,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addArtwork = (params) => {
  return async (dispatch) => {
    try {
      const data = await getArtwork(params);
      const artwork = await data.json();
      const payload = { ...artwork.data, config: artwork.config };

      dispatch({
        type: ARTWORK_ACTIONS.ADD_SINGLE,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
