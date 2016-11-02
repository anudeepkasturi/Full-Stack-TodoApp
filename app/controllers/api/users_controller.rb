class Api::UsersController < ApplicationController
  def new

  end

  def create
    @user = User.new(user_params)
    debugger
    if @user.save
      login(@user)
      render json: "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password);
  end
end
