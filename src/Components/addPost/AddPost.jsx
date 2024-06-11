import React from "react";
import "./addPost.css";
import { IoClose } from "react-icons/io5";

const AddPost = ({ setOpen, setPosts, posts }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const post = e.target.elements.post.value;
    const newPost = {
      id: posts.length + 1,
      postDetails: post,
    };
    if (post) {
      setPosts((prevPost) => {
        return prevPost.concat(newPost);
      });
      setOpen(false);
    }
  }

  return (
    <div className="addPost">
      <form className="add-form" onSubmit={handleSubmit}>
        <button
          className="close-add"
          onClick={() => {
            setOpen(false);
          }}
        >
          <IoClose />
        </button>

        <div>
          <input type="text" name="post" placeholder="Write your post" />
        </div>
        <button className="add" type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
