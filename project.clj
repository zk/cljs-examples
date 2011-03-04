(defproject cljs-examples "0.1-SNAPSHOT"
  :description "Examples for cljs. http://github.com/zkim/cljs"
  :dependencies [[org.clojure/clojure "1.2.0"]
                 [org.clojure/clojure-contrib "1.2.0"]]
  :dev-dependencies [[swank-clojure "1.2.0"]
                     [cljs "0.1-SNAPSHOT"]
                     [cljs-contrib "0.1-SNAPSHOT"]
                     [lein-cljs "0.1-SNAPSHOT"]]
  :cljs {:source-path "src"
         :source-output-path "resources/js"
         :test-path "test"
         :test-output-path "resources/test/js"
         :source-libs [scenejs.basic
                       dom.basic]})
