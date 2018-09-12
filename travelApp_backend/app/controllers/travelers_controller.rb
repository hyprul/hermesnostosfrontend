class TravelersController < ApplicationController

  def index
    travelers = Traveler.all
    render json: travelers
  end

  def show
    traveler = Traveler.find(params[:id])
    render json: traveler
  end

  def create
    traveler = Traveler.new(traveler_params);
    if traveler.save
      render json: traveler
    else
      render json: traveler.errors
    end
  end

  def update
    traveler = Traveler.find(params[:id])
    if traveler.update(traveler_params)
      render json: traveler
    else
      render json: traveler.errors
    end
  end

  def destroy
    traveler = Traveler.find(params[:id])
    if traveler.destroy
      render json: traveler
    else
      render json: traveler.errors
    end
  end


  private

  def traveler_params
    params.require(:traveler).permit(:name, :age, :picture_url);
  end

end
