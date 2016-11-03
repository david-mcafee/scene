json.extract! track, :title, :image_url, :audio_url, :artist_id
json.age time_ago_in_words(track.created_at)
