/*! Built with http://stenciljs.com */
const{h:r}=window.App;class e{render(){return r("div",null)}static get is(){return"compare-filter"}static get encapsulation(){return"shadow"}static get style(){return".sc-compare-filter-h{text-align:right}"}}class t{constructor(){this.repo=null}logoClick(r){r.preventDefault(),r.stopPropagation(),document.querySelector(".scroll-view").scrollTop=0}render(){return[this.repo?r("nav",{class:"breadcrumbs"},r("a",{href:this.repo.orgUrl},this.repo.orgUrl),r("a",{href:this.repo.repoUrl},this.repo.repoName),r("a",{href:this.repo.commitsUrl},"commits")):null,r("header",null,r("div",{class:"logo"},r("a",{href:"#",onClick:this.logoClick.bind(this)},r("img",{src:this.appSrcUrl+"/assets/logo.png"}))),r("compare-filter",{class:"filter"}))]}static get is(){return"compare-header"}static get encapsulation(){return"shadow"}static get properties(){return{appSrcUrl:{type:String,attr:"app-src-url"},repo:{type:"Any",attr:"repo"}}}static get style(){return".sc-compare-header-h{background:#fff}nav.sc-compare-header{padding:4px}nav.sc-compare-header   a.sc-compare-header{font-size:14px;text-decoration:none;color:var(--breadcrumb-color);display:inline-block;padding:0 4px}nav.sc-compare-header   a.sc-compare-header:hover{text-decoration:underline}header.sc-compare-header{display:-webkit-box;display:-ms-flexbox;display:flex;padding:8px}img.sc-compare-header{width:174px;height:32px}.logo.sc-compare-header{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:7px}compare-filter.sc-compare-header{-webkit-box-flex:1;-ms-flex:1;flex:1}h1.sc-compare-header{margin:0;padding:0;font-size:18px}"}}export{e as CompareFilter,t as CompareHeader};