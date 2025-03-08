# Paperboard - Note-Taking SPA

## Overview

**Paperboard** is a simple and responsive single-page application (SPA) built using **Next.js** and **TypeScript**. The app allows users to create, delete, edit titles, and manage their notes in a grid layout. Additionally, users can export their notes as a JSON file.
![image](https://github.com/user-attachments/assets/ed51d74f-8394-467a-8634-6516e60b0715)

### Features:
![image](https://github.com/user-attachments/assets/6ee80aa3-1d29-448a-8d27-50f69e342810)
- **Create, Edit, Delete, and Export Notes**: Manage your notes easily.
- **Responsive Design**: The app is fully responsive, adapting to various screen sizes.
- **Animations**: Notes are animated with **Framer Motion** for a smooth user experience.
- **Context API**: Used for centralized state management to track note updates.
- **Export Notes**: Users can export notes as a JSON file.
- **Dockerized**: The app is containerized with Docker for easy deployment.

## Technologies Used

- **Next.js**: A React framework that allows for server-side rendering and static site generation. Chosen for its simplicity, performance optimizations, and built-in support for React and TypeScript.
- **TypeScript**: Provides type safety and helps in detecting errors early in the development process.
- **TailwindCSS**: Used for styling, providing utility-first CSS classes for fast UI development.
- **Framer Motion**: Used for animating notes and providing smooth transitions.
- **Context API**: To manage state globally across the app.
- **Jest**: Attempted unit testing (ran into configuration issues).
- **Docker**: The app is dockerized for easy deployment.

## Project Structure

- **Logo**: Displayed in the top-left corner, leading to the homepage.
- **Header**: Contains the title and basic navigation.
- **Grid**: Notes are displayed in a responsive grid layout using the TailwindCSS grid system.
- **Footer**: A simple footer at the bottom of the page.
  
## Design Decisions

1. **Framework Choice**:
   - **Next.js** was chosen over other frameworks (like ViteJS or vanilla JS) due to its robust features, such as server-side rendering (SSR), static site generation (SSG), and built-in routing. The development experience with Next.js is smooth and highly optimized for React.
   
2. **State Management**:
   - **Context API** was chosen to manage the global state for notes. It allows centralized state management, making it easier to track changes and keep the UI in sync with the app’s state.

3. **Styling**:
   - **TailwindCSS** was selected for its flexibility and efficiency in writing utility-first CSS. It allows rapid prototyping and responsive design.
   - The **Grid System** was applied to manage the layout of notes dynamically.

4. **Animation**:
   - **Framer Motion** was used for animating note elements. Each note has a simple animation that triggers when it is added or removed from the grid.

5. **Testing**:
   - **Jest** was set up for unit testing components. However, I ran into some configuration issues, which prevented full implementation of tests.
   
6. **Docker**:
   - The application is Dockerized to simplify deployment and ensure consistency across different environments.
   
7. **Versioning**:
   - Semantic versioning is applied, with the final version being **v1.2.0**. The commit history follows conventional commits, such as:
     - `feat`: For adding new features.
     - `chore`: For tasks like dependency management.
     - `fix`: For fixing bugs.

## Features & Bonuses Implemented

1. **Main Features**:
   - Create, edit, delete notes.
   - Export notes to a JSON file.
   - Responsive design with TailwindCSS.
   - Context API for centralized state management.
   - Grid layout for displaying notes.
   - Dockerized for easy deployment.

2. **Bonus Features**:
   - **Framer Motion Animations**: Notes animate on creation and deletion for better user experience.
   - **Docker**: Deployed in a Docker container for easy setup and testing.
   - **Jest**: Initial setup for testing (though not fully functional due to configuration issues).

3. **Potential API Implementation**:
   - Although an API could be implemented to sync the state with a server (for storing notes remotely), this feature was not implemented due to time constraints.

## Setup Instructions

### Installation:
1. Clone the repository and navigate into the project directory.
2. Install dependencies.
3. Run the development server.
4. To run the app in production mode (after building).

### Docker:

To run the app in Docker:
1. Build the Docker image.
2. Run the Docker container.

## Testing

- **Jest** is set up for unit testing components, though due to configuration issues, the tests were not fully implemented.

## Semantic Versioning & Commit History

- This project follows **semantic versioning**. The current version is **v1.2.0**.
- The commit history follows **conventional commits**:
  - `feat`: New features.
  - `chore`: Miscellaneous tasks like dependency updates.
  - `fix`: Bug fixes.

## Final Thoughts

Paperboard is a simple, responsive note-taking app built using modern web development tools. While I wasn't able to fully implement unit tests or the server-side syncing functionality, the core features of the app are fully functional, and Docker has been implemented for easy deployment.

I hope this project serves as a solid foundation for future enhancements, such as adding server-side APIs for note synchronization and fully integrated testing.

Feel free to explore the project and suggest improvements!
