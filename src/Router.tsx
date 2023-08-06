import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stocks from "./routes/Stocks";
import NavBar from "./Components/NavBar";
import OtherStocks from "./routes/OtherStocks";

const ROUTE_STOCKS = "/My_Stock";
const ROUTE_OTHERSTOCKS = "/other";

function Router() {
  return (
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <NavBar />

      <Routes>
        <Route path={ROUTE_STOCKS} element={<Stocks />} />
        <Route path={ROUTE_OTHERSTOCKS} element={<OtherStocks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
