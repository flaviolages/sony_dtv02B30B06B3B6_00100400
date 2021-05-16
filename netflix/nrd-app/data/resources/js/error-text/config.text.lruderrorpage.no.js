(function(){var e="Tilbake",t="Kontroller nettverket",n="Logg av",r="Avslutt Netflix",i={language:{name:"no",englishName:"Norwegian (Bokmål)",nativeName:"norsk (bokmål)",isRtl:!1,language:"no",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":" ",".":",",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":" ",".":",",symbol:"%"},currency:{pattern:{0:"$ -n",1:"$ n",length:2},decimals:2,groupSizes:{0:3,length:1},",":" ",".":",",symbol:"kr"}},calendar:{name:"Gregorian_USEnglish","/":".","&#58;":":",firstDay:1,days:{names:{0:"søndag",1:"mandag",2:"tirsdag",3:"onsdag",4:"torsdag",5:"fredag",6:"lørdag",length:7},namesAbbr:{0:"sø",1:"ma",2:"ti",3:"on",4:"to",5:"fr",6:"lø",length:7},namesShort:{0:"sø",1:"ma",2:"ti",3:"on",4:"to",5:"fr",6:"lø",length:7}},months:{names:{0:"januar",1:"februar",2:"mars",3:"april",4:"mai",5:"juni",6:"juli",7:"august",8:"september",9:"oktober",10:"november",11:"desember",12:"",length:13},namesAbbr:{0:"jan",1:"feb",2:"mar",3:"apr",4:"mai",5:"jun",6:"jul",7:"aug",8:"sep",9:"okt",10:"nov",11:"des",12:"",length:13}},AM:"",PM:"",eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"dd.MM.yyyy",D:"d. MMMM yyyy",t:"HH:mm",T:"HH:mm:ss",f:"d. MMMM yyyy HH:mm",F:"d. MMMM yyyy HH:mm:ss",M:"d. MMMM",Y:"MMMM yyyy",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"Er du sikker på at du vil tilbakestille Netflix på denne enheten?",signoutSuccess:"Du har tilbakestilt enheten.",legend:{back:e},device:{fields:{esn:"ESN",softwareVersion:"Programvareversjon",certVersion:"Sertifikatversjon",netflixVersion:"Netflix-versjon",deviceModel:"Enhetsmodell",sdkVersion:"SDK-versjon",platformVersion:"Platformversjon"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},member:{fields:{name:"Navn",email:"E-post"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"DNS-servere",wired:"Kablet",wireless:"Trådløs"},"default":"Standard: Ja",ipAddressTmpl:"IP-adresse: ${address}",connectedWifiTmpl:"Tilkoblet: ${connected} – ${ssid}",connectedTmpl:"Tilkoblet: ${connected}",connected:{"true":"Ja","false":"Nei"},name:"Navn: ${name}"},diagnostics:{results:{noInternet:"Enheten din er muligens ikke koblet til Internett. Sørg for at nettilkoblingen din fungerer som den skal.",noNetflix:"Kunne ikke koble til Netflix. Prøv på nytt eller start hjemmenettverket og strømmeenheten på nytt. For mer informasjon besøk netflix.com/nethelp.",noProblem:"Nettverkssjekk vellykket."}},menu:{close:e,member:"Medlem",network:"Nettverk",device:"Enhet",diagnose:t,signout:n,exitnetflix:r,back:"Gå tilbake",reset:"Tilbakestill"},title:"Informasjon"},errorPage:{runningDiagnostics:"Netflix har oppdaget en feil. Vi forsøker å løse problemet.",runningDiagnosticsPs3:"Netflix har støtt på et problem. Vi forsøker å fastslå hva problemet er. For å avslutte Netflix, trykk på PS-knappen på spillkontrolleren.",retryingNow:"Prøver nettilkoblingen nå …",retryingBiep_pluralNoconnection:"Enheten din er muligens ikke koblet til Internett. Sørg for at nettilkoblingen din fungerer som den skal. Prøver på nytt om ${retrytime} sekunder.",retryingBiepSingularNoconnection:"Enheten din er muligens ikke koblet til Internett. Sørg for at nettilkoblingen din fungerer som den skal. Prøver på nytt om ${retrytime} sekund.",retryingBiep_plural:"Netflix har oppdaget en feil. Prøver på nytt om ${retrytime} sekunder.",retryingBiepSingular:"Netflix har oppdaget en feil. Prøver på nytt om ${retrytime} sekund.",retryingBiepCode:"Kode: ${code}"},networkDiagnostics:{error:{noNetflix:"Kunne ikke koble til Netflix. Prøv på nytt eller start hjemmenettverket og strømmeenheten på nytt. For mer informasjon besøk netflix.com/nethelp.<br/>Code: ${code}",noInternet:"Enheten din er muligens ikke koblet til Internett. Sørg for at nettilkoblingen din fungerer som den skal og prøv på nytt.<br/>Kode: ${code}",noNetflixPs3:"Kunne ikke koble til Netflix. Prøv på nytt eller start hjemmenettverket og strømmeenheten på nytt. For mer informasjon besøk netflix.com/nethelp. For å avslutte Netflix, trykk på PS-knappen på spillkontrolleren.<br/>Kode: ${code}",noInternetPs3:"Enheten din er muligens ikke koblet til Internett. Sørg for at nettilkoblingen din fungerer som den skal, og prøv på nytt. For å avslutte Netflix, trykk på PS-knappen på spillkontrollere.<br/>Kode: ${code}"}},checkYourNetwork:{netflixServer:"Netflix-server ${number}",internetConnection:"Internett-tilkobling",runningCheck:"Kjører sjekk ...",checkYourNetwork:t,introDescription:"Test Internett-tilkoblingen",diagnosisFailure:"Vi kunne ikke sjekke nettverket ditt. Prøv på nytt, eller besøk www.netflix.com/nethelp."},signOut:{signOut:n,introDescription:"Logg av Netflix-kontoen din på denne enheten."},exitNetflix:{header:r,description:"Lukk Netflix-applikasjonen."},responses:{confirm:"OK",exit:"Avslutt",no:"Nei",reactivate:n,retry:"Prøv på nytt",yes:"Ja",customerService:"Mer informasjon"},reactivate:{getNewCredentialsError:"Det ser ut til at Netflix har blitt deaktivert på denne enheten. Det kan ha oppstått et problem med kontoen din, eller enheten kan ha blitt deaktivert på Netflix.com."},exitDialog:"Vil du avslutte Netflix?",exitingMessage:"Avslutter ...",reset:{title:"Tilbakestill Netflix",description:"Tilbakestill Netflix på denne enheten til opprinnelig tilstand."},legend:{labels:{kids:"Kids",menu:"Meny",back:e}}},"undefined":"in for eventuelle problemer som hindrer tilgang til Netflix."};util.localization.addCulture(i.language.name,i)})();