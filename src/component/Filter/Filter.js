import React from 'react'
import { useControl } from '../../hook'

export const Filter = () => {
    const {filters,filterOutOfStock,filterFastDelivery} = useControl();
    
    return (
        <div className='filter'>
            <span className='filter-heading'>Filter</span>
            <label htmlFor="out-of-stock">
                    <input type="checkbox" name="filter" id="out-of-stock" onChange={filterOutOfStock}
                    checked={filters.showAllProducts}/>
                    include out of stock
            </label>
            <label htmlFor="fast-delivery">
                    <input type="checkbox" name="filter" id="fast-delivery" onChange={filterFastDelivery}
                    checked={filters.showOnlyFastDelivery}
                    />
                    only fast delivery
            </label>
        </div>
    )
}
