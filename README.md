# My gallery app

## Overview

This project is a fully functional and responsive image gallery that allows users to view and interact with a collection of images. Authenticated users can use the drag-and-drop feature to rearrange images within the gallery. The project is built using React.

## Requirements

### Authentication

- Users can log in using the following credentials:
  - Username: user@example.com
  - Password: 1Password
- Authentication form fields include proper validation and error messages.

### Image Display

- Display images in a grid layout with consistent spacing and sizing.
- Each image should have associated tags.

### Loading State

- Implement a loading state when images are being loaded.
- Use skeleton loaders or loading spinners to indicate loading.

### Search Functionality

- Include a search field that filters images based on tags.

### Drag-and-Drop

- Allow authenticated users to drag and drop images within the gallery.
- Provide smooth animations and visual cues during drag-and-drop interactions.

### Responsive Design

- Ensure that the gallery is responsive and functions seamlessly on various devices, including mobile phones, tablets, and desktops.

## Implementation Details

### Components

- **ImageGallery.js**: The main component for displaying the image gallery. It includes drag-and-drop functionality and search features.
- **LoginForm.js**: The login form component for user authentication.
- **SignOut.js**: The component for signing out authenticated users.
- **SearchBar.js**: The component for the search bar.

### Usage

1. Clone the repository: `git clone https://github.com/daniel-njuguna/my-gallery-app.git`
2. Navigate to the project directory: `cd my-gallery-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## How to Use

1. Visit the application.
2. Log in with the provided credentials (username: user@example.com, password: 1Password).
3. Once authenticated, you can:
   - Drag and drop images within the gallery.
   - Use the search bar to filter images by tags.
4. If not authenticated, you can still view the images but won't be able to drag and drop them.

## Technologies Used

- React
- HTML/CSS
- Firebase (for authentication)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
