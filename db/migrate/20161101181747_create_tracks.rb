class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :image_url
      t.string :audio_url, null: false
      t.integer :artist_id, null: false

      t.timestamps
    end

    add_index :tracks, :title
  end
end
