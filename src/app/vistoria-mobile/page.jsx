import Image from "next/image";
import {GoAlertFill as Alert} from "react-icons/go"
import Inputs from "@/components/Inputs/Inputs";

export default function VistoriaMobile(){
    return(
        <main>
            <Image src="/img-porto-logo.png" alt="Porto Seguro's logo with background"  width={500} height={500}/>
            <form className="container">
                <h1 className="container__title">Quase lá!</h1>
                <p className="container__paragraph">Precisamos que envie uma foto da lateral de sua bike e uma de seu número de série</p>
                <p className="container__paragraph">Por favor, digite o número de série de sua bike novamente:</p>
                <div className="campos mobile">
                    <Inputs type="text" placeholder="Digite seu número de série"/>
                    <Inputs type="file" id="nSerie" label="Número de Série" for="nSerie" class="campos__upload"/>
                    <Inputs type="file" id="bike" label="Lateral da Bike" for="bike" class="campos__upload"/>
                </div>
                <div className="mensagem-alerta">
                    <Alert className="alert"/><p className="aviso">Atenção: a foto do número de série deve estar legível</p>
                </div>
                <button className="campos__buttons__layout">Enviar</button>
            </form>
        </main>
    );
}