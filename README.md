# **SiPember ( SIPB )**

# Project Overview

### Title :  
SiPember (Sustainable Development Information System) 

### Description :  
SIPB is a web-based information system that provides various details about Sustainable Development. What is Sustainable Development? Sustainable Development, also known as Sustainable Development Goals (SDGs), is one of the UN's programs consisting of 17 goals with 169 measurable targets within specified timeframes. SDGs aim at the welfare of humanity and the planet.

### Note :  
This project has been moved from the following repository ( [Old SiPember](https://github.com/annafikk/sipember.github.io.git) ) to the new repository ( [New SIPB](https://github.com/CNP-by-annafikk/SiPember) ). If you're interested in collaborating on this application with [@annafikk](https://github.com/annafikk/), feel free to fork the repository and submit a pull request.

# Frameworks & Libraries

These represent the frameworks and libraries employed in the development of this website.

### Front End

The front end development of this project uses :

- React + Vite  
    This template offers a basic setup to integrate React within Vite with HMR (Hot Module Replacement) and some ESLint rules.

    Currently, there are two official plugins available :

    - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
    - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

- TailwindCSS  
    This template uses styling from tailwind that offer many customization options.

    Currently, there are three libraries in use :

    - [React TailwindCSS](https://tailwindcss.com/docs/guides/vite)
    - [Kitwind](https://kitwind.io/products/kometa/components/headers)
    - [FreeFrontEnd](https://freefrontend.com/tailwind-hero-sections/)

### Back End

The back end development of this project uses :

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Cors](https://www.npmjs.com/package/cors)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html)

# Installation
### How to Install
Use the following command :
```
git clone https://github.com/CNP-by-annafikk/SiPember.git

npm i

npm run dev
```

### Checking Dependencies
Use the following command to be able to check for dependencies that are not needed in this project :
```
npm install -g depcheck
depcheck
npm uninstall <package_name>
```

### References
- [Back End Test](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/)