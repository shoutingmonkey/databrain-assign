import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (posts.length > 0) {
      setPosts([]);
      setLoading(true);
    }

    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <button className="button" onClick={() => fetchData()}>
        Fetch Data
      </button>
      {loading
        ? "Loading..."
        : posts.map((post) => <Card post={post} key={post.id} />)}
    </div>
  );
}

export default App;
