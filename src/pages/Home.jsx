import { Link } from 'react-router-dom'

import Tv01 from '../assets/images/tv01.png'
import Tv02 from '../assets/images/tv02.png'
import Tv03 from '../assets/images/tv03_1.png'
import Tv04 from '../assets/images/tv04_1.png'
import Tv05 from '../assets/images/tv05_1.png'
import './home.css'

const categories = document.getElementsByClassName("items");
const tablinks = document.getElementsByClassName("tablink");

const Home = () => {

  const openProductCategory = (event, category) => {
      for (let i = 0; i < categories.length; i++) {
          categories[i].style.display = "none";
      }
      for (let i = 0; i < categories.length; i++) {
          tablinks[i].classList.remove("active");
      }
  
      document.getElementById(category).style.display = "flex";
      event.target.classList.add("active");
  }

  return (
    <div className='container'>
        <div className="heroBanner">
            <div className="content">
                <div className="offer-box">
                    <h2 className='large-text'>
                        Super Summer Sale
                    </h2>
                    <span className='medium-text'>For Smart TV</span>
                    <div className='small-text'>
                        <span>up to</span>
                        <br/>
                        <span className='off'>40%</span> 
                        <br/> 
                        <span>off</span>
                    </div>
                </div>
                <Link className='primary-btn'>Shop Now</Link>
            </div>
            <div className="image">
                <img src={Tv01} alt="tv01-img" />
            </div>
            <div className="hero-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
        <div className="products">
            <h1 className="products-title">Our Products</h1>
            <div className="products-container">
                <div className="bar">
                    <button className="tablink active" onClick={(e)=> openProductCategory(e,'Phones')}>Phones</button>
                    <button className="tablink" onClick={(e)=> openProductCategory(e,'Laptops')}>Laptops</button>
                    <button className="tablink" onClick={(e)=> openProductCategory(e,'TVs')}>TVs</button>
                  </div>
                <div id="Phones" className="items active">
                    <div className="item-box">
                        <div className="item-image">
                            <img src={Tv02} alt="" />
                            <div className="labels">
                                <span className="new">new</span>
                                <span className="percent">30%</span>
                            </div>
                        </div>
                        <div className="item-body">
                            <span className="brand">SAMSUNG</span>
                            <h3 className="name">77" S95D OLED 4K Smart TV</h3>
                        </div>
                        <div className="item-price">
                                <div>
                                    <span className='final-price'>$1,599</span>
                                    <span className='old-price'><del>$2,284</del></span>
                                </div>
                                <Link className='primary-btn'>Buy</Link>
                        </div>
                    </div>
                </div>
                <div id="Laptops" className="items">
                
                </div>
                
                <div id="TVs" className="items">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home