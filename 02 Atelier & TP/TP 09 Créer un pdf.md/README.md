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