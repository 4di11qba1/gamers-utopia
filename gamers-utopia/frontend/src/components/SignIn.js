import { 
    FormControl,
    FormGroup,
    FormControlLabel, 
    FormHelperText, 
    Input, 
    InputLabel, 
    Card, 
    CardContent, 
    CardMedia, 
    Typography, 
    Button,
    Checkbox
} from '@mui/material';
import { motion } from 'framer-motion';
import { darkTheme, lightTheme } from './Theme';
import { useNavigate } from 'react-router-dom';

function SignIn({ windowWidth, darkMode }) {
    const nav = useNavigate();
  return (
    <>
        <motion.div
            initial={{opacity: 0, x: -200}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.25}}
            style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '100vw', 
                height: '100vh',
                backgroundColor: darkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default
            }}
                >
                <Card sx={{display: 'flex', flexDirection: 'row', borderRadius: '15px', transition: 'all 1s'}}>
        
                    { 
                        (windowWidth > 750) ?
                            <>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 250 }}
                                    image="/static/img/sign in/ghost.jpeg"
                                    alt="Call of Duty"
                                />
                            </>
                            : null
                    }
        
                    <CardContent sx={{
                        gap: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        margin: '20px'
                    }}>
                        <div style={{
                            display: 'flex'
                        }}>
                            <Button>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 30 }}
                                    image="/img/sign in/google.png"
                                    alt="Google"
                                />
                            </Button>
                            <Button>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 30 }}
                                    image="/img/sign in/fb.png"
                                    alt="Google"
                                />
                            </Button>
                            <Button>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 30 }}
                                    image="/img/sign in/xbox.png"
                                    alt="Google"
                                />
                            </Button>
                            <Button>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 30 }}
                                    image="/img/sign in/nintendo.png"
                                    alt="Google"
                                />
                            </Button>
                            <Button>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 30 }}
                                    image="/img/sign in/ps.png"
                                    alt="Google"
                                />
                            </Button>
                        </div>
        
                            <Typography component="div" variant="h6">
                                Sign In
                            </Typography>
                        
                            <FormControl sx={{width: '400px'}}>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Enter your email.</FormHelperText>
                            </FormControl>
        
                            <FormControl sx={{width: '400px'}}>
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <Input id="my-input" type="password" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Never share your password with anyone.</FormHelperText>
                            </FormControl>
        
                            <FormGroup sx={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <FormControlLabel control={<Checkbox />} label="Remember Me" />
                                <Button>
                                    Forgot your Password?
                                </Button>
                            </FormGroup>
        
                            <Button variant="contained" sx={{width: '400px'}}>Sign In</Button>
                            <Button sx={{width: '400px'}}>
                                Privacy Policy
                            </Button>
                            
                            <div style={{display: 'flex'}}>
                                <Typography sx={{display: 'flex', alignItems: 'center'}}>
                                    Don't have an account?
                                </Typography>
                                <Button onClick={() => nav('/signup')}>
                                    Sign Up
                                </Button>
                            </div>
                            
                    </CardContent>
        
                </Card>
        </motion.div>
    </>
  )
}

export default SignIn