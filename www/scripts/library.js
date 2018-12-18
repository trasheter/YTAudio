var testLibrary = [
    {
        id: "6ByMa_1vB2s",
        title:"Neuromancer - William Gibson (Full audiobook)", 
        duration: 31649.861,
        currentTime: 7003,
        currentPercent: 0, 
        thumbnailURL: "https://img.youtube.com/vi/6ByMa_1vB2s/0.jpg"
    },
    {
        id: "-IVIrf5DChs",
        title:"Philip Pulmann His Dark Materials Series Book 2 The Subtle Knife Audiobook", 
        duration: 31649.861,
        currentTime: 725,
        currentPercent: 0, 
        thumbnailURL: "https://img.youtube.com/vi/-IVIrf5DChs/0.jpg"
    }
];

// Retrieve the object from storage
var library = JSON.parse(localStorage.getItem('library')); 
if(library==null){
    // Put the object into storage
    localStorage.setItem('library', JSON.stringify(testLibrary));
    library = JSON.parse(localStorage.getItem('library')); 
}


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

function saveLibrary(){
    localStorage.setItem('library', JSON.stringify(library));
}