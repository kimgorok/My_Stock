import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stocks from "./routes/Stocks";

const ROUTE_STOCKS = "/";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_STOCKS} element={<Stocks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
