# 大学Webサークル ランディングページ

このプロジェクトは、大学のWebサークルのランディングページです。

## 🚀 開発環境のセットアップ

1. 依存関係をインストール
```bash
npm install
```

2. コードをLint
```bash
npm run lint
```
3. 開発サーバーを起動
```bash
npm run dev
```
4. ブラウザで `http://localhost:5173` (または表示されたURL) にアクセス

## 📁 プロジェクト構成

```
src/
├── components/
│   ├── Header/           # ヘッダーナビゲーション
│   ├── Hero/            # メインビジュアル・ヒーローセクション
│   ├── About/           # サークル紹介セクション
│   ├── Activity/        # 活動内容セクション
│   ├── Contact/         # お問い合わせフォーム
│   └── Footer/          # フッター
├── App.tsx              # メインアプリケーション
├── App.css              # グローバルスタイル
├── index.css            # ベーススタイル
└── main.tsx            # エントリーポイント
```

## 🎯 コンポーネント別作業分担

### Header コンポーネント (`src/components/Header/`)
- **ファイル**: `Header.tsx`, `Header.css`
- **内容**: ナビゲーションメニュー、ロゴ、スクロール効果

### Hero コンポーネント (`src/components/Hero/`)
- **ファイル**: `Hero.tsx`, `Hero.css`
- **内容**: メインビジュアル、キャッチコピー、CTA ボタン

### About コンポーネント (`src/components/About/`)
- **ファイル**: `About.tsx`, `About.css`
- **内容**: サークル紹介、特徴、価値提案

### Activity コンポーネント (`src/components/Activity/`)
- **ファイル**: `Activity.tsx`, `Activity.css`
- **内容**: 活動内容、実績、プロジェクト紹介

### Contact コンポーネント (`src/components/Contact/`)
- **ファイル**: `Contact.tsx`, `Contact.css`
- **内容**: お問い合わせフォーム、連絡先情報

### Footer コンポーネント (`src/components/Footer/`)
- **ファイル**: `Footer.tsx`, `Footer.css`
- **内容**: フッターリンク、SNS、著作権表示

## 🛠️ 開発ガイドライン

### コンポーネントの編集方法

1. 担当するコンポーネントのフォルダに移動
2. `.tsx` ファイルでHTML構造とロジックを編集
3. `.css` ファイルでスタイルを編集
4. 変更を保存すると自動的にブラウザに反映されます

### スタイリング規約

- **色の使用**: 
  - メインカラー: 
  - アクセントカラー: 
  - テキスト: 
  
- **レスポンシブデザイン**: 
  - モバイル: `max-width: 768px`
  - タブレット: `769px - 1023px`
  - デスクトップ: `1024px+`

### Git ワークフロー

1. 新しいブランチを作成
```bash
git checkout -b feature/component-name
```

2. 変更をコミット
```bash
git add .
git commit -m "feat: update component-name"
```

3. プルリクエストを作成してレビューを依頼

## 📋 TODO / 改善点

- [ ] レスポンシブデザインの最適化
- [ ] アニメーション・トランジションの追加
- [ ] SEO対策（メタタグ、構造化データ）
- [ ] アクセシビリティの向上
- [ ] パフォーマンス最適化
- [ ] お問い合わせフォームのバックエンド連携

