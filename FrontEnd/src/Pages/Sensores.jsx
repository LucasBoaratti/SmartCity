import css from "./Sensores.module.css";
import { useNavigate } from "react-router-dom";

export function Sensores() {
     const navigate = useNavigate();
     
     return (
          <main className={css.dadosSensores}>
               <h1>Dados dos sensores</h1>
               <div className={css.botoes}>
                    <div className={css.botaoAdicionar}>
                         <button type="button" onClick={() => navigate("/criarSensor")}>
                              <i class="bi bi-plus-lg"></i>
                              <p className={css.paragrafoBotao}>Adicionar sensor</p>
                         </button>
                    </div>
                    <div className={css.botaoVoltar}>
                         <button type="button">
                              <i class="bi bi-chevron-left"></i>
                              <p className={css.paragrafoBotao}>Voltar</p>
                         </button>
                    </div>
               </div>
               <section className={css.secaoTabela}>
                    <table className={css.tabela}>
                         <thead> 
                              <tr>
                                   <th>ID</th>
                                   <th>Sensor</th>
                                   <th>Mac_Address</th>
                                   <th>Unidade de medida</th>
                                   <th>Latitude</th>
                                   <th>Longitude</th>
                                   <th>Status</th>
                                   <th>Ações</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr>
                                   <td></td>
                                   <td></td>
                                   <td></td>
                                   <td></td>
                                   <td></td>
                                   <td></td>
                                   <td></td>
                                   <td>
                                        <div className={css.alinharIcones}>
                                             <i class="bi bi-pencil-square"></i>
                                             <i class="bi bi-trash"></i>
                                        </div>
                                   </td>
                              </tr>
                         </tbody>
                    </table>
               </section>
               <p className={css.historicoSensores}>Ficou curioso para ver os dados de outros sensores? Veja o <u>histórico de sensores.</u></p>
          </main>
     )
}