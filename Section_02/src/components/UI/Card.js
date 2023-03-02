function Card(props) {
    // card becomes the default classname
    // otherwise classes are implemented
    const classes = 'card ' + props.className
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;