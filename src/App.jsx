import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { posts } from "./data/posts";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <div className="layout">
          <PostList posts={posts} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}