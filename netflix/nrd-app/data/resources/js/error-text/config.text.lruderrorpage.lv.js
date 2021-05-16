(function(){var e="English",t="Atpakaļ",n="Izrakstīties",r={language:{name:"en",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"Vai tiešām vēlaties atiestatīt Netflix šajā ierīcē?",signoutSuccess:"Ierīce veiksmīgi atiestatīta.",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"Programmatūras versija",certVersion:"Sertifikācijas versija",netflixVersion:"Netflix versija",deviceModel:"Ierīces modelis",sdkVersion:"SDK versija",platformVersion:"Platformas versija"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},member:{fields:{name:"Vārds, uzvārds",email:"E-pasts"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"DNS serveri",wired:"Vadu",wireless:"Bezvadu"},"default":"Noklusējums: jā",ipAddressTmpl:"IP adrese: ${address}",connectedWifiTmpl:"Savienots: ${connected} - ${ssid}",connectedTmpl:"Savienots: ${connected}",connected:{"true":"jā","false":"nē"},name:"Nosaukums: ${name}"},diagnostics:{results:{noInternet:"Iespējams, ierīcei nav interneta savienojuma. Pārliecinieties, vai savienojums darbojas.",noNetflix:"Nevar izveidot savienojumu ar Netflix. Mēģiniet vēlreiz vai restartējiet mājas tīklu un straumēšanas ierīci. Lai iegūtu papildinformāciju, apmeklējiet vietni netflix.com/nethelp.",noProblem:"Tīkla pārbaude sekmīga."}},menu:{close:t,member:"Dalībnieks",network:"Tīkls",device:"Ierīce",diagnose:"Pārbaudīt tīklu",signout:n,exitnetflix:"Iziet no Netflix",back:"Doties atpakaļ",reset:"Atiestatīt"},title:"Informācija"},errorPage:{runningDiagnostics:"Netflix kļūda. Mēģina konstatēt problēmu.",runningDiagnosticsPs3:"Netflix kļūda. Mēģina konstatēt problēmu. Lai izietu no Netflix, nospiediet kontrollera pogu PS.",retryingNow:"Mēģina atkārtoti izveidot savienojumu...",retryingBiep_pluralNoconnection:"Iespējams, ierīcei nav interneta savienojuma. Pārliecinieties, vai savienojums darbojas. Atkārtots mēģinājums pēc ${retrytime} sekundēm.",retryingBiepSingularNoconnection:"Iespējams, ierīcei nav interneta savienojuma. Pārliecinieties, vai savienojums darbojas. Atkārtots mēģinājums pēc ${retrytime} sekundes.",retryingBiep_plural:"Netflix kļūda. Atkārtots mēģinājums pēc ${retrytime} sekundēm.",retryingBiepSingular:"Netflix kļūda. Atkārtots mēģinājums pēc ${retrytime} sekundes.",retryingBiepCode:"Kods: ${code}"},networkDiagnostics:{error:{noNetflix:"Nevar izveidot savienojumu ar Netflix. Mēģiniet vēlreiz vai restartējiet mājas tīklu un straumēšanas ierīci. Lai iegūtu papildinformāciju, apmeklējiet vietni netflix.com/nethelp. <br/>Kods: ${code}",noInternet:"Iespējams, ierīcei nav interneta savienojuma. Pārliecinieties, vai savienojums darbojas, un mēģiniet vēlreiz. <br/>Kods: ${code}",noNetflixPs3:"Nevar izveidot savienojumu ar Netflix. Mēģiniet vēlreiz vai restartējiet mājas tīklu un straumēšanas ierīci. Lai iegūtu papildinformāciju, apmeklējiet vietni netflix.com/nethelp. Lai izietu no Netflix, nospiediet kontrollera pogu PS. <br/>Kods: ${code}",noInternetPs3:"Iespējams, ierīcei nav interneta savienojuma. Pārliecinieties, vai savienojums darbojas, un mēģiniet vēlreiz. Lai izietu no Netflix, nospiediet kontrollera pogu PS. <br/>Kods: ${code}"}},checkYourNetwork:{netflixServer:"Netflix serveris ${number}",internetConnection:"Interneta savienojums",runningCheck:"Notiek pārbaude...",checkYourNetwork:"Tīkla pārbaude",introDescription:"Pārbauda, vai nav radušās interneta savienojuma problēmas, kas neļauj lietot Netflix.",diagnosisFailure:"Nevar pārbaudīt tīklu. Mēģiniet vēlreiz vai apmeklējiet www.netflix.com/nethelp."},signOut:{signOut:"Izrakstīšanās",introDescription:"Izrakstās no ierīces Netflix konta."},exitNetflix:{header:"Iziešana no Netflix",description:"Aizver lietotni Netflix."},responses:{confirm:"Labi",exit:"Iziet",no:"Nē",reactivate:n,retry:"Mēģināt vēlreiz",yes:"Jā",customerService:"Papildinformācija"},reactivate:{getNewCredentialsError:"Šķiet, Netflix šajā ierīcē ir deaktivizēta. Iespējams, radusies problēma ar jūsu kontu vai ierīce deaktivizēta, izmantojot Netflix.com."},exitDialog:"Vai vēlaties iziet no Netflix?",exitingMessage:"Iziet...",reset:{title:"Netflix atiestatīšana",description:"Atiestata ierīcē Netflix sākotnējos iestatījumus."},legend:{labels:{kids:"Bērni",menu:"Izvēlne",back:t}}}};util.localization.addCulture(r.language.name,r)})();