# Correction JS TP 1 sans maquette
```jsx
import { useState } from 'react'
import './App.css'

export default function App() {
  const [info,setInfo]= useState({
      imc:'',
      tranche:'',
      poidsIdeal:'',
      kilo:'',
      class:''
    })

  const calcul =(event)=>{
    event.preventDefault()
    const poids = event.target.poids.value // string
    const taille = event.target.taille.value
    console.log(poids);
    console.log(taille);
    event.target.reset() // efface les champs input
    const info2 ={}
    const imc = poids / (taille * taille) // number
    info2.imc = imc.toFixed(1)
    if (imc < 18.5){
      info2.tranche ='maigreur'
    }
    else if (imc <25){ //18.5 < imc <25
      info2.tranche ='normal'
    }
    else if (imc <30){ 
      info2.tranche ='surpoids'
    }
    else if (imc <35){ 
      info2.tranche ='obésité'
    }
    else if (imc <40){ 
      info2.tranche ='obésité sévère'
    }else if(imc >= 40) {
      info2.tranche ='obésité massive'
    }
    setInfo(info2)
    
  }
  return (
    <>
    <form method="post" onSubmit={calcul}>
      <input name="poids" placeholder='ICI votre poids' defaultValue="80" />
      <input name="taille" placeholder='ICI votre poids' defaultValue="1.8" />
     <button type="submit">GO</button>
    </form>
    { info.imc.length > 0 &&
    <>
    <h1>Votre imc :{info.imc}</h1>
    <h2>{info.tranche}</h2>
    </>
    }
    </>
  )
}
```



# Correction V1





```tsx
//import {React} from 'react';
import { useState } from 'react';
import './App.css'
interface Iinfo{
  imc:string;
  tranche:string;
  classe:string;
  kilo:string;
  kilo:string;
  poids:string;

}
export default function App() {
 //let message = 'Bonjour';
 const [info,setInfo]= useState<Iinfo>({
  imc:'',
  tranche:'',
  classe:'',
  kilo:'',
  poids:''
 });
  const calcul =(event: React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    const poids:string = event.target.poids.value;
    const taille:string = event.target.taille.value;
    event.target.reset(); // vider champ input
    const imc:number = parseFloat(poids) / (parseFloat(taille)* parseFloat(taille))
    let info:Iinfo ={
      imc:'',
      tranche:'',
      classe:'',
      kilo:'',
      poids:''
     };
     if (imc > 25){
      const poidsIdeal:number = 25 * parseFloat(taille) *  parseFloat(taille);
      const kilo:number = poidsIdeal - parseFloat(poids);
      info.kilo = kilo.toFixed(1);
      info.poids = poidsIdeal.toFixed(1);
    }
     info.imc = imc.toFixed(1);
    if ( imc <18.5){
      const poidsIdeal = 18.5 * parseFloat(taille) *  parseFloat(taille);
      info.tranche = 'maigreur';
      const kilo:number = poidsIdeal - parseFloat(poids);
      //info.kilo = '+'+kilo.toFixed(1);
      info.kilo = `+ ${kilo.toFixed(1)}`;
      info.poids = poidsIdeal.toFixed(1);
    }
    else if (imc <25){ // 18.5 <imc <25
      info.tranche = 'normal';
    }
    else if (imc <30){ 
      info.tranche = 'surpoids';
    }
    else if (imc <35){ 
      info.tranche = 'obésité';
    }
    else if (imc <40){ 
      info.tranche = 'obésité massive';
    }
    else if (imc >=40){ 
      info.tranche = 'obésité sévère';
    }
    console.log(info);
    setInfo(info);
  }
  return (
    <>
    <form method="post" onSubmit={calcul}>
      <input name="poids" 
      defaultValue="80" 
      placeholder="Poids en kg." />
      <br /><br />
      <input 
      name="taille" 
      placeholder="Taille en mètre" defaultValue="1.8"  />
      <br /><br />
      <button type="submit"  className="btn btn-success"><i className="fa fa-plus"></i></button>
     { info.imc.length > 0  &&
     <>
     <h1>IMC :{info.imc}</h1>
     <h2>tranche :{info.tranche}</h2>
     { info.kilo.length > 0 && 
     <h3>objectif :{info.poids} kg ({info.kilo})</h3>
      }
     </>
    }
    </form>
   
    </>
  )
}

```

# Version 2
```jsx
//import {React} from 'react';
import { useState } from "react";
import "./App.css";
interface Iinfo {
  imc: string;
  tranche: string;
  classe: string;
  kilo: string;
  kilo: string;
  poids: string;
}
export default function App() {
  //let message = 'Bonjour';
  const [info, setInfo] = useState<Iinfo>({
    imc: "",
    tranche: "",
    classe: "",
    kilo: "",
    poids: "",
  });
  const calcul = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const poids: string = event.target.poids.value;
    const taille: string = event.target.taille.value;
    event.target.reset(); // vider champ input
    const imc: number =
      parseFloat(poids) / (parseFloat(taille) * parseFloat(taille));
    let info: Iinfo = {
      imc: "",
      tranche: "",
      classe: "",
      kilo: "",
      poids: "",
    };
    if (imc > 25) {
      const poidsIdeal: number = 25 * parseFloat(taille) * parseFloat(taille);
      const kilo: number = poidsIdeal - parseFloat(poids);
      info.kilo = kilo.toFixed(1);
      info.poids = poidsIdeal.toFixed(1);
    }
    info.imc = imc.toFixed(1);
    if (imc < 18.5) {
      const poidsIdeal = 18.5 * parseFloat(taille) * parseFloat(taille);
      info.tranche = "maigreur";
      const kilo: number = poidsIdeal - parseFloat(poids);
      //info.kilo = '+'+kilo.toFixed(1);
      info.kilo = `+ ${kilo.toFixed(1)}`;
      info.poids = poidsIdeal.toFixed(1);
      info.classe='warning';
    } else if (imc < 25) {
      // 18.5 <imc <25
      info.tranche = "normal";
      info.classe='success';
    } else if (imc < 30) {
      info.tranche = "surpoids";
      info.classe='warning';
    } else if (imc < 35) {
      info.tranche = "obésité";
      info.classe='danger';
    } else if (imc < 40) {
      info.tranche = "obésité massive";
      info.classe='secondary';
    } else if (imc >= 40) {
      info.tranche = "obésité sévère";
      info.classe='info';
    }
    console.log(info);
    setInfo(info);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-weight-scale"></i>
            Calcul IMC
          </a>
        </div>
      </nav>
      <div className="container">
      <form method="post" onSubmit={calcul}>
        <div className="row">
          <div className="col-4 pt-4">
            <h1 className="h3">Calculer votre IMC</h1>
            <input
              aria-label="Poids"
              className="form-control"
              placeholder="Poids en kg."
              name="poids"
            />

            <input
              aria-label="Taille"
              className="form-control mt-3"
              placeholder="taille en m."
               name="taille"
            />

            <button className="btn btn-success my-3 col-12" type="submit">
              <i className="fa-solid fa-weight-scale"></i>
            </button>
            {info.imc.length > 0 && (
          <>
           <div className={`alert mt-4 alert-${info.classe}`} role="alert">
              <h3>IMC : {info.imc}</h3>
              <p>{info.tranche}</p>
              {info.kilo.length > 0 && (
              <h4>
                objectif :{info.poids} kg ({info.kilo})
              </h4>
            )}
            </div>

           
          </>
        )}
           

          </div>
        </div>
        </form>
      </div>

      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; Seven Valley 2023
          </p>
        </div>
      </footer>
    </>
  );
}

```
# Version 3 avec JS
```jsx
import { useState } from 'react'


export default function App() {
  const [info, setInfo] = useState({
    imc: '',
    tranche: 'abc'
  });
  const calcul = (event) => {
    const info2 = {};

    event.preventDefault()
    const poids = event.target.poids.value;
    const taille = event.target.taille.value;
    event.target.reset(); // vider input
    const imc = parseFloat(poids) / (parseFloat(taille) * parseFloat(taille))
    info2.imc = imc.toFixed(1);
    // definir les tranche
    if (imc < 18.5) {
      info2.tranche = 'maigreur'
    }
    else if (imc < 25) { // 18.5 < imc <25
      info2.tranche = 'normal'
    }
    else if (imc < 30) {
      info2.tranche = 'surpoids'
    }
    else if (imc < 35) {
      info2.tranche = 'obésité '
    }
    else if (imc < 40) {
      info2.tranche = 'obésité massive'
    } else if (imc > 40) {
      info2.tranche = 'obésité morbide'
    }
    setInfo(info2);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-weight-scale"></i>
            Calcul IMC</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-4 pt-4">
            <h1 className="h3">Calculer votre IMC</h1>
            <form onSubmit={calcul}>
              <input
                name="poids"
                aria-label="Poids"
                className="form-control"
                placeholder="Poids en kg."
              />

              <input
                name="taille"
                aria-label="Taille"
                className="form-control mt-3"
                placeholder="taille en m."
              />

              <button className="btn btn-success mt-3 col-12">
                <i className="fa-solid fa-weight-scale"></i>
              </button>
            </form>
            {info.imc.length > 0 &&
              <div className="alert alert-secondary mt-4" role="alert">
                <h3>{info.imc}</h3>
                <p>{info.tranche}</p>
              </div>
            }


          </div>
        </div>
      </div>





      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; Seven Valley 2023
          </p>
        </div>
      </footer>
    </>



  )
}

```

# version 4 JS + couleur

```jsx
import { useState } from 'react'


export default function App() {
  const [info, setInfo] = useState({
    imc: '',
    tranche: 'abc',
    couleur:''
  });
  const calcul = (event) => {
    const info2 = {};

    event.preventDefault()
    const poids = event.target.poids.value;
    const taille = event.target.taille.value;
    event.target.reset(); // vider input
    const imc = parseFloat(poids) / (parseFloat(taille) * parseFloat(taille))
    info2.imc = imc.toFixed(1);
    // definir les tranche
    if (imc < 18.5) {
      info2.tranche = 'maigreur'
      info2.couleur ='danger'
    }
    else if (imc < 25) { // 18.5 < imc <25
      info2.tranche = 'normal'
      info2.couleur ='success'
    }
    else if (imc < 30) {
      info2.tranche = 'surpoids'
      info2.couleur ='warning'
    }
    else if (imc < 35) {
      info2.tranche = 'obésité '
      info2.couleur ='danger'
    }
    else if (imc < 40) {
      info2.tranche = 'obésité massive'
      info2.couleur ='danger'
    } else if (imc > 40) {
      info2.tranche = 'obésité morbide'
      info2.couleur ='primary'
    }
    setInfo(info2);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-weight-scale"></i>
            Calcul IMC</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-4 pt-4">
            <h1 className="h3">Calculer votre IMC</h1>
            <form onSubmit={calcul}>
              <input
                name="poids"
                aria-label="Poids"
                className="form-control"
                placeholder="Poids en kg."
              />

              <input
                name="taille"
                aria-label="Taille"
                className="form-control mt-3"
                placeholder="taille en m."
              />

              <button className="btn btn-success my-3 col-12">
                <i className="fa-solid fa-weight-scale"></i>
              </button>
            </form>
            {info.imc.length > 0 &&
              <div className={`alert alert-${info.couleur} mt-4`} role="alert">
                <h3>{info.imc}</h3>
                <p>{info.tranche}</p>
              </div>
            }


          </div>
        </div>
      </div>





      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; Seven Valley 2023
          </p>
        </div>
      </footer>
    </>



  )
}


```