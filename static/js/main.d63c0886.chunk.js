(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(3),i=n.n(a),o=n(4),s=n(5),l=n(6),u=n(8),d=n(7),j=n(0),b=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Good:",t]}),Object(j.jsxs)("li",{children:["Neutral:",n]}),Object(j.jsxs)("li",{children:["Bad:",c]}),Object(j.jsxs)("li",{children:["Total:",r]}),Object(j.jsxs)("li",{children:["Positive feedback: ",0!==r?Math.floor(a):0,"%"]})]})},h=function(e){var t=e.options,n=e.handleClickButton;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)("button",{onClick:function(){return n(e)},children:e},"elem")}))})},O=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:t}),n]})},f=function(e){var t=e.message;return Object(j.jsx)("p",{children:t})},v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.handleClickButton=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(e,t){return t/e*100},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(e,this.state.good);return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{title:"Please leave feedback",children:Object(j.jsx)(h,{options:["good","bad","neutral"],handleClickButton:this.handleClickButton})}),Object(j.jsx)(O,{title:"Statistics",children:0!==e?Object(j.jsx)(b,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t}):Object(j.jsx)(f,{message:"No feedback given"})})]})}}]),n}(r.a.Component);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d63c0886.chunk.js.map