json.extract! comment, :body, :user_id, :track_id, :user, :track
json.age time_ago_in_words(comment.updated_at)
