(ns common.toolbar
  (:use util html))

(def tb-style {:backgroundColor :white
               :position :fixed
               :left :20px
               :right :20px
               :padding "10px"
               :borderLeft "solid #ccc 3px"
               :borderRight "solid #ccc 3px"
               :borderBottom "solid #ccc 3px"
               :borderRadius "0 0 5px 5px"
               :opacity 0.9
               :zIndex 999})

(defn toolbar []
  (let [body ($ "body")
        el ($html [:div {:class "toolbar"}
                   "TOOLBAR"])]
    (.css el tb-style)
    #_(.mouseout el (fn []
                    (.stop el)
                    (.animate el {:top (str "-" (- (.outerHeight el) 15) "px")})))
    #_(.mouseover el (fn []
                     (.stop el)
                     (.animate el {:top "5px"})))
    el))
