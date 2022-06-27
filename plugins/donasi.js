let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0823-9373-4303]
│ •  [0823-4684-1421]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler