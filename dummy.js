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

// please oh please refactor me:
DUMMY.build = function(name, options, useCache) {
    function _doModel(mod) {
        // model can be like either:
        //  - func(data){}
        //  - ['url', func(data){}]

        var c = useCache && DUMMY.cache(mod)
        ,   m = DUMMY._model[mod]
        ,   f = (m.length>1) ? m[1] : m
        ,   u = (m.length>1) ? m[0] : false
        ;
    
        if (c) {
            f(c, options);
        } else if (!u) {
            f(options);
        } else if ($ && $.getJSON) {
            $.getJSON(u, function(d) {
                DUMMY.cache(mod, d);
                f(d, options);
            });
        } else if (! ($ && $.getJSON)) {
            console.log('You need [a] jQuery[-compatible library] to auto-fetch JSON');
        }
    }

    if (! DUMMY._model)
        return [false, 'Please provide a model via DUMMY.model()'];

    DUMMY._built = {};

    if (typeof name == 'boolean'){ useCache = name; name=undefined };
    if (typeof options == 'boolean'){ useCache = options; options=undefined };

    // Once all sample types are loaded, build the model
    DUMMY.until(
        function cond() {
            for (var x in DUMMY._samples)
                if (! DUMMY._samples[x]._loaded) return false;
            return true;
        }, 

        function callback() {
            var arr = !name ? DUMMY._model : (function(){var a={};a[name]='';return a}());

            for (var x in arr) {
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
            var arr = !name ? DUMMY._model : (function(){var a={};a[name]='';return a}());
            for (var x in arr)
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



