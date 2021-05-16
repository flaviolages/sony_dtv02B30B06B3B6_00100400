(function(){var e="English",t="بازگشت",n="بررسی شبکه شما",r="خروج از سیستم",i="خروج از Netflix",s="ممکن است دستگاه شما به اینترنت متصل نباشد. لطفا مطمئن شوید که اتصال برقرار است. سعی مجدد ظرف مدت ${retrytime} ثانیه انجام میگیرد.",o="‏Netflix با خطایی روبرو شده است. سعی مجدد ظرف مدت ${retrytime} ثانیه انجام میگیرد.",u={language:{name:"en",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"آيا از بازنشانی Netflix در اين دستگاه اطمینان دارید؟",signoutSuccess:"شما این دستگاه را با موفقیت بازنشانی کردهاید.",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"نسخه نرمافزار",certVersion:"نسخه گواهی",netflixVersion:"نسخه Netflix",deviceModel:"مدل دستگاه",sdkVersion:"نسخه SDK",platformVersion:"نسخه پلتفرم"},netflixVersionTmpl:"‎nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}‎",sdkVersionTmpl:"‎sdk ${sdk}‎"},member:{fields:{name:"نام",email:"ایمیل"},nameTmpl:"‎${firstName} ${lastName}‎"},network:{fields:{dnsServers:"سرورهای DNS",wired:"سیمی",wireless:"بیسیم"},"default":"پيشفرض: بله",ipAddressTmpl:"آدرس IP:‏ ${address}",connectedWifiTmpl:"متصل: ‎${connected} - ${ssid}‎",connectedTmpl:"متصل: ${connected}",connected:{"true":"بله","false":"خير"},name:"نام: ${name}"},diagnostics:{results:{noInternet:"ممکن است دستگاه شما به اینترنت متصل نباشد. لطفا مطمئن شوید که اتصال برقرار است.",noNetflix:"اتصال به Netflix ممکن نیست. لطفا دوباره سعی کنید یا شبکه خانگی و دستگاه پخش مستقیم خود را مجددا راهاندازی نمایید. براي اطلاعات بيشتر، به netflix.com/nethelp مراجعه کنید.",noProblem:"بررسی شبکه موفق بود."}},menu:{close:t,member:"عضو",network:"شبکه",device:"دستگاه",diagnose:n,signout:r,exitnetflix:i,back:"بازگشت به عقب",reset:"بازنشانی"},title:"اطلاعات"},errorPage:{runningDiagnostics:"‏Netflix با خطایی روبرو شده است. تلاش برای تعیین مشکل درحال انجام است.",runningDiagnosticsPs3:"‏Netflix با خطایی روبرو شده است. تلاش برای تعیین مشکل درحال انجام است. برای خروج از Netflix، دکمه PS را بر روی دستگاه کنترل خود فشار دهید.",retryingNow:"در حال سعی مجدد برای اتصال ...",retryingBiep_pluralNoconnection:s,retryingBiepSingularNoconnection:s,retryingBiep_plural:o,retryingBiepSingular:o,retryingBiepCode:"کد: ${code}"},networkDiagnostics:{error:{noNetflix:"اتصال به Netflix ممکن نیست. لطفا دوباره سعی کنید یا شبکه خانگی و دستگاه پخش مستقیم خود را مجددا راهاندازی نمایید. براي اطلاعات بيشتر، به netflix.com/nethelp مراجعه کنید.<br/>کد: ${code}",noInternet:"ممکن است دستگاه شما به اینترنت متصل نباشد. لطفا مطمئن شوید که اتصال برقرار است و دوباره سعی کنید.<br/>کد: ${code}",noNetflixPs3:"اتصال به Netflix ممکن نیست. لطفا دوباره سعی کنید یا شبکه خانگی و دستگاه پخش مستقیم خود را مجددا راهاندازی نمایید. براي اطلاعات بيشتر، به netflix.com/nethelp مراجعه کنید. برای خروج از Netflix، دکمه PS را بر روی دستگاه کنترل خود فشار دهید.<br/>کد: ${code}",noInternetPs3:"ممکن است دستگاه شما به اینترنت متصل نباشد. لطفا مطمئن شوید که اتصال برقرار است و دوباره سعی کنید. برای خروج از Netflix، دکمه PS را بر روی دستگاه کنترل خود فشار دهید.<br/>کد: ${code}"}},checkYourNetwork:{netflixServer:"سرور Netflix ‏${number}",internetConnection:"اتصال اینترنت",runningCheck:"درحال اجرای بررسی...",checkYourNetwork:n,introDescription:"اتصال اینترنت خود را از نظر وجود مشکلاتی که ممکن است مانع از استفاده شما از Netflix گردند آزمایش کنید.",diagnosisFailure:"بررسی شبکه شما ممکن نیست. لطفا دوباره سعی کنید یا به www.netflix.com/nethelp مراجعه نمایید."},signOut:{signOut:r,introDescription:"از حساب کاربری Netflix خود در این دستگاه خارج شوید."},exitNetflix:{header:i,description:"برنامه Netflix را ببندید."},responses:{confirm:"تایید",exit:"خروج",no:"خير",reactivate:r,retry:"سعی مجدد",yes:"بله",customerService:"جزئیات بیشتر"},reactivate:{getNewCredentialsError:"به نظر میرسد Netflix در این دستگاه غیرفعال شده است. ممکن است مشکلی در خصوص حساب کاربری شما وجود داشته باشد، یا ممکن است دستگاه شما در Netflix.com غیرفعال شده باشد."},exitDialog:"آیا مایلید از Netflix خارج شوید؟",exitingMessage:"در حال خروج...",reset:{title:"بازنشانی Netflix",description:"‏Netflix را در این دستگاه به وضعیت اصلی آن بازنشانی کنید."},legend:{labels:{kids:"کودکان",menu:"منو",back:t}}}};util.localization.addCulture(u.language.name,u)})();