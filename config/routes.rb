Rails.application.routes.draw do
  devise_for :users
  resources :form1s
  root 'static#index'
end
