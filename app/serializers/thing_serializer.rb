class ThingSerializer < ActiveModel::Serializer
  attributes :id,
    :name,
    :birthday
end
