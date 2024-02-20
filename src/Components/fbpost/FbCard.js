import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FbImageLibrary from 'react-fb-image-grid';

export default function FbCard({ title, desc, profilePic, img, darkMode }) {
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [sadCount, setSadCount] = useState(0);
  const [heartCount, setHeartCount] = useState(0);
  const [happyCount, setHappyCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const [heartClicked, setHeartClicked] = useState(false);
  const [happyClicked, setHappyClicked] = useState(false);
  const [sadClicked, setSadClicked] = useState(false);


  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
    setLikeClicked(true);
  };

  const handleDislikeClick = () => {
    setDislikeCount(dislikeCount + 1);
    setDislikeClicked(true);
  };

  const handleHappyClick = () => {
    setHappyCount(happyCount + 1);
    setHappyClicked(true);
  };

  const handleHeartClick = () => {
    setHeartCount(heartCount + 1);
    setHeartClicked(true);
  };

  const handleSadClick = () => {
    setSadCount(sadCount + 1);
    setSadClicked(true);
  };

  const handleCommentClick = () => {
    setCommentCount(commentCount + 1);
  };


  return (
    <Card sx={{ maxWidth: 600, margin: '20px auto', width: '100%', background: darkMode ? '#fff' : 'rgb(15 23 42)' }}>
    <CardHeader
      avatar={<Avatar src={profilePic} sx={{ bgcolor: 'red[500]' }} aria-label="recipe" />}
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={<Typography variant="h6" sx={{ color: darkMode ? 'black' : 'white' }}>{title}</Typography>}
      subheader={<Typography variant="body2" sx={{ color: darkMode ? 'black' : 'white' }}>September 14, 2016</Typography>}
    />

    <FbImageLibrary images={img} />

    <CardContent>
      <Typography variant="h5" sx={{ color: darkMode ? 'black' : 'white' }}>
        {desc}
      </Typography>
    </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
        <div>
          <IconButton aria-label="add to favorites" onClick={handleLikeClick} color={likeClicked ? 'secondary' : 'primary'}>
            <ThumbUpIcon />
            <Typography variant="body2" sx={{ marginLeft: 1, color: darkMode ? 'black' : 'white' }}>
              {likeCount}
            </Typography>
          </IconButton>

          <IconButton aria-label="dislike" onClick={handleDislikeClick} color={dislikeClicked ? 'secondary' : 'primary'}>
            <ThumbDownIcon />
            <Typography variant="body2" sx={{ marginLeft: 1, color: darkMode ? 'black' : 'white' }}>
              {dislikeCount}
            </Typography>
          </IconButton>

          <IconButton aria-label="heart" onClick={handleHeartClick} color={heartClicked ? 'secondary' : 'primary'}>
            <FavoriteIcon />
            <Typography variant="body2" sx={{ marginLeft: 1, color: darkMode ? 'black' : 'white' }}>
              {heartCount}
            </Typography>
          </IconButton>

          <IconButton aria-label="happy" onClick={handleHappyClick} color={happyClicked ? 'secondary' : 'primary'}>
            <SentimentVerySatisfiedIcon />
            <Typography variant="body2" sx={{ marginLeft: 1, color: darkMode ? 'black' : 'white' }}>
              {happyCount}
            </Typography>
          </IconButton>

          <IconButton aria-label="sad" onClick={handleSadClick} color={sadClicked ? 'secondary' : 'primary'}>
            <SentimentVeryDissatisfiedIcon />
            <Typography variant="body2" sx={{ marginLeft: 1, color: darkMode ? 'black' : 'white' }}>
              {sadCount}
            </Typography>
          </IconButton>
        </div>

        <div>
          <IconButton aria-label="comment" onClick={handleCommentClick} color='primary'>
            <CommentIcon />
            <Typography variant="body2" sx={{ marginLeft: 1 }}>
              {commentCount}
            </Typography>
          </IconButton>

          <IconButton aria-label="share" color='primary'>
            <ShareIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>

  );
}
