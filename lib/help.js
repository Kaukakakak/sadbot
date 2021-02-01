const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `🔰 -----[ *I'm ${botName}* ]----- 🔰
Olá, ${pushname} 👋
Tenha um bom dia para os usuários, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NOME : ${pushname}
┃│➸ DINHEIRO : Rp:${uangku}
┃│➸ XP : ${reqXp}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ DO UTILIZADOR ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot!✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──────────────────
┃│➸ *${prefix}info*
┃│➸ *${prefix}ping*
┃│➸ *${prefix}donasi*
┃│➸ *${prefix}owner*
┃│───────────────────
┃│➸ *${prefix}simple*
┃│➸ *${prefix}maker*
┃│➸ *${prefix}gabut*
┃│➸ *${prefix}download*
┃│➸ *${prefix}random*
┃│➸ *${prefix}dompet*
┃│➸ *${prefix}other*
┃│➸ *${prefix}group*
┃│➸ *${prefix}owb*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.help = help
