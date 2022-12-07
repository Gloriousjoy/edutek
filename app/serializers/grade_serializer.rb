class GradeSerializer < ActiveModel::Serializer
  attributes :id, :student_name, :Mathematics, :Chemistry, :English
end
