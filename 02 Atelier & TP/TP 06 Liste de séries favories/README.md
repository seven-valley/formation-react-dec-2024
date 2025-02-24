# TP 08 - Mes Séries préférées
<img src="../../img/tp/tp7.webp" width="400"> 


:one: Création du component <code>TrSearch.jsx</code>
```html
<tr>
    <td>Foundation</td>
    <td>2021</td>
    <td>7.4</td>
    <td>
        <img
        src="https://m.media-amazon.com/images/M/xx.jpg"
        alt="Star Wars"
        width="80"
        />
    </td>
    <td class="align-middle">
        <button class="btn btn-outline-danger">
        <i class="fa fa-trash"></i>
        </button>
    </td>
</tr>
```  
:two: Mise en place de  <code>Fetch</code> pour rechercher une série 
- Récupérer un tableau de séries
avec **s=** pour récupérer un tableau
``` 
http://www.omdbapi.com/?apikey=xxxx&s=star
``` 
:three: Création du useState  <code>series</code>   
```jsx
  const [series,setSeries] = useState([]);
```
:four: Créer la fonction ajouter    
:five: Création du useState  <code>tabFav</code>    
```jsx
  const [tabFav,setTabFav] = useState([]);
```
:six: Fonction ajouter une série au tableau de fav <code>series</code>   
:seven: Créer une fonction asynchrone   
pour récupérer la note imdb (serie.imdbRating)   
avec l'id du film(serie.**imdbID**)  
**i**=serie.**imdbID**
```
http://www.omdbapi.com/?apikey=xxxx&i=zzz
```
:eight: Quand on ajoute la série elle s'enlève de la liste de recherche  
:nine: Enlever la série de la liste de favories  
**10** - Utiliser local storage  
