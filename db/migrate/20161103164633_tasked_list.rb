class TaskedList < ActiveRecord::Migration
  def change
    create_table :tasked_lists do |t|
      t.integer :list_id, null: false
      t.integer :task_id, null: false
    end
    add_index :tasked_lists, :list_id
    add_index :tasked_lists, :task_id
  end
end
