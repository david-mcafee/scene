json.extract! user, :id, :username, :artist, :banner_url, :tracks
json.age time_ago_in_words(user.created_at)

# user.tracks do |track|
#   json.user track.user
# end
