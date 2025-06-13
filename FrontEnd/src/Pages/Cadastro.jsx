import { useNavigate } from "react-router-dom";
import css from "./Cadastro.module.css";
import { z } from "zod";

const schemaCadastro = z.object({
    nome: z.string()
        .min(1, "Digite seu nome, por favor."),
    email: z.string(),
    senha: z.string()
        .min(8, "A senha tem que possuir no mínimo 8 caracteres."),
    confirmarSenha: z.string()
        .min(8, "A senha tem que possuir no mínimo 8 caracteres.")
}).refine((data) => data.senha === data.confirmarSenha, {
            message: "As senhas não coincidem.",
            path: ["confirmarSenha"],
})

export function Cadastro() {
    const navigate = useNavigate();

    return (
        <main className={css.container}>
            <section className={css.formularioCadastro}>
                <h1>Faça seu cadastro aqui na SmartLucas!!! </h1>
                <form>
                    <label htmlFor="nome">Nome:</label> <br />
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        placeholder="Digite seu nome aqui" 
                    /> <br />

                    <label htmlFor="email">E-mail:</label> <br />
                    <input 
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Digite seu E-Mail aqui" 
                    /> <br />

                    <label htmlFor="senha">Senha:</label> <br />
                    <input 
                        type="password" 
                        name="senha" 
                        id="senha"
                        placeholder="Digite sua senha aqui" 
                    /> <br />

                    <label htmlFor="confirmarSenha">Confirmar senha:</label> <br />
                    <input 
                        type="password" 
                        name="confirmarSenha"
                        id="confirmarSenha"
                        placeholder="Digite sua senha aqui"
                    /> <br />

                    <p>Já possui uma conta? Faça seu login <u onClick={() => navigate("/")}>aqui!</u></p>

                    <div className={css.botao}>
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </section>
        </main>
    )
}