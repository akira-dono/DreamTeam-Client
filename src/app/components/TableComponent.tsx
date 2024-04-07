'use client'
import React, { useState } from 'react';
import Buttons from './Buttons';
import Table1 from './Table/Table1';
import Table2 from './Table/Table2';


const TableComponent = () => {
    const [showTable1, setShowTable1] = useState(false);
    const [showTable2, setShowTable2] = useState(false);

    const handleShowTable1 = () => {
        setShowTable1(true);
        setShowTable2(false);
    };

    const handleShowTable2 = () => {
        setShowTable1(false);
        setShowTable2(true);
    };

    const data1 = [
        ["file1.txt", "word1", "txt", "Google Disk", "2024-03-09 10:00:00"],
        ["file2.txt", "word2", "txt", "Google Disk", "2024-03-09 11:00:00"],
        // Добавьте больше данных, если нужно
    ];

    const data2 = [
        ["file3.txt", "word3", "txt", "Google Disk", "2024-03-09 12:00:00"],
        ["file4.txt", "word4", "txt", "Google Disk", "2024-03-09 13:00:00"],
        // Добавьте больше данных, если нужно
    ];

    return (
        <div>
        <Buttons onClickFiles={handleShowTable1} onClickHistory={handleShowTable2} />
        {showTable1 && <Table1 data={data1} />}
        {showTable2 && <Table2 data={data2} />}
        </div>
    );
};

export default TableComponent;