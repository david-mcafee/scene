# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("users")

User.create!(username:"Guest",
  email: "guest@david-mcafee.com",
  artist: true,
  banner_url: "https://s-media-cache-ak0.pinimg.com/236x/a7/7e/3d/a77e3d34eb1a05f7bc930d3f719c0846.jpg",
  password_digest: "#{BCrypt::Password.create("password")}")

User.create!(username:"Nolan Kurtz",
  email: "nolan@david-mcafee.com",
  banner_url: "http://res.cloudinary.com/localscene/image/upload/c_crop,h_901,w_901/v1478635322/NolanKurtzProfilePicture_jjxck0.jpg",
  artist: true,
  password_digest: "#{BCrypt::Password.create("password")}")

User.create!(username:"Ivory Weeds",
  email: "ivoryweeds@david-mcafee.com",
  artist: true,
  banner_url: "http://res.cloudinary.com/localscene/image/upload/c_crop,h_679,w_679/v1478749151/IvoryWeedsProfilePicture_bg2aby.jpg",
  password_digest: "#{BCrypt::Password.create("password")}")
  
User.create!(username:"Ivory Weeds",
  email: "ivoryweeds@david-mcafee.com",
  artist: true,
  banner_url: "http://res.cloudinary.com/localscene/image/upload/c_crop,h_679,w_679/v1478749151/IvoryWeedsProfilePicture_bg2aby.jpg",
  password_digest: "#{BCrypt::Password.create("password")}")

25.times do |number|
  if number > 3
    User.create!(username: "user#{number}",
      email: "test#{number}@david-mcafee.com",
      artist: false,
      banner_url: "https://s-media-cache-ak0.pinimg.com/236x/a7/7e/3d/a77e3d34eb1a05f7bc930d3f719c0846.jpg",
      password_digest: "#{BCrypt::Password.create("password#{number}")}")
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

Track.create!(title: "One",
  image_url: "http://res.cloudinary.com/localscene/image/upload/c_crop,h_2848,q_auto,w_2848/v1478725642/IvoryWeedsMusicToSleepBy_kd4meg.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478723198/Ivory_Weeds_-_Music_to_Sleep_to_-_01_One_vw3ttk.mp3",
  user_id: 3)
Track.create!(title: "Two",
  image_url: "http://res.cloudinary.com/localscene/image/upload/c_crop,h_2848,q_auto,w_2848/v1478725642/IvoryWeedsMusicToSleepBy_kd4meg.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478723008/Ivory_Weeds_-_Music_to_Sleep_to_-_02_Two_d3ogqo.mp3",
  user_id: 3)
Track.create!(title: "Three",
  image_url: "http://res.cloudinary.com/localscene/image/upload/c_crop,h_2848,q_auto,w_2848/v1478725642/IvoryWeedsMusicToSleepBy_kd4meg.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478723310/Ivory_Weeds_-_Music_to_Sleep_to_-_03_Three_mu6nuj.mp3",
  user_id: 3)
Track.create!(title: "You Don't Need to Speak my Language",
  image_url: "http://res.cloudinary.com/localscene/image/upload/c_crop,h_2848,q_auto,w_2848/v1478725642/IvoryWeedsMusicToSleepBy_kd4meg.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478723164/Ivory_Weeds_-_Music_to_Sleep_to_-_04_You_Don_t_Need_to_Speak_my_Language_ahn54t.mp3",
  user_id: 3)
Track.create!(title: "Marseille, on the Beach",
  image_url: "http://res.cloudinary.com/localscene/image/upload/c_crop,h_2848,q_auto,w_2848/v1478725642/IvoryWeedsMusicToSleepBy_kd4meg.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478723294/Ivory_Weeds_-_Music_to_Sleep_to_-_05_Marseille_on_the_Beach_rukjbf.mp3",
  user_id: 3)
Track.create!(title: "Sleepy",
  image_url: "http://res.cloudinary.com/localscene/image/upload/c_crop,h_2848,q_auto,w_2848/v1478725642/IvoryWeedsMusicToSleepBy_kd4meg.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478723408/Ivory_Weeds_-_Music_to_Sleep_to_-_06_Sleepy_nulqwt.mp3",
  user_id: 3)
Track.create!(title: "Forward",
  image_url: "http://res.cloudinary.com/localscene/image/upload/c_crop,h_2848,q_auto,w_2848/v1478725642/IvoryWeedsMusicToSleepBy_kd4meg.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478723352/Ivory_Weeds_-_Music_to_Sleep_to_-_08_Illusions_yzb38y.mp3",
  user_id: 3)
Track.create!(title: "Illusions",
  image_url: "http://res.cloudinary.com/localscene/image/upload/c_crop,h_2848,q_auto,w_2848/v1478725642/IvoryWeedsMusicToSleepBy_kd4meg.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478723352/Ivory_Weeds_-_Music_to_Sleep_to_-_08_Illusions_yzb38y.mp3",
  user_id: 3)
Track.create!(title: "Summer Growth",
  image_url: "http://res.cloudinary.com/localscene/image/upload/c_crop,h_2848,q_auto,w_2848/v1478725642/IvoryWeedsMusicToSleepBy_kd4meg.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478723449/Ivory_Weeds_-_Music_to_Sleep_to_-_09_Summer_Growth_txazyw.mp3",
  user_id: 3)

Track.create!(title: "Plastic Heart",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478748787/cover_zfkrlm.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478743737/Joe_Kye_-_Plastic_Heart_EP_-_01_Plastic_Heart_smi70f.mp3",
  user_id: 3)
Track.create!(title: "Sakura",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478748787/cover_zfkrlm.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478743744/Joe_Kye_-_Plastic_Heart_EP_-_02_Sakura_rrvwvc.mp3",
  user_id: 3)
Track.create!(title: "Farewell to I",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478748787/cover_zfkrlm.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478743729/Joe_Kye_-_Plastic_Heart_EP_-_03_Farewell_to_I_ofi3r1.mp3",
  user_id: 3)
Track.create!(title: "Ghost",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478748787/cover_zfkrlm.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478743675/Joe_Kye_-_Plastic_Heart_EP_-_04_Ghost_rrlmik.mp3",
  user_id: 3)
Track.create!(title: "Waiting for Others",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478748787/cover_zfkrlm.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478743730/Joe_Kye_-_Plastic_Heart_EP_-_05_Waiting_for_Others_opbvqd.mp3",
  user_id: 3)
Track.create!(title: "Keeper of the Lighthouse",
  image_url: "http://res.cloudinary.com/localscene/image/upload/v1478748787/cover_zfkrlm.jpg",
  audio_url: "http://res.cloudinary.com/localscene/video/upload/v1478743739/Joe_Kye_-_Plastic_Heart_EP_-_06_Keeper_of_the_Lighthouse_dvbkgu.mp3",
  user_id: 3)
