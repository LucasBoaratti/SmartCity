import { useNavigate } from "react-router-dom";

export function Cadastro() {
    const navigate = useNavigate();

    return (
        <main>
            <section>
                <h1>Faça seu cadastro aqui na SmartLucas!!! </h1>
                <form>
                    <label htmlFor="nome">Nome:</label> <br />
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        placeholder="Digite seu nome aqui" 
                    />

                    <label htmlFor="senha">Senha:</label> <br />
                    <input 
                        type="password" 
                        name="senha" 
                        id="senha"
                        placeholder="Digite sua senha aqui" 
                    />

                    <label htmlFor="confirmarSenha">Confirmar senha:</label> <br />
                    <input 
                        type="password" 
                        name="confirmarSenha"
                        id="confirmarSenha"
                        placeholder="Digite sua senha aqui"
                    />

                    <p>Já possui uma conta? Faça seu login <u onClick={() => navigate("/")}>aqui!</u></p>

                    <button type="submit">Cadastrar</button>
                </form>
            </section>
        </main>
    )
}