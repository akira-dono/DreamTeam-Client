import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import {useRouter} from 'next/navigation';

const pages = ['Найденные файлы', 'История'];

function ResponsiveAppBar() {
   const router = useRouter()
   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
   };


   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };


   return (
      <AppBar position="static">
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <SearchIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
               <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                     mr: 2,
                     display: { xs: 'none', md: 'flex' },
                     fontFamily: 'monospace',
                     fontWeight: 300,
                     color: 'inherit',
                     textDecoration: 'none',
                  }}
               >
                  Поиск данных в облачных хранилищах
               </Typography>

               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: 'block', md: 'none' },
                     }}
                  >
                     <MenuItem key={"Найденные файлы"} onClick={() => router.push("/founded")}>
                        <Typography textAlign="center">{"Найденные файлы"}</Typography>
                     </MenuItem>
                     <MenuItem key={"История"} onClick={() => router.push("/history")}>
                        <Typography textAlign="center">{"История"}</Typography>
                     </MenuItem>
                  </Menu>
               </Box>
               <SearchIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
               <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                     mr: 2,
                     display: { xs: 'flex', md: 'none' },
                     flexGrow: 1,
                     fontFamily: 'monospace',
                     fontWeight: 700,
                     letterSpacing: '.3rem',
                     color: 'inherit',
                     textDecoration: 'none',
                  }}
               >
                  Поиск данных
               </Typography>
               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 2}}>
                     <Button
                        key={"Найденые файлы"}
                        onClick={() => router.push("/founded")}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                     >
                        Найденые файлы
                     </Button>
                     <Button
                        key={"История"}
                        onClick={() => router.push("/history")}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                     >
                        История
                     </Button>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
}
export default ResponsiveAppBar;

// Test Git Pull
