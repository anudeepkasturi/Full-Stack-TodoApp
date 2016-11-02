class Api::SessionsController < ApplicationController
  def new

  end

  def create
    @user = User.find_by_credentials(
      session_params[:username],
      session_params[:password]
    )

    if @user
      login(@user)
      render json: "api/users/show"
    else
      render json: ["Invalid username or password"]
    end
  end

  def destroy
    logout
  end

  private
  def session_params
    params.require(:user).permit(:username, :password)
  end
end
