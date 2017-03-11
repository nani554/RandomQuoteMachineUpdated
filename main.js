
$(document).ready(function(){
	var quote,author;
		function getNewQuote(){
			$.ajax({
				//making an ajax call to get api
				jsonp:'jsonp',
				dataType:'jsonp',
				url: "https://api.forismatic.com/api/1.0/",
				data: {
					method: 'getQuote',
					lang: 'en',
					format: 'jsonp'
				},
				success: function(response){
					// success is a callback
					console.log(response.quoteText);
					quote = response.quoteText;
					author = response.quoteAuthor;
					$("#quote").text(quote);
					if(author){
						//if there is any string in author then show this 
						$("#author").text('said by '+ author);
					}
					else{
						$("#author").text("-Unknown");
					}
				}
			});
		}
	$(".get-quote").on("click",function(event){
		event.preventDefault();//it prevents "page up" when browser refreshed
		getNewQuote();
	})
	getNewQuote();
	$(".share-quote").on("click",function(){
		window.open("https://www.twitter.com/intent/tweet?text="+encodeURIComponent(quote+"--"+author));
	})
})
