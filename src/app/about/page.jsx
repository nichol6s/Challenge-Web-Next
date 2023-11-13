import Layout from "@/components/Layout"

export default function About(){
    return(
        <Layout>

            <main class="content">
                <img src="/img-porto-logo.png" alt="Porto Seguro's logo with background"/>
                <section class="container">
                    <h1 class="container__title">Sobre Nós:</h1><br/>
                    <p class="container__title">Kauan de Almeida - RM: 552075</p><br/>
                    <p class="container__title">Nicholas Santos - RM: 551809</p><br/>
                    <p class="container__title">Murillo Scaff - RM: 551641</p><br/>
                    <p class="container__title">Beatriz Svestka Santos - RM: 551534</p>
                </section>
            </main>
        </Layout>
    );
}