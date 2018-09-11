class Journey < ApplicationRecord
  belongs_to :traveler
  has_many :locations
end
