import { useNavigate } from "react-router-dom";
import css from "./Login.module.css";

export function Login() {
    const navigate = useNavigate();

    return (
        <main className={css.container}>
            <section className={css.formularioLogin}>
                <h1>Olá, seja bem vindo(a) à SmartLucas!!!</h1>
                <form>
                    <label htmlFor="nome">Nome:</label> <br />
                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome aqui"/> <br />

                    <label htmlFor="senha">Senha:</label> <br />
                    <input type="password" name="senha" id="senha" placeholder="Digite sua senha aqui"/> <br />

                    <p>Ainda não possui uma conta? Faça seu cadastro <u>aqui!</u></p>

                    <button type="button" onClick={() => navigate("/home")}>Entrar</button>
                </form>
            </section>
        </main>
    )
}