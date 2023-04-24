import React, { useEffect, useState } from 'react';

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

import axios from 'axios'



const BasicTable = ({urlData}) => {

    const [getData, setGetData] = useState(null);
  
    const URL_API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
  
    useEffect(() => {
      axios.get(URL_API)
      .then(response => setGetData(response.data))
      .catch(error => console.log(error))
    }, [])

    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>CryptoCurrency Prices</TableCell>
                    <TableCell align="right">SYMBOL</TableCell>
                    <TableCell align="right">IMAGE</TableCell>
                    <TableCell align="right">PRICE</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {getData != null ? getData.map((data) => (
                    <TableRow
                    key={data.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {data.name}
                    </TableCell>
                    <TableCell align="right">{data.symbol}</TableCell>
                    <TableCell align="right"><img style ={{width:'30px'}} src={data.image} alt="Nothing"/></TableCell>
                    <TableCell align="right">{data.current_price}</TableCell>
                    </TableRow>
                )) : "Loading ..."}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}


export default BasicTable;