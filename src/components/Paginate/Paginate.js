// const Paginate = (props) => {
//   const posts = props.posts;
//   let postsPerPage = 5;
//   let currentPage = 1;
//   let indexOfLastePost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastePost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastePost);
//   return (
//     <div className="my-5 text-primary text-center">
//       {currentPosts.map((post) => (
//         <div className="alert alert-primary">
//           <h4 className="alert-heading">{post.title}</h4>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Paginate;
