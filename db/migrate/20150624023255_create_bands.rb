class CreateBands < ActiveRecord::Migration
  def change
    create_table :bands do |t|
      t.belongs_to :festival
      t.string :name
      t.string :genre
      t.string :website
    end
  end
end
