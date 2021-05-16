(function(){var e="English",t="Кері",n="Желіні тексеру",r="Шығу",i="Netflix қолданб. шығу",s="Құрылғыны интернетке қосу мүмкін емес. Қосылым жұмыс істеп жатқанын тексеріңіз. Әрекет ${retrytime} секундтан соң қайталанады.",o="Netflix қолд. қате орын алды. Әрекет ${retrytime} сек. кейін қай-ы.",u={language:{name:"en",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"Осы құрылғыдағы Netflix қолданб. қалпына келтіру керек пе?",signoutSuccess:"Осы құрылғыны сәтті қалпына келтірдіңіз.",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"Бағд-ма нұсқасы",certVersion:"Сертификат нұсқасы",netflixVersion:"Netflix нұсқасы",deviceModel:"Құрылғы үлг.",sdkVersion:"SDK нұсқасы",platformVersion:"Платформа нұсқ."},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},member:{fields:{name:"Аты",email:"Эл.п"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"DNS серв-рі",wired:"Сымды",wireless:"Сымсыз"},"default":"Әдепкі: Иә",ipAddressTmpl:"IP мекенж: ${address}",connectedWifiTmpl:"Қосылған: ${connected} - ${ssid}",connectedTmpl:"Қосылған: ${connected}",connected:{"true":"Иә","false":"Жоқ"},name:"Аты: ${name}"},diagnostics:{results:{noInternet:"Құрылғыңызды интернетке қосу мүмкін емес. Қосылым жұмыс істеп жатқанын тексеріңіз.",noNetflix:"Netflix қолданбасына қосылмады. Әрекетті қай-з не үй желісін және ағындық құр-ны қайта қос-з. Қосымша ақпарат үшін netflix.com/nethelp бетіне кір-з.",noProblem:"Желі сәтті тексерілді."}},menu:{close:t,member:"Мүше",network:"Желі",device:"Құр-ғы",diagnose:n,signout:r,exitnetflix:i,back:t,reset:"Қалп. келтіру"},title:"Ақпарат"},errorPage:{runningDiagnostics:"Netflix қолданбасында қате орын алды. Мәселе анықталуда.",runningDiagnosticsPs3:"Netflix қолданбасында қате орын алды. Мәселе анықталуда. Netflix қолданбасынан шығу үшін басқару құралында PS түйм. басыңыз.",retryingNow:"Қосылу әрек-н қайталау...",retryingBiep_pluralNoconnection:s,retryingBiepSingularNoconnection:s,retryingBiep_plural:o,retryingBiepSingular:o,retryingBiepCode:"Код: ${code}"},networkDiagnostics:{error:{noNetflix:"Netflix қолданбасына қосылмады. Әрекетті қайт-з не үй желісін және ағындық құр-ны қайта қос-з. Қосымша ақпарат үшін netflix.com/nethelp.бетіне кір-з.<br/>Код: ${code}",noInternet:"Құрылғыңызды интернетке қосу мүмкін емес. Қосылым жұмыс істеп жатқанын тексеріңіз және әрекетті қайталаңыз.<br/>Код: ${code}",noNetflixPs3:"Netflix қолданбасына қосылмады. Әрекетті қайт-з не үй желісін және ағындық құрылғыны қайта қос-з. Қосымша ақп. үшін netflix.com/nethelp бетіне кіріңіз. Netflix қолданб-нан шығу үшін басқ құралында PS бас-з.<br/>Код: ${code}",noInternetPs3:"Құрылғыңызды интернетке қосу мүмкін емес. Қосылым жұмыс істеп жатқанын тексеріп, әрекетті қайт-з. Netflix қолд-нан шығу үшін басқару құралында PS түймесін бас-з.<br/>Код: ${code}"}},checkYourNetwork:{netflixServer:"Netflix серв. ${number}",internetConnection:"Интернет қосылымы",runningCheck:"Тексерілуде...",checkYourNetwork:n,introDescription:"Интернет қосылымында Netflix пайд-ға кедергі жасауы мүмкін мәселелер бар-жоғын тексер-з.",diagnosisFailure:"Желіні тексеру мүм емес. Әрекетті қайт-з не www.netflix.com/nethelp бетіне кір."},signOut:{signOut:r,introDescription:"Осы құрылғыда Netflix есептік жазбасынан шығ-з."},exitNetflix:{header:i,description:"Netflix қолданбасын жабыңыз."},responses:{confirm:"OK",exit:r,no:"Жоқ",reactivate:r,retry:"Қайталау",yes:"Иә",customerService:"Қосымша мәл."},reactivate:{getNewCredentialsError:"Осы құрылғыда Netflix өшірілген сияқты. Бұл есептік жазбада мәселе болуы мүмкін немесе құрылғыңыз Netflix.com ішінде өшірілген болуы мүмкін."},exitDialog:"Netflix қолд. шығу керек пе?",exitingMessage:"Шығу...",reset:{title:"Netflix қалп. келтіру",description:"Осы құрылғыда Netflix қолд. бастапқы қалпына келтіріңіз."},legend:{labels:{kids:"Бала",menu:"Мәзір",back:t}}}};util.localization.addCulture(u.language.name,u)})();