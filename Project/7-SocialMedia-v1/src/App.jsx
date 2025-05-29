import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Sidebar from "./Component/Sidebar";
import "./App.css";
import CreatePost from "./Component/CreatePost";
import PostList from "./Component/PostList";



function App() {

  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="container">
        <Header></Header>
        <CreatePost></CreatePost>
        <PostList></PostList>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App
