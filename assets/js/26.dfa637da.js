(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{230:function(a,e,t){"use strict";t.r(e);var n=t(0),i=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"sdk-android"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sdk-android"}},[a._v("#")]),a._v(" SDK Android")]),a._v(" "),t("h3",{attrs:{id:"_1-add-aar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-add-aar"}},[a._v("#")]),a._v(" 1. Add aar")]),a._v(" "),t("p",[a._v("Import the following aar package into libs under the application Android project."),t("br"),a._v("\npagsmile-1.0.0.aar"),t("br"),a._v("\nlivechat.aar"),t("br"),a._v("\nreact-native-0.61.2.aar"),t("br"),a._v("\nreact-native-i18n.aar"),t("br"),a._v("\nreact-native-pdf.aar"),t("br"),a._v("\nrn-fetch-blob.aar"),t("br"),a._v("\nreact-native-vector-icons.aar"),t("br"),a._v("\nhermes-debug.aar"),t("br"),a._v("\nhermes-release.aar")]),a._v(" "),t("h3",{attrs:{id:"_2-add-configuration-in-the-project-s-build-gradle-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-configuration-in-the-project-s-build-gradle-file"}},[a._v("#")]),a._v(" 2. Add Configuration in the Project's build.gradle File:")]),a._v(" "),t("p",[a._v("// Top-level build file where you can add configration options common to all sub-projects/modules.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("buildscript {\n  repositories {\n    mavenCentral()\n    ...\n  } ...\n}\nallprojects {\n  repositories {\n    ...\n  }\n}\nmavenCentral()\nmaven { url 'https://jitpack.io' }\n")])])]),t("h3",{attrs:{id:"_3-add-configuration-in-app-s-build-gradle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-add-configuration-in-app-s-build-gradle"}},[a._v("#")]),a._v(" 3. Add Configuration in App's build.gradle:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("android {\n  ...\n  defaultConfig {\n    multiDexEnabled true\n    ndk {\n      abiFilters \"armeabi-v7a\", \"x86\"\n    }\n  }\n  packagingOptions {\n      exclude \"lib/arm64-v8a/librealm-jni.so\"\n      pickFirst 'lib/x86/libc++_shared.so'\n      pickFirst 'lib/arm64-v8a/libc++_shared.so'\n      pickFirst 'lib/armeabi-v7a/libc++_shared.so'\n      pickFirst 'lib/x86_64/libc++_shared.so'\n  }\n  repositories {\n      flatDir {\n          dirs 'libs'\n      }\n  }\n  ...\n}\n\ndependencies {\n  implementation fileTree(dir: 'libs', include: ['*.jar'])\n\n  implementation 'androidx.appcompat:appcompat:1.1.0'\n  implementation 'com.android.support:multidex:2.0.3'\n\n  implementation(name: 'livechat', ext: 'aar')\n  implementation(name: 'react-native-0.61.2', ext: 'aar')\n  implementation(name: 'react-native-i18n', ext: 'aar')\n  implementation(name: 'react-native-pdf', ext: 'aar')\n  implementation(name: 'react-native-vector-icons', ext: 'aar')\n  implementation(name: 'rn-fetch-blob', ext: 'aar')\n  implementation(name: 'pagsmile-1.0.0', ext: 'aar')\n  debugImplementation(name: 'hermes-debug', ext: 'aar')\n  releaseImplementation(name: 'hermes-release', ext: 'aar')\n\n  implementation 'com.google.code.gson:gson:2.8.5'\n  implementation 'com.android.volley:volley:1.1.1'\n  implementation 'com.github.barteksc:android-pdf-viewer:3.1.0-beta.1'\n\n  implementation 'com.alibaba:fastjson:1.2.41'\n  implementation 'com.facebook.android:facebook-messenger:5.+'\n  implementation 'com.facebook.android:facebook-share:5.+'\n  implementation 'com.google.android.gms:play-services-ads-identifier:17.0.0'\n\n  implementation 'com.facebook.infer.annotation:infer-annotation:0.11.2'\n  implementation 'javax.inject:javax.inject:1'\n  implementation 'com.facebook.fresco:fresco:1.10.0'\n  implementation 'com.facebook.fresco:imagepipeline-okhttp3:1.10.0'\n  implementation 'com.facebook.soloader:soloader:0.6.0'\n  implementation 'com.google.code.findbugs:jsr305:3.0.2'\n  implementation 'com.squareup.okhttp3:okhttp:3.12.1'\n  implementation 'com.squareup.okhttp3:okhttp-urlconnection:3.12.1'\n  implementation 'com.squareup.okio:okio:1.15.0'\n}\n")])])]),t("h3",{attrs:{id:"_4-androidmanifest-xml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-androidmanifest-xml"}},[a._v("#")]),a._v(" 4. AndroidManifest.xml")]),a._v(" "),t("p",[a._v("If you don’t have your own application file, add attributes to the application tag of the AndroidManifest.xml file")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('android:name="com.pagsmile.sdk.PagsmileApplication"\n')])])]),t("p",[a._v("If you have your own application file, add the following code:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@Override\nprotected void attachBaseContext(Context base) {\n  super.attachBaseContext(base);\n  MultiDex.install(this);\n}\n")])])]),t("h3",{attrs:{id:"_5-initialize-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-initialize-sdk"}},[a._v("#")]),a._v(" 5. Initialize SDK")]),a._v(" "),t("p",[a._v("It is recommended to execute it when the application starts or after successful login")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Pagsmile.getInstance().init(Context, app_id, api_key, Pagsmile.Test);\n")])])]),t("h3",{attrs:{id:"_6-pull-up-the-order-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-pull-up-the-order-page"}},[a._v("#")]),a._v(" 6. Pull Up the Order Page")]),a._v(" "),t("p",[a._v("Call it after getting the prepay_id returned by pagsmile background")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Pagsmile.getInstance().order(Context, prepayId);\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);