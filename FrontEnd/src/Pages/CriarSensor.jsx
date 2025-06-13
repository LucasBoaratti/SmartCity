import css from "./CriarSensor.module.css";

export function CriarSensor() {
     return (
          <main className={css.container}>
               <h1>Cadastre seu sensor aqui</h1>
               <section className={css.formularioSensor}> 
                    <form>
                         <h2>Cadastro de sensor</h2>
                         <label htmlFor="sensor">Sensor:</label> <br />
                         <input 
                              type="text" 
                              name="sensor" 
                              id="sensor" 
                              placeholder="Ex: luminosidade"
                         /> <br />

                         <label htmlFor="mac_address">Mac Address:</label> <br />
                         <input 
                              type="text" 
                              name="mac_address" 
                              id="macAddress"
                              placeholder="Ex: 00:1A:2B:3C:4D:5E" 
                         /> <br />

                         <label htmlFor="unidadeMedida">Unidade de medida:</label> <br />    
                         <input 
                              type="text" 
                              name="unidadeMedida" 
                              id="unidadeMedida" 
                              placeholder="Ex: lux - luminosidade"
                         /> <br />

                         <label htmlFor="latitude">Latitude:</label> <br />   
                         <input 
                              type="number" 
                              name="latitude" 
                              id="latitude" 
                              placeholder="Ex: -43.55"
                         /> <br />

                         <label htmlFor="longitude">Longitude:</label> <br />
                         <input 
                              type="number" 
                              name="longitude" 
                              id="longitude" 
                              placeholder="Ex: 26.42"
                         /> <br />

                         <label htmlFor="status">Status:</label> <br />
                         <input 
                              type="number" 
                              name="status" 
                              id="status" 
                              max="1"
                              placeholder="Ex: 0 = inativo ; 1 = ativo"
                         /> <br />
                         
                         <div className={css.botao}>
                              <button type="submit">Cadastrar</button>
                         </div>
                    </form> 
               </section>
          </main>
     )
}