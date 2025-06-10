import { Route, Routes } from "react-router-dom"
import { Login } from "../Pages/Login"

export function Rotas() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Login/>}/>
            </Route>
        </Routes>
    )
}