import Link from "next/link";
import Image from "next/image";

export default function Vistoria(){
    return(
        <main>
            <Image src="/img-porto-logo.png" alt="Porto Seguro's logo with background" width={500} height={500} />
            <form className="container">
                <h1 className="container__title">Escaneie o QR Code para iniciar a vistoria</h1>
                <p>QR Code Aqui</p>
                <p>O usuário será redirecionado para a página mobile da vistoria ao escanear</p>      
                <Link className="link-to campos__buttons__layout" href="/vmobile">Continuar</Link>
            </form>
        </main>
    );
}