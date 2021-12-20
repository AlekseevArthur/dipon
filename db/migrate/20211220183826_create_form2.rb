class CreateForm2 < ActiveRecord::Migration[6.1]
  def change
    create_table :form2s do |t|

      t.integer :c010
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
      t.integer :c150
      t.integer :c160
      t.integer :c170
      t.integer :c180
      t.integer :c190
      t.integer :c200
      t.integer :c205

      t.integer :c210

      t.integer :c220
      t.integer :c230
      t.integer :c240
      t.integer :c250
      t.integer :c260

      
      t.references :organization
      t.date :reporting_date
      
      t.timestamps
    end
  end
end
