class Track < ApplicationRecord
  validates :title, :audio_url

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
end
