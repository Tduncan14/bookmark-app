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


    //local storage only store strings

    localStorage.setItem('test','Treek World');
    console.log(localStorage.getItem('test'));
    // to delete from local storage
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));


  
    console.log(bookMark);

    // prevent from submitting
    e.preventDefault();
}