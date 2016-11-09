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

Track.create!(title: "Mantra (feat. CAARGO)",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_Dark_Water/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478569817/Nolan_Kurtz_-_Dark_Water_-_01_Mantra_feat._CAARGO_tvueze.mp3",
  user_id: 2)
Track.create!(title: "Moonlight",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_Dark_Water/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478569867/Nolan_Kurtz_-_Dark_Water_-_02_Moonlight_wdzx9a.mp3",
  user_id: 2)
Track.create!(title: "Zero",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_Dark_Water/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478569846/Nolan_Kurtz_-_Dark_Water_-_03_Zero_w9fd1l.mp3",
  user_id: 2)
Track.create!(title: "Root (Prod. Wellhead)",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_Dark_Water/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478569682/Nolan_Kurtz_-_Dark_Water_-_04_Root_Prod._Wellhead_omr0gi.mp3",
  user_id: 2)
Track.create!(title: "Nightlurk (feat. fiction)",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_Dark_Water/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478569800/Nolan_Kurtz_-_Dark_Water_-_05_Nightlurk_feat._fiction_m99zrl.mp3",
  user_id: 2)
Track.create!(title: "Windfall (feat. Jen Bjerke)",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_Dark_Water/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478569807/Nolan_Kurtz_-_Dark_Water_-_06_Windfall_feat._Jen_Bjerke_tbuk0h.mp3",
  user_id: 2)
Track.create!(title: "Spread Luv (Prod. stanleymarket)",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_Dark_Water/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478570016/Nolan_Kurtz_-_Dark_Water_-_07_Spread_Luv_Prod._stanleymarket_dpcwjh.mp3",
  user_id: 2)
Track.create!(title: "Into The Stars",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_Dark_Water/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478570099/Nolan_Kurtz_-_Dark_Water_-_08_Into_The_Stars_im5s5j.mp3",
  user_id: 2)
Track.create!(title: "Vision",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_Dark_Water/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478570123/Nolan_Kurtz_-_Dark_Water_-_09_Vision_ykxick.mp3",
  user_id: 2)
Track.create!(title: "FYM",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_Dark_Water/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478570123/Nolan_Kurtz_-_Dark_Water_-_10_FYM_p6wcwr.mp3",
  user_id: 2)
Track.create!(title: "Dark Water",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478568632/Nolan_Kurtz_Dark_Water/Nolan_Kurtz_-_Dark_Water_-_cover_ff9jm4.png",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478570142/Nolan_Kurtz_-_Dark_Water_-_11_Dark_Water_g92oao.mp3",
  user_id: 2)

# Track.create!(title: "",
#   image_url: "",
#   audio_url: "",
#   user_id: 3)
# Track.create!(title: "",
#   image_url: "",
#   audio_url: "",
#   user_id: 3)
# Track.create!(title: "",
#   image_url: "",
#   audio_url: "",
#   user_id: 3)
# Track.create!(title: "",
#   image_url: "",
#   audio_url: "",
#   user_id: 3)
# Track.create!(title: "",
#   image_url: "",
#   audio_url: "",
#   user_id: 3)
# Track.create!(title: "",
#   image_url: "",
#   audio_url: "",
#   user_id: 3)
# Track.create!(title: "",
#   image_url: "",
#   audio_url: "",
#   user_id: 3)
# Track.create!(title: "",
#   image_url: "",
#   audio_url: "",
#   user_id: 3)
# Track.create!(title: "",
#   image_url: "",
#   audio_url: "",
#   user_id: 3)
# Track.create!(title: "",
#   image_url: "",
#   audio_url: "",
#   user_id: 3)
