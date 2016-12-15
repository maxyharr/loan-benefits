class Api::BaseController < ApplicationController
  # provided as a helper from sorcery
  # will want to use this for certain controllers at first and then probably use cancan
  respond_to :json
  after_action :set_etag

  protected

  def set_etag
    if request.get? || request.head?
      headers['ETag'] = Digest::MD5.hexdigest(response.body)
    end
  end

end
