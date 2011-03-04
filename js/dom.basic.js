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
      _out = this.filter((function(p1__2233_HASH_){
        return (!(undefined == p1__2233_HASH_));
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



var dom = dom || {};
dom.basic = dom.basic || {};
(function() {

  this.Array = Array;
  
  for(var prop in cljs.core){ this[prop] = cljs.core[prop] };
  
  for(var prop in util){ this[prop] = util[prop] };
  
  for(var prop in html){ this[prop] = html[prop] };
  
  this.tb = common.toolbar;
  
  this.$ = jQuery;
  
  this.rand = (function(){
    return Math["random"]();
  }.bind(this));
  
  this.floor = (function(n){
    return Math["floor"](n);
  }.bind(this));
  
  this.rand_255 = (function(){
    return this.floor((function() {
      var _out = arguments[0];
      for(var _i=1; _i<arguments.length; _i++) {
        _out = _out * arguments[_i];
      }
      return _out;
    }).call(this, 255, this.rand()));
  }.bind(this));
  
  this.css = (function(el, opts){
    return el["css"](opts);
  }.bind(this));
  
  this.animate = (function(el, opts){
    return el["animate"](opts);
  }.bind(this));
  
  this.random_color = (function(){
    return this.str("rgba(", this.rand_255(), ",", this.rand_255(), ",", this.rand_255(), ",", (function() {
      var _out = arguments[0];
      for(var _i=1; _i<arguments.length; _i++) {
        _out = _out + arguments[_i];
      }
      return _out;
    }).call(this, this.rand(), 0.5), ")");
  }.bind(this));
  
  this.move_el = (function(el, body){
    return (function(){
      var new_x = (function() {
        var _out = arguments[0];
        for(var _i=1; _i<arguments.length; _i++) {
          _out = _out * arguments[_i];
        }
        return _out;
      }).call(this, body["width"](), this.rand()),
      new_y = (function() {
        var _out = arguments[0];
        for(var _i=1; _i<arguments.length; _i++) {
          _out = _out * arguments[_i];
        }
        return _out;
      }).call(this, body["height"](), this.rand());
      
      this.css(el, ({
        'background':this.random_color()
      }));
      
      return this.animate(el, ({
        'top':new_y,
        'left':new_x
      }));
    
    }.bind(this))();
  }.bind(this));
  
  this.make_el = (function(body){
    return (function(){
      var el = this.$html([
        "div",
        "mouseover me!"
      ]);
      
      this.css(el, ({
        'backgroundColor':"red",
        'height':100,
        'width':100,
        'margin':"10px",
        'position':"absolute",
        'color':"white",
        'padding':"10px"
      }));
      
      return el["mouseover"]((function(){
        return this.move_el(el, body);
      }.bind(this)));
    
    }.bind(this))();
  }.bind(this));
  
  return this.ready((function(){
    return (function(){
      var body = this.$("body");
      
      this.css(body, ({
        'backgroundImage':"url('images/dombg.jpg')"
      }));
      
      this.append(body, this.tb.toolbar());
      
      return this.append(body, this.make_el(body));
    
    }.bind(this))();
  }.bind(this)))

}).call(dom.basic);