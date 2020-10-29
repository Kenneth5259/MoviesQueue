import React from 'react';

const QueueItem = (props) => {
    const item = props.item;
    
    return(
    <tr style={styles.tableRow}>
        <td style={styles.tableData} >{item.title}</td>
        <td style={styles.tableData}>{item.type}</td>
        {item.type === 'TV Show' ? <td style={styles.tableData}>Seasons {item.seasons}</td> : <td style={styles.tableData}></td>}
        <td style={styles.tableData}>{item.user}</td>
        <td style={styles.tableData}>{item.date.toDateString()}</td>
    </tr>)
}

const styles = {
    tableRow: {

    }, 
    tableData: {
        margin: '1rem', 
        padding: '1rem'
    }
}

export default QueueItem;