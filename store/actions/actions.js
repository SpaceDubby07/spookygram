export const TOGGLE_LIKES = "TOGGLE_LIKES";
export const TOGGLE_BOOKMARK = "TOGGLE_BOOKMARK";

// functions
export const toggleLikes = (id) => {
  return { type: TOGGLE_LIKES, postId: id };
};

export const toggleBookmarks = (bookmarkSettings) => {
  return { type: TOGGLE_BOOKMARK, bookmarks: bookmarkSettings };
};
