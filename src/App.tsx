import "./App.css";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <div id="move-bar"></div>
      <NavBar></NavBar>
      <MainPage name="Bem-vindo"></MainPage>
    </>
  );
}

export default App;
