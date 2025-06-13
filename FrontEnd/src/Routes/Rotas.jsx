import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Index } from "../Pages/Index";
import { Home } from "../Pages/Home";
import { Cadastro } from "../Pages/Cadastro";

export function Rotas() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Login/>}/>
            </Route>

            <Route path="/home" element={<Index/>}>
                <Route index element={<Home/>}/>
            </Route>

            <Route path="/cadastro">
                <Route index element={<Cadastro/>}/>
            </Route>
        </Routes>
    )
}