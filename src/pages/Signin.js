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
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="black" >
                        Sign in
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary" variant="h5" component="div">
                        portValue에 오신걸 환영합니다.
                    </Typography>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="이메일" variant="outlined" />
                        <br />
                        <TextField id="outlined-basic" label="비밀번호" variant="outlined" />
                    </Box>

                    <Stack direction="row" spacing={2} >
                        <Button variant="contained" disabled>
                            로그인
                        </Button>
                    </Stack>



                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    )
};

export default Signin;