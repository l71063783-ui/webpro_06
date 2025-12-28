```mermaid
    graph TD
    List["一覧画面 (/allotrope)"] -- "詳細を見る" --> Detail["詳細画面 (/allotrope/:number)"]
    List -- "新しく作る" --> New["新規登録画面 (/allotrope/create)"]
    
    Detail -- "編集する" --> Edit["編集画面 (/allotrope/edit/:number)"]
    Detail -- "削除する" --> DeleteProcess["削除処理 (JS内部)<br>allotrope.splice()"]
    
    New -- "POST送信" --> CreateProcess["追加処理 (JS内部)<br>allotropes.push()"]
    Edit -- "POST送信" --> UpdateProcess["更新処理 (JS内部)<br>allotropes[n] = ..."]
    
    CreateProcess -- "リダイレクト" --> List
    UpdateProcess -- "リダイレクト" --> List
    DeleteProcess -- "リダイレクト" --> List
    

```