(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-500987f7","chunk-35f313a4"],{"0737":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"add-form"},[t("el-dialog",{attrs:{title:e.titleInfo.text+e.titleInfo.pageTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[t("el-form",{ref:"dataForm",staticStyle:{width:"80%","margin-left":"10px"},attrs:{rules:e.ruleInline,model:e.formBase,"label-position":"left","label-width":"150px"}},[t("el-form-item",{attrs:{label:"企业名称",prop:"shortName"}},[t("el-input",{model:{value:e.formBase.shortName,callback:function(t){e.$set(e.formBase,"shortName",t)},expression:"formBase.shortName"}}),t("el-checkbox",{model:{value:e.formBase.isFamous,callback:function(t){e.$set(e.formBase,"isFamous",t)},expression:"formBase.isFamous"}},[e._v("是否为名企")])],1),t("el-form-item",{attrs:{label:"所属公司",prop:"company"}},[t("el-input",{model:{value:e.formBase.company,callback:function(t){e.$set(e.formBase,"company",t)},expression:"formBase.company"}}),t("p",[e._v("https://www.tianyancha.com （在此可查询所属公司全称及简称）")])],1),t("el-form-item",{attrs:{label:"城市",prop:"province"}},[t("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{filterable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter.apply(null,arguments)},change:e.handleProvince},model:{value:e.formBase.province,callback:function(t){e.$set(e.formBase,"province",t)},expression:"formBase.province"}},e._l(e.citySelect.province,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1),t("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{filterable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter.apply(null,arguments)}},model:{value:e.formBase.city,callback:function(t){e.$set(e.formBase,"city",t)},expression:"formBase.city"}},e._l(e.citySelect.cityDate,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"方向（企业标签）",prop:"tags"}},[t("el-input",{model:{value:e.formBase.tags,callback:function(t){e.$set(e.formBase,"tags",t)},expression:"formBase.tags"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入"},model:{value:e.formBase.remarks,callback:function(t){e.$set(e.formBase,"remarks",t)},expression:"formBase.remarks"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.dialogFormH}},[e._v(e._s(e.$t("table.cancel")))]),t("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},n=[],s=a("c7eb"),i=a("5530"),l=a("1da1"),o=a("4f75"),c=a("b59c"),u={name:"CompanysAdd",props:{titleInfo:{type:Object,required:!0},formBase:{type:Object,required:!0}},data:function(){return{dialogFormVisible:!1,citySelect:{province:[],cityDate:[]},ruleInline:{shortName:[{required:!0,message:"企业简称不能为空",trigger:"blur"}],province:[{required:!0,message:"请选择省份",trigger:"change"}],tags:[{required:!0,message:"请请输标签",trigger:"blur"}]}}},computed:{},methods:{dialogFormV:function(){this.dialogFormVisible=!0},dialogFormH:function(){this.dialogFormVisible=!1},getCityData:function(){this.citySelect.province=Object(c["b"])()},handleProvince:function(e){this.citySelect.cityDate=Object(c["a"])(e),this.formBase.city=this.citySelect.cityDate[0]},createData:function(){var e=this;this.$refs.dataForm.validate(function(){var t=Object(l["a"])(Object(s["a"])().mark((function t(a){var r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=12;break}if(e.dialogFormH(),r=Object(i["a"])({},e.formBase),!e.formBase.id){t.next=8;break}return t.next=6,Object(o["f"])(r).then((function(){e.$emit("newDataes",e.formBase)}));case 6:t.next=10;break;case 8:return t.next=10,Object(o["a"])(e.formBase).then((function(){e.$emit("newDataes",e.formBase)}));case 10:t.next=13;break;case 12:e.$message.error("*号为必填项!");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},mounted:function(){},created:function(){this.getCityData()},updated:function(){}},f=u,m=(a("8093"),a("2877")),d=Object(m["a"])(f,r,n,!1,null,null,null);t["default"]=d.exports},1662:function(e,t,a){},"25fb":function(e,t,a){"use strict";a("5677")},"28a3":function(e,t,a){},"30c6":function(e,t,a){"use strict";a.r(t);a("a9e3");var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dashboard-container"},[t("div",{staticClass:"app-container"},[t("el-card",{attrs:{shadow:"never"}},[t("el-form",{ref:"requestParameters",attrs:{model:e.requestParameters}},[t("div",{staticClass:"filter-container"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:5}},[t("el-form-item",{attrs:{label:"标签名称：",prop:"tags"}},[t("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{placeholder:"请输入"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter.apply(null,arguments)}},model:{value:e.requestParameters.tags,callback:function(t){e.$set(e.requestParameters,"tags",t)},expression:"requestParameters.tags"}})],1)],1),t("el-col",{attrs:{span:3}},[t("el-form-item",{attrs:{label:"省：",prop:"province"}},[t("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{filterable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter.apply(null,arguments)},change:e.handleProvince},model:{value:e.requestParameters.province,callback:function(t){e.$set(e.requestParameters,"province",t)},expression:"requestParameters.province"}},e._l(e.citySelect.province,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),t("el-col",{attrs:{span:3}},[t("el-form-item",{attrs:{label:"市：",prop:"city"}},[t("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{filterable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter.apply(null,arguments)}},model:{value:e.requestParameters.city,callback:function(t){e.$set(e.requestParameters,"city",t)},expression:"requestParameters.city"}},e._l(e.citySelect.cityDate,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),t("el-col",{attrs:{span:5}},[t("el-form-item",{attrs:{label:"企业简称：",prop:"shortName"}},[t("el-input",{staticStyle:{width:"180px"},model:{value:e.requestParameters.shortName,callback:function(t){e.$set(e.requestParameters,"shortName",t)},expression:"requestParameters.shortName"}})],1)],1),t("el-col",{attrs:{span:3}},[t("el-form-item",{attrs:{label:"状态：",prop:"state"}},[t("el-select",{staticClass:"filter-item",staticStyle:{width:"100px"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter.apply(null,arguments)}},model:{value:e.requestParameters.state,callback:function(t){e.$set(e.requestParameters,"state",t)},expression:"requestParameters.state"}},e._l(e.status,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),t("el-col",{attrs:{span:2}},[t("el-form-item",{attrs:{label:"操作："}},[t("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")])],1)],1)],1),t("el-button",{staticClass:"filter-item fr",staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.handleChange("add")}}},[e._v("新增用户")])],1)]),""!==e.alertText?t("el-alert",{staticClass:"alert",attrs:{title:e.alertText,type:"info",closable:!1,"show-icon":""}}):e._e(),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.dataList,"element-loading-text":"给我一点时间",fit:"","highlight-current-row":"",border:""}},[t("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.id))])]}}])}),t("el-table-column",{attrs:{align:"center",label:"企业编号"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.number))])]}}])}),t("el-table-column",{attrs:{align:"center",label:"企业简称"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.shortName))])]}}])}),t("el-table-column",{attrs:{label:"标签"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.tags))])]}}])}),t("el-table-column",{attrs:{align:"center",label:"创建者"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.creatorID))])]}}])}),t("el-table-column",{attrs:{align:"center",label:"创建日期"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.addDate))])]}}])}),t("el-table-column",{attrs:{align:"center",label:"备注"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.remarks))])]}}])}),t("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(a){return[1==a.row.state?t("span",[e._v("启用")]):t("span",[e._v("禁用")])]}}])}),t("el-table-column",{attrs:{align:"center",label:"操作",width:"280","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleChange(a.row.id)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleStatus(a.row)}}},[0==a.row.state?t("span",[e._v("启用")]):t("span",[e._v("禁用")])]),"deleted"!=a.row.status?t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.removeUser(a.row.id)}}},[e._v("删除")]):e._e()]}}])})],1),t("div",{staticClass:"pagination"},[t("div",{staticClass:"pages"},[t("el-pagination",{attrs:{background:"","current-page":Number(e.requestParameters.page),total:Number(e.total),"page-size":Number(e.requestParameters.pagesize),"page-sizes":[10,20,30,50],layout:"sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]),t("Dialog",{ref:"editUser",attrs:{titleInfo:e.titleInfo,formBase:e.formData},on:{newDataes:e.getList}})],1)],1)])},n=[],s=a("c7eb"),i=a("1da1"),l=(a("a434"),a("72a0")),o=a("546c"),c=a("b59c"),u=a("0737"),f={name:"CompanysList",components:{Dialog:u["default"]},data:function(){return{tableKey:0,dataList:[],total:null,listLoading:!0,alertText:"",requestParameters:{page:1,pagesize:10},titleInfo:{pageTitle:"用户",text:""},formData:{isFamous:"",shortName:"",company:"",province:"",city:"",tags:"",remarks:""},citySelect:{province:[],cityDate:[]}}},computed:{status:function(){return l["d"]}},methods:{initialDate:function(){this.getList()},getList:function(e){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a,r;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.listLoading=!0,e.next=3,Object(o["c"])(t.requestParameters);case 3:a=e.sent,r=a.data,t.dataList=r.items,t.total=r.counts,t.alertText="共 ".concat(t.total," 条记录"),t.listLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},resetForm:function(){this.$refs.requestParameters.resetFields()},handleFilter:function(){this.requestParameters.page=1,this.getList(this.requestParameters)},handleSizeChange:function(e){this.requestParameters.pagesize=e,1===this.requestParameters.page&&this.getList(this.requestParameters)},handleCurrentChange:function(e){this.requestParameters.page=e,this.getList()},query:function(){this.formData={}},handleChange:function(e){this.query(),this.$refs.editUser.dialogFormV(),"add"===e?this.titleInfo.text="创建":(this.titleInfo.text="编辑",this.hanldeEditForm(e))},hanldeEditForm:function(e){var t=this;return Object(i["a"])(Object(s["a"])().mark((function a(){var r,n;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.formData.id=e,a.next=3,Object(o["a"])({id:e});case 3:r=a.sent,n=r.data,t.formData=n;case 6:case"end":return a.stop()}}),a)})))()},removeUser:function(e){var t=this;this.$confirm("此操作将永久删除用户 , 是否继续?","提示",{type:"warning"}).then(Object(i["a"])(Object(s["a"])().mark((function a(){return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(o["d"])({id:e}).then((function(a){t.$message.success("成功删除了用户!"),t.dataList.splice(e,1),t.getList(t.requestParameters)})).catch((function(e){t.$message.error("删除失败!")}));case 2:case"end":return a.stop()}}),a)})))).catch((function(){t.$message.info("已取消操作!")}))},handleStatus:function(e){var t=this,a="";!0===e.state?(e.state=0,a="禁用"):(e.state=1,a="启用");var r={id:e.id,state:e.state};this.$confirm("已成功"+a+", 是否继续?","提示",{type:"warning"}).then(Object(i["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["b"])(r).then((function(e){t.$message.success("已成功"+a+"!"),t.getList(t.requestParameters)})).catch((function(e){t.$message.error(a+"失败!")}));case 2:case"end":return e.stop()}}),e)})))).catch((function(){t.$message.info("已取消操作!")}))},getCityData:function(){this.citySelect.province=Object(c["b"])()},handleProvince:function(e){this.citySelect.cityDate=Object(c["a"])(e),this.requestParameters.city=this.citySelect.cityDate[0]}},mounted:function(){},created:function(){var e=this;this.initialDate(),this.getCityData(),document.onkeydown=function(t){var a=window.event.keyCode;13===a&&e.handleFilter(this.requestParameters)}},updated:function(){}},m=f,d=(a("25fb"),a("b22a"),a("2877")),p=Object(d["a"])(m,r,n,!1,null,"6f93f75f",null);t["default"]=p.exports},"546c":function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var r=a("b775"),n=function(e){return Object(r["a"])("/companys","get",e)},s=function(e){return Object(r["a"])("/companys/".concat(e.id),"delete",e)},i=function(e){return Object(r["a"])("/companys/".concat(e.id),"get",e)},l=function(e){return Object(r["a"])("/companys/".concat(e.id,"/state"),"post",e)}},5677:function(e,t,a){},"72a0":function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return i}));var r=[{value:1,label:"启用"},{value:0,label:"禁用"}],n=[{value:1,label:"简单"},{value:2,label:"一般"},{value:3,label:"困难"}],s=[{value:1,label:"单选"},{value:2,label:"多选"},{value:3,label:"简答"}],i=["o2o","外包服务","企业服务","互联网金融","企业咨询","互联网","电子商务","其他"]},8093:function(e,t,a){"use strict";a("28a3")},b22a:function(e,t,a){"use strict";a("1662")}}]);
//# sourceMappingURL=chunk-500987f7.03c1b32b.js.map