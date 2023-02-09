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
  return <Fragment>{users.map((user) => console.log(user))}</Fragment>;
};

export default Users;
