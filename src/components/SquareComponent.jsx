import './Game.css'

function SquareComponent(props) {
  const classes = (props.className ? `${props.className} square` : `square`)
  return (
    <div  className={classes} id={props.state==="X"?` white`:` red`} onClick={props.onClick} >
      {props.state} 
    </div>
  );
}

export default SquareComponent;