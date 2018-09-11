class CreateJourneys < ActiveRecord::Migration[5.2]
  def change
    create_table :journeys do |t|
      t.belongs_to :traveler, foreign_key: true
      t.string 'pics', array: true
      t.string :overview
      t.datetime :date
      t.string :name

      t.timestamps
    end
    add_index :journeys, :pics, using: :gin
  end
end
