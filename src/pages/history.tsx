import Header from '../app/components/Header';
import { AppBar, Toolbar, Typography, Button, Stack, Icon } from '@mui/material';
import SearchBar from '../app/components/SearchBar';
import TableWords from '../app/components/TableWords';
import Table1 from '@/app/components/Table/Table1';

const data1 = [
   ["file1.txt", "word1", "txt", "Google Disk", "2024-03-09 10:00:00"],
   ["file2.txt", "word2", "txt", "Google Disk", "2024-03-09 11:00:00"],
   // Добавьте больше данных, если нужно
];


const RegularWords = () => {
   return (
      <div>
         <Header />
         <Typography variant="h3" component="h1" sx={{ mt: 4, mb: 2 }}>
            История
         </Typography>
         <Table1 data={data1} />
      </div>
   );
};

export default RegularWords;
