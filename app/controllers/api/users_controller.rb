class Api::UsersController < Api::BaseController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    respond_with current_user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(user_params[:email], user_params[:password])
      head :ok
    else
      render json: @user.errors.messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end