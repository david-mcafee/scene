class Api::TracksController < ApplicationController

  def index
    cloud_name = ENV['CLOUD_NAME']
    upload_preset = ENV['UPLOAD_PRESET']

    @tracks = Track.all
    render :index
  end

  def new
    @track = Track.new
  end

  def create
    @track = Track.new(track_params)
    @track.user_id = current_user.id

    if @track.save
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def edit
    @track = Track.find(params[:id])
  end

  def update
    @track = current_user.tracks.find(params[:id])

    if @track.update_attributes(track_params)
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render "api/tracks/"
  end

  private
  def track_params
    params.require(:track).permit(:title, :user_id, :image_url, :audio_url)
  end
end
