# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("users")

User.create!(username:"Guest", email: "guest@david-mcafee.com",
  artist: true, password_digest: "#{BCrypt::Password.create("password")}")

10.times do |number|
  User.create!(username: "user#{number}", email: "test#{number}@david-mcafee.com",
    artist: false, password_digest: "#{BCrypt::Password.create("password#{number}")}")
end

Track.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("tracks")


15.times do |track_number|
  Track.create!(title: "track#{track_number}", image_url: "http://www.david-mcafee.com",
    audio_url: "http://www.david-mcafee.com", user_id: 1)
end
