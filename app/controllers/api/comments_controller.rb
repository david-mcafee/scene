class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render :index
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = comment.find(params[:id])
  end

  # def edit
  #   @comment = comment.find(params[:id])
  # end

  # def update
  #   # @track = current_user.tracks.find(params[:id])
  #   @comment = comment.find(params[:id])
  #
  #   if @comment.update_attributes(comment_params)
  #     render :show
  #   else
  #     render json: @comment.errors.full_messages, status: 422
  #   end
  # end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:title, :image_url, :audio_url)
  end
end
