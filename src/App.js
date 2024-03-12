import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Change import to include Routes
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import Alert from "./components/Alert";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          {" "}
          {/* Wrap Routes around Route components */}
          <Route path="/" element={<Homepage />} />{" "}
          {/* Use element prop instead of component */}
          <Route path="/coins/:id" element={<CoinPage />} />{" "}
          {/* Use element prop instead of component */}
        </Routes>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
