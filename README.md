# Bus Timetable Web App
身内からの依頼により、将来的に貸出ペンションとして運営予定の物件利用者向けに、
A4印刷およびWeb両対応のバス時刻表アプリを設計・実装しました。

## Features
- 平日 / 土日祝 自動判定
- 祝日API連携（holidays-jp API）
- API失敗時のローカルJSONフォールバック
- localStorageによる祝日キャッシュ
- 指定時刻以降フィルタリング
- 1時間単位でのグルーピング表示
- レスポンシブ対応

## Tech Stack
- HTML
- CSS（カスタムプロパティ使用）
- Vanilla JavaScript
- Fetch API
- localStorage

## Design Concept
- ミニマル + モダンを基調に、
- 高齢者でも視認しやすい文字サイズと余白設計を重視。
- 印刷用途とWeb表示の両立を意識して構成。

## Future Improvements
- データをJSONファイルに分離
- GitHub Pagesでの公開　←済
- アクセシビリティ改善
