class Location < ApplicationRecord
  belongs_to :journey
  store_accessor :coordinates

  validates :name,:journey_id, :coordinates, presence: true, on: :create
end
