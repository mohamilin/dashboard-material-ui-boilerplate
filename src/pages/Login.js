import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/auth/authApiSlice";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Copyright from "../components/Copyright";
import { Alert } from "@mui/material";

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();

  const userRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await login({
        user_email: email,
        user_password: password,
      }).unwrap();
      dispatch(setCredentials({ ...userData.data, email }));
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } catch (error) {
      if (error?.data?.code === 401) {
        console.log(error.data.message, "gagal");
        setErrMsg(error.data.message);
      }
    }
  };

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              <>
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>

                {errMsg ? (
                  <Alert
                  sx={{m: 3}}
                    severity="error"
                    className={errMsg ? "errMsg" : "offsreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </Alert>
                ) : (
                  ""
                )}
                <Box
                  component="form"
                  // onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    ref={userRef}
                    value={email}
                    onChange={handleEmailInput}
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordInput}
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    // onClick={() => navigate("dashboard")}
                    type="submit"
                    onClick={handleSubmit}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Masuk
                  </Button>
                </Box>
              </>
            )}
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
