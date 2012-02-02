;(function() {



window.DUMMY = window.DUMMY || {
     _built:    {}
    ,_bound:    {}
    ,data:      {}
};


//~~ ultra-simple utils
DUMMY.bind = function(evt, callback) {
    DUMMY._bound[evt] = DUMMY._bound[evt] || [];
    DUMMY._bound[evt].push(callback);
    return DUMMY;
};

DUMMY.trigger = function(evt) {
    if (! DUMMY._bound[evt]) return;
    
    for (var i=0; i<this._bound[evt].length; i++)
        this._bound[evt][i]();
    
    return DUMMY;
};

DUMMY.unbind = function(evt) {
    delete DUMMY._bound[evt];
    return DUMMY;
};

DUMMY.until = function(cond, callback, freq) {
    freq = freq || 250;
    var check = setInterval(function() {
        if (! cond()) return;

        clearTimeout(check);
        callback();
    }, freq);
};
//~~


//~~ save data for access later
DUMMY.set = function(name, data) {
    DUMMY.data[name] = data;
    return DUMMY;
};

DUMMY.clear = function() {
    DUMMY.data = {};
    return DUMMY;
};
//~~


//~~ cache results of async calls
DUMMY.cache = function(name, data) {
    var c = JSON.parse(localStorage.getItem('dummy-cache')) || {};
    
    if (!! data) {
        c[name] = data;
        localStorage.setItem('dummy-cache', JSON.stringify(c));
    } else {
        return c[name];
    }
};

DUMMY.clearCache = function() {
    localStorage.removeItem('dummy-cache');
    return DUMMY;
};
//~~


//~~ The stars of the show
DUMMY.model = function(m) {
    if (!m) return DUMMY._model;

    DUMMY._model = m;
    return DUMMY;
};

DUMMY.build = function(useCache) {
    function _doModel(name) {
        // model can be like either:
        //  - func(data){}
        //  - ['url', func(data){}]

        var c = useCache && DUMMY.cache(x)
        ,   m = DUMMY._model[name]
        ,   f = !!m.length ? m[1] : m
        ,   u = !!m.length ? m[0] : false
    
        if (c) {
            f(c);
        } else if (!u) {
            f();
        } else if ($ && $.getJSON) {
            $.getJSON(u, function(d) {
                DUMMY.cache(name, d);
                f(d);
            });
        } else if (! ($ && $.getJSON)) {
            console.log('You need [a] jQuery[-compatible library] to auto-fetch JSON');
        }
    }

    if (! DUMMY._model)
        return [false, 'Please provide a model via DUMMY.model()'];

    useCache = useCache || (useCache == undefined);

    DUMMY._built = {};
    for (var x in DUMMY._model) {
        DUMMY
            .unbind('built:'+x)
            .bind('built:'+x, function() {
                DUMMY._built[x] = true;
            })
            
            ._built[x] = false

        _doModel(x);
    }
    
    DUMMY.until(
        function cond() {
            for (var x in DUMMY._model)
                if (! DUMMY._built[x]) return false;
            return true;
        }
    
        ,function callback() {
            DUMMY.trigger('all-done');
        }
    );

    return DUMMY;
};
//~~



}());


