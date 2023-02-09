import "./userPosts.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPosts = () => {
  const [currentPostId, setCurrentPostId] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const { userId } = useParams();

  const toggleComments = () => {
    setShowComments((prevState) => !prevState);
  };

  const loadPostComments = async (postId) => {
    toggleComments();
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    const ExData = response.data;
    setComments(ExData);
  };

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
        {console.log(posts)}
        {posts.map((post) => (
          <div
            style={{ cursor: "pointer" }}
            className="col-md-10 offset-1 mb-3"
            key={post.id}
            onClick={() => loadPostComments(post.id)}
          >
            <p>P#{post.id}</p>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            {showComments &&
              comments.length > 0 &&
              comments[0].postId === post.id && (
                <div className="comments">
                  <h2>Comments</h2>
                  {comments.map(
                    (comment) =>
                      post.id === comment.postId && (
                        <div key={comment.id}>
                          <p>C#{comment.id}</p>
                          <strong>{comment.name}</strong>
                          <p>{comment.body}</p>
                        </div>
                      )
                  )}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
