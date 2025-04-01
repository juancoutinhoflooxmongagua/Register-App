import Link from "next/link";
import Layout from "@/components/Layout";
export default function Teste() {
    return (
        <Layout>
        <div>
            <Link href="/examples">Exemplos</Link>
            <h1>Olá</h1>
        </div>
        </Layout>
    );
}
