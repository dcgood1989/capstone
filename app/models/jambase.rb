class JamBaseAPI

  def initialize
    @conn = Faraday.new(:url => 'http://api.songkick.com/api/3.0/artists/{artist_id}/calendar.json?apikey={2rJllLeTexh4BDAv}')
  end

end
