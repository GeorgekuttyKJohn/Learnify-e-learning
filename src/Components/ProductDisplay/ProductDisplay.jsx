// import React, { useContext,useState } from 'react'
// import "./ProductDisplay.css"
// import { ShopContext } from '../../Context/ShopContext';
// // import Courses from '../Pages/Courses';



// const ProductDisplay = (props) => {
//     const {product} = props;

//     const {addToCart}= useContext(ShopContext);
//     const [showVideo, setShowVideo] = useState(false);

    

//   return (
//    <div className='productdisplay'>
//      <div className='productdisplay1'>
//         <div className='productdisplay-left'>
//             <div className='productdisplay-img'>
//                 <img src={product.image} alt=""  className='display-img'/>
//             </div>
        

//         </div>
//         <div className='productdisplay-right'>
//             <h1>{product.name}</h1>
//             <p className='newprice'>₹{product.new_price}</p>

//             <p className='oldprice'>₹{product.old_price}</p>


//             <button className='add-to-cart' onClick={()=>{addToCart(product.id)}}>
//           ADD TO CART
//         </button>

//         </div>


    
//     </div>


//   <div className="dropdown">
//                 <button className="dropdown-button" onClick={() => setShowVideo(!showVideo)}>
//                     {showVideo ? 'Hide Video' : 'Show Video'}
//                 </button>
//                 {showVideo &&
//                     <div className="dropdown-content">
//                         {/* Use video tag to play the introduction video */}
//                         <video src={product.introduction} type="video/mp4" className='product-video' controls></video>
//                     </div>
//                 }
//             </div>





//    </div>
//   )
// }

// export default ProductDisplay




import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay1">
        <div className="productdisplay-left">
          <div className="productdisplay-img">
            <img src={product.image} alt="" className="display-img" />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <p className="newprice">₹{product.new_price}</p>
          <p className="oldprice">₹{product.old_price}</p>
          <button className="add-to-cart" onClick={() => addToCart(product.id)}>
            ADD TO CART
          </button>
        </div>
        
      </div>
      <div className="productdisplay2">
      <div className="product-video-container">
          <button className="toggle-video-btn" onClick={toggleVideo}>
            {showVideo ? 'Hide Video' : 'Show Video'}
          </button>
          {showVideo && (
            <video src={product.introduction} type="video/mp4" className="product-video" controls />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
