var library = [{
        id: "bNAeLbEUkfc",
        title:"Dune - Frank Herbert - Audiobook Part 1 Paul Atreides Muad'dib Lady Jessica", 
        duration: 25325,
        currentTime: 1000,
        currentPercent: 3.95,
        thumbnailURL: "https://img.youtube.com/vi/bNAeLbEUkfc/0.jpg"
    },
    {
        id: "6ByMa_1vB2s",
        title:"Neuromancer - William Gibson (Full audiobook)", 
        duration: 31649.861,
        currentTime: 7003,
        currentPercent: 0, 
        thumbnailURL: "https://img.youtube.com/vi/6ByMa_1vB2s/0.jpg"
    }
];


var currentItem = library[0];

$(document).ready(function(){
    createLibraryList();

    selectLibraryItem();
})

function createLibraryList(){
    //Retrieve the template data from the HTML .
    var template = $('#library-template').html();  
    //Compile the template data into a function
    var templateScript = Handlebars.compile(template); 
    var html = templateScript(library);
    //html = 'My name is Ritesh Kumar . I am a developer.' 
    $(".library-items").append(html);
} 

function selectLibraryItem(){
    $(".library-item").on("click",function(){
        var id = $(this).data("id");
        var currentItem = library.filter(obj => {
            return obj.id === id
        }) 
        updatePlayer(currentItem[0])
    })
}