import React from 'react';
import { Button } from '@mui/material';

const Buttons = ({ onClickFiles, onClickHistory }) => {
    return (
        <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
            <Button variant="contained" color="primary" onClick={onClickFiles} style={{ marginBottom: '20px', marginRight: '10px' }}>
                Найденные файлы
            </Button>
            <Button variant="contained" color="primary" onClick={onClickHistory} style={{ marginBottom: '20px' }}>
                История
            </Button>
        </div>
    );
};

export default Buttons;
