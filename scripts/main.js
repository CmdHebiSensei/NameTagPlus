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

import { world, system } from "@minecraft/server";
import {
  rememberPreviousNames,
  applyDisplayNameFormat,
  rollbackDisplayNameChanges,
  showRenameDialog
} from "./renamePlayer.js";
import {
  RENAME_PERMISSION_TAG,
  RENAME_ITEM_TYPE,
  RENAME_ITEM_NAME
} from "./config.js";

// /scriptevent name_tag_plus:show_rename_dialog でダイアログを表示
system.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id === "name_tag_plus:show_rename_dialog") {
    const user = event.sourceEntity;
    if (!user) return;

    // 変更権限の判定
    if (RENAME_PERMISSION_TAG !== "" && !user.hasTag(RENAME_PERMISSION_TAG)) return;

    showRenameDialog(user);
  }
});

// 表示名変更アイテムを使用したらダイアログを表示
world.afterEvents.itemUse.subscribe((event) => {
  const user = event.source;  // プレイヤー
  const item = event.itemStack; //使用アイテム

  if (!user || !item) return;

  // 使用アイテムの判定
  if (RENAME_ITEM_TYPE !== "" && item.typeId !== RENAME_ITEM_TYPE) return;

  // 使用アイテム名の判定
  if (RENAME_ITEM_NAME !== "" && item.nameTag !== RENAME_ITEM_NAME) return;

  // 変更権限の判定
  if (RENAME_PERMISSION_TAG !== "" && !user.hasTag(RENAME_PERMISSION_TAG)) return;

  showRenameDialog(user);
});

// ログイン時に customName を nameTagに適用
world.afterEvents.playerSpawn.subscribe((event) => {
  const player = event.player;
  if (!event.initialSpawn) return;
  
  const custom = player.getDynamicProperty("customName");
  if (custom && typeof custom === "string" && custom.length > 0) {
    player.nameTag = custom;
  }
});

// 以下は教育版非対応のため他より後に書くこと。

// 名札使用前
world.beforeEvents.playerInteractWithEntity.subscribe((event) => {
  const user = event.player;  // プレイヤー
  const item = event.itemStack; //使用アイテム

  if (!user || !item) return;

  // 名札じゃない場合は無視
  if (item.typeId !== "minecraft:name_tag") return;

  // 全プレイヤーの nameTag を記録
  rememberPreviousNames();
});

// 名札使用後
world.afterEvents.playerInteractWithEntity.subscribe((event) => {
  const user = event.player;  // プレイヤー
  const item = event.itemStack; //使用アイテム

  if (!user || !item) return;

  // 名札じゃない場合は無視
  if (item.typeId !== "minecraft:name_tag") return;

  // 変更権限の判定
  if (RENAME_PERMISSION_TAG !== "" && !user.hasTag(RENAME_PERMISSION_TAG)) {
    // 変更権限がない場合
    rollbackDisplayNameChanges();
  } else {
    // 変更権限がある場合
    applyDisplayNameFormat();
  }
});
