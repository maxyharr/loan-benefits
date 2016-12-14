class Api::UsersController < Api::BaseController
  def index
    render json: {email: 'poop@test.com'}, status: 200
  end
end