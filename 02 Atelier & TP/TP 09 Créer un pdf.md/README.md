# TP 09 Créer un pdf

https://artskydj.github.io/jsPDF/docs/jsPDF.html

```
npm i jspdf
```
- Afficher la liste des vip sur un pdf
- Afficher une image
- Afficher un couleur de fond
- Ajouter une police ttf

# Démo
```jsx
import jsPDF from "jspdf"
//...
const afficher=()=>{
    const pdf = new jsPDF();
    pdf.text("hello world !",30,40)
    pdf.output('dataurlnewwindow');
    //pdf.save(`document.pdf`)
}
```

# Correction

- copier dans le répertoire <code>assets</code> : logo.png
- copier dans le répertoire <code>assets</code> : OpenSans-Regular.ttf

```jsx
 import jsPDF from 'jspdf'
import logo from '../assets/logo.png'
import open from '../assets/OpenSans-Regular.ttf'

 //...
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
```
![alt text](image.png)