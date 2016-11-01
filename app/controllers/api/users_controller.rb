class UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      # if user can be saved to db, login the user
      login(@user)

      #TODO:
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
