class Api::MessagesController < ApplicationController
    def index
        messages = Message.all
        render json: messages, only: [:id, :greeting]
    end

    def show
        render json: Message.find(params[:id])
    end
end