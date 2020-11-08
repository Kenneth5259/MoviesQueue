import React from 'react';
import {TableRow, TableData} from '../StyledTableComponents/styled-table-components';

const QueueItem = (props) => {
    const item = props.item;
    
    return(
    <TableRow>
        <TableData>{item.title}</TableData>
        <TableData>{item.type}</TableData>
        {item.type === 'TV Show' ? <TableData>Seasons {item.seasons}</TableData> : <TableData>NA</TableData>}
        <TableData>{item.user}</TableData>
        <TableData>{item.created}</TableData>
    </TableRow>)
}

export default QueueItem;