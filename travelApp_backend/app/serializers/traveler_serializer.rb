class TravelerSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :pictureUrl , :journeys

  def pictureUrl
    self.object.picture_url
  end

  def journeys
    self.object.journeys.map do |journey|
      {journeyId: journey.id,
      name: journey.name,
      pics: journey.pics,
      overview: journey.overview,
      date: journey.date,
      locations: journey.locations.map do |location|
        {
            locationId: location.id,
            name: location.name,
            coordinates: location.coordinates,
            journalEntry: location.journal_entry,
            visitFrequency: location.visit_frequency
        }
      end
      }

    end
  end
end
