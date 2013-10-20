class ThingsController < ApplicationController
  respond_to :json

  def index
    @things = Thing.all
  end

end
