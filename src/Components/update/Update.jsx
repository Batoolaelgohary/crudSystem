import React from "react";
import "./update.css";
import { IoClose } from "react-icons/io5";

const Update = ({ setClose, row, setLists, lists, update, setUpdate }) => {
  function handleNameInput(e) {
    const value = e.target.value;
    const newList = lists.map((item) =>
      item.id === row.id ? { ...item, name: value } : item
    );
    setLists(newList);
  }
  function handleDescInput(e) {
    const value = e.target.value;
    const newList = lists.map((item) =>
      item.id === row.id ? { ...item, desc: value } : item
    );
    setLists(newList);
  }
  function handleCreatedAtInput(e) {
    const value = e.target.value;
    const newList = lists.map((item) =>
      item.id === row.id ? { ...item, createdAt: value } : item
    );
    setLists(newList);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const desc = e.target.elements.desc.value;
    const createdAt = e.target.elements.createdAt.value;
    const newList = lists.map((item) =>
      item.id === update
        ? { ...item, name: name, desc: desc, createdAt: createdAt }
        : item
    );
    if (name && desc && createdAt) {
      setLists(newList);
      setUpdate(-1);
    }
  }

  return (
    <div className="update">
      <form onSubmit={handleSubmit}>
        <button
          className="close"
          onClick={() => {
            setClose(true);
          }}
        >
          <IoClose />
        </button>
        <tr>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={row.name}
            onChange={handleNameInput}
          />

          <input
            type="text"
            name="desc"
            placeholder="Enter your desc"
            value={row.desc}
            onChange={handleDescInput}
          />

          <input
            type="date"
            name="createdAt"
            placeholder="Enter your createdAt"
            value={row.createdAt}
            onChange={handleCreatedAtInput}
          />

          <button
            type="submit"
            onSubmit={handleSubmit}
            className=" text-capitalize add"
          >
            Update
          </button>
        </tr>
      </form>
    </div>
  );
};

export default Update;
