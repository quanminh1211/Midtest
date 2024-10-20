import './TitlePage.css'
const TitlePage = (props) => {
    return (
        <div className="title-page">
            <p>{props.Titlepage}</p>
            {props.children}
        </div>
    )
}

export default TitlePage;