import React, { useState, useMemo } from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import * as XLSX from 'xlsx';

const TableWords = () => {
    const [inputText, setInputText] = useState('');
    const [searchText, setSearchText] = useState('');
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');
    const [expressions, setExpressions] = useState([
    ]);

    const handleInputChange = (event: any) => {
        setInputText(event.target.value);
    };

    const handleSearchChange = (event: any) => {
        setSearchText(event.target.value);
    };

    const handleAddExpression = () => {
        const currentDate = new Date().toISOString().split('T')[0];
        const currentTime = new Date().toLocaleTimeString();

        const newExpression = {
            id: expressions.length + 1,
            expression: inputText,
            dateTime: `${currentDate} ${currentTime}`
        };

        setExpressions([newExpression, ...expressions]);
        setInputText('');
    };

    const handleEditClick = (id, currentExpression) => {
        setEditText(currentExpression);
        setEditId(id);
    };

    const handleUpdateExpression = () => {
        const updatedExpressions = expressions.map(expression => {
            if (expression.id === editId) {
                return { ...expression, expression: editText };
            }
            return expression;
        });
        setExpressions(updatedExpressions);
        setEditText('');
        setEditId(null);
    };

    const handleDeleteExpression = (id) => {
        const updatedExpressions = expressions.filter(expression => expression.id !== id);
        setExpressions(updatedExpressions);
    };
    
    const handleFileChange = (e) => {
        console.log('File selected:', e.target.files[0]);
        const file = e.target.files[0];
        if (file) {
            readFile(file);
        }
    };

    const readFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
            // Преобразуйте массив строк из Excel в объекты выражений
            const expressionsFromExcel = excelData.map((row, index) => ({
                id: index + 1, // Используйте индекс строки для уникального id
                expression: row[0], // Первый элемент строки соответствует слову
                dateTime: new Date().toISOString().split('T')[0] // Используйте текущую дату и время
            }));
    
            const expressionsFromExcelWithNewIds = expressionsFromExcel.map((expression, index) => ({
                ...expression,
                id: expressions.length + index + 1 // Используйте уникальный id для элементов из Excel
            }));
    
            // Обновите состояние, добавив новые выражения из Excel в начало
            setExpressions([...expressionsFromExcelWithNewIds, ...expressions]);
        };
        reader.readAsArrayBuffer(file);
    };
    


    const filteredExpressions = expressions.filter((row) =>
        typeof row.expression === 'string' && row.expression.toLowerCase().includes(searchText.toLowerCase())
    );



    return (
        <div style={{ margin: '16px' }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <TextField 
                        fullWidth 
                        label="Добавление регулярного выражения" 
                        variant="outlined"
                        value={inputText}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{ height: "55px" }}
                        onClick={handleAddExpression}
                    >
                        Добавить
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        fullWidth 
                        label="Поиск" 
                        variant="outlined" 
                        style={{ marginBottom: '16px', maxWidth: '250px' }} 
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <input type="file" onChange={handleFileChange} />
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Регулярные Выражения</TableCell>
                                    <TableCell>Дата и Время</TableCell>
                                    <TableCell>Действия</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredExpressions.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>
                                            {row.id === editId ? (
                                                <TextField 
                                                    value={editText} 
                                                    onChange={(e) => setEditText(e.target.value)} 
                                                    fullWidth 
                                                    autoFocus 
                                                />
                                            ) : (
                                                row.expression
                                            )}
                                        </TableCell>
                                        <TableCell>{row.dateTime}</TableCell>
                                        <TableCell>
                                            {row.id === editId ? (
                                                <Button 
                                                    variant="contained" 
                                                    color="primary" 
                                                    size="small" 
                                                    onClick={handleUpdateExpression}
                                                >
                                                    Сохранить
                                                </Button>
                                            ) : (
                                                <>
                                                    <IconButton 
                                                        color="primary" 
                                                        onClick={() => handleEditClick(row.id, row.expression)}
                                                    >
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton 
                                                        color="secondary" 
                                                        onClick={() => handleDeleteExpression(row.id)}
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
};

export default TableWords;