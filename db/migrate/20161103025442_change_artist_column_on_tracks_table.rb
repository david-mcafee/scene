class ChangeArtistColumnOnTracksTable < ActiveRecord::Migration[5.0]
  def change
    rename_column :tracks, :artist_id, :user_id
  end
end
