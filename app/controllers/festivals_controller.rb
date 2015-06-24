class FestivalsController < ApplicationController

  def show
    @festival = Festival.find(params[:id])
    @bands = Band.all
    @festivals = Festival.all
  end
end
