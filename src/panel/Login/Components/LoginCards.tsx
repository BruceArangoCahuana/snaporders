import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export default function LoginCards() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassWord = (value: string) => {
    setPassword(value);
  };
  const handleSumbitSession = () => {
    const body = {
      email,
      password,
    };
    console.log(body);
    navigate("/panel");
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Paper
        variant="elevation"
        sx={{
          background: "white",
          padding: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius:"8px"
        }}
      >
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h6" color="info" sx={{fontWeight:"bold"}}>Iniciar Session</Typography>
            <Typography variant="subtitle1">Inicia session con tu  cuenta y navega..!</Typography>
        </Grid>
          <Grid item xs={12}>
            <TextField 
                fullWidth 
                label="Correo" 
                placeholder="Ingresar correo"
                onChange={(e) =>handleEmail(e.target.value as string)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
                fullWidth 
                label="Contraseña" 
                type="password" 
                 placeholder="Ingresar contraseña"
                onChange={(e) =>handlePassWord(e.target.value as string)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
                fullWidth 
                variant="contained" 
                color="primary"
                sx={{borderRadius:"4px",textTransform:"none"}}
                onClick={handleSumbitSession}
            >
              Iniciar Sesión
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">
                Ya tienes cuanta? create una cuenta 
                <Link to="/create-user" color="info"> aqui</Link>
            </Typography>
        </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
