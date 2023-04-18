
const ProductsList = (props) =>{
    return <div className="card">
        <h2>{props.title}</h2>
        <h4>{props.price}</h4>
        <img src={`${props.url}`} alt="" width={360} height={240}></img>
    </div>
}
export default ProductsList