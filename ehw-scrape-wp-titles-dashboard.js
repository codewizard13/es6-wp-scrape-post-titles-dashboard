/*
Purpose: Grab list of post titles from while logged into WordPress dashboard
Creator: Eric Hepperle
Date Created: 10/02/18
Date Edited: 02/14/19

Usage:
- Login to wordpress dashboard and navigate to "Posts"
- Paste the code below into browser console and hit enter
- Will give you titles based on which post type tab you are in
(All, Published, Drafts, Private, Trash, etc.)

Returns:
A vertical list of post titles that can be copied from the console
into your favorite spreadsheet application. Total titles quantity
prints at bottom.

Sample Output:
    Industry News
    Meetings
    Newsletters
    Press Releases
    Regional News

*/

console.clear();

var titles = document.querySelectorAll('td[data-colname="Title"] strong');

[...titles].forEach(function(title, i) {
    
    console.log(title.innerText);
    
});

console.log("%cTotal titles: %s", "background: bisque; color: brown; font-weight: bold;", titles.length);
