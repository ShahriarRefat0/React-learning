import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},  
});

const postListReducer = (currPostList, action) => {
  let newPosList = currPostList;
  if (action.type === "DELETE_POST" ) {
    newPosList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    )
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPosList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPosList = [action.payload, ...currPostList];
  }
  return newPosList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer, []);

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
      posts
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, addInitialPosts, deletePost,}}>
      {children}
    </PostList.Provider>
  );
};



export default PostListProvider;
