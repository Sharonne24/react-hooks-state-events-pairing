import video from "../data/video.js";
import Item from "./Item.jsx";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      
      <Item video={video} />

    </div>
  );
}

export default App;
