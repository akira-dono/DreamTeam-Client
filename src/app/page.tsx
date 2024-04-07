import Image from "next/image";
import styles from "./page.module.css"
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import TableComponent from './components/TableComponent';

export default function Home() {
  return (
    <div>    
      <Header />
      <SearchBar/>
      <TableComponent/>
    </div>
  );
}
