import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import CustomCheckBox from "../components/CustomCheckBox";

import { FaStar } from "react-icons/fa";
import './productDetails.css'

const tabContent = document.getElementsByClassName("tab-content");
const tabLinks = document.getElementsByClassName("tab-link");

const ProductDetails = ({ items, category }) => {
  const { productId } = useParams();
  const ImagePath = '../../src/assets/images';
  
  const currentProduct = items.find(item => item.Cat === category && item.id === productId);
  const specs = Object.keys(currentProduct['Specs'])
  const images = currentProduct['images'];

  const [index, setIndex] = useState(0);

  const openTab = (event, tabName) => {
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    for (let i = 0; i < tabContent.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "flex";
    event.target.classList.add("active");
  }

  const showPrice = (number) => {
    return Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="container">
      <div className="product">
        <div className="product-image">
          <div className="view-box">
            <img src={`${ImagePath}/${images[index]}`} />
          </div>
          <div className="change-box">
            {images.map((image, i) => { 
              return ( 
                <div 
                  className={i === index ? "thumbnail selected" : "thumbnail"} 
                  onMouseEnter={() => setIndex(i)}
                >
                  <img src={`${ImagePath}/${image}`} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="product-details">
          <h2>{currentProduct['Brand']} {currentProduct['Model']}</h2>
          {currentProduct['Options'] && <CustomCheckBox options={currentProduct['Options']}/>}
            {specs.map((spec) => {
              return (
                <div className="detail">
                  <h3>{spec}</h3>
                  <span>{currentProduct['Specs'][spec]}</span>
                </div>
              )}
            )}
            <div className="product-price">
              <span className='off-price'>
                {
                  currentProduct['discount'] 
                  ? `$${showPrice(currentProduct['price']*(1-currentProduct['discount']/100))}` 
                  : `$${currentProduct['price']}`
                }
              </span>
              {currentProduct['discount'] ? <span className='main-price'><del>{`$${currentProduct['price']}`}</del></span> : null}
            </div>
            <Link className='secondary-btn'>Add to Cart</Link>
        </div>
        <div className="product-description">
          <div className="bar">
            <button className="tab-link active" onClick={(e)=> openTab(e,'desc')}>Description</button>
            <button className="tab-link" onClick={(e)=> openTab(e,'reviews')}>Reviews (3)</button>
          </div>
          <div id="desc" className="tab-content active">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div id="reviews" className="tab-content">
            <div className="total-rate">
              <div className="row">
                <span className="sum">4.5</span>
                <div className="rate">
                  <FaStar className="filled"/>
                  <FaStar className="filled"/>
                  <FaStar className="filled"/>
                  <FaStar className="filled"/>
                  <FaStar />
                </div>
              </div>
              <div className="rate">
                <FaStar className="filled"/>
                <FaStar className="filled"/>
                <FaStar className="filled"/>
                <FaStar className="filled"/>
                <FaStar className="filled"/>
              </div>
              <div className="row">
                <div className="rate-bar">
                  <div style={{width: '80%'}}></div>
                </div>
                <span className="sum">3</span>
              </div>
              <div className="rate">
                <FaStar className="filled"/>
                <FaStar className="filled"/>
                <FaStar className="filled"/>
                <FaStar className="filled"/>
                <FaStar />
              </div>
              <div className="row">
                <div className="rate-bar">
                  <div style={{width: '60%'}}></div>
                </div>
                <span className="sum">2</span>
              </div>
              <div className="rate">
                <FaStar className="filled"/>
                <FaStar className="filled"/>
                <FaStar className="filled"/>
                <FaStar />
                <FaStar />
              </div>
              <div className="row">
                <div className="rate-bar">
                  <div></div>
                </div>
                <span className="sum">0</span>
              </div>
              <div className="rate">
                <FaStar className="filled"/>
                <FaStar className="filled"/>
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="row">
                <div className="rate-bar">
                  <div></div>
                </div>
                <span className="sum">0</span>
              </div>
              <div className="rate">
                <FaStar className="filled"/>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="row">
                <div className="rate-bar">
                  <div></div>
                </div>
                <span className="sum">0</span>
              </div>
            </div>
            <div className="reviews">
              <div className="review">
                <div className="review-info">
                  <h4 className="sender">John</h4>
                  <div className="rate">
                    <FaStar className="filled"/>
                    <FaStar className="filled"/>
                    <FaStar className="filled"/>
                    <FaStar className="filled"/>
                    <FaStar />
                  </div>
                </div>
                <p className="review-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                  nulla pariatur.
                </p>
              </div>
              <div className="review">
                <div className="review-info">
                  <h4 className="sender">John</h4>
                  <div className="rate">
                    <FaStar className="filled"/>
                    <FaStar className="filled"/>
                    <FaStar className="filled"/>
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className="review-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                  nulla pariatur.
                </p>
              </div>
              <div className="review">
                <div className="review-info">
                  <h4 className="sender">John</h4>
                  <div className="rate">
                    <FaStar className="filled"/>
                    <FaStar className="filled"/>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className="review-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                  nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails