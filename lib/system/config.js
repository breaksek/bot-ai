const { Function: Func, NeoxrApi } = new(require('@neoxr/wb'))
global.Api = new NeoxrApi('https://api.neoxr.my.id/api', process.env.API_KEY)
global.header = `© breaksek-bot`
global.footer = `Made by breaksek ッ`
global.status = Object.freeze({
   invalid: Func.Styles('URL tidak valid'),
   wrong: Func.Styles('Format salah'),
   fail: Func.Styles('Tidak bisa mendapatkan metadata'),
   error: Func.Styles('Terjadi kesalahan'),
   errorF: Func.Styles('Maaf, fitur ini mengalami kesalahan'),
   premium: Func.Styles('Fitur ini hanya untuk pengguna premium'),
   auth: Func.Styles('Anda tidak memiliki izin untuk menggunakan fitur ini, tanyakan terlebih dahulu kepada owner'),
   owner: Func.Styles('Perintah ini hanya untuk owner'),
   group: Func.Styles('Perintah ini hanya akan bekerja dalam grup'),
   botAdmin: Func.Styles('Perintah ini akan berfungsi saat saya (bot) menjadi admin'),
   admin: Func.Styles('Perintah ini hanya untuk admin grup'),
   private: Func.Styles('Gunakan perintah ini dalam obrolan pribadi'),
   gameSystem: Func.Styles('Fitur permainan telah dinonaktifkan'),
   gameInGroup: Func.Styles('Fitur permainan belum diaktifkan untuk grup ini'),
   gameLevel: Func.Styles('Anda tidak dapat memainkan game karena level Anda telah mencapai batas maksimum')
})
