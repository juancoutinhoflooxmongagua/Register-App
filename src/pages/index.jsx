import Link from "next/link";
import Layout from "@/components/Layout";
import Navigator from "@/components/Navigator";

export default function Index() {
    return (
        <div>
              <div>
                <Link href="/examples">Exemplos</Link>
                <h1>Olá</h1>
                <br></br>
                <Navigator destino="examples" />
                <br></br>
                <Navigator destino="/navegacao" />
                <br></br>
                <Navigator destino="state"/>
                <br></br>
                <Navigator destino="integration"/>
                <br></br>
                <Navigator destino="static_content"/>
            </div>
        <Layout>
          
        </Layout>
        </div>
    );
}
