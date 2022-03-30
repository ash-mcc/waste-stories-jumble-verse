// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19521){
var map__19522 = p__19521;
var map__19522__$1 = cljs.core.__destructure_map.call(null,map__19522);
var m = map__19522__$1;
var n = cljs.core.get.call(null,map__19522__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19523_19551 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19524_19552 = null;
var count__19525_19553 = (0);
var i__19526_19554 = (0);
while(true){
if((i__19526_19554 < count__19525_19553)){
var f_19555 = cljs.core._nth.call(null,chunk__19524_19552,i__19526_19554);
cljs.core.println.call(null,"  ",f_19555);


var G__19556 = seq__19523_19551;
var G__19557 = chunk__19524_19552;
var G__19558 = count__19525_19553;
var G__19559 = (i__19526_19554 + (1));
seq__19523_19551 = G__19556;
chunk__19524_19552 = G__19557;
count__19525_19553 = G__19558;
i__19526_19554 = G__19559;
continue;
} else {
var temp__5753__auto___19560 = cljs.core.seq.call(null,seq__19523_19551);
if(temp__5753__auto___19560){
var seq__19523_19561__$1 = temp__5753__auto___19560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19523_19561__$1)){
var c__4649__auto___19562 = cljs.core.chunk_first.call(null,seq__19523_19561__$1);
var G__19563 = cljs.core.chunk_rest.call(null,seq__19523_19561__$1);
var G__19564 = c__4649__auto___19562;
var G__19565 = cljs.core.count.call(null,c__4649__auto___19562);
var G__19566 = (0);
seq__19523_19551 = G__19563;
chunk__19524_19552 = G__19564;
count__19525_19553 = G__19565;
i__19526_19554 = G__19566;
continue;
} else {
var f_19567 = cljs.core.first.call(null,seq__19523_19561__$1);
cljs.core.println.call(null,"  ",f_19567);


var G__19568 = cljs.core.next.call(null,seq__19523_19561__$1);
var G__19569 = null;
var G__19570 = (0);
var G__19571 = (0);
seq__19523_19551 = G__19568;
chunk__19524_19552 = G__19569;
count__19525_19553 = G__19570;
i__19526_19554 = G__19571;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19572 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19572);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19572)))?cljs.core.second.call(null,arglists_19572):arglists_19572));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19527_19573 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19528_19574 = null;
var count__19529_19575 = (0);
var i__19530_19576 = (0);
while(true){
if((i__19530_19576 < count__19529_19575)){
var vec__19539_19577 = cljs.core._nth.call(null,chunk__19528_19574,i__19530_19576);
var name_19578 = cljs.core.nth.call(null,vec__19539_19577,(0),null);
var map__19542_19579 = cljs.core.nth.call(null,vec__19539_19577,(1),null);
var map__19542_19580__$1 = cljs.core.__destructure_map.call(null,map__19542_19579);
var doc_19581 = cljs.core.get.call(null,map__19542_19580__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19582 = cljs.core.get.call(null,map__19542_19580__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19578);

cljs.core.println.call(null," ",arglists_19582);

if(cljs.core.truth_(doc_19581)){
cljs.core.println.call(null," ",doc_19581);
} else {
}


var G__19583 = seq__19527_19573;
var G__19584 = chunk__19528_19574;
var G__19585 = count__19529_19575;
var G__19586 = (i__19530_19576 + (1));
seq__19527_19573 = G__19583;
chunk__19528_19574 = G__19584;
count__19529_19575 = G__19585;
i__19530_19576 = G__19586;
continue;
} else {
var temp__5753__auto___19587 = cljs.core.seq.call(null,seq__19527_19573);
if(temp__5753__auto___19587){
var seq__19527_19588__$1 = temp__5753__auto___19587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19527_19588__$1)){
var c__4649__auto___19589 = cljs.core.chunk_first.call(null,seq__19527_19588__$1);
var G__19590 = cljs.core.chunk_rest.call(null,seq__19527_19588__$1);
var G__19591 = c__4649__auto___19589;
var G__19592 = cljs.core.count.call(null,c__4649__auto___19589);
var G__19593 = (0);
seq__19527_19573 = G__19590;
chunk__19528_19574 = G__19591;
count__19529_19575 = G__19592;
i__19530_19576 = G__19593;
continue;
} else {
var vec__19543_19594 = cljs.core.first.call(null,seq__19527_19588__$1);
var name_19595 = cljs.core.nth.call(null,vec__19543_19594,(0),null);
var map__19546_19596 = cljs.core.nth.call(null,vec__19543_19594,(1),null);
var map__19546_19597__$1 = cljs.core.__destructure_map.call(null,map__19546_19596);
var doc_19598 = cljs.core.get.call(null,map__19546_19597__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19599 = cljs.core.get.call(null,map__19546_19597__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19595);

cljs.core.println.call(null," ",arglists_19599);

if(cljs.core.truth_(doc_19598)){
cljs.core.println.call(null," ",doc_19598);
} else {
}


var G__19600 = cljs.core.next.call(null,seq__19527_19588__$1);
var G__19601 = null;
var G__19602 = (0);
var G__19603 = (0);
seq__19527_19573 = G__19600;
chunk__19528_19574 = G__19601;
count__19529_19575 = G__19602;
i__19530_19576 = G__19603;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__19547 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19548 = null;
var count__19549 = (0);
var i__19550 = (0);
while(true){
if((i__19550 < count__19549)){
var role = cljs.core._nth.call(null,chunk__19548,i__19550);
var temp__5753__auto___19604__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___19604__$1)){
var spec_19605 = temp__5753__auto___19604__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19605));
} else {
}


var G__19606 = seq__19547;
var G__19607 = chunk__19548;
var G__19608 = count__19549;
var G__19609 = (i__19550 + (1));
seq__19547 = G__19606;
chunk__19548 = G__19607;
count__19549 = G__19608;
i__19550 = G__19609;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__19547);
if(temp__5753__auto____$1){
var seq__19547__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19547__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__19547__$1);
var G__19610 = cljs.core.chunk_rest.call(null,seq__19547__$1);
var G__19611 = c__4649__auto__;
var G__19612 = cljs.core.count.call(null,c__4649__auto__);
var G__19613 = (0);
seq__19547 = G__19610;
chunk__19548 = G__19611;
count__19549 = G__19612;
i__19550 = G__19613;
continue;
} else {
var role = cljs.core.first.call(null,seq__19547__$1);
var temp__5753__auto___19614__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___19614__$2)){
var spec_19615 = temp__5753__auto___19614__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19615));
} else {
}


var G__19616 = cljs.core.next.call(null,seq__19547__$1);
var G__19617 = null;
var G__19618 = (0);
var G__19619 = (0);
seq__19547 = G__19616;
chunk__19548 = G__19617;
count__19549 = G__19618;
i__19550 = G__19619;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19620 = cljs.core.conj.call(null,via,t);
var G__19621 = cljs.core.ex_cause.call(null,t);
via = G__19620;
t = G__19621;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19624 = datafied_throwable;
var map__19624__$1 = cljs.core.__destructure_map.call(null,map__19624);
var via = cljs.core.get.call(null,map__19624__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__19624__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__19624__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19625 = cljs.core.last.call(null,via);
var map__19625__$1 = cljs.core.__destructure_map.call(null,map__19625);
var type = cljs.core.get.call(null,map__19625__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19625__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__19625__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19626 = data;
var map__19626__$1 = cljs.core.__destructure_map.call(null,map__19626);
var problems = cljs.core.get.call(null,map__19626__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__19626__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__19626__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19627 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__19627__$1 = cljs.core.__destructure_map.call(null,map__19627);
var top_data = map__19627__$1;
var source = cljs.core.get.call(null,map__19627__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__19628 = phase;
var G__19628__$1 = (((G__19628 instanceof cljs.core.Keyword))?G__19628.fqn:null);
switch (G__19628__$1) {
case "read-source":
var map__19629 = data;
var map__19629__$1 = cljs.core.__destructure_map.call(null,map__19629);
var line = cljs.core.get.call(null,map__19629__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19629__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19630 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__19630__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19630,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19630);
var G__19630__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19630__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19630__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19630__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19630__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19631 = top_data;
var G__19631__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19631,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19631);
var G__19631__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19631__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19631__$1);
var G__19631__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19631__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19631__$2);
var G__19631__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19631__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19631__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19631__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19631__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19632 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19632,(0),null);
var method = cljs.core.nth.call(null,vec__19632,(1),null);
var file = cljs.core.nth.call(null,vec__19632,(2),null);
var line = cljs.core.nth.call(null,vec__19632,(3),null);
var G__19635 = top_data;
var G__19635__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__19635,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19635);
var G__19635__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__19635__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19635__$1);
var G__19635__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.call(null,G__19635__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19635__$2);
var G__19635__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19635__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19635__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19635__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19635__$4;
}

break;
case "execution":
var vec__19636 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19636,(0),null);
var method = cljs.core.nth.call(null,vec__19636,(1),null);
var file = cljs.core.nth.call(null,vec__19636,(2),null);
var line = cljs.core.nth.call(null,vec__19636,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__19623_SHARP_){
var or__4223__auto__ = (p1__19623_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__19623_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__19639 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19639__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__19639,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19639);
var G__19639__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19639__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19639__$1);
var G__19639__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.call(null,G__19639__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19639__$2);
var G__19639__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__19639__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19639__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19639__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19639__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19628__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19643){
var map__19644 = p__19643;
var map__19644__$1 = cljs.core.__destructure_map.call(null,map__19644);
var triage_data = map__19644__$1;
var phase = cljs.core.get.call(null,map__19644__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__19644__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__19644__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19644__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__19644__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__19644__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__19644__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__19644__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19645 = phase;
var G__19645__$1 = (((G__19645 instanceof cljs.core.Keyword))?G__19645.fqn:null);
switch (G__19645__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19646_19655 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19647_19656 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19648_19657 = true;
var _STAR_print_fn_STAR__temp_val__19649_19658 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19648_19657);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19649_19658);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19641_SHARP_){
return cljs.core.dissoc.call(null,p1__19641_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19647_19656);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19646_19655);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19650_19659 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19651_19660 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19652_19661 = true;
var _STAR_print_fn_STAR__temp_val__19653_19662 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19652_19661);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19653_19662);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19642_SHARP_){
return cljs.core.dissoc.call(null,p1__19642_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19651_19660);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19650_19659);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19645__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
