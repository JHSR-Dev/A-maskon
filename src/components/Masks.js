import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import './Masks.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxHeight: 600,
    maxWidth: 600,
    background: 'linear-gradient(60deg, #485875 50%, #b0bbcf 80%)',
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 30, .5)',
    margin: '1.5em',
    color: 'white',
  },
  media: {
    height: 200,
    width: 190,
    margin: '1em',
  },
  addToCart: {
    padding: 10,
    color: 'white',
  },
});

const Masks = (props) => {
  const classes = useStyles();
  const [mask, setMask] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection('masks').onSnapshot((doc) => {
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
      <div className='allMasks'>
        {mask.map((maskObj) => {
          return (
            <div key={mask.id}>
              <Card className={classes.root}>
                <CardMedia className={classes.media} image={maskObj.imageUrl} />
                <CardContent>
                  <Typography component={Link} to={{pathname: `/maskDetails`, mask: maskObj}}>
                    {maskObj.name}
                  </Typography>
                  <Typography>${maskObj.price}</Typography>
                  <CardActions>
                    <IconButton>
                      <AddShoppingCartIcon className={classes.addToCart} />
                      <Typography>Add to Cart</Typography>
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
