class Api::GreetingsController < ApplicationController
    def index
        greeting = Message.find(rand(1...5))
        
        render json: greeting
    end
end