class CreateForm1 < ActiveRecord::Migration[6.1]
  def change
    create_table :form1s do |t|
      t.integer :c110, default: 0, null: false
      t.integer :c120, default: 0, null: false
      t.integer :c130, default: 0, null: false
      t.integer :c140, default: 0, null: false
      t.integer :c150, default: 0, null: false
      t.integer :c160, default: 0, null: false
      t.integer :c170, default: 0, null: false
      t.integer :c180, default: 0, null: false
      t.integer :c190, default: 0, null: false

      t.integer :c210, default: 0, null: false
      t.integer :c220, default: 0, null: false
      t.integer :c230, default: 0, null: false
      t.integer :c240, default: 0, null: false
      t.integer :c250, default: 0, null: false
      t.integer :c260, default: 0, null: false
      t.integer :c270, default: 0, null: false
      t.integer :c280, default: 0, null: false
      t.integer :c290, default: 0, null: false
      t.integer :c300, default: 0, null: false

      t.integer :c410, default: 0, null: false
      t.integer :c420, default: 0, null: false
      t.integer :c430, default: 0, null: false
      t.integer :c440, default: 0, null: false
      t.integer :c450, default: 0, null: false
      t.integer :c460, default: 0, null: false
      t.integer :c470, default: 0, null: false
      t.integer :c480, default: 0, null: false
      t.integer :c490, default: 0, null: false

      t.integer :c510, default: 0, null: false
      t.integer :c520, default: 0, null: false
      t.integer :c530, default: 0, null: false
      t.integer :c540, default: 0, null: false
      t.integer :c550, default: 0, null: false
      t.integer :c560, default: 0, null: false
      t.integer :c590, default: 0, null: false

      t.integer :c610, default: 0, null: false
      t.integer :c620, default: 0, null: false
      t.integer :c630, default: 0, null: false
      t.integer :c640, default: 0, null: false
      t.integer :c650, default: 0, null: false
      t.integer :c660, default: 0, null: false
      t.integer :c670, default: 0, null: false
      t.integer :c690, default: 0, null: false

      t.integer :c700, default: 0, null: false

      t.references :organization, foreing_key: true
      t.date :reporting_date
      t.timestamps
    end
  end
end
