# TP Echo Team Builder
**live preview** :  
[Tester le TP Echo](https://www.sevenvalley.fr/tp-javascript/tpe) 

![alt text](tpe.webp)

# TP Team Builder
Dans Real Time data Base
- créer un noeud personnes.json
- créer un noeud equipes.json

# Créer des components
<code>TrLigne.jsx</code> Appeler dans l' équipe et la liste des employés  
<code>TableEquipe.jsx</code> le composant Equipe    

# Créer les business object
- Personne.ts
- Equipe.ts

# Etapes
- ajouter une equipe
- supprimer une equipe  
- ajouter une personne dans une equipe
- ajouter une personne dans l'entreprise
- enlever une personne d'une equipe
- enlever la personne de l'entreprise


## EXERCICES
**Excercice 1**  
Créer le tableau  **nouveauClients** à partir de personnes et clients  
utiliser <code>.filter</code> et <code>.find</code>
```js
const personnes =[
    {id:1,nom:'Brad',prenom:'PITT'},
    {id:2,nom:'Bruce',prenom:'WILLIS'},
    {id:3,nom:'Angelina',prenom:'Jolie'},
    {id:4,nom:'Tom',prenom:'CRUISE'}
];
const clients =[
    {id:1,nom:'BRAD',prenom:'PITT'},
    {id:3,nom:'Angelina',prenom:'Jolie',age:16}
];
// const nouveauClients =[
//         {id:2,nom:'Bruce',prenom:'WILLIS'},
//         {id:4,nom:'Tom',prenom:'CRUISE'}
//     ];
```
**Excercice 2**  
Créer le tableau  **dejaClients** à partir de personnes et clients  
utiliser <code>.filter</code> et <code>.find</code>
```js
const personnes =[
    {id:1,nom:'Brad',prenom:'PITT'},
    {id:2,nom:'Bruce',prenom:'WILLIS'},
    {id:3,nom:'Angelina',prenom:'Jolie'},
    {id:4,nom:'Tom',prenom:'CRUISE'}
];
const clients =[
    {id:1,nom:'BRAD',prenom:'PITT'},
    {id:3,nom:'Angelina',prenom:'Jolie',age:16}
];
// const dejaClients =[
//     {id:1,nom:'Brad',prenom:'PITT'},
//     {id:3,nom:'Angelina',prenom:'Jolie'},
//     ];
```

**Excercice 3**   
Créer le tableau  **majeurs** à partir de personnes  
utiliser <code>.fitler</code>
```js
const personnes =[
    {id:1,nom:'Brad',prenom:'PITT',age:18},
    {id:2,nom:'TOM',prenom:'CRUISE',age:15},
    {id:3,nom:'Angelina',prenom:'Jolie',age:16},
    {id:4,nom:'TOM',prenom:'CRUISE',age:61}
];
   
// const majeurs =[
//     {id:1,nom:'Brad',prenom:'PITT',age:18},
//     {id:4,nom:'TOM',prenom:'CRUISE',age:61}
//     ];
```


**Excercice 4**  
Créer le tableau  **majeurs** à partir de personnes  
1 - Calucler le Total avec <code>.map</code>  
2 - calculer le Toatl avec <code>.reduce</code>
```js
const items = [
  { name: 'Apple', price: 1 },
  { name: 'Orange', price: 2 },
  { name: 'Mango', price: 3 },
];

let totalPrice = 0;

```

# Correction

## Ecercice 1 & 2
```js
const personnes =[
    {id:1,nom:'Brad',prenom:'PITT'},
    {id:2,nom:'Bruce',prenom:'WILLIS'},
    {id:3,nom:'Angelina',prenom:'Jolie'},
    {id:4,nom:'Tom',prenom:'CRUISE'}
];
const clients =[
    {id:1,nom:'BRAD',prenom:'PITT'},
    {id:3,nom:'Angelina',prenom:'Jolie',age:16}
];
// excercice 1
const nouveauClients = personnes.filter(p => !clients.find(c => c.id === p.id));
console.log(nouveauClients);

// excercice 2
const dejaClients = personnes.filter(p => !clients.find(c => c.id === p.id));
console.log(dejaClients);
```

## Ecercice 3
```js
const personnes =[
    {id:1,nom:'Brad',prenom:'PITT',age:18},
    {id:2,nom:'TOM',prenom:'CRUISE',age:15},
    {id:3,nom:'Angelina',prenom:'Jolie',age:16},
    {id:4,nom:'TOM',prenom:'CRUISE',age:61}
];
const majeur = personnes.filter((personne)=>{
    return personne.age>17
})
console.log(majeur)
```

## Ecercice 4
```js
const items = [
  { name: 'Apple', price: 1 },
  { name: 'Orange', price: 2 },
  { name: 'Mango', price: 3 },
];
const total = items.reduce((total, item) => total + item.price, 0);
console.log(total)

const total2 = items.map((item) => item.price).reduce((a, b) => a + b);
console.log(total);

let total3 =0
items.map((item) => total3 += item.price); 
console.log(total3);
```