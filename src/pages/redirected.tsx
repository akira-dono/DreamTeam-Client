import Header from '../app/components/Header';
import { AppBar, Toolbar, Typography, Button, Stack, Icon } from '@mui/material';
import SearchBar from '../app/components/SearchBar';
import TableWords from '../app/components/TableWords';
import {useState, useEffect} from "react";

const RegularWords = () => {
   const [content, setContent] = useState([]);
   useEffect(() => {
      const savedContent = sessionStorage.getItem("content");
      setContent(JSON.parse(savedContent));
   }, []);
   return (
      <>
         <Header />
         <Typography variant="h3" component="h1" sx={{ mt: 2, mb: 2 }}>
            Результаты поиска
         </Typography>
         {content.map((item, index) => {
            return <div key={index}>
               <h2>{item.title}.docx</h2>
               <p>Соответствие: {item.match ? 'Да' : 'Нет'}</p>
               <p>Регулярное выражение: {item.regex}</p>
            </div>
         })}
      </>
   );
};

export default RegularWords;
