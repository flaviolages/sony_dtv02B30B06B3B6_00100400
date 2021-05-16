(function(){var e="English",t="Kembali",n="Tidak",r="Cek jaringan Anda",i="Keluar",s="Tutup Netflix",o="Perangkat Anda mungkin tidak terhubung ke Internet. Pastikan koneksi Internet Anda berfungsi. Mencoba kembali dalam ${retrytime} detik.",u="Netflix mengalami kesalahan. Mencoba kembali dalam ${retrytime} detik.",a={language:{name:"en",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"Apakah Anda yakin ingin mengeset ulang Netflix di perangkat ini?",signoutSuccess:"Anda telah berhasil mengeset ulang perangkat ini.",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"Versi perangkat lunak",certVersion:"Versi sertifikat",netflixVersion:"Versi Netflix",deviceModel:"Model perangkat",sdkVersion:"Versi SDK",platformVersion:"Versi platform"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},member:{fields:{name:"Nama",email:"Email"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"Server DNS",wired:"Kabel",wireless:"Nirkabel"},"default":"Standar: Ya",ipAddressTmpl:"Alamat IP: ${address}",connectedWifiTmpl:"Terhubung: ${connected} - ${ssid}",connectedTmpl:"Terhubung: ${connected}",connected:{"true":"Ya","false":n},name:"Nama: ${name}"},diagnostics:{results:{noInternet:"Perangkat Anda mungkin tidak terhubung ke Internet. Pastikan koneksi Internet Anda berfungsi.",noNetflix:"Tak bisa terhubung dengan Netflix. Silakan coba lagi atau nyalakan ulang jaringan area lokal dan perangkat streaming Anda. Untuk informasi lebih lanjut, kunjungi netflix.com/nethelp.",noProblem:"Pengecekan jaringan berhasil."}},menu:{close:t,member:"Anggota",network:"Jaringan",device:"Perangkat",diagnose:r,signout:i,exitnetflix:s,back:t,reset:"Set ulang"},title:"Informasi"},errorPage:{runningDiagnostics:"Netflix mengalami kesalahan. Berusaha memastikan masalahnya.",runningDiagnosticsPs3:"Netflix mengalami kesalahan. Berusaha memastikan masalahnya. Untuk keluar dari Netflix, tekan tombol PS pada alat pengontrol Anda.",retryingNow:"Sedang mencoba kembali koneksi…",retryingBiep_pluralNoconnection:o,retryingBiepSingularNoconnection:o,retryingBiep_plural:u,retryingBiepSingular:u,retryingBiepCode:"Kode: ${code}"},networkDiagnostics:{error:{noNetflix:"Tak bisa terhubung dengan Netflix. Silakan coba lagi atau nyalakan ulang jaringan area lokal dan perangkat streaming Anda. Untuk informasi lebih lanjut, kunjungi netflix.com/nethelp.<br/>Kode: ${code}.",noInternet:"Perangkat Anda mungkin tidak terhubung ke Internet. Pastikan koneksi Internet Anda berfungsi dan coba lagi. <br/>Kode: ${code}",noNetflixPs3:"Tak bisa terhubung dengan Netflix. Silakan coba lagi atau nyalakan ulang jaringan area lokal dan perangkat streaming Anda. Untuk informasi lebih lanjut, kunjungi netflix.com/nethelp. Untuk keluar dari Netflix, tekan tombol PS pada alat pengontrol Anda.<br/>Kode: ${code}",noInternetPs3:"Perangkat Anda mungkin tidak terhubung ke Internet. Pastikan koneksi Internet Anda berfungsi dan coba lagi. Untuk keluar dari Netflix, tekan tombol PS pada alat pengontrol Anda. <br/>Kode: ${code}"}},checkYourNetwork:{netflixServer:"Server Netflix ${number}",internetConnection:"Koneksi Internet",runningCheck:"Melangsungkan pengecekan…",checkYourNetwork:r,introDescription:"Tes koneksi Internet untuk setiap masalah yang mungkin mencegat penggunaan Netflix.",diagnosisFailure:"Tak bisa mengecek jaringan Anda. Silakan coba lagi atau kunjungi www.netflix.com/nethelp."},signOut:{signOut:i,introDescription:"Teken keluar dari akun Netflix Anda di perangkat ini."},exitNetflix:{header:s,description:"Tutup aplikasi Netflix."},responses:{confirm:"OK",exit:"Tutup",no:n,reactivate:i,retry:"Coba Lagi",yes:"Ya",customerService:"Lebih Detail"},reactivate:{getNewCredentialsError:"Tampaknya Netflix di perangkat ini telah dinonaktifkan. Kemungkinan ada masalah dengan akun Anda atau perangkat Anda telah dinonaktifkan pada Netflix.com."},exitDialog:"Apakah Anda ingin menutup Netflix?",exitingMessage:"Menutup...",reset:{title:"Set ulang Netflix",description:"Set ulang Netflix di perangkat ini untuk kembali ke keadaan asalnya."},legend:{labels:{kids:"Anak-anak",menu:"Menu",back:t}}}};util.localization.addCulture(a.language.name,a)})();