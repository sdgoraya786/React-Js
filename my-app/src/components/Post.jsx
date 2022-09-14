import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

const Post = () => {
  return (
    <>
      <Card sx={{ marginBottom: "10px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#f3523c" }} aria-label="recipe">
              SD
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Mutton or lamb biriyani"
          subheader="September 13, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://img.freepik.com/free-photo/mutton-lamb-biriyani-with-basmati-rice-served-bowl-moody-background_466689-72651.jpg?w=996&t=st=1663050909~exp=1663051509~hmac=b7c9d757885a198f899dbc6f16b1b88178d32a87f95bad8f65d362ee93ee4042"
          alt="Mutton or lamb biriyani with basmati rice"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <Checkbox
            aria-label="add to favorite"
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "#f33c3c" }} />}
          />
          <Tooltip title="Share">
            <IconButton aria-label="Share">
              <Share />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
