import { useNavigate } from "react-router-dom";
import Logo from "../assets/Images/SmartCity.png";
import css from "./Cabecalho.module.css";

export function Cabecalho() {
    const navigate = useNavigate();

    return (
        <header>
            <section className={css.cabecalho}>
                <img src={Logo} alt="Logomarca do site com um fundo verde, um sensor marcando 19 graus e o nome do site." />
                <div className={css.barraNavegacao}>
                    <div className={css.home}>
                        <i class="bi bi-house-door-fill"></i>
                        <p>Home</p>
                    </div>
                    <div className={css.sensores}>
                        <i class="bi bi-broadcast"></i>
                        <p>Sensores</p>
                    </div>
                    <div className={css.login}>
                        <i class="bi bi-person-fill"></i>
                        <p>Login</p>
                    </div>
                </div>
                <div className={css.perfil}>
                    <h2>Perfil ativo:</h2>
                    <p>{localStorage.getItem("username")}</p>
                    <p>{localStorage.getItem("funcao")}</p>
                </div>
            </section>
        </header>
    )
}