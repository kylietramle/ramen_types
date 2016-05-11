json.array! @ramen_types.each do |ramen_type|
  json.name ramen_type.name
  json.soup_base ramen_type.soup_base
  json.flavor ramen_type.flavor
  json.broth_color ramen_type.broth_color
  json.other_ingredients ramen_type.other_ingredients
end