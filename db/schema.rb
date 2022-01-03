# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_27_063438) do

  create_table "form1s", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "c110", default: 0, null: false
    t.integer "c120", default: 0, null: false
    t.integer "c130", default: 0, null: false
    t.integer "c140", default: 0, null: false
    t.integer "c150", default: 0, null: false
    t.integer "c160", default: 0, null: false
    t.integer "c170", default: 0, null: false
    t.integer "c180", default: 0, null: false
    t.integer "c190", default: 0, null: false
    t.integer "c210", default: 0, null: false
    t.integer "c220", default: 0, null: false
    t.integer "c230", default: 0, null: false
    t.integer "c240", default: 0, null: false
    t.integer "c250", default: 0, null: false
    t.integer "c260", default: 0, null: false
    t.integer "c270", default: 0, null: false
    t.integer "c280", default: 0, null: false
    t.integer "c290", default: 0, null: false
    t.integer "c300", default: 0, null: false
    t.integer "c410", default: 0, null: false
    t.integer "c420", default: 0, null: false
    t.integer "c430", default: 0, null: false
    t.integer "c440", default: 0, null: false
    t.integer "c450", default: 0, null: false
    t.integer "c460", default: 0, null: false
    t.integer "c470", default: 0, null: false
    t.integer "c480", default: 0, null: false
    t.integer "c490", default: 0, null: false
    t.integer "c510", default: 0, null: false
    t.integer "c520", default: 0, null: false
    t.integer "c530", default: 0, null: false
    t.integer "c540", default: 0, null: false
    t.integer "c550", default: 0, null: false
    t.integer "c560", default: 0, null: false
    t.integer "c590", default: 0, null: false
    t.integer "c610", default: 0, null: false
    t.integer "c620", default: 0, null: false
    t.integer "c630", default: 0, null: false
    t.integer "c640", default: 0, null: false
    t.integer "c650", default: 0, null: false
    t.integer "c660", default: 0, null: false
    t.integer "c670", default: 0, null: false
    t.integer "c690", default: 0, null: false
    t.integer "c700", default: 0, null: false
    t.bigint "organization_id"
    t.date "reporting_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["organization_id"], name: "index_form1s_on_organization_id"
  end

  create_table "form2s", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "c010", default: 0, null: false
    t.integer "c020", default: 0, null: false
    t.integer "c030", default: 0, null: false
    t.integer "c040", default: 0, null: false
    t.integer "c050", default: 0, null: false
    t.integer "c060", default: 0, null: false
    t.integer "c070", default: 0, null: false
    t.integer "c080", default: 0, null: false
    t.integer "c090", default: 0, null: false
    t.integer "c100", default: 0, null: false
    t.integer "c110", default: 0, null: false
    t.integer "c120", default: 0, null: false
    t.integer "c130", default: 0, null: false
    t.integer "c140", default: 0, null: false
    t.integer "c150", default: 0, null: false
    t.integer "c160", default: 0, null: false
    t.integer "c170", default: 0, null: false
    t.integer "c180", default: 0, null: false
    t.integer "c190", default: 0, null: false
    t.integer "c200", default: 0, null: false
    t.integer "c205", default: 0, null: false
    t.integer "c210", default: 0, null: false
    t.integer "c220", default: 0, null: false
    t.integer "c230", default: 0, null: false
    t.integer "c240", default: 0, null: false
    t.integer "c250", default: 0, null: false
    t.integer "c260", default: 0, null: false
    t.bigint "organization_id"
    t.date "reporting_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["organization_id"], name: "index_form2s_on_organization_id"
  end

  create_table "form4s", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "c020", default: 0, null: false
    t.integer "c030", default: 0, null: false
    t.integer "c040", default: 0, null: false
    t.integer "c050", default: 0, null: false
    t.integer "c060", default: 0, null: false
    t.integer "c070", default: 0, null: false
    t.integer "c080", default: 0, null: false
    t.integer "c090", default: 0, null: false
    t.integer "c100", default: 0, null: false
    t.integer "c110", default: 0, null: false
    t.integer "c120", default: 0, null: false
    t.integer "c130", default: 0, null: false
    t.integer "c140", default: 0, null: false
    t.bigint "organization_id"
    t.date "reporting_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["organization_id"], name: "index_form4s_on_organization_id"
  end

  create_table "organizations", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", default: "company", null: false
    t.string "oof", default: "OAO", null: false
    t.string "unp", default: "1234/12", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_organizations_on_user_id"
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "organizations", "users"
end
