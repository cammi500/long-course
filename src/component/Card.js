import "./card.css"
function Card  (props){
    const classes = "card " + props.classname;//container
 return <div className={classes}>{props.children}</div>
};
export default Card;