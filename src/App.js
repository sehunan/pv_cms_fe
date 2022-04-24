import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import FindID from './pages/FindID'
import FindPW from './pages/FindPW'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/findid" element={<FindID />} />
        <Route exact path="/findpw" element={<FindPW />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;