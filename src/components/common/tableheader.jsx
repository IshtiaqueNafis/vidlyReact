import React, {Component} from 'react';

class TableHeader extends Component {
// Columns:array
// pass sort column
// onsort which is a function
    //region Methods
    raiseSort = (path) => {
        const sortColumn = {...this.props.sortColumn} // copying the object from the props
        if (sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === "asc") ? "desc" : "asc";
            //region code explanation
            /*
             sortColumn.path[name] == name then -> sortColumn.Order = (sortColumn.Order ==="asc") then on click it will be set to highest to lowest and if it was desc it will be set to asc.
             */
            //endregion
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc"
            //region code explanation
            /*
            sortColumn.path = path;--> this changes the path based on current click
                  sortColumn.order ="asc" --> also order changes as well.
             */
            //endregion
        }

        this.props.onSort(sortColumn)
    }
    renderSortIcon = column => {
        const {sortColumn} = this.props
        if (column.path !== sortColumn.path) return null; // if column path==null when column was same
        if (sortColumn.order === "asc") return <i className='fa fa-sort-asc'/> // if current value is the same
        return <i className='fa fa-sort-desc'/> // if its low return high
    }
//endregion
    render() {
        return (
            <thead>
            <tr className="table-light">
                {this.props.columns.map(column =>
                    <th className='clickable'
                        key={column.path || column.key} // --> this make sure either key or column can be used as key
                        onClick={() => this.raiseSort(column.path)}>{column.label} {this.renderSortIcon(column)} </th>) // this sets the column path.
                }
                {/* */}
            </tr>
            </thead>
        );
    }
}

export default TableHeader;