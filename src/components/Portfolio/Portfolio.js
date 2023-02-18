import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import codequiz from '../../assets/images/codequiz.png';
import uniquepasswordgen from '../../assets/images/uniquepasswordgen.png';
import htmlcoderefactor from '../../assets/images/htmlcoderefactor.png';
import teamprofilegenerator from '../../assets/images/teamprofilegenerator.png';
import workdayscheduler from '../../assets/images/workdayscheduler.png';
import parksearch from '../../assets/images/parksearch.png';

function Portfolio() {
    let portfolioApps = [
        { 
            title: 'Code Quiz',
            github: 'https://github.com/dcavinder/code_quiz',
            deployed: 'https://dcavinder.github.io/code_quiz/',
            image: codequiz,
        },
        { 
            title: 'Unique Password Generator',
            github: 'https://github.com/dcavinder/unique_password_generator',
            deployed: 'https://dcavinder.github.io/unique_password_generator/',
            image: uniquepasswordgen,
        },
        { 
            title: 'Html Code Refactor',
            github: 'https://github.com/dcavinder/html_code_refactor',
            deployed: 'https://dcavinder.github.io/html_code_refactor/',
            image: htmlcoderefactor,
        },
        { 
            title: 'Team Profile Generator',
            github: 'https://github.com/dcavinder/team_profile_generator_mod10',
            deployed: 'https://drive.google.com/file/d/1SYJGKYI1Z87JDhjkV5FJrgROPaaM7v4p/view',
            image: teamprofilegenerator,
        },
        { 
            title: 'Work Day Scheduler',
            github: 'https://github.com/dcavinder/work_day_scheduler',
            deployed: 'https://dcavinder.github.io/work_day_scheduler/',
            image: workdayscheduler,
        },
        { 
            title: 'National Park Search',
            github: 'https://github.com/dcavinder/park_search',
            deployed: 'https://dcavinder.github.io/park_search/',
            image: parksearch,
        },
    ]
  return (
    <div>
      <Grid container style={{ background: '#112e0c' }} justifyContent="center">
        <h2 style={{ color: '#ffffff' }}>My Portfolio</h2>
      </Grid>
      <Grid container spacing={3} padding={2} justifyContent="Center">
        {portfolioApps.map(portfolioApp =>
            <Grid item>
            <Card style={{ background: '#658354' }} sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={portfolioApp.title}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={portfolioApp.image}
                    alt="Project Image"
                />
                <CardActions disableSpacing>
                <IconButton aria-label="GitHub">
                        <a href={portfolioApp.github} >
                        <GitHubIcon style={{ color: '#ffffff' }}/>
                        </a>
                    </IconButton>
                    <IconButton aria-label="Deployed Application">
                        <a href={portfolioApp.deployed}>
                        <LaunchIcon style={{ color: '#ffffff' }}/>
                        </a>
                    </IconButton>
                </CardActions>
                </Card>
            </Grid>
        )}
      </Grid>
    </div>
  )
}

export default Portfolio
