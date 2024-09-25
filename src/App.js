import { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description 2" },
    { id: 3, title: "Javascript 3", body: "Description 3" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
