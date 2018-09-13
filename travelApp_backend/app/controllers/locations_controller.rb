class LocationsController < ApplicationController

  def index
    locations = Location.all
    render json: locations
  end

  def show
    location = Location.find(params[:id])
    render json: location
  end


  def create
    location = Location.new(location_params);
    if location.save
      render json: location
    else
      render json: location.errors
    end
  end

  def update
    location = Location.find(params[:id])
    if location.update(location_params)
      render json: location
    else
      render json: location.errors
    end
  end

  def destroy
    location = Location.find(params[:id])
    if location.destroy
      render json: location
    else
      render json: location.errors
    end
  end

  private
  def location_params
    params.require(:location).permit(:journey_id, :journal_entry, :visit_frequency, :name, coordinates: {})
  end

end
