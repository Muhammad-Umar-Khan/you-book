import Modal from "../../UI/Modal/Modal";

const EditTodo = (props) => {
  return (
    <Modal onClose={props.onClick}>
      <form>
        <input />
        <button className="btn btn-default" onClick={props.onClick}>
          Update
        </button>
      </form>
    </Modal>
  );
};

export default EditTodo;
