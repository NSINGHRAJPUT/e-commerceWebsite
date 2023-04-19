import { Button } from 'react-bootstrap'
import './ProductsList.css'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

const ProductsList = (props) =>{
   const cartCtx = useContext(CartContext)
   const addToCart = (e)=>{
    e.preventDefault();
   let obj={
    id:Math.random(),
    title: `${props.title}`,
    price: props.price,
    imageUrl: `${props.url}`,
    }
    cartCtx.addItem(obj)
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
        <Button variant='primary' className="btn btn-primary" onClick={addToCart}>Add to Cart</Button>
      </div>    
    </div>
    </div>
}
export default ProductsList

