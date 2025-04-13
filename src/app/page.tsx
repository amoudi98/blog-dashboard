'use client';

import { useState } from 'react';
import { useGetPostsQuery } from './store/posts-api';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    CardActions,
    Grid,
    Pagination,
} from '@mui/material';
import Link from 'next/link';
import DashboardLayout from './components/dashboard-layout';

export default function HomePage() {
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useGetPostsQuery(page);
    const posts = data?.data || [];
    const totalPages = data?.totalPages || 1;
    // deno-lint-ignore no-explicit-any
    const handlePageChange = (_: any, value: number) => {
        setPage(value);
    };

    return (
        <DashboardLayout>
            {isLoading && <Typography>Loading...</Typography>}
            {error && <Typography color="error">Failed to load posts</Typography>}

            <Grid container spacing={3}>
                {posts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <Card
                            elevation={3}
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                },
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    By: {post.author ?? 'Unknown'}
                                </Typography>
                                <Typography variant="body2">
                                    {post.body.substring(0, 100)}...
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ mt: 'auto', px: 2, pb: 2 }}>
                                <Link href={`/posts/${post.id}`}>
                                    <Button size="small" variant="outlined">
                                        Read More
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box display="flex" justifyContent="center" mt={4}>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Box>
        </DashboardLayout>
    );
}
