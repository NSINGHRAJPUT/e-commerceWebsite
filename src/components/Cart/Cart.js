import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Cart.css'

const cartElements = [
    {
    id:1,    
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },
    {
    id:2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
    {
    id:3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    }]

function Cart({ name, ...props }) {
  const [show, setShow] = useState(false);
  const[cartItems,setCartItems] = useState(cartElements)

  const removeHandler=(e)=>{
    e.preventDefault();
    console.log(e.target.value)
    let id=e.target.value
    setCartItems((preData) => {
        const newData = preData.filter((goal) => goal.id !== id);
        return newData;
      });
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='cart'>
      <Button variant="primary" onClick={handleShow} className="xl">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='headings'>
            <div>
                Item
            </div>
            <div>
                Price
            </div>
            <div>
              Quantity
            </div>
          </div>
            <br></br>
            {cartItems.map((item,i)=>{ return <div className='cart-items'>
            <div>
              <img src={`${item.imageUrl}`} alt='' width={60}/>
                Album {i}
            </div>
            <div>
                {item.price}
            </div>
            <div>
              X{item.quantity}
            </div>
            <div>
              <Button variant='danger' onClick={removeHandler} value={item.id}>Remove</Button>
            </div>
            <br></br>
          </div>
            })}
          <div className='total-price'>
            <span className='total'>Total  </span>
            <div>$220</div>
          </div>
          <br></br>
          <div className='btn'> 
            <Button type='submit' variant='primary' > Purchase</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Cart;