import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from '../LoginPage/LoginPage';

const MainRouting = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MainRouting
