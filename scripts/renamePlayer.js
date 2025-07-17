/**
 * NameTagPlus
 * 
 * Copyright (c) 2025 CmdHebiSensei（コマへび先生）
 * 
 * This work is licensed under the Creative Commons CC0 1.0 Universal License.
 * To view a copy of this license, visit:
 * https://creativecommons.org/publicdomain/zero/1.0/
 * 
 * You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.
 */

import { world } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";
import {
  CUSTOM_NAME_FORMAT
} from "./config.js";

// フォーマット関数
function formatName(trueName, customName) {
  return trueName + CUSTOM_NAME_FORMAT.replace("{customName}", customName);
}

// プレイヤーID → nameTag を記録するマップ
const previousNames = new Map();

// nameTagを記録
export function rememberPreviousNames() {
  for (const player of world.getPlayers()) {
    previousNames.set(player.id, player.nameTag);
  }
}

// 表示名を結合して設定
export function applyDisplayNameFormat() {
  for (const player of world.getPlayers()) {
    const trueName = player.name;
    const currentTag = player.nameTag;
    if (currentTag.startsWith(trueName)) continue;
    player.nameTag = formatName(trueName, currentTag);
    player.setDynamicProperty("customName", player.nameTag);
  }
}

// nameTagを元に戻す
export function rollbackDisplayNameChanges() {
  for (const player of world.getPlayers()) {
    const beforeTag = previousNames.get(player.id);
    if (beforeTag !== undefined) {
      player.nameTag = beforeTag;
    }
  }
}

/**
 * プレイヤー名変更フォームを表示し、nameTagを更新します。
 * @param {Player} player - フォームを表示するプレイヤー
 */
export async function showRenameDialog(player) {
  const onlinePlayers = world.getPlayers();
  const nameList = onlinePlayers.map(p => p.name);

  const form = new ModalFormData()
    .title("表示名を設定")
    .dropdown("対象プレイヤーを選択", nameList)
    .textField("表示名", "なまえをいれてね");
  
  const response = await form.show(player);
  if (response.canceled) return;

  const selectedName = nameList[response.formValues[0]];
  const newNameTag = response.formValues[1];

  const target = onlinePlayers.find(p => p.name === selectedName);
  if (target) {
    if (newNameTag.trim() === "") {
      target.nameTag = target.name;
      player.sendMessage(`${target.name} の表示名を解除しました。`);
      target.setDynamicProperty("customName", "");
    } else {
      target.nameTag = formatName(target.name, newNameTag);
      player.sendMessage(`${target.name} の表示名を ${newNameTag} に設定しました。`);
      target.setDynamicProperty("customName", target.nameTag);
    }
  } else {
    player.sendMessage(`対象のプレイヤーが見つかりませんでした。`);
  }
}
