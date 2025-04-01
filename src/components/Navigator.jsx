import Link from "next/link"
export default function Navigator(props){
    return (
        <Link href={props.destino}>{props.destino}</Link>
    )
} 