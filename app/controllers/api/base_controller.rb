class Api::BaseController < ApplicationController
  respond_to :json
  after_action :set_etag

  protected

  def set_etag
    if request.get? || request.head?
      headers['ETag'] = Digest::MD5.hexdigest(response.body)
    end
  end

end
