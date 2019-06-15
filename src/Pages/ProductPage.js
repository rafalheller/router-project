import React from 'react';
import Product from "../components/Product";
import {Link} from "react-router-dom";


const ProductPage = ({match}) => {
    return (
        <>
            <div>Strona produktów</div>
            <Product id={match.params.id} />
            <Link to='/products'>Powrót do listy zakupów</Link>
        </>
    )
}


export default ProductPage;