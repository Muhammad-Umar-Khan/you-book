import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const UsersDetails = () => {
  const { userId } = useParams();
  const [details, setDetails] = useState([]);
  const [isLoadin, setIsLoading] = useState(false);

  useEffect(() => {
    const loadUserDetails = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setIsLoading(false);
      const extractedDetails = response.data;
      setDetails([extractedDetails]);
    };
    try {
      loadUserDetails();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <Fragment>
      <div className="text-center mt-5">
        {isLoadin ? (
          <p>Loading...</p>
        ) : (
          details.map((detail) => (
            <div key={detail.id}>
              <h1>All about: {detail.username}</h1>
              <p>
                <strong>Name:</strong> {detail.name}
              </p>
              <p>
                <strong>Username:</strong> {detail.username}
              </p>
              <p>
                <strong>Email:</strong> {detail.email}
              </p>

              <p>
                <strong>Address</strong>
              </p>
              <p>
                <i>Street:</i> {detail.address["street"]},
                <i>Suite:</i> {detail.address["suite"]},
                <i>City:</i> {detail.address["city"]},
                <i>ZipCode:</i> {detail.address["zipcode"]}               
              </p>
              <button className="btn btn-outline-danger">POSTS</button>
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default UsersDetails;
