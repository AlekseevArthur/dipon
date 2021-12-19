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

ActiveRecord::Schema.define(version: 2021_12_19_134946) do

  create_table "form1s", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "c110"
    t.integer "c120"
    t.integer "c130"
    t.integer "c140"
    t.integer "c150"
    t.integer "c160"
    t.integer "c170"
    t.integer "c180"
    t.integer "c190"
    t.integer "c210"
    t.integer "c220"
    t.integer "c230"
    t.integer "c240"
    t.integer "c250"
    t.integer "c260"
    t.integer "c270"
    t.integer "c280"
    t.integer "c290"
    t.integer "c300"
    t.integer "c410"
    t.integer "c420"
    t.integer "c430"
    t.integer "c440"
    t.integer "c450"
    t.integer "c460"
    t.integer "c470"
    t.integer "c480"
    t.integer "c490"
    t.integer "c510"
    t.integer "c520"
    t.integer "c530"
    t.integer "c540"
    t.integer "c550"
    t.integer "c560"
    t.integer "c590"
    t.integer "c610"
    t.integer "c620"
    t.integer "c630"
    t.integer "c640"
    t.integer "c650"
    t.integer "c660"
    t.integer "c670"
    t.integer "c690"
    t.integer "c700"
    t.bigint "organization_id"
    t.date "reporting_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["organization_id"], name: "index_form1s_on_organization_id"
  end

  create_table "organizations", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.string "oof"
    t.string "unp"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
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

end
