class ListsController < ApplicationController
  def new

  end

  def create
    @list = List.new(list_params)
    @list.user = current_user
    if @list.save
      render "api/lists/show"
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def show

  end

  def index
    if current_user
      @lists = current_user.lists
      render "api/lists/index"
    end
  end

  def update
    @list = List.find_by_id(list_params[:id])
    if @list.user == current_user
      if @list.save
        render "api/lists/show"
      else
        render json: @list.errors.full_messages, status: 422
      end
    else
      render json: ["You do not own this list"], status: 422
    end
  end

  def destroy
    @list = List.find_by_id(list_params[:id])
    if @list.user == current_user
      @list.destroy
      render json: {}
    else
      render json: ["You do not own this list"], status: 422
    end
  end

  private
  def list_params
    params.require(:list).permit(:id, :title, :user_id)
  end
end
