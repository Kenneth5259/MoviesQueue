import React from 'react';
import styled from 'styled-components';

import QueueItem from './queue-item';

const TableHeader = styled.th`
    background-color: red
`;

const Queue = (props) => {
    const queue = props.queue;
    return(
        <table style={styles.table}>
            <thead style={styles.table}>
                <tr>
                    <TableHeader>Title</TableHeader>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Seasons</TableHeader>
                    <TableHeader>User</TableHeader>
                    <TableHeader>Date Requested</TableHeader>
                </tr>
            </thead>
            <tbody>
                {queue.map(item => {
                    return (<QueueItem item={item} key={Math.random()}/>)
                })}
            </tbody>
            
        </table>
    )
}

const styles = {
    table: {
        border: '1px solid lightgrey'
    }
}

export default Queue;