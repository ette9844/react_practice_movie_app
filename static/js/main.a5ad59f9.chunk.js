(this.webpackJsonperp_project_2019=this.webpackJsonperp_project_2019||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),i=(a(25),a(2)),c=a.n(i),m=a(13),l=a(14),u=a(15),v=a(18),d=a(16),p=a(19),g=a(17),h=a.n(g);a(44);var y=function(e){var t=e.year,a=e.title,n=e.summary,s=e.poster,o=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},a),r.a.createElement("ul",{className:"movie_genres"},o.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("h5",{className:"movie_year"},t),r.a.createElement("p",{className:"movie_summary"},n.slice(0,100),"...")))},f=(a(45),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(m.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,console.log(n),a.setState({movies:n,isLoading:!1});case 6:case"end":return e.stop()}}),e)}))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.title,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.a5ad59f9.chunk.js.map