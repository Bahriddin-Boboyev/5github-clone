import { Route, Routes } from "react-router-dom";
import { Main } from "./components";
import { MainLayout } from "./layout/main-layout";
import { Repositories } from "./pages/repositories";
import { Stars } from "./pages/stars";
import { Followers, Following } from "./pages/follow";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="repositories" element={<Repositories />} />
          <Route path="stars" element={<Stars />} />
          <Route path="followers" element={<Followers/>} />
          <Route path="following" element={<Following/>} />
          <Route path="*" element={<h2>Page not found...</h2>} />
        </Route>
        <Route path="*" element={<h2>Page not found...</h2>} />
      </Routes>
    </div>
  );
}

export default App;
