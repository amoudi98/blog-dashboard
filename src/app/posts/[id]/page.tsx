'use client';

import { useParams } from 'next/navigation';
import { useGetPostByIdQuery } from '../../store/posts-api';
import { Container, Typography } from '@mui/material';
import DashboardLayout from '../../components/dashboard-layout';

export default function PostDetailPage() {
    const { id } = useParams();
    const postId = Number(id);
    const { data: post, isLoading, error } = useGetPostByIdQuery(postId, {
        skip: !postId,
    });

    return (
        <DashboardLayout>
            <Container maxWidth="md">
                {isLoading && <Typography>Loading...</Typography>}
                {error || !post ? (
                    <Typography color="error">Failed to load post</Typography>
                ) : (
                    <>
                        <Typography variant="h4" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                            By: {post.author ?? 'Unknown'}
                        </Typography>
                        <Typography variant="body1">{post.body}</Typography>
                    </>
                )}
            </Container>
        </DashboardLayout>
    );
}
