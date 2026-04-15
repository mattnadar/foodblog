import { posts } from "../data/posts";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="content">
      <h2>Welcome to my Food Blog!</h2>
      <p>Healthy, cheap meals for college students.</p>

      <div className="card-grid">
        {posts.map(post => (
          <Link to={`/post/${post.id}`} key={post.id} className="card">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}