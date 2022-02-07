import "./App.css";
import Bandeau from "./components/Bandeau";
import Content from "./components/Content";
import Header from "./components/Header";
import Panier from "./components/Panier";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Bandeau />
        <div className="content-wrapper">
          <Content />
          <Panier />
        </div>
      </div>
    </div>
  );
}

export default App;
