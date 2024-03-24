const sample_json = {
  "phpcs.executablePath": "/Users/t-fukuyama-mac/.composer/vendor/bin/phpcs",
  "phpcs.standard": "PSR12",
  "[python]": {
    "editor.formatOnType": true,
  },
  "php.validate.executablePath": "",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  // ? デフォルトの拡大度(ちなみに2はクソでか虫眼鏡だ。推奨:1.1~1.5)
  "window.zoomLevel": 1.1,
  // ? format on save
  "editor.formatOnSave": true,
  "beautify.ignore": "",
  "workbench.settings.applyToAllProfiles": [
    "better-comments.highlightPlainText",
    "editor.unicodeHighlight.includeComments",
  ],
  "editor.unicodeHighlight.includeComments": true,
  // ? コメントの色
  "editor.tokenColorCustomizations": {
    comments: "#28c0df",
  },
  "workbench.colorTheme": "Material Theme Darker",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.indentSize": "tabSize",
  // ? エディタのタブサイズ指定default4->2へ
  "editor.tabSize": 2,
  // ? インデントの色
  "indentRainbow.colors": [
    "rgba(255,255,64,0.07)",
    "rgba(127,255,127,0.07)",
    "rgba(255,127,255,0.07)",
    "rgba(79,236,236,0.07)",
  ],
  // ? jsonもインデント対応させる
  "indentRainbow.excludedLanguages": [],
  "cSpell.languageSettings": [],
  "eslint.workingDirectories": [{ mode: "auto" }],
  // ? 選択範囲などの色調整
  "workbench.colorCustomizations": {
    // ? 選択中のテキスト・範囲
    "editor.selectionBackground": "#323b88",
    // ? 同一テキスト・構文検索
    "editor.selectionHighlightBackground": "#7fabbe",
    // ? 検索にヒットした箇所
    "editor.findMatchHighlightBackground": "#264eff",
    // ? 検索にヒットした箇所かつ現在選択中の箇所
    "editor.findMatchBackground": "#ae00ff",
    // ? 検索にヒットした箇所かつ現在選択中の箇所の枠線
    "editor.findMatchBorder": "#ffffff",
  },
};
// 無視してOK
console.log(sample_json);
