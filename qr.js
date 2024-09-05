const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Maher_Zubair,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("maher-zubair-baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function SIGMA_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Maher_Zubair = Maher_Zubair({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
			Qr_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				       await Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id, { text: `❇️𝐇𝐞𝐥𝐩/𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫


🖌𝐌𝐨𝐭𝐡𝐞𝐫𝐟𝐮𝐜𝐤𝐞𝐫 😂
🔇𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐃𝐫𝐚𝐠𝐨𝐧❌𝐃𝐞𝐚𝐝𝐩𝐨𝐨𝐥 𝐏𝐚𝐢𝐫

🔗Whatsapp Channel: https://whatsapp.com/channel/0029Vag3MeuGJP8LZb1Okj39

🔗Telegram Channel: https://t.me/dragonbugkiller

🔗Whatsapp GC : https://chat.whatsapp.com/FqvQzWARlwc7XlerabWq7z

🔗Contact: +254796283064

🔗GitHub: https://github.com/confronter

📌𝐉𝐨𝐢𝐧 𝐭𝐡𝐞 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐚𝐛𝐨𝐯𝐞 𝐆𝐚𝐢𝐧 𝐤𝐧𝐨𝐰𝐥𝐞𝐝𝐠𝐞 𝐚𝐛𝐨𝐮𝐭 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲😌
	   



` });
            await delay(1000 * 2) 
             const classic = await  Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id, { document: data, mimetype: `application/json`, fileName: `creds.json` })
               Qr_Code_By_Maher_Zubair.groupAcceptInvite("DHGaGemwhxFKNXYkKCI9kV");
		Qr_Code_By_Maher_Zubair.groupAcceptInvite("EKdfDFDoi5C3ck88OmbJyk")
             await Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id, { text: `❗️𝐌𝐨𝐭𝐡𝐞𝐫𝐟𝐮𝐜𝐤𝐞𝐫 𝐝𝐨𝐧𝐭 𝐬𝐡𝐚𝐫𝐞 𝐭𝐡𝐢𝐬 𝐟𝐢𝐥𝐞 😂\n
🔆𝐃𝐫𝐚𝐠𝐨𝐧 𝐚𝐧𝐝 𝐃𝐞𝐚𝐝𝐩𝐨𝐨𝐥 𝐜𝐫𝐞𝐝𝐬
❇️𝐄𝐧𝐣𝐨𝐲 𝐛𝐨𝐭 𝐚𝐧𝐝 𝐚𝐯𝐨𝐢𝐝 𝐒𝐭𝐨𝐫𝐢𝐞𝐬
〽️𝐅𝐮𝐜𝐤𝐲𝐨𝐮😂
🔰𝐌𝐚𝐝𝐞 𝐛𝐲 𝐂𝐨𝐧𝐟𝐫𝐨𝐧𝐭𝐞𝐫
⳹\n\n ` }, {quoted: classic });
 

					await delay(100);
					await Qr_Code_By_Maher_Zubair.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					SIGMA_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await SIGMA_MD_QR_CODE()
});
module.exports = router
