# [Netflix GPT Project]{ https://netflixgpt-9484f.web.app}

This project is a Netflix clone with an added feature of movie suggestions powered by GPT-3. It's built using React and Tailwind CSS, and it's integrated with Firebase for backend services. The project is deployed to production and is responsive to different screen sizes.

## Key Features

- **User Authentication**: Implemented Sign In/Sign Up forms with validation. Users are redirected to the Browse page upon successful authentication.
- **Browse Page (Accessible after authentication)**: 
  - **Header**: Contains navigation and user profile.
  - **Main Movie**: Displays a featured movie with its trailer playing in the background. The movie title and description are also shown.
  - **Movie Suggestions**: Multiple movie lists are displayed based on different categories.
- **Netflix GPT**: 
  - **Search Bar**: Users can search for movies.
  - **Movie Suggestions**: Displays a list of movies suggested by GPT-3.

## Development Process

The development process involved setting up a React app, configuring Tailwind CSS, and creating the necessary components such as the Header, Movie List, and Movie Card. Routing was set up for the app, and useRef Hook was used for certain functionalities.

Firebase was set up for backend services, and user authentication was implemented. This included creating a Sign Up user account and implementing the Sign In user API. A Redux store was created for state management.

The TMDB API was used to fetch data for now playing movies and trailer videos. Custom hooks were created for fetching these data. The data was then added to the Redux store.

The GPT Search page was created with a search bar. A multi-language feature was added to this page. The GPT Search API was called to fetch movie suggestions from TMDB, and the data was added to the Redux store.

Bug fixes were made throughout the development process, such as updating the user display name and profile picture upon sign up, and redirecting users based on their authentication status.

## Future Improvements

Future improvements include adding more features, optimizing the code, and improving the UI/UX.

Please note that the `.env` file containing sensitive information like the GPT Open AI API key is added to `.gitignore` for security reasons.

This project demonstrates the use of modern web development technologies and practices, and it serves as a good example of a real-world application.
