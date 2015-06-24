class CreateFestivals < ActiveRecord::Migration
  def change
    create_table :festivals do |t|
      t.string :name
      t.string :city
      t.string :state
      t.date :start_date
      t.date :end_date
      t.string :website 


    end
  end
end
