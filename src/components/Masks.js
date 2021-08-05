import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "./Masks.css";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { red, blue, green } from '@material-ui/core/colors';



const useStyles = makeStyles({
  root: {
    maxHeight:600,
    maxWidth:600,
    backgroundColor: blue[100], 
  },
  media: {
    height: 300,
    width: 250,
  },
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
      <h1>Masks</h1>
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
