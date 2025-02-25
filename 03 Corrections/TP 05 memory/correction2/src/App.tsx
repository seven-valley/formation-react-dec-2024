import { useEffect, useState,useRef } from 'react'
import melanger from './misc/Utils'
import Tuile from './components/Tuile'
import './App.css'

export default  function App() {
  const [tuiles,setTuiles] = useState<number[]>([])
  const memo = useRef<number>(-1);
  const win = useRef<number>(0);
  const myDate = useRef<any>(0);
  useEffect(()=>{
    const tab12:number[] = [0,1,2,3,4,5,6,7,8,9,10,11]
    let tab24:number[] = tab12.concat(tab12) // tab24 = tab12 +tab12
    tab24 = melanger(tab24)
    setTuiles(tab24);
  },[])
  const comparer =(indice:number):void=>{
    const tuiles2:number[] =[...tuiles];
    if (memo.current == -1){ // 1er clique
      console.log('1er')
      console.log(indice)
      if (myDate.current == 0){
        myDate.current = new Date();
      }
      memo.current = indice
    }
    else{ // 2em clique
      console.log('2eme')
      console.log(indice)
      console.log(memo.current)

      if(tuiles[memo.current] == tuiles[indice]){
        // verifier que ce n'est pas la meme
        if (memo.current != indice){
          tuiles2[indice] =-1;
          tuiles2[memo.current]= -1;
          win.current = win.current + 1;
          console.log('win',win.current)
        }
      }
      if (win.current == 12){
        const myDate2 = new Date();
        let dif = (myDate2.getTime() - myDate.current.getTime())/1000; 
        
        alert('WIN WIN !!! '+dif+ 'secondes');
      }
      memo.current = -1
    }
    setTuiles(tuiles2);

  }
  return (
    <div className="container">
      {
        tuiles.map((tuile:number,indice:number)=><Tuile 
        key={`tuile${indice}`} 
        tuile={tuile} 
        indice={indice}
        comparer={comparer}
        memo={memo.current}
        />)
      }
    </div>
  )
}


