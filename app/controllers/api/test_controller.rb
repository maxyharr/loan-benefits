class Api::TestController < Api::BaseController
  def index
    render json: {'a': 'awesome', 'b': 'proxys rock'}
  end
end