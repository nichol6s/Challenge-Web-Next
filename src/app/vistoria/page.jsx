import Layout from "@/components/Layout";
import Link from "next/link";

export default function Vistoria(){
    const qrCodeValue = 'https://challenge-web-next.vercel.app/vistoria-mobile';
    return(
        <Layout>
            <main>
                <img src="/img-porto-logo.png" alt="Porto Seguro's logo with background"/>
                <form className="container">
                    <h1 className="container__title">Escaneie o QR Code para iniciar a vistoria</h1>
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeValue)}`} alt="QR Code" />
                    <Link className="link-to campos__buttons__layout" href="/vistoria-mobile">Continuar</Link>
                    <Link className="link-to campos__buttons__layout" href="/consulta">Voltar</Link>
                </form>
            </main>
        </Layout>
    );
}
