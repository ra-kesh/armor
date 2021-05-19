import {useState} from 'react'
// import {allJackets} from '../data/productData'
import { useProduct , useControl} from '../../hook';
import {Filter,Sort,ProductCard} from '../../component'
import FilterListIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';
// import {useLocation} from 'react-router-dom'
// import {ProductCard} from '../../component/ProductCard/ProductCard'
// import { DialogContent } from '@material-ui/core';

// import {useEffect} from 'react'

export const Products = () => {

     const {productList,getSortedProductList,getFilteredProductList} = useProduct();
     const {sortBy,filters} = useControl()
    
     const sortedProductList = getSortedProductList(productList,sortBy)
     const filteredProductList = getFilteredProductList(sortedProductList,filters)
 
     const [showFilterModal,setShowFilterModal] = useState(false)

     function ProductBar(){
       return(
          <div className='container'>
              <div className='flex-row center-vertically product-bar'>
                  <div className="flex-col-lg-10 text-left">
                    <span className="product-bar-item">All Products</span>
                    <span className="product-bar-item">Jackets</span>
                    <span className="product-bar-item">Helmets</span>
                    <span className="product-bar-item">Gloves</span>
                    <span className="product-bar-item">Shoes</span>
                  </div>

                  <div className="flex-col-lg-2">
                    <div onClick={()=>setShowFilterModal((showFilterModal)=>!showFilterModal)} 
                    className={showFilterModal?'filter-btn-active':'filter-btn'}>
                          {showFilterModal?(
                            <CloseIcon fontSize='small' style={{marginRight:'.5rem'}}/>
                          ):(<FilterListIcon fontSize='small' style={{marginRight:'.5rem'}}/>)}
                          <span>Sort & Filter </span>
                    </div>
                  </div>
              </div>            
          </div>
       )
     }

     function FilterPanel(){
       return(
        <div className="filter-panel flex-row trans-04">
            <div className="flex-col-lg-3">
                <div className="container">
                  <Filter/>
                </div>
            </div>
            <div className="flex-col-lg-3">
                <div className="container">
                  <Sort/>
                </div>
            </div>
            {/* <div className="flex-col-lg-3">
                <div className="container">
                  <h3>price</h3>
                </div>
            </div> */}
        </div>
       )
     }

      return (
        <>
        <ProductBar/>
        {showFilterModal&&(
          <div className="container">
             <FilterPanel/>
          </div>
        )}
        <div className='container'>
          <div className='flex-row product-grid'>
            {filteredProductList.map((item)=>(
              <div className='flex-col-sm-6 flex-col-lg-4' key={item.id}>
                 <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
        </>
      )
  }
