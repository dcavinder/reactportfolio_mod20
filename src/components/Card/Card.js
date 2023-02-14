import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';


const CardView = ({title,github,deployed,image}) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image= {image}
        alt="Project Image"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="GitHub">
            <div href={github} target="_blank" >
            <GitHubIcon/>
            </div>
        </IconButton>
        <IconButton aria-label="share">
            <div href={deployed} target="_blank">
            <LaunchIcon />
            </div>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardView