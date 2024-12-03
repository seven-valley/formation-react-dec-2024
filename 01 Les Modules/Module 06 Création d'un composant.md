
# Création du composant Personne.jsx
Création du repertoir <code>models</code>
Création du fichier <code>Personne.jsx</code>

```
|-- src
        |-- models
            |-- Personne.js
```

```tsx
export default function Personne({personne,indice,qui}) {

  return (
    <>
      <h1>{indice} {personne.prenom} {personne.nom}</h1>
      <button onClick={()=>qui(indice)}>qui ?</button>
    </>
  )
}
```

# App.tsx
```tsx
import './App.css'
import Personne from './models/Personne';
export default function App() {
const [personnes, setPersonnes] = useState([
  {prenom:'Brad',nom:'PITT'},
  {prenom:'Angelina',nom:'JOLIE'},
]);
  const qui = (indice) => {
    console.log("qui",indice);
    console.log(personnes[indice]);
  }
  return (
    <>
    {
      personnes.map((personne,indice) => 
      <Personne 
      key={indice} 
      personne={personne} 
      indice={indice}
      qui={qui}
      />)
    }
    </>
  )
}

```

# PersonneComponent.tsx
```tsx
import Personne from "../models/Personne";

interface IpropsPersonne{
    p:Personne;
    indice:number;
    qui:(indice:number)=> void;
}


export default function PersonneComponent(props:IpropsPersonne){
    return (
        <>
        <h1>Je suis {props.p.prenom} {props.p.nom}</h1>
        <button onClick={()=> props.qui(props.indice)}>Qui ?</button>
        </>
    );
}
```