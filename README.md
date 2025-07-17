# NameTagPlus

**教育版対応・名札でプレイヤー名に別名を設定**  
**Set player nicknames with name tags (Bedrock & Education Edition)**

---

## 概要 / Overview

名札でプレイヤー名に別名（ニックネーム）を設定できるビヘイビアパックです。  
This behavior pack allows players to set nicknames using name tags.

- デフォルトでは、プレイヤー名の**下に別名が表示**されます  
  By default, the nickname appears **below the player’s name**.
- 表示形式は `config.js` の `CUSTOM_NAME_FORMAT` で変更可能  
  Customize display format via `CUSTOM_NAME_FORMAT` in `config.js`

---

## 機能 / Features

### ✅ 名札で別名を設定  
Change nicknames using name tags.

### ✅ アイテムで名前変更ダイアログを表示  
Display a name input dialog using a specific item.

- デフォルトは名前が「表示名変更アイテム」の任意アイテム  
  Default: any usable item named `"表示名変更アイテム"`
- アイテムの種類や名前は `config.js` の以下で変更可能  
  - `RENAME_ITEM_TYPE`  
  - `RENAME_ITEM_NAME`

### ✅ タグによる操作制限  
Restrict who can change names using **tags**.

- `config.js` の `RENAME_PERMISSION_TAG` に設定されたタグを持っていないプレイヤーは、名札やダイアログによる名前変更ができません  
- 教育版では**ダイアログの表示のみ**制限可能です

### ⚠️ 教育版の制限 / Notes on Education Edition

教育版では API の制限により、名札で**誰でも自由に変更可能**になります。  
In Education Edition, anyone can change names with a name tag due to API limitations.

- `player.json` の `"allow_name_tag_renaming"` を `false` にすると、名札での変更を無効化できます  
- 名前変更は**ダイアログ経由のみに制限**されます  
- `_edu` のファイルがその設定済みバージョンです（`releases` にあります）

---

## 自動修正 / Auto Formatting

名札でプレイヤー名を変更した際、自動的に「プレイヤー名＋別名」の形式で修正されます。  
※この機能は**教育版では動作しません**

---

## 製作者 / Author

**CmdHebiSensei（コマへび先生）**  
📫 https://x.com/CmdHebiSensei

---

## ライセンス / License

**CC0**  
ご自由にご利用ください。  
Feel free to use or modify this project for any purpose.
