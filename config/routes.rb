Rails.application.routes.draw do
  devise_for :users
  resource :user do
    resource :form1
    resource :form2
    resource :form3
    resource :form4
  end
  resource :organization
  resource :dashboard
  root 'static#index'
end
