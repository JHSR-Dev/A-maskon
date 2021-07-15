import "./NavBar.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as FoxMaskIcon } from "./fox-mask.svg";
import {makeStyles} from '@material-ui/core/styles';




const useStyles = makeStyles((theme)=>({
  appbar: {
    color: 'secondary'
  }
  
}))



function NavBar() {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className="navbar">
        <div className="nav-title">
          <Typography>A-maskon</Typography>
        </div>
          <div>
            <SearchIcon />
            <InputBase placeholder="Find your mask..." />
          </div>
        <div className="navicons">
         
          <div>
            <HomeRoundedIcon />
          </div>
          <div>
            <SvgIcon component={FoxMaskIcon} viewBox="0 0 600 476.6" />
          </div>
          <div>
            <ShoppingCartRoundedIcon />
          </div>
          <div>
            <AccountCircleRoundedIcon />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
