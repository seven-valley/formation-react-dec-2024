interface IPropsTuile{
    tuile:number;
    indice:number;
    memo:number;
    comparer:(indice:number)=> void;
}

export default function Tuile(props:IPropsTuile){
    return (
        <div className={props.memo ==props.indice ? 'green': ''}>{ props.tuile != -1 &&
            <img src={`./src/assets/img/${props.tuile}.webp`} 
            onClick={()=>props.comparer(props.indice)}
            width="80" />
        }
        </div>
    )
}