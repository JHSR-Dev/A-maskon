import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "./Masks.css";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles({
  root: {
    maxHeight:600,
    maxWidth:600,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', 
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
  },
  media: {
    height: 300,
    width: 250,
  },
  addToCart: {
    padding: 10,
    
    
  }
});

const Masks = () => {
  const classes = useStyles();
  const [mask, setMask] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection("masks").onSnapshot((doc) => {
      let allMasks = [];
      doc.docs.map((mask) => allMasks.push(mask.data()));
      setMask(allMasks);
    });

    return () => unsubscribe();
  }, []);

  console.log('this is mask', mask);

  return (
    <div>
      <h1>Ready Set Mask Off</h1>
      <div className="allMasks">
        {mask.map((maskObj) => {
          return (
            <div key={mask.id}>
             <Card className ={classes.root}>
              <CardMedia className={classes.media} image={maskObj.imageUrl} />
              <CardContent>
                <Typography>
              {maskObj.name}
              </Typography>
              <Typography>
              ${maskObj.price}
              </Typography>
              <CardActions>
                <IconButton className={classes.addToCart}>
                  <AddShoppingCartIcon />
                  <Typography>
                  Add to Cart
                </Typography>
                </IconButton>
               
              </CardActions>
              </CardContent>
            </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Masks;
