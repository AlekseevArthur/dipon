class CreateForm4 < ActiveRecord::Migration[6.1]
  def change
    create_table :form4s do |t|
      t.integer :c020, default: 0, null: false
      t.integer :c030, default: 0, null: false
      t.integer :c040, default: 0, null: false
      t.integer :c050, default: 0, null: false
      t.integer :c060, default: 0, null: false
      t.integer :c070, default: 0, null: false
      t.integer :c080, default: 0, null: false
      t.integer :c090, default: 0, null: false
      t.integer :c100, default: 0, null: false

      t.integer :c110, default: 0, null: false
      t.integer :c120, default: 0, null: false
      t.integer :c130, default: 0, null: false
      t.integer :c140, default: 0, null: false

      t.references :organization
      t.date :reporting_date
      t.timestamps
    end
  end
end
