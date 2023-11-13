import Link from "next/link";
import Inputs from "@/components/Inputs/Inputs";
import Layout from "@/components/Layout";

export default function Consulta(){
    return(
        <Layout>
            <main>
                <img src="/img-porto-logo.png" alt="Porto Seguro's logo with background"/>
                <form className="container">
                    <h1>Consultar Bike</h1>
                    <h1 className="container__title">Insira o número de série da bike</h1>
                    <div className="campos">
                        <Inputs class="campos__texto" placeholder="Digite o número de série" label="Número de série" type="text"/>
                    </div>
                    <Link href="/vistoria" className="link-to-consulta campos__buttons__layout">Iniciar Vistoria</Link>              
                    <Link className="link-to-consulta campos__buttons__layout" href="/">Voltar</Link>
                </form>
            </main>
        </Layout>
    );
}