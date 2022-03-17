import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Profile } from "../pages"

export default function AppRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}