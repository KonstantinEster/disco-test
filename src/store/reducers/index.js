import { combineReducers } from "redux";
import { artworksReducer as artworks } from "./Artworks";

export const rootReducer = combineReducers({
  artworks,
});
