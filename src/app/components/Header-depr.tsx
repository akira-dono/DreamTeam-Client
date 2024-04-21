
import { AppBar, Toolbar, Typography, Button, Stack, Icon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from "next/navigation";

const Header = () => {
    return (
        <AppBar position="static" sx={{padding: '20px 50px'}}>
            <Toolbar>
                <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center', sm: 'flex-start' }} justifyContent="space-between" sx={{ width: '100%' }}>
                    <Stack direction="row" alignItems="center">
                        <Icon component={SearchIcon} sx={{ mr: { xs: '0', sm: '10px' }, mb: { xs: '10px', sm: '0' }, display: { xs: 'none', sm: 'flex' } }} />
                        <Typography variant="h6">
                            Поиск данных в облачных хранилищах
                        </Typography>
                    </Stack>
                </Stack>
                <Stack>
                    Aaaaaa
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;













