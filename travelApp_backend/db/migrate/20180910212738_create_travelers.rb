class CreateTravelers < ActiveRecord::Migration[5.2]
  def change
    create_table :travelers do |t|
      t.string :name
      t.integer :age
      t.string :picture_url

      t.timestamps
    end
  end
end
