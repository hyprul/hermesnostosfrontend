class Traveler < ApplicationRecord
  has_many :journeys
  has_many :locations, :through => :journeys
end
