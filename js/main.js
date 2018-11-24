// Listen for form submit
document.getElementById('myForm').addEventListener('submit',saveBookMark);

// saveuninstall_node.s
function saveBookMark(e){
    console.log("hey");
    //get from value
    var siteName = document.getElementById('siteName').value;
    var siteUrl=document.getElementById('siteUrl').value;
    console.log(siteName);

    // object that saves to local storage

    var bookMark ={
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
        bookmarks.push(bookMark);
        // then set to the localStorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }

    else{
        // get bookmarks from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // add book mark to array
        bookmarks.push(bookMark);
        localStorage.setItem(bookmarks,JSON.stringify(bookmarks));

    }

    // prevent from submitting
    e.preventDefault();
}



function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Getout put by 
  
  console.log("works");
  var bookmarksresults = document.getElementById('bookmarksResults');
  
  //Build output

  bookmarksresults.innerHTML ='tree';
  
}