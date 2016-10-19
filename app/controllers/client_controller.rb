class ClientController < ApplicationController

  def index
    # Only hitting this controller action in production. Hence /dist
    # Webpack dev server used in development
    render file: '/client/dist/index.html'
  end

end