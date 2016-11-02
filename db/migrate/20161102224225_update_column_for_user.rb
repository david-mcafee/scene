class UpdateColumnForUser < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :artist, :string
  end
end
