(function() {


function SampleDate(options) {
    options.base = options.base || new Date;

    options.before = options.before==0 ? '0s' : options.before;
    options.before = options.before || '2d';
    options.after = options.after==0 ? '0s' : options.after;
    options.after = options.after || '2d';

    var abb = {
         ms:    1
        ,s:     1000
        ,m:     1000 * 60
        ,h:     1000 * 60 * 60
        ,d:     1000 * 60 * 60 * 24
    }

    ,   num = {
             before:    +(/\d+/.exec(options.before)[0])
            ,after:     +(/\d+/.exec(options.after)[0])
        }

    ,   unit = {
             before:    /[a-z]+/.exec(options.before)[0]
            ,after:     /[a-z]+/.exec(options.after)[0]
        }

    ,   before = num.before * abb[unit.before]
    ,   after  = num.after * abb[unit.after]

    return new Date( (+options.base - before) + (~~(Math.random() * (before + after))) );
}

DUMMY.newSample('date', SampleDate);


}());
