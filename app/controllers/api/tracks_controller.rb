class Api::TracksController < ApplicationController

  def index
    @tracks = Tracks.all
  end

  def new
    @track = Track.new
  end

  def create
    @track = Track.new(track_params)
    @track.artist_id = current_user.id

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
    params.require(:track).permit(:title, :image_url, :audio_url)
  end
end
