require 'rails_helper'

RSpec.describe 'Test device functionality', type: :feature do
  scenario 'sign in', js: true do
    sign_in create(:user)
    visit '/user'
    expect(page).to have_content('corporation')
  end
end
