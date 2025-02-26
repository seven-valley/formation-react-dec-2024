# Module 13 
## Nouveauté React 19 avec les formulaires

```jsx
import './App.css'


export default function App() {

  const traiter =(formData)=>{
    console.log(formData.get('prenom'))  ;
  }
  return (
    <>
      <form action={traiter}>
        <input type="text" name="prenom" />
        <button type="submit">valider</button>
      </form>
    </>
  )
}
```