class Api::V1::RamenTypesController < ApplicationController
  def index
    @ramen_types = RamenType.all
  end

  def show
    @ramen_type = RamenType.find_by(id: params[:id])
  end

  def create
    @ramen_type = RamenType.new(name: params[:name], soup_base: params[:soup_base], flavor: params[:flavor], broth_color: params[:broth_color], other_ingredients: params[:other_ingredients])
    
    if @ramen_type.save
      render :show
    else
      render json: {errors: @ramen_type.errors.full_messages}, status: 422
    end
  end

  def update
    @ramen_type = RamenType.find_by(id: params[:id])
    @ramen_type.update(name: params[:name], soup_base: params[:soup_base], flavor: params[:flavor], broth_color: params[:broth_color], other_ingredients: params[:other_ingredients])

    render :show
  end

  def destroy
    @ramen_type = RamenType.find_by(id: params[:id])
    @ramen_type.destroy

    render :show
  end
end
