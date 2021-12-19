class CreateForm1 < ActiveRecord::Migration[6.1]
  def change
    create_table :form1s do |t|
      t.integer :c110
      t.integer :c120
      t.integer :c130
      t.integer :c140
      t.integer :c150
      t.integer :c160
      t.integer :c170
      t.integer :c180
      t.integer :c190

      t.integer :c210
      t.integer :c220
      t.integer :c230
      t.integer :c240
      t.integer :c250
      t.integer :c260
      t.integer :c270
      t.integer :c280
      t.integer :c290
      t.integer :c300

      t.integer :c410
      t.integer :c420
      t.integer :c430
      t.integer :c440
      t.integer :c450
      t.integer :c460
      t.integer :c470
      t.integer :c480
      t.integer :c490
      
      t.integer :c510
      t.integer :c520
      t.integer :c530
      t.integer :c540
      t.integer :c550
      t.integer :c560
      t.integer :c590

      t.integer :c610
      t.integer :c620
      t.integer :c630
      t.integer :c640
      t.integer :c650
      t.integer :c660
      t.integer :c670
      t.integer :c690    

      t.integer :c700

      t.references :organization
      t.date :reporting_date
      t.timestamps
    end

  end
end
