import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Users from "../components/users/users";
import UsersDetails from "../components/details/userDetails";

const MainNav = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="details/:userId" element={<UsersDetails />}></Route>
      </Routes>
    </Router>
  );
};

export default MainNav;
