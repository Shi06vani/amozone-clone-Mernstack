import React from 'react'
// import Button from 'react-bootstrap/Button';
import '../component/cart.css'
import productimage from '../component/images/productimage.webp'
export default function Cartsection() {
  return (
    <div className='product_container'>
         <div className="left_container">
             <img src={productimage} alt="" />
            <div className="crt_btn">
              <button className='btn1'>Add To Cart</button>
              <button className='btn2'>By Now</button>
            </div>
         </div>
         <div className="right_container">
              <h3>Fitness Gear</h3>
              <h4>
                pigeon FAVOURUTE Electrical kettele (1.5 l ,Sliver ,Black)
                <p classname="mrp">M.R.P : 1195</p>
                <p>Deal O the Day:<span style={{color:"#B12704"}}>625</span></p>
                <p>you save :570(47%) :<span style={{color:"#B12704" }}>625.00</span></p>
                <div>
                  <h5 style={{color:"red"}}> Discount:<span style={{color:"black" }}>Extra 10% percent off</span></h5>
                  <h4 >Free Delivery:<span>oct8-21 </span>Detsils</h4>
                  <p>Fastest delivery :<span></span>Tommorow 11 Am</p>
                  <div>
                    <p classname="description"> About the iteam : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta provident necessitatibus cum omnis. Incidunt aspernatur maxime recusandae, ut velit doloremque.</p>
                  </div>
                </div>
              </h4>
         </div>
    </div>
  )
}
