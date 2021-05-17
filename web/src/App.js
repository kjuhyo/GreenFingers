// import logo from "./logo.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Main from "./screens/main";
import Footer from "./components/footer";
AOS.init();

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
