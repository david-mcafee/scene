class Api::SessionController < ApplicationController
  # login
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render(
        json: ["Invalid username and/or passowrd"],
        status: 401
      )
    end
  end

  # logout
  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(
        json: ["Nobody signed in"],
        status: 404
      )
    end
  end
end
