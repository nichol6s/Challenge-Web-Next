import Link from "next/link";
import "../css/error404.css";

export default function Error404() {   
    return (
        <main className="error-main">
            <section className="error-section">
                <img className="image" src="/bike-erro.png" alt="Porto Seguro's logo with background" width={225} height={225} />
                <div className="error-container">
                    <h1 className="error-title principal">404...</h1>
                    <h2 className="error-title secundario">Caminho errado!</h2>
                    <h2 className="error-title secundario">Não encontramos essa página.</h2>
                    <Link className="campos__buttons__error" href="/">Volte para o início</Link>
                </div>
            </section>
        </main>
    )
}
