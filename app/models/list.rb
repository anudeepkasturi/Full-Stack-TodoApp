# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ActiveRecord::Base
  validates :title, :user_id, presence: true

  has_many :tasked_lists
  has_many :tasks, through: :tasked_lists, dependent: :destroy
  belongs_to :user
end
