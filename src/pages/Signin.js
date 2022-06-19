import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styled from "styled-components";

const SignIn = () => {
    const navigate = useNavigate();
    const [idValue, setIdValue] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState(true);
    const [isErr, setIsErr] = useState(false);


    const handleInput = (event) => {
        return event.target.value;
    };

    const handleDisable = () => {
        if (idValue.includes('@') && password.length >= 3) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    };

    function handleClickToSU() {
        navigate('/signup')
    };

    function handleClickToFI() {
        navigate('/FindID')
    };

    function handleClickToFP() {
        navigate('/FindPW')
    };


    return (
        <>
            <Container component="main" maxWidth="xs">
                <Card sx={{
                    marginTop: 25,
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "7"
                }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 22 }} color="black" >
                            Sign in
                        </Typography>

                        <Typography sx={{ fontSize: 12 }} color="gray" variant="h1" component="div">
                            PortValue에 오신걸 환영합니다🎉
                        </Typography>

                        <Box>
                            <TextField
                                label="이메일"
                                name="email"
                                fullWidth
                                autoFocus
                                error={isErr}
                                helperText={isErr ? "등록되지 않은 ID 입니다." : ""}
                                sx={{ mt: 3 }}
                                onChange={event => {
                                    setIdValue(handleInput(event));
                                    handleDisable();
                                }} />

                            <TextField
                                className="Password"
                                label="비밀번호"
                                name="password"
                                fullWidth
                                type="password"
                                error={isErr}
                                helperText={isErr ? "비밀번호가 일치하지 않습니다." : ""}
                                sx={{ mt: 3 }}
                                onChange={event => {
                                    setPassword(handleInput(event));
                                    handleDisable();
                                }} />

                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={disable}
                            sx={{ mt: 3 }} >
                            로그인
                        </Button>

                        <Button type="submit" variant="contained" fullWidth onClick={
                            () => {
                                setIsErr(true)
                            }
                        }>
                            에러발생
                        </Button>
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="로그인 상태 유지" />

                        {/* <Grid container>
                            <Grid sx={{ fontSize: 14 }} item xs={2.5}><Link onClick={handleClickToFI}>아이디 찾기</Link></Grid>
                            <Grid sx={{ fontSize: 14 }} item xs><Link onClick={handleClickToFP}>비밀번호 찾기</Link></Grid>
                            <Grid sx={{ fontSize: 14 }}><Link onClick={handleClickToSU}>회원가입</Link></Grid>


                        </Grid> */}


                        <SignInDetailDiv>
                            <FindFlexDiv>
                                <BlueLink marginRight="10px">
                                    여기1
                                </BlueLink>
                                <BlueLink>
                                    여기2
                                </BlueLink>
                            </FindFlexDiv>
                            <BlueLink>
                                여기3
                            </BlueLink>
                        </SignInDetailDiv>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
};

const SignInDetailDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;
const FindFlexDiv = styled.div`
    display: flex;
    justify-content: flex-start;
`;
const BlueLink = styled.div`
    color: blue;
    text-decoration: underline;
    margin-right: ${props => props.marginRight !== undefined ? props.marginRight : "0px"};
`;

export default SignIn;