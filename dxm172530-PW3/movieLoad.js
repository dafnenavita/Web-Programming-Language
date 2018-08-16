$(document).ready(function(){
	$.ajax({
		 type : "GET",
		 url: "movies.xml",
		 dataType: "xml",
		 success: function(data) {
			  $("#movietable").append("<tr><th>Title</th><th>Genre</th><th>Mpaa-rating</th><th>Director</th><th>Cast</th><th>Short description</th><th>IMDB-rating</th></tr>")	  
		      $(data).find('movie').each(function(){
			
			var title = $(this).find('title').text();
			var genre = [];
			$(this).find('genre').each(function(index, obj)
			{
				genre.push($(this).text());
			});
			var mparating = $(this).find('mpaa-rating').text();
			var director = $(this).find('director').text();
			var cast = [];
			$(this).find('cast').each(function(index,obj){
				$(this).find('person').each(function(index,obj){
					cast.push($(this).attr('name')); 
			});
			});
			var description = $(this).find('imdb-info synopsis').text();
			var imdb = $(this).find('imdb-info score').text();
			var html = '<tr><td>' + title + '</td><td>' + genre + '</td><td>' + mparating + '</td><td>' + director + '</td><td>' + cast +'</td><td>'
			+ description + '</td><td>' + imdb + '</td></tr>';
			$("#movietable").append(html)
		        });

		 },
		 error: function() { alert("error loading file");  }
     }); 
});
