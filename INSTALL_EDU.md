# 教育版（Minecraft Education Edition）向けビヘイビアパック導入手順

Minecraft Education Edition では、`.mcpack` ファイルの直接インポートがうまくいかない場合が多いため、  
ZIPファイルを利用した手動インストールを推奨しています。

---

## Windowsでの手動インストール手順

1. ZIPファイルをダウンロードし、任意の場所に解凍してください。  
2. 以下のフォルダをエクスプローラーで開きます：  
`%LOCALAPPDATA%\Packages\Microsoft.MinecraftEducationEdition_8wekyb3d8bbwe\LocalState\games\com.mojang\behavior_packs`
3. 解凍したビヘイビアパックのフォルダを、上記の `behavior_packs` フォルダ内にコピーします。  
4. Minecraft Education Edition を起動し、ワールド作成または編集時の設定画面で「アドオン」→「ビヘイビアパック」から、追加したパックを有効にしてください。

---

## Macでの手動インストール手順

1. ZIPファイルをダウンロードし、任意の場所に解凍してください。  
2. Finderで以下のフォルダを開きます：  
`~/Library/Application Support/minecraftpe/games/com.mojang/behavior_packs`
3. 解凍したビヘイビアパックのフォルダを、上記の `behavior_packs` フォルダ内にコピーします。  
4. Minecraft Education Edition を起動し、ワールド作成または編集時の設定画面で「アドオン」→「ビヘイビアパック」から、追加したパックを有効にしてください。

---

## 注意点

- インポートがうまくいかない場合、すでに同名のビヘイビアパックがインストールされている可能性があります。  
  既に適用中のワールドがある場合は、一度ビヘイビアパックを無効化してから、再度お試しください。

---

## English (for reference)

# Installation Procedure for Minecraft Education Edition Behavior Packs

Since `.mcpack` files often fail to import directly on Education Edition, manual installation via ZIP files is recommended.

### On Windows

1. Download and unzip the ZIP file to any folder.  
2. Open the folder:  
`%LOCALAPPDATA%\Packages\Microsoft.MinecraftEducationEdition_8wekyb3d8bbwe\LocalState\games\com.mojang\behavior_packs`
3. Copy the extracted behavior pack folder into the above directory.  
4. Launch Minecraft Education Edition, go to World Settings → Add-ons → Behavior Packs, and enable the pack.

### On Mac

1. Download and unzip the ZIP file to any folder.  
2. Open the folder:  
`~/Library/Application Support/minecraftpe/games/com.mojang/behavior_packs`
3. Copy the extracted behavior pack folder into the above directory.  
4. Launch Minecraft Education Edition, go to World Settings → Add-ons → Behavior Packs, and enable the pack.

---

## Notes

- If the import fails, it may be because a behavior pack with the same name is already installed.  
  If you have worlds using this pack, please disable the behavior pack in those worlds first, then try importing again.
