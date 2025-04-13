'use client';

import {
    Drawer,
    AppBar,
    Toolbar,
    List,
    Typography,
    Box,
    CssBaseline,
    Divider, Button,
    ListItemButton,
} from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

const drawerWidth = 240;

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                    bgcolor: 'primary.main',
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Blog Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        bgcolor: '#f4f6f8',
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItemButton>
                            <Button component={Link} href="/" variant="contained">
                                Home
                            </Button>
                        </ListItemButton>
                        <Divider />
                        <ListItemButton>
                            <Button component={Link} href="/new" variant="contained">
                                Add New Post
                            </Button>
                        </ListItemButton>

                    </List>
                </Box>
            </Drawer>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: '#f9fafb',
                    p: 3,
                    minHeight: '100vh',
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
