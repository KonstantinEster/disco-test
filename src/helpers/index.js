import { IIIF_ENDING } from "../constants";

export const getAspect = (thumbnail) => {
  return `${((thumbnail?.height || 200) / (thumbnail?.width || 100)) * 100}%`;
};

export const getImgUrl = (iiif_url, image_id) => {
  return `${iiif_url}/${image_id}${IIIF_ENDING}`;
};

export const getArtworkTitle = (title, artist) => {
  return `${title} ${artist ? `by ${artist}` : ""}`;
};
