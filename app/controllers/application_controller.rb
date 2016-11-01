class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # Expose methods to views
  helper_method :current_user, :logged_in?

  private
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  # NOTE: review !! if you don't remember how it works
  def logged_in?
    !!current_user
  end

  def login(user)
    #set the cookie session token to value of reset user session token
    session[:session_token] = user.reset_session_token!
    # set current_user to provided user
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_signed_in!
    # NOTE: research "base"
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end
end
