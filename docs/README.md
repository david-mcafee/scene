# scene

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://localscene.herokuapp.com
[trello]: https://trello.com/b/Dh7Xnoeq

## Minimum Viable Product

Scene is a web application inspired by SoundCloud, BandCamp, and Spotify. Scene was built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with adequate styling, smoothing and bug-free navigation, and adequate seeds to demonstrate the feature:

- [ ] New account creation, login, and guest/demo login
- [ ] A production README
- [ ] Hosting on Heroku
- [ ] Song CRUD
- [ ] Playing songs with progress bar with continuous play
- [ ] Comments
- [ ] User and/or artist pages
- [ ] **BONUS** Wave forms, playlists, or likes?

## Design Docs
* [View Wireframes][wireframes]
* [API endpoints][api-endpoints]
* [Component Hierarchy][component-hierarchy]
* [Sample State][sample-state]
* [DB schema][schema]

[wireframes]: wireframes
[api-endpoints]: api-endpoints.md
[component-hierarchy]: component-hierarchy.md
[sample-state]: sample-state.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend Setup and Front End User Authentication (2 days, 11/1/16 - 11/2/16, 11:59pm)

**Objective:** Functioning Rails project with front-end authentication. New account creation, login, and guest/demo login.

### Phase 2: Tracks Model, API, and Components (1 days, 11/3/16)

**Objective:** Tracks can be created, read, updated and destroyed through
the API.

### Phase 3: Continuous Play of Tracks (2 days, 11/5/16)

**Objective** Tracks can be played continuously without being interrupted by user activity across the application.

### Phase 4: Artist Pages (3 days, 11/8/16)

**Objective** Artists can create artist pages, which will display a banner, all uploaded tracks, and placeholder section for track comments (to be fully implemented in Phase 5).

### Phase 5: Comments (3 days, 11/11/16, 6:00pm)

**Objective** Users can create comments on tracks, comments can be displayed by clicking a track on the artist page

### Bonus Features (TBD)
- [ ] Implement browse or search interface for finding local artists (via search and/or map and/or listing)
- [ ] Infinite scroll for track comments
- [ ] Customizable artist pages
- [ ] Search (track, artist)
- [ ] Original: Wave forms, playlists, or likes.
