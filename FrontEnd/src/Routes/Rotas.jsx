import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Index } from "../Pages/Index";
import { Home } from "../Pages/Home";
import { Cadastro } from "../Pages/Cadastro";
import { Sensores } from "../Pages/Sensores";
import { CriarSensor } from "../Pages/CriarSensor";
import { EditarSensor } from "../Pages/EditarSensor";

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

            <Route path="/sensores" element={<Index/>}>
                <Route index element={<Sensores/>}/>
            </Route>

            <Route path="/criarSensor" element={<Index/>}>
                <Route index element={<CriarSensor/>}/>
            </Route>

            <Route path="/editarSensor" element={<Index/>}>
                <Route index element={<EditarSensor/>}/>
            </Route>
        </Routes>
    )
}