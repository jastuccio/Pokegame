(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),s=(n(15),n(1)),o=n(2),p=n(4),l=n(3),m=n(5),u=n(8),d=(n(16),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png");return r.a.createElement("div",{className:"Pokecard"},r.a.createElement("h1",{className:"Pokecard-title"},this.props.name),r.a.createElement("div",{className:"Pokecard-image"},r.a.createElement("img",{src:t,alt:this.props.name})),r.a.createElement("div",{className:"-Pokecardata"},"Type: ",this.props.type),r.a.createElement("div",{className:"Pokecard-data"},"EXP: ",this.props.exp))}}]),t}(a.Component)),b=(n(17),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return e=this.props.isWinner?r.a.createElement("h1",{className:"Pokedex-winner"},"Winning Hand"):r.a.createElement("h1",{className:"Pokedex-loser"},"Losing Hand"),r.a.createElement("div",{className:"Pokedex"},e,r.a.createElement("h4",null,"Total Experience: ",this.props.exp),r.a.createElement("div",{className:"Pokedex-cards"},this.props.pokemon.map(function(e){return r.a.createElement(d,{id:e.id,name:e.name,type:e.type,exp:e.base_experience})})))}}]),t}(a.Component)),h=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=[],t=Object(u.a)(this.props.pokemon);e.length<t.length;){var n=Math.floor(Math.random()*t.length),a=t.splice(n,1)[0];e.push(a)}var c=e.reduce(function(e,t){return e+t.base_experience},0),i=t.reduce(function(e,t){return e+t.base_experience},0);return r.a.createElement("div",null,r.a.createElement(b,{pokemon:e,exp:c,isWinner:c>i}),r.a.createElement(b,{pokemon:t,exp:i,isWinner:i>c}))}}]),t}(a.Component);h.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var f=h,k=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))}}]),t}(a.Component);i.a.render(r.a.createElement(k,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.b5d3a80d.chunk.js.map