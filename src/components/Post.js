import { makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';

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
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia 
            className={classes.media}
            image="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.2.1353223615.1625184000"  
            title="My Post">
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant='h5'>My First Post</Typography>
                <Typography variant='body2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At iusto perferendis illo ipsum necessitatibus amet quaerat, dignissimos tempore quidem soluta voluptatem optio veniam temporibus repellat autem impedit ad laboriosam ipsam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. At iusto perferendis illo ipsum necessitatibus amet quaerat, dignissimos tempore quidem soluta voluptatem optio veniam temporibus repellat autem impedit ad laboriosam ipsam?</Typography>
            </CardContent>      
        </CardActionArea>
        <CardActions>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' color='primary'>Learn More</Button>
        </CardActions>
    </Card>
  );
}

export default Post;
