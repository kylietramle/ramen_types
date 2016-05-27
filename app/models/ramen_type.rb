class RamenType < ActiveRecord::Base
  validates :name, presence: true
  validates :soup_base, presence: true
end
