"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-sky-500 selection:text-white">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              مصنفة بالدرجة الأولى (A+) لدى وزارة البلديات والإسكان
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline">عضو الهيئة السعودية للمقاولين (SCA: 422542259)</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-sans">
            <a href="tel:0597896656" className="hover:text-white transition flex items-center gap-1">
              <span>0597896656</span>
              <svg className="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 flex items-center gap-1">
              مكة المكرمة - حي الملك فهد
              <svg className="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-600 to-slate-900 flex items-center justify-center shadow-md shadow-sky-600/20 text-white font-bold text-2xl border border-sky-400/30">
              <svg className="w-7 h-7 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <span className="block text-xl font-black text-slate-900 tracking-tight">شركة خطوط الإنشاء</span>
              <span className="block text-xs font-semibold text-sky-700 tracking-wider font-sans uppercase">Khotout Al-Enshaa Contracting</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#about" className="hover:text-sky-600 transition">من نحن</a>
            <a href="#services" className="hover:text-sky-600 transition">خدماتنا</a>
            <a href="#sectors" className="hover:text-sky-600 transition">القطاعات الإنشائية</a>
            <a href="#credentials" className="hover:text-sky-600 transition">الاعتمادات والتراخيص</a>
            <a href="#contact" className="hover:text-sky-600 transition">تواصل معنا</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md shadow-sky-600/20 hover:from-sky-500 hover:to-blue-600 transition transform active:scale-95"
            >
              <span>طلب عرض سعر</span>
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                رؤية طموحة لمستقبل عمراني مستدام يواكب رؤية 2030
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                رواد في هندسة <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">المباني والإنشاءات</span> وتطوير البنية التحتية
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                نجمع بين عراقة الخبرة والحلول الإنشائية المبتكرة لتقديم مشاريع استثنائية تفوق التوقعات، بفريق هندسي محترف ومعايير عالمية للجودة والسلامة.
              </p>

              <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="#services"
                  className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-sky-500/25 transition transform active:scale-95"
                >
                  استكشف خدماتنا
                </a>
                <a
                  href="#credentials"
                  className="bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-semibold px-8 py-3.5 rounded-xl transition"
                >
                  شهادات الاعتماد والترخيص
                </a>
              </div>

              {/* Stats badges */}
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800">
                <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <div className="text-2xl font-black text-sky-400 font-sans">A+</div>
                  <div className="text-xs text-slate-400 mt-0.5">تصنيف بلدي الفني</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <div className="text-2xl font-black text-white font-sans">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">نسبة التوطين (قوى)</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <div className="text-2xl font-black text-sky-400 font-sans">SCA</div>
                  <div className="text-xs text-slate-400 mt-0.5">عضوية هيئة المقاولين</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <div className="text-2xl font-black text-emerald-400 font-sans">كدانة</div>
                  <div className="text-xs text-slate-400 mt-0.5">معتمد بوابة تسليم</div>
                </div>
              </div>
            </div>

            {/* Visual Hero Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center justify-between pb-6 border-b border-slate-700/80">
                  <div>
                    <span className="text-xs text-sky-400 font-semibold uppercase tracking-wider">بطاقة المنشأة الرسمية</span>
                    <h3 className="text-lg font-bold text-white">بيانات السجل والترخيص</h3>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">
                    نشط ومعتمد
                  </span>
                </div>

                <div className="space-y-4 py-6 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">السجل التجاري:</span>
                    <span className="font-mono font-bold text-white">4031220618</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">الرقم الموحد الوطني:</span>
                    <span className="font-mono font-bold text-white">7005494344</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">رخصة نشاط تجاري (بلدي):</span>
                    <span className="font-mono font-bold text-white">450915137899</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">رقم عضوية مقاول (SCA):</span>
                    <span className="font-mono font-bold text-white">422542259</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">الرقم الضريبي (ZATCA):</span>
                    <span className="font-mono text-xs text-white">311945093500003</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">المقر الرئيسي:</span>
                    <span className="text-white text-xs">مكة المكرمة - الشوقية</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/80">
                  <div className="bg-sky-500/10 rounded-xl p-3 border border-sky-400/20 text-center">
                    <span className="text-xs text-sky-300">نلتزم بالمعايير الهندسية الوطنية وأعلى اشتراطات الجودة والسلامة المهنية.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold px-3 py-1.5 rounded-md uppercase">
                من نحن • About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                شركة رائدة تجمع بين الخبرة الهندسية والابتكار المستدام
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                خطوط الإنشاء للمقاولات العامة تعتبر رائدة في مجال المباني والإنشاءات، حيث تجمع بين الخبرة والابتكار في تقديم أعلى مستويات الخدمة. نحن نتميز بفريق من المهندسين والفنيين المحترفين الذين يتمتعون بالكفاءة والإلمام العميق في مجال البنية التحتية.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                تتسم شركتنا بالالتزام بأعلى معايير السلامة والجودة، ونعتبر الابتكار واستخدام أحدث التقنيات جزءاً أساسياً من هويتنا. مهمتنا هي تحويل أفكار عملائنا إلى واقع ملموس، ونحن فخورون بتقديم حلول مبتكرة ومستدامة في قطاع الإنشاءات المدنية والبنية التحتية.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                    الرؤية (Vision)
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    أن نكون شركة مرموقة ومبتكرة في مجال المباني والإنشاءات على مستوى العالم، من خلال دمج الخبرة والتقنيات الحديثة لتقديم حلول بناء مستدامة وفعالة.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    الرسالة (Mission)
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    تقديم خدمات إنشاء استثنائية تفوق توقعات عملائنا، وبناء علاقات تعاون قوية ومستدامة، ووضع العميل في قلب كل قرار استثماري وتنفيذي.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col justify-between shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  01
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-sky-400 mb-1">التميز</h3>
                  <p className="text-xs text-slate-300">تنفيذ جميع المشاريع بأعلى معايير الإتقان والدقة الهندسية المعتمدة.</p>
                </div>
              </div>

              <div className="p-6 bg-sky-600 text-white rounded-2xl flex flex-col justify-between shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-white/20 text-white flex items-center justify-center font-bold">
                  02
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-white mb-1">الالتزام</h3>
                  <p className="text-xs text-sky-100">احترام الجداول الزمنية والمواصفات الفنية المعتمدة في العقود.</p>
                </div>
              </div>

              <div className="p-6 bg-slate-100 border border-slate-200 text-slate-900 rounded-2xl flex flex-col justify-between">
                <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center font-bold">
                  03
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">الابتكار</h3>
                  <p className="text-xs text-slate-600">استخدام التقنيات الحديثة والمواد المبتكرة لتقليل التكلفة ورفع الجودة.</p>
                </div>
              </div>

              <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col justify-between shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  04
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-sky-400 mb-1">المسؤولية</h3>
                  <p className="text-xs text-slate-300">الالتزام الكامل بسلامة العاملين وحماية البيئة والتنمية المجتمعية.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-wider">نطاق الأعمال المتكامل</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">خدماتنا ومجالات تخصصنا</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              تتخذ خطوط الإنشاء للمقاولات العامة دوراً مميزاً في قطاع البناء والتشييد والبنية التحتية، وتشمل خدماتنا:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Category 1: المباني */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">أعمال المباني (Building Works)</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  تنفيذ متكامل للمشاريع السكنية والتجارية والحكومية بأحدث النظم الإنشائية:
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    المباني الحكومية والمجمعات الإدارية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    المباني السكنية والفلل والأبراج
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    المدارس والمنشآت التعليمية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    المستشفيات والمراكز الصحية المتطورة
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    المولات والمراكز التجارية الكبرى
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <span className="text-xs font-semibold text-sky-600">تشطيب كامل وتسليم مفتاح</span>
              </div>
            </div>

            {/* Category 2: البنية التحتية */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">البنية التحتية (Infrastructure)</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  تطوير المخططات والشبكات الحيوية الأساسية للمدن والمجتمعات الحديثة:
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    شبكات المياه وتمديدات الخطوط الرئيسية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    محطات وشبكات الصرف الصحي والمضخات
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    قنوات تصريف السيول ودرء أخطار الأمطار
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    شبكات الري الحديثة والأوتوماتيكية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    سفلتة وإنشاء الطرق والشوارع والإنارة
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    تنسيق وتطوير الحدائق والمسطحات الخضراء
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <span className="text-xs font-semibold text-blue-600">تنفيذ بأعلى معايير السلامة والجودة</span>
              </div>
            </div>

            {/* Category 3: الإنشاءات الكبرى والمائية */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">الإنشاءات المتخصصة (Constructions)</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  مشاريع هندسية نوعية تشمل المنشآت الحيوية والمائية:
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                    بناء وتدعيم السدود المائية ومخرات السيول
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                    تطوير وتجهيز الموانئ والأرصفة البحرية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                    حماية وتنسيق الشواطئ والمصدات الصخرية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                    الجسور والأنفاق والممرات الإسمنتية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                    أعمال المباني الجاهزة بالمواقع
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <span className="text-xs font-semibold text-cyan-600">كفاءة تشغيلية وهندسة دقيقة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Credentials Section */}
      <section id="credentials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-wider">التراخيص والاعتمادات الرسمية</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">شهادات حكومية وامتثال معتمد</h2>
            <p className="text-slate-600 text-sm">
              تحظى شركة خطوط الإنشاء بسجل رسمي حافل بالاعتمادات والتصنيفات من مختلف الجهات الحكومية والتنظيمية بالمملكة العربية السعودية.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cert 1 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
              <div className="text-xs font-bold text-sky-600 mb-2 font-mono">MOMRAH • بلدي</div>
              <h3 className="font-bold text-slate-900 mb-1">شهادة تصنيف مقدمي خدمات المدن</h3>
              <p className="text-xs text-slate-600 mb-4">تصنيف بالدرجة الأولى لمشاريع التشييد والبناء، وبدرجة تقييم فني 87.1 (A+).</p>
              <div className="text-xs font-semibold text-slate-400">شهادة رقم: 2024000266</div>
            </div>

            {/* Cert 2 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
              <div className="text-xs font-bold text-blue-600 mb-2 font-mono">SCA • هيئة المقاولين</div>
              <h3 className="font-bold text-slate-900 mb-1">شهادة عضوية مقاول</h3>
              <p className="text-xs text-slate-600 mb-4">عضوية رسمية معتمدة من الهيئة السعودية للمقاولين لمزاولة أعمال الإنشاء.</p>
              <div className="text-xs font-semibold text-slate-400">عضوية رقم: 422542259</div>
            </div>

            {/* Cert 3 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
              <div className="text-xs font-bold text-emerald-600 mb-2 font-mono">KIDANA • شركة كدانة</div>
              <h3 className="font-bold text-slate-900 mb-1">تسجيل بوابة (تسليم)</h3>
              <p className="text-xs text-slate-600 mb-4">شهادة تسجيل مقاول معتمد لدى شركة كدانة للتنمية والتطوير بالمشاعر المقدسة.</p>
              <div className="text-xs font-semibold text-slate-400">طلب رقم: 1482</div>
            </div>

            {/* Cert 4 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
              <div className="text-xs font-bold text-purple-600 mb-2 font-mono">QIWA • وزارة الموارد</div>
              <h3 className="font-bold text-slate-900 mb-1">شهادة التوطين</h3>
              <p className="text-xs text-slate-600 mb-4">تحقيق نسبة توطين 100%، نطاق أخضر صغير (فئة أ) ضمن برنامج نطاقات.</p>
              <div className="text-xs font-semibold text-slate-400">شهادة رقم: 476165-83293069</div>
            </div>
          </div>

          {/* Verification Bar */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-base text-white">التحقق الإلكتروني السريع</h4>
                <p className="text-xs text-slate-400">جميع وثائق وسجلات المنشأة مسجلة إلكترونياً لدى وزارة التجارة وهيئة الزكاة والضريبة والجمارك وموقع بلدي.</p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <span className="font-mono text-xs px-3 py-1.5 bg-slate-800 rounded-lg border border-slate-700 text-sky-300">سجل: 4031220618</span>
              <span className="font-mono text-xs px-3 py-1.5 bg-slate-800 rounded-lg border border-slate-700 text-sky-300">منشأة: 7005494344</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-sky-400 font-bold text-xs uppercase tracking-wider">تواصل معنا • Contact Us</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                جاهزون لبدء مشروعكم الإنشائي القادم
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                يسعدنا استقبال استفساراتكم ومناقشة متطلبات مشاريعكم الإنشائية والبنية التحتية في أي وقت عبر القنوات الرسمية التالية:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-medium">العنوان الوطني والرسمي:</span>
                    <span className="text-sm font-semibold text-white">مكة المكرمة - حي الملك فهد - شارع الحسين بن رواحة</span>
                    <span className="block text-xs text-slate-500 font-mono mt-0.5">الرمز البريدي: 24353 - مكة المكرمة</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-medium">الهاتف المباشر:</span>
                    <a href="tel:0597896656" className="text-sm font-semibold text-sky-400 hover:underline font-sans">0597896656</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-medium">البريد الإلكتروني:</span>
                    <a href="mailto:fklantan@gmail.com" className="text-sm font-semibold text-sky-400 hover:underline font-sans">fklantan@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="lg:col-span-7 bg-slate-800/80 border border-slate-700 rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">طلب استشارة أو عرض سعر</h3>
              <p className="text-xs text-slate-400 mb-6">أدخل بيانات مشروعك وسيقوم أحد مهندسينا بالتواصل معك في أقرب وقت.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">الاسم الكريم / اسم المنشأة</label>
                    <input
                      type="text"
                      placeholder="محمد علي"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">رقم الجوال</label>
                    <input
                      type="tel"
                      dir="ltr"
                      placeholder="05XXXXXXXX"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-sky-500 text-right"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">نوع المشروع المطلوب</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-hidden focus:border-sky-500">
                    <option>إنشاءات مباني عامة وسكنية</option>
                    <option>أعمال البنية التحتية وشبكات المياه/الصرف</option>
                    <option>تصريف السيول وأعمال الطرق</option>
                    <option>منشآت مائية وسدود وموانئ</option>
                    <option>مشروع حكومي / استثماري خاص</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">تفاصيل إضافية عن المشروع</label>
                  <textarea
                    rows={4}
                    placeholder="اكتب نبذة عن موقع ومساحة المشروع والجدول الزمني المتوقع..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-sky-500"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-3.5 rounded-xl transition duration-200 shadow-lg shadow-sky-500/20"
                >
                  إرسال الطلب الآن
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-right">
            <span className="text-slate-200 font-bold block mb-1">شركة خطوط الإنشاء للمقاولات العامة (شركة شخص واحد)</span>
            <span className="text-slate-500">سجل تجاري رقم: 4031220618 • الرقم الموحد: 7005494344 • مكة المكرمة</span>
          </div>
          <div className="text-center sm:text-left text-slate-500">
            جميع الحقوق محفوظة © {new Date().getFullYear()} شركة خطوط الإنشاء للمقاولات العامة
          </div>
        </div>
      </footer>
    </div>
  );
}
