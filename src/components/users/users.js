import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import EditUser from "./EditUser";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [isModalVisible, setIsModelVisibe] = useState(false);
  // const toggleModal = () => {
  //   setIsModelVisibe((preState) => !preState);
  // };
  const navigateToDetails = (id) => {
    navigate(`details/${id}`);
  };
  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      const loadedUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setIsLoading(false);
      setUsers(loadedUsers.data);
    };
    try {
      loadUsers();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className="text-center mt-5">
      {isLoading && <p>Loading users...</p>}
      <form>
        <input type="text" />
        <button type="submit" className="btn btn-success btn-sm">
          Search
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td
                onClick={() => navigateToDetails(user.id)}
                style={{ cursor: "pointer" }}
              >
                {user.id}
              </td>
              <td
                onClick={() => navigateToDetails(user.id)}
                style={{ cursor: "pointer" }}
              >
                {user.name}
              </td>
              <td
                onClick={() => navigateToDetails(user.id)}
                style={{ cursor: "pointer" }}
              >
                {user.email}
              </td>
              <td>
                {/* <button className="btn btn-info" onClick={toggleModal}>
                  Edit
                  {isModalVisible && <Modal />}
                </button> */}
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary btn-lg text-center">Add +</button>
      {/* <button className="btn btn-info" onClick={toggleModal}></button>
      {isModalVisible && <EditUser />} */}
    </div>
  );
};

export default Users;
