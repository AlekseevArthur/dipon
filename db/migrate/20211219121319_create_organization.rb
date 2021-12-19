class CreateOrganization < ActiveRecord::Migration[6.1]
  def change
    create_table :organizations do |t|
      t.string :name 
      t.string :oof 
      t.string :unp

      t.timestamps
    end
  end
end
