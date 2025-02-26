'use client';
import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    InputBase,
    IconButton,
    useTheme,
    useMediaQuery,
    Menu,
    MenuItem,
    Stack,
    styled,
    Container
} from '@mui/material';
import {
    Search as SearchIcon,
    FavoriteBorderOutlined as FavoriteIcon,
    ShoppingCartOutlined as ShoppingCartIcon,
    Menu as MenuIcon, FavoriteBorderOutlined,
} from '@mui/icons-material';
import Link from 'next/link';

const SearchWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    color: 'black',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f5f5f5',
    '&:hover': {
        backgroundColor: '#ebebeb',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '300px !important',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    top: 0,
    right: 0,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '250px !important',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
}));

const StyledLink = styled(Link)({
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'none',
    },
});

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = ['Home', 'Contact', 'About', 'Sign Up'];

    return (
        <AppBar position="sticky" color="inherit" elevation={1}>
            <Container maxWidth="xl">
                <Toolbar sx={{ justifyContent: 'space-evenly', padding: '0.5rem 0' }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 0,
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        <StyledLink href="/">
                            Exclusive
                        </StyledLink>
                    </Typography>

                    {!isMobile && (
                        <Stack
                            direction="row"
                            spacing={4}
                            sx={{ flexGrow: 0 }}
                        >
                            {menuItems.map((item) => (
                                <StyledLink href={`/${item.toLowerCase().replace(' ', '-')}`} key={item}>
                                    <Typography sx={{ fontWeight: 500 }}>
                                        {item}
                                    </Typography>
                                </StyledLink>
                            ))}
                        </Stack>
                    )}

                    <Typography component={'div'} sx={{
                        display:'flex',
                        justifyContent: 'end',
                        width:'540px'
                    }}>
                        <SearchWrapper>
                            <StyledInputBase
                                placeholder="What are you looking for?"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                        </SearchWrapper>
                        <Typography component={'div'}>
                            <IconButton color="black">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton color="black">
                                <ShoppingCartIcon />
                            </IconButton>
                        </Typography>
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

                        {isMobile && (
                            <>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    {menuItems.map((item) => (
                                        <MenuItem
                                            key={item}
                                            onClick={handleClose}
                                            component={Link}
                                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                                        >
                                            {item}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;