import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '../../components/Card'

function Portfolio() {
    let portfolioApps = [
        { 
            title: 'Code Quiz',
            github: 'https://github.com/dcavinder/code_quiz',
            deployed: 'https://dcavinder.github.io/code_quiz/',
            image: '../../assets/images/code-quiz.png',
        },
        { 
            title: 'Code Quiz',
            github: 'https://github.com/dcavinder/code_quiz',
            deployed: 'https://dcavinder.github.io/code_quiz/',
            image: '../../assets/images/code-quiz.png',
        },
        { 
            title: 'Code Quiz',
            github: 'https://github.com/dcavinder/code_quiz',
            deployed: 'https://dcavinder.github.io/code_quiz/',
            image: '../../assets/images/code-quiz.png',
        },
        { 
            title: 'Code Quiz',
            github: 'https://github.com/dcavinder/code_quiz',
            deployed: 'https://dcavinder.github.io/code_quiz/',
            image: '../../assets/images/code-quiz.png',
        },
        { 
            title: 'Code Quiz',
            github: 'https://github.com/dcavinder/code_quiz',
            deployed: 'https://dcavinder.github.io/code_quiz/',
            image: '../../assets/images/code-quiz.png',
        },
        { 
            title: 'Code Quiz',
            github: 'https://github.com/dcavinder/code_quiz',
            deployed: 'https://dcavinder.github.io/code_quiz/',
            image: '../../assets/images/code-quiz.png',
        },
    ]
  return (
    <div>
      <Grid container justifyContent="center">
        <h2>My Portfolio</h2>
      </Grid>
      <Grid container spacing={3} padding={2} justifyContent="Center">
        {portfolioApps.map(portfolioApp =>
            <Grid item>
                <Card 
                title={portfolioApp.title} 
                github={portfolioApp.github} 
                deployed={portfolioApp.deployed} 
                image={portfolioApp.image}
                ></Card>
            </Grid>
        )}
      </Grid>
    </div>
  )
}

export default Portfolio
