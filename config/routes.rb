Rails.application.routes.draw do
  devise_for :users

  resources :users do
    resources :form1s
    resources :form2s
    resources :form4s
  end
  root 'static#index'
end
