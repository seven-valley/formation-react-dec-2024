import { useState, useEffect  } from 'react'
import '../App.css'
import Personne from '../components/Personne.jsx'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import {getGuests} from '../services/api.js'
import jsPDF from 'jspdf'
import logo from '../assets/logo.png'
import open from '../assets/OpenSans-Regular.ttf'
export default function Home() {
  const [personnes, setPersonnes] = useState([])

  useEffect(()=>{
    recupererInvites();
  },[]);
  const afficher=()=>{
    const pdf = new jsPDF();
    pdf.addFont(open,"OpenSans-Regular","normal")
    pdf.setFont("OpenSans-Regular")
    pdf.addImage(logo,'PNG',10,10,30,30)
    pdf.setFontSize(50)
   
    pdf.text("hello world !",50,50)
    pdf.setFontSize(12)
   
    let myY=113;
    let test = true;
    //-------------------------------
    personnes.map(p=>{
      if(p.present){
        if (test){
          pdf.setFillColor(233,232,232);
        }
        else{
          pdf.setFillColor(246,246,246);
        }
        
        pdf.rect(40,myY-20,100,10,"F");
        
        myY+=10;
        test = !test;
      }
    })
    //-------------------------------
    myY=100;
    personnes.map(p=>{
      if(p.present){
      pdf.text(`${p.prenom} ${p.nom}`,50,myY)
      myY+=10;
      test = !test;
    }
    })
    //-------------------------------
    pdf.output('dataurlnewwindow');
    //pdf.save(`document.pdf`)
}
  const recupererInvites = async () => {

    const invites = await getGuests();
    let personnesAJour = [];
    for (let id in invites)
    {
      const personne = invites[id];
      personnesAJour.push({
        id: id,
        nom: personne.nom,
        prenom: personne.prenom,
        present: personne.present,
      });
    }
    setPersonnes(personnesAJour);
  }

  return (
    <>
      <Nav active={'Home'} />
      <div className="container">
          <div className="row">
            <div className="col-4">
              <button onClick={afficher} className="btn btn-danger"> pdf</button>
              <table className="table table-striped mt-4">
                <tbody>
                  <tr>
                    <th>Prénom</th>
                    <th>Nom</th>
                  </tr>

                  {
                    personnes.map((p, ind) => <Personne 
                      p = {p}
                      readOnly = {true}
                      ind = {ind} 
                      key = {ind} 
                  />)}

                </tbody>
              </table>
          </div>
        </div>
      </div>
   
    </>
  )
}