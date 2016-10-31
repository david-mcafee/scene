## Component Hierarchy

- **HomeContainer**
  - NavigationBar (home section)
  - MainContent (home section)
    - SplashPage
    - Homepage
      - ArtistBox
    - **AuthFormContainer**
      - AuthForm
    - **NewTrackContainer**
      - NewTrack
        - UploadTrackButton
    - **ArtistPageContainer**
      - ArtistPage
        - Header
        - **TrackIndexContainer**
          - TrackIndex
        - **TrackCommentsContainer**
          - TrackComments
            - CreateComment
            - CommentIndex
  - Footer (bonus)
  - AudioPlayer (home section)
    - **AudioPlayerContainer**
      - AudioPlayer
        - Player
        - SongInfo


## Routes

|Path   | Component   |
|-------|-------------|
| "/home" | "HomeContainer" |
| "home/sign-up" | "AuthFormContainer" |
| "home/log-in" | "AuthFormContainer" |
| "home/new-track" | "NewTrackContainer" |
| "home/artist/:artist-id" | "ArtistPageContainer" |
