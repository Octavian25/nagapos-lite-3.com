(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1078:function(a,e,t){"use strict";t.r(e);var r=t(19),n=t(20),o=t(22),s=t(21),l=t(0),i=t.n(l),c=t(38),m=t(638),p=t(636),d=t(637),u=t(734),g=t(287),b=t(288),h=t(11),k=t(24),f=t(91),K=function(a,e){var t={};return a.kode||(t.kode="Kode Tidak Boleh Kosong"),a.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),a.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),a.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),a.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t},E=function(a){Object(o.a)(t,a);var e=Object(s.a)(t);function t(){var a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=e.call.apply(e,[this].concat(o))).state={},a}return Object(n.a)(t,[{key:"render",value:function(){var a=this;return i.a.createElement(m.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:function(){return a.props.dispatch(Object(h.Cb)())}},i.a.createElement(p.a,null," ",this.props.title," "),i.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},i.a.createElement(d.a,null,i.a.createElement(g.a,{name:"kode",component:k.e,type:"text",label:"Kode",placeholder:"Masukan Kode",readOnly:this.props.isEdit}),i.a.createElement(g.a,{name:"nama_kategori",component:k.e,type:"text",label:"Nama Kategori",placeholder:"Masukan Nama Kategori"}),i.a.createElement(g.a,{name:"harga_pergram",component:k.e,type:"text",label:"Harga / Gram",placeholder:"Masukan Harga / Gram",normalize:f.a}),i.a.createElement(g.a,{name:"presentase",component:k.e,type:"text",label:"Presentase",placeholder:"Masukan Presentase",normalize:f.c}),i.a.createElement(g.a,{name:"kadar",component:k.e,type:"text",label:"Kadar",placeholder:"Masukan Kadar"})),i.a.createElement(u.a,null,i.a.createElement("button",{className:"btn btn-white",onClick:function(){return a.props.dispatch(Object(h.Cb)())},type:"button",disabled:this.props.isLoading},"Batal"),i.a.createElement("button",{className:"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}]),t}(l.Component);E=Object(b.a)({form:"ModalKategori",enableReinitialize:!0,validate:K})(E);e.default=Object(c.b)(function(a){if(null!==a.datamaster.ShowtModalKategori)return{initialValues:{kode:a.datamaster.ShowtModalKategori.kode,nama_kategori:a.datamaster.ShowtModalKategori.nama_kategori,harga_pergram:a.datamaster.ShowtModalKategori.harga_pergram,presentase:a.datamaster.ShowtModalKategori.presentase,kadar:a.datamaster.ShowtModalKategori.kadar}}},null)(E)},734:function(a,e,t){"use strict";var r=t(16),n=t(26),o=t(0),s=t.n(o),l=t(4),i=t.n(l),c=t(32),m=t.n(c),p=t(18),d={tag:p.m,className:i.a.string,cssModule:i.a.object},u=function(a){var e=a.className,t=a.cssModule,o=a.tag,l=Object(n.a)(a,["className","cssModule","tag"]),i=Object(p.i)(m()(e,"modal-footer"),t);return s.a.createElement(o,Object(r.a)({},l,{className:i}))};u.propTypes=d,u.defaultProps={tag:"div"},e.a=u}}]);
//# sourceMappingURL=40.9b81f84f.chunk.js.map