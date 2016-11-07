class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def new
    @user = User.new
  end

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

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :banner_url, :artist)
  end
end

# $.ajax({method: 'POST', url: '/api/session', data: {user: {username: "user1", password: "password1"}}})
