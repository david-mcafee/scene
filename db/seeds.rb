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

idx = 1;

User.create!(username: "user#{idx}", email: "test#{idx}@david-mcafee.com",
  artist: false, password_digest: "#{BCrypt::Password.create("password#{idx}")}")
idx += 1;

User.create!(username: "user#{idx}", email: "test#{idx}@david-mcafee.com",
  artist: false, password_digest: "#{BCrypt::Password.create("password#{idx}")}")
idx += 1;

User.create!(username: "user#{idx}", email: "test#{idx}@david-mcafee.com",
  artist: false, password_digest: "#{BCrypt::Password.create("password#{idx}")}")
idx += 1;

User.create!(username: "user#{idx}", email: "test#{idx}@david-mcafee.com",
  artist: false, password_digest: "#{BCrypt::Password.create("password#{idx}")}")
idx += 1;

User.create!(username: "nolankurtz", email: "nolan@david-mcafee.com",
  artist: true, password_digest: "#{BCrypt::Password.create("password#{idx}")}")
idx += 1;
