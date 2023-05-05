import { Routes, Route } from "react-router-dom";

import "./App.css";
import Intro from "./components/Intro";
import Error404 from "./components/404";
import Home from "./components/Home";
import Loader from "./components/Loader";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App bg-custom-black">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/error" element={<Error404 />}></Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
