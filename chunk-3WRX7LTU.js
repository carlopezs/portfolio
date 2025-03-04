import{Bb as C,Cb as x,Db as w,Eb as i,Fb as a,Gb as p,Va as g,Xb as n,Yb as S,Z as h,Za as r,Zb as T,da as v,fb as b,kb as l,mc as d,wb as s,xa as y}from"./chunk-NMHPVDG7.js";var m=class t{certificate=y.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["certificates-card"]],inputs:{certificate:[1,"certificate"]},decls:13,vars:4,consts:[[1,"flex","flex-col","space-y-2","rounded-md","pb-6","bg-primary","text-white","laptop:pb-3"],[1,"h-64"],[1,"h-full","w-full","object-cover",3,"src"],[1,"flex","flex-col","space-y-3","px-5"],[1,"font-bold","line-clamp-1"],[1,"text-sm","h-24","text-ellipsis"],[1,"line-clamp-4"],["target","_blank",1,"border","cursor-pointer","border-white","py-2","px-4","rounded","text-center","hover:text-white","hover:bg-secondary","hover:border-secondary","hover:scale-105","laptop:w-36",3,"href"],[1,"flex","justify-center","items-center","space-x-2"],[1,"text-sm"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div",1),p(2,"img",2),a(),i(3,"div",3)(4,"h3",4),n(5),a(),i(6,"div",5)(7,"p",6),n(8),a()(),i(9,"a",7)(10,"div",8)(11,"span",9),n(12,"Show"),a()()()()()),e&2&&(r(2),s("src",o.certificate().image,g),r(3),S(o.certificate().courseTitle),r(3),T(" ",o.certificate().description," "),r(),s("href",o.certificate().url,g))},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var j=[{courseTitle:"Complete Guide to MongoDB",instructor:"Cristian Donayre",url:"https://1drv.ms/i/c/a04ce88700838c87/EQIZQopNcg9BiIskQ2gkHMMBXUpYLaOgMvlSyab9Fct74w?e=aulKJJ",description:"Learn how to design, manage, and optimize NoSQL databases with MongoDB. This course covers CRUD operations, indexing, aggregation, and best practices for data modeling.",image:"images/certificates/bdd/mongo.jpg"},{courseTitle:"Angular: From Zero to Expert",instructor:"Fernando Herrera",url:"https://1drv.ms/b/c/a04ce88700838c87/EXGVp1Scdx9IpXKj36F_SVgB5G6RrZWjsXwIkkm7tecyfw?e=sgkejQ",description:"Master Angular from the basics to advanced concepts. Learn how to build scalable and dynamic web applications using components, services, RxJS, and state management.",image:"images/certificates/angular/angular_cero_experto.jpg"},{courseTitle:"Layout with Angular CDK and Tailwind",instructor:"Nicolas Molina",url:"https://1drv.ms/b/c/a04ce88700838c87/EW_PKpORpZNJsAsNh4Ju4JQBTeVmP-zjbERICQdqLW5-7g?e=MKghnQ",description:"Learn how to create efficient and responsive UI layouts using Angular CDK and Tailwind CSS. This course focuses on component customization, styling, and performance optimization.",image:"images/certificates/angular/angular_tailwind.jpg"},{courseTitle:"Technical Test: Frontend Development with Angular",instructor:"Nicolas Molina",url:"https://1drv.ms/b/c/a04ce88700838c87/EZ3poHPZTl1MvphPf31hULYB-gdHOHzVmF-b1xpJEQM8BA?e=3PLjH7",description:"Successfully completed a technical test focused on Angular development, demonstrating proficiency in component-based architecture, state management, and application performance optimization.",image:"images/certificates/angular/prueba_angular.jpg"},{courseTitle:"SOLID Principles and Clean Code",instructor:"Fernando Herrera",url:"",description:"Learn and apply SOLID principles to write maintainable, scalable, and efficient code. This course emphasizes clean coding practices and best design patterns.",image:"images/certificates/other/principios_solid.jpg"},{courseTitle:"Intermediate Level Flutter",instructor:"Fernando Herrera",url:"",description:"Enhance Flutter development skills by learning advanced UI components, state management techniques, animations, and API integration to build high-performance mobile applications.",image:"images/certificates/flutter/flutter_nivel_intermedio.jpg"},{courseTitle:"Flutter: From Zero to Expert",instructor:"Fernando Herrera",url:"",description:"Master Flutter and Dart from the basics to advanced concepts. Build cross-platform mobile applications with custom widgets, animations, and backend integration.",image:"images/certificates/flutter/flutter.jpg"},{courseTitle:"TypeScript Fundamentals",instructor:"Nicolas Molina",url:"",description:"Understand TypeScript\u2019s core features, including types, interfaces, generics, and advanced object-oriented programming concepts. Learn how to improve JavaScript code with strong typing and scalability.",image:"images/certificates/angular/typescript.jpg"},{courseTitle:"Asynchrony with JavaScript",instructor:"Platzi",url:"",description:"Master asynchronous programming in JavaScript, covering callbacks, promises, and async/await. Learn best practices to handle API requests, event loops, and concurrency efficiently.",image:"images/certificates/javascript/asincronismo_js.jpg"}];var f=class t{_certificates=b([]);certificates=d(()=>this._certificates());constructor(){}loadCertificates(){setTimeout(()=>{this._certificates.set([...j])},0)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"})};function F(t,c){if(t&1&&p(0,"certificates-card",5),t&2){let e=c.$implicit;s("certificate",e)}}var u=class t{certificatesService=v(f);certificates=d(()=>this.certificatesService.certificates());ngOnInit(){this.certificatesService.loadCertificates()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-certificates"]],decls:9,vars:0,consts:[[1,"common-vertical-padding","bg-primary","text-white","py-14","laptop:py-20"],[1,"flex","flex-col","space-y-3","laptop:flex-row","laptop:items-center"],[1,"text-3xl","font-bold","w-2/3"],[1,"text-sm","flex-grow-1"],[1,"px-9","grid","flex-wrap","py-10","gap-5","laptop:gap-20","laptop:grid-cols-3"],[3,"certificate"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),n(3,"My Certificates"),a(),i(4,"p",3),n(5," I have earned multiple certifications that showcase my expertise in both frontend and backend development. These certifications highlight my dedication to continuous learning and my commitment to staying up to date with the latest industry trends and technologies. By constantly improving my skills, I strive to deliver high-quality solutions and stay ahead in the ever-evolving world of software development. "),a()()(),i(6,"div",4),x(7,F,1,1,"certificates-card",5,C),a()),e&2&&(r(7),w(o.certificates()))},dependencies:[m],encapsulation:2})};export{u as default};
