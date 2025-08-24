import { Ex1 } from "./components/Ex1";
import "./App.css";
import { Ex2 } from "./components/Ex2";
import { Ex3 } from "./components/Ex3";
import { Ex4 } from "./components/Ex4";
import { ListPost } from "./components/ListPost";
import Ex7 from "./components/Ex7";
import Ex8 from "./components/Ex8";
import { Main5 } from "./components/Ex5/Main5";
function App() {
  
  return (
    <>
      <div className="singularComponents">
        <Ex1 />
        <Ex2 />
        <Ex3 />
        <Ex4 />
        <Ex7/>
        <Ex8/>
      </div>
      <div className="postContainer">
        <ListPost />
      </div>
      <Main5/>
    </>
  );
}

export default App;
