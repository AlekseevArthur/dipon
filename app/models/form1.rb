class Form1 < ApplicationRecord
  belongs_to :organization
  validates_uniqueness_of :reporting_date
end
