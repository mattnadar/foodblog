import { Link } from "react-router-dom";

export default function PostList({ posts }) {
  return (
    <div className="sidebar">
      <h3>Posts</h3>
      {posts.map(post => (
        <Link key={post.id} to={`/post/${post.id}`} className="post-button">
          {post.title}
        </Link>
      ))}
    </div>
  );
}