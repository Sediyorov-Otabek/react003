import "./App.css";
import "./components/sass/main.scss";

import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Main from "./components/main/Main";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Products />
      <Main />
    </>
  );
}

export default App;
