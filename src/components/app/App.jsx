//Components
import Main from "../../pages/main/main";
import Navigation from "../navigation/navigation";
import Theme from "../theme/Theme";
import TransferPage from "../../pages/transferPage/TransferPage";

//Global
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Navigation />
      <Theme />
      <div className="app">
        <Routes>
          <Route element={<Main />} path="/"></Route>
          <Route element={<TransferPage />} path="/transfer" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
