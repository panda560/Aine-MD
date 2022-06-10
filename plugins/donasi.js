let handler = async m => m.reply(`
╭─「 Donasi • GOPAY & DANA 」
│ •  [+62 812-7367-7810]
│ •  [+62 819-5929-3465]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
