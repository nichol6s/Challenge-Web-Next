import Layout from "@/components/Layout";
import Link from "next/link";

export default function Vistoria(){
    return(
        <Layout>
            <main>
                <img src="/img-porto-logo.png" alt="Porto Seguro's logo with background"/>
                <form className="container">
                    <h1 className="container__title">Escaneie o QR Code para iniciar a vistoria</h1>
                    <p>QR Code Aqui</p>
                    <p>O usuário será redirecionado para a página mobile da vistoria ao escanear</p>      
                    <Link className="link-to campos__buttons__layout" href="/vistoria-mobile">Continuar</Link>
                </form>
            </main>
        </Layout>
    );
}