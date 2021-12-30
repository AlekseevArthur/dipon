require 'rails_helper'

RSpec.describe 'Test device functionality', type: :feature do
  scenario 'sign in', js: true do
    sign_in create(:user)
    visit '/'
    expect(page).to have_content('corporation')
  end

  #    sign_in create(:user)
  #     visit '/'
  #     click_on 'Выйти'
  #     expect(page).not_to have_content('corporation')
  #   end
end
