import React, { useEffect } from "react";
import { getOrdersByCompany } from './mockData/data';
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const OrderManagement = ({orders}) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [sortedData, setSortedData] = React.useState([...orders]);
  
    const handleSort = (key) => {
      const sorted = [...sortedData].sort((a, b) =>
        a[key] > b[key] ? 1 : -1
      );
      setSortedData(sorted);
    };
  
    const handleChangePage = (event, newPage) => setPage(newPage);
    
    return (
        <>
            <div>OrderManagement</div>

            <Table>
                <TableHead>
                    <TableRow>
                        {Object.keys(orders[0]).map((key) => (
                            <TableCell onClick={() => handleSort(key)}>{key}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedData.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((order) => (
                        <TableRow>
                            {Object.values(order).map((value) => (
                                <TableCell>{value}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}

export default OrderManagement;