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
import MenuItem from '@mui/material/MenuItem';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [idValue, setIdValue] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [disable, setDisable] = useState(true);
    const [isErr, setIsErr] = useState(false);

    const currencies = [
        {
            value: 'NAVER',
            label: 'naver.com',
        },
        {
            value: 'GOOGLE',
            label: 'google.com',
        },
        {
            value: 'KAKAO',
            label: 'kakao.com',
        },
        {
            value: 'YAHOO',
            label: 'yahoo.co.kr',
        },
    ];

    const [currency, setCurrency] = React.useState('NAVER');

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    /*const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };*/

    const handleInput = (event) => {
        return event.target.value;
    };

    const handleDisable = () => {
        if (name.length > 1 && idValue.includes('@') && password.length >= 3 && password == passwordCheck
            && birthday.length > 7 && phoneNumber.length > 9) {
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
                            Sign up
                        </Typography>
                        <Typography sx={{ fontSize: 12 }} color="gray" variant="h1" component="div">
                            PortValue에 오신걸 환영합니다🎉
                        </Typography>

                        <Box>
                            <TextField
                                className="Name"
                                label="이름"
                                name="name"
                                fullWidth
                                autoFocus
                                sx={{ mt: 3 }}
                                onChange={event => {
                                    setName(handleInput(event));
                                    handleDisable();
                                }} />
                            <br />

                            <TextField
                                className="Id"
                                label="이메일"
                                name="email"
                                fullWidth
                                sx={{ mt: 2 }}
                                select
                                value={currency}
                                error={isErr}
                                helperText={isErr ? "이메일 형식이 올바르지 않습니다." : ""}
                                onChange={event => {
                                    handleChange();
                                    setIdValue(handleInput(event));
                                    handleDisable();
                                }} >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <br />

                            {/* <TextField
                                className="Password"
                                label="비밀번호"
                                name="password"
                                fullWidth
                                type="password"
                                sx={{ mt: 2 }}
                                error={isErr}
                                helperText={isErr ? "비밀번호 형식이 올바르지 않습니다." : ""}
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                onChange={event => {
                                    setPassword(handleInput(event));
                                    handleDisable();
                                }} /> */}
                            <br />

                            <TextField
                                className="PasswordCheck"
                                label="비밀번호확인"
                                name="passwordcheck"
                                fullWidth
                                type="password"
                                sx={{ mt: 2 }}
                                error={isErr}
                                helperText={isErr ? "비밀번호가 일치 하지 않습니다." : ""}
                                onChange={event => {
                                    setPasswordCheck(handleInput(event));
                                    handleDisable();
                                }} />
                            <br />

                            <TextField
                                className="Birthday"
                                label="생년월일(8자리)"
                                name="Birthday"
                                fullWidth
                                sx={{ mt: 2 }}
                                error={isErr}
                                helperText={isErr ? "생년월일 형식이 올바르지 않습니다." : ""}
                                onChange={event => {
                                    setBirthday(handleInput(event));
                                    handleDisable();
                                }} />
                            <br />

                            <TextField
                                className="PhoneNumber"
                                label="휴대폰 번호(-제외)"
                                name="PhoneNumber"
                                fullWidth
                                sx={{ mt: 2 }}
                                error={isErr}
                                helperText={isErr ? "휴대폰 번호 형식이 올바르지 않습니다." : ""}
                                onChange={event => {
                                    setPhoneNumber(handleInput(event));
                                    handleDisable();
                                }}
                            />
                        </Box>

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 3 }}
                            disabled={disable} >
                            회원가입
                        </Button>

                        <Button type="submit" variant="contained" fullWidth onClick={
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

export default SignUp;