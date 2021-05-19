import React from 'react'
import { useParams } from "react-router-dom";
import { allJackets } from '../../data/productData';



export const ProductDetail = () => {
    const {productId} = useParams();

    const getProductDetails = () =>{
        return allJackets.find((product)=>product.id===productId)
    }
    const jacket = getProductDetails()

    return (
        <div className='container product-detail'>
            <div className='flex-row'>
                <div className="flex-col-lg-6">
                    <div className="container">
                        <img src={jacket.image} alt=""/>
                    </div>
                </div>
                <div className="flex-col-lg-6">
                    <div className="container product-desc">
                        <h3>{jacket.description}</h3>
                        <h5>Rs.{jacket.price}/-</h5>
                        <div className="product-btns flex-row">
                            <div className="flex-col-4">
                                 <button>Add to Cart</button>
                            </div>
                            <div className="flex-col-4">
                                <button>Add to Wishlist</button>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="container product-additional">
                    <div className="flex-dir-col center-vertically">
                        <div className='product-detail-bar'>
                            <span className="product-bar-item">Descriptions</span>
                            <span className="product-bar-item">Additional Informations</span>
                            <span className="product-bar-item">Reviews</span>
                        </div>
                        <div className="container">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
