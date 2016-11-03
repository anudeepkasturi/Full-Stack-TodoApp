# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  due_date    :date
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Task < ActiveRecord::Base
  validates :title, :user_id, presence: true

  has_many :tasked_lists
  has_many :lists, through: :tasked_lists
  belongs_to :user
end
