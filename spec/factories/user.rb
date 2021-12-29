FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password              { '111111' }
    password_confirmation { '111111' }
    after(:create) do |user|
      user.organization ||= create(:organization, user: user)
    end
  end

  factory :tony_hawk, parent: :user do
    email { 'tony@hawk' }
  end

  factory :toxic_user, parent: :user do
    email { 'toxic@user' }
  end

  factory :second_admin, parent: :admin do
    email { 'admin@admom' }
  end
end
