class ThingsController < ApplicationController
  respond_to :json

  def index
    @things = Thing.all
    render json: @things
  end

end
