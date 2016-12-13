# SCENE

[Scene Live][scene]

[scene]: http://www.localscene.cc

Scene is a full-stack web application inspired by SoundCloud and Spotify. Scene utilizes Ruby on Rails on the back-end, a PostgreSQL database, and React.js with a Redux architectural framework on the front-end.

## Features & Implementation

### Artist Pages with Track Rendering
![Alt text](/docs/AppImages/artistpage.png?raw=true "Optional Title")

Artist/user pages are created using a React container with a nested TracksContainer, which in turn sends an object to TrackIndexItem, which renders an individual track. Only logged in users can edit or delete their own tracks.


### Continuous playback of songs with progress bar and dynamic track controls
![Alt text](/docs/AppImages/navigation.png?raw=true "Optional Title")

Continuous playback without interruption is accomplished with a separate React Container (PlayerContainer) which only updates it's state through track controls, and a track being selected.


### Artist Sign Up with Image Upload
![Alt text](/docs/AppImages/signup.png?raw=true "Optional Title")

Users can upload images through a form that utilizes the Cloudinary Upload widget to process image uploads. Images are stored on Cloudinary, image urls are kept in the backend database.

### Track Upload, Edit, and Delete
![Alt text](/docs/AppImages/upload.png?raw=true "Optional Title")

Upon track upload, the user will be redirected to their profile page. Tracks will be listed on the user's profile page. Only logged in user's can edit or delete their tracks - edit and delete buttons are only available to logged in users.


### Home Page for Logged In Users Shows List of Artists
![Alt text](/docs/AppImages/home.png?raw=true "Optional Title")

The artist list page is comprised of a single container (HomeContainer) which holds the HomeIndexItem presentational component, which in turn sends each user objet to HomeIndexItem, which ultimately renders each user.


### Landing Page That Only Renders To Logged Out Users
![Alt text](/docs/AppImages/landing.png?raw=true "Optional Title")

If user's attempt to access any page other than the root, signup, or login, they will be redirected to the root landing page. This is accomplished using the React Router, with each page containing an OnEnter hook that ensure's user login.

### Auth
![Alt text](/docs/AppImages/login.png?raw=true "Optional Title")

Ensures front and back end user authentication. Session tokens and password digests (created with BCrypt) are stored in the ActiveRecord database.


## Future Direction for the Project

#### Track Comments

#### Artists Organized by Location


##### To see how I implemented this project, see the complete Full-Stack Project Proposal README:

* [docsREADME][docsREADME]

[docsREADME]: docs/README.md
