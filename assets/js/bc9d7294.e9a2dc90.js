(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(161)),o=["components"],s={title:"Status Guide"},u={unversionedId:"guides/framework/status-guide",id:"guides/framework/status-guide",isDocsHomePage:!1,title:"Status Guide",description:"The Status class instance is a result of a Pipeline execution.",source:"@site/../docs/guides/framework/status-guide.md",slug:"/guides/framework/status-guide",permalink:"/docs/guides/framework/status-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/framework/status-guide.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1642516559,formattedLastUpdatedAt:"1/18/2022",sidebar:"guides",previous:{title:"Pipeline Guide",permalink:"/docs/guides/framework/pipeline-guide"},next:{title:"Design Guide",permalink:"/docs/guides/extension/design-guide"}},l=[{value:"Getting Status",id:"getting-status",children:[]},{value:"Exploring Status",id:"exploring-status",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Status class instance is a result of a Pipeline execution."),Object(i.b)("h2",{id:"getting-status"},"Getting Status"),Object(i.b)("p",null,"We need to run a pipeline to get a status:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import Pipeline, transform, steps\n\npipeline = Pipeline({\n    'tasks': [\n        {\n            'type': 'resource',\n            'source': {'path': 'data/transform.csv'},\n            'steps': [\n                {'code': 'table-normalize'},\n                {'code': 'table-melt', 'fieldName': 'name'}\n            ]\n        }\n    ]\n})\nstatus = transform(pipeline)\n")),Object(i.b)("h2",{id:"exploring-status"},"Exploring Status"),Object(i.b)("p",null,"Let's explore the execution status:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"pprint(status.valid)\npprint(status.task.target.schema)\npprint(status.task.target.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"True\n{'fields': [{'name': 'name', 'type': 'string'},\n            {'name': 'variable'},\n            {'name': 'value'}]}\n[{'name': 'germany', 'variable': 'id', 'value': 1},\n {'name': 'germany', 'variable': 'population', 'value': 83},\n {'name': 'france', 'variable': 'id', 'value': 2},\n {'name': 'france', 'variable': 'population', 'value': 66},\n {'name': 'spain', 'variable': 'id', 'value': 3},\n {'name': 'spain', 'variable': 'population', 'value': 47}]\n")))}p.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);