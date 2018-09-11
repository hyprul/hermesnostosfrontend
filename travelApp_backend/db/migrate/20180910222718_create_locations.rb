class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    enable_extension 'hstore'
    create_table :locations do |t|
      t.belongs_to :journey, foreign_key: true
      t.hstore :coordinates
      t.string :journal_entry
      t.string :visit_frequency
      t.string :name

      t.timestamps
    end
    add_index :locations, :coordinates, using: :gin
  end
end
