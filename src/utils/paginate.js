import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    //items -->array of items
    // pageNumber -- / page number pagize size
    // pageSize->

    /*
        action movie =3
        pageNumber = 1
        pageSize = 4;
     */
    const startIndex = (pageNumber - 1) * pageSize;

    return _(items).slice(startIndex).take(pageSize).value()
    //region Comments & and Explanation
    /*******************In Case of All Movies ******************************/
    /*
    when the page number is 1
    All Movies  = 9
    pageNumber = 1
    pageSize = 4;

   pageNumber 1--> const startIndex = (pageNumber - 1) * pageSize;-> (1-1) * pageSize-> startindex = 0 *4=0
   return _(items).slice(startIndex).take(pageSize).value() -> return _(items(9) items).slice(startIndex=0).take(pageSize=4).value() -> page 1 --> items[0,1,2,3] ---> pageSize is not inclusive

   pageNumber 2--> const startIndex = (pageNumber - 1) * pageSize;-> (2-1) * pageSize-> startindex = 1 *4=4
   return _(items(9) items).slice(startIndex=4).take(pageSize=4).value() -> page 2--> [4,5,6,7] ---> pageSize is not inclusive

   pageNumber 3--> const startIndex = (pageNumber - 1) * pageSize;-> (3-1) * pageSize-> startindex = 2 *4=8
   return _(items(9) items).slice(startIndex=8).take(pageSize=4).value() -> page 3--> [8,null.null.null] ---> pageSize is not inclusive
//************************End of in Case of all Movies**************************************

     */

    /*******************In Case of Filtermovies ******************************/
    /*
        when the page number is 1
    All Movies  = 3( 3 action movies)
    pageNumber = 1
    pageSize = 4;

       pageNumber 1--> const startIndex = (pageNumber - 1) * pageSize;-> (1-1) * pageSize-> startindex = 0 *4=0

       return _(items).slice(startIndex).take(pageSize).value() -> return _(items(3) items).slice(startIndex=0).take(pageSize=4).value() -> page 1 --> items[0,1,2] ---> pageSize is not inclusive


     */


    //endregion
}