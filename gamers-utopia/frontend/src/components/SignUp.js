import { 
    FormControl,
    FormHelperText, 
    Input, 
    InputLabel, 
    Card, 
    CardContent, 
    CardMedia, 
    Typography, 
    Button
} from '@mui/material';
import { motion } from 'framer-motion';
import { lightTheme, darkTheme } from './Theme';

function SignUp({ windowWidth, darkMode }) {
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
                            Sign Up
                        </Typography>
                        
                        <div style={{display: 'flex', gap: '15px'}}>
                            <FormControl sx={{width: '250px'}}>
                                <InputLabel htmlFor="my-input">Username</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Choose a unique username.</FormHelperText>
                            </FormControl>
        
                            <FormControl sx={{width: '250px'}}>
                                <InputLabel htmlFor="my-input">Email</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                            </FormControl>
                        </div>
        
                        <FormControl sx={{width: '515px'}}>
                            <InputLabel htmlFor="my-input">Address</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">Where are you from?</FormHelperText>
                        </FormControl>
        
                        <div style={{display: 'flex', gap: '15px'}}>
                            <FormControl sx={{width: '250px'}}>
                                <InputLabel htmlFor="my-input">City</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Enter your city name.</FormHelperText>
                            </FormControl>
        
                            <FormControl sx={{width: '250px'}}>
                                <InputLabel htmlFor="my-input">State/Province</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Enter your state/province name.</FormHelperText>
                            </FormControl>
                        </div>
        
                        <div style={{display: 'flex', gap: '15px'}}>
                            <FormControl sx={{width: '250px'}}>
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <Input id="my-input" type="password" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Never share your password with anyone.</FormHelperText>
                            </FormControl>
        
                            <FormControl sx={{width: '250px'}}>
                                <InputLabel htmlFor="my-input">Retype Password</InputLabel>
                                <Input id="my-input" type="password" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Enter your password again.</FormHelperText>
                            </FormControl>
                        </div>
        
                        <Button variant="contained" sx={{width: '400px'}}>Sign In</Button>
        
                    </CardContent>
        
                </Card>
        </motion.div>
    </>
  )
}

export default SignUp