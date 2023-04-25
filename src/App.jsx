import { Routes, Route } from "react-router-dom";
import "./App.css";
import Intro from "./components/Intro";
import Error404 from "./components/Error404";
import Home from "./components/Home";
import Projects from "./components/Projects";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App bg-custom-black">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/projects" element={<Projects />} />
          <Route path="/error" element={<Error404 />}></Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
