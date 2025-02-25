import { useEffect, useState } from 'react'
import Tuile from './components/Tuile.tsx'
import './App.css'

function App() {
  const [tuiles, setTuiles] = useState<number[]>([])
  const [memo, setMemo] = useState<number>(-1)
  const [sel, setSel] = useState<number>(-1)
  const [win, setWin] = useState<number>(0)
  //---
  const melanger= (tab:number[])=>{
    let tab2 =[];
    for(let i =0;i<tab.length;i++){		
      let x:number=0;
      do{
        // je genere un nb alea de 0 à taille du tableau
       x =	Math.floor(Math.random() * tab.length);
      }while(tab2[x] != undefined);
      // tant que l'emplacement n'est pas vide
      tab2[x] = tab[i];
    }
    return tab2;
  }
  //---
  useEffect(()=>{
    let tab42:number[] =[]; // 42 tuiles
    for (let i =0;i<42;i++){
      tab42.push(i);
    }
    tab42 = melanger(tab42);
    let tab16:number[] = tab42.splice(0,16);
    let tab32:number[] = tab16.concat(tab16);
    tab32 = melanger(tab32);
    // console.log(tab42);
    setTuiles(tab32);
  },[]);
 const comparer=(indice:number)=>{
  if (memo == -1){ // 1er clique
    setMemo(indice);// je memo
    setSel(indice);
  }else{// 2eme clique
    setSel(-1)
     // verifier si mm tuile
    if (tuiles[memo] == tuiles[indice]){ // je compare
      if (memo != indice){
        tuiles[memo]=-1;
        tuiles[indice] = -1;
        let win2 = win +1;
        setWin(win2);
      }
    }
    console.log(win);
    setTuiles([...tuiles]);
    setMemo(-1);
    if (win == 15){
      alert('WIN !!!!');
    }

  }
 }
  return (
    <>
      <div className="container">
      
      {tuiles.map((t:number,indice:number)=>
        <Tuile 
        key={indice} 
        indice={indice} 
        valeur={t}
        sel={sel}
        comparer={comparer} />
      )}
      </div>
      <br /><br />
      {/* <div><button id="btnTricher">Tricher</button></div> */}

    </>
  )
}

export default App
