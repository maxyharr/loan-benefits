Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  get '/', to: 'client#index'
  get '/home', to: 'client#index', as: :client_home # /(*page) doesn't work because it matches all the other routes
  get '/login', to: 'client#index', as: :client_login # /(*page) doesn't work because it matches all the other routes

  namespace :api do
    post 'login', to: 'user_sessions#create', as: :login
    delete 'logout', to: 'user_sessions#destroy', as: :logout
    resources :users, only: [:index, :create]
  end
end