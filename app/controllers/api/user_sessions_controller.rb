class Api::UserSessionsController < Api::BaseController
  before_filter :require_login, only: [:destroy]
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]

  def create
    if @user = login(user_params[:email], user_params[:password])
      head :ok
    else
      render json: { message: "Email or password is invalid" }, status: 422
    end
  end

  def destroy
    logout
    head :ok
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end