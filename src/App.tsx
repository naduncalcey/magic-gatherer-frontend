import { ThemeProvider } from "@/components/theme-provider";
import { NavMenu } from "@/components/custom/navmenu.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cards from "./pages/cards";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavMenu />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App