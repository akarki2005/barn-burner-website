import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Devlogs from "./pages/Devlogs";
import Releases from "./pages/Releases";
import Feedback from "./pages/Feedback";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/releases' element={<Releases />} />
        <Route path='/devlogs' element={<Devlogs />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;
