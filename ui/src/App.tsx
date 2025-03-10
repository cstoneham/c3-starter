import { QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { queryClient } from "./utils/trpc";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
