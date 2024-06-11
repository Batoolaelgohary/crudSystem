import React from "react";
import "./editPost.css";
import { IoClose } from "react-icons/io5";

const EditPost = ({ posts, setPosts, post, edit, setEdit }) => {
  function handleInput(e) {
    const value = e.target.value;
    const newPost = posts.map((item) =>
      item.id === post.id ? { ...item, postDetails: value } : item
    );
    setPosts(newPost);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const post = e.target.elements.post.value;
    const newList = posts?.map((item) =>
      item.id === edit ? { ...item, postDetails: post } : item
    );
    if (post) {
      setPosts(newList);
      setEdit(-1);
    }
  }
  return (
    <div className="edit">
      <form className="add-form" onSubmit={handleSubmit}>
        <button className="close">
          <IoClose />
        </button>

        <div>
          <input
            type="text"
            name="post"
            value={post.postDetails}
            onChange={handleInput}
            placeholder="Write your post"
          />
        </div>
        <button className="add btn-outline-warning btn btn-sm" type="submit">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditPost;
