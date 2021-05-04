import DataTable from "./components/DataTable";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <div className="container">
          <h1 className="text-primary">Ola Mundo</h1>

          <DataTable />

        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
