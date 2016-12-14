Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  get '/', to: 'client#index'
  get '/(*page)', to: 'client#index', as: :client_home

  namespace :api do

    # devise_scope :user do # Registration
    #   post 'registration', to: 'registrations#create'
    # end
    # devise_for :users # Sessions
    # resource :user
  end
end