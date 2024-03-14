import CardHeader from "./CardHeader"

function Card() {
    return (
        <>
            <CardHeader></CardHeader>
            <div className="card-body" style={{"width":"18rem"}}>
                <h5 className="card-title">Gato Feliz</h5>
                <p className="card-text">gato</p>
                <a href="#" className="btn btn-primary">Dale click</a>

            </div>


        </>
    )
}
export default Card