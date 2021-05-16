(function(){var e="English",t="Ետ",n="Ստուգեք ձեր ցանցը",r="Դուրս գալ",i="Փակել Netflix-ը",s="Ձեր սարքը, հավանաբար, միացված չէ համացանցին: Համոզվեք, որ ընթացիկ միացումը գործում է: Փորձը կկրկնվի ${retrytime} վայրկյանից:",o="Netflix-ում սխալ է առաջացել: Փորձը կկրկնվի ${retrytime} վայրկյանից:",u={language:{name:"en",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"Իրո՞ք ուզում եք վերաբեռնել Netflix-ն այս սարքում:",signoutSuccess:"Սարքը հաջողությամբ վերաբեռնվեց:",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"Ծրագրային տարբերակ",certVersion:"Վկայագրման տարբերակ",netflixVersion:"Netflix-ի տարբերակ",deviceModel:"Սարքի մոդել",sdkVersion:"SDK-ի տարբերակ",platformVersion:"Ծրագրային պլատֆորմի տարբերակ"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},member:{fields:{name:"Անուն",email:"Էլ-փոստ"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"DNS սերվերներ",wired:"Լարային կապ",wireless:"Անլար կապ"},"default":"Ըստ կանխադրման՝ այո",ipAddressTmpl:"IP հասցեն՝ ${address}",connectedWifiTmpl:"Միացած է՝ ${connected} - ${ssid}",connectedTmpl:"Միացած է՝ ${connected}",connected:{"true":"Այո","false":"Ոչ"},name:"Անունը՝ ${name}"},diagnostics:{results:{noInternet:"Ձեր սարքը, հավանաբար, միացած չէ համացանցին: Համոզվեք, որ կապը գործում է:",noNetflix:"Չհաջողվեց միանալ Netflix-ին: Փորձեք կրկին կամ վերաբեռնեք ձեր տան ցանցը և այս սարքը: Լրացուցիչ տեղեկությունների համար այցելեք netflix.com/nethelp:",noProblem:"Ցանցը բարեհաջող ստուգվեց:"}},menu:{close:t,member:"Անդամ",network:"Ցանց",device:"Սարք",diagnose:n,signout:r,exitnetflix:i,back:"Գնալ ետ",reset:"Վերաբեռնել"},title:"Ինֆորմացիա"},errorPage:{runningDiagnostics:"Netflix-ը սխալ է նկատել: Փորձում է պարզել խնդիրը:",runningDiagnosticsPs3:"Netflix-ը սխալ է նկատել: Փորձում է պարզել խնդիրը: Netflix-ից դուրս գալու համար սեղմեք հսկիչի PS կոճակը:",retryingNow:"Փորձում է նորից միանալ ...",retryingBiep_pluralNoconnection:s,retryingBiepSingularNoconnection:s,retryingBiep_plural:o,retryingBiepSingular:o,retryingBiepCode:"Կոդը՝ ${code}"},networkDiagnostics:{error:{noNetflix:"Չհաջողվեց միանալ Netflix-ին: Փորձեք կրկին կամ վերաբեռնեք ձեր տան ցանցը և այս սարքը: Լրացուցիչ տեղեկությունների համար<br/>այցելեք netflix.com/nethelp: Կոդը՝ ${code}",noInternet:"Ձեր սարքը, հավանաբար, միացած չէ համացանցին: Համոզվեք, որ ընթացիկ միացումը գործում է, և կրկին փորձեք:<br/>Կոդը՝ ${code}",noNetflixPs3:"Չհաջողվեց միանալ Netflix-ին: Փորձեք կրկին կամ վերաբեռնեք ձեր տան ցանցը և այս սարքը: Լրացուցիչ տեղեկությունների համար այցելեք netflix.com/nethelp: Netflix-ից դուրս գալու համար սեղմեք հսկիչի PS կոճակը:<br/>Կոդը՝ ${code}",noInternetPs3:"Ձեր սարքը, հավանաբար, միացած չէ համացանցին: Համոզվեք, որ ընթացիկ միացումը գործում է, և նորից փորձեք: Netflix-ից դուրս գալու համար սեղմեք հսկիչի PS կոճակը:<br/>Կոդը՝ ${code}"}},checkYourNetwork:{netflixServer:"Netflix սերվեր ${number}",internetConnection:"Համացանցի միացում",runningCheck:"Ստուգում...",checkYourNetwork:n,introDescription:"Ստուգեք համացանցի միացման խնդիրները, որոնք կարող են խոչընդոտել Netflix-ի գործածմանը:",diagnosisFailure:"Հնարավոր չէ ստուգել ձեր ցանցը: Փորձեք կրկին կամ այցելեք www.netflix.com/nethelp:"},signOut:{signOut:r,introDescription:"Դուրս եկեք ձեր Netflix-ի հաշվից այս սարքում:"},exitNetflix:{header:i,description:"Փակել Netflix ծրագիրը:"},responses:{confirm:"OK",exit:"Ելք",no:"Ոչ",reactivate:r,retry:"Փորձել կրկին",yes:"Այո",customerService:"Լրացուցիչ մանրամասներ"},reactivate:{getNewCredentialsError:"Netflix-ը, հավանաբար, այս սարքում ապաակտիվացված է: Պատճառը կարող է լինել ձեր հաշվի հետ կապված խնդիր կամ սարքի ապաակտիվացումը Netflix.com-ից:"},exitDialog:"Դուրս գա՞լ Netflix-ից:",exitingMessage:"Ելք...",reset:{title:"Վերաբեռնել Netflix-ը",description:"Այս սարքում Netflix-ը վերադարձեք իր սկզբնական վիճակին:"},legend:{labels:{kids:"Մանկական",menu:"Ցանկ",back:t}}}};util.localization.addCulture(u.language.name,u)})();