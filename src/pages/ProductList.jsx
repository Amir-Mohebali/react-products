import { useParams } from 'react-router-dom'
import Item from '../components/Item'
import './productList.css'

const ProductList = ({ items }) => {
    const { cat } = useParams()

    return (
        <div className="container">
            <h2 className="title">Our Latest {cat}s</h2>
            <div className="items">
                {items
                    .filter(item => item.Cat === cat)
                    .map(item => <Item data={item} />)
                }
            </div>
        </div>
    )
}

export default ProductList