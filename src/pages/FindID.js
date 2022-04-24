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


    /*const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        console.log("value: " + value)
    }, [value])*/








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
                            아이디찾기
                        </Typography>

                        <Box>
                            <TextField className="Id" label="이메일" name="email" fullWidth autoFocus sx={{ mt: 3 }} />
                            <br />
                            <TextField className="Password" label="비밀번호" name="password" fullWidth type="password" sx={{ mt: 2 }} />

                        </Box>

                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }} disabled>
                            아이디찾기
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
};

export default FindID;