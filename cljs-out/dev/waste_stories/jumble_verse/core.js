// Compiled by ClojureScript 1.10.866 {:optimizations :whitespace}
goog.provide('waste_stories.jumble_verse.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('hiccups.runtime');
goog.require('waste_stories.jumble_verse.slides');
waste_stories.jumble_verse.core.options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hash","hash",-13781596),true,new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"controlsTutorial","controlsTutorial",-1671684530),true,new cljs.core.Keyword(null,"progress","progress",244323547),false,new cljs.core.Keyword(null,"transition","transition",765692007),"fade",new cljs.core.Keyword(null,"slideNumber","slideNumber",1553611975),false,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [RevealNotes], null)], null));
/**
 * Get list of all slides and convert them to html strings.
 */
waste_stories.jumble_verse.core.convert = (function waste_stories$jumble_verse$core$convert(){
var slides = waste_stories.jumble_verse.slides.all.call(null);
return clojure.string.join.call(null,cljs.core.map.call(null,(function (p1__9832_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,p1__9832_SHARP_));
}),slides));
});
/**
 * Get all slides, set them as innerHTML and reinitialize Reveal.js
 */
waste_stories.jumble_verse.core.main = (function waste_stories$jumble_verse$core$main(){
(goog.dom.getElement("slides").innerHTML = waste_stories.jumble_verse.core.convert.call(null));

Reveal.initialize(waste_stories.jumble_verse.core.options);

return Reveal.setState(Reveal.getState());
});
waste_stories.jumble_verse.core.main.call(null);
