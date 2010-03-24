class PostsController < ApplicationController
  respond_to :js, :html
  
  def index
    @posts = Post.all
    respond_with(@posts)
  end
  
  def show
    @post = Post.find(params[:id])
    respond_with(@post) do |format|
      format.js { render :layout => false}
    end
  end
end
