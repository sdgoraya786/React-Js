import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={230}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
        </AvatarGroup>

        {/* for latest photos */}
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        {/* for users */}
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: "360",
            bgcolor: "background.paper",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="SD Goraya"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    SD Goraya
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            ></ListItemText>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="SD Goraya"
                src="https://material-ui.com/static/images/avatar/5.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    SD Goraya
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            ></ListItemText>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Shahzad Goraya"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Shahzad Goraya
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            ></ListItemText>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="SD Goraya"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    SD Goraya
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            ></ListItemText>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="SD Goraya"
                src="https://material-ui.com/static/images/avatar/4.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    SD Goraya
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            ></ListItemText>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
