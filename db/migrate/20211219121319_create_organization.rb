class CreateOrganization < ActiveRecord::Migration[6.1]
  def change
    create_table :organizations do |t|
      t.string :name, default: 'company', null: false
      t.string :oof, default: 'OAO', null: false
      t.string :unp, default: '1234/12', null: false

      t.timestamps
    end
  end
end
