Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :travelers, only: [:index, :show]
  resources :journeys, only: [:index, :show]
  resources :locations, only: [:index, :show] 
end
