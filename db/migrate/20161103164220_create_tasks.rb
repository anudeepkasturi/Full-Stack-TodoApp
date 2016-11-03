class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :description
      t.date :due_date
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :tasks, :title
    add_index :tasks, :user_id
  end
end
