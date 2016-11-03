class Api::TasksController < ApplicationController
  def new

  end

  def create
    @task = Task.new(task_params)
    @task.user = current_user
    if @task.save
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def show

  end

  def index
    if current_user
      @tasks = current_user.tasks
      render "api/tasks/index"
    end
  end

  def update
    @task = Task.find_by_id(task_params[:id])
    if @task.user == current_user
      if @task.save
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
      :user_id
    )
  end
end
