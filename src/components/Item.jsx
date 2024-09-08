import { Link } from 'react-router-dom'
import './item.css'

const Item = ({ data }) => {
  const { Brand, Model, images } = data;
  const ImagePath = '../../src/assets/images/';
  
  return (
    <div className="item-box">
        <div className="item-image">
            <img src={`${ImagePath}${images[0]}`} alt="" />
            <div className="labels">
                <span className="new">new</span>
                <span className="percent">30%</span>
            </div>
        </div>
        <div>
            <div className="item-body">
                <span className="brand">{Brand}</span>
                <h3 className="name">{Model}</h3>
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
  )
}

export default Item