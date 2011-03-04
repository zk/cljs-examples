(ns dom.basic
  (:use util html)
  (:require [common.toolbar :as tb])
  (:import [jQuery :as $]))

(defn rand []
  (.random 'Math))

(defn floor [n]
  (.floor 'Math n))

(defn rand-255 []
  (floor (* 255 (rand))))

(defn css [el opts]
  (.css el opts))

(defn animate [el opts]
  (.animate el opts))

(defn random-color []
  (str
   "rgba("
   (rand-255) ","
   (rand-255) ","
   (rand-255) ","
   (+ (rand) 0.5)
   ")"))

(defn move-el [el body]
  (let [new-x (* (.width body)
                 (rand))
        new-y (* (.height body)
                 (rand))]
    (css el {:background (random-color)})
    (animate el {:top new-y :left new-x})))

(defn make-el [body]
  (let [el ($html [:div "mouseover me!"])]
    (css el {:backgroundColor "red"
             :height 100
             :width 100
             :margin "10px"
             :position "absolute"
             :color "white"
             :padding "10px"})
    (.mouseover el #(move-el el body))))

(ready
 (fn []
   (let [body ($ "body")]
     (css body {:backgroundImage "url('images/dombg.jpg')"})
     (append body (tb/toolbar))
     (append body (make-el body)))))
