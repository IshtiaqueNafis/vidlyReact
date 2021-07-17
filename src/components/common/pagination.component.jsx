import React from 'react';
import _ from 'lodash'; // this helps with pagination
const Pagination = (props) => {
    const {itemsCount,pageSize} = props;
    const  pagesCount = Math.ceil (itemsCount/pageSize); // this makes the item integer
    if(pagesCount===1) return null;
 const pages=  _.range(1,pagesCount+1) // 1 makes it includesive


    return (
        <div>
            <ul className="pagination">
                {pages.map(page=>(
                    <li key={page} className="page-item">
                        <a className="page-link" >{page}</a>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Pagination;
