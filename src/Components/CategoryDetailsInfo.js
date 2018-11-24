import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import images from '../Images/slide_1.jpeg'

const styles = {
    card: {
      maxWidth: 345,
      height: 500,
      margin:20
    },
    media: {
      objectFit: 'cover',
    },
  };
const CategoryDetailsInfo = (props) => {

    const context =() =>{
        let text="";       
        for(var i in props.item){
            text += i + " : " + props.item[i] + '\n';           
        }  
        return text;  
    }

    const { classes } = props;
    const contextResult = context();

      return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="img"
              className={classes.media}
              height="140"
              image={images}
              title="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.name}
              </Typography>
              <Typography component="p">
                {contextResult}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ); 
}
  
export default withStyles(styles)(CategoryDetailsInfo);