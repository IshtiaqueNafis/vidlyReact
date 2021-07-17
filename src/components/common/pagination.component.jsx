import React from 'react';
import _ from 'lodash'; // this helps with pagination
import PropTypes from 'prop-types';
const Pagination = (props) => {
    const {itemsCount,pageSize,onPageChange,currentPage} = props;
    const  pagesCount = Math.ceil (itemsCount/pageSize); // this makes the item integer
    if(pagesCount===1) return null;
 const pages=  _.range(1,pagesCount+1) // 1 makes it includesive


    return (
        <div>
            <ul className="pagination">
                {pages.map(page=>(
                    <li key={page} className={page===currentPage?'page-item active':'page-item' }>
                        <a className="page-link" onClick={()=>onPageChange(page)} >{page}</a>
                    </li>
                ))}

            </ul>
        </div>
    );
};
Pagination.propTypes ={ // theese are the requirements setted up.
    itemsCount:PropTypes.number.isRequired,
    pageSize:PropTypes.number.isRequired,
    currentPage:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired


}
export default Pagination;
