import './Background.css'
const Background = (props) => {
    return (
        <div className="background">
            <img src={props.imgback} />
        </div>
    )
}

export default Background;