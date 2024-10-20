
import React , {useContext} from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import Grid from '@mui/material/Grid2';
import pic1 from '../assets/sectionimages/medium/1.png';
import pic2 from '../assets/sectionimages/medium/2.jpeg';
import pic3 from '../assets/sectionimages/medium/3.png';


const MediumArticlesSection = () => {
  const articles = [
    {
      id: 1,
      title: 'CI/CD Pipeline with React App using GitHub Actions',
      description: 'In this tutorial, I will illustrate how to handle CI and CD using GitHub actions and Build and push docker image to DockerHub.',
      link: 'https://faun.pub/ci-cd-pipeline-with-react-app-using-github-actions-1b219d4e162f',
      image: pic1,
      alt: 'Handle CI and CD using GitHub actions and Build and push docker image of React App to DockerHub.',
    },
    {
      id: 2,
      title: 'Set Up a Kubernetes Development Environment Locally with Minikube',
      description: 'In this article, I will walk through the steps needed to set up a Kubernetes development environment locally using Minikube.',
      link: 'https://medium.com/@AlexanderObregon/setting-up-a-kubernetes-development-environment-locally-with-minikube-7462ed071b39',
      image: pic2,
      alt: 'Set Up a Kubernetes Development Environment Locally with Minikube',
    },
    {
      id: 3,
      title: 'Introduction to Linux - Linux for Beginners',
      description: 'If you are a beginner who has no idea about Linux Operating System I recommend giving this article a quick read.',
      link: 'https://medium.com/geekculture/introduction-to-linux-8745d214e7be',
      image: pic3,
      alt: 'Introduction to Linux - Linux for Beginners',
    },
  ];
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Container style={{ padding: '20px', paddingTop: '5%', paddingBottom: '5%' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: '5%' }}>
        Medium Articles
      </Typography>
      <Grid container spacing={3}>
        {articles.map(({ id, title, description, link, image, alt }) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={id}>
            {/* //styles will change after theme */}
            <Card style={{ backgroundColor: "#121212", color: "#fff"}}>
              <CardMedia
                component="img"
                height="100%"
                image={image}
                alt={alt}
                sx={{
                  backgroundColor: isDarkMode ? '#333' : '#333',
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom align="center">
                  {title}
                </Typography>
                <Typography variant="body2" align="center">
                  {description}
                </Typography>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: 'none',
                    borderRadius: '10px',
                    //switch '' second to create theme
                    backgroundColor: isDarkMode? '#333':'#333',
                    color: isDarkMode? '#fff':'',
                    padding: '10px 20px',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      //switch 1b3887 second to create theme
                      backgroundColor: isDarkMode? '#262626':'#000',
                    },
                  }}
                >
                  Read on Medium
                </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MediumArticlesSection;
