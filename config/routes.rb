Rails.application.routes.draw do
  devise_for :users
  resources :form1s
  resources :form2s
  root 'static#index'
end
