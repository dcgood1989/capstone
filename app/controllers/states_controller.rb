class StatesController < ApplicationController

  def show
    @state = State.find(params[:id])
    # @festivals = Festival.all
  end
end
