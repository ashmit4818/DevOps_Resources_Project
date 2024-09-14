// src/components/Home.js
import React  from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';

import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import myPhoto from '../assets/myPhoto.jpg';
import dockerImage from '../assets/docker.png';
import youtubeImage from '../assets/yt.png';
import mediumImage from '../assets/medium.png';
import GithubImage from '../assets/github.jpg'
import fccImage from '../assets/fcc.png';
import randomBlogsImage from '../assets/randomBlogs.png';

const Home = () => {

  return (
    <>
      <Container style={{ marginTop: '5%' }}>
        <Grid container spacing={3} alignItems="center">
          {/* Left side: Image with clip-path */}
          <Grid item size={{ xs: 12, md: 6 }} display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <Box
              component="img"
              src={myPhoto}
              alt="Ashmit"
              sx={{
                top: '40%',
                left: '15%',
                width: '60%',
                height: '60%',
                backgroundImage: 'linear-gradient(120deg, #26bfc6 -10%, #1b3887 100%)',
                borderRadius: '40% 60% 63% 37% / 36% 39% 61% 64%',
                transform: 'rotate(-5deg)',
                transition: 'all 0.5s ease',
                '&:hover': {
                  transform: 'rotate(0deg)',
                }
              }}
            />
          </Grid>

          {/* Right side: Motivational paragraph */}
          <Grid item size={{ xs: 12, md: 6 }} textAlign="center">
              <Typography variant="h4" gutterBottom>
                From Web Dev to DevOps 🚀
              </Typography>
              <Typography variant="body1" paragraph>
              At VIT Bhopal, my journey in Computer Science sparked my passion for web development 💻, especially with React ⚛️ and Material-UI. But as I developed more projects, I wanted to take them further—into the world of industrial-level practices like continuous integration and automated deployments.
              </Typography>
              <Typography variant="body1" paragraph>
              That’s where DevOps comes in! With tools like Docker 🐳 and Kubernetes 🛠️, I discovered the power of automation, scalability, and efficiency. Combining my web development skills with DevOps practices has allowed me to create streamlined, real-world solutions like the DevOps Resources Hub. It’s not just about coding anymore; it’s about building systems that make an impact.
              </Typography>
              <Typography variant="body1" paragraph>
              DevOps is about constant growth and innovation—let’s build something remarkable together! 💪
              </Typography>
           </Grid>


        </Grid>
      </Container>

      {/* Resources Section */}
      <Container style={{ marginTop: '5%', marginBottom: '2%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Devops Resources
        </Typography>
      </Container>

      {/* New container for card components */}
      <Container style={{ marginTop: '5%',marginBottom: '5%', display: 'flex', flexDirection: 'column' }}>
        <Grid container spacing={3}>
          {/* Docker Docs Card */}
          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <Link to="/docker-docs" style={{ textDecoration: 'none' }}>
              <Card>
                <CardMedia
                  component="img"
                  height="100%"
                  image={dockerImage}
                  alt="Docker Docs"
                  sx={{
                    backgroundColor: '#fff', // Set background color for dark mode
                  }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">
                    Docker Docs
                  </Typography>
                  <Typography variant="body2" align="center">
                    Explore comprehensive Docker documentation to understand containerization and orchestration.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          {/* Free Code Camp Card */}
          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <Link to="/blogs" style={{ textDecoration: 'none' }}>
              <Card>
                <CardMedia
                  component="img"
                  height="100%"
                  image={fccImage}
                  alt="Free Code Camp"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">
                    Free Code Camp
                  </Typography>
                  <Typography variant="body2" align="center">
                    Learn with Free Code Camp's extensive range of coding tutorials and resources.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          {/* Medium Articles Card */}
          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <Link to="/medium-articles" style={{ textDecoration: 'none' }}>
              <Card>
                <CardMedia
                  component="img"
                  height="100%"
                  image={mediumImage}
                  alt="Medium Articles"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">
                    Medium Articles
                  </Typography>
                  <Typography variant="body2" align="center">
                    Read insightful articles to enhance your understanding of DevOps and related technologies.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          {/* YouTube Playlists Card */}
          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <Link to="/youtube" style={{ textDecoration: 'none' }}>
              <Card>
                <CardMedia
                  component="img"
                  height="100%"
                  image={youtubeImage}
                  alt="YouTube Playlists"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">
                    YouTube
                  </Typography>
                  <Typography variant="body2" align="center">
                    Watch curated YouTube Resources to get practical insights and tutorials on DevOps tools and practices.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          {/* GitHub Blogs Card */}
          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <Link to="/github" style={{ textDecoration: 'none' }}>
              <Card>
                <CardMedia
                  component="img"
                  height="100%"
                  image={GithubImage} // You can replace this with a GitHub logo or another image
                  alt="GitHub Blogs"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">
                    GitHub
                  </Typography>
                  <Typography variant="body2" align="center">
                    Explore informative Repos on GitHub related to DevOps, Docker, Kubernetes, and CI/CD.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <Link to="/random-blogs" style={{ textDecoration: 'none' }}>
              <Card>
                <CardMedia
                  component="img"
                  height="100%"
                  image={randomBlogsImage}
                  alt="Random Blogs"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">
                    Random Blogs
                  </Typography>
                  <Typography variant="body2" align="center">
                    Discover random blogs that offer unique insights into various topics related to tech and beyond.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

        </Grid>
      </Container>
    </>
  );
};

export default Home;
