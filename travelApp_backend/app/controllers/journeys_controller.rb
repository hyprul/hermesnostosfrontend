class JourneysController < ApplicationController

  def index
    journeys = Journey.all
    render json: journeys
  end

  def show
    journey = Journey.find(params[:id])
    render json: journey
  end

  def create
    journey = Journey.new(journey_params);
    if journey.save
      render json: journey
    else
      render json: journey.errors
    end
  end

  def update
    journey = Journey.find(params[:id])
    if journey.update(journey_params)
      render json: journey
    else
      render json: journey.errors
    end
  end

  def destroy
    journey = Journey.find(params[:id])
    if journey.destroy
      render json: journey
    else
      render json: journey.errors
    end
  end

  private

  def journey_params
    params.require(:journey).permit(:traveler_id, :pics, :overview, :date, :name)
  end

end
