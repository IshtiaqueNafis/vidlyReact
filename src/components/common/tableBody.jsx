import React, {Component} from 'react';
import _ from 'lodash';

class TableBody extends Component {
    //region methods
    renderCell = (item, column) => {
        return column.content ? column.content(item) : _.get(item, column.path);
        //region code explanation
        /*
        column.content ? column.content(item) : _.get(item, column.path);
        column.content(item) --> if it has a column property  with content it takes item as a arugment
        column.content(item)   --> column.content(movie) --> movie is passed here. as an arugment
        _.get(item, column.path) --> else passed on items this is same as using item.name --> but ._get helps with nested value.
         */
        //endregion
    }

    createKey = (item, column) => item._id + (column.path || column.key)
    //region code explanation
    /*
    (item, column) is being passed here
    item then either column.path attribute is there or column.key
     */



    //endregion
 //endregion

    render() {
        const {data, columns} = this.props;
        console.log(columns)
        console.log(data)
        return (
            <tbody>
            {data.map(item => <tr className="table-warning" key={item._id}>
                {columns.map(column => <td key={this.createKey(item, column)}>{this.renderCell(item, column)}</td>)}

            </tr>)}

            </tbody>
        );
    }
}

export default TableBody;