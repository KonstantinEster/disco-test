import { ARTWORK_ACTIONS } from "./artworks.constants";

export const artworksReducer = (
  state = { artworks: [], singleArtworkData: {}, loading: true },
  action
) => {
  switch (action.type) {
    case ARTWORK_ACTIONS.ADD:
      return {
        ...state,
        config: action.payload.config,
        artworks: [...(state.artworks || []), ...action.payload.data],
        loading: false,
      };
    case ARTWORK_ACTIONS.ADD_SINGLE:
      return {
        ...state,
        singleArtworkData: {
          ...state.singleArtworkData,
          [action.payload.id]: action.payload,
        },
        loading: false,
      };

    case ARTWORK_ACTIONS.LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
