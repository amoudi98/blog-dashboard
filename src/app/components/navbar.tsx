'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
    return (
        <AppBar position="static" color="default" elevation={1}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Blog Dashboard
                </Typography>
                <Box>
                    <Link href="/" passHref legacyBehavior>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link href="/new" passHref legacyBehavior>
                        <Button variant="contained" color="primary">
                            Add New Post
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
