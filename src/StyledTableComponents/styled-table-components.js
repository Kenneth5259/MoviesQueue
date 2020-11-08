import styled from 'styled-components';

const Table = styled.table`
    border: 1px solid lightgrey;
    width: 80%;
    margin-top: 2rem;
    text-align: center;
`;

const TableHead = styled.thead`
    border: 1px solid lightgrey;
`;

const TableHeader = styled.th`
    border: 1px solid lightgrey;
    padding: 1rem;
`;

const TableRow = styled.tr`
    border: 1px solid lightgrey;
`;

const TableData = styled.td`
    border: 1px solid lightgrey;
    padding: 1rem;
`;

export {
    Table,
    TableHead,
    TableHeader,
    TableRow,
    TableData
}