class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_method
  def unprocessable_entity_method e
    render json: {errors: [e.record.errors]}, status: :unprocessable_entity
  end
  def authorize
		return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
	end
end
