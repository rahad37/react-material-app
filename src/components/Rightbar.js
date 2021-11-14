import { makeStyles, Container, Avatar, Typography, ImageList, ImageListItem, Link, Divider } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: 'sticky',
        top: 0
    },
    title:{
        fontSize: "16px",
        fontweight: 500,
        color: "#555"
    },
    link:{
        marginRight: theme.spacing(2),
        color: "#555",
        fontSize: 16
    }
}))

function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>Online Friends</Typography>
        <AvatarGroup max={6} style={{marginBottom: "20px"}}>
            <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" />
            <Avatar alt="Travis Howard" src="https://st3.depositphotos.com/1000816/19162/i/600/depositphotos_191625590-stock-photo-portrait-of-happy-cheerful-young.jpg" />
            <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg" />
            <Avatar alt="Agnes Walker" src="https://post.healthline.com/wp-content/uploads/2020/09/happy_woman_outdoors_clouds-1200x628-facebook.20180427215822123-1200x628.jpg" />
            <Avatar alt="Trevor Henderson" src="https://im.rediff.com/300-300/movies/2019/oct/14neeraj-madhav2.jpg" />
            <Avatar alt="Trevor Henderson" src="https://im.rediff.com/300-300/movies/2019/oct/14neeraj-madhav2.jpg" />
            <Avatar alt="Trevor Henderson" src="https://im.rediff.com/300-300/movies/2019/oct/14neeraj-madhav2.jpg" />
            <Avatar alt="Trevor Henderson" src="https://im.rediff.com/300-300/movies/2019/oct/14neeraj-madhav2.jpg" />
        </AvatarGroup>

        <Typography className={classes.title} gutterBottom>Gallery</Typography>
        <ImageList rowHeight={100} className={classes.imageList} cols={3} style={{marginBottom: "20px"}}>
            <ImageListItem>
            <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
            <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
            <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
            <img src="https://v4.mui.com/static/images/image-list/honey.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
            <img src="https://v4.mui.com/static/images/image-list/star.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
            <img src="https://v4.mui.com/static/images/image-list/bike.jpg" alt="" />
            </ImageListItem>
        </ImageList>
        <Typography className={classes.title} gutterBottom>Categories</Typography>
        <Link href='#' className={classes.link} variant='body2'>
            Sports
        </Link>
        <Link href='#' className={classes.link} variant='body2'>
            Food
        </Link>
        
        <Link href='#' className={classes.link} variant='body2'>
            Movies
        </Link>
        <Divider flexItem style={{marginBottom: '10px'}}/>
        <Link href='#' className={classes.link} variant='body2'>
            Science
        </Link>
        <Link href='#' className={classes.link} variant='body2'>
            Music
        </Link>
        <Link href='#' className={classes.link} variant='body2'>
            Science
        </Link>
    </Container>
  );
}

export default Rightbar;
