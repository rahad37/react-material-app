import { makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import {data} from './data';
const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5)
    },
    container: {
        paddingTop: theme.spacing(10)
    },
    media: {
        height: 250,
        [theme.breakpoints.down('sm')]: {
            height: 150
        }
    }
}))

function Post() {
  const classes = useStyles();
  return (<>
    {data.map(item => (
    <Card className={classes.card}>
    
            <CardActionArea>
            <CardMedia 
            className={classes.media}
            image={item.img}  
            title="My Post">
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant='h5'>{item.name}</Typography>
                <Typography variant='body2'>{item.desc}</Typography>
            </CardContent>      
        </CardActionArea> 

        <CardActions>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' color='primary'>Learn More</Button>
        </CardActions>
    </Card>))}</>
  );
}

export default Post;
