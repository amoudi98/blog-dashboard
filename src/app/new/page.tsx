'use client';

import React, { useState } from 'react';
import { postsApi, useAddPostMutation } from '../store/posts-api';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
} from '@mui/material';
import DashboardLayout from '../components/dashboard-layout';
import { useDispatch } from 'react-redux';

import {useRouter} from "next/navigation";
import type { AppDispatch } from '../store/store';

export default function NewPostPage() {
    const dispatch = useDispatch<AppDispatch>(); // ✅ Properly typed
    const [addPost] = useAddPostMutation();
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        body: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const handleSubmit = async () => {
        try {
            const newPost = await addPost(formData).unwrap();
            const fullPost = {
                ...formData,
                ...newPost,
                id: Date.now(),
            };

            dispatch(
                postsApi.util.updateQueryData('getPosts', 1, (draft) => {
                    draft.data.unshift(fullPost);
                    draft.data = draft.data.slice(0, 6);

                    const currentTotalPosts = (draft.totalPages * 6) + 1;
                    draft.totalPages = Math.ceil(currentTotalPosts / 6);
                })
            );

            router.push('/');
        } catch (error) {
            console.error('Error adding post:', error);
            alert('Failed to add post');
        }
    };
    return (
        <DashboardLayout>
            <Container maxWidth="sm">
                <Typography variant="h4" gutterBottom>
                    Add New Post
                </Typography>
                <Box display="flex" flexDirection="column" gap={3} mt={3}>
                    <TextField
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Body"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        multiline
                        rows={5}
                        fullWidth
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
            </Container>
        </DashboardLayout>
    );
}
