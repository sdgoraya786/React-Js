import {
  Add,
  Close,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const AddPost = () => {
  const [openAddPost, setOpenAddPost] = useState(false);
  const StyledModel = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
  return (
    <>
      <Tooltip
        onClick={() => setOpenAddPost(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 30,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>

      {/* Add Post Model */}
      <StyledModel open={openAddPost}>
        <Box
          width={450}
          height={280}
          p={3}
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              src="https://material-ui.com/static/images/avatar/1.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight={500}>
              SD Goraya
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="create-post"
            multiline
            rows={3}
            variant="standard"
            placeholder="What's on your mind?"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup variant="contained" fullWidth>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
            <Button onClick={() => setOpenAddPost(false)}>Post</Button>
            <Tooltip title="Close">
              <Button sx={{ width: "100px" }}>
                <Close onClick={() => setOpenAddPost(false)} />
              </Button>
            </Tooltip>
          </ButtonGroup>
        </Box>
      </StyledModel>
    </>
  );
};

export default AddPost;
