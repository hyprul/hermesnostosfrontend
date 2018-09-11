class JourneySerializer < ActiveModel::Serializer
  attributes :id, :pics, :overview, :date, :locations
end
