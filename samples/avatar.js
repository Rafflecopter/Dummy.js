(function() {

if (! (_ && _.pluck && $ && $.getJSON)) {
    return console.log('Both jQuery and Underscore are a requirement for loading avatars');
}

var twurl = 'https://api.twitter.com/1/statuses/public_timeline.json?count=3&include_entities=true&callback=?'
,   twpic = 'https://api.twitter.com/1/users/profile_image?screen_name=@&size=bigger'
,   count = 0


function Avatar(data, options) {
    return data[count++ % data.length];
}

DUMMY.newSample('avatar', Avatar, twurl, function(tweets) {
    var out = []
    data = _.pluck(_.pluck(tweets, 'user'), 'screen_name');

    for (var i=0; i<data.length; i++) {
        out.push(twpic.replace('@', data[i]));
    }

    return out;
});


}());
