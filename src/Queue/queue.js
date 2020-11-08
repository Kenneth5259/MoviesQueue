import React from 'react';
import QueueItem from './queue-item';

import {Table, TableHead, TableRow, TableHeader} from '../StyledTableComponents/styled-table-components';

const Queue = (props) => {
    const queue = props.queue;
    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>Title</TableHeader>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Seasons</TableHeader>
                    <TableHeader>User</TableHeader>
                    <TableHeader>Date Requested</TableHeader>
                </TableRow>
            </TableHead>
            <tbody>
                {queue.map(item => {
                    return (<QueueItem item={item} key={Math.random()}/>)
                })}
            </tbody>
            
        </Table>
    )
}

export default Queue;