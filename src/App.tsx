import { DarkThemeToggle } from "flowbite-react";
import Login from "./views/Login";
import Home from './views/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
  
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <DarkThemeToggle />
    </main>
  );
}

export default App;
