class Journey < ApplicationRecord
  belongs_to :traveler
  has_many :locations

  validates :name,:traveler_id, :date, presence: true, on: :create
end
