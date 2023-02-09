import { Fragment, useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const loadUsers = async () => {
      const loadedUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(loadedUsers.data);
    };
    try {
      loadUsers();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <Fragment>
        <form>

      <input type="text" />
      <button type="submit" className="btn btn-success btn-sm">Search</button>
        </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-secondary">Update</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Users;
