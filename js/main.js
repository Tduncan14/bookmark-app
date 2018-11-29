// Listen for form submit
document.getElementById('myForm').addEventListener('submit',saveBookMark);

// saveuninstall_node.s
function saveBookMark(e){
    console.log("hey");
    //get from value
    var siteName = document.getElementById('siteName').value;
    var siteUrl=document.getElementById('siteUrl').value;

   if(!validateForm(siteName,siteUrl)){
       return false
   }


    console.log(siteName);

    // object that saves to local storage

    var bookmark = {
        name: siteName,
        url: siteUrl
    }


    /*/local storage only store strings

    localStorage.setItem('test','Treek World');
    console.log(localStorage.getItem('test'));
    // to delete from local storage
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));

*/
  

    // test the bookmarks
    if(localStorage.getItem('bookmarks')===null){
        // init array
        var bookmarks=[];
        //adds to the array
        bookmarks.push(bookmark);
        // then set to the localStorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
        console.log(bookmark)
    }

    else{
        // get bookmarks from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // add book mark to array
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
          console.log(bookmarks);
    }


    fetchBookmarks();
 
    //resetting the from
    document.getElementById('myForm').reset



    // prevent from submitting
    e.preventDefault();
}

//create the funtcion delete

function deleteBookmark(url){
    console.log(url);
    // get local storage and loop through and delete it
     var bookmarks= JSON.parse(localStorage.getItem('booksmarks'));
     // loop through bookmarks
     for(var i = 0; i < bookmarks.length; i++){
         if(bookmarks[i].url == url){
             // remove from array
             bookmarks.splice(i,1);
         }
     }
     localStorage.setItem('bookmarks' ,JSON.stringify(bookmarks));
       // regrabbing the bookmarks/refetching them
       fetchBookmarks();

}

function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Getout put by 
  console.log(bookmarks)
  console.log("works");
  var bookmarksresults = document.getElementById('bookmarksResults');
  
  //Build output

  bookmarksresults.innerHTML = ''
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;
    bookmarksresults.innerHTML = "<div class='well'>"+
                                 "<h3>" +name+ 
                                 "<button>" +'<a class="btn btn-default" target="_blank" href="">Visit</a> ' +"</button>"+
                                 ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                 "</h3>"+
                                  "</div>"



   }

   var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
   var regex = new RegExp(expression);

   if(!siteUrl.match(regex)){
       alert("please use url");
       return false;
   }



   function validateForm(siteName, siteUrl) {
    if(!siteName || siteUrl){
        alert("please fill in the form");
        return
    }
    

      var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
   }

   return true;
  
}