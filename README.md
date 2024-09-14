# DevOps Resources Hub

Welcome to the **DevOps Resources Hub** - an interactive platform built with React, designed to provide developers with curated resources for learning and mastering DevOps practices. Whether you're a beginner or an experienced developer looking to scale your DevOps skills, this hub features essential tutorials, blogs, and guides covering Docker, Kubernetes, CI/CD, and more.

## 🌐 Live Site
The project is hosted and publicly available at:  
[DevOps Resources Hub](https://ashmit4818.github.io/DevOps_Resources_Project/)

## 📂 Repository
The complete code for the project can be found in the following GitHub repository:  
[DevOps Resources Project - GitHub Repository](https://github.com/ashmit4818/DevOps_Resources_Project)


## 📦 Docker Hub Repository
You can find the Docker image for this project on Docker Hub:  
[Docker Hub - DevOps Resources Project](https://hub.docker.com/r/ashmit4818/devops_resources_project)


## 🚀 Automation & CI/CD
This project is fully automated using GitHub Actions and a CI/CD pipeline, ensuring continuous integration and deployment of changes directly to the live site. I created the workflow in GitHub Actions to handle testing, building, and deploying updates to GitHub Pages, and also to build a Docker image at each push or pull request, pushing the built image to Docker Hub. With every push or pull request to the main branch, the GitHub Actions pipeline manages testing, building, and deploying the updates efficiently.


## 📚 Key Features
- **DevOps Tutorials**: A collection of handpicked resources and articles covering topics like Docker, Kubernetes, and CI/CD.
- **Curated Playlists**: YouTube playlists for practical tutorials.
- **Automated Deployment**: Built and deployed using GitHub Actions, ensuring smooth and continuous updates.


## 🛠️ Technologies Used
- **React**: Frontend framework for building the user interface.
- **Material-UI**: For a responsive and modern design.
- **Docker**: Used to containerize the application.
- **GitHub Actions**: For automated CI/CD pipeline and deployment.
- **GitHub Pages**: Hosting for the live project.


## 💻 Local Setup (Github)

To run the project locally without Docker, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ashmit4818/DevOps_Resources_Project.git
   ```
   
2. **Install dependencies:**
   Navigate to the project folder and install the required packages:
   ```bash
   cd DevOps_Resources_Project  &&  npm install
   ```
   
3. **Run the application:**
   Start the React development server:
   ```bash
   npm start
   ```
   
4. **Visit the app**
   Open your browser and visit http://localhost:3000/DevOps_Resources_Project to see the app in action.


## 🐳 Running the Project via Docker
You can pull the Docker image for this project from Docker Hub and run it locally:

1. **Pull the Docker image:**
   Open a terminal and run the following command to pull the image from Docker Hub:  
   ```bash
   docker pull ashmit4818/devops_resources_project
   ```
   
2. **Run the Docker container:**
    After pulling the image, run the container using the command:  
    Note: Port forwarding (-p 3000:3000) is crucial because it allows you to access the application running inside the container from your local machine. The first 3000 refers to the port on your local machine, while the second 3000 refers to the port inside the container where the app is served. Without this, the application wouldn't be accessible from your browser.  
   ```bash
   docker run -d -p 3000:3000 ashmit4818/devops_resources_project
   ```
   
3. **Access the application:**
   Once the container is running, you can access the application by opening your browser and navigating to:  
   ```bash
   http://localhost:3000/DevOps_Resources_Project
   ```
   
## 📝 Contributing

Contributions are highly encouraged! If you have additional resources or improvements for the DevOps Resources Hub, feel free to fork the repository, create a new branch, and submit a pull request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/ashmit4818/DevOps_Resources_Project/blob/main/LICENSE) file for more details.  
  
I will be regularly updating both the Docker image and the site as I continue learning more about DevOps. Stay tuned for the latest updates and improvements!
