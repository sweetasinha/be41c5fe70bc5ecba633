import "./App.css";
import HomePage from "./Components/HomeScreen/HomePage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  position: "top-right",
  autoClose: 5000,
  pauseOnFocusLoss: false,
});

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
