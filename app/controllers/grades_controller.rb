class GradesController < ApplicationController
    # skip_before_action :authorize
    def index
        render json: Grade.all
    end

    def show
        grade = Grade.find(params[:id])
        render json: grade
    end
    def create
        grade = Grade.create(grade_params)
        render json: grade
    end

    def destroy
        grade = Grade.find(params[:id])
        render json: grade
    end
    def update
        grades.update!(student_name: grade_params[:student_name], Mathematics: grade_params[:Mathematics], Chemistry: grade_params[:Chemistry], English: grade_params[:English])
        render json: grade
    end
    private
    def grade_params
        params.permit(:student_name, :Mathematics, :Chemistry, :English, :user_id)
    end
   
end
