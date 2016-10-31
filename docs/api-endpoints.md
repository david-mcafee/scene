# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Tracks

- `GET /api/tracks`
- `POST /api/tracks`
- `GET /api/tracks/:id`
- `PATCH /api/tracks/:id`
- `DELETE /api/tracks/:id`


### Comments

- `GET /api/tracks/:track_id/comments`
- `POST /api/tracks/:track_id/comments`
- `PATCH /api/tracks/:track_id/comments/:comment_id`
- `DELETE /api/tracks/:track_id/comments/:comment_id`
