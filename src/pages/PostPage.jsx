import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostPage() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="content">
      <img src={post.image} alt={post.title} className="post-image" />
      <h2>{post.title}</h2>
      <p className="post-text">{post.content}</p>
    </div>
  );
}