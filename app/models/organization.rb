class Organization < ApplicationRecord
  belongs_to :user
  has_many :form1s, dependent: :destroy
  has_many :form2s, dependent: :destroy
  has_many :form4s, dependent: :destroy
end
