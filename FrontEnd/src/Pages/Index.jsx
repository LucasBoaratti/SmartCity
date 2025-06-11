import { Outlet } from "react-router-dom";
import { Cabecalho } from "../Components/Cabecalho";

export function Index() {
    return (
        <div style={{ display:"flex", flexDirection:"column", minHeight:"100vh" }}>
            <Cabecalho/>
            <div style={{ flex:"1" }}>
                <Outlet/>
            </div>
        </div>
    )
}