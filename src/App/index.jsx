import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as paths from "../config/route-paths";

import Home from "../Views/Home";
import SignIn from "../Views/SignIn";

function App() {
  return (
      <BrowserRouter>
        <Routes>
         <Route path={paths.sign_up} element={<Home />}/>
         <Route path={paths.sign_in} element={<SignIn />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;