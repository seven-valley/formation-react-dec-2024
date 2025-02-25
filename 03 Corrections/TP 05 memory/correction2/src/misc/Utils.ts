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

  
export default melanger;