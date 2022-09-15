Rails.application.routes.draw do
  # get 'root/index'
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :messages, only: [:index, :show]
    resources :greetings, only: [:index]
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
