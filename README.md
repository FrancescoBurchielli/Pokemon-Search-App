# Pokemon Search App

A simple web app that allows you to search for a pokemon by name and returns the pokemon's sprite, description and legendary status. Your most recent 5 searches are saved and shown.
The web app has been developed with React, Typescript, Styled-Components, Django and Docker.


## Prerequisites

Make sure Docker is installed on your machine. You can download it from: 
https://docs.docker.com/get-docker/


## To run and use the app

1. Clone or download the repository locally 
2. Open a terminal window
3. cd to the repository
4. Run `docker-compose up --build -d`
5. Open a browser window
6. Navigate to the 3000 port on your local host (`http://127.0.0.1:3000` on most browsers)
7. Search for a pokemon in the dedicated search bar and have fun :)

## Next steps
1. Fix known bugs
2. Add relevant tests in both frontend and backend (using e.g. Jest for frontend)   
3. Add suggestions functionality when searching for a Pokemon

## Answers to test questions

### Which parts are you most proud of? Why?
- I followed a mobile-first approach and styling guidelines that produced a web app that is responsive and pleasant to the eye
- I attached great importance to UX best practices in order to create a pleasant user experience 
- I implemented cache-like functionalities on both backend and frontend in order to improve the performance of the search engine

### Where did you spend more time? What was the most difficult?
Most challenging and time-consuming was the interaction between the components responsible for recent searches and current search.

### How did you find the test overall? Did you have issues or difficulties completing it?
I found the test meaningful and fun to work with. The following are the areas where I could have performed better 
and where I wish to improve going forward: 

- *Testing*: I plan to invest time and effort in practicing with libraries such as Jest and Cypress and to add relevant tests to my code
- *Clean code*: I want my code to become more modular, readable and efficient
- *Interaction with APIs*: I am eager to learn and apply best practices when it comes to error handling and default/custom error objects