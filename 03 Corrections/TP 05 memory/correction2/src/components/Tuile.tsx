interface IPropsTuile{
    tuile:number;
    indice:number;
    comparer:(indice:number)=> void;
}

export default function Tuile(props:IPropsTuile){
    return (
        <div>{ props.tuile != -1 &&
            <img src={`./src/assets/img/${props.tuile}.webp`} 
            onClick={()=>props.comparer(props.indice)}
            width="80" />
        }
        </div>
    )
}