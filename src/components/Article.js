const Article = ({title, date="January 1, 1970", preview, minutes}) => {
    
    const returnMins = () =>{
        if (minutes < 30){
            let num = Math.ceil(minutes / 5);
            let coffeeString = "";
            for(let i = 0; i < num; ++i){
                coffeeString += "☕️"
            }
            return <p>{coffeeString} {minutes} min read</p>
        }else{
            let num = Math.ceil(minutes / 10);
            let bentoString = "";
            for(let i=0; i < num; ++i){
                bentoString += "🍱"
            }
            return <p>{bentoString} {minutes} min read</p>
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            {returnMins()}
        </article>
    )
}

export default Article