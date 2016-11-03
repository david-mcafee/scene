class Track < ApplicationRecord
  validates :title, :audio_url, presence: true

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
end
