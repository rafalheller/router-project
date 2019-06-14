import React, {Component} from 'react';
import {Link} from "react-router-dom";

const products = ["car", "boat", "plane"];
const list = products.map(product => (
    <li key={product}>
        <Link to={`/products/${product}`}>{product}</Link>
            </li>
            ))
class ProductListPage extends Component {


    render() {
        return (
            <div className='products'>
                <h1>Lista produktów</h1>
                <div>{list}</div>

            </div>
        );
    }
}

export default ProductListPage;