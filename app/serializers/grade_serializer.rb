class GradeSerializer < ActiveModel::Serializer
  attributes :id, :"student-name", :subjects, :grade
end
