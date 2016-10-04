class ClientController < ApplicationController

  def index
    render file: '/client/dist/index.html'
  end

end