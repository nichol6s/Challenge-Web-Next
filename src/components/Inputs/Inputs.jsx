import "./Inputs.css"

export default function Inputs(props){
    const placeHolderModificada = `${props.placeholder}...`
    
        return(
            <div className="campos__espaco">
                <label htmlFor={props.for} className={props.class}>{props.label}</label>
                <input type={props.type} id={props.id} placeholder={placeHolderModificada} className="campos__layout" autoComplete="off"/><br/>
            </div>
        );
}