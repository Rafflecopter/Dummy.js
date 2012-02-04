;(function() {

// take a peek at
// https://github.com/goncalossilva/dummy/tree/master/lib/dummy


window.DUMMY = window.DUMMY || {
     _built:    {}
    ,_bound:    {}
    ,_samples:  {}
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
    DUMMY.trigger('built:'+name);
    return DUMMY;
};

DUMMY.clear = function() {
    DUMMY.data = {};
    DUMMY.trigger('clear');
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

        var c = useCache && DUMMY.cache(name)
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

    DUMMY._built = {};

    // Once all sample types are loaded, build the model
    DUMMY.until(
        function cond() {
            for (var x in DUMMY._samples)
                if (! DUMMY._samples[x]._loaded) return false;
            return true;
        }, 

        function callback() {
            for (var x in DUMMY._model) {
                DUMMY
                    .unbind('built:'+x)
                    .bind('built:'+x, function() {
                        DUMMY._built[x] = true;
                    })
                    
                    ._built[x] = false

                _doModel(x);
            }
        }
    );
    
    // Once all parts of the model have been built, announce it
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


//~~ Generate sample data of different types
DUMMY.sample = function(type, options) {
    return DUMMY._samples[type](options);
};

DUMMY.newSample = function(name, func, url, proc) {
    if (url) {
        DUMMY._samples[name] = function(options) {
            return func(DUMMY.cache('sample-'+name), options);
        }
        
        if (!DUMMY.cache('sample-'+name)) {
            proc = proc || function(d){return d};
            return $.getJSON(url, function(data) {
                DUMMY.cache('sample-'+name, proc(data));
                DUMMY.sampleLoaded(name);
            });
        }
    } else {
        DUMMY._samples[name] = func;
    }

    // Only get here if no url or data not cached
    DUMMY.sampleLoaded(name);
};

DUMMY.sampleLoaded = function(name) {
    DUMMY._samples[name]._loaded = true;
};
//~~


}());



