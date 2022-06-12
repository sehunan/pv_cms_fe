import React, { useEffect, useState } from 'react';
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

const FindID = () => {

    const [disable, setDisable] = useState(true);
    const [phoneNumber, setPh] = useState('');
    const [isErr, setIsErr] = useState(false);
    const [step, setStep] = useState("findID");

    const handleInput = (event) => {
        return event.target.value;
    };

    const handleDisable = () => {
        if (phoneNumber.length >= 10) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    };

    return (
        <Container component="main" maxWidth="xs">

            <Card sx={{
                marginTop: 35,
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "7"
            }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="black" >
                        아이디 찾기
                    </Typography>

                    <Typography sx={{ fontSize: 12 }} color="gray" variant="h1" component="div">
                        회원가입 시 입력한 핸드폰 번호(숫자 11자리)를 입력해주세요.
                    </Typography>

                    {
                        step == "findID" &&
                        <>
                            <Box>
                                <TextField
                                    label="핸드폰 번호"
                                    name="phoneNumber"
                                    fullWidth
                                    autoFocus
                                    sx={{ mt: 3 }}
                                    error={isErr}
                                    helperText={isErr ? "입력한 정보와 일치하는 계정이 없습니다." : ""}
                                    onChange={event => {
                                        setPh(handleInput(event));
                                        handleDisable();
                                    }} />
                            </Box>

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth sx={{ mt: 3 }}
                                disabled={disable}
                                onClick={
                                    () => {
                                        setStep("showID")
                                    }
                                }>
                                확인
                            </Button>

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                onClick={
                                    () => {
                                        setIsErr(true)
                                    }
                                }>
                                에러발생
                            </Button>
                        </>

                    }
                    {
                        step == "showID" &&
                        <>
                            <Box>
                                <TextField
                                    label="이메일"
                                    name="Findmail"
                                    defaultValue="seh*****@naver.com"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    fullWidth
                                    autoFocus
                                    sx={{ mt: 3 }}
                                />
                            </Box>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3 }}
                            >
                                로그인 하기
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3 }}
                            >
                                비밀번호 찾기
                            </Button>
                        </>
                    }
                </CardContent>
            </Card>
        </Container>
    )
};

export default FindID;