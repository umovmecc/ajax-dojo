require "rubygems"
require "sinatra"
require "json"

get "/" do
	erb :index
end

get "/cities/:estado" do

	content_type :json
	
	if params[:estado] == "rs"
	
		cities = {:cities => ["Porto Alegre","Alvorada","Gravataí"]}.to_json
		
	elsif params[:estado] == "sc"
	
 		cities = {:cities => ["Florianópolis","Tubarão","Laguna"]}.to_json
		
	elsif params[:estado] == "pr"
	
		cities = {:cities => ["Curitiba","Pato Branco","Cascavél"]}.to_json
	end
	
	cities
end
