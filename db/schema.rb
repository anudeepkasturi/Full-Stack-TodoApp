# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161109182045) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "lists", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "lists", ["title"], name: "index_lists_on_title", unique: true, using: :btree
  add_index "lists", ["user_id"], name: "index_lists_on_user_id", using: :btree

  create_table "tasked_lists", force: :cascade do |t|
    t.integer "list_id", null: false
    t.integer "task_id", null: false
  end

  add_index "tasked_lists", ["list_id"], name: "index_tasked_lists_on_list_id", using: :btree
  add_index "tasked_lists", ["task_id"], name: "index_tasked_lists_on_task_id", using: :btree

  create_table "tasks", force: :cascade do |t|
    t.string   "title",                       null: false
    t.text     "description"
    t.date     "due_date"
    t.integer  "user_id",                     null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "completed",   default: false
  end

  add_index "tasks", ["title"], name: "index_tasks_on_title", using: :btree
  add_index "tasks", ["user_id"], name: "index_tasks_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string "username",        null: false
    t.string "password_digest", null: false
    t.string "session_token",   null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
