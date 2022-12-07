class GradesController < ApplicationController
    def index
        render json: Grade.all
    end

    def show
        grade = Grade.find(params[:id])
        render json: grade
    end
    def create
        grades.update!(name: product_params[:name], Mathematics: grade_params[:Mathematics], Chemistry: grade_params[:Chemistry], English: grade_params[:English])
        render json: grade
    end

    def destroy
        grade = Grade.find(params[:id])
        render json: grade
    end
    def update
        grades.update!(name: product_params[:name], Mathematics: grade_params[:Mathematics], Chemistry: grade_params[:Chemistry], English: grade_params[:English])
        render json: garde
    end
end
