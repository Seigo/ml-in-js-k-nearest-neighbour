/*
* Expected keys in object:
* rooms, area, type
*
* Expected: node.js (our custom js file, inconveniently named), nodelist.js
*/

var nodes;

var run = function() {

    nodes = new NodeList(3);
    for (var i in data)
    {
        nodes.add( new Node(data[i]) );
    }
    var random_rooms = Math.round( Math.random() * 10 );
    var random_area = Math.round( Math.random() * 2000 );
    nodes.add( new Node({rooms: random_rooms, area: random_area, type: false}) );

    nodes.determineUnknown();
    nodes.draw("canvas");
};


setInterval(run, 1000);
run();