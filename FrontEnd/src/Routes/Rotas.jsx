import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Index } from "../Pages/Index";
import { Home } from "../Pages/Home";

export function Rotas() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Login/>}/>
            </Route>

            <Route path="/home" element={<Index/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    )
}