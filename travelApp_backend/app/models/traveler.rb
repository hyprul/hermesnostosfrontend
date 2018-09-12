class Traveler < ApplicationRecord
  has_many :journeys
  has_many :locations, :through => :journeys

  validates :name,:age, :picture_url, presence: true, on: :create

end
