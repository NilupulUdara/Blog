import { AllRoutes } from './Routes/AllRoutes';
import { Header, Footer } from "./components";
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
