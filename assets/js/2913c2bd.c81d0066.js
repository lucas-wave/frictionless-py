(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{161:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return s}));var t=r(0),b=r.n(t);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,b=function(e,n){if(null==e)return{};var r,t,b={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(b[r]=e[r]);return b}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(b[r]=e[r])}return b}var c=b.a.createContext({}),p=function(e){var n=b.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=p(e.components);return b.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return b.a.createElement(b.a.Fragment,{},n)}},O=b.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),O=t,s=d["".concat(i,".").concat(O)]||d[O]||u[O]||l;return r?b.a.createElement(s,a(a({ref:n},c),{},{components:r})):b.a.createElement(s,a({ref:n},c))}));function s(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=O;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:t,i[1]=a;for(var c=2;c<l;c++)i[c]=r[c];return b.a.createElement.apply(null,i)}return b.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},92:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return o})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return d}));var t=r(3),b=r(8),l=(r(0),r(161)),i=["components"],a={title:"Errors Reference"},o={unversionedId:"references/errors-reference",id:"references/errors-reference",isDocsHomePage:!1,title:"Errors Reference",description:"This work is based on Data Quality Spec",source:"@site/../docs/references/errors-reference.md",slug:"/references/errors-reference",permalink:"/docs/references/errors-reference",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/references/errors-reference.md",version:"current",lastUpdatedBy:"Paul Girard",lastUpdatedAt:1642430500,formattedLastUpdatedAt:"1/17/2022",sidebar:"references",previous:{title:"Formats Reference",permalink:"/docs/references/formats-reference"},next:{title:"Checks Reference",permalink:"/docs/references/checks-reference"}},c=[{value:"General Error",id:"general-error",children:[]},{value:"Row Error",id:"row-error",children:[]},{value:"Cell Error",id:"cell-error",children:[]},{value:"Extra Cell",id:"extra-cell",children:[]},{value:"Missing Cell",id:"missing-cell",children:[]},{value:"Type Error",id:"type-error",children:[]},{value:"Constraint Error",id:"constraint-error",children:[]},{value:"Unique Error",id:"unique-error",children:[]},{value:"Truncated Value",id:"truncated-value",children:[]},{value:"Forbidden Value",id:"forbidden-value",children:[]},{value:"Sequential Value",id:"sequential-value",children:[]},{value:"Error",id:"error",children:[]},{value:"File Error",id:"file-error",children:[]},{value:"Hash Count Error",id:"hash-count-error",children:[]},{value:"Byte Count Error",id:"byte-count-error",children:[]},{value:"Package Error",id:"package-error",children:[]},{value:"Resource Error",id:"resource-error",children:[]},{value:"Pipeline Error",id:"pipeline-error",children:[]},{value:"Inquiry Error",id:"inquiry-error",children:[]},{value:"Control Error",id:"control-error",children:[]},{value:"Dialect Error",id:"dialect-error",children:[]},{value:"Layout Error",id:"layout-error",children:[]},{value:"Schema Error",id:"schema-error",children:[]},{value:"Field Error",id:"field-error",children:[]},{value:"Report Error",id:"report-error",children:[]},{value:"Status Error",id:"status-error",children:[]},{value:"Check Error",id:"check-error",children:[]},{value:"Step Error",id:"step-error",children:[]},{value:"Source Error",id:"source-error",children:[]},{value:"Scheme Error",id:"scheme-error",children:[]},{value:"Format Error",id:"format-error",children:[]},{value:"Encoding Error",id:"encoding-error",children:[]},{value:"Hashing Error",id:"hashing-error",children:[]},{value:"Compression Error",id:"compression-error",children:[]},{value:"Storage Error",id:"storage-error",children:[]},{value:"Task Error",id:"task-error",children:[]},{value:"Table Error",id:"table-error",children:[]},{value:"Header Error",id:"header-error",children:[]},{value:"Blank Header",id:"blank-header",children:[]},{value:"Label Error",id:"label-error",children:[]},{value:"Extra Label",id:"extra-label",children:[]},{value:"Missing Label",id:"missing-label",children:[]},{value:"Blank Label",id:"blank-label",children:[]},{value:"Duplicate Label",id:"duplicate-label",children:[]},{value:"Incorrect Label",id:"incorrect-label",children:[]},{value:"Blank Row",id:"blank-row",children:[]},{value:"PrimaryKey Error",id:"primarykey-error",children:[]},{value:"ForeignKey Error",id:"foreignkey-error",children:[]},{value:"Duplicate Row",id:"duplicate-row",children:[]},{value:"Row Constraint",id:"row-constraint",children:[]},{value:"Field Count Error",id:"field-count-error",children:[]},{value:"Row Count Error",id:"row-count-error",children:[]},{value:"Table dimensions error",id:"table-dimensions-error",children:[]},{value:"Deviated Value",id:"deviated-value",children:[]}],p={toc:c};function d(e){var n=e.components,r=Object(b.a)(e,i);return Object(l.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This work is based on ",Object(l.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/data-quality-spec"},"Data Quality Spec"))),Object(l.b)("p",null,"This document provides a full reference to the Frictionless errors."),Object(l.b)("h2",{id:"general-error"},"General Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"general-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"General error: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"There is an error.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"row-error"},"Row Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"row-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Row Error")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Row Error")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"cell-error"},"Cell Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"cell-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row #cell")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Cell Error")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Cell Error")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"extra-cell"},"Extra Cell"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"extra-cell")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row #cell")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},'Row at position "{rowPosition}" has an extra value in field at position "{fieldPosition}"')," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"This row has more values compared to the header row (the first row in the data source). A key concept is that all the rows in tabular data must have the same number of columns.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"missing-cell"},"Missing Cell"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"missing-cell")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row #cell")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},'Row at position "{rowPosition}" has a missing cell in field "{fieldName}" at position "{fieldPosition}"')," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"This row has less values compared to the header row (the first row in the data source). A key concept is that all the rows in tabular data must have the same number of columns.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"type-error"},"Type Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"type-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row #cell")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},'Type error in the cell "{cell}" in row "{rowPosition}" and field "{fieldName}" at position "{fieldPosition}": {note}')," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"The value does not match the schema type and format for this field.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"constraint-error"},"Constraint Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"constraint-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row #cell")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},'The cell "{cell}" in row at position "{rowPosition}" and field "{fieldName}" at position "{fieldPosition}" does not conform to a constraint: {note}')," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"A field value does not conform to a constraint.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"unique-error"},"Unique Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"unique-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row #cell")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},'Row at position "{rowPosition}" has unique constraint violation in field "{fieldName}" at position "{fieldPosition}": {note}')," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"This field is a unique field but it contains a value that has been used in another row.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"truncated-value"},"Truncated Value"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"truncated-value")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row #cell")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The cell {cell} in row at position {rowPosition} and field {fieldName} at position {fieldPosition} has an error: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"The value is possible truncated.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"forbidden-value"},"Forbidden Value"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"forbidden-value")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row #cell")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The cell {cell} in row at position {rowPosition} and field {fieldName} at position {fieldPosition} has an error: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"The value is forbidden.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"sequential-value"},"Sequential Value"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"sequential-value")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row #cell")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The cell {cell} in row at position {rowPosition} and field {fieldName} at position {fieldPosition} has an error: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"The value is not sequential.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"error"},"Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"{note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Error")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"file-error"},"File Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"file-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#file")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"General file error: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"There is a file error.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"hash-count-error"},"Hash Count Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"hash-count-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#file")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The data source does not match the expected hash count: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"This error can happen if the data is corrupted.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"byte-count-error"},"Byte Count Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"byte-count-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#file")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The data source does not match the expected byte count: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"This error can happen if the data is corrupted.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"package-error"},"Package Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"package-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The data package has an error: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"A validation cannot be processed.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"resource-error"},"Resource Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"resource-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The data resource has an error: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"A validation cannot be processed.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"pipeline-error"},"Pipeline Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"pipeline-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Pipeline is not valid: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Provided pipeline is not valid.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"inquiry-error"},"Inquiry Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"inquiry-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Inquiry is not valid: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Provided inquiry is not valid.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"control-error"},"Control Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"control-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Control is not valid: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Provided control is not valid.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"dialect-error"},"Dialect Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"dialect-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Dialect is not valid: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Provided dialect is not valid.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"layout-error"},"Layout Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"layout-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Layout is not valid: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Provided layout is not valid.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"schema-error"},"Schema Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"schema-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Schema is not valid: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Provided schema is not valid.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"field-error"},"Field Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"field-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Field is not valid: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Provided field is not valid.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"report-error"},"Report Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"report-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Report is not valid: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Provided report is not valid.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"status-error"},"Status Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"status-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Status is not valid: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Provided status is not valid.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"check-error"},"Check Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"check-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Check is not valid: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Provided check is not valid")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"step-error"},"Step Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"step-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Step is not valid: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Provided step is not valid")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"source-error"},"Source Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"source-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The data source has not supported or has inconsistent contents: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Data reading error because of not supported or inconsistent contents.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"scheme-error"},"Scheme Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"scheme-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The data source could not be successfully loaded: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Data reading error because of incorrect scheme.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"format-error"},"Format Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"format-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The data source could not be successfully parsed: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Data reading error because of incorrect format.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"encoding-error"},"Encoding Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"encoding-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The data source could not be successfully decoded: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Data reading error because of an encoding problem.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"hashing-error"},"Hashing Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"hashing-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The data source could not be successfully hashed: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Data reading error because of a hashing problem.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"compression-error"},"Compression Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"compression-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The data source could not be successfully decompressed: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Data reading error because of a decompression problem.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"storage-error"},"Storage Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"storage-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The storage has an error: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"A storage's operation cannot be performed")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"task-error"},"Task Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"task-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"-")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The task has an error: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"General task-level error.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"table-error"},"Table Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"table-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"General table error: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"There is a table error.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"header-error"},"Header Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"header-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #header")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Cell Error")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Cell Error")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"blank-header"},"Blank Header"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"blank-header")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #header")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Header is completely blank")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"This header is empty. A header should contain at least one value.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"label-error"},"Label Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"label-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #header #label")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Label Error")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Label Error")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"extra-label"},"Extra Label"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"extra-label")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #header #label")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},'There is an extra label "{label}" in header at position "{fieldPosition}"')," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"The header of the data source contains label that does not exist in the provided schema.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"missing-label"},"Missing Label"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"missing-label")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #header #label")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},'There is a missing label in the header\'s field "{fieldName}" at position "{fieldPosition}"')," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Based on the schema there should be a label that is missing in the data's header.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"blank-label"},"Blank Label"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"blank-label")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #header #label")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},'Label in the header in field at position "{fieldPosition}" is blank')," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"A label in the header row is missing a value. Label should be provided and not be blank.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"duplicate-label"},"Duplicate Label"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"duplicate-label")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #header #label")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},'Label "{label}" in the header at position "{fieldPosition}" is duplicated to a label: {note}')," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Two columns in the header row have the same value. Column names should be unique.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"incorrect-label"},"Incorrect Label"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"incorrect-label")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #header #label")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},'Label "{label}" in field {fieldName} at position "{fieldPosition}" does not match the field name in the schema')," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"One of the data source header does not match the field name defined in the schema.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"blank-row"},"Blank Row"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"blank-row")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},'Row at position "{rowPosition}" is completely blank')," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"This row is empty. A row should contain at least one value.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"primarykey-error"},"PrimaryKey Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"primary-key-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},'Row at position "{rowPosition}" violates the primary key: {note}')," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Values in the primary key fields should be unique for every row")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"foreignkey-error"},"ForeignKey Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"foreign-key-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},'Row at position "{rowPosition}" violates the foreign key: {note}')," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"Values in the foreign key fields should exist in the reference table")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"duplicate-row"},"Duplicate Row"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"duplicate-row")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"Row at position {rowPosition} is duplicated: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"The row is duplicated.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"row-constraint"},"Row Constraint"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"row-constraint")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table #row")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The row at position {rowPosition} has an error: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"The value does not conform to the row constraint.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"field-count-error"},"Field Count Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"field-count-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The data source does not match the expected field count: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"This error can happen if the data is corrupted.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"row-count-error"},"Row Count Error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"row-count-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The data source does not match the expected row count: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"This error can happen if the data is corrupted.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"table-dimensions-error"},"Table dimensions error"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"table-dimensions-error")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"The data source does not have the required dimensions: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"This error can happen if the data is corrupted.")," ",Object(l.b)("br",null)),Object(l.b)("h2",{id:"deviated-value"},"Deviated Value"),Object(l.b)("p",null,"Code: ",Object(l.b)("inlineCode",{parentName:"p"},"deviated-value")," ",Object(l.b)("br",null),"\nTags: ",Object(l.b)("inlineCode",{parentName:"p"},"#table")," ",Object(l.b)("br",null),"\nTemplate: ",Object(l.b)("inlineCode",{parentName:"p"},"There is a possible error because the value is deviated: {note}")," ",Object(l.b)("br",null),"\nDescription: ",Object(l.b)("inlineCode",{parentName:"p"},"The value is deviated.")," ",Object(l.b)("br",null)))}d.isMDXComponent=!0}}]);