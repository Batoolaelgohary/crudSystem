import "./form.css";
import { IoClose } from "react-icons/io5";

const Form = ({ setOpen, setLists, lists }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const desc = e.target.elements.desc.value;
    const createdAt = e.target.elements.createdAt.value;
    const newList = {
      id: lists.length + 1,
      name,
      desc,
      createdAt,
    };
    if (name && desc && createdAt) {
      setLists((prevList) => {
        return prevList.concat(newList);
      });
      setOpen(false);
    }
  }

  return (
    <div className="form">
      <form className="add-form" onSubmit={handleSubmit}>
        <button
          className="close"
          onClick={() => {
            setOpen(false);
          }}
        >
          <IoClose />
        </button>

        <div>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>
        <div>
          <input type="text" name="desc" placeholder="Enter your description" />
        </div>
        <div>
          <input type="date" name="createdAt" />
        </div>
        <button className="add" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Form;
