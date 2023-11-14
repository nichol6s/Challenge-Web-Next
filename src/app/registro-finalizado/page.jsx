import Layout from "@/components/Layout"
import Link from "next/link";

export default function RegistroFinalizado(){
    return(
        <Layout>
            <main>
                <img src="/img-porto-logo.png" alt="Porto Seguro's logo with background"/>
                <div className="container">
                    <h1 className="container__end">Registro Finalizado!</h1>
                    <img src="/pessoa_feliz.png" alt="Smiling Image" />
                    <Link className="link-to-consulta campos__buttons__layout" href="/">Voltar para Home</Link>
                </div>
            </main>
        </Layout>
    );
}










