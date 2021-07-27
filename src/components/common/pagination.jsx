import React from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types';

const Pagination = ({itemsCount, onPageChange, pageSize, currentPage}) => {
   //region page callculation
    const pagesCount = Math.ceil(itemsCount / pageSize); // like how many pages will be there all together. for category
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1)

    //region Comments & explanation

    /*
const Pagination = ({itemsCount, onPageChange, pageSize, currentPage}) => {
**********************Item count is full of all movies *********************************************
**********************Page Size 1 *********************************************
itemsCount = 9
onPageChange = (page) => this.setState({currentPage: page})
pageSize = 4,
CurrenttPage =1;
 const pagesCount = Math.ceil(itemsCount / pageSize); -> = (9/4) = 3
     if (pagesCount === 1) return null;->false
      const pages = _.range(1, pagesCount + 1)->pages = _.range(1,3+1) -> [1,2,3]

 */
/*
**********************Item count is full of selected Movies *********************************************
**********************Page Size 1 *********************************************

* itemsCount = 3 --> cause 3 action movies
onPageChange = (page) => this.setState({currentPage: page})
pageSize = 4,
CurrenttPage =1;
*  const pagesCount = Math.ceil(itemsCount / pageSize); -> = (3/4) = 1
*    if (pagesCount === 1) return null;->true // thus will not be rendered
*
 */

    //endregion
//endregion
    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                        <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}

            </ul>
        </nav>
    );
};
//region
// proptypes of values requirement
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired

}
//endregion

export default Pagination;