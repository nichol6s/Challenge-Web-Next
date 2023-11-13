import Link from "next/link";
import Image from "next/image";

export default function Home(){
    return (
        <main>
            <Image src="/img-porto-logo.png" alt="Porto Seguro's logo with background" width={500} height={500} />
            <section className="container">
                <h1 className="container__title">Vistoria Bike</h1>
                <p>Sua bicicleta está registrada?</p>
                <Link href="/consulta" className="campos__buttons__layout link-to">Consultar</Link>
                <Link href="/registro" className="campos__buttons__layout link-to">Registrar Bike</Link>
            </section>
        </main>
        
    );
    
}