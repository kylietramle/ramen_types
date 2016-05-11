class RamenTypesController < ApplicationController
  def index
    @ramen_types = RamenType.all
  end

  def show
    @ramen_type = RamenType.find_by(id: params[:id])
  end
end
