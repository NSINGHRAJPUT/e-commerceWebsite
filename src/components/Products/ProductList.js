import './ProductList.css'

const ProductList = (props) =>{
   
   const addToCart = (e)=>{
    e.preventDefault();
   let obj={
    id:Math.random(),
    title: `${props.title}`,
    price: props.price,
    imageUrl: `${props.url}`,
    }
   console.log(obj)
   }
    return <div className="card-item">
        <h2>Album{props.id}</h2>
    <div >
        <div className="body">
        <h5 className="title">{props.title}</h5>
        <div className='price-btn'>
        <img className="img" src={`${props.url}`} alt=""  ></img>
        <p className="text">${props.price}</p>
        </div>
        <button  className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
      </div>    
    </div>
    </div>
}
export default ProductList

