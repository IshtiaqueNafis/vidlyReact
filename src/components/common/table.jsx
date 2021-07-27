import React from 'react';
import TableHeader from "./tableheader";
import TableBody from "./tableBody";

const Table = ({columns, data, onSort, sortColumn}) => {
    return (
        <div>
            <table className="table">

                <TableHeader
                    columns={columns} // --> columns table array
                    sortColumn={sortColumn} // --> sortColumn object
                    onSort={onSort} // --> this will sort the array
                />

                <TableBody data={data} columns={columns}/>

            </table>
        </div>
    );
};

export default Table ;