import Header from '../app/components/Header';
import { AppBar, Toolbar, Typography, Button, Stack, Icon } from '@mui/material';
import SearchBar from '../app/components/SearchBar';
import TableWords from '../app/components/TableWords';
import Table2 from '@/app/components/Table/Table2';

const data2 = [
   ["file3.txt", "word3", "txt", "Google Disk", "2024-03-09 12:00:00"],
   ["file4.txt", "word4", "txt", "Google Disk", "2024-03-09 13:00:00"],
   // Добавьте больше данных, если нужно
];

const RegularWords = () => {
   return (
      <div>
         <Header />
         <Typography variant="h3" component="h1" sx={{ mt: 4, mb: 2 }}>
            Найденные слова
         </Typography>
         <Table2 data={data2}/>
      </div>
   );
};

export default RegularWords;
