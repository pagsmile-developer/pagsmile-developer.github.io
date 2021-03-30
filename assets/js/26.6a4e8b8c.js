(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{228:function(t,e,a){"use strict";a.r(e);var i=a(0),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"获取信用卡token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取信用卡token"}},[t._v("#")]),t._v(" 获取信用卡Token")]),t._v(" "),a("h3",{attrs:{id:"请求接口root地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求接口root地址"}},[t._v("#")]),t._v(" 请求接口ROOT地址")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  测试环境 : https://security-test.pagsmile.com\n  正式环境 : https://security.pagsmile.com\n")])])]),a("h3",{attrs:{id:"接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  /card/token\n")])])]),a("h3",{attrs:{id:"request-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-header"}},[t._v("#")]),t._v(" Request Header")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("推荐")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("application/json")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Authorization")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Basic Base64(app_id:security_key)")])])])]),t._v(" "),a("h3",{attrs:{id:"请求参数（json格式）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求参数（json格式）"}},[t._v("#")]),t._v(" 请求参数（JSON格式）")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("最大长度/默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("app_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("商户后台创建并获得")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("yyyy-MM-dd HH:mm:ss")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("card.card_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("信用卡卡号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("card.issuer")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("卡组织代码(visa,mastercard...)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("card.holder.name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("64")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("持卡人姓名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("card.holder.identification.type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("持卡人证件类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("card.holder.identification.number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("64")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("持卡人证件号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("card.cvv")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("安全码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("card.valid_thru_year")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("信用卡过期年")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("card.valid_thru_month")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("信用卡过期月")])])])]),t._v(" "),a("h3",{attrs:{id:"请求样例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求样例"}},[t._v("#")]),t._v(" 请求样例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location --request POST \'https://security.pagsmile.com/card/token\' \\\n--header \'Authorization: Basic Base64(appid:security_key)\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "app_id": "app_id",\n    "timestamp": "{{datetime}}",\n    "card": {\n      "card_no": "card_no",\n      ...\n    }\n}\'\n')])])]),a("h3",{attrs:{id:"响应（json格式）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应（json格式）"}},[t._v("#")]),t._v(" 响应（JSON格式）")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("返回码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("msg")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("返回消息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sub_code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("子码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sub_msg")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("子消息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"返回样例（成功）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回样例（成功）"}},[t._v("#")]),t._v(" 返回样例（成功）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "code": "10000",\n    "msg": "Success",\n    "token": "{token}",\n}\n')])])]),a("h3",{attrs:{id:"返回样例（失败）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回样例（失败）"}},[t._v("#")]),t._v(" 返回样例（失败）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "code": "40002",\n    "msg": "Business Failed",\n    "sub_code": "invalid-signature",\n    "sub_msg": "invalid signature"\n}\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);