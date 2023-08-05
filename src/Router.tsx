import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stocks from "./routes/Stocks";
import NavBar from "./Components/NavBar";
import OtherStocks from "./routes/OtherStocks";

const ROUTE_STOCKS = "/";
const ROUTE_OTHERSTOCKS = "/other";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path={ROUTE_OTHERSTOCKS} element={<OtherStocks />} />
        <Route path={ROUTE_STOCKS} element={<Stocks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
