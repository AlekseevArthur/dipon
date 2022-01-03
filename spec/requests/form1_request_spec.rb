# Frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Form1 requests', type: :request do
  let(:user) { create :user }

  it 'add form' do
    sign_in user
    form1 = build(:form1).attributes
    expect(Form1.count).to eq(0)
    post '/user/form1', params: { form1: form1 }
    expect(Form1.count).to eq(1)
    expect(response).to have_http_status(:ok)
  end

  it 'update form' do
    sign_in user
    organization = create(:organization, user: user)
    form1 = create(:form1, organization: organization).attributes
    expect(Form1.count).to eq(1)
    expect(Form1.first.c110).to eq(1)
    form1[:c110] = 100
    post '/user/form1', params: { form1: form1 }
    expect(Form1.first.c110).to eq(100)
  end
end
