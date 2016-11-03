@tracks.each do |track|

  # NOTE: set sets the id, the block creates the brackets
  # partial!
  # the first arg is the path
  # then set a local variable 'track' with all the data you want
  # => {"track.id": { 'track', track: etc.... }}
  json.set! track.id do
    json.partial! 'track', track: track
  end
end
