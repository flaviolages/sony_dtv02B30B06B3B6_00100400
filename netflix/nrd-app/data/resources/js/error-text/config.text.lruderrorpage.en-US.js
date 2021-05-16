(function(){var e="English (United States)",t="Back",n="Check your network",r="Sign out",i="Exit Netflix",s={language:{name:"en-US",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"Are you sure that you want to reset Netflix on this device?",signoutSuccess:"You have successfully reset this device.",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"Software version",certVersion:"Certification version",netflixVersion:"Netflix version",deviceModel:"Device model",sdkVersion:"SDK version",platformVersion:"Platform version"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},member:{fields:{name:"Name",email:"Email"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"DNS servers",wired:"Wired",wireless:"Wireless"},"default":"Default: Yes",ipAddressTmpl:"IP Address: ${address}",connectedWifiTmpl:"Connected: ${connected} - ${ssid}",connectedTmpl:"Connected: ${connected}",connected:{"true":"Yes","false":"No"},name:"Name: ${name}"},diagnostics:{results:{noInternet:"Your device may not be connected to the Internet. Please make sure your connection is working.",noNetflix:"Couldn't connect to Netflix. Please try again or restart your home network and streaming device. For more information, visit netflix.com/nethelp.",noProblem:"Network check successful."}},menu:{close:t,member:"Member",network:"Network",device:"Device",diagnose:n,signout:r,exitnetflix:i,back:"Go back",reset:"Reset"},title:"Information"},errorPage:{runningDiagnostics:"Netflix has encountered an error. Attempting to determine problem.",runningDiagnosticsPs3:"Netflix has encountered an error. Attempting to determine problem. To exit Netflix, press the PS button on your controller.",retryingNow:"Retrying connection now ...",retryingBiep_pluralNoconnection:"Your device may not be connected to the Internet. Please make sure your connection is working. Retrying in ${retrytime} seconds.",retryingBiepSingularNoconnection:"Your device may not be connected to the Internet. Please make sure your connection is working. Retrying in ${retrytime} second.",retryingBiep_plural:"Netflix has encountered an error. Retrying in ${retrytime} seconds.",retryingBiepSingular:"Netflix has encountered an error. Retrying in ${retrytime} second.",retryingBiepCode:"Code: ${code}"},networkDiagnostics:{error:{noNetflix:"Couldn't connect to Netflix. Please try again or restart your home network and streaming device. For more information, visit netflix.com/nethelp.<br/>Code: ${code}",noInternet:"Your device may not be connected to the Internet. Please make sure your connection is working and try again.<br/>Code: ${code}",noNetflixPs3:"Couldn't connect to Netflix. Please try again or restart your home network and streaming device. For more information, visit netflix.com/nethelp. To exit Netflix, press the PS button on your controller.<br/>Code: ${code}",noInternetPs3:"Your device may not be connected to the Internet. Please make sure your connection is working and try again. To exit Netflix, press the PS button on your controller.<br/>Code: ${code}"}},checkYourNetwork:{netflixServer:"Netflix server ${number}",internetConnection:"Internet connection",runningCheck:"Running check...",checkYourNetwork:n,introDescription:"Test your Internet connection for any problems that might prevent you from using Netflix.",diagnosisFailure:"Unable to check your network. Please try again or visit www.netflix.com/nethelp."},signOut:{signOut:r,introDescription:"Sign out of your Netflix account on this device."},exitNetflix:{header:i,description:"Close the Netflix application."},responses:{confirm:"OK",exit:"Exit",no:"No",reactivate:"Sign Out",retry:"Try Again",yes:"Yes",customerService:"More Details"},reactivate:{getNewCredentialsError:"It looks like Netflix has been deactivated on this device. It could be an issue with your account, or perhaps your device was deactivated on Netflix.com."},exitDialog:"Do you want to exit Netflix?",exitingMessage:"Exiting...",reset:{title:"Reset Netflix",description:"Reset Netflix on this device back to its original state."},legend:{labels:{kids:"Kids",menu:"Menu",back:t}}}};util.localization.addCulture(s.language.name,s)})();