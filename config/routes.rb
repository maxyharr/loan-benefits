Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  get '/', to: 'client#index'
  get '/home', to: 'client#index', as: :client_home # /(*page) doesn't work because it matches all the other routes

  namespace :api do
    resources :users, only: [:index]
    # devise_scope :user do # Registration
    #   post 'registration', to: 'registrations#create'
    # end
    # devise_for :users # Sessions
    # resource :user
  end
end