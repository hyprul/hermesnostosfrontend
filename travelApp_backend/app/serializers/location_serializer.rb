class LocationSerializer < ActiveModel::Serializer
  attributes :id, :coordinates, :journal_entry, :visit_frequency
end
