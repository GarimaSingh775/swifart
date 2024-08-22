import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productsApi, useGetAllProductsQuery } from '../features/productsApi';
import './Home.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { addToCart, getTotals } from '../features/cartSlice'; // import getTotals

function Home() {
  document.title = "Swifkart Online Store";
  window.scroll(0, 0);
  const {data, error, isLoading} = useGetAllProductsQuery();
  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));  
    dispatch(getTotals());         
  }

  return (
    <>
      <div className="home-wrapper">
        <div className="home-container">
            {isLoading ? <p>Loading...</p> : error ? 
            <p>An error occurred...</p> : 
            <>
            <div className="products">
              {data?.map(product => <div key={product.id} className="product">
                  
                  <img src={product.image} alt="" draggable="false"/>
                  <p className='product-name'>{product.name}</p>
                  <div className="details">
                    <div className="tags">
                      <span className='desc'>{product.desc}</span>
                      <span className='size'>300ml</span>
                    </div>
                    <span className="price">£{product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    <FontAwesomeIcon className='add-cart-icon' icon={faCartShopping}/>Add To Cart
                  </button>
                </div> )}
            </div>
            </> }
          </div>
      </div>
    </>
  )
}

export default Home;
