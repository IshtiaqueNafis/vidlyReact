import _ from 'lodash';
export function paginate(items,pageNumber,pageSize) {
    const startIndex = (pageNumber - 1) *pageSize; // cause count start form 9
 return _(items)
        .slice(startIndex)
        .take(pageSize).value();


}