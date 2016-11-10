json.extract! comment, :body, :user, :track
json.age time_ago_in_words(comment.updated_at)
