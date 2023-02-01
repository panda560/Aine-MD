let handler = async m => m.reply(`
╭─「 Donasi • INDOSAT & XL 」
│ •  [+62 821-8133-7337]
│ •  [+62 821-8133-7337]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
