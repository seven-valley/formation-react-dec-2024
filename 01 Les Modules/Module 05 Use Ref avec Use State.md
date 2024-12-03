# useRef ?
Prise en main de <code>useRef</code> 
## Comment utiliser useRef ?
Mise en place de <code>useRef</code>   
:one: Importer  
:two: Déclarer  & définir une valeur par défault avec <code>useRef()</code>  
:three: afficher _On note que la valeur est stocker dans l'attribut_ <code>.current</code>  
  
```jsx
import { useRef } from 'react';
export default function App() {
  const nombre = useRef(12);
  return (
    <h1>{nombre.current}</h1>
  )
}
```
## Cela ne marche pas ?
Lorsque je clique la valeur dans la vue HTML **ne** change **pas** !    
**Pourquoi ?**  
La modification d'un useRef **ne** déclenche **pas** un **"Redering"** de la vue HTML   

```jsx
import { useRef } from 'react';
export default function App() {
  const nombre = useRef(12);
  const changer = () => {
    nombre.current = 24;
  }
  return (
    <>
    <h1>{nombre.current}</h1>
    <button onClick={changer}></button>
    </>
  )
}
```

# useRef VERSUS UseState
Afin de bien comprendre la différence entre <code>useState</code> et <code>useRef</code>    
Voici un exmple avec 2 compteurs    
Nous pouvons constater que la modification de <code>useRef</code> **ne** déclencle **pas** un **"Rendering"** de la vue HTML.

```jsx
import { useRef } from "react";

export default function App() {
  const nombre = useRef(0); //nombre.current =0
  const [valeur,setValeur]= useState<number>(0);
  const ajouterUseState =()=>{
    setValeur(valeur +1);
    console.log(valeur +1);
  }
  const ajouterUseRef=()=>{
    nombre.current = nombre.current +1;
    console.log(nombre.current)
  }
  return (
    <>
  <button onClick={ajouterUseRef}>Ajouter use Ref</button>
  <br /><br />
  <button onClick={ajouterUseState}>Ajouter use State</button>

  <h3>use Ref : {nombre.current}</h3>
  <h3>use State : {valeur}</h3>
    </>
  );
}
```

# Le 2 ways binding en 4 étapes 
## :one: Epape 1
Utilisation de <code>onChange</code> sur input
```jsx
import { useRef } from "react";

export default function App() {
  const afficher=(event)=>{
    console.log(event.target.value); 
  }
  return (
      <input name="prenom"   onChange={afficher}/>
  );
}
```
## :two: Epape 2
Mise en place de **2 champs** input  
```jsx
import { useRef } from "react";

export default function App() {
  const afficher=(event)=>{
    // le nom du champ :
    console.log(event.target.name); // prenom
    console.log(event.target.value); // 'abc'
  }
  return (
    <>
      <input name="prenom"  placeholder="Votre prénom" onChange={afficher}/>
      <br /><br />
      <input name="nom"  placeholder="Votre nom" onChange={afficher}/>
    </>
  );
}
```

## :three: Epape 3
```jsx
import { useState,useRef } from "react";

export default function App() {
  const [message,SetMessage]=useState('');
  const prenom = useRef('');
  const nom = useRef('');
  const afficher=(event)=>{
    // le nom du champ :
    if (event.target.name =='prenom' ){
      prenom.current = event.target.value;
    }else{
      nom.current = event.target.value.toUpperCase();
    }
    SetMessage(`${prenom.current} ${nom.current}`);

  }
  return (
    <>
      <input name="prenom"  placeholder="Votre prénom" onChange={afficher}/>
      <br /><br />
      <input name="nom"  placeholder="Votre nom" onChange={afficher}/>
      <h1>{message}</h1>
    </>
  );
}

```

##  :four: Epape 4
### Version épurée et simplifiée :rocket:
je link les champs input directement avec <code>ref={prenom}</code>  
Ne pas oublie le <code>.value</code> dans  <code>prenom.current.value</code>  
```jsx
import { useState,useRef } from 'react';
import './App.css'
export default function App() {
  const prenom = useRef('');
  const nom = useRef('');
  const [message,setmessage]=useState('') 
  const afficher =()=>{

   setmessage(`${prenom.current.value} ${nom.current.value}`)
  }
  return (
    <>
    <input ref={prenom}  onChange={afficher} />
    <input ref={nom} onChange={afficher} />
    <h1>{message}</h1>
    </>
  )
}

```