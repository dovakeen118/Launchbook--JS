// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('form')[0];

// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sideBar = document.getElementById('sidebar-left');

// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];

// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
sideBar.getElementsByClassName('favorites')[0].getElementsByTagName('h5')[0].innerHTML = 'Least Favs';

// Exercise 5): Find the first of the ads in the sidebar and hide it.
let hideOneAd = document.getElementsByClassName('ad-slot')[0];
hideOneAd.style.visibility = 'hidden';

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
hideOneAd.style.visibility = 'visible';

// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
adTwo.getElementsByTagName('img')[0].setAttribute('src', 'http://placebear.com/200/300');

// Exercise 8): Find Sam's post and change its text to something incredible.
let posts = document.getElementById('list-of-posts');
posts.getElementsByTagName('p')[4].innerHTML = "Sam is incredible"

// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
firstPost = document.getElementById('list-of-posts').getElementsByTagName('li')[0]
firstPost.className = firstPost.className + ' post-liked'

// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
secondPost = document.getElementById('list-of-posts').getElementsByTagName('li')[7]
secondPost.className = secondPost.className + ' post-shared'
