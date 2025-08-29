import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "./Components/Home";
import Wrong from "./Components/Wrong";
import Layout from "./Components/LayOut";
import Favorite from "./Components/Favorite";

const BookList = lazy(() => import("./Components/BookList"));

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/20books"
          element={
            <Suspense fallback={<h1 className="text-center text-3xl font-bold p-10">Loading books...</h1>}>
              <BookList />
            </Suspense>
          }
        />
        <Route path="/wrong" element={<Wrong />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/profile" element={<h1 className="text-center text-3xl font-bold p-10">Your Profile</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
