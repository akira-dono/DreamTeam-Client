import Header from '../app/components/Header';
import { AppBar, Toolbar, Typography, Button, Stack, Icon } from '@mui/material';
import SearchBar from '../app/components/SearchBar';
import TableWords from '../app/components/TableWords';

const RegularWords = () => {
    return (
        <div>
            <Header />
            <Typography variant="h3" component="h1" sx={{ mt: 4, mb: 2 }}>
                Регулярные Выражения
            </Typography>
            <TableWords />
        </div>
    );
};

export default RegularWords;
