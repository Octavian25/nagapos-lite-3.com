(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1138:function(t,e,a){"use strict";a.r(e);var n=a(19),r=a(20),l=a(50),o=a(22),i=a(21),c=a(0),s=a.n(c),u=a(42),m=a(7),g=a(43),d=a(75),h=a(13),p=a(38),b=a(287),f=a(288),E=a(24),S=a(90),_=a(126),v=a(102),O=(a(207),function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=new v.default("l","mm",[297,210]),n=[],r=30,l=0,o=0;a.setFontSize(15),a.text("LAPORAN TRANSAKSI HUTANG",14,15),a.setFontSize(20),a.text(Object(m.j)().nama_toko,200,15),a.setFontSize(8);var i=Object(m.j)().alamat_toko.length;i>20&&a.text(Object(m.j)().alamat_toko.slice(0,48),200,20),i>50&&a.text(Object(m.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN TRANSAKSI HUTANG"}),a.text("PERIODE : ".concat(0===Object(m.l)("tgl_laporan").length?null:JSON.parse(Object(m.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(m.l)("tgl_laporan")).tgl_akhir),14,25),t=[[{content:"TANGGAL HUTANG"},{content:"TANGGAL JTH TEMPO"},{content:"KODE SALES"},{content:"NAMA CUSTOMER"},{content:"NO HP"},{content:"ALAMAT CUSTOMER"},{content:"BERAT EMAS",styles:{halign:"right"}},{content:"BERAT+PLASTIK",styles:{halign:"right"}},{content:"JUMLAH HUTANG",styles:{halign:"right"}},{content:"LAMA PINJAM",styles:{halign:"right"}},{content:"BUNGA",styles:{halign:"right"}}]],e.forEach(function(t,e){var a=[{content:"NO FAKTUR : ".concat(t._id.no_faktur_hutang),colSpan:13}];n.push(a),t.detail.forEach(function(t,e){var a=[t.tgl_hutang,t.tgl_tempo,t.kode_sales,t.nama_customer,t.no_hp,t.alamat_customer,{content:Object(m.f)(t.berat_emas,3),styles:{halign:"right"}},{content:Object(m.f)(t.berat_bruto,3),styles:{halign:"right"}},{content:parseInt(t.jumlah_hutang).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:t.lama_pinjam,styles:{halign:"right"}},{content:t.bunga+"%",styles:{halign:"right"}}];t.berat_emas,t.berat_bruto,t.jumlah_hutang,l+=t.berat_emas,o+=t.berat_bruto,t.jumlah_hutang,n.push(a)}),t.detail.length,t.detail.length});var c=[{content:"Grand Total : ",colSpan:6,styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(l.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(o.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"",colSpan:"3",styles:{fillColor:"#E8E5E5",textColor:"#000"}}];n.push(c);var s=[{colSpan:3,content:"Printed By ".concat(JSON.parse(Object(m.l)("userdata")).user_id," / ").concat(Object(m.i)()),styles:{fontStyle:"italic",textColor:"#000"}}];n.push(s),a.autoTable({head:t,body:n,startY:r,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"}}),r=a.autoTableEndPosY()+3,n=[];var u=a.internal.getNumberOfPages(),g=a.internal.pageSize.width,d=a.internal.pageSize.height;a.setFontSize(10);for(var h=1;h<u+1;h++){var p=g/2,b=d-10;a.setPage(h),a.text("".concat(h," of ").concat(u),p,b,{align:"center"})}var f=a.output("datauristring");PrintPenjualan.postMessage(f)}),x=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={date:new Date},r.setStartDate=r.setStartDate.bind(Object(l.a)(r)),r.setLastDate=r.setLastDate.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"exportPdf",value:function(){O(this.props.LaporanHutang)}},{key:"setStartDate",value:function(t){this.setState({tgl_awal:new Date(t)})}},{key:"setLastDate",value:function(t){this.setState({tgl_akhir:new Date(t)})}},{key:"render",value:function(){var t=this,e={renderer:function(t){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},"Kode Sales : ",t.kode_sales," ",s.a.createElement("br",null),"Nama Customer : ",t.nama_customer," ",s.a.createElement("br",null),"No Hp : ",t.no_hp," ",s.a.createElement("br",null),"Alamat Customer : ",t.alamat_customer," ",s.a.createElement("br",null))))},showExpandColumn:!0,expandByColumnOnly:!0},a=[];this.props.LaporanHutang.forEach(function(t,e){t.detail.forEach(function(t,e){a.push(t)})});var n=[{dataField:"no_faktur_hutang",text:"No Faktur Hutang",footerAttrs:{colSpan:"2"},footer:function(t,e,n,r){return s.a.createElement("div",null,"Total Transaksi Hutang : ",a.length," ")}},{dataField:"tgl_hutang",text:"Tanggal Hutang"},{dataField:"berat_emas",text:"Berat",headerClasses:"text-right",formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",t.toFixed(3))},footer:function(t){return s.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toFixed(3)," ")}},{dataField:"jumlah_hutang",text:"Jumlah Hutang",headerClasses:"text-right",formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",parseInt(t).toLocaleString("kr-KO"))},footer:function(t){return s.a.createElement("div",{className:"text-right"}," ",parseInt(t.reduce(function(t,e){return t+e},0)).toLocaleString("kr-KO")," ")}},{dataField:"lama_pinjam",text:"Lama Pinjam",headerClasses:"text-right",formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",t)},footer:""}];return s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(b.a,{name:"tgl_awal",component:E.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return t.setStartDate(e)},placeholder:"Masukan Tanggal Dari",onFocus:function(){return setTimeout(function(){HideKeyboard.postMessage("")},100)}})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(b.a,{name:"tgl_akhir",component:E.c,type:"text",selected:this.state.tgl_akhir,onChange:function(e){return t.setLastDate(e)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir",onFocus:function(){return setTimeout(function(){HideKeyboard.postMessage("")},100)}})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"text-right"},s.a.createElement("label",null,"\xa0"),s.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(S.a,{keyField:"no_hp",data:this.props.export?a:[],columns:n,empty:!0,textEmpty:"Data Laporan Hutang Kosong",expandRow:e})),s.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("button",{onClick:function(){return t.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," "))))))}}]),a}(c.Component);x=Object(f.a)({form:"HeadFormHutang",enableReinitialize:!0,validate:_.a})(x);var N=Object(p.b)(function(t){return{initialValues:{tgl_awal:Object(m.h)(),tgl_akhir:Object(m.h)()}}})(x),j=a(103),y=a(28),k=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={isLoading:!1,export:!1,dataHutang:[],LaporanHutang:[]},r.handleSubmit=r.handleSubmit.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"handleSubmit",value:function(t){var e=this;this.setState({isLoading:!0});var a={tgl_awal:Object(m.e)(j(new Date(t.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(m.e)(j(new Date(t.tgl_akhir)).format("YYYY-MM-DD"))};Object(h.j)("hutang/get/report",a).then(function(t){0===t.data.length?(Object(g.e)("info","Data Yang Anda Cari Tidak Ada"),e.setState({export:!1,isLoading:!1,LaporanHutang:[]})):(Object(g.e)("success","Laporan Transaksi Hutang Tersedia"),Object(m.m)("tgl_laporan",JSON.stringify(a)),e.setState({export:!0,isLoading:!1,LaporanHutang:t.data}))}).catch(function(t){e.setState({export:!1,isLoading:!1}),Object(g.e)("info","Data Yang Anda Cari Tidak Ada")})}},{key:"componentDidMount",value:function(){this.context.handleSetPageSidebar(!1),this.context.handleSetPageHeader(!1)}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement(u.b,{to:"/SubMenuLaporan"},s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-tut":"reactour_4"},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Home")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(d.a,null,s.a.createElement(d.c,null,"Laporan Hutang"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement(N,{export:this.state.export,isLoading:this.state.isLoading,LaporanHutang:this.state.LaporanHutang,onSubmit:function(e){return t.handleSubmit(e)}})))),s.a.createElement("br",null)))}}]),a}(s.a.Component);k.contextType=y.a;e.default=k}}]);
//# sourceMappingURL=81.1d56c7a0.chunk.js.map