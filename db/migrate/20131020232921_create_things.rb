class CreateThings < ActiveRecord::Migration
  def change
    create_table :things do |t|
      t.string :name
      t.datetime :birthday

      t.timestamps
    end
  end
end
