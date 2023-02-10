import "./userPosts.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [arePostsLoading, setArePoastLoading] = useState(false);
  const [areCommentsLoading, setAreCommentsLoading] = useState(false);
  const { userId } = useParams();

  const toggleComments = (postId) => {
    let newPosts = posts.map((post) =>
      post.id === postId
        ? { ...post, showComments: !post.showComments }
        : { ...post, showComments: false }
    );
    setPosts(newPosts);
  };

  const loadPostComments = async (postId) => {
    setAreCommentsLoading(true);
    toggleComments(postId);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    const ExData = response.data;
    setComments(ExData);
    setAreCommentsLoading(false);
  };

  useEffect(() => {
    const loadPostsForUser = async () => {
      setArePoastLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const extractedPosts = response.data;
      const mutatedPosts = extractedPosts.map((post) => ({
        ...post,
        showComments: false,
      }));
      setPosts(mutatedPosts);
      setArePoastLoading(false);
    };
    try {
      loadPostsForUser();
    } catch (error) {
      console.log(error.message);
    }
  }, [userId]);
  return (
    <div className="container mt-5">
      <div className="row">
        <h2>Posts</h2>
        {arePostsLoading ? (
          <p>Loading Posts...</p>
        ) : (
          posts.map((post) => (
            <div
              style={{ cursor: "pointer" }}
              className="col-md-10 offset-1 mb-3"
              key={post.id}
              onClick={() => loadPostComments(post.id)}
            >
              <p>P#{post.id}</p>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
              {post.showComments &&
                comments.length > 0 &&
                comments[0].postId === post.id && (
                  <div className="comments">
                    <h2>Comments</h2>
                    {areCommentsLoading ? (
                      <p>Loading...</p>
                    ) : (
                      comments.map(
                        (comment) =>
                          post.id === comment.postId && (
                            <div key={comment.id}>
                              <p>C#{comment.id}</p>
                              <strong>{comment.name}</strong>
                              <p>{comment.body}</p>
                            </div>
                          )
                      )
                    )}
                  </div>
                )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserPosts;
