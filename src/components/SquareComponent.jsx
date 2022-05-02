import './Game.css'

function SquareComponent(props) {
  const classes = (props.className ? `${props.className} square` : `square`)
  return (
    <div  className={classes} style={{color : props.state==="X"? `black` : `red`}} onClick={props.onClick} >
      {props.state} 
    </div>
  );
}

export default SquareComponent;