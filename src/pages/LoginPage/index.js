import React, { useState } from 'react';
import {
    Container,
    Box,
    Card,
    CardContent,
    Stack,
    Typography,
    InputAdornment,
    IconButton,
    Button,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import DemoSignInInput from '../../components/Common/DemoSignInInput';
import glassesImage from '../../assets/glasses.png';
import googleImage from '../../assets/google.svg';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Box
        sx={{
          margin: {
            xs: '30px 10px',
            sm: '10px',
            md: '60px 30px',
          },
        }}
      >
        <Card>
          <CardContent>
            <Stack direction={'row'} width={'100%'}>
              <Box
                display={{
                  xs: 'none',
                  sm: 'none',
                  md: 'block'
                }}
                width={{
                  md: '40%'
                }}
              >
                <Box
                  component={'img'}
                  src={glassesImage}
                  width={'100%'}
                  height={'100%'}
                  sx={{
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <Box
                sx={{
                  padding: {
                    sm: '30px',
                    md: '80px',
                  },
                }}
                width={{
                  xs: '100%',
                  sm: '100%',
                  md: '60%',
                }}
              >
                <Box
                  sx={{
                    marginBottom: '10px',
                  }}
                >
                  <Typography
                    component={'h4'}
                    variant={'h4'}
                    fontWeight={'bold'}
                  >
                    Welcome to Paronama,
                  </Typography>
                  <Typography
                    component={'h4'}
                    variant={'h4'}
                    fontWeight={'bold'}
                  >
                    Sign in to Continue
                  </Typography>
                </Box>

                <Box
                  sx={{
                    marginBottom: '30px',
                  }}
                >
                  <Typography>
                    Don't have an account? <Typography component={'a'} href='#' color={'primary'} sx={{fontWeight: 'bold'}}>Create an account</Typography>
                  </Typography>
                  <Typography>
                    It takes less than a minute.
                  </Typography>
                </Box>

                <Box>
                  <Box
                    sx={{
                      marginBottom: '15px',
                    }}
                  >
                    <DemoSignInInput
                      id="sign-in-email"
                      inputLabel="Email"
                      label=""
                      type="email"
                      InputLabelProps={{
                        shrink: false,
                      }}
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box
                    sx={{
                      marginBottom: '10px',
                    }}
                  >
                    <DemoSignInInput
                      id="sign-in-password"
                      inputLabel="Password"
                      label=""
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        shrink: false,
                      }}
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Box>
                
                <Box
                  textAlign={'center'}
                  marginBottom={'25px'}
                >
                  <Typography
                    component={'a'}
                    href={'#'}
                    color={'primary'}
                    sx={{fontWeight: 'bold'}}
                  >
                    Forgot password?
                  </Typography>
                </Box>

                <Box
                  marginBottom={'10px'}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation={true}
                    fullWidth
                  >
                    Sign In
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    disableElevation={true}
                    fullWidth
                    startIcon={
                      <Box
                        component={'img'}
                        src={googleImage}
                        sx={{
                          width: '16px'
                        }}
                      />}
                  >
                    Sign In with Google
                  </Button>
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default LoginPage;