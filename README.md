# カラーピッカー (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたカラーピッカーアプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-app-color-picker/demo/

## 主要機能

### カラー選択
- RGBスライダーによる色調整
- プリセットカラーからの選択
- 16進数カラーコードの表示
- リアルタイムカラープレビュー

### カラー管理
- カラーコードのクリップボードコピー
- カラーの保存・削除（最大10色）
- ローカルストレージでの永続化
- 右クリックによる保存色削除

### 操作方法
- **RGBスライダー**: 赤・緑・青の値を0-255で調整
- **プリセットカラー**: 基本8色から選択
- **コピーボタン**: 16進数カラーコードをクリップボードにコピー
- **保存ボタン**: 現在の色を保存済みカラーに追加
- **右クリック**: 保存済みカラーを削除

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                    # 機能別モジュール
│   └── color-picker/            # カラーピッカー機能
│       ├── components/          # 機能専用コンポーネント
│       │   ├── ColorValue/      # カラー値表示+コピー
│       │   ├── ColorDisplay/    # カラー表示領域
│       │   ├── RgbSliders/      # RGBスライダー群
│       │   ├── ColorGrid/       # カラーグリッド
│       │   ├── PresetColors/    # プリセットカラー
│       │   ├── SavedColors/     # 保存済みカラー管理
│       ├── ColorPickerApp/      # 機能ルートコンポーネント
│       ├── useColorPicker.ts    # カラー管理フック
│       ├── useSavedColors.ts    # 保存カラー管理フック
│       ├── types.ts             # 機能固有の型定義
│       ├── colorUtils.ts        # 色変換ユーティリティ
│       ├── clipboardUtils.ts    # クリップボード操作
│       └── storageUtils.ts      # ローカルストレージ操作
├── components/                  # 共通UIコンポーネント
│   ├── Button/                  # 操作ボタン
│   ├── Slider/                  # スライダー
│   ├── ColorBox/                # 色表示ボックス
│   ├── ColorPreview/            # カラープレビュー
│   └── Text/                    # テキスト表示
├── stories/                     # Storybook用ストーリー
├── App.tsx                      # メインアプリ
└── main.tsx                     # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License