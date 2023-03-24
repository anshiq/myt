import Body from "./components/body/Body";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import PlayVid from "./components/vid/Playvid";
//import Upload from "./components/vid/UploadVid";
//import Login from "./components/creds/Login";
//import Signup from "./components/creds/Signup";
import { VidContext, UserContext, Jwt_context } from "./contextApi/context";
function App() {
  return (
    <>
    <Header/>
      <Body/>
    </>
  );
}

export default App;
