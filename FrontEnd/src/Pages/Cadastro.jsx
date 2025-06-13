import { useNavigate } from "react-router-dom";
import css from "./Cadastro.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios"
import { useEffect, useState } from "react";

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
    const [erro, setErro] = useState("");
    const [cadastro, setCadastro] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaCadastro)
    })

    const navigate = useNavigate();

    async function obter_dados_cadastro() {
        try {
            const response = axios.post("http://127.0.0.1:8000/smartcity/cadastro");

            setCadastro("Usuário cadastrado com sucesso!", response.data);

            navigate("/");
        }
        catch(error) {
            setErro("Erro ao cadastrar usuário.");
        }
    }

    return (
        <main className={css.container}>
            <section className={css.formularioCadastro}>
                <h1>Faça seu cadastro aqui na SmartLucas!!! </h1>
                <form onSubmit={handleSubmit(obter_dados_cadastro)}>
                    <label htmlFor="nome">Nome:</label> <br />
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        placeholder="Digite seu nome aqui" 
                        {...register("nome")}
                    /> <br />
                    {errors.nome && <p>{errors.nome.message}</p>}

                    <label htmlFor="email">E-mail:</label> <br />
                    <input 
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Digite seu E-Mail aqui" 
                        {...register("email")}
                    /> <br />
                    {errors.email && <p>{errors.email.message}</p>}

                    <label htmlFor="senha">Senha:</label> <br />
                    <input 
                        type="password" 
                        name="senha" 
                        id="senha"
                        placeholder="Digite sua senha aqui" 
                        {...register("senha")}
                    /> <br />
                    {errors.senha && <p>{errors.senha.message}</p>}

                    <label htmlFor="confirmarSenha">Confirmar senha:</label> <br />
                    <input 
                        type="password" 
                        name="confirmarSenha"
                        id="confirmarSenha"
                        placeholder="Digite sua senha aqui"
                        {...register("confirmarSenha")}
                    /> <br />
                    {errors.confirmarSenha && <p>{errors.confirmarSenha.message}</p>}

                    <p>Já possui uma conta? Faça seu login <u onClick={() => navigate("/")}>aqui!</u></p>

                    <div className={css.botao}>
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </section>
        </main>
    )
}