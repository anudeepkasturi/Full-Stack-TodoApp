class Api::TasksController < ApplicationController
  def new

  end

  def create
    @task = Task.new(task_params.except(:list_id))
    @task.user = current_user
    if @task.save
      if task_params[:list_id]
        list = List.find_by_id(task_params[:list_id])
        @task.lists << list
      end
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def show
    @task = Task.find_by_id(params[:id])
    if @task
      render "api/tasks/show"
    else
      render json: ['No task was found'], status: 422
    end
  end

  def index
    if current_user
      @tasks = current_user.tasks
      if params[:listId].to_i != 0
        @tasks = @tasks.joins(:tasked_lists)
        .where(tasked_lists: {list_id: params[:listId]})
      end
      render "api/tasks/index"
    end
  end

  def update
    @task = Task.find_by_id(task_params[:id])
    if @task.user == current_user
      if @task.update(task_params)
        render "api/tasks/show"
      else
        render json: @task.errors.full_messages, status: 422
      end
    else
      render json: ["You do not own this task"], status: 422
    end
  end

  def destroy
    @task = Task.find_by_id(task_params[:id])
    if @task.user == current_user
      @task.destroy
      render json: {}
    else
      render json: ["You do not own this task"], status: 422
    end
  end

  private
  def task_params
    params.require(:task).permit(
      :id,
      :title,
      :user_id,
      :description,
      :due_date,
      :list_id
    )
  end
end
