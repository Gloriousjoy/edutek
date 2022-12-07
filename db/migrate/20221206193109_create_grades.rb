class CreateGrades < ActiveRecord::Migration[6.1]
  def change
    create_table :grades do |t|
      t.string :student_name
      t.string :Mathematics
      t.string :Chemistry
      t.string :English
      t.integer :user_id

      t.timestamps
    end
  end
end
