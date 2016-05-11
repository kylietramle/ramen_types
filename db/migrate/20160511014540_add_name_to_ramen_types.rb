class AddNameToRamenTypes < ActiveRecord::Migration
  def change
    add_column :ramen_types, :name, :string
  end
end
