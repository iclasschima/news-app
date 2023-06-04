# News Application

This is a news application built using React and Redux Toolkit. It fetches and displays news articles from the News API provided by newsapi.org.

## Prerequisites

Before running the application, ensure that you have the following installed on your machine:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Getting Started

Follow the steps below to run the application locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/iclasschima/news-app

   ```

2. Navigate to the project directory:

   ```bash
   cd news-app

   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

4. Obtain an API key from newsapi.org by creating an account and generating an API key.

5. Create a .env file in the project root directory and add the following line, replacing YOUR_API_KEY with your actual API key:

   ```bash
   REACT_APP_NEWS_API_KEY=YOUR_API_KEY

   ```

6. Start the development server:

   ```bash
   npm start

   ```

7. Open your browser and visit http://localhost:3000 to access the application.

## Features

- Display a list of news articles with title, description, author, and published date.
- Filter articles by source.
- Implement pagination with a maximum of 10 articles per page.
- View the full article content on a separate details page.

## Technologies Used

- React
- Redux Toolkit
- TailwindCSS
- React Router Dom
- News API
- Axios
