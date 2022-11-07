import { BrowserRouter, BrowsweRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
