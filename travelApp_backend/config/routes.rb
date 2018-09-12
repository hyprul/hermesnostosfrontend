Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :travelers, only: [:show, :create, :update, :destroy]
  resources :journeys, only: [:create, :update, :destroy]
  resources :locations, only: [:create, :update, :destroy]
end
