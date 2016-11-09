json.extract! track, :id, :title, :image_url, :audio_url, :user_id, :user
json.age time_ago_in_words(track.updated_at)
