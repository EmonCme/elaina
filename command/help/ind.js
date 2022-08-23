exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}
• Total User : ${totalUser.length}

Thanks kak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`Wait Onii-Chann`
	}
exports.ok = () =>{
	return`Sukses!`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Sayonara, Semoga tenang di alam sana kak_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

*List Menu*
❏ ${prefix}menu
❏ ${prefix}help
❏ ${prefix}elaina
❏ ${prefix}sewabot
❏ ${prefix}bot

*Download*
❏ ${prefix}play [query]
❏ ${prefix}song [judul lagu]
❏ ${prefix}pinterest [query]
❏ ${prefix}ytmp3 [url]
❏ ${prefix}ytmp4 [url]
❏ ${prefix}tiktok [url]
❏ ${prefix}tiktoknowm [url]
❏ ${prefix}tiktokwm [url]
❏ ${prefix}tiktokaudio [url]
❏ ${prefix}soundcloud [url]
❏ ${prefix}telesticker [url]

*Convert*
❏ ${prefix}stiker [video/image]
❏ ${prefix}semoji 😎
❏ ${prefix}smeme [text]
❏ ${prefix}memegen [text|text2]
❏ ${prefix}fast [video/vn]
❏ ${prefix}tupai [video/vn]
❏ ${prefix}vibra [video/vn]
❏ ${prefix}robot [video/vn]
❏ ${prefix}slow [video/vn]
❏ ${prefix}bass [video/vn]
❏ ${prefix}nightcore [video/vn]

*Education*
❏ ${prefix}nuliskiri [text]
❏ ${prefix}nuliskanan [text]
❏ ${prefix}foliokiri [text]
❏ ${prefix}foliokanan [text]

*Game*
❏ ${prefix}tebakgambar 
❏ ${prefix}tebaklirik
❏ ${prefix}tebakkalimat
❏ ${prefix}suit

*Info*
❏ ${prefix}owner
❏ ${prefix}daftar

*Owner*
❏ ${prefix}broadcast [text]
❏ ${prefix}joingrup
❏ ${prefix}leave
❏ >
❏ $
❏  => 

*Group*
❏ ${prefix}antilink 1 / 0
❏ ${prefix}hidetag [text]
❏ ${prefix}linkgrup
❏ ${prefix}joingrup [url]
❏ ${prefix}tagall
❏ ${prefix}kick @tag
❏ ${prefix}setdesc [text] 
❏ ${prefix}setname [text] 

*QuotesMenu*
❏ ${prefix}quotes
❏ ${prefix}quotesislami
❏ ${prefix}quotesimage
❏ ${prefix}quotesanime
❏ ${prefix}quotesdilan
❏ ${prefix}faktaunik
❏ ${prefix}katabijak

*AnimeMenu*
❏ ${prefix}kusonimesearch
❏ ${prefix}wallpaperanime
❏ ${prefix}charactersearch
❏ ${prefix}animesearch
❏ ${prefix}mangasearch

*Information*
❏ ${prefix}jadwaltv
❏ ${prefix}wikipedia
❏ ${prefix}translate
❏ ${prefix}covidglobal
❏ ${prefix}covidindo
❏ ${prefix}infogempa
❏ ${prefix}cuaca

*RandomImage*
❏ ${prefix}loli
❏ ${prefix}waifu
❏ ${prefix}elaina
❏ ${prefix}ppcouple
❏ ${prefix}shota
❏ ${prefix}husbu
❏ ${prefix}kanna
❏ ${prefix}sagiri
❏ ${prefix}shinobu
❏ ${prefix}megumin
❏ ${prefix}art
❏ ${prefix}bts

*Meme*
❏ ${prefix}randommeme
❏ ${prefix}memeindo
❏ ${prefix}darkjoke
`
	}