import './NavBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as FoxMaskIcon } from '../fox-mask.svg';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles((theme) => ({
  appbar: {
    color: 'white',
    background:'black',
    boxShadow: '0 3px 5px 2px rgba(30, 30, 30, .6)',
  },
  searchBar:{
    color:'white',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  homeIcon: {
    color:'white',
  },
  foxIcon: {
   borderRadius:10,
   width:'0.9em', 
   height:'0.9em',
   color:'white',
   background:'white',
   paddingTop:1
  },
  shoppingCart:{
    color:'white',
  }, 
  profile:{
    color:'white',
  }, 
  inputBase:{
    color:'white',
    padding: theme.spacing(0.2, 0.2, 0.2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1.5)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }
}));

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.appbar}>
      <Toolbar className='navbar'>
        <div className='nav-title'>
          <Typography>A-maskon</Typography>
        </div>
        <IconButton className={classes.searchBar}>
          <SearchIcon />
          <InputBase className={classes.inputBase} placeholder='Find your mask...' />
        </IconButton>
        <div className='navicons'>
          <IconButton className={classes.homeIcon} component={Link} to='/'>
            <HomeRoundedIcon />
          </IconButton>
          <IconButton component={Link} to='/masks'>
            <SvgIcon
              color='white'
              className={classes.foxIcon}
              component={FoxMaskIcon}
              viewBox='0 0 530 530'
              fontSize='large'
            />
          </IconButton>
          <IconButton className={classes.shoppingCart} component={Link} to='/cart'>
            <ShoppingCartRoundedIcon />
          </IconButton>
          <IconButton className={classes.profile} component={Link} to='/profile'>
            <AccountCircleRoundedIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
