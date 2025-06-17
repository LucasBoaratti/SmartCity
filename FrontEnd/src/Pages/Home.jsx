import { useState } from "react";
import Banner from "../assets/Images/Banner da SmartLucas.png";
import css from "./Home.module.css";

export function Home() {
    const [abrirInformacoesTemperatura, setAbrirInformacoesTemperatura] = useState(false);
    const [abrirInformacoesAmbiente, setAbrirInformacoesAmbiente] = useState(false);
    const [abrirInformacoesContagem, setAbrirInformacoesContagem] = useState(false);
    const [abrirInformacoesLuminosidade, setAbrirInformacoesLuminosidade] = useState(false);

    return (
        <main>
            <section className={css.banner}>
                <img src={Banner} alt="Banner da SmartLucas: uma cidade com uma noite estrelada e prédios de fundo." />
                <div className={css.sobreSmartLucas}>
                    <h2>Sobre a SmartLucas</h2>
                    <p>A SmartLucas é uma cidade onde possui muitos sensores espalhados, sendo eles de temperatura, umidade, contador e luminosidade para atender a população com dados da melhor forma possível, oferecendo uma confiabilidade nos sensores comandados pela escola principal da cidade: TecnoVille.</p>
                </div>
            </section>
            <div className={css.textoSensor}>
                <h1>Conheça os sensores da SmartLucas</h1>
            </div>
            <section className={css.descricaoSensores}>
                <div className={css.sensorTemperatura}>
                    <div className={css.textoSensorTemperatura} onClick={() => setAbrirInformacoesTemperatura(!abrirInformacoesTemperatura)}>
                        <p>Sensor de temperatura</p>
                        <i class="bi bi-chevron-down"></i>
                    </div>
                    {abrirInformacoesTemperatura && (
                        <div className={css.informacoesSensor}>
                            <p>Os sensores de temperatura são dispositivos desenvolvidos para detecar a variação de temperatura em determinado lugar. 
                            Esses sensores são capazes de detectar as variações na temperatura e transformar essas informações em sinais elétricos. Esses sinais servem para o acompanhamento do desenvolvimento do trabalho de máquinas e equipamentos.</p>
                        </div>
                    )}   
                </div>
                <section className={css.sensorAmbiente}>
                    <div className={css.textoSensorAmbiente} onClick={() => setAbrirInformacoesAmbiente(!abrirInformacoesAmbiente)}>
                        <p>Sensor de ambiente</p>
                        <i class="bi bi-chevron-down"></i>
                    </div>
                    {abrirInformacoesAmbiente && (
                        <div className={css.informacoesSensor}>
                            <p>Um sensor de ambiente mede e capta informações sobre diversos fatores ambientais como temperatura, luz, umidade, pressão, movimento etc. Um exemplo é um sensor de temperatura ambiente, que mede a temperatura de um ambiente em que ele está instalado. Para isso, ele detecta a temperatura do ar e converte em um valor legível, podendo ser em graus celsius (°C) ou em graus fahreinheit (°F), e o sensor faz isso em tempo real, detectando as mudanças de temperatura no ambiente e convertendo as informações da temperatura em sinal elétrico ou digital legível.</p>
                        </div>
                    )}   
                </section>
            </section>
            <section className={css.descricaoSensores2}>
                <section className={css.sensorContagem}>
                    <div className={css.textoSensorContagem} onClick={() => setAbrirInformacoesContagem(!abrirInformacoesContagem)}>
                        <p>Sensor de contagem</p>
                        <i class="bi bi-chevron-down"></i>
                    </div>
                    {abrirInformacoesContagem && (
                        <div className={css.informacoesSensor}>
                            <p>Os sensores de contagem, também conhecido como contador de objetos é um dispositivo que detecta a presença de objetos metálicos sem contato físico, utilizando o princípio da indução eletromagnética. Ele gera um campo magnético ao redor da sua área de detecção e, quando um objeto entra nesse campo, o sensor registra a mudança na corrente induzida, identificando a presença do objeto.</p>
                        </div>
                    )}   
                </section>
                <section className={css.sensorLuminosidade}>
                    <div className={css.textoSensorLuminosidade} onClick={() => setAbrirInformacoesLuminosidade(!abrirInformacoesLuminosidade)}>
                        <p>Sensor de luminosidade</p>
                        <i class="bi bi-chevron-down"></i>
                    </div>
                    {abrirInformacoesLuminosidade && (
                        <div className={css.informacoesSensor}>
                            <p>Os sensores de luminosidade são sensores que possuem uma função específica de acionar automaticamente ao detectar algum tipo de movimento no seu raio de alcance. Quando isso acontece, a luz se acende e apaga assim que o mesmo sensor não detecta mais movimento no ambiente.</p>
                        </div>
                    )}   
                </section>
            </section>
        </main>
    )
}