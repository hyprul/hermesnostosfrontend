class TravelersController < ApplicationController

  def index
    travelers = Traveler.all
    render json: travelers
  end

  def show
    traveler = Traveler.find(params[:id])
    render json: traveler
  end


  private


end
