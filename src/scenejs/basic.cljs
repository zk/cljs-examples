(ns scenejs.basic
  (:use html util)
  (:require [common.toolbar :as tb])
  (:import SceneJS))

(defn body []
  ($ "body"))

(defn canvas []
  (let [width (.width (body))
        height (.height (body))]
    (doto ($html [:canvas {:id "canvas"}])
      (.css {:width width :height height}))))

(def grey {:r 0.5 :g 0.5 :b 0.5})

(defn scene []
  (let [body ($ "body")
        width (.width body)
        height (.height body)]
    (.createNode
     SceneJS
     {:type :scene
      :id :thescene
      :canvasId :canvas
      :nodes [{:type :lookAt
               :eye {:x 0.0 :y 10.0 :z -55}
               :look {:y 1.0}
               :up {:y 1.0}
               :nodes [{:type :camera
                        :optics {:type :perspective
                                 :fovy 25.0
                                 :aspect (/ width height)
                                 :near 0.10
                                 :far 300.0}
                        :nodes [{:type :light
                                 :mode :dir
                                 :color grey
                                 :diffuse true
                                 :specular true
                                 :dir {:x 0.0 :y 1.0 :z -1.0}}
                                {:type :light
                                 :mode :dir
                                 :color grey
                                 :diffuse true
                                 :specular true
                                 :dir {:x 0.0 :y 1.0 :z 1.0}}
                                {:type :light
                                 :mode :dir
                                 :color grey
                                 :diffuse true
                                 :specular true
                                 :dir {:x 1.0 :y 1.0 :z -1.0}}
                                {:type :light
                                 :mode :dir
                                 :color grey
                                 :diffuse true
                                 :specular true
                                 :dir {:x 1.0 :y -1.0 :z -1.0}}
                                {:type :rotate
                                 :id :pitch
                                 :angle 5.0
                                 :x 1.0
                                 :y 1.0
                                 :z 1.0
                                 :nodes [{:type :cube
                                          :xSize 10
                                          :ySize 10}]}]}]}]}))
  (.render (.withNode SceneJS :thescene)))

(defn get-node [name]
  (.withNode SceneJS name))

(def angle 0)

(defn rotate []
  (.set (get-node :pitch) :angle angle)
  (set! angle (inc angle 1))
  (.render (get-node :thescene)))

(ready
 (fn []
   (append ($ "body") (tb/toolbar))
   (append ($ "body") (canvas))
   (scene)
   ('setInterval rotate 10)))
