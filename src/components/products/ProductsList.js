import './ProductsList.css'

const ProductsList = (props) =>{
    return <div className="card-item">
        <h2>Album{props.id}</h2>
    <div >
        <div className="body">
        <h5 className="title">{props.title}</h5>
        <div className='price-btn'>
        <img className="img" src={`${props.url}`} alt=""  ></img>
        <p className="text">${props.price}</p>
        </div>
        <a href="xyz.com" className="btn btn-primary">Add to Cart</a>
      </div>    
    </div>
    </div>
}
export default ProductsList

