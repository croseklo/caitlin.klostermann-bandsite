// create title of main tag
let title = document.createElement('h1');
let text = document.createTextNode('Shows')
title.appendChild(text); //append text to title
// append title to Id
let element = document.getElementById('shows__page');
element.appendChild(title);


//create array with objects
let shows = [
    [
        ['DATE'], 
        ['Mon Sept 06 2021'],
        ['VENUE'],
        ['Ronald Lane'],
        ['LOCATION'],
        ['San Francisco, CA']
    ],
    [
        ['DATE Tue Sept 21 2021'],
        ['VENUE Pier 3 East'],
        ['LOCATION San Francisco, CA']
    ],
    [
        ['DATE Fri Oct 15 2021'],
        ['VENUE View Lounge'],
        ['LOCATION San Francisco, CA']
    ],
    [
        ['DATE Sat Nov 06 2021'],
        ['VENUE Hyatt Agency'],
        ['LOCATION San Francisco, CA']
    ],
    [
        ['DATE Fri Nov 26 2021'],
        ['VENUE Moscow Center'],
        ['LOCATION San Francisco, CA']
    ],
    [
        ['DATE Wed Dec 15 2021'],
        ['VENUE Press Club'],
        ['LOCATION San Francisco, CA']
    ],
];


let list = document.getElementById('shows__page');
  
shows.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
});


