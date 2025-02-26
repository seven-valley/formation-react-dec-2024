import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

export default function Produit() {
    const {id} = useParams()
    return (
      <>
        <Nav />
        <h1>Produit</h1>
        <h2>{id}</h2>
      </>
    )
  }