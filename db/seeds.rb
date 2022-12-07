# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(name: "Raven")
grades = ['A','A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-']

5.times do
    Grade.create(student_name: Faker::Name.name, Mathematics: grades.sample, Chemistry: grades.sample, English: grades.sample, user_id: user.id ) 
end