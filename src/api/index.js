const getCorsedUrl = (url) => {
  return `${process.env.REACT_APP_CORS_PROXY}${url}`;
};

export const getArtworks = async ({ limit, page, fields }) => {
  const preparedUrl = new URL(process.env.REACT_APP_ARTWORKS_URL);
  preparedUrl.searchParams.append("limit", limit);
  preparedUrl.searchParams.append("page", page);
  fields && preparedUrl.searchParams.append("fields", fields);

  return await fetch(getCorsedUrl(preparedUrl));
};

export const getArtwork = async ({ id, fields }) => {
  const preparedUrl = new URL(`${process.env.REACT_APP_ARTWORKS_URL}/${id}`);
  fields && preparedUrl.searchParams.append("fields", fields);

  return await fetch(getCorsedUrl(preparedUrl));
};
