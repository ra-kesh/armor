import { useControl } from "../../hook"
import CloseIcon from '@material-ui/icons/Close';



export const Sort = () => {
    const {sortBy,sortHighToLow,sortLowToHigh,resetSort} = useControl();
    
    return (
        <div className='sort flex-dir-col'>
            <span className='filter-heading'>Sort By</span>
            <label htmlFor="low-to-high">
                <input type="radio" name="sort" id="low-to-high" onChange={sortLowToHigh} checked={sortBy === 'LOW_TO_HIGH'}/>
                low to high
            </label>
            <label htmlFor="high-to-low">
                <input type="radio" name="sort" id="high-to-low" onChange={sortHighToLow} checked={sortBy === 'HIGH_TO_LOW'}/>
                low to high
            </label>
            <div onClick={resetSort} className='pointer underline center-vertically justify-end'>
                <CloseIcon fontSize='small'/>
                <span>clear</span>
            </div> 
        </div>
    )
}
