import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import CustomCheckBox from "../components/CustomCheckBox";

import { FaStar } from "react-icons/fa";
import './productDetails.css'

const tabContent = document.getElementsByClassName("tab-content");
const tabLinks = document.getElementsByClassName("tab-link");

const ProductDetails = ({ category }) => {
  const { productId } = useParams();
  const [data, setData] = useState()
  const [error, setError] = useState('')
  const ImagePath = '../../src/assets/images';
  
  useEffect(()=> {
    fetch(`http://localhost:8000/products?Cat=${category}&id=${productId}`)
      .then((res) => {return res.json()})
      .then((resp) => setData(resp[0]))
      .catch((err) => setError(err))
  }, [category, productId])

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
      {
        data 
        ? <div className="product">
            <div className="product-image">
              <div className="view-box">
                <img src={`${ImagePath}/${data['images'][index]}`} />
              </div>
              <div className="change-box">
                {data['images'].map((image, i) => { 
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
              <h2>{data['Brand']} {data['Model']}</h2>
              {data['Options'] && <CustomCheckBox options={data['Options']}/>}
              {Object.keys(data['Specs']).map((spec) => {
                return (
                  <div className="detail">
                    <h3>{spec}</h3>
                    <span>{data['Specs'][spec]}</span>
                  </div>
                )}
              )}
              <div className="product-price">
                <span className='off-price'>
                  {
                    data['discount'] 
                    ? `$${showPrice(data['price']*(1-data['discount']/100))}` 
                    : `$${data['price']}`
                  }
                </span>
                {data['discount'] ? <span className='main-price'><del>{`$${data['price']}`}</del></span> : null}
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
        : <h3>{error}</h3>
      }
    </div>
  )
}

export default ProductDetails