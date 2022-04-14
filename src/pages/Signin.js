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

const Signin = () => {

    /*const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        console.log("value: " + value)
    }, [value])*/

    return (
        <>
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="black" >
                        Sign in
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary" variant="h5" component="div">
                        portValue에 오신걸 환영합니다.
                    </Typography>

                    <Box>
                        <TextField label="이메일" name="email" fullWidth autoFocus sx={{ mt: 3 }} />
                        <br />
                        <TextField label="비밀번호" name="password" fullWidth type="password" sx={{ mt: 2 }} />

                    </Box>

                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }} disabled>
                        로그인
                    </Button>

                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="로그인 상태 유지" sx={{ mt: 2 }} />

                    <Grid container>
                        <Grid item xs={1}><Link>아이디 찾기</Link></Grid>
                        <Grid item xs><Link>비밀번호 찾기</Link></Grid>
                        <Grid><Link>회원가입</Link></Grid>
                    </Grid>

                </CardContent>

            </Card>
        </>
    )
};

export default Signin;