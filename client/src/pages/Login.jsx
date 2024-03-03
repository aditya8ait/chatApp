import React, { useState } from 'react';
import { Avatar, Button, Container, IconButton, Paper, TextField, Typography } from '@mui/material'
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StylesComponents.jsx';
import Stack from '@mui/material/Stack';
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validators.js";


const Login = () => {


    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin = () => {
        setIsLogin((prev) => !prev)
    }

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useInputValidation("");

    const avatar = useFileHandler("single");

    const handleLogin = (e) => {
        e.preventDedfault();
    }

    const handleSignUp = (e) => {
        e.preventDedfault();
    }



    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(rgb(255,225,209),rgb(249,159,159))",
            }}
        >
            <Container component={"main"} maxWidth="xs" sx={{
                height: '100vh',
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>

                    {
                        isLogin ? (
                            <>
                                <Typography variant='h5'>Login</Typography>
                                <form style={{
                                    width: "100%",
                                    marginTop: "1rem"
                                }}
                                    onSubmit={handleLogin}
                                >
                                    <TextField
                                        required
                                        fullWidth
                                        label="Username"
                                        margin='normal'
                                        variant='outlined'
                                        value={username.value}
                                        onChange={username.changeHandler}
                                    />

                                    <TextField
                                        required
                                        fullWidth
                                        label="Password"
                                        type='password'
                                        margin='normal'
                                        variant='outlined'
                                        value={password.value}
                                        onChange={password.changeHandler}
                                    />

                                    <Button
                                        sx={{
                                            marginTop: "1rem"
                                        }}
                                        variant='contained'
                                        color='primary'
                                        type='submit'
                                        fullWidth
                                    >
                                        Login
                                    </Button>
                                    <Typography textAlign={"center"} m={'1rem'}>OR</Typography>
                                    <Button
                                        fullWidth
                                        variant='text'
                                        onClick={toggleLogin}
                                    >
                                        Sign Up instead
                                    </Button>
                                </form>
                            </>
                        ) : (
                            <>
                                <Typography variant='h5'>Sign Up</Typography>
                                <form style={{
                                    width: "100%",
                                    marginTop: "1rem"
                                }}
                                    onSubmit={handleSignUp}
                                >

                                    <Stack
                                        position={'relative'}
                                        width={"10rem"}
                                        margin={"auto"}
                                    >
                                        <Avatar
                                            sx={{
                                                width: "10rem",
                                                height: "10rem",
                                                objectFit: "contain"
                                            }}
                                            src={avatar.preview}
                                        />

                                        <IconButton
                                            sx={{
                                                position: "absolute",
                                                bottom: "0",
                                                right: "0",
                                                color: "white",
                                                bgcolor: "rgba(0,0,0,0.5)",
                                                ":hover": {
                                                    bgcolor: "rgba(0,0,0,0.7)"
                                                }
                                            }}
                                            component="label"
                                        >
                                            <>
                                                <CameraAltIcon />
                                                <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                                            </>
                                        </IconButton>

                                    </Stack>
                                    {
                                        avatar.error && (
                                            <Typography
                                                margin={"1rem auto"}
                                                color="error"
                                                variant='caption'
                                                width={"fit-content"}
                                                display={"block"}
                                            >
                                                {avatar.error}
                                            </Typography>
                                        )
                                    }

                                    <TextField
                                        required
                                        fullWidth
                                        label="Name"
                                        margin='normal'
                                        variant='outlined'
                                        value={name.value}
                                        onChange={name.changeHandler}
                                    />

                                    <TextField
                                        required
                                        fullWidth
                                        label="Bio"
                                        margin='normal'
                                        variant='outlined'
                                        value={bio.value}
                                        onChange={bio.changeHandler}
                                    />

                                    <TextField
                                        required
                                        fullWidth
                                        label="Username"
                                        margin='normal'
                                        variant='outlined'
                                        value={username.value}
                                        onChange={username.changeHandler}
                                    />

                                    {
                                        username.error && (
                                            <Typography color="error" variant='caption'>
                                                {username.error}
                                            </Typography>
                                        )
                                    }

                                    <TextField
                                        required
                                        fullWidth
                                        label="Password"
                                        type='password'
                                        margin='normal'
                                        variant='outlined'
                                        value={password.value}
                                        onChange={password.changeHandler}
                                    />

                                    {
                                        password.error && (
                                            <Typography color="error" variant='caption'>
                                                {password.error}
                                            </Typography>
                                        )
                                    }

                                    <Button
                                        sx={{
                                            marginTop: "1rem"
                                        }}
                                        variant='contained'
                                        color='primary'
                                        type='submit'
                                        fullWidth
                                    >
                                        Sign Up
                                    </Button>
                                    <Typography textAlign={"center"} m={'1rem'}>OR</Typography>
                                    <Button
                                        fullWidth
                                        variant='text'
                                        onClick={toggleLogin}
                                    >
                                        Login In instead
                                    </Button>
                                </form>
                            </>
                        )
                    }


                </Paper>
            </Container>

        </div>
    )
}

export default Login;