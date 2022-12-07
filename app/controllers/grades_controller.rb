class GradesController < ApplicationController
    def index
        render json: Grade.all
    end
    
end
