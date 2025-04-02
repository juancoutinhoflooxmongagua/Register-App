import Link from "next/link";
import Layout from "@/components/Layout";
import Navigator from "@/components/Navigator";

export default function Index() {
    return (
        <div>
              <div>
                <Link href="/examples">Exemplos</Link>
                <h1>Olá</h1>
                <Navigator destino="examples" />
                <Navigator destino="/navegacao" />
            </div>
        <Layout>
          
        </Layout>
        </div>
    );
}
