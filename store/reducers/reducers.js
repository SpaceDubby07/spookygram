import { POST } from "../../data/dummyData";
import { TOGGLE_LIKES, TOGGLE_BOOKMARK } from "../actions/actions";

// initial state
const initialState = {
  posts: POST,
  bookmarkedPosts: POST,
  likedPosts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKES:
      const existingIndex = state.likedPosts.findIndex(
        (post) => post.id === action.postId
      );
      if (existingIndex >= 0) {
        // we create a copy of the array, then update it
        const updatedLikePosts = [...state.likedPosts];
        updatedLikePosts.splice(existingIndex, 1);
        return { ...state, likedPosts: updatedLikePosts };
      } else {
        const post = state.posts.find((post) => post.id === action.postId);
        return {
          ...state,
          likedPosts: state.likedPosts.concat(post),
        };
      }
    case TOGGLE_BOOKMARK:
      const appliedBookmark = action.bookmarks;
      const updatedAppliedBookmark = state.post.filter((post) => {
        if (appliedBookmark.bookmark && !post.isBookmarked) {
          return false;
        }
        return true;
      });
      return { ...state, bookmarkedPosts: updatedAppliedBookmark };
    default:
      return state;
  }
};

export default postsReducer;
