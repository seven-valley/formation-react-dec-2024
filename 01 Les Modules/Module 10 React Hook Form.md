# React Hook form
https://react-hook-form.com/get-started
```
npm install react-hook-form
```
# avant
```tsx
let counter =0;
export default function App() {
  
  const valider =(e:any)=>{
    e.preventDefault();
    console.log(e.target.appareil.value);
    console.log(e.target.statut.value);
  }
  return (
    <>
      <form method="post" onSubmit={valider} >
        <input name="appareil"/><br /><br />
        <input name="statut" />
        <button type="submit">GO</button>
      </form>
      
    </>
  )
}
```



# apres
```tsx
import { useForm } from "react-hook-form"

export default function App() {
  const {register, handleSubmit} = useForm();
  const valider =(data:any)=>{
    console.log(data);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit(valider)} >
        <input {...register("appareil")} />
        <input {...register("statut")} />
        <button type="submit">GO</button>
      </form>
      
    </>
  )
}
```

# le watch 
```tsx
import { useForm } from "react-hook-form"
let counter =0;
export default function App() {
  const {register, watch, handleSubmit} = useForm(); // importer watch
  const valider =(data:any)=>{
    console.log(data);
  }
  console.log(watch('appareil'))
  return (
    <>
      <form onSubmit={handleSubmit(valider)} >
        <input {...register('appareil')} />
        <input {...register('statut')} />
        <button type="submit">GO</button>
      </form>
      <p> Render {counter++}</p>
    </>
  )
}
```

# La gestion des erreurs
```tsx
import { useForm } from "react-hook-form"

export default function App() {
  const {register,  handleSubmit ,formState: { errors },} = useForm();
  const valider =(data:any)=>{
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(valider)} >
        <input {...register('appareil',{
					required: true
					
				})} /><br />
        {/* error message => appareil */}
			{errors.appareil && <span>Vous devez ecrire le nom </span>}
      <br /> <input {...register('statut')} />
        <button type="submit">GO</button>
      </form>
      
    </>
  )
}
```

# le typeScript
```tsx
import { useForm, SubmitHandler } from "react-hook-form"

export default function App() {
  const {register,  handleSubmit ,formState: { errors },} = useForm();
  
  interface IFormInput {
    appareil: string
    status: string

  }
  
  const valider: SubmitHandler<IFormInput> =(data:any)=>{
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(valider)} >
        <input {...register('appareil',{
					required: true, maxLength: 20
					
				})} /><br />
        {/* error message => appareil */}
			{errors.appareil && <span>Vous devez ecrire le nom </span>}
      <br /> <input {...register('statut',{ pattern: /^[A-Za-z]+$/i })} />
        <button type="submit">GO</button>
      </form>
     
    </>
  )
}
```
## correction
```jsx
import { useForm } from "react-hook-form"

export default function App() {
  const {register,  handleSubmit ,formState: { errors },} = useForm();
  const valider =(data:any)=>{
    console.log(data);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit(valider)} >
      {errors.appareil && <span>Vous devez ecrire le nom </span>}
      <br />
        <input {...register("appareil",{
					required: true
				})} />
        <br />
        {errors.statut && <p role="alert">{errors.statut.message}</p>}
        <input {...register("statut",{ 
          required: "remplir svp", 
          minLength: {value:3,message:'3 char min'},
          pattern:{ value: /^[A-Za-z]+$/i ,message:"pas chiffre"} })} />
        <br />
        <button type="submit">GO</button>
      </form>
      
    </>
  )
}
```

## démo avec gestion d'erreurs avec Bootstrap
```jsx
import './App.css'
import {useForm} from "react-hook-form"

export default function App() {
 const {register,handleSubmit ,formState:{errors},reset} = useForm()
 const valider =(data)=>{
  console.log(data)
  console.log(data.prenom)
  console.log(data.nom)
  reset();
 }

  return (
    <>
    <div className="container">
   <div className="col-4">
    <form onSubmit={handleSubmit(valider)}>
      <div className="form-floating mb-3">

      <input 
      id="prenom" 
      type="text" 
      {...register("prenom", {
        required: "Saisir prénom", 
        pattern: /^[A-Za-z]+$/i,
       })} 
      className={`my-3 form-control ${errors.prenom && 'is-invalid'}`}/>
      <label htmlFor="prenom">Prénom</label>
      <span className="text-danger">
      { errors.prenom && <p role="alert">{errors.prenom.message}</p>}
      {errors.prenom?.type === "pattern" && (
        <p role="alert">Pas de chiffres</p>
      )}

      </span>
      </div>
      <input type="text" {...register("nom")} className="form-control"/>
      <button type="submit" className="btn btn-primary mt-3">Valider</button>
    </form>
    </div>
    </div>
    </>
  )
}



```
