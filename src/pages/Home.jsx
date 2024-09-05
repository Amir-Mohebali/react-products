import { Link } from 'react-router-dom'

import Tv01 from '../assets/images/tv01.png'
import Tv02 from '../assets/images/tv02.png'
import Tv03 from '../assets/images/tv03_1.png'
import Tv04 from '../assets/images/tv04_1.png'
import Tv05 from '../assets/images/tv05_1.png'
import './home.css'

const Home = () => {
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
            <div class="hero-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Home