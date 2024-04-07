'use client'
import { Grid, TextField, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import * as React from "react"


const SearchBar = () => {
    const [url, setUrl] = React.useState("");
    const router = useRouter()
    const handleButtonClick = async () => {
        try {
            router.push("http://localhost:3000/regular_words")
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const handleUrlButtonClick = async () => {
        const res = await fetch("http://localhost:8000/url", {
            method: "POST",
            body: JSON.stringify({url: [url]}),
            headers: { "Content-Type": "application/json" },
        })
        const content = await res.json()
        window.location.href = `http://localhost:8000/results?content=${encodeURIComponent(JSON.stringify(content))}`
    }
    const handleUrl = async (event: any) => {
        setUrl(event.target.value);
    }
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={6} md={4} sx={{ margin: '20px 0', textAlign: 'center' }}>
                <TextField label="Введите URL документа" variant="outlined" fullWidth id="url_textfield" name="url_textfield" onChange={handleUrl}/>
            </Grid>
            <Grid item xs={4} sm={2} md={1} sx={{ textAlign: 'center' }}>
                <Button variant="contained" color="primary" fullWidth onClick={handleUrlButtonClick}>
                    Готово
                </Button>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Button onClick={handleButtonClick} variant="outlined" color="secondary">
                        Регулярные выражения
                    </Button>
            </Grid>
        </Grid>
    );
};

export default SearchBar;
