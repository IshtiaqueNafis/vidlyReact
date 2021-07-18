import React, {Component} from 'react';

class TableHeader extends Component {
    raiseSort = path =>{
        const sortColumn = {...this.props.sortColumn}
        if(sortColumn.path===path){
            sortColumn.order=(sortColumn.order ==='asc') ?'desc':'asc';
        }else{
            sortColumn.path = path;
            sortColumn.order ='asc';
        }
        this.props.onSort(sortColumn)
    }


    render() {
        return (

                <tr className="table-dark">
                    {this.props.columns.map(column => <th key={column.path || column.key } onClick={()=>this.raiseSort(column.path)}> {column.label}</th>)}
                    {/*in here the key can be input or output both */}
                </tr>

        );
    }
}

export default TableHeader;