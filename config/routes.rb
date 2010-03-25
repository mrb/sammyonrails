Sammyonrails::Application.routes.draw do |map|
  resources :posts
  root :to => "posts#index", :format => "js"
end
