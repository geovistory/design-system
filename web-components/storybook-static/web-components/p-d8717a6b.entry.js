import{r as t,h as o,H as s}from"./p-9e092df1.js";const e=class{constructor(o){t(this,o),this.SPARQL_endpoint="https://sparql-dev.geovistory.org/project-924033",this.query="\n    CONSTRUCT {\n        <http://geovistory.org/resource/{{this.pkEntity}}> <https://ontome.net/property/1762> ?o1 .\n        <http://geovistory.org/resource/{{this.pkEntity}}> <http://www.w3.org/2000/01/rdf-schema#label> ?o2 .\n      } WHERE { \n            <http://geovistory.org/resource/{{this.pkEntity}}> <https://ontome.net/property/1762> ?o1 .\n            <http://geovistory.org/resource/{{this.pkEntity}}> <http://www.w3.org/2000/01/rdf-schema#label> ?o2 .\n      }\n  "}async componentWillLoad(){this.query=encodeURIComponent(this.query.replace(/\s+/g," ").trim().replace(/{{this.pkEntity}}/g,this.pkEntity+"")),this.rdf=await fetch(this.SPARQL_endpoint+"?query="+this.query,{method:"POST",headers:{Accept:"text/turtle"}}).then((t=>t.text())),console.log(this.rdf)}render(){return o(s,null,o("span",{style:{"white-space":"pre-wrap"}},this.rdf))}};e.style=":host{display:block}";export{e as gv_person_rdf}