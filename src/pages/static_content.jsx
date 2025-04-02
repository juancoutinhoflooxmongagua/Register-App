import Layout from "@/components/Layout";

export function getStaticProps() {
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function StaticContent({ number }) {  
    return (
        <div>
        <p>{number}</p> 
        
        <Layout>  
            <div>
               
                <h1>oi</h1>
            </div>
        </Layout>
        </div>
    )
}