import React, { Fragment, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {
    AppBar,
    Box,
    Toolbar,
    Container,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/images/logo.png';

const useStyles = makeStyles(theme => ({
    menuList: {
        fontSize: 18,
        color: '#E9E9E9',
        textTransform: 'capitalize',
        marginLeft: '40px',
        "&:after": {
            content: "''",
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '4px',
            // background: 'rgba(255, 255, 255, 0.5)',
            
        }
    },
    mobileMenuList: {
        borderRadius: '0',
        textTransform: 'capitalize',
        marginBottom: '20px',
        "&:hover": {
            backgroundColor: '#c7c7c7'
        }
    }
}));

export default function Header() {
    const history = useHistory();
    const location = useLocation();
    const pathname = location.pathname;
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (event, open) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setDrawerOpen(open);
    };

    const goto = (route) => {
        setDrawerOpen(false);
        history.push(route);
    }

    return (
        <Fragment>
            <AppBar position="relative" sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                py: { xs: '20px', md: '40px' }
            }}>
                <Toolbar>
                    <Container sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Box
                            component="img"
                            src={Logo}
                            onClick={() => history.push('/')}
                            sx={{ cursor: 'pointer' }}
                        />
                        <Box sx={{
                            flexGrow: '1',
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'flex-end'
                        }}>
                            <Button
                                variant='text'
                                className={classes.menuList}
                                onClick={() => history.push('/about-us')}
                                sx={{ "&:after": { backgroundColor: pathname === '/about-us' ? 'rgba(255, 255, 255, 0.5)': '' } }}
                            >
                                    About Us
                            </Button>
                            <Button
                                variant='text'
                                className={classes.menuList}
                                onClick={() => history.push('/account')}
                                sx={{ "&:after": { backgroundColor: pathname === '/account' ? 'rgba(255, 255, 255, 0.5)': '' } }}
                            >
                                    Account
                            </Button>
                            <Button 
                                variant='text' 
                                className={classes.menuList} 
                                onClick={() => history.push('/cpu4sale')}
                                sx={{ "&:after": { backgroundColor: pathname === '/cpu4sale' ? 'rgba(255, 255, 255, 0.5)': '' } }}
                            >
                                    Cpu4sale
                            </Button>
                            <Button 
                                variant='text' 
                                className={classes.menuList} 
                                onClick={() => history.push('/limitlesswax')}
                                sx={{ "&:after": { backgroundColor: pathname === '/limitlesswax' ? 'rgba(255, 255, 255, 0.5)': '' } }}
                            >
                                    Limitlesswax
                            </Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Button variant='outlined' sx={{
                                    ml: '40px',
                                    borderRadius: '5px',
                                    fontWeight: '600',
                                    fontSize: 20,
                                    color: '#fff',
                                    textTransform: 'capitalize',
                                    borderColor: '#fff',
                                    "&:hover": {
                                        borderColor: '#fff',
                                    }
                            }}>
                                    Login
                            </Button>
                            <IconButton
                                onClick={(e) => toggleDrawer(e, true)}
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                    ml: '30px'
                                }}
                            >
                                <MenuIcon sx={{ color: '#fff' }} />
                            </IconButton>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={(e) => toggleDrawer(e, false)}
            >
                <Box sx={{
                    minWidth: 280,
                    padding: '32px 0'
                }}>
                    <List>
                        <ListItem
                            as={Button}
                            onClick={() => goto('/about-us')}
                            className={classes.mobileMenuList}
                        >
                            <ListItemText primaryTypographyProps={{
                                fontSize: '16px',
                            }}>
                                About Us
                            </ListItemText>
                        </ListItem>
                        <ListItem
                            as={Button}
                            onClick={() => goto('/account')}
                            className={classes.mobileMenuList}
                        >
                            <ListItemText primaryTypographyProps={{
                                fontSize: '16px',
                            }}>
                                Account
                            </ListItemText>
                        </ListItem>
                        <ListItem
                            as={Button}
                            onClick={() => goto('/cpu4sale')}
                            className={classes.mobileMenuList}
                        >
                            <ListItemText primaryTypographyProps={{
                                fontSize: '16px',
                            }}>
                                Cpu4sale
                            </ListItemText>
                        </ListItem>
                        <ListItem
                            as={Button}
                            onClick={() => goto('/limitlesswax')}
                            className={classes.mobileMenuList}
                        >
                            <ListItemText primaryTypographyProps={{
                                fontSize: '16px',
                            }}>
                                Limitlesswax
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Fragment>
    );
}