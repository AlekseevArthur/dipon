# Frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Form2 requests', type: :request do
  let(:user) { create :user }

  it 'add form' do
    sign_in user
    form2 = build(:form2).attributes
    expect(Form2.count).to eq(0)
    post '/user/form2', params: { form2: form2 }
    expect(Form2.count).to eq(1)
  end

  it 'update form' do
    sign_in user
    organization = create(:organization, user: user)
    form2 = create(:form2, organization: organization).attributes
    expect(Form2.count).to eq(1)
    expect(Form2.first[:c010]).to eq(1)
    form2[:c010] = 100
    post '/user/form2', params: { form2: form2 }
    expect(Form2.first.c010).to eq(100)
  end
end
