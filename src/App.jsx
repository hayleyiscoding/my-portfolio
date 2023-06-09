import { Routes, Route } from "react-router-dom";
import "./App.css";
import Intro from "./components/Intro";
import Error404 from "./components/404";
import Home from "./components/Home";
import ReactGA from "react-ga";

const TRACKING_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

ReactGA.initialize(TRACKING_ID);

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-custom-black">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
