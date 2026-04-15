export default function PostView({ post }) {
  return (
    <div className="content">
      <h2>{post.title}</h2>
      <p className="post-text">{post.content}</p>
    </div>
  );
}