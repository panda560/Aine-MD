let handler = async m => m.reply(`
╭─「 Donasi • INDOSAT & XL 」
│ •  [+62 856-0946-7937]
│ •  [+62 819-5929-3465]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
