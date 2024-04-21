"use client"

import Image from "next/image";
import styles from "./page.module.css"
import Header from './components/Header-depr'
import SearchBar from './components/SearchBar'
import TableComponent from './components/TableComponent';
import AppBar from "./components/Header"

export default function Home() {
  return (
    <div>    
      <AppBar />
      <SearchBar/>
      {/* <TableComponent/> */}
    </div>
  );
}
