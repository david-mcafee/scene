```js
{
  currentUser: {
    id: 1,
    username: "david-mcafee"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createTrack: {errors: []}
  },
  currentTrack: {
    id: 1,
    title: "Sample Song Title",
    image_url: "example.com/sample_image_url",
    audio_url: "example.com/sample_audio_url",
    artist_id: 1,
    created_at: "sample time"
  }
  tracks: {
    1: {
        id: 1,
        title: "Sample Song Title",
        image_url: "example.com/sample_image_url",
        audio_url: "example.com/sample_audio_url",
        artist_id: 1,
        created_at: "sample time"
        }
      }
    }
  },
  comments: {
    1: {
      body: "sample comment text",
      user_id: 1,
      track_id: 1,
      updated_at: "sample time"
    }
  }
}
```
