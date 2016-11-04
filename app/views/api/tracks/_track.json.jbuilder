json.extract! track, :id, :title, :image_url, :audio_url, :user_id
json.age time_ago_in_words(track.created_at)
