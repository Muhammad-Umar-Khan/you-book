import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const loadPostsForUser = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const extractedPosts = response.data;
      setPosts(extractedPosts);
    };
    try {
      loadPostsForUser();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
      <h2>Posts</h2>
        {posts.map((post) => (
          <div className="col-md-10 offset-1 mb-3" key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
