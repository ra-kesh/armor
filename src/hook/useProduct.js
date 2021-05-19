import {useContext} from 'react'
import {ProductContext} from '../context'

export const useProduct = () => {
    const {setProductList,productList} =  useContext(ProductContext)

    const getSortedProductList = (productList, sortBy) => {
        switch (sortBy) {
          case "LOW_TO_HIGH":
            return [...productList].sort((a, b) => a.price - b.price);
    
          case "HIGH_TO_LOW":
            return [...productList].sort((a, b) => b.price - a.price);
    
          case "DEFAULT":
            return productList;
    
          default:
            // throw new Error(
            //   "[useProduct()]:Incorrect sort type passed as payload!"
            // );
        }
      };

      const getFilteredProductList = (productList,{showAllProducts,showOnlyFastDelivery})=>{

          return productList
          .filter(({inStock})=>(showAllProducts?true:inStock))
          .filter(({fastDelivery})=>showOnlyFastDelivery ? fastDelivery : true)
      }

    return {
        productList,
        setProductList,
        getSortedProductList,
        getFilteredProductList
        
    }
       
}
