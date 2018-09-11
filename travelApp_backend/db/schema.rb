# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_09_10_222718) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "hstore"
  enable_extension "plpgsql"

  create_table "journeys", force: :cascade do |t|
    t.bigint "traveler_id"
    t.string "pics", array: true
    t.string "overview"
    t.datetime "date"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pics"], name: "index_journeys_on_pics", using: :gin
    t.index ["traveler_id"], name: "index_journeys_on_traveler_id"
  end

  create_table "locations", force: :cascade do |t|
    t.bigint "journey_id"
    t.hstore "coordinates"
    t.string "journal_entry"
    t.string "visit_frequency"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coordinates"], name: "index_locations_on_coordinates", using: :gin
    t.index ["journey_id"], name: "index_locations_on_journey_id"
  end

  create_table "travelers", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "picture_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "journeys", "travelers"
  add_foreign_key "locations", "journeys"
end
