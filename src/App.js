import logo from "./logo.svg";
import "./App.css";
import Employees from "./components/employees/Employees";
import Header from "./components/header/Header";
import Sidbar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      
      <section className="d-flex">
        <Sidbar />
        <div>
        <Header />
        <Employees />
        </div>
      </section>
    </div>
  );
}

export default App;
