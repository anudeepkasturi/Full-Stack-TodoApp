# == Schema Information
#
# Table name: tasked_lists
#
#  id      :integer          not null, primary key
#  list_id :integer          not null
#  task_id :integer          not null
#

class TaskedList < ActiveRecord::Base
  validates :list_id, :task_id, presence: true

  belongs_to :list
  belongs_to :task
end
