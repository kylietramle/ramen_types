class CreateRamenTypes < ActiveRecord::Migration
  def change
    create_table :ramen_types do |t|
      t.string :soup_base
      t.string :flavor
      t.string :broth_color
      t.string :other_ingredients

      t.timestamps null: true
    end
  end
end
