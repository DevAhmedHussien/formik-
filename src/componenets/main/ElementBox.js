export default function ElementBox({src,label}){
    return(
        <>
        <div className="elementBoxMain">
            <img src={src} alt=""/>
            <div>
                <h3 >{label}</h3>
            </div>
        </div>
        </>
    )
}