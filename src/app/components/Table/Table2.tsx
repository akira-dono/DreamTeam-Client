import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const Table2 = ({ data }) => {
    const columns = ["Найденный файл", "Найденное слово", "Формат файла", "Облачное хранилище", "Дата и время"];
    return (
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
            <TableRow>
                {columns.map((column, index) => (
                <TableCell key={index}>{column}</TableCell>
                ))}
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
};

export default Table2;
