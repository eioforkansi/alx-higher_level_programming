$(document).ready(function() {
    $.ajax({
        url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
        method: 'GET',
        success: function(data) {
            const movies = data.results;
            let i = 0;
            for (i = 0; i < movies.length(); i++) {
                $("#character").append("<li>movies.name")
            }
        }
    })
})
