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

const FindPW = () => {
    const navigate = useNavigate();
    const [disable, setDisable] = useState(true);
    const [eMail, setEm] = useState('');
    const [isErr, setIsErr] = useState(false);
    const [step, setStep] = useState("findPW");

    const handleInput = (event) => {
        return event.target.value;
    };

    const handleDisable = () => {
        if (eMail.includes('@')) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    };



    return (
        <>
            <Container component="main" maxWidth="xs">
                <Card sx={{
                    marginTop: 15,
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} color="black" >
                            비밀번호 찾기
                        </Typography>
                        <Typography sx={{ fontSize: 12 }} color="gray" variant="h1" component="div">
                            회원가입 시 입력한 이메일 입력해주세요.
                        </Typography>

                        <Box>
                            <TextField
                                label="이메일"
                                name="Email"
                                fullWidth
                                autoFocus
                                sx={{ mt: 3 }}
                                error={isErr}
                                helperText={isErr ? "입력한 정보와 일치하는 계정이 없습니다." : ""}
                                onChange={event => {
                                    setEm(handleInput(event));
                                    handleDisable();
                                }} />
                        </Box>

                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }} disabled={disable}>
                            비밀번호 찾기
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

                    </CardContent>
                </Card>
            </Container>
        </>
    )
};

export default FindPW;