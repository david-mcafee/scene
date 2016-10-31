## Component Hierarchy

- **AppContainer**
  - **NavigationBarContainer**
  - NavigationBar
  - MainContent (home section)
    - SplashPage
    - **ArtistIndexContainer**
    - ArtistIndex
      - ArtistIndexItem
    - **AuthFormContainer**
      - AuthForm
    - **NewTrackContainer**
      - NewTrack
        - UploadTrackButton
    - **ArtistDetailContainer**
      - ArtistDetail
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
