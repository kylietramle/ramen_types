json.array! @ramen_types.each do |ramen_type|
  json.partial! 'ramen_type.json.jbuilder', ramen_type: ramen_type
end

