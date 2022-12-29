import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />}>
          <Route path=":userId" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
