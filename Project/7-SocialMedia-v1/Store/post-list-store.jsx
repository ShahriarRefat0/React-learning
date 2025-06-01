import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPosList = currPostList;
  if (action.type === "DELETE_POST" ) {
    newPosList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    )
  } else if (action.type === "ADD_POST") {
    newPosList = [action.payload, ...currPostList];
  }
  return newPosList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

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
      }
    })
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
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Dhaka",
    body: "Hi Friends, I am going to Dhaka for my vacations. Hope to enjoy a lot. Peace out.",
    reaction: 2,
    userId: "user-9",
    tags: ["vacation", "Dhaka", "Enjoy"],
  },
  {
    id: "2",
    title: "Exm is done",
    body: "Exm is over.Now full on chill",
    reaction: 12,
    userId: "user-15",
    tags: ["Exm", "chill", "Enjoy"],
  },
];

export default PostListProvider;
