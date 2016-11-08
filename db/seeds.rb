# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("users")

User.create!(username:"Guest", email: "guest@david-mcafee.com", artist: true, password_digest: "#{BCrypt::Password.create("password")}")

User.create!(username:"Nolan Kurtz", email: "nolan@david-mcafee.com", artist: true, password_digest: "#{BCrypt::Password.create("password")}")

User.create!(username:"Ivory Weeds", email: "ivoryweeds@david-mcafee.com", artist: true, password_digest: "#{BCrypt::Password.create("password")}")

10.times do |number|
  if number > 3
    User.create!(username: "user#{number}", email: "test#{number}@david-mcafee.com", artist: false, password_digest: "#{BCrypt::Password.create("password#{number}")}")
  end
end


Track.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("tracks")

Track.create!(title: "Mantra (feat. CAARGO)", image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png", audio_url: "", user_id: 2)
Track.create!(title: "Moonlight", image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png", audio_url: "", user_id: 2)
Track.create!(title: "Zero", image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png", audio_url: "", user_id: 2)
Track.create!(title: "Root (Prod. Wellhead)", image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png", audio_url: "", user_id: 2)
Track.create!(title: "Nightlurk (feat. fiction)", image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png", audio_url: "", user_id: 2)
Track.create!(title: "Windfall (feat. Jen Bjerke)", image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png", audio_url: "", user_id: 2)
Track.create!(title: "Sp...d Luv (Prod. stanleymarket)", image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png", audio_url: "", user_id: 2)
Track.create!(title: "Into The Stars", image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png", audio_url: "", user_id: 2)
Track.create!(title: "Vision", image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png", audio_url: "", user_id: 2)
Track.create!(title: "FYM", image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png", audio_url: "", user_id: 2)
Track.create!(title: "Dark Water", image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png", audio_url: "", user_id: 2)

Track.create!(title: "", image_url: "", audio_url: "", user_id: 3)
Track.create!(title: "", image_url: "", audio_url: "", user_id: 3)
Track.create!(title: "", image_url: "", audio_url: "", user_id: 3)
Track.create!(title: "", image_url: "", audio_url: "", user_id: 3)
Track.create!(title: "", image_url: "", audio_url: "", user_id: 3)
Track.create!(title: "", image_url: "", audio_url: "", user_id: 3)
Track.create!(title: "", image_url: "", audio_url: "", user_id: 3)
Track.create!(title: "", image_url: "", audio_url: "", user_id: 3)
Track.create!(title: "", image_url: "", audio_url: "", user_id: 3)
Track.create!(title: "", image_url: "", audio_url: "", user_id: 3)
