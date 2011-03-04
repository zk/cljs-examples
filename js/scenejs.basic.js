if(!Function.prototype.bind){Function.prototype.bind = function(scope) {var _function = this;return function() { return _function.apply(scope, arguments); } }}var cljs = cljs || {};
cljs.core = cljs.core || {};
(function() {

  this.Array = Array;
  
  for(var prop in cljs.core){ this[prop] = cljs.core[prop] };
  
  this._ = _;
  
  this.count = (function(col){
    return (function(){
      if(col){
       return col.length;
      } else {
       return 0;
      }
    }.bind(this))();
  }.bind(this));
  
  this.first = (function(col){
    return (function(){
      
      if(!col) return null;
      
      return (col[0]);
    
    }.bind(this))();
  }.bind(this));
  
  this.second = (function(col){
    return this.nth(col, 1);
  }.bind(this));
  
  this.rest = (function(col){
    return (function(){
      
      if(!col) return null;
      
      return this.Array.prototype.slice["call"](col,1);
    
    }.bind(this))();
  }.bind(this));
  
  this.inc = (function(n){
    return (function() {
      var _out = arguments[0];
      for(var _i=1; _i<arguments.length; _i++) {
        _out = _out + arguments[_i];
      }
      return _out;
    }).call(this, n, 1);
  }.bind(this));
  
  this.dec = (function(n){
    return (function() {
      var _out = arguments[0];
      for(var _i=1; _i<arguments.length; _i++) {
        _out = _out - arguments[_i];
      }
      return _out;
    }).call(this, n, 1);
  }.bind(this));
  
  this.nth = (function(col, n){
    return (function(){
      
      if(!(col && (col.length > n))) return null;
      
      return (col[n]);
    
    }.bind(this))();
  }.bind(this));
  
  this.last = (function(col){
    return (col[this.dec(col.length)]);
  }.bind(this));
  
  this.reduce = (function(f, initial, col){
    return (function(){
      var i = (function(){
        if(col){
         return initial;
        } else {
         return null;
        }
      }.bind(this))(),
      c = (function(){
        if(col){
         return col;
        } else {
         return initial;
        }
      }.bind(this))();
      
      return (function(){
        if(i){
         return this._["reduce"](c,f,i);
        } else {
         return this._["reduce"](c,f);
        }
      }.bind(this))();
    
    }.bind(this))();
  }.bind(this));
  
  this.map = (function(f, initial, col){
    return (function(){
      var i = (function(){
        if(col){
         return initial;
        } else {
         return null;
        }
      }.bind(this))(),
      c = (function(){
        if(col){
         return col;
        } else {
         return initial;
        }
      }.bind(this))();
      
      return (function(){
        
        if(!c) return null;
        
        return (function(){
          if(i){
           return this._["map"](c,f,i);
          } else {
           return this._["map"](c,f);
          }
        }.bind(this))();
      
      }.bind(this))();
    
    }.bind(this))();
  }.bind(this));
  
  this.str = (function(){
    var args = Array.prototype.slice.call(arguments, 0);
    return this.reduce((function(col, el){
      return (function() {
        var _out = arguments[0];
        for(var _i=1; _i<arguments.length; _i++) {
          _out = _out + arguments[_i];
        }
        return _out;
      }).call(this, col, el);
    }.bind(this)), "", this.filter((function(p1__403_HASH_){
      return this._["identity"](p1__403_HASH_);
    }.bind(this)), args));
  }.bind(this));
  
  this.println = (function(){
    var args = Array.prototype.slice.call(arguments, 0);
    return console["log"](args);
  }.bind(this));
  
  this.apply = (function(f){
    var args = Array.prototype.slice.call(arguments, 1);
    return (function(){
      var l = this.last(args),
      fs = this.take(this.dec(this.count(args)), args),
      flattened = this.concat(fs, l);
      
      return f["apply"](this,flattened);
    
    }.bind(this))();
  }.bind(this));
  
  this.filter = (function(f, col){
    return (function(){
      if(col){
       return this._["filter"](col,f);
      }
    }.bind(this))();
  }.bind(this));
  
  this.concat = (function(cola, colb){
    return (function(){
      var out = [];
      
      out.push.apply(out, cola);
      
      out.push.apply(out, colb);
      
      return out;
    
    }.bind(this))();
  }.bind(this));
  
  this.take = (function(n, col){
    return col["slice"](0,n);
  }.bind(this));
  
  this.drop = (function(n, col){
    return (function(){
      
      if(!col) return null;
      
      return col["slice"](n);
    
    }.bind(this))();
  }.bind(this));
  
  this.partition = (function(n, col){
    return (function(){
      var f = (function(out, col){
        return (function(){
          if((0 == this.count(col))){
           return out;
          } else {
           return f(this.concat(out, [
            this.take(n, col)
          ]), this.drop(n, col));
          }
        }.bind(this))();
      }.bind(this));
      
      return f([], col);
    
    }.bind(this))();
  }.bind(this));
  
  this.assoc = (function(obj){
    var rest = Array.prototype.slice.call(arguments, 1);
    return (function(){
      var pairs = this.partition(2, rest);
      
      (function() {
        var G__405 = pairs;
        for(var i=0; i < G__405.length; i++) {
          (function(p){(obj[this.first(p)] = this.nth(p, 1))}.bind(this))(G__405[i]);
        }
      }.bind(this))();
      
      return obj;
    
    }.bind(this))();
  }.bind(this));
  
  this.conj = (function(col){
    var rest = Array.prototype.slice.call(arguments, 1);
    (function() {
      var G__406 = rest;
      for(var i=0; i < G__406.length; i++) {
        (function(r){col["push"](r)}.bind(this))(G__406[i]);
      }
    }.bind(this))();
    return col;
  }.bind(this));
  
  this.array_QM_ = (function(o){
    return (o && this._["isArray"](o));
  }.bind(this));
  
  this.object_QM_ = (function(o){
    return (o && (!this.array_QM_(o)) && (!this.string_QM_(o)));
  }.bind(this));
  
  this.string_QM_ = (function(o){
    return this._["isString"](o);
  }.bind(this));
  
  this.element_QM_ = (function(o){
    return (o && (this._["isElement"](o) || this._["isElement"](this.first(o))));
  }.bind(this));
  
  this.merge = (function(){
    var objs = Array.prototype.slice.call(arguments, 0);
    return (function(){
      var o = ({
        
      });
      
      this.map((function(p1__404_HASH_){
        return this._["extend"](o,p1__404_HASH_);
      }.bind(this)), objs);
      
      return o;
    
    }.bind(this))();
  }.bind(this));
  
  this.interpose = (function(o, col){
    return (function(){
      
      if(!col) return null;
      
      return (function(){
        var out = [],
        idx = 0,
        len = this.count(col),
        declen = this.dec(len);
        
        while((idx < len)) {  (function(){
            if((idx == declen)){
             return out["push"]((col[idx]));
            } else {
             return (function(){out["push"]((col[idx]));
            return out["push"](o)}.bind(this))();
            }
          }.bind(this))();
          (idx = this.inc(idx))
        };
        
        return out;
      
      }.bind(this))();
    
    }.bind(this))();
  }.bind(this));
  
  this.distinct = (function(col){
    return _["uniq"](col);
  }.bind(this));
  
  this.identity = (function(arg){
    return (function(){
      if(arg){
       return _["identity"](arg);
      }
    }.bind(this))();
  }.bind(this));
  
  this.empty_QM_ = (function(col){
    return (function(){
      if(this.array_QM_(col)){
        return (0 == col.length);
      } else if(this.object_QM_(col)){
        return _["isEqual"](({
          
        }),col);
      } else {
        throw this.str("Can't call empty? on ", col);;
      }}.bind(this))();
  }.bind(this));
  
  return this.hash_map = (function(){
    var col = Array.prototype.slice.call(arguments, 0);
    return (function(){
      var pairs = this.partition(2, col);
      
      return (function(){
        if(this.empty_QM_(col)){
         return ({
          
        });
        } else {
         return this.reduce((function(m, pair){
          (m[this.first(pair)] = this.second(pair));
          return m;
        }.bind(this)), ({
          
        }), pairs);
        }
      }.bind(this))();
    
    }.bind(this))();
  }.bind(this))

}).call(cljs.core);



var util = util || {};
(function() {

  this.Array = Array;
  
  for(var prop in cljs.core){ this[prop] = cljs.core[prop] };
  
  this.$ = jQuery;
  
  this.RegExp = RegExp;
  
  this.has_el_QM_ = (function(o){
    return (function(){
      if((o && (o["el"]))){
       return true;
      }
    }.bind(this))();
  }.bind(this));
  
  this.append = (function(p, c){
    (function(){
      if(this.array_QM_(c)){
        return this.map((function(c){
          return this.append(p, c);
        }.bind(this)), c);
      } else if(this.has_el_QM_(c)){
        return this.append(p, (c['el']));
      } else {
        return (function(){p["append"](c);
        return (function(){
          
          if(!(c instanceof jQuery)) return null;
          
          return c["trigger"]("postinsert");
        
        }.bind(this))()}.bind(this))();
      }}.bind(this))();
    return p;
  }.bind(this));
  
  this.replace_in = (function(p, c){
    p["empty"]();
    return this.append(p, c);
  }.bind(this));
  
  this.take = (function(n, o){
    return (function(){
      if(this.string_QM_(o)){
        return o["substring"](0,n);
      }}.bind(this))();
  }.bind(this));
  
  this.apply_str = (function(ss){
    return this.reduce((function(col, s){
      return (function() {
        var _out = arguments[0];
        for(var _i=1; _i<arguments.length; _i++) {
          _out = _out + arguments[_i];
        }
        return _out;
      }).call(this, col, s);
    }.bind(this)), ss);
  }.bind(this));
  
  this.ellipsis = (function(s, n){
    return (function(){
      if((s.length > n)){
       return this.str(s["substring"](0,n), "...");
      } else {
       return s;
      }
    }.bind(this))();
  }.bind(this));
  
  this.make_url_friendly = (function(s){
    return (function(){  var _out = s;
      _out = _out["replace"]((new this.RegExp("-","g")),"_");
      _out = _out["replace"]((new this.RegExp(" ","g")),"_");
      _out = _out["toLowerCase"]();
      return _out;}.bind(this))();
  }.bind(this));
  
  this.ready = (function(f){
    return this.$(document)["ready"](f);
  }.bind(this));
  
  this.has_layout_QM_ = (function(o){
    return (function(){
      
      if(!o) return null;
      
      return (o["layout"]);
    
    }.bind(this))();
  }.bind(this));
  
  return this.ajax = (function(opts){
    return this.$["ajax"](opts);
  }.bind(this))

}).call(util);



var html = html || {};
(function() {

  this.Array = Array;
  
  for(var prop in cljs.core){ this[prop] = cljs.core[prop] };
  
  for(var prop in util){ this[prop] = util[prop] };
  
  this.$ = jQuery;
  
  this.parse_attrs = (function(args){
    return (function(){
      var attr_arg = this.nth(args, 1);
      
      return (function(){
        if((attr_arg instanceof jQuery)){
          return ({
            
          });
        } else if(this.object_QM_(attr_arg)){
          return attr_arg;
        } else {
          return ({
            
          });
        }}.bind(this))();
    
    }.bind(this))();
  }.bind(this));
  
  this.parse_body = (function(args){
    return (function(){
      var body = (function(){
        if((this.nth(args, 1) instanceof jQuery)){
          return this.drop(1, args);
        } else if(this.object_QM_(this.nth(args, 1))){
          return this.drop(2, args);
        } else {
          return this.drop(1, args);
        }}.bind(this))();
      
      return (function(){var _out = body;
      _out = this.filter(this._.identity, _out);
      _out = this.filter((function(p1__2232_HASH_){
        return (!(undefined == p1__2232_HASH_));
      }.bind(this)), _out);
      return _out;}.bind(this))();
    
    }.bind(this))();
  }.bind(this));
  
  this.html = (function(args){
    return (function(){
      if(this.string_QM_(args)){
        return args;
      } else if(this.element_QM_(args)){
        return args;
      } else if(this.element_QM_(this.first(args))){
        return args;
      } else if((args instanceof jQuery)){
        return args;
      } else if(this.array_QM_(this.first(args))){
        return this.map(this.html, args);
      } else if(this.has_el_QM_(args)){
        return (args['el']);
      } else if(true){
        return (function(){
          var as = this.filter(this._.identity, args),
          tag = this.first(as),
          attrs = this.parse_attrs(as),
          body = this.parse_body(as),
          el = this.$(this.str("<", tag, "/>"));
          
          (function(){
            if(attrs){
             return el["attr"](attrs);
            }
          }.bind(this))();
          
          return this.append(el, this.map(this.html, body));
        
        }.bind(this))();
      }}.bind(this))();
  }.bind(this));
  
  return this.$html = (function(args){
    return this.$(this.html(args));
  }.bind(this))

}).call(html);



var common = common || {};
common.toolbar = common.toolbar || {};
(function() {

  this.Array = Array;
  
  for(var prop in cljs.core){ this[prop] = cljs.core[prop] };
  
  for(var prop in util){ this[prop] = util[prop] };
  
  for(var prop in html){ this[prop] = html[prop] };
  
  this.tb_style = ({
    'position':"fixed",
    'padding':"10px",
    'borderRadius':"0 0 5px 5px",
    'zIndex':999,
    'opacity':0.9,
    'backgroundColor':"white",
    'right':"20px",
    'left':"20px",
    'borderRight':"solid #ccc 3px",
    'borderLeft':"solid #ccc 3px",
    'borderBottom':"solid #ccc 3px"
  });;
  
  return this.toolbar = (function(){
    return (function(){
      var body = this.$("body"),
      el = this.$html([
        "div",
        ({
          'class':"toolbar"
        }),
        "TOOLBAR"
      ]);
      
      el["css"](this.tb_style);
      
      return el;
    
    }.bind(this))();
  }.bind(this))

}).call(common.toolbar);



var scenejs = scenejs || {};
scenejs.basic = scenejs.basic || {};
(function() {

  this.Array = Array;
  
  for(var prop in cljs.core){ this[prop] = cljs.core[prop] };
  
  for(var prop in html){ this[prop] = html[prop] };
  
  for(var prop in util){ this[prop] = util[prop] };
  
  this.tb = common.toolbar;
  
  this.SceneJS = SceneJS;
  
  this.body = (function(){
    return this.$("body");
  }.bind(this));
  
  this.canvas = (function(){
    return (function(){
      var width = this.body()["width"](),
      height = this.body()["height"]();
      
      return (function(){var _out = this.$html([
        "canvas",
        ({
          'id':"canvas"
        })
      ]);
      _out["css"](({
        'width':width,
        'height':height
      }));
      return _out}.bind(this)());
    
    }.bind(this))();
  }.bind(this));
  
  this.grey = ({
    'r':0.5,
    'g':0.5,
    'b':0.5
  });;
  
  this.scene = (function(){
    (function(){
      var body = this.$("body"),
      width = body["width"](),
      height = body["height"]();
      
      return this.SceneJS["createNode"](({
        'type':"scene",
        'id':"thescene",
        'canvasId':"canvas",
        'nodes':[
          ({
            'type':"lookAt",
            'eye':({
              'x':0.0,
              'y':10.0,
              'z':-55
            }),
            'look':({
              'y':1.0
            }),
            'up':({
              'y':1.0
            }),
            'nodes':[
              ({
                'type':"camera",
                'optics':({
                  'type':"perspective",
                  'fovy':25.0,
                  'aspect':(function() {
                    var _out = arguments[0];
                    for(var _i=1; _i<arguments.length; _i++) {
                      _out = _out / arguments[_i];
                    }
                    return _out;
                  }).call(this, width, height),
                  'near':0.1,
                  'far':300.0
                }),
                'nodes':[
                  ({
                    'type':"light",
                    'mode':"dir",
                    'color':this.grey,
                    'diffuse':true,
                    'specular':true,
                    'dir':({
                      'x':0.0,
                      'y':1.0,
                      'z':-1.0
                    })
                  }),
                  ({
                    'type':"light",
                    'mode':"dir",
                    'color':this.grey,
                    'diffuse':true,
                    'specular':true,
                    'dir':({
                      'x':0.0,
                      'y':1.0,
                      'z':1.0
                    })
                  }),
                  ({
                    'type':"light",
                    'mode':"dir",
                    'color':this.grey,
                    'diffuse':true,
                    'specular':true,
                    'dir':({
                      'x':1.0,
                      'y':1.0,
                      'z':-1.0
                    })
                  }),
                  ({
                    'type':"light",
                    'mode':"dir",
                    'color':this.grey,
                    'diffuse':true,
                    'specular':true,
                    'dir':({
                      'x':1.0,
                      'y':-1.0,
                      'z':-1.0
                    })
                  }),
                  ({
                    'type':"rotate",
                    'id':"pitch",
                    'angle':5.0,
                    'x':1.0,
                    'y':1.0,
                    'z':1.0,
                    'nodes':[
                      ({
                        'type':"cube",
                        'xSize':10,
                        'ySize':10
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }));
    
    }.bind(this))();
    return this.SceneJS["withNode"]("thescene")["render"]();
  }.bind(this));
  
  this.get_node = (function(name){
    return this.SceneJS["withNode"](name);
  }.bind(this));
  
  this.angle = 0;;
  
  this.rotate = (function(){
    this.get_node("pitch")["set"]("angle",this.angle);
    (this.angle = this.inc(this.angle, 1));
    return this.get_node("thescene")["render"]();
  }.bind(this));
  
  return this.ready((function(){
    this.append(this.$("body"), this.tb.toolbar());
    this.append(this.$("body"), this.canvas());
    this.scene();
    return setInterval(this.rotate, 10);
  }.bind(this)))

}).call(scenejs.basic);