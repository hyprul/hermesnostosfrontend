class Location < ApplicationRecord
  belongs_to :journey
  store_accessor :coordinates
end
