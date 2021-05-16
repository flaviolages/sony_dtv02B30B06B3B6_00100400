(function(){var e="English",t="पछाडि",n="होइन",r="साइन आउट गर्नुहोस्",i="Netflix बाट बाहिर निस्किनुहोस्",s="तपाईंको यन्त्र इन्टरनेटमा जडान नभएको हुनसक्छ। कृपया तपाईँको जडानले कार्य गरिरहेको निश्चित गर्नुहोस्। ${retrytime} सेकेन्डमा पुन: प्रयास गरिँदै। ",o="Netflix ले एउटा त्रुटिको सामना गरेको छ।  ${retrytime} सेकेन्डमा पुन: प्रयास गरिँदै।",u={language:{name:"en",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"कके तपाईं यस यन्त्रमा Netflix लाई रिसेट गर्ने बारेमा निश्चित हुनुहुन्छ?",signoutSuccess:"तपाईंले यो यन्त्रलाई सफलतापूर्वक रिसेट गर्नुभएको छ।",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"सफ्टवेयर संस्करण",certVersion:"पप्रमाणिकरण संस्करण",netflixVersion:"नेटफ्लिक्स संस्करण",deviceModel:"यन्त्र मोडेल",sdkVersion:"SDK संस्करण",platformVersion:"प्लेटफार्म संस्करण"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},member:{fields:{name:"नाम",email:"इमेल"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"DNS सर्भरहरू",wired:"तारयुक्त",wireless:"ताररहित"},"default":"पूर्वनिर्धारित:हो",ipAddressTmpl:"IP ठेगाना: ${address}",connectedWifiTmpl:"जडान गरियो: ${connected} - ${ssid}",connectedTmpl:"जडान गरियो: ${connected}",connected:{"true":"हो","false":n},name:"नाम: ${name}"},diagnostics:{results:{noInternet:"तपाईंको यन्त्र इन्टरनेटमा जडान नभएको हुनसक्छ। कृपया तपाईँको जडानले कार्य गरिरहेको निश्चित गर्नुहोस्।",noNetflix:"Netflix मा जडान गर्न सकिएन। कृपया पुनःप्रयास गर्नुहोस् अथवा आफ्नो गृह सञ्जाल र स्ट्रिमिङ यन्त्र पुन:सुचारू गर्नुहोस्। थप जानकारीको लागि, netflix.com/nethelp मा जानुहोस्।",noProblem:"सञ्जालको जाँच सफल भयो।"}},menu:{close:t,member:"सदस्य",network:"सञ्जाल",device:"यन्त्र",diagnose:"तपाईँको सञ्जालको जाँच गर्नुहोस्",signout:r,exitnetflix:i,back:"पछाडि जानुहोस्",reset:"रिसेट गर्नुहोस्"},title:"जानकारी"},errorPage:{runningDiagnostics:"Netflix ले एउटा त्रुटिको सामना गरेको छ। समस्या निर्धारण गर्न प्रयत्न गरिँदै।",runningDiagnosticsPs3:"Netflix ले एउटा त्रुटिको सामना गरेको छ। समस्या निर्धारण गर्न प्रयत्न गरिँदै। Netflix बाट बाहिर निस्किनको लागि, तपाईँको कन्ट्रोलरमा रहेको PS बटन थिच्नुहोस्।",retryingNow:"अब जडानको लागि पुन: प्रयास गरिँदै ...",retryingBiep_pluralNoconnection:s,retryingBiepSingularNoconnection:s,retryingBiep_plural:o,retryingBiepSingular:o,retryingBiepCode:"कोड: ${code}"},networkDiagnostics:{error:{noNetflix:"Netflix मा जडान गर्न सकिएन। कृपया पुनःप्रयास गर्नुहोस् अथवा आफ्नो गृह सञ्जाल र स्ट्रिमिङ यन्त्र पुन:सुचारू गर्नुहोस्। थप जानकारीको लागि, netflix.com/nethelp.<br/>Code: ${code} मा जानुहोस्।",noInternet:"तपाईंको यन्त्र इन्टरनेटमा जडान नभएको हुनसक्छ। कृपया तपाईँको जडानले कार्य गरिरहेको निश्चित गर्नुहोस् र पुन: प्रयास गर्नुहोस्।<br/>Code: ${code}",noNetflixPs3:"नNetflix मा जडान गर्न सकिएन। कृपया पुनःप्रयास गर्नुहोस् अथवा आफ्नो गृह सञ्जाल र स्ट्रिमिङ यन्त्र पुन:सुचारू गर्नुहोस्। थप जानकारीको लागि, netflix.com/nethelp मा जानुहोस्। Netflix बाट बाहिर निस्किनको लागि, तपाईँको कन्ट्रोलरमा रहेको PS बटन थिच्नुहोस्।<br/>Code: ${code}",noInternetPs3:"तपाईंको यन्त्र इन्टरनेटमा जडान नभएको हुनसक्छ। कृपया तपाईँको जडानले कार्य गरिरहेको निश्चित गर्नुहोस् र पुन: प्रयास गर्नुहोस्। Netflix बाट बाहिर निस्किनको लागि, तपाईँको कन्ट्रोलरमा रहेको PS बटन थिच्नुहोस्।<br/>Code: ${code}"}},checkYourNetwork:{netflixServer:"नेटफ्लिक्स सर्भर ${number}",internetConnection:"इन्टरनेट जडान",runningCheck:"जाँच प्रक्रिया जारी...",checkYourNetwork:"आफ्नो नेटवर्कको जाँच गर्नुहोस्",introDescription:"तपाईँलाई Netflix को प्रयोग गर्नबाट रोक्न सक्ने कुनै पनि समस्याहरूको लागि तपाईँको इन्टरनेट जडानको परीक्षण गर्नुहोस्।",diagnosisFailure:"तपाईंको नेटवर्कको जाँच गर्न असमर्थ। कृपया पुनः प्रयास गर्नुहोस् वा netflix.com/nethelp मा जानुहोस्।"},signOut:{signOut:r,introDescription:"यस यन्त्रमा तपाईँको Netflix खाताबाट साइन आउट गर्नुहोस्।"},exitNetflix:{header:i,description:"Netflix अनुप्रयोग बन्द गर्नुहोस्।"},responses:{confirm:"ठीक छ",exit:"बाहिर निस्किनुहोस्",no:n,reactivate:r,retry:"पुनः प्रयास गर्नुहोस्",yes:"हो",customerService:"थप विवरणहरू"},reactivate:{getNewCredentialsError:"यस यन्त्रमा Netflix लाई निष्क्रिय गरिएको जस्तो देखिन्छ। यो तपाईँको खाताको समस्याले गर्दा हुनसक्छ, वा सायद तपाईँको यन्त्र Netflix.com मा निष्क्रिय पारियो।"},exitDialog:"कके तपाईँ Netflix बाट बाहिर निस्कन चाहनुहुन्छ?",exitingMessage:"बाहिर निस्किँदै...",reset:{title:"नNetflix लाई रिसेट गर्नुहोस्",description:"यस यन्त्रमा Netflix लाई यसको मूल अवस्थामा लैजानको निम्ति रिसेट गर्नुहोस्।"},legend:{labels:{kids:"बालबालिकाहरू",menu:"मेनु",back:t}}}};util.localization.addCulture(u.language.name,u)})();