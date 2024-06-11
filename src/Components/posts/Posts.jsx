import React, { useState } from "react";
import "./posts.css";
import AddPost from "../addPost/AddPost";
import EditPost from "../editPost/EditPost";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const uPosts = [
  {
    id: 1,
    postDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(uPosts);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(-1);
  function editPost(i) {
    setEdit(i);
  }
  function deletePost(id) {
    const newPost = posts.filter((items) => items.id !== id);
    setPosts(newPost);
  }
  return (
    <div className="posts">
      <ul>
        {posts.map((post) => {
          return edit === post.id ? (
            <EditPost
              edit={edit}
              setEdit={setEdit}
              key={post.id}
              post={post}
              setPosts={setPosts}
              posts={posts}
            />
          ) : (
            <li key={post.id}>
              <p className="post">{post.postDetails}</p>
              <div className="buttons">
                <button
                  className="update-btn btn btn-sm text-capitalize btn-outline-warning"
                  onClick={() => {
                    editPost(post.id);
                  }}
                >
                  <FaRegEdit />
                </button>
                <button
                  className="delete-btn btn btn-sm text-capitalize btn-outline-danger"
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  <MdDelete />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="add-btn"
      >
        Add post
      </button>
      {open ? (
        <AddPost setOpen={setOpen} setPosts={setPosts} posts={posts} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Posts;
