class CreateForm4 < ActiveRecord::Migration[6.1]
  def change
    create_table :form4s do |t|
      t.integer :c020
      t.integer :c030
      t.integer :c040
      t.integer :c050
      t.integer :c060
      t.integer :c070
      t.integer :c080
      t.integer :c090
      t.integer :c100

      t.integer :c110
      t.integer :c120
      t.integer :c130
      t.integer :c140

      t.references :organization
      t.date :reporting_date
      t.timestamps
    end
  end
end
