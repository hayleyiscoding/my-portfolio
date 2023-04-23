import { Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Error404 from "./components/Error404";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App bg-custom-black">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/error" element={<Error404 />}></Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
