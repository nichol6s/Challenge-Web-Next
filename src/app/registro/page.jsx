import Link from "next/link";
    import Inputs from "@/components/Inputs/Inputs";
import Layout from "@/components/Layout";

export default function Registro(){
    return(
        <Layout>
            <main>
                <img src="/img-porto-logo.png" alt="Porto Seguro's logo with background"/>
                <form className="container">
                    <h1>Registrar Bike</h1>
                    <h1 className="container__title">Preencha os campos abaixo:</h1>
                    <div className="campos">
                        <Inputs type="text" placeholder="Digite o número de série" label="Número de série" class="campos__texto"/>
                        <Inputs type="number" placeholder="Digite o ano de fabricação" label="Ano de fabricação" class="campos__texto"/>
                        <Inputs type="text" placeholder="Digite o modelo da bike" label="Modelo" class="campos__texto"/>
                        <Inputs type="text" placeholder="Digite a marca da bike" label="Marca" class="campos__texto"/>
                    </div>
                    <Link className="link-to-consulta campos__buttons__layout" href="registro-finalizado">Enviar</Link>             
                    <Link className="link-to-consulta campos__buttons__layout" href="/">Voltar</Link>
                </form>
            </main>
        </Layout>
    );
}