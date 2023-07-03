export function InformationDisplayTemplate(info: {title: string, firstParagraph: string, secondParagraph: string, logo: string}) {
    return <div>
        <img src={info.logo} alt="F1 Logo" className="F1-logo"/>
        <h1 className="F1-header">
            {info.title}
        </h1>
        <p>
            {info.firstParagraph}
        </p>

        <p>
            {info.secondParagraph}
        </p>

    </div>
}