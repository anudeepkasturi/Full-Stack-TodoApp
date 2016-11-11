class Api::ListsController < ApplicationController
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
    @list = List.includes(:tasks).find_by_id(params[:id])
    if @list
      render "api/lists/show"
    else
      render json: ['No list was found'], status: 422
    end
  end

  def index
    if current_user
      @lists = current_user.lists
      render "api/lists/index"
    end
  end

  def update
    find_list
    if @list && @list.user == current_user
      if @list.update(list_params)
        render "api/lists/show"
      else
        render json: @list.errors.full_messages, status: 422
      end
    else
      render json: ["You do not own this list"], status: 422
    end
  end

  def destroy
    @list = List.find_by_id(params[:id])
    if @list.user == current_user
      @list.delete
      render json: {}
    else
      render json: ["You do not own this list"], status: 422
    end
  end

  private
  def list_params
    params.require(:list).permit(:id, :title, :user_id)
  end

  def find_list
    @list = List.find_by_id(params[:list][:id])
  end
end
