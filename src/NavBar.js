import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

function NavBar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <div>
          <Typography>
            <h1>A-maskon</h1>
          </Typography>
        </div>
        <div>
          <SearchIcon />
          <InputBase placeholder='Find your mask...' />
        </div>
        <div>
          <HomeRoundedIcon />
        </div>
        <div>
          <ShoppingCartRoundedIcon />
        </div>
        <div>
          <AccountCircleRoundedIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
