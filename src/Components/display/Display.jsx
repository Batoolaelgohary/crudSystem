import React, { useState } from "react";
import Form from "../form/Form";
import Update from "../update/Update";
import Posts from "../posts/Posts";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const list = [
  {
    id: 1,
    name: "Samsung",
    desc: "lorem",
    createdAt: "2024-02-10",
  },
  {
    id: 2,
    name: "Lenovo",
    desc: "lorem",
    createdAt: "2024-02-10",
  },
  {
    id: 3,
    name: "LG",
    desc: "lorem",
    createdAt: "2024-02-10",
  },
  {
    id: 4,
    name: "Huawei",
    desc: "lorem",
    createdAt: "2024-02-10",
  },
  {
    id: 5,
    name: "Iphone",
    desc: "lorem",
    createdAt: "2024-02-10",
  },
];
const Display = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [lists, setLists] = useState(list);
  const [update, setUpdate] = useState(-1);
  const [searchValue, setSearchValue] = useState("");
  function deleteData(id) {
    const newList = lists.filter((items) => items.id !== id);
    setLists(newList);
  }
  function updateData(i) {
    setUpdate(i);
  }
  function search(e) {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm);
    const newList = lists.filter((items) => {
      if (items.name.toLowerCase() === searchTerm.toLowerCase()) {
        return items;
      }
      return true;
    });
    if (newList.length !== 0) {
      setLists(newList);
    } else {
      setLists(list);
    }
  }

  return (
    <div className="display">
      <div className="srh">
        <input
          type="search"
          placeholder="Search"
          value={searchValue}
          onInput={search}
          name="srh"
          className="search"
        />
      </div>
      <table className=" w-100 ">
        <thead className=" text-capitalize text-center">
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>createdAt</th>
          <th>Posts</th>
          <th></th>
        </thead>

        <tbody className="text-center">
          {lists.map((row) => {
            return update === row.id ? (
              !close ? (
                <Update
                  key={row.id}
                  setClose={setClose}
                  row={row}
                  setLists={setLists}
                  lists={lists}
                  update={update}
                  setUpdate={setUpdate}
                />
              ) : (
                ""
              )
            ) : (
              <tr key={row.id}>
                <td className="id">{row.id}</td>
                <td>{row.name}</td>
                <td>{row.desc}</td>
                <td>{row.createdAt}</td>
                <td>
                  <Posts />
                </td>
                <td className="main-btn">
                  <button
                    className="btn btn-sm d-block text-capitalize btn-outline-warning"
                    onClick={() => {
                      updateData(row.id);
                    }}
                  >
                    <FaRegEdit />
                    update
                  </button>

                  <button
                    className="btn btn-sm d-block text-capitalize btn-outline-danger "
                    onClick={() => {
                      deleteData(row.id);
                    }}
                  >
                    <MdDelete />
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className=" open"
      >
        Add Product
      </button>
      {open ? <Form setOpen={setOpen} setLists={setLists} lists={lists} /> : ""}
    </div>
  );
};

export default Display;
