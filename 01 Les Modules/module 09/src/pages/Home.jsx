import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

export default function Home() {
    const navigate = useNavigate()
    const id = 53;
    const naviguer =()=>{
        navigate(`/produit/${id}`);
    }
    return (
      <>
        <Nav />
        <h1>Home</h1>
        <Link to={`produit/${id}`}> Produit {id}</Link>
        <br /><br />
        <button onClick={naviguer}>go</button>
      </>
    )
  }