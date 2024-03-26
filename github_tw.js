/*******************************************************************************

    locals.js - 搭配用戶腳本插件`GitHub 中文化插件`的頁面匹配規則, 翻譯忽略規則,
                詞條庫文件
    Copyright (C) 2016-2021 樓教主 (https://github.com/52cik)
    Copyright (C) 2021-當前 沙漠之子 (https://github.com/maboloshi)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

    Home: https://github.com/maboloshi/github-chinese
*/
var I18N = {};

let projects = {    // 項目頁面 補全
    "New view": "新建視圖",
    "Layout": "布局",
    "Board": "面板",
    "Roadmap": "時間線",
    "Duplicate view": "複製視圖",
    "Configuration": "配置",
    "Group by": "分組",
    "Markers": "標記",
    "Sort by": "排序",
    "Zoom level": "縮放級別",
    "Field sum": "字段總和",
    "Slice by": "切片",
    "Fields": "字段",
    "Generate chart": "生成圖表",
    "Rename view": "重命名視圖",
    "Delete view": "刪除視圖",
    "Export view data": "導出視圖數據",
    "Assignees": "負責人",
    "Project templates": "項目模板",
    "Featured": "特色",
    "Iteration": "迭代",
    "Dates": "日期",
    "User settings": "用戶設置",
    "Truncate titles": "截斷標題",
    "Show date fields": "顯示日期字段",
    "Add status update": "添加狀態更新",
    "Project details": "項目詳情",
    "View more options": "查看更多選項",
    "Date fields": "日期字段",
    "Month": "月",
    "Quarter": "季度",
    "Year": "年",
    "Today": "今天",
    "Add item": "添加項目",
    "Start typing to create a draft, or type # to select a repository": "開始輸入以創建草稿，或輸入 # 選擇一個倉庫",
    "Scroll to previous date range": "滾動到上一個日期範圍",
    "Scroll to next date range": "滾動到下一個日期範圍",
    "Filter by keyword or by field": "按關鍵字或字段篩選",
    "Discard": "放棄",
    "Save changes to new view": "保存更改到新視圖",
    "Visible fields": "可見字段",
    "Hidden fields": "隱藏字段",
    "New field": "新建字段",
    "Column by": "欄目",
    "Workflows": "工作流",
    "Archived items": "已存檔項目",
    "Make a copy": "複製",
    "GitHub Projects": "GitHub 項目",
    "What’s new": "新功能",
    "Project settings": "項目設置",
    "Project name": "項目名稱",
    "Short description": "簡短描述",
    "More options": "更多選項",
    "Make a copy of this project.": "複製此項目",
    "Danger zone": "危險區",
    "This project is currently private.": "此項目當前為私有.",
    "Closing a project will disable its workflows & remove it from the list of open projects.": "關閉項目將禁用其工作流程，並將其從打開項目列表中刪除.",
    "Close this project": "關閉此項目",
    "Manage access": "管理訪問權限",
    "Who has access": "誰有訪問權限",
    "Private project": "私有項目",
    "Only those with access to this project can view it.": "只有有權訪問此項目的人才能查看它.",
    "Invite collaborators": "邀請協作者",
    "Manage access": "管理訪問權限",
    "Custom fields": "自定義字段",
    "Field name": "字段名稱",
    "Field type": "字段類型",
    "Text": "文本",
    "Number": "數字",
    "Date": "日期",
    "Single select": "單選",
    "Starts on": "開始於",
    "Duration": "持續時間",
    "days": "天",
    "weeks": "周",
    "Save and create": "保存並創建",
    "You don't have any collaborators yet.": "您還沒有任何協作者.",
    "Add a collaborator to see them here.": "添加協作者以在此處查看他們.",
    "Make template": "製作模板",
    "Copy as template": "複製為模板",
    "Visibility": "可見性",
    "Close project": "關閉項目",
    "Delete project": "刪除項目",
    "Delete this project": "刪除此項目",
    "Status chart": "狀態圖表",
    "This chart shows the current status for the total number of items in your project.": "此圖表顯示了項目中所有項目的當前狀態.",
    "Default charts": "默認圖表",
    "Custom charts": "自定義圖表",
    "Configure": "配置",
    "Configure chart": "配置圖表",
    "Group by (optional)": "分組 (可選)",
    "X-axis": "X 軸",
    "Y-axis": "Y 軸",
    "Save to new chart": "保存到新圖表",
    "Add a project status update": "添加項目狀態更新",
    "Add update": "添加更新",
    "Status updates are brief reports tracking your project's health and progress. Begin by adding an update.": "狀態更新是跟蹤項目健康和進度的簡要報告. 從添加更新開始.",
    "Let everyone know what this project is about, how to use it and link to important resources.": "讓每個人都知道這個項目是關於什麼的，如何使用它，並鏈接到重要資源.",
    "A short description about this project.": "關於此項目的簡短描述.",
}

I18N.conf = {
    /**
     * 要翻譯的頁面正則(不含倉庫頁)
     *
     * 2021-10-07 11:53:34
     * GitHub 網站更新 調整 Class 過濾規則
     * 且過濾 Class 並不是總是生效，增加 PathName 規則補充
     */
    rePageClass: /\b(page-(profile|new-repo|create-org)|session-authentication)\b/,

    /**
     * 匹配 pathname 頁面的正則
     *
     * 註冊頁面 /signup
     * 登錄二步驗證 /login/oauth
     * 登錄頁面 /login
     * 密碼重置 /password_reset
     * 組織頁面 /orgs
     * 探索頁面 /explore
     * 訂閱頁面 /notifications/subscriptions
     * 通知頁面 /notifications
     * 關注頁面 /watching
     * 星標頁面 /stars
     * 議題頁面 /issues
     * 拉取請求 /pulls
     * 搜索頁面 /search
     * 趨勢頁面 /trending
     * 展示頁面 /showcases
     * 導入倉庫 /new/import
     * ...
     */
    rePagePath: /^\/($|dashboard|signup|login\/oauth|login|logout|sessions?|password_reset|orgs|explore|topics|notifications\/subscriptions|notifications|watching|stars|issues|pulls|search|trending|showcases|new\/(import|project)|new|import|settings\/(profile|admin|appearance|accessibility|notifications|billing|emails|security_analysis|security-log|security|auth|sessions|keys|ssh|gpg|organizations|enterprises|blocked_users|interaction_limits|code_review_limits|repositories|codespaces|deleted_repositories|packages|copilot|pages|replies|installations|apps\/authorizations|reminders|sponsors-log|apps|(?:personal-access-|)tokens|developers|applications\/new|applications|connections\/applications)|settings|installations\/new|marketplace|apps|account\/(organizations\/new|choose|billing\/history)|projects|redeem|discussions|events|collections|sponsors|sponsoring|github-copilot\/signup|codespaces|developer\/register)|^\/users\/[^\/]+\/(projects|packages)/,

    // 倉庫路徑
    rePagePathRepo: /^\/[^\/]+\/[^\/]+\/(issues|pull|watchers|stargazers|new|edit|delete|upload|find|wiki|branches|discussions|activity|rules|releases|packages|tags|labels|milestones|compare|commit|blob|blame|actions|runs|deployments|security|pulse|community|forks|fork|import|graphs\/(contributors|community|traffic|commit-activity|code-frequency)|network$|network\/(dependencies|dependents|updates|members)|settings\/(access|code_review_limits|interaction_limits|branches|branch_protection_rules|tag_protection|rules|actions|hooks|environments|codespaces|pages|security_analysis|dependabot_rules|keys|secrets|variables|installations|notifications)|settings|transfer|projects\/new|pkgs|contribute|subscription|invitations|codespaces)/,

    // 組織路徑
    rePagePathOrg: /^\/[^\/]+\/[^\/]+\/(repositories|discussions|projects|packages|teams|new-team|people|outside-collaborators|pending_collaborators|dashboard|billing_managers\/new|settings\/(profile|billing|roles|member_privileges|teams|import-export|blocked_users|interaction_limits|code_review_limits|moderators|repository-defaults|rules|codespaces|copilot|actions|hooks|discussions|packages|pages|projects|security_analysis|security|dependabot_rules|domains|secrets|variables|oauth_application_policy|installations|personal-access-token|reminders|sponsors-log|audit-log|deleted_repositories|applications\/new|applications|apps\/new|apps|publisher)|topics|domain\/new|audit-log\/event_settings|billing\/history|policies\/applications)|^\/[^\/]+\/(enterprise_plan)/,

    /**
     * 忽略區域的 class 正則
     *
     * 程式碼編輯器 內容 程式碼高亮 CodeMirror
     * 程式碼編輯器 最小單元 cm-line ͼ.*
     * 程式碼高亮 blob-code
     * 倉庫名和用戶名 repo-and-owner (已知出現在：應用安裝授權頁和設置頁 選定倉庫)
     * 文件,目錄位置欄 |js-path-segment|final-path
     * 文件列表 files js-navigation-container js-active-navigation-container
     * 評論內容等 js-comment-body
     * 評論預覽 js-preview-body
     * 評論編輯區域 comment-form-textarea
     * 文件搜索模式 js-tree-finder-virtual-filter
     * 倉庫文件列表 js-navigation-open Link--primary
     * 快捷鍵 按鍵 js-modifier-key
     * 洞察-->流量-->熱門內容列表 capped-list-label
     * realease 頁面 描述主體 markdown-body my-3
     * 倉庫頁 倉庫描述 f4 my-3
     * 提交的用戶名 commit-author
     * 搜索頁 搜索結果 search-match
     * 追溯 視圖 程式碼 react-code-text
     * tree 視圖 文件名 react-directory-filename-column 提交信息 react-directory-commit-message
     * 程式碼差異頁面 程式碼 pl-s1|pl-smi|pl-token|pl-c1|pl-kos|pl-k|pl-c|pl-en
     */
    reIgnoreClass: /(cm-line|ͼ.*|pl-s1|pl-smi|pl-token|pl-c1|pl-kos|pl-k|pl-c|pl-en|CodeMirror|blob-code|highlight-.*|repo-and-owner|js-path-segment|final-path|files js-navigation-container|js-comment-body|js-preview-body|comment-form-textarea|markdown-title|js-tree-finder-virtual-filter|js-navigation-open Link--primary|js-modifier-key|capped-list-label|blob-code blob-code-inner js-file-line|markdown-body my-3|f4 my-3|commit-author|search-match|react-directory-filename-column|react-directory-commit-message|react-code-text|zausi)/,

    /**
     * 忽略區域的 itemprop 屬性正則
     * name 列表頁 倉庫名
     * author 倉庫頁 作者名稱
     * additionalName 個人主頁 附加名稱
     */
    reIgnoreItemprop: /(name|author|additionalName)/,

    /**
     * 忽略區域的 特定元素id 正則
     * offset /blob頁面 符號-->引用
     * fix repo詳情頁文件路徑breadcrumb
     */
    reIgnoreId: ['readme', 'offset', 'breadcrumb', 'file-name-id'],

    /**
     * 忽略區域的 標籤 正則
     * /i 規則不區分大小寫
     */
    reIgnoreTag: ['CODE', 'SCRIPT', 'STYLE', 'LINK', 'IMG', 'MARKED-TEXT', 'PRE', 'KBD'],
    // marked-text --> 文件搜索模式/<user-name>/<repo-name>/find/<branch> 文件列表條目
    // ^script$ --> 避免勿過濾 notifications-list-subscription-form
    // ^pre$ --> 避免勿過濾
};

I18N.zh = {};

I18N.zh["title"] = { // 標題翻譯
    "static": { // 靜態翻譯
        "Sign in to GitHub · GitHub": "登錄 GitHub · GitHub",
        "Join GitHub · GitHub": "加入 GitHub · GitHub",
        "Forgot your password? · GitHub": "忘記您的密碼了嗎？· GitHub",
        "Forgot your password?": "忘記您的密碼了嗎？",
        "GitHub · Where software is built": "GitHub - 軟件構建的地方",
        "Create a New Repository": "創建新倉庫",
        "Import a Repository": "導入倉庫",
        "New Project": "創建項目",
        "Your Repositories": "我的倉庫",
        "Your Projects": "我的項目",
        "Your Packages": "我的軟件包",
        "Your Stars": "我的星標頁面",
        "Your Profile": "個人資料",
        "Your Achievements": "我的成就",
        "Your Followers": "我的關注者",
        "Who You’re Following": "我關注的人",
        "Account settings": "帳戶設置",
        "Appearance": "外觀",
        "Accessibility": "無障礙",
        "Notification settings": "通知設置",
        "Billing": "賬單",
        "Email settings": "郵箱設置",
        "Account security": "帳戶安全",
        "SSH and GPG keys": "SSH 和 GPG 公鑰",
        "Organizations": "組織",
        "Blocked users": "拉黑用戶",
        "Temporary interaction limits": "臨時互動限制",
        "Code review limits": "程式碼審查限制",
        "Repositorys": "倉庫",
        "Deleted Packages": "刪除的軟件包",
        "Pages": "GitHub 頁面",
        "Saved replies": "快捷回覆",
        "Security & analysis": "安全與分析",
        "Installed GitHub Apps": "已安裝的 GitHub 應用",
        "Scheduled reminders": "定時提醒",
        "Security log": "安全日誌",
        "Sponsorship Log": "贊助日誌",
        "GitHub Apps": "GitHub 應用",
        "Developer applications": "開發者應用",
        "Personal Access Tokens": "個人訪問令牌",
        "Register new GitHub App": "註冊新 GitHub 應用",
        "New OAuth Application": "新 OAuth 應用",
        "Create a new Gist": "創建新程式碼片段",
        "Discover gists": "探索程式碼片段",
        "Enable two-factor authentication": "啟用雙重身份驗證",
        "Manage two-factor authentication": "管理雙重身份驗證",
        "Options": "倉庫 · 選項",
        "Confirm access": "授權訪問",
        "General": "通常",
        "Manage access": "訪問管理",
        "Branches": "分支",
        "Tags": "標籤",
        "Webhooks": "Web 鉤子",
        "Environments": "環境",
        "Code security & analysis": "程式碼安全性與分析",
        "Deploy keys": "部署密鑰",
        "Add deploy key": "添加部署密鑰",
        "Actions secrets": "操作機密",
        "Dependabot secrets": "Dependabot 機密",
        "Configure email notifications": "配置郵件通知",
        "Community Standards": "社區準則",
        "General Organization Settings": "常規組織設置",
        "Member privileges": "成員權限",
        "Teams": "團隊",
        "Repository defaults": "倉庫默認值",
        "Runners": "運行器",
        "Runner Groups": "運行器組",
        "Packages": "軟件包",
        "Package": "軟件包",
        "Security": "安全",
        "Verified & approved domains": "經驗證和批准的域名",
        "Add a Pages verified domain": "添加一個經驗證的 GitHub Pages 域名",
        "Third-party application access policy": "第三方應用訪問策略",
        "Audit log": "審計日誌",
        "Deleted Repositories": "已刪除的倉庫",
        "GitHub Publisher Verification": "GitHub 發布者驗證",
        "Notifications": "通知",
        "Confirm your account recovery settings": "確認您的帳戶恢復設置",
        "Your stars": "我的星標",
        "Your starred repositories": "我的星標倉庫",
        "Your starred topics": "我的星標主題",
        "Pull Requests": "拉取請求",
        "Register for the GitHub Developer Program": "註冊 GitHub 開發者計劃",
        "Codespaces": "程式碼空間",
        "Codespace Templates": "程式碼空間模版",
        "Create new codespace": "創建程式碼空間",
    },
    "regexp": [ // 正則翻譯
        [/Repositories/, "倉庫"],
        [/Starred/, "星標頁面"],
        [/starred repositories/, "星標倉庫"],
        [/starred topics/, "星標主題"],
        [/starred/, "星標"],
        [/Commits/, "提交"],
        [/New Issue/, "新建議題"],
        [/Issues/, "議題"],
        [/Pull requests/, "拉取請求"],
        [/Actions/, "操作"],
        [/Projects/, "項目"],
        [/Packages?/, "軟件包"],
        [/Security Overview/, "安全概述"],
        [/Security Policy/, "安全政策"],
        [/Security Advisories/, "安全公告"],
        [/Dependabot alerts/, "Dependabot 警報"],
        [/Pulse/, "統計"],
        [/Contributors to/, "貢獻者 ·"],
        [/Community/, "社區"],
        [/Traffic/, "流量"],
        [/Commit Activity/, "提交活動"],
        [/Code frequency/, "程式碼頻率"],
        [/Dependencies/, "依賴關係"],
        [/Network Dependents/, "網絡依賴者"],
        [/Network Graph/, "網絡圖"],
        [/Revisions/,"修訂"],
        [/Stargazers/, "追星者"],
        [/Forks/, "復刻"],
        [/Draft Advisory/, "安全公告草案"],
        [/Code scanning alerts/, "程式碼掃描警報"],
        [/Repository topics/, "倉庫主題"],
        [/Scheduled reminders/, "定時提醒"],
        [/Sponsorship Log/, "贊助日誌"],
        [/OAuth applications/, "OAuth 應用"],
        [/People · Pending Collaborators/, "成員 · 待定協作者"],
        [/People/, "成員"],
        [/Outside collaborators/, "外部協作者"],
        [/Discussions/, "討論"],
        ["_regexp_end", "end"]
    ],
};

I18N.zh["pubilc"] = { // 公共區域翻譯
    "static": { // 靜態翻譯
        //
        "No server is currently available to service your request.": "當前服務器無法為您的請求提供服務。",
        "This page is taking too long to load.": "此頁面加載時間過長。",
        "Sorry about that. Please try refreshing and contact us if the problem persists.": "對此我們很抱歉。請嘗試刷新，如果問題仍然存在，請聯繫我們。",
        "Contact Support": "聯繫 GitHub 支持",
        "GitHub Status": "GitHub 狀態",

        // 頂部欄 (未登錄)
            "Product": "產品",
            "Solutions": "解決方案",
            "Open Source": "開源",
            // "Pricing": "價格",
            "Search": "搜索",
            "Sign in": "登錄",
            "Sign up": "註冊",

            "Team": "團隊",
            "Enterprise": "企業",

        // 搜索欄
            "Search or jump to...": "搜索或跳轉到…",
            "Type": "請鍵入",
            "to search": "去搜索",
            "Command palette": "命令面板",
            "Saved queries": "已保存的搜索",
            "All of GitHub": "整個 GitHub",
            "Autocomplete": "自動完成",
            "Search all of GitHub": "搜索整個 GitHub",
            "Search in this directory": "在文件夾中搜索",
            "Search in this repository": "在該倉庫中搜索",
            "Search in this owner": "在該所有者中搜索",
            "Search in this organization": "在該組織中搜索",
            "Owners": "所有者",
            "Languages": "語言",
            "Search syntax tips": "搜索語法提示",
            "Jump to": "跳轉到",

        // 左上角下拉欄 (已登錄)
            "Home": "主頁",
            "Issues": "議題",
            "Pull Requests": "拉取請求",
            "Projects": "項目",
            "Codespaces": "程式碼空間",
            "Explore": "探索",
            "Marketplace": "市場",

            "Filter repositories": "篩選倉庫",
            "Close filter": "關閉篩選器",
            "Show more": "顯示更多",

        // 頂部提示橫幅
            "Don't get locked out of your account.": "不要被鎖定在您的帳戶之外。",
            "Download your recovery codes": "下載您的恢復碼",
            "add a passkey": "添加通行密鑰",
            "so you don't lose access when you get a new device.": "這樣您在登錄新設備時就不會失去訪問權限。",

        // 右上角通知按鈕提示
            "You have no unread notifications": "您沒有未讀通知",
            "You have unread notifications": "您有未讀通知",

        // 右上角新建按鈕下拉菜單
            "Create new...": "新建...",
                "New repository": "新建倉庫",
                "Import repository": "導入倉庫",
                "New codespace": "新建程式碼空間",
                "New gist": "新建程式碼片段",
                "New organization": "新建組織",
                "New project": "新建項目",
                "This organization": "本組織", // 組織
                "New team": "新建團隊", // 組織

        // 右上角個人圖標下拉菜單
            "Signed in as": "登錄身份為",
            "Set status": "狀態設置",
            "Your profile": "我的資料",
            "See all accounts": "查看所有賬戶",
            "Add account": "添加賬戶",
            "Your sponsorships": "我的捐助者",
            "Your repositories": "我的倉庫",
            "Your codespaces": "我的程式碼空間",
            "Your Copilot": "我的 Copilot",
            "Your organizations": "我的組織",
            "Your enterprises": "我的企業",
            "Your projects": "我的項目",
            "Your discussions": "我的討論",
            "Your stars": "我的星標",
            "Your gists": "我的程式碼片段",
            "Your sponsors": "我的贊助者",
            "Upgrade": "升級",
            "Try Enterprise": "試用企業版",
            "Try Copilot": "試用 Copilot",
            "Feature preview": "功能預覽",
                // 對話框
                "Enable": "啟用",
                "Disable": "禁用",
                "Documentation": "文檔",
                "Codespaces Connectivity v2": "程式碼空間連接 v2",
                    "Codespaces is rolling out improved infrastructure for both the main connection, and forwarded ports, resulting in better performance and increased reliability.": "程式碼空間 正在推出針對主連接和端口轉發的改進基礎設施，從而實現更佳的性能和更高的穩定性。",
                    "If you primarily use Codespaces behind a firewall, you may have to update your firewall settings to enable this new approach. Codespaces will now require access to *.visualstudio.com to facilitate your connection to the codespace.": "如果您通常在防火墻後使用 程式碼空間，為了適應這一新的接入方式，您可能需要對您的防火墻設置進行更新。程式碼空間 現在需要訪問 *.visualstudio.com 以便於您連接到 程式碼空間。",
                "Colorblind themes": "色盲主題",
                    "Varying by gender and geography, color blindness can affect on average 5-6% of men and up to 0.4% of women. Our previous colorblind theme has been split into two new themes:": "色盲會因性別和地域的不同而有所不同，平均而言，色盲會影響 5-6% 的男性和高達 0.4% 的女性。我們之前的色盲主題被分為兩個新主題：",
                    "Light/dark Protanopia & Deuteranopia for red/green color blindness.": "明/暗 - 紅綠色盲主題適用於紅綠色盲。",
                    "Light/dark Tritanopia for blue/yellow color blindness.": "明/暗 - 藍色盲主題適用於藍黃色盲。",
                "Command Palette": "命令面板",
                    "Quickly navigate and jump between your organizations or repositories and search recent issues, pull requests, projects and more with the new command palette. You can also execute time saving commands all without lifting your fingers off the keyboard!": "使用新的命令面板，可以快速導航並跳轉到您所在的組織或倉庫，並搜索最近的議題、拉取請求、項目等等。您還可以執行節省時間的命令，而無需將手指從鍵盤上移開！",
                    "To open the command palette:": "打開命令面板：",
                "Rich Jupyter Notebook Diffs": "Jupyter Notebook 的豐富差異視圖",
                    "Enables rich diffs of Jupyter Notebooks in pull requests": "在拉取請求中啟用 Jupyter Notebook 的豐富差異視圖",
                    "Note: commenting on rich diff views of notebooks is not yet supported": "注意：尚不支持對 Jupyter Notebook 的豐富差異視圖進行評論",
                "Project Migration": "項目遷移",
                    "We've made it easy for you to migrate your project (classic) boards to the all new Projects experience! Enable this feature so that you can try out tables, multiple views, new automation options, and powerful field types using your existing projects.": "我們已經為您簡化了將您的項目（經典版）面板遷移到全新項目的體驗！啟用此功能，您可以在現有項目中嘗試表格、多視圖、新的自動化選項和強大的字段類型。",
                    "How it works:": "如何工作：",
                        "We'll create a copy of your existing classic project board in Projects.": "我們將在 “項目” 中創建現有經典項目看板的副本。",
                        "You'll be prompted to close your classic project as future changes won't be synchronized.": "系統將提示您關閉經典項目，因為未來的更改將不會同步。",
                        "You can reopen your old project in a pinch if necessary!": "如果有必要，您可以緊急重新打開您的舊項目！",
                    "Notes:": "注意：",
                        "Migrated projects will be made private by default.": "默認情況下，遷移的項目將設為私有。",
                        "Projects does not support repository level projects. When you migrate a repository project board, it will migrate to either the organization or personal account that owns the repository project, and the migrated project will be pinned to the original repository. We will migrate permissions to the best of our ability but some folks may lose read or writes access.": "項目不支持倉庫級別的項目。當您遷移倉庫項目面板時，它將被遷移到擁有該倉庫項目的組織或個人帳戶，並且遷移後的項目將被固定到原始倉庫。我們將盡最大努力遷移權限，但有些人可能會失去讀取或寫入權限。",
                "Deployments Dashboard View": "部署儀表板視圖",
                    "A new dashboard to view and track your deployments across all your environments, see the full history of your deployments, and filter by environment.": "一個全新的儀表板，用於查看和跟蹤您在所有環境中的部署情況，查看您部署的完整歷史記錄，並按環境進行篩選。",
                "Slash Commands": "斜槓命令",
                    "Slash commands make it easier to type more complex Markdown, such as tables, tasklists, and code blocks.": "斜線命令可以讓您更輕鬆地輸入更複雜的 Markdown，如表格、任務列表和程式碼塊。",
                    "Simply type": "只需在議題、拉取請求和討論中鍵入",
                    "on Issues, PRs and Discussions to check out a list of available commands!": "，即可查看可用命令的列表！",
            "Help": "幫助",
            "Settings": "設置",
            "GitHub Docs": "GitHub 文檔",
            "GitHub Support": "GitHub 支持",
            "Sign out": "退出",

        // 狀態設置對話框
        // 出現位置: 個人資料頁, Gist 個人主頁, 倉庫頁右上角個人圖標下拉菜單
            "Edit status": "編輯狀態",
            "What's your current status?": "您目前的狀況如何？",

            "Suggestions": "建議",
                "On vacation": "在度假",
                "Working from home": "在家工作",
                "Out sick": "生病",
                "Focusing": "專注中",

            "Busy": "繁忙中",
                "When others mention you, assign you, or request your review, GitHub will let them know that you have limited availability.": "當其他人提及您、指派您或請求您進行評論時，GitHub 會告知他們您的很忙。",
                "I may be slow to respond.": "我的反應可能比較慢。",

            "Clear status": "清除狀態",
                "Never": "永不",
                "in 30 minutes": "30 分鐘",
                "in 1 hour": "1 小時",
                "in 4 hours": "4 小時",
                "today": "今天",
                "this week": "本周",
                "How long until this status will automatically clear.": "多久後狀態自動清除。",
            "Visible to": "可見",
                "Everyone": "任何人",
                    "Scope status visibility to a single organization.": "將狀態可視範圍擴大到單個組織。",
                "Everyone - Your status will be visible to everyone.": "所有人 - 所有人都可以看到您的狀態。",
            "Filter emoji": "篩選表情符號",
                "Search results": "篩選結果",

        // 底部條
            "Terms": "服務條款",
            "Privacy": "隱私",
            "Security": "安全",
            "Status": "狀態",
            "Docs": "文檔",
            "Contact": "聯繫我們",
            "Manage cookies": "管理 Cookies",
            "Manage Cookies": "管理 Cookies",
            "Do not share my personal information": "請勿分享我的個人信息",

            "Contact GitHub": "聯繫 GitHub",
            "Pricing": "價格",
            "Training": "培訓",
            "Shop": "商店",
            "Blog": "博客",
            "About": "關於",

        // 描述、評論編輯器翻譯
            "Add a comment": "添加評論",
            "Add a body": "添加內容",
            "Write": "撰寫",
                "Add your comment here...": "在此添加您的評論...",
                "Add your answer here...": "在此添加您的答覆...", // 具體討論頁
            "Preview": "預覽",
                "Nothing to preview": "沒有可預覽的內容。",
                "This file is empty.": "這是一個空文件。",
            "Leave a comment": "發表評論",
            "Write a reply": "發表回覆", // 具體討論頁
            "Write a comment": "發表評論", // 具體討論頁
            "Suggest an answer": "提出答覆", // 具體討論頁
            "Ask a question, start a conversation, or make an announcement": "提出問題、開始討論或發布公告", // 新建討論
            "Nothing to preview": "沒有什麼可預覽",
            "This repository has been archived.": "此倉庫已存檔。", // 已存檔倉庫 某個提交的評論框
            "Add review comment": "添加審查意見", // 具體拉取請求 文件審查意見
            "Start a review": "開始評論", // 具體拉取請求 文件審查意見
            // 取消按鈕 提醒信息
            "Are you sure you want to discard your unsaved changes?": "您確定要放棄未保存的更改嗎？",

            "Add a title": "添加標題",
                "Title": "標題",
            "Add a description": "添加描述",
                "Add your description here...": "在此添加您的描述...",

            // 拉取請求 程式碼審查 回覆對話框
            "Heading": "標題",
            "Bold": "粗體",
            "Italic": "斜體",
            "Quote": "摘引",
            "Link": "鏈接",
            "Numbered list": "有序列表",
            "Unordered list": "無序列表",
            "Task list": "任務列表",
            "Attach files": "附件",
            "Mention": "提及",
            "Reference": "引用",
            "Saved replies": "快速回覆",
                "Select a reply": "選擇回覆",
                "Create a new saved reply": "創建新的快速回覆",
            "Slash commands": "斜槓命令",
                "Code block": "程式碼塊",
                    "Insert a code block formatted for a chosen syntax": "插入針對所選語法格式化的程式碼塊",
                "Details": "詳細信息",
                    "Add a details tag to hide content behind a visible heading": "添加詳情標籤，將內容隱藏在可見標題後面",
                // "快速回覆": "",
                    "Insert one of your saved replies": "插入您快速回覆",
                "Table": "表格",
                    "Add markdown table": "添加 Markdown 表格",
                "Templates": "模板",
                    "Insert one of your issue templates": "插入您的議題模板",

                "Slash": "斜槓",
                // 程式碼塊
                "No Syntax": "無語法",
                // 快速回覆
                "No saved replies": "尚無快速回覆",
                "You can create one in your": "您可以創建一個在您的",
                "settings": "設置",
                // 表格
                "Columns": "列",
                "1 column": "1 列",
                "2 columns": "2 列",
                "3 columns": "3 列",
                "4 columns": "4 列",
                "5 columns": "5 列",

                "Rows": "行",
                "1 row": "1 行",
                "2 rows": "2 行",
                "3 rows": "3 行",
                "4 rows": "4 行",
                "5 rows": "5 行",

                // 模板
                "No issue templates": "尚無議題模板",
                "Learn more about": "了解更多關於",
                "issue templates": "議題模板",

            // 小屏 插入鏈接 對話框
                "Insert Link": "插入鏈接",
                "Link Text": "鏈接文本",
                "Add": "添加",

            "Attach files by": "通過",
            "dragging & dropping,": "拖放，",
            "selecting or pasting them.": "選擇或粘貼來附加文件。",
            "Markdown is supported": "支持 Markdown 語法",
            "Styling with Markdown is supported.": "支持 Markdown 語法。",
            "Paste, drop, or click to add files": "粘貼、拖放或點擊添加文件",
            "Uploading your files…": "正在上傳您的文件…",

            "Close issue": "關閉議題", // issue頁 評論框
                "Close as completed": "完成後關閉",
                    "Done, closed, fixed, resolved": "已完成、已關閉、已修復、已解決",
                "Close as not planned": "非計劃中關閉",
                    "Won't fix, can't repro, duplicate, stale": "不會修復，無法重現，重複，陳舊",
            "Close with comment": "評論並關閉議題", // issue頁 評論框
            "Close pull request": "關閉拉取請求", // pull頁 評論框
            "Reopen discussion": "重新打開討論", // discussion頁 評論框
            "Close discussion": "關閉討論", // discussion頁 評論框
                "Close as resolved": "因解決而關閉",
                    "The discussion has been resolved": "討論已解決",
                "Close as outdated": "因過時而關閉",
                    "The discussion is no longer relevant": "討論不再相關",
                "Close as duplicate": "因重複而關閉",
                    "The discussion is a duplicate of another": "討論與另一個討論重複",
            "Comment": "評論",
            "Submit new issue": "提交新議題",
            "Comment on this commit": "評論",
            "Close and comment": "提交並關閉",
            "Reopen and comment": "提交並重新打開",
            "Reopen issue": "重新打開議題", // 具體議題
            "Reopen with comment": "重新打開評論", // 具體議題
            "Reopen pull request": "重新打開拉取請求", //具體拉取請求
            "Add single comment": "評論", // 具體提交頁 進行某條程式碼評論
            "Reply": "回覆", // 具體討論頁
            "Answer": "答覆", // 具體討論頁
            "Start discussion": "開始討論", // 新建討論
            "Update": "更新", // 新建討論
            "discussion": "討論", // 新建討論
            "discussions": "討論", // 新建討論

        // 添加到清單
            "Add to list": "添加到清單",
                "You don't have any lists yet.": "您尚無任何清單。",
                "Lists": "清單",
                    "Search lists": "搜索清單",
                "Create list": "創建清單",
                    "Create a list to organize your starred repositories.": "創建一個清單來組織您的星標倉庫。",
                    "⭐️ Name this list": "⭐️ 清單名稱",
                    "Write a description": "簡單描述",
                    "Lists are currently in beta.": "清單目前處於測試階段。",
                    "Share feedback and report bugs.": "分享反饋意見和報告錯誤。",
                    "Creating...": "創建中...",

        // 全局快捷鍵對話框 - 快捷鍵 ? 打開
            "Keyboard shortcuts": "鍵盤快捷鍵",
            "Site-wide shortcuts": "全站快捷鍵",
                "Open command palette": "打開命令面板",
                "Open command palette in command mode": "在命令模式下打開命令面板",
                "Focus search bar": "聚焦搜索欄", // gist
                "Open search bar": "打開搜索欄",
                "Go to notifications": "跳轉到通知",
                "Go to dashboard": "跳轉到儀表板",
                "Go to your issues": "跳轉到議題",
                "Go to your pull requests": "跳轉到拉取請求",
                "Bring up this help dialog": "彈出這個幫助對話框",
                "Move selection down": "向下移動選擇",
                "Move selection up": "向上移動選擇",
                "Toggle selection": "切換選擇",
                "Open selection": "打開選擇",
            "View all keyboard shortcuts": "查看所有鍵盤快捷鍵",

        // 命令面板 - ctrl k 或 ctrl alt k 打開
            "Clear Command Palette": "清除命令面板",
            "Tip:": "小貼士：",
                "Go to your accessibility settings to change your keyboard shortcuts": "跳轉到您的無障礙設置，以更改您的鍵盤快捷鍵",
                "to search discussions": "搜索討論", // 鍵入 #
                "to search issues": "搜索議題", // 鍵入 #
                "to search pull requests": "搜索拉取請求", // 鍵入 #
                "to search projects": "搜索項目", // 鍵入 !
                "to search people and organizations": "搜索成員和組織", // 鍵入 @
                "to search teams": "搜索團隊", // 鍵入 @
                "to activate command mode": "激活命令模式", // 鍵入 >
                "Type is:issue to filter to issues": "鍵入 is:issue 以篩選議題",
                "Type is:pr to filter to pull requests": "鍵入 is:pr 以篩選拉取請求",
                "Type is:open to filter to open content": "鍵入 is:open 以篩選打開的內容",
                "Type author:@me to search your content": "鍵入 author:@me 以篩選您的內容",
                "for help and tips": "尋求幫助和提示", // 鍵入 ?

            "Pages": "GitHub Pages",
            "Dashboard": "儀表板",
            "Notifications": "通知",
            "Discussions": "討論",
            "Actions": "操作",
            "Insights": "洞察",
            "Organizations": "組織",
            "Repositories": "倉庫",
            "Packages": "軟件包",
            "Users": "用戶",
            "to jump to": "去跳轉",

            "Top result": "最佳結果",
            "No results matched your search": "沒有與您的搜索相符的結果",
            // [/in ([\w]+/[\w]+)/, "在 $1"],

            // # 模式
            "Search issues and pull requests": "搜索議題和拉取請求",
            "Search issues, pull requests, discussions, and projects": "搜索議題、拉取請求、討論和項目",
            "Issues, pull requests, and discussions": "議題、拉取請求和討論",

            // ! 模式
            "Search projects": "搜索項目",

            // @ 模式
            "Search or jump to a repository": "搜索或跳轉到倉庫",
            "Search or jump to a user, organization, or repository": "搜索或跳轉到用戶、組織或倉庫",

            // / 文件模式
            "Search files": "搜索文件",
            "Files": "文件",

            // > 命令模式
            "Run a command": "運行命令",
            "Run command": "運行命令",
            "Commands": "命令",
            "Global Commands": "全局命令",
            "Type > to filter": "鍵入 > 去篩選",
            "– New repository": "- 新建倉庫",
            "– Import repository": "- 導入倉庫",
            "– New project": "- 新建項目",
            "– New discussion": "- 新建討論",
            "– New organization": "- 新建組織",
            "– New gist": "- 新建程式碼片段",
            "– New issue": "- 新建議題",
            "– New file": "- 新建文件",
            "– Change tab size rendering": "- 切換制表符尺寸",
            "– Switch theme": "- 切換主題",

            "New issue": "新建議題",
            "New discussion": "新建討論",
            "New file": "新建文件",
            "Change tab size rendering": "切換制表符尺寸",
            "Change tab size r...": "切換制表符尺寸",
                "2 spaces": "2 個空格",
                "3 spaces": "3 個空格",
                "4 spaces": "4 個空格",
                "5 spaces": "5 個空格",
                "6 spaces": "6 個空格",
                "7 spaces": "7 個空格",
                "8 spaces": "8 個空格",
                "9 spaces": "9 個空格",
                "10 spaces": "10 個空格",
                "12 spaces": "12 個空格",
            "Switch theme": "切換主題",
                "Default dark": "暗 - 默認",
                "Default light": "亮 - 默認",
                "Dark dimmed": "昏暗",
                "Switch theme to dark high contrast": "切換主題為 暗 - 高對比",
                "Sync with system settings": "與系統設置同步",

            // ? 模式
            "Modes": "模式",
            "Search for": "搜索",
            "across all of GitHub": "在整個 GitHub 中",
            "issues, pull requests, discussions,": "議題、拉取請求、討論",
            "organizations, repositories,": "組織、倉庫",
            "projects": "項目",
            "files": "文件",
            "issues": "議題",
            "pull requests": "拉取請求",
            "organizations": "組織",
            "repositories": "倉庫",
            "users": "用戶",
            "Activate": "激活",
            "command mode": "命令模式",

            "Use filters in issues, pull requests, discussions, and projects": "在議題題、拉取請求、討論和項目中使用過濾器",
            "Search your issues, pull requests, and discussions": "搜索您的議題、拉取請求和討論",
            "Filter to pull requests": "篩選拉取請求",
            "Filter to issues": "篩選議題",
            "Filter to discussions": "篩選討論",
            "Filter to projects": "篩選項目",
            "Filter to open issues, pull requests, and discussions": "篩選打開的議題、拉取請求和討論",

            // 議題頁面
            "Edit issue title": "編輯議題標題",
            "Edit issue body": "編輯議題內容",
            "Transfer issue…": "轉移議題…",
            "Delete issue…": "刪除議題…",

        // 公共詞 高頻詞
            "Follow": "關注",
            "Unfollow": "取消關注",
            "Star": "星標",
            "Stars": "星標",
            // "Unstar": "已加星標",
            "Starred": "已加星標",
            "Fork": "復刻",
            "Save": "保存",
            "Saving…": "保存中…",
            "Updating": "更新中",
            "Updating…": "更新中…",
            "Delete": "刪除",
            "Cancel": "取消",
            "Edit": "編輯",
            "Added on": "添加於",
            "Loading...": "載入中...",
            "Loading…": "載入中…",
            "Copied!": "✅ 複製成功!",
            "Copy to clipboard": "複製到剪切板",
            "Give feedback": "反饋",
            "Give us your feedback": "向我們提供反饋意見",
            "Download": "下載",
            "Create": "創建",

            "and": "和",
            ", and": "，和",
            "or": "或",
            ", or": "，或",
            "to": "到",
            "by": "由",
            "on": "於",
            "Use": "使用",

            "Learn more": "了解更多",
            "Learn More": "了解更多",
            "Learn more.": "了解更多。",
            ",": "，",
            ".": "。",

            "Prev": "上一頁",
            "Previous": "上一頁",
            "Next": "下一頁",

            // 名詞
            "Public": "公共",
            "Private": "私有",
            "Public archive": "公共存檔",
            "Private archive": "私有存檔",
            "Public template": "公共模板",
            "Public mirror": "公共鏡像",
            "Code": "程式碼",
            "Overview": "概況",
            "Followers": "關注者",
            "Collaborators": "協作者",
            "collaborators": "協作者",
            "Sponsors": "贊助者",
            "commit": "提交",
            "commits": "提交",
            "Organization": "組織",
            "People": "成員",
            "Teams": "團隊",

            // 相對時間
            "just now": "剛剛",
            "now": "當前",
            "yesterday": "昨天",
            "last month": "上個月",

        // 驗證標記浮動信息
            "This commit was created on GitHub.com and signed with GitHub’s": "此提交在 GitHub.com 上創建並簽名，使用 GitHub 的",
            "This commit was created on GitHub.com and signed with GitHub's": "此提交在 GitHub.com 上創建並簽名，使用 GitHub 的",
            "This commit was created on GitHub.com and signed with GitHub’s verified signature": "此提交在 GitHub.com 上創建並簽名，使用 GitHub 的",
            "This commit was signed with the committer's": "此提交已簽名，使用提交者的",
            "This tag was signed with the committer's": "此標籤已簽署，使用提交者的", // /<user-name>/<repo-name>/releases
            "This commit was signed with the committer’s": "此提交已簽名，使用提交者的",
            "This tag was signed with the committer’s": "此標籤已簽署，使用提交者的", //
            "verified signature": "已驗證簽名",
            "The key has expired": "密鑰已過期",
            "This commit is not signed, but one or more authors requires that any commit attributed to them is signed.": "此提交未簽名，但一位或多位作者要求對歸屬於他們的任何提交進行簽名。",
            "We had a problem verifying this signature. Please try again later.": "我們在驗證此簽名時遇到問題。請稍後再試。",

            "GPG Key ID:": "GPG 密鑰 ID：",
            "GPG key ID:": "GPG 密鑰 ID：",
            "SSH Key Fingerprint:": "SSH 密鑰指紋：",
            "SSH key Fingerprint:": "SSH 密鑰指紋：",
            "Learn about vigilant mode": "了解警戒模式",

            "Verified": "已驗證",
            "Expired": "已過期",
            "Partially verified": "部分驗證",
            "Unverified": "未驗證",
                "Upload your public signing GPG key": "上傳您的公共簽名 GPG 密鑰",
                "to verify your signature.": "以驗證您的簽名。",

        // 郵箱驗證提示
            "Please verify your email address to access all of GitHub's features.": "請驗證您的電子郵箱地址以便開啟所有 GitHub 功能。",
            "Configure email settings": "修改電子郵箱設置",
            "Your email was verified.": "您的電子郵箱地址驗證成功！",

        // 標籤提示
            "New feature or request": "新功能或要求",

        // 更換新手機, 要求重新下載恢復碼的全局提醒
            "Don't get locked out - if you get a new phone this season, be sure to transfer your authenticator app data to the new phone. Enable cloud back up if your authenticator app supports it and consider": "不要被鎖在門外——如果您在這個季節買了一部新手機，請務必將您的身份驗證器應用數據傳輸到新手機。如果您的身份驗證器應用支持雲備份，請啟用它並考慮",
            "redownloading your recovery codes": "重新下載您的恢復碼",
            ", just to be safe.": "，以確保安全。",

        // 刷新會話提示條
            "You signed in with another tab or window.": "您使用其他標籤頁或窗口登錄。",
            "Reload": "重新加載",
            "to refresh your session.": "以刷新您的會話",

        // 日曆
            "Jan": "1月",
            "Feb": "2月",
            "Mar": "3月",
            "Apr": "4月",
            "May": "5月",
            "Jun": "6月",
            "Jul": "7月",
            "Aug": "8月",
            "Sep": "9月",
            "Oct": "10月",
            "Nov": "11月",
            "Dec": "12月",

            "January"   : "1月",
            "February"  : "2月",
            "March"     : "3月",
            "April"     : "4月",
            "June"      : "6月",
            "July"      : "7月",
            "August"    : "8月",
            "September" : "9月",
            "October"   : "10月",
            "November"  : "11月",
            "December"  : "12月",

            "Sun"  : "周日",
            "Mon"  : "周一",
            "Tue"  : "周二",
            "Wed"  : "周三",
            "Thu"  : "周四",
            "Fri"  : "周五",
            "Sat"  : "周六",

    },
    "regexp": [ // 正則翻譯
        /**
         * 匹配時間格式
         *
         * 月 日 或 月 日, 年
         * Mar 19, 2015 – Mar 19, 2016
         * January 26 – March 19
         * March 26
         *
         * 不知道是否穩定, 暫時先試用著. 2016-03-19 20:46:45
         *
         * 更新於 2021-10-04 15:19:18
         * 增加 帶介詞 on 的格式，on 翻譯不體現
         * on Mar 19, 2015
         * on March 26
         *
         * 更新於 2021-10-10 13:44:36
         * on 星期(簡寫), 月 日 年  // 個人訪問令牌 有效期
         * on Tue, Nov 9 2021
         *
         * 2021-10-19 12:04:19 融合更多規則
         *
         * 4 Sep
         * 30 Dec 2020
         *
         * on 4 Sep
         * on 30 Dec 2020
         *
         * 2021-11-22 12:51:57 新增 格式
         *
         * 星期(全稱), 月 日, 年 // 倉庫-->洞察-->流量 圖示標識
         * Sunday, November 14, 2021
         *
         * 更新於 2023-07-04 13:19:21
         * 新增前綴詞, 減少二次組織翻譯
         *  Updated Jul 4            // 儀表板頁面 倉庫標籤卡
         *  Commits on Jul 4, 2023   // 提交頁面、倉庫拉取請求頁->提交卡
         *  Joined on Jul 4, 2023    // 追星者，關注者頁面
         *
         * 更像於 2023-11-11 16:48:02
         * 個人資料頁->貢獻卡
         * 日期帶後綴
         *
         * Tip:
         * 正則中的 ?? 前面的字符 重複0次或1次
         * 正則中的 ?: 非捕獲符號(即關閉圓括號的捕獲能力) 使用方法 (?: 匹配規則) -->該匹配不會被捕獲 為 $數字
         */
        [/(^Updated |^Commits on |^Joined on |on |)(?:(\d{1,2}) |)(?:(Sun(?:day)?|Mon(?:day)?|Tue(?:sday)?|Wed(?:nesday)?|Thu(?:rsday)?|Fri(?:day)?|Sat(?:urday)?), |)(?:(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May(?:)??|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)(?:,? |$))(\d{4}|)(?:(\d{1,2})(?:st.|nd.|rd.|th.)?|)(?:,? (\d{4})|)/g, function (all, prefix, date1, week, month, year1, date2, year2) {
            var prefixKey = {
                "Updated "   : "更新於 ",
                "Commits on ": "提交於 ",
                "Joined on " : "加入於 ",
            };
            var weekKey = {
                "Sun"  : "周日",
                "Mon"  : "周一",
                "Tue"  : "周二",
                "Wed"  : "周三",
                "Thu"  : "周四",
                "Fri"  : "周五",
                "Sat"  : "周六",
            };
            var monthKey = {
                "Jan": "1月",
                "Feb": "2月",
                "Mar": "3月",
                "Apr": "4月",
                "May": "5月",
                "Jun": "6月",
                "Jul": "7月",
                "Aug": "8月",
                "Sep": "9月",
                "Oct": "10月",
                "Nov": "11月",
                "Dec": "12月"
            };
            var date = date1 ? date1 : date2;
            var year = year1 ? year1 : year2;
            return (prefixKey[prefix] ? prefixKey[prefix] : '') + (year ? year + '年' : '') + monthKey[month.substring(0, 3)] + (date ? date + '日' : '') + (week ? ', ' + weekKey[week.substring(0, 3)] : '');
        }],
        /**
         * 相對時間格式處理
         *
         * 更新於 2021-11-21 16:47:14
         * 1. 添加 前綴詞
         *    over xxx ago // 里程碑頁面 最後更新時間
         *    about xxx ago // 里程碑頁面 最後更新時間
         *    almost xxx ago // 里程碑頁面 最後更新時間
         *    less than xxx ago // 導出帳戶數據
         * 2. xxx之內的相對時間格式
         *  in 6 minutes // 拉取請求頁面
         *
         * 更新於 2021-11-22 11:54:30
         * 1. 修復 Bug: 意外的擴大了匹配範圍(不帶前綴與後綴的時間) 干擾了帶有相對時間的其他規則
         *  7 months
         */
            [/^just now|^now|^last month|^yesterday|(?:(over|about|almost|in) |)(an?|\d+)(?: |)(second|minute|hour|day|month|year)s?( ago|)/, function (all, prefix, count, unit, suffix) {
            if (all === 'now') {
                return '現在';
            }
            if (all === 'just now') {
                return '剛剛';
            }
            if (all === 'last month') {
                return '上個月';
            }
            if (all === 'yesterday') {
                return '昨天';
            }
            if (count[0] === 'a') {
                count = '1';
            } // a, an 修改為 1

            var unitKey = {second: '秒', minute: '分鐘', hour: '小時', day: '天', month: '個月', year: '年'};

            if (suffix) {
                return (prefix === 'about' || prefix === 'almost' ? '大約 ' : prefix === 'less than' ? '不到 ' : '') + count + ' ' + unitKey[unit] + (prefix === 'over' ? '多之前' : '之前');
            } else {
                return count + ' ' + unitKey[unit] + (prefix === 'in' ? '之內' : '之前');
            }
        }],
        /**
         * 匹配時間格式 2
         *
         * in 5m 20s
         */
        [/^(?:(in) |)(?:(\d+)m |)(\d+)s/,function (all, prefix, minute, second) {
            all = minute ? minute + '分' + second + '秒' : second + '秒';
            return (prefix ? all + '之內' : all);
        }],
    ],
    "time-regexp": [ // 時間正則翻譯專項
        /**
         * 匹配時間格式
         *
         * 月 日 或 月 日, 年
         * Mar 19, 2015 – Mar 19, 2016
         * January 26 – March 19
         * March 26
         *
         * 不知道是否穩定, 暫時先試用著. 2016-03-19 20:46:45
         *
         * 更新於 2021-10-04 15:19:18
         * 增加 帶介詞 on 的格式，on 翻譯不體現
         * on Mar 19, 2015
         * on March 26
         *
         * 更新於 2021-10-10 13:44:36
         * on 星期(簡寫), 月 日 年  // 個人訪問令牌 有效期
         * on Tue, Nov 9 2021
         *
         * 2021-10-19 12:04:19 融合更多規則
         *
         * 4 Sep
         * 30 Dec 2020
         *
         * on 4 Sep
         * on 30 Dec 2020
         *
         * 2021-11-22 12:51:57 新增 格式
         *
         * 星期(全稱), 月 日, 年 // 倉庫-->洞察-->流量 圖示標識
         * Sunday, November 14, 2021
         *
         * Tip:
         * 正則中的 ?? 前面的字符 重複0次或1次
         * 正則中的 ?: 非捕獲符號(即關閉圓括號的捕獲能力) 使用方法 (?: 匹配規則) -->該匹配不會被捕獲 為 $數字
         */
        [/(?:on |)(?:(\d{1,2}) |)(?:(Sun(?:day)?|Mon(?:day)?|Tue(?:sday)?|Wed(?:nesday)?|Thu(?:rsday)?|Fri(?:day)?|Sat(?:urday)?), |)(?:(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May(?:)??|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)(?:,? |$))(\d{4}|)(\d{1,2}|)(?:,? (\d{4})|)/g, function (all, date1, week, month, year1, date2, year2) {
            var weekKey = {
                "Sun"  : "周日",
                "Mon"  : "周一",
                "Tue"  : "周二",
                "Wed"  : "周三",
                "Thu"  : "周四",
                "Fri"  : "周五",
                "Sat"  : "周六",
            };
            var monthKey = {
                "Jan": "1月",
                "Feb": "2月",
                "Mar": "3月",
                "Apr": "4月",
                "May": "5月",
                "Jun": "6月",
                "Jul": "7月",
                "Aug": "8月",
                "Sep": "9月",
                "Oct": "10月",
                "Nov": "11月",
                "Dec": "12月"
            };
            var date = date1 ? date1 : date2;
            var year = year1 ? year1 : year2;
            return (year ? year + '年' : '') + monthKey[month.substring(0, 3)] + (date ? date + '日' : '') + (week ? ', ' + weekKey[week.substring(0, 3)] : '');
        }],
        /**
         * 相對時間格式處理
         *
         * 更新於 2021-11-21 16:47:14
         * 1. 添加 前綴詞
         *    over xxx ago // 里程碑頁面 最後更新時間
         *    about xxx ago // 里程碑頁面 最後更新時間
         *    almost xxx ago // 里程碑頁面 最後更新時間
         *    less than xxx ago // 導出帳戶數據
         * 2. xxx之內的相對時間格式
         *  in 6 minutes // 拉取請求頁面
         *
         * 更新於 2021-11-22 11:54:30
         * 1. 修復 Bug: 意外的擴大了匹配範圍(不帶前綴與後綴的時間) 干擾了帶有相對時間的其他規則
         *  7 months
         */
        [/^just now|^now|^last year|^last month|^last week|^yesterday|(?:(over|about|almost|in) |)(an?|\d+)(?: |)(second|minute|hour|day|month|year|week)s?( ago|)/, function (all, prefix, count, unit, suffix) {
            if (all === 'now') {
                return '現在';
            }
            if (all === 'just now') {
                return '剛剛';
            }
            if (all === 'last year') {
                return '最近 1 年';
            }
            if (all === 'last month') {
                return '上個月';
            }
            if (all === 'last week') {
                return '上周';
            }
            if (all === 'yesterday') {
                return '昨天';
            }
            if (count[0] === 'a') {
                count = '1';
            } // a, an 修改為 1

            var unitKey = {second: '秒', minute: '分鐘', hour: '小時', day: '天', month: '個月', year: '年', week: '周'};

            if (suffix) {
                return (prefix === 'about' || prefix === 'almost' ? '大約 ' : prefix === 'less than' ? '不到 ' : '') + count + ' ' + unitKey[unit] + (prefix === 'over' ? '多之前' : '之前');
            } else {
                return count + ' ' + unitKey[unit] + (prefix === 'in' ? '之內' : '之前');
            }
        }],
        [/(\d+)(h|d|w|m)/, function (all, count, suffix) {
            var suffixKey = {h: '小時', d: '天', w: '周', m: '個月'};

            return count + ' ' + suffixKey[suffix] + '之前';
        }],
    ],
};

I18N.zh["page-dashboard"] = { // 已登錄的首頁 - 儀表板（含組織）
    "static": { // 靜態翻譯
        // 新手幫助
        "Learn Git and GitHub without any code!": "了解 Git 和 GitHub 無需任何程式碼！",
        "Using the Hello World guide, you’ll create a repository, start a branch,": "使用 Hello World 指南，您將創建一個倉庫，開始一個分支，",
        "write comments, and open a pull request.": "寫評論，並創建一個拉取請求。(教程內容就不翻譯了...)",
        "Let's get started!": "讓我們開始吧！",
        "Hide this notice forever": "永久的隱藏該信息",

        "Welcome to GitHub! What’s next?": "歡迎來到 GitHub！下一步幹什麼？",
        "Create a repository": "創建一個倉庫",
        "Tell us about yourself": "介紹一下您自己",
        "Browse interesting repositories": "瀏覽有趣的倉庫",
        "on Twitter": "在 Twitter 上",

        "You don’t have any repositories yet!": "您目前還沒有任何倉庫！",
        "Create your first repository": "創建您的第一個倉庫",
        "or": "或者",
        "Learn more about Git and GitHub": "了解更多關於 Git 和 GitHub 的信息",

        // 組織
        // [/You’re an owner of the ([^ ]+) organization!/, "您是 $1 組織的所有者！"],
        // [/Create a repository for ([^ ]+)/, "為 $1 創建倉庫"],
        "View and create teams": "查看並創建團隊",
        "See all owners": "查看全部所有者",
        // [/Edit ([^ ]+)’s settings/, "編輯 $1 的設置"],
        "Return to your personal dashboard": "返回到您的個人儀表板",

        // 已有倉庫的項目
        // 左側欄
        "View organization": "查看組織", // 組織
        "Browse organization's repositories": "瀏覽組織的倉庫", // 組織
        "Top Repositories": "置頂倉庫",
        "New": "新建",
        "Find a repository…": "搜索倉庫…",
        "Show more": "顯示更多",
        "Your teams": "您的團隊",
            "You don’t belong to any teams yet!": "您還不屬於任何團隊！",
        "Find a team…": "搜索團隊…",
        "Recent activity": "近期活動",
            "When you take actions across GitHub, we’ll provide links to that activity here.": "當您在 GitHub 上採取行動時，我們會在這裡提供該活動的鏈接。", // 組織

        // 中間欄
        "The home for all developers — including you.": "所有開發者的家園——包括您。",
        "Welcome to your personal dashboard, where you can find an introduction to how GitHub works, tools to help you build software, and help merging your first lines of code.": "歡迎來到您的個人儀表板，在這裡您可以看到關於 GitHub 工作原理的介紹，幫助您構建軟件的工具，以及幫助您合併您的第一行程式碼。",
        "Start writing code": "開始編寫程式碼",
            "You're seeing this because you haven't created a repository in a while.": "您看到這個是因為您有一段時間沒有創建倉庫了。",
            "You're seeing this because you haven't used repositories, issues, and pull requests recently.": "您看到這個是因為您最近沒有使用倉庫、議題和拉取請求。",
            "Remove from dashboard": "從儀表板中刪除",
        "Tools of the trade": "貿易工具",
            "You're seeing this because you haven't opened a pull request in a while.": "您看到這個是因為您有一段時間沒有打開拉取請求了。",
            "Write code in your web browser": "在您的網絡瀏覽器中編寫程式碼",
                "Use": "使用",
                "the github.dev web-based editor": "基於 github.dev 的網絡編輯器",
                "from your repository or pull request to create and commit changes.": "從您的倉庫或拉取請求中創建和提交更改。",
        "Install a powerful code editor": "安裝一個強大的程式碼編輯器",
            "is a multi-platform code editor optimized for building and debugging software.": "是針對構建和調試軟件進行了優化的多平台程式碼編輯器。",
        "Set up your local dev environment": "設置本地開發環境",
            "set up Git": "設置 Git",
            ", simplify your dev workflow with": "，簡化您的開發工作流程，使用",
            ", or": "，或",
            "bring GitHub to the command line": "將 GitHub 引入命令行",
        "Get started on GitHub": "開始使用 GitHub",
            "You're seeing this because you haven't used GitHub's core features, yet.": "您看到這個是因為您有一段時間沒有使用過 GitHub 的核心功能了。",
        "About version control and Git": "關於版本控制和 Git",
        "Learn about the version control system, Git, and how it works with GitHub.": "了解版本控制系統、Git 以及它如何與 GitHub 一起工作。",
        "The GitHub Flow": "GitHub 流程",
        "Adopt GitHub's lightweight, branch-based workflow to collaborate on projects.": "採用 GitHub 的輕量級、基於分支的工作流程來協作處理項目。",

        "One moment please...": "稍等一會兒...",
        "Loading activity...": "載入活動...",
        "All activity": "所有活動",

        "Welcome to the new feed!": "歡迎來到新的動態提要!",
        "We’re updating the cards and ranking all the time, so check back regularly. At first, you might need to follow some people or star some repositories to get started": "我們一直在更新卡片和排名，所以請定期查看。一開始，您可能需要關注一些人或標星一些倉庫才能開始",
        "Send feedback": "發送反饋",

        "Updates to your homepage feed": "主頁動態摘要的更新",
        "We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design. ✨": "我們將 “關注動態提要” 與 “您的動態提要” 的強大功能結合在一起，讓您在一個地方就能發現 GitHub 上的內容。此外，我們還改進了篩選功能，讓您可以完全按照自己的喜好定制動態提要，並採用全新的視覺設計。 ✨",
        "Learn more": "了解更多",

        // 提要篩選
        "Filter": "篩選器",
            "Feed filters": "提要篩選器",
            "Events": "事件",
                "Activity you want to see on your feed": "您想在提要上看到的活動",
            "Announcements": "公告",
                "Special discussion posts from repositories": "來自倉庫的特別討論帖",
            "Releases": "發行版",
                "Update posts from repositories": "來自倉庫的更新帖",
            // 贊助
                "Relevant projects or people that are being sponsored": "獲得贊助的相關項目或人員",
            "Stars": "星標",
                "Repositories being starred by people": "被人們標星的倉庫",
            "Repositories": "倉庫",
                "Repositories that are created or forked by people": "由人們創建或復刻的倉庫",
            "Repository activity": "倉庫活動",
                "Issues and pull requests from repositories": "來自倉庫的議題和拉取請求",
            "Follows": "關注",
                "Who people are following": "人們在關注誰",
            "Recommendations": "推薦",
                "Repositories and people you may like": "您可能喜歡的倉庫和人",

            "Include events from starred repositories": "包括來自星標倉庫中的事件",
                "By default, the feed shows events from repositories you sponsor or watch, and people you follow.": "默認情況下，動態提要顯示的事件來自您贊助或關注的倉庫，以及您關注的人。",
            "Reset to default": "重置",
            "Save": "保存",

        "Show all": "顯示所有",
        "Show less": "顯示更少",

        "Uh oh!": "哎呀！",
        "There was an error in loading the activity feed.": "載入動態提要時發生錯誤。",
        "Reload this page.": "重載此頁面",

        // 動態 狀態詞
        "starred": "星標了",
        "created": "創建了",
        "forked from": "復刻自",
        "generated from": "創建自",
        "mirrored from": "鏡像自",
        "forked": "復刻了",
        "from": "來自",
        "for": "",
        "pushed to": "推送到",
        "released": "發布了",
        "published": "發布了",
        "started sponsoring": "贊助給",
        "started following": "開始關注了",
        "you": "您",
        "Updated": "更新於",
        "a repository": "1 個倉庫",
        "has a new repository": "創建了倉庫",
        "created a repository": "創建了倉庫",
        "created a branch in": "創建了一個分支在",
        "in": "分支在",
        "Forked to": "復刻為",
        "of": "",
        "made": "將",
        "public": "設為公共",
        "committed": "提交於",
        "posted a discussion in": "發表討論於",
        "made this repository public": "將此倉庫公開",
        "labeled a pull request": "將標籤添加到拉取請求中",
        "launched their sponsorship page 💖": "推出了他們的贊助頁面 💖",
        //[/and (\d+) more/, "和另外 $1 個"],

        "published a release": "發布發行版",
        "forked a repository": "復刻倉庫",
        "starred a repository": "星標倉庫",
        "sponsored": "贊助了",
        "followed": "關注了",
        "added a repository to": "已將倉庫添加到",
        "contributed to": "貢獻給",

        "your repository": "您的倉庫",

        "Read more": "閱讀更多內容",

        "More": "更多",
        "Loading more…": "載入更多…",

        "Subscribe to your news feed": "訂閱您的新聞提要",
        "Subscribe to the": "訂閱", // 組織
        "organization news feed": "組織的新聞提要", // 組織

        //主頁上倉庫3個點
        "You're seeing this because of your activity.": "您看到這個是因為您的活動。",
        "Show less activity like this": "顯示較少這類活動",
        // [/You're seeing this because you collaborated with ([^ ]+)/, "您看到這個是因為您與 $1 有過合作"],
        // [/You're seeing this because you starred ([^ ]+)/, "您看到這個，是因為您星標了 $1"],
        "Unstar this repository": "取消星標此倉庫",
        // [/You're seeing this because you follow ([^ ]+)/, "您看到這個，是因為您關注了 $1"],
        "Unfollow this user": "取消關注此用戶",

        "Contributors": "貢獻者",
        "Report": "舉報",
        "Recommended for you": "為您推薦",
        "Trending repositories": "熱門倉庫",
        "See more": "查看更多",
        "You're seeing this based on GitHub-wide trends.": "您看到的是基於 GitHub-wide 的趨勢。",
        "Recommended based on people you follow": "根據您關注的人推薦",
        "has a new discussion in": "有一條新討論，在",
        "Join discussion": "參與討論",
        "Popular among": "很受歡迎",
        "people you follow": "在您關注的人中",
        "Sponsor": "贊助",

        // 右側欄
        "Latest changes": "最新變化",
        "View changelog →": "查看更新日誌 →",
        "Explore repositories": "探索倉庫",
        "Explore more →": "探索更多 →",

        "Member statuses": "成員狀態", // 組織

        // 儀表板右上方看板
        //"Learn from the best": "向最優秀的人學習",
        //"Unlock the full power of GitHub! Gain expertise and insights from top organizations through guided tutorials, boosting productivity, enhancing security, and enabling seamless collaboration.": "釋放 GitHub 的全部力量！通過指導教程獲得頂級組織的專業知識和見解，提高生產力、增強安全性並實現無縫協作。",
        //"Start learning": "開始學習",
        "What does it mean for a technology to go mainstream? Discover how AI is changing the developer experience.": "了解一項技術成為主流所承載的含義是什麼？深入探討 AI 如何在各個層面上轉變著開發者的工作體驗。",

        // 用戶 浮動信息卡
        "Member of": "隸屬組織",
        // [/, and (\d+) more/, "，以及其他 $1 個組織"],

        // 組織  浮動信息卡
        // [/(\d+) repositor(y|ies)/, "$1 個倉庫"],
        // [/(\d+) members?/, "$1 個成員"],

        "Switch dashboard context": "切換默認身份", // 組織
        "Manage organizations": "管理組織", // 組織
        "Create organization": "創建組織", // 組織

        // 首次加入組織通知
        "You’ve been added to the": "您已經被添加到",
        "organization!": "組織！",
        "Here are some quick tips for a first-time organization member.": "以下是首次加入組織的一些提示。",
        "Use the switch context button in the upper left corner of this page to switch between your personal context (": "使用頁面左上角的切換身份按鈕，您可以在（",
        ") and organizations you are a member of.": "）和組織身份之間進行切換。",
        "After you switch contexts you’ll see an organization-focused dashboard that lists out organization repositories and activities.": "當您切換身份，您會看到一個組織為中心的頁面，其中列出了組織庫和活動。",

        // 快捷鍵
        "Dashboards": "儀表板",
        "Go to your issues": "跳轉到您的議題",
        "Go to your pull requests": "跳轉到您的拉取請求",
    },
    "regexp": [ // 正則翻譯
        [/added (\d+) repositor(y|ies) to/, "添加 $1 個倉庫到"],
        [/, and (\d+) more/, "，以及其他 $1 個組織"], // 用戶 浮動信息卡
        [/(\d+) repositor(y|ies)/, "$1 個倉庫"], // 組織  浮動信息卡
        [/(\d+) members?/, "$1 個成員"], // 組織  浮動信息卡
        [/is being deleted./, "正在被刪除。"], // 倉庫 組織被刪除
        [/Your repository \"([^ ]+)\" was successfully deleted./, "您的倉庫 “$1” 已成功刪除。"], // 倉庫刪除
        [/(\d+) releases?/, "$1 個發行版"],
        [/(\d+) followers?/, "$1 個關注者"],
        [/(\d+) comments?/, "$1 條評論"],
        [/(\d+) commits? to/, "$1 個提交到"],
        [/(\d+) more commits? »/, "$1 個更多提交到"],
        [/(\d+) issues? needs? help/, "$1 個議題需要幫助"],
        // [/Updated/, "更新於"],
        [/You’re an owner of the ([^ ]+) organization!/, "您是 $1 組織的所有者！"], // 組織
        [/Create a repository for ([^ ]+)/, "為 $1 創建倉庫"], // 組織
        [/Edit ([^ ]+)’s settings/, "編輯 $1 的設置"], // 組織
        [/and (\d+) more/, "和另外 $1 個"],
        [/You're seeing this because you collaborated with ([^ ]+)/, "您看到這個是因為您與 $1 有過合作"],
        [/You're seeing this because you starred ([^ ]+)/, "您看到這個，是因為您星標了 $1"],
        [/You're seeing this because you follow ([^ ]+)/, "您看到這個，是因為您關注了 $1"],
        [/(\d+) people reacted with thumbs up/, "$1 個人的的反應為點贊"],
        [/(\d+) people reacted with laugh/, "$1 個人的反應為大笑"],
        [/(\d+) people reacted with hooray/, "$1 個人的反應為歡呼"],
        [/(\d+) people reacted with heart/, "$1 個人的反應為愛心"],
        [/(\d+) people reacted with rocket/, "$1 個人的反應為火箭"],
        [/(\d+) people reacted with eyes/, "$1 個人的反應為眼睛"],
        [/Support ([^ ]+)'s open source work/, "支持 $1 的開源工作"],
    ],
};
I18N.zh["dashboard"] = I18N.zh["page-dashboard"];
I18N.zh["orgs/dashboard"] = I18N.zh["page-dashboard"];

I18N.zh["page-profile-public"] = { // 個人首頁（含組織）
    "static": { // 靜態翻譯
        // 左側用戶信息欄
            "Change your avatar": "修改頭像",
            "they/them": "他們",
            "she/her": "她",
            "he/him": "他",
            "You have blocked this user": "您已拉黑此用戶",
            "Follow": "關注",
            "Sponsor": "贊助",
            "follower": "關注者",
            "followers": "關注者",
            "following": "關注",
            "Joined": "加入於",
            "Achievements": "成就",
            "Highlights": "高光時刻",
            "Developer Program Member": "開發者計劃成員",
            "Organizations": "組織",
            "Block or Report": "拉黑或舉報",
            "Unblock or report user": "取消拉黑或舉報",
            "- same time": "- 時間相同",

            // 編輯個人資料
                "Edit profile": "編輯個人資料",
                "Name": "名稱",
                "Bio": "個人簡介",
                "Add a bio": "添加個人簡介",
                    "You can": "您可",
                    "@mention": "@用戶名或組織名",
                    "other users and organizations to link to them.": "鏈接到其他用戶和組織。",
                "Pronouns": "代詞",
                    "Don't specify": "不說明",
                    "they/them": "他們",
                    "she/her": "她",
                    "he/him": "他",
                    "Custom": "自定義",
                "Company": "公司",
                "Location": "位置",
                "Display current local time": "顯示當前當地時間",
                "same time": "相同時間",
                "Website": "網站",
                "Social accounts": "社交賬戶",
                "Link to social profile": "鏈接到社交賬戶",

            // 成就浮動界面
                // 北極程式碼庫貢獻者
                    "Arctic Code Vault Contributor": "北極程式碼庫貢獻者",
                        "History": "歷史",
                        "100% unlocked": "100% 解鎖",
                        "· Unlocked": "· 解鎖於",
                        "these repositories, and more, were archived": "這些倉庫以及更多倉庫已存檔",
                // YOLO
                    "You want it? You merge it.": "您想要它？您合併它。",
                    "Merged without a review": "未經審查就合併",
                // Pull Shark
                    "Pull Shark": "鯊魚拉",
                    "Bronze unlocked": "青銅已解鎖",
                    "Bronze and Silver unlocked": "青銅和白銀已解鎖",
                    "· First unlocked": "· 首次解鎖於",
                    "2nd pull request merged": "2 個拉取請求被合併",
                    "16th pull request merged": "16 個拉取請求被合併",
                    "128th pull request merged": "128 個拉取請求被合併",
                    "1024th pull request merged": "1024 個拉取請求被合併",
                // Starstruck
                    "Starstruck": "追星族",
                    "⭐️ 16 stars": "⭐️ 16 個星標",
                    "⭐️ 128 stars": "⭐️ 128 個星標",
                    "⭐️ 512 stars": "⭐️ 512 個星標",
                    "⭐️ 4096 stars": "⭐️ 4096 個星標",
                // Pair Extraordinaire
                    "Pair Extraordinaire": "非凡搭檔",
                    "Unlocked": "解鎖於",
                    "Coauthored with": "與下列用戶共同合作",
                    "Coauthored with an unknown user": "與未知用戶共同合作",
                // Quickdraw
                    "Quickdraw": "快速關閉",
                    "Gitty up!": "趕快開始！",
                    "Closed within 5 minutes of opening": "在打開的 5 分鐘內關閉",
                // Galaxy Brain
                    "Galaxy Brain": "銀河大腦",
                    "2nd accepted answer": "2 個答案被接受",
                    "8th accepted answer": "8 個答案被接受",
                    "16th accepted answer": "16 個答案被接受",
                    "32nd accepted answer": "32 個答案被接受",
                // Public Sponsor
                    "Public Sponsor": "公共贊助者",
                    "1st sponsorship": "1 次贊助",
                // Mars 2020 Contributor
                    "Mars 2020 Contributor": "火星 2020 貢獻者",
                    "Mars 2020 Helicopter Mission": "2020 火星無人直升機首飛計劃",
                    "this repository was included": "該倉庫已收錄",

                // ?tab=achievements
                    "Hide from profile": "從個人資料中隱藏",
                    "Hidden from your profile.": "已從您的個人資料中隱藏",
                    "Show on profile": "在個人資料中顯示",
                    "Copy share link": "複製共享鏈接",
                    "Preview on Twitter": "在 Twitter 上預覽",

                    // 頂部提醒
                        // [/The (.+) achievement will now be hidden from your profile./, "現在，將從您的個人資料中隱藏 “$1” 成就。"],
                        // [/The (.+) achievement will now be shown in your profile./, "現在，將在您的個人資料中顯示 “$1” 成就。"],

                "Send feedback": "發送反饋",

            // 拉黑 & 舉報用戶對話框
                // [/Block or report ([^ ]+)/, "拉黑或舉報 $1"],
                "Block user": "拉黑用戶",
                "Prevent this user from interacting with your repositories and sending you notifications. Learn more about": "防止該用戶與您的倉庫互動並向您發送通知。了解更多關於",
                "blocking users": "拉黑用戶",

                "Add an optional note:": "添加可選備註：",
                    "Please don't include any personal information such as legal names or email addresses. Maximum 100 characters, markdown supported. This note will be visible to only you.": "請勿包含任何個人信息，如法定姓名或電子郵件地址。最多 100 個字符，支持標記符。此備註只有您本人可見。",

                "Unblock user": "取消拉黑",
                "Allow this user to interact with your repositories and send you notifications. Learn more about": "允許該用戶與您的倉庫互動並向您發送通知。了解更多關於",

                "Report abuse": "舉報濫用",
                    "Contact GitHub support about this user’s behavior. Learn more about": "就該用戶的行為聯繫 GitHub 支持部門。了解更多關於",
                    "reporting abuse": "舉報濫用",

        // 標籤欄
            "Sponsoring": "贊助",
    },
    "regexp": [ // 正則翻譯
        [/(\d+) discussions? answered/, "$1 個討論已回答"], // 高光時刻
        [/Block or report ([^ ]+)/, "拉黑或舉報 $1"],
        [/contributed code to several repositories in the/, "為多個倉庫貢獻了程式碼，在"],
        [/(\d+) GitHub Archive Program/, "$1 GitHub 存檔計劃"], // 成就浮動款
        [/opened pull requests that have been merged./, "打開的拉取請求已被合併。"], // Pull Shark
        [/created a repository that has many stars./, "創建了一個擁有很多星標的倉庫。"], // Starstruck
        [/coauthored commits on merged pull requests./, "與他人共同提交了合併的拉取請求。"], // Pair Extraordinaire
        [/answered discussions./, "回答了討論。"], // Galaxy Brain
        [/is sponsoring (\d+) organizations? or users?./, "贊助了 $1 個組織或用戶。"], // Public Sponsor
        [/contributed code to (\d+) repositor(y|ies) used in the/, "貢獻於 $1 個倉庫收錄於"], // Mars 2020 Helicopter Mission.
        [/The (.+) achievement will now be hidden from your profile./, "現在，將從您的個人資料中隱藏 “$1” 成就。"],
        [/The (.+) achievement will now be shown in your profile./, "現在，將在您的個人資料中顯示 “$1” 成就。"],
    ],
};
I18N.zh["page-profile/achievements"] = I18N.zh["page-profile-public"]; // ?tab=achievements
I18N.zh["page-profile/followers"] = I18N.zh["page-profile-public"]; // ?tab=followers
I18N.zh["page-profile/following"] = I18N.zh["page-profile-public"]; // ?tab=following

I18N.zh["page-profile"] = { // 個人首頁
    "static": { // 靜態翻譯
        ...I18N.zh["page-profile-public"]["static"],

        // 概述標籤卡 即主頁 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            "Customize your pins": "自定義置頂",
            // 設置置頂項目對話框
            "Edit pinned items": "設置置頂項目",
            "Select up to six public repositories or gists you'd like to show to anyone.": "最多選擇 6 個您想向任何人展示的公共倉庫或程式碼片段。",
            "Select up to six public repositories you'd like to show.": "最多選擇 6 個要顯示的公共倉庫。", // 組織頁
            "Filter repositories and gists": "篩選倉庫和程式碼片段",
            "Repositories": "倉庫",
            "Gists": "程式碼片段",
            "Filter repositories": "篩選倉庫", // 組織頁
            "Show:": "顯示：",
            "Save pins": "保存置頂",

            "Drag to reorder": "拖動重新排序",

            // 頂部提醒
            "You unlocked new Achievements with private contributions!": "您通過私人貢獻解鎖了新成就！",
            "Show them off by including private contributions in your Profile in": "通過在您的個人資料中包含私人貢獻來展示它們。",
            "Your pins have been updated. Drag and drop to reorder them.": "您的置頂已更新。拖放來重新排列它們。",
            // 拖拽排序提醒
            "Order updated.": "置頂已更新。",

            "Pinned": "已置頂",
            "Top repositories": "置頂的倉庫",
            "Popular repositories": "流行的倉庫",

            "Learn how we count contributions": "了解我們如何計算貢獻",
            "Less": "更少",
            "More": "更多",
            "Contribution settings": "貢獻設置",
            // 貢獻設置下拉菜單
            "Private contributions": "私人貢獻",
            "Turning on private contributions will show anonymized private activity on your profile.": "開啟私人貢獻則將在您的個人資料上顯示匿名的私人活動。",
            "Visitors will now see your public and anonymized private contributions.": "訪客現在將看到您的公開和匿名的私人貢獻。",
            "Turning off private contributions will show only public activity on your profile.": "關閉私人貢獻則將僅在您的個人資料中顯示公開活動。",
            "Visitors will now see only your public contributions.": "訪客現在將只能看到您的公開貢獻。",
            "Activity overview": "活動概況",
            "Turning off the activity overview will hide the section on your profile.": "關閉活動概況則將隱藏您的個人資料中的部分內容。",
            "The 'Activity overview' section will no longer appear on your profile.": "“活動概況” 部分將不再出現在您的個人資料中。",
            "Turning on the activity overview will show an overview of your activity across organizations and repositories.": "開啟活動概況將顯示跨組織和倉庫的活動概況。",
            "Others will now see 'Activity overview' when they view your profile.": "其他人在查看您的資料時，現在會看到 “活動概況”。",

            "Contribution activity": "貢獻活動",

            "Search by name": "搜索組織名",
            "Contributed to": "貢獻給了",
            "Activity in": "活動在",
            "No activity overview available.": "沒有可用的活動概況。",

            "open": "打開",
            "closed": "已關閉",
            "merged": "已合併",
            "pull request": "拉取請求",

            "commits": "次提交",
            "comments": "次評論",
            "Commits": "提交",
            "Code review": "程式碼審查",
            "Built by": "構建者",

            "Created their first repository": "創建了他們的第一個倉庫",
            "Created an issue in": "創建一個議題在",
            "Created a pull request in": "創建一個拉取請求在",
                "lines changed": "行被改變",
            "First repository": "第一個倉庫",
            "First pull request": "第一次拉取請求",
            "First issue": "第一次議題",
            "Opened their first issue on GitHub in": "打開了他們第一個議題",
            "Opened their first pull request on GitHub in": "打開了他們第一個拉取請求",
            "Joined GitHub": "剛加入 GitHub",
            "Joined the": "加入",
            "organization": "組織",
            //"Show more activity": "顯示更多",
            "Show more activity": "加載更多動態",
            "Loading...": "載入中...",

            "Seeing something unexpected? Take a look at the": "看到了一些意想不到的東西？請看一下",
            "GitHub profile guide": "GitHub 個人資料指南",

    },
    "regexp": [ // 正則翻譯
        [/(\d+) discussions? answered/, "$1 個討論已回答"], // 高光時刻
        [/Block or report ([^ ]+)/, "拉黑或舉報 $1"],
        [/(\d+) GitHub Archive Program/, "$1 GitHub 存檔計劃"], // 成就浮動款
        [/(\d+) remaining/, "$1 剩餘"], // 置頂項目 剩餘
        [/([^ ]+) doesn('|’)t have any public repositories yet./, "$1 尚無任何公共倉庫。"],
        [/([\d,]+) contributions? in the last year/, "在過去的一年中貢獻 $1 次"],
        [/([\d,]+) contributions? in (\d+) in ([^ ]+)/, "在 $2 年中向 $3, 貢獻 $1 次"],
        [/([\d,]+) contributions? in (\d+)/, "在 $2 年中貢獻 $1 次"],
        [/(\d+) contributions? in private repositor(y|ies)/, "私有倉庫 $1 個貢獻"],
        [/(\d+|No) contributions?/, function (all, number) {
            return number === 'No' ? "無貢獻" : number + " 次貢獻";
        }],// 貢獻日曆
        [/and (\d+) other repositor(y|ies)/, "和 $1 個其他倉庫"], // 活動概覽
        // 貢獻信息
        [/Created ([\d,]+) commits? in (\d+) repositor(y|ies)/, "在 $2 個倉庫中創建了 $1 次提交"],
        [/Created (\d+) repositor(y|ies)/, "創建了 $1 個倉庫"],
        [/Opened (\d+) pull requests? in (\d+) repositor(y|ies)/, "在 $2 個倉庫中打開了 $1 個拉取請求"],
        [/Opened (\d+) other pull requests? in (\d+) repositor(y|ies)/, "在 $2 個其他倉庫中打開了 $1 個拉取請求"],
        [/Opened (\d+) issues? in (\d+) repositor(y|ies)/, "在 $2 個倉庫中打開了 $1 個議題"],
        [/Opened (\d+) other issues? in (\d+) repositor(y|ies)/, "在 $2 個其他倉庫中打開了 $1 個其他議題"],
        [/Reviewed (\d+) pull requests? in (\d+) repositor(y|ies)/, "在 $2 個倉庫中審查了 $1 個拉取請求"],
        [/Answered (\d+) discussions? in (\d+) repositor(y|ies)/, "在 $2 個倉庫中答覆了 $1 個討論"],
        [/Started (\d+) discussions? in (\d+) repositor(y|ies)/, "在 $2 個倉庫中發起了 $1 個討論"],
        [/(\d+) commits?/, "$1 次提交"],
        [/(\d+) pull requests?/, "$1 次拉取請求"],
        [/that received (\d+) comments?/  , "收到 $1 條評論"],
        [/(\d+) of (\d+) tasks?/, "$1 / $2 個任務"],
        [/(\d+) comments?/, "$1 條評論"],
        [/(\d+) tasks? done/, "$1 個任務完成"],
        [/([^ ]+) doesn't have any projects yet./, "$1 目前還沒有任何項目。"],
        [/([^ ]+) has no activity yet for this period./, "$1 目前還沒有活動。"],
        [/([^ ]+) had no activity during this period./, "$1 在此期間沒有活動。"],
        [/Contribution activity in ([^ ]+)/, "在 $1 中的貢獻活動"],
        [/([^ ]+) had no activity in ([^ ]+) during this period./, "在此期間，$1 在 $2 中沒有活動。"],
        [/([^ ]+) has no activity in ([^ ]+) yet for this period./, "在此期間，$1 在 $2 中沒有活動。"],
    ],
};
I18N.zh["page-profile/overview"] = I18N.zh["page-profile"];

I18N.zh["page-profile/repositories"] = { // 個人首頁 - 倉庫標籤卡
    "static": { // 靜態翻譯
        ...I18N.zh["page-profile-public"]["static"],

        // 倉庫標籤卡 ?tab=repositories >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

            // 頂部提醒
                // [/Your repository \"([^ ]+)\" was successfully deleted./, "您的倉庫 “$1” 已成功刪除。"],

            // "Search repositories…": "搜索這些查庫…",
            // "Search starred repositories…": "搜索點贊的倉庫…",

            // 搜索, 篩選 & 排序工具欄
            "Find a repository…": "搜索倉庫…",
            // "Type": "類型", // 與全局衝突 使用 Selector 規則翻譯
                // 下拉菜單
                "Select type": "選擇類型",
                "All": "全部",
                "Public": "公共",
                "Private": "私有",
                "Sources": "源碼",
                "Forks": "復刻",
                "Archived": "存檔",
                "Can be sponsored": "可贊助",
                "Mirrors": "鏡像",
                "Templates": "模板",
            "Language": "語言",
                // 下拉菜單
                "Select language": "選擇語言",
                "All languages": "所有語言",
            "Sort": "排序",
                // 下拉菜單
                "Select order": "選擇排序",
                "Last updated": "最近更新",
                // "Name": "倉庫名",
                // "Recently starred": "最近星標",
                // "Recently active": "最近活躍",
                // "Most stars": "最多星標",
                // "Unstar": "取消星標",
            "New": "新建",

            // 篩選結果
            "result for": "個結果在",
            "results for": "個結果在",
                "public": "公共",
                "private": "私有",
                "source": "源碼",
                "forked": "復刻",
                "archived": "存檔",
                "sponsorable": "可贊助",
                "mirror": "鏡像",
                "template": "模板",
            "repositories matching": "倉庫中匹配了",
            "result for repositories matching": "個結果在倉庫中匹配了",
            "results for repositories matching": "個結果在倉庫中匹配了",
            "repositories sorted by": "倉庫，排序按",
            "written in": "，使用語言",
            "results for repositories written in": "個結果在倉庫中使用語言",
            "star matching": "個星標匹配", //?tab=stars
            "stars matching": "個星標匹配", //?tab=stars
            "star written in": "個星標使用語言", //?tab=stars
            "stars written in": "個星標使用語言", //?tab=stars
            "sorted by": "，排序按",
                "last updated": "最近更新",
                "name": "倉庫名",
                "stars": "星標",

            "Clear filter": "清除篩選",

            // [/([^ ]+) doesn’t have any repositories that match./, "$1 沒有任何匹配的倉庫"],
            "This organization doesn’t have any repositories that match.": "該組織沒有任何匹配的倉庫。", // 組織倉庫

            "This organization has no public repositories.": "該組織沒有公共倉庫。", //組織倉庫

            // 項目 狀態詞
            "Updated": "更新於",
            "Forked from": "復刻自",

            // 曲線圖提示
            "Past year of activity": "過去一年的活動",

        // 新版 組織 - 倉庫概述 https://github.com/orgs/<orgs-name>/repositories
            "Filter": "篩選",
                "Advanced filters": "高級篩選器",
                    "Build complex filter queries": "構建複雜的篩選查詢",
                        "To start building your query add your first filter using the button below.": "要開始創建查詢，請使用下面的按鈕添加第一個篩選器。",
                    "Add a filter": "新增篩選器",
                    "Apply": "應用",
                    "Qualifier": "限定詞",
                        "Created": "已創建",
                        "Total forks": "復刻總數",
                        "Total good-first issues": "好的首發議題總數",
                        "Has": "包含文件",
                        "Total help-wanted issues": "求助議題總數",
                        "License": "許可證",
                        "Mirror": "鏡像",
                        "Size (Kb)": "大小 (Kb)",
                        "Sponsorable": "可接受贊助",
                        "Text": "文本",
                        "Total topics": "主題總數",
                        "Total stars": "星標總數",
                        "Template": "模板",
                        "Topic": "話題",
                        "Visibility": "可見性",
                    "Operator": "操作符",
                        "is": "是",
                        "is not": "不是",
                        "before": "之前",
                        "after": "之後",
                        "between": "之間",
                            "From": "起",
                            "To": "至",
                        "is one of": "包括",
                        "is not one of": "不包含",
                        "greater than": "大於",
                        "less than": "小於",
                        "greater than or equal to": "大於或等於",
                        "less than or equal to": "小於或等於",
                        "equal to": "等於",
                    "Value": "值",
                        "Enter a number": "輸入數字",
                        "Enter search text": "輸入搜索文本",
                        "Make a selection": "進行選擇",
                            "Select items": "選擇項目",
                            "Select an item": "選擇項目",
                                "Filter values": "篩選值",
                                    // 復刻
                                        "Only forks": "僅復刻",
                                        "Exclude forks": "排除復刻",
                                    // 排序
                                        "Recently pushed": "最近推送",
                                        "Topics": "話題",
                                        "Size": "尺寸",
                                        "Recently pushed (descending)": "最近推送（降序）",
                                        "Name (descending)": "名稱（降序）",
                                        "Language (descending)": "語言（降序）",
                                        "License (descending)": "許可證（降序）",
                                        "Topics (ascending)": "主題（升序）",
                                        "Size (ascending)": "大小（降序）",
                                        "Total stars (ascending)": "星標總數（降序）",
                                        "Total forks (ascending)": "復刻總數（降序）",
                                        "Help-wanted issues (ascending)": "求助議題總數（升序）",
                                        "Help-wanted issues (descending)": "求助議題總數（降序）",
                                    // 可見性
                                        "Internal": "內部",
                "Discard changes?": "放棄更改？",
                    "You have unsaved changes. Are you sure you want to discard them?": "您有未保存的更改。您確定要放棄它們嗎？",
                    "Keep editing": "繼續編輯",
                    "Close and discard": "關閉並放棄",
            "Search repositories": "搜索倉庫",
                "No repositories matched your search": "沒有與您的查詢相匹配的倉庫",
                    "Try a different search query": "嘗試不同的搜索查詢",

            "Last pushed": "最近提送",
                "Ascending": "升序",
                "Descending": "降序",
            "repository": "倉庫",
            "No language": "無語言",

    },
    "regexp": [ // 正則翻譯
        [/([^ ]+) doesn’t have any repositories that match./, "$1 沒有任何匹配的倉庫"], // 倉庫標籤卡
        [/Your repository \"([^ ]+)\" was successfully deleted./, "您的倉庫 “$1” 已成功刪除。"],
        [/(\d+) issues? needs? help/, "$1 個議題需要幫助"],
    ],
    "selector": [ // 元素篩選器規則
        ["#type-options > summary > span:nth-child(1)", "類型"], // 個人主頁 --> 倉庫標籤頁-->類型篩選器 Type
    ],
};

I18N.zh["page-profile/projects"] = { // 個人首頁- 項目標籤卡
    "static": { // 靜態翻譯
        ...I18N.zh["page-profile-public"]["static"],

        // 項目標籤卡 ?tab=projects >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            "There aren't any projects yet": "尚無任何項目",
            "Provide quick access to relevant projects.": "提供快速訪問相關項目的途徑。",
            "Add projects to view them here.": "將項目添加到此處查看。",

            "Welcome to the all-new projects": "歡迎訪問全新的項目",
            "Built like a spreadsheet, project tables give you a live canvas to filter, sort, and group issues and pull requests. Tailor them to your needs with custom fields and saved views.": "構建像電子表格一樣的項目表，給您一個實時的畫布來對議題和拉取請求進行篩選、排序和分組。通過自定義字段和保存的視圖，使它們符合您的需要。",

            "Learn more about projects": "了解更多關於項目", // ?tab=projects

            "Create your first GitHub project": "創建您的第一個 GitHub 項目",
            "Projects are a customizable, flexible tool for planning and tracking your work.": "項目是一個可定制的、靈活的工具，用於規劃和跟蹤您的工作。",

            "Sort": "排序",
                // 排序下拉菜單
                "Newest": "最新",
                "Oldest": "最早",
                "Recently updated": "近期更新內容",
                "Least recently updated": "最近最少更新",
            // 清除篩選
            "Clear current search query and sorts": "清除當前的搜索查詢和分類",

            "Plan and track work across repositories with custom fields and multiple views": "通過自定義字段和多個視圖來計劃和跟蹤整個倉庫的工作",
            "Kanban-style project board": "看板式項目面板",

            "You don't have any projects yet.": "您還沒有任何項目。",
            "There are no projects matching your search.": "沒有符合您搜索條件的項目。",
            "Learn More": "了解更多",

            "No description": "無描述",
            "Close": "關閉",
            "Closed": "已關閉",
            "Reopen": "重新打開",

            // 頂部提醒
            "Project closed.": "項目已關閉。",
            "Project reopened.": "項目已重新打開。",

        ...projects,
    },
    "regexp": [ // 正則翻譯
        [/([\d,]+) Open/, "$1 打開"], // 項目標籤卡
        [/([\d,]+) Closed/, "$1 已關閉"],
    ],
};

I18N.zh["page-profile/sponsoring"] = { // 個人首頁- 贊助標籤卡
    "static": { // 靜態翻譯
        ...I18N.zh["page-profile-public"]["static"],
            "organization or maintainer": "個組織或維護者",
            "Bulk Sponsor": "批量贊助",
            "Sponsor multiple maintainers in one easy transaction.": "一次交易即可贊助多個維護者。",
            "Get started": "前去贊助",

    },
    "regexp": [ // 正則翻譯
        [/is sponsoring/, "正在贊助"],
        [/Sponsoring since/, "贊助自"],
    ],
};

I18N.zh["page-profile/packages"] = { // 個人首頁 - 軟件包標籤卡
    "static": { // 靜態翻譯
        ...I18N.zh["page-profile-public"]["static"],

        // 軟件包標籤卡 ?tab=packages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            "Get started with GitHub Packages": "開始使用 GitHub 軟件包",
            "Safely publish packages, store your packages alongside your code, and share your packages privately with your team.": "安全地發布包，將您的包與您的程式碼一起存儲，並與您的團隊私下共享您的包。",
            "Choose a registry": "選擇註冊表",
            "A software platform used for building applications based on containers — small and lightweight execution environments.": "用於構建基於容器的應用的軟件平台——小型輕量級執行環境。",
            "A default package manager used for the Java programming language and the Java runtime environment.": "用於 Java 編程語言和 Java 運行環境的一個默認包管理器。",
            "A free and open source package manager used for the Microsoft development platforms including .NET.": "一個自由和開源的開源包管理器，用於包括 .NET 在內的 Microsoft 開發平台。",
            "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.": "分發用於 Ruby 編程語言的 Ruby 程序和庫的標準格式。",
            "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.": "npm 是一個 JavaScript 的包管理器，包含在 Node.js 中。它使開發人員能夠輕鬆地分享和重用程式碼。",
            "Containers": "容器",
            "A single place for your team to manage Docker images and decide who can see and access your images.": "為您的團隊提供一個管理 Docker 鏡像的單一場所，並決定誰可以看到和訪問您的鏡像。",

            "Type:": "類型:",
                // 下拉菜單
                "Select type": "選擇類型",
                "All": "全部",
            "Search packages…": "搜索軟件包…",
            "Visibility:": "可見性:",
                "Select visibility": "選擇可見性",
                "Internal": "內部",
            "Sort by:": "排序方式:",
                "Select sort view": "選擇排序視圖",
                "Most downloads": "最多下載",
                "Least downloads": "最少下載",

            "Clear current search query, filters, and sorts": "清除當前的搜索查詢、篩選器和排序方式",
            // 篩選結果
            "No results matched your search.": "沒有與您的搜索匹配的結果。",
            "Try": "嘗試",
            "browsing all packages": "瀏覽所有軟件包",
            "to find what you're looking for.": "，以找尋您想要的內容。",

            "Published": "發布於",

    },
    "regexp": [ // 正則翻譯
        [/(\d+) packages?/, "$1 軟件包"],
    ],
};

I18N.zh["page-profile/sponsors"] = { // 個人首頁 - 贊助標籤卡
    "static": { // 靜態翻譯
        ...I18N.zh["page-profile-public"]["static"],

        // 贊助標籤卡 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            // [/is sponsoring/, "正在贊助"],
            "organization or developer:": "個組織或開發者：",
    },
    "regexp": [ // 正則翻譯
        [/is sponsoring/, "正在贊助"],
    ],
};

I18N.zh["page-profile/stars"] = { // 個人首頁 - 星標標籤卡
    "static": { // 靜態翻譯
        ...I18N.zh["page-profile-public"]["static"],

        // 星標標籤卡 ?tab=stars >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            "Show all lists...": "顯示所有列表...",

            "Sort by": "排序方式",
            // 排序補充
                "Name ascending (A-Z)": "名稱升序 (A-Z)",
                "Name descending (Z-A)": "名稱降序 (Z-A)",
                "Newest": "最新",
                "Oldest": "最早",
                "Last updated": "最後更新",

            "Create your first list": "創建您的第一個清單",
            "Lists make it easier to organize and curate repositories that you have starred.": "列表可使您更容易組織和策劃您的星標倉庫。",
            "Create your first list.": "創建您的第一個清單。",

            // 搜索, 篩選 & 排序工具欄
            "Search stars": "搜索星標",
            "Type: All"    : "類型：全部",
            "Type: Public" : "類型：公共",
            "Type: Private": "類型：私有",
            "Type: Sources": "類型：源碼",
            "Type: Forks"  : "類型：復刻",
            "Type: Mirrors": "類型：鏡像",
            "Type: Templates": "類型：模板",
                "All"    : "全部",
                "Public" : "公共",
                "Private": "私有",
                "Sources": "源碼",
                "Forks"  : "復刻",
                "Can be sponsored": "可贊助",
                "Mirrors": "鏡像",
                "Templates": "模板",
            "Language": "語言",
                // 下拉菜單
                "Select language": "選擇語言",
                "All languages": "所有語言",
            "Sort": "排序",
                // 下拉菜單
            "Sort by: Recently starred": "排序：最近星標",
            "Sort by: Recently active": "排序：最近活躍",
            "Sort by: Most stars": "排序：最多星標",
                "Recently starred": "最近星標",
                "Recently active": "最近活躍",
                "Most stars": "最多星標",
                "Languages": "語言",

            // 篩選結果
            "result for": "個結果在",
            "results for": "個結果在",
                "public": "公共",
                "private": "私有",
                "source": "源碼",
                "forked": "復刻",
                "sponsorable": "可贊助",
                "archived": "存檔",
                "mirror": "鏡像",
                "template": "模板",
            "star matching": "個星標匹配", //?tab=stars
            "stars matching": "個星標匹配", //?tab=stars
            "star written in": "個星標使用語言", //?tab=stars
            "stars written in": "個星標使用語言", //?tab=stars
            "starred repositories": "星標倉庫",
            "starred repositories written in": "星標倉庫使用語言",

            "Clear filter": "清除篩選",

            // 項目 狀態詞
            "Updated": "更新於",
            "Forked from": "復刻自",

            "That’s it. You’ve reached the end of your stars.": "而已。您已經到了星海的盡頭。",

            "Topics": "主題",

            "Add to list": "添加到清單",
            "Lists": "清單",
            "You don't have any lists yet.": "您尚無任何清單。",

            // [/(\d+) repositor(y|ies)/, "$1 個倉庫"],

            // 他人庫 星標頁 補充
            "Search starred repositories": "搜索星標倉庫",
            "Starred repositories": "星標倉庫",
            "Starred topics": "星標主題",
            "See all starred topics": "查看所有星標主題",

            // [/That’s it. You’ve reached the end of ([^ ]+)’s stars./, "而已。您已經到了$1 星海的盡頭。"], // 他人星標頁 搜索結果

        // https://github.com/stars/<repo-name>/lists/<清單>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            "Edit list": "編輯清單",
                "Delete list": "刪除清單",
                    "Are you sure you want to delete this list?": "您確定要刪除此清單嗎？",
                        // 頂部提醒
                        // [/Deleted \"(.*)\"./, "已刪除 “$1”。], // 刪除星標清單
                "Save list": "保存清單",
                "Saving...": "保存中...",
            "Add repositories to this list": "添加倉庫到此清單",
            "Star repositories on GitHub to keep track of your favorite projects and inspirational code.": "GitHub上的星標倉庫可以跟蹤您最喜歡的項目和鼓舞人心的程式碼。",
            "Explore repositories.": "探索倉庫。",
    },
    "regexp": [ // 正則翻譯
        [/Deleted \"(.*)\"./, "已刪除 “$1”。"], // 刪除星標清單 頂部提醒
        [/doesn’t have any starred repositories yet./, "尚無任何星標倉庫。"],
        [/That’s it. You’ve reached the end of ([^ ]+)’s stars./, "而已。您已經到了$1 星海的盡頭。"], // 他人星標頁 搜索結果
        [/(\d+) repositor(y|ies)/, "$1 個倉庫"],
        [/Language: /, "語言："],
    ],
};

I18N.zh["orgs-public"] = { // 組織公共部分
    "static": { // 靜態翻譯

        "People": "成員",
        "Teams": "團隊",

    },
    "regexp": [ // 正則翻譯
        [/Invite someone to/, "邀請加入到組織"],
        [/New team in/, "新建團隊在組織"],
        [/New repository in/, "新建倉庫在組織"],
        [/This organization was marked as archived by an administrator (on .+). It is no longer maintained./, "該組織已由管理員於 $1 存檔。不再維護。"],
    ],
};

I18N.zh["settings-menu"] = { // 設置 - 公共部分
    "static": { // 靜態翻譯
        "Settings": "設置", // 新版全局導航

        "Your personal account": "我的個人帳戶",
        "Switch settings context": "切換設置上下文", // 存在組織時
        "Go to your personal profile": "去我的個人資料",
        // 左側菜單
        "Public profile": "基本資料",
        "Account": "帳戶",
        "Appearance": "外觀",
        "Accessibility": "無障礙",
        "Notifications": "通知",

        "Access": "訪問",
        "Billing and plans": "賬單和計劃",
            "Plans and usage": "計劃和使用情況",
            "Spending limits": "支出限額",
            "Payment information": "支付信息",
        "Emails": "電子郵箱",
        "Password and authentication": "密碼和身份驗證",
        "Sessions": "會話",
        "SSH and GPG keys": "SSH 與 GPG 公鑰",
        "Organizations": "組織",
        "Enterprises": "企業版",
        "Moderation": "節制",
            "Blocked users": "黑名單",
            "Interaction limits": "互動限制",
            "Code review limits": "程式碼審查限制",

        "Code, planning, and automation": "程式碼、規劃和自動化",
        // "Repository": "倉庫"
        "Packages": "軟件包",
        "Copilot": "GitHub Copilot",
        "Pages": "GitHub Pages",
        "Saved replies": "快捷回覆",

        // "Security": "安全",
        "Code security and analysis": "程式碼安全性與分析",

        "Integrations": "集成",
        "Applications": "應用",
        "Scheduled reminders": "定時提醒",

        "Archives": "存檔",
        "Security log": "安全日誌",
        "Sponsorship log": "贊助日誌",

        "Developer settings": "開發者設置",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs-settings-menu"] = { // 組織設置 公共部分
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-public"]["static"],

        // 公用部分
            "Organization": "組織",
            "Switch settings context": "切換設置上下文", // 存在組織時
            "Go to your organization profile": "去我的組織主頁",
            // 左側菜單
            "General": "常規",
            "Access": "訪問",
            "Billing and plans": "賬單和計劃",
            "Repository roles": "倉庫角色",
            "Member privileges": "成員權限",
            "Team discussions": "團隊討論",
            "Import/Export": "導入/導出",
            "Moderation": "節制",
                "Blocked users": "黑名單",
                "Interaction limits": "互動限制",
                "Code review limits": "程式碼審查限制",
                "Moderators": "版主",

            "Code, planning, and automation": "程式碼、規劃和自動化",
            "Repository": "倉庫",
                "Topics": "主題",
                "Rulesets": "規則集",
                "Rule insights": "規則洞察",
                "Custom properties": "自定義屬性",
            "Planning": "計劃",
            "Codespaces": "程式碼空間",
            "Copilot": "GitHub Copilot",
                "Access": "訪問",
                "Policies and features": "政策和功能",
            "Actions": "操作",
                "Runners": "運行器",
                "Runner groups": "運行器組",
                "Caches": "緩存",
            "Webhooks": "Web 鉤子",
            "Packages": "軟件包",
            "Projects": "項目",

            "Security": "安全",
            "Authentication security": "身份驗證安全",
            "Code security and analysis": "程式碼安全性與分析",
            "Verified and approved domains": "經驗證和批准的域名",
            "Secrets and variables": "機密和變量",

            "Third-party Access": "第三方訪問",
            "OAuth application policy": "OAuth 應用策略",
            "GitHub Apps": "GitHub 應用",
            "Personal access tokens": "個人訪問令牌",
                "Active tokens": "活躍的令牌",
                "Pending requests": "待處理的請求",

            "Integrations": "集成",
            "Scheduled reminders": "定時提醒",

            "Archive": "存檔",
            "Logs": "日誌",
                "Sponsorship log": "贊助日誌",
                "Audit log": "審計日誌",
            "Deleted repositories": "刪除的倉庫",

            "Developer settings": "開發者設置",
                "OAuth Apps": "OAuth 應用",
                "Publisher Verification": "發布者驗證",
            "Account settings": "帳戶設置",

            "Developer settings": "開發者設置"
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/profile"] = { // 設置 - 個人資料
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Profile 個人資料 https://github.com/settings/profile
            "Public profile": "基本資料",
            "Profile picture": "我的頭像",
                "Edit": "編輯",
                "Upload a photo…": "上傳圖片…",
                "Remove photo": "刪除圖片",
                "Are you sure you want to reset your current avatar?": "您確定要重置當前的頭像嗎？",
                "Your profile picture has been reset. It may take a few minutes to update across the site.": "您的個人頭像已重置，整個網站的更新可能需要幾分鐘的時間。",
                "Your profile picture has been updated. It may take a few minutes to update across the site.": "您的個人頭像已更新，整個網站的更新可能需要幾分鐘的時間。",
                // 裁剪個人頭像對話框
                "Crop your new profile picture": "裁剪個人頭像",
                "Set new profile picture": "設置新的個人頭像",
            //"You can also drag and drop a picture from your computer.": "您也可以直接拖拽照片鏡像上傳.",
            "Name": "昵稱",
            "Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.": "您的昵稱可能會出現在 GitHub 上，您的貢獻或被提及的地方。您可以隨時刪除它。",
            "Public email": "公開電子郵箱",
            "Remove": "移除",
            "Select a verified email to display": "選擇顯示一個已驗證的電子郵箱",
            "You have set your email address to private. To toggle email privacy, go to": "您已將電子郵箱地址設置為私密。需要切換電子郵箱地址的私密性，請轉到",
            "email settings": "郵箱設置",
            "and uncheck \"Keep my email address private.\"": "並取消 “保持我的電子郵箱地址的私密性”。",
            "You can manage verified email addresses in your": "您可以管理已驗證的電子郵箱地址在您的",
            //"Don’t show my email address": "不顯示我的郵箱",
            //"You can add or remove verified email addresses in your": "您可以添加或刪除郵件地址在您的",
            //"personal email settings": "郵箱設置",
            "Bio": "個人簡介",
            "Tell us a little bit about yourself": "自我介紹一下您自己的相關信息",
            "You can": "您可以",
            "@mention": "@用戶名或組織名",
            "other users and organizations to link to them.": "鏈接到其他用戶和組織。",
            "URL": "網站",
            "Social accounts": "社交賬戶",
            "Link to social profile": "鏈接到社交賬戶",
            "Company": "公司",
            "your company’s GitHub organization to link it.": "鏈接到您所在公司的 GitHub 組織。",
             //"your company's GitHub organization to link it.": "貴公司和GitHub的組織聯繫起來。",
            "Pronouns": "代詞",
                "Don't specify": "不說明",
                "they/them": "他們",
                "she/her": "她",
                "he/him": "他",
                "Custom": "自定義",
            "Location": "位置",
            "Display current local time": "顯示當前當地時間",
                "Other users will see the time difference from their local time.": "其他用戶將看到與本地時間的時差。",
                "Time zone": "時區",

            "All of the fields on this page are optional and can be deleted at any time, and by filling them out, you're giving us consent to share this data wherever your user profile appears. Please see our": "此頁面上的所有字段都是可選的，可以隨時刪除，填寫這些字段，即表示您同意我們在您的個人資料出現的任何地方共享此數據。請參閱我們的",
            "privacy statement": "隱私聲明",
            "to learn more about how we use this information.": "以了解更多關於我們如何使用這些信息。",
            "Update profile": "更新資料",
            // 頂部提醒
                "Profile updated successfully": "資料更新成功。",
                "Profile updated successfully —": "資料更新成功 —",
                "view your profile.": "查看您的個人資料。",

            "Contributions & activity": "貢獻與活動",
                "Make profile private and hide activity": "將個人資料設置為私密，並隱藏活動",
                    "Enabling this will hide your contributions and activity from your GitHub profile and from social features like followers, stars, feeds, leaderboards and releases.": "啟用此功能後，您的貢獻和活動將會從您的 GitHub 個人資料中隱藏起來，也不會被關注者、觀星者、動態提要、排行榜和發布等社交功能所發現。",
                "Include private contributions on my profile": "在我的個人資料顯示私人貢獻",
                    "Your contribution graph, achievements, and activity overview will show your private contributions without revealing any repository or organization information.": "您的貢獻圖、成就和活動概覽將顯示您的私人貢獻，而不會透露任何倉庫或組織信息。",
                    "Read more": "了解更多",
            "Update preferences": "更新設置",

            "Profile settings": "個人資料設置",
                "Show Achievements on my profile": "在我的個人資料上顯示成就",
                    "Your achievements will be shown on your profile.": "您的成就將顯示在您的個人資料中。",

            "GitHub Developer Program": "GitHub 開發者計劃",
                "has guides, API and webhook references, information about creating GitHub Apps and other resources for building applications that integrate with GitHub. Make sure your contact information is up-to-date below. Thanks for being a member!": "包含指南、API 和 Webhook 參考、有關創建 GitHub 應用的信息以及用於構建與 GitHub 集成的應用的其他資源。確保您的聯繫信息是最新的。感謝您的加入！",

                "Support email address": "技術支持電子郵件地址",
                    "An email address where GitHub users can contact you for support.": "供 GitHub 用戶聯繫您尋求支持的電子郵件地址。",
                "Product or company website": "產品或公司網站",
                    "The URL for the product, company, or service that integrates with GitHub.": "與 GitHub 集成的產品、公司或服務的網址。",
                "Update contact information": "更新聯繫信息",
                "Leave the program": "退出計劃",

                "Building an application, service, or tool that integrates with GitHub?": "構建與 GitHub 集成的應用、服務或工具？",
                "Join the GitHub Developer Program": "加入 GitHub 開發者計劃",
                ", or read more about it at our": "，或了解更多信息在我們的",
                "Developer site": "開發者站點",

            "Jobs profile": "就業狀態",
            "Available for hire": "求 HR 帶走",
            "Save jobs profile": "保存狀態",
                // 頂部提醒
                "Profile updated successfully —": "個人資料更新成功 —",
                "view your profile.": "查看您的個人資料。",

            "Trending settings": "趨勢設置",
            "Preferred spoken language": "首選語言",
            "No Preference": "未設置",
            "We'll use this language preference to filter the trending repository lists on": "我們將使用此語言偏好來過濾趨勢倉庫列表在",
            "our": "我們的",
            "Trending Repositories": "趨勢倉庫",
            "page.": "頁面。",
            "Save Trending settings": "保存趨勢設置",

            "ORCID provides a persistent identifier - an ORCID iD - that distinguishes you from other researchers. Learn more at": "ORCID 提供持久標識符 - ORCID iD - 將您與其他開發人員區分，了解更多信息請訪問",
            "Connect your ORCID iD": "關聯您的 ORCID iD",
            "Successfully connected your GitHub account with ORCID.": "已成功將您的 GitHub 帳戶與 ORCID 關聯。",
            "You have a connected ORCID iD": "您的 ORCID iD",
            "for the account": "已關聯賬戶",
            "Display your ORCID iD on your GitHub profile": "在您的 GitHub 個人資料上顯示 ORCID iD",
            "Disconnecting your ORCID iD may affect areas of your profile where your ORCID iD is displayed.": "解除關聯 ORCID iD 可能會影響您個人資料中顯示 ORCID iD 的區域。",
            "Disconnect your ORCID iD": "解除關聯您的 ORCID iD",
            "Successfully disconnected ORCID from your GitHub Account.": "已成功解除 ORCID 與您的 GitHub 帳戶的連接。",
    },
    "regexp": [ // 正則翻譯
    ],
};
I18N.zh["settings"] = I18N.zh["settings/profile"];

I18N.zh["settings/admin"] = { // 設置 - 帳戶
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Account settings 帳戶設置 https://github.com/settings/admin
            "Change username": "更改用戶名",
            "Changing your username can have": "更改您的用戶名可能會有",
            "unintended side effects": "意想不到的副作用",
                "Really change your username?": "確定要更改您的用戶名？",
                "Unexpected bad things will happen if you don’t read this!": "請仔細閱讀以下提示信息！！！",
                "We": "我們",
                "will not": "不會",
                "will": "會",
                "set up redirects for your old profile page.": "為您的舊資料頁設置重定向",
                "set up redirects for Pages sites.": "為 Pages 站點設置重定向。",
                "create redirects for your repositories (web and git access).": "為您的倉庫設置重定向（ web 和 git 訪問）。",
                "Renaming may take a few minutes to complete.": "重命名可能需要幾分鐘的時間來完成。",
                "I understand, let’s change my username": "我明白了，依然更改我的用戶名",

                "Enter a new username": "輸入新用戶名",
                "Choose a new username": "選擇新用戶名",
                "Change my username": "更改我的用戶名",
                "Trademark Policy": "商標政策",
                "are available.": "都可以使用。",
                "Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.": "用戶名只能包含字母數字字符或單個連字符，不能以連字符開始或結束。",
            "Looking to manage account security settings? You can find them in the": "想管理帳戶安全設置？您可以找到它們在",
            "Account security": "帳戶安全",
            "page.": "頁。",

            "Link Patreon account": "關聯 Patreon 帳戶",
                "Connect a Patreon account for": "關聯",
                "to sponsor maintainers with. Get recognition on GitHub for sponsorships made on Patreon when the sponsored person has linked Patreon and GitHub, too, and has a public GitHub Sponsors profile.": "的 Patreon 帳戶，以便贊助維護者。當被贊助者也關聯 Patreon 和 GitHub 帳戶時，在 Patreon 上獲得的贊助也會顯示在 GitHub 上，並顯示 GitHub 贊助者的公開個人資料。",
                "Connect with Patreon": "關聯 Patreon 帳戶",
                "Successfully connected your GitHub account with Patreon.": "已成功將您的 GitHub 帳戶與 Patreon 關聯。",

            "Unlink Patreon account": "取消關聯 Patreon 帳戶",
                "Disconnect the Patreon account": "取消 Patreon 賬戶",
                "for": "和",
                "to sponsor maintainers with. Any sponsorships made on Patreon will no longer receive recognition on GitHub.": "的關聯，在 Patreon 上進行的任何贊助將不會在 GitHub 顯示。",
                "Successfully disconnected your GitHub account from Patreon.": "已成功解除您的 GitHub 帳戶與 Patreon 的關聯。",

            "Export account data": "導出帳戶數據",
            "Export all repositories and profile metadata for": "導出所有倉庫和配置元數據，自",
            ". Exports will be available for 7 days.": "。導出結果將有 7 天有效期。",
            "Start export": "開始導出",
            "Recent exports": "近期導出",
            "New export": "新建導出",
            "We're preparing your export! We'll send you an email when it's finished.": "我們正在為您準備導出！我們完成後會發一封電子郵件。",
            "New exports cannot be requested while an export is currently in progress": "當前正在導出中，無法請求新的導出",
            "Resend email with link": "重新發送帶有鏈接的郵件",
            "Download deleted": "導出內容已刪除",
            "Job queued to delete file.": "正在排隊刪除文件的作業。",

            "Successor settings": "設置繼任者",
            "designated below": "下面指定的",
            ", in the event of my death. I understand that this appointment of a successor does not override legally binding next-of-kin rules or estate laws of any relevant jurisdiction, and does not create a binding will.": "，在我死亡的情況下。我明白，這種指定繼任者的做法並不凌駕於具有法律約束力的近親規則或任何相關司法管轄區的遺產法，也不產生具有約束力的遺囑。",
            "Learn more about account successors.": "了解更多關於帳戶繼任者的信息。",
            "Add Successor": "添加繼任者",
            "Search by username, full name, or email address": "搜索用戶名、全名、或電子郵箱",
            "You have not designated a successor.": "您還沒有指定繼任者。",

            "Delete account": "刪除帳戶",
            "Once you delete your account, there is no going back. Please be certain.": "您一旦刪除了您的帳戶，將再也無法恢復。請確認！",
                "Your account is currently an owner in these organizations:": "您的帳戶目前是以下組織的所有者：", // 存在組織
                "You must": "您必須先",
                "remove yourself": "刪除您自己",
                "transfer ownership": "轉讓所有權",
                "delete": "刪除",
                "these organizations before you can delete your user.": "這些組織，您才可以刪除您的用戶。",
            "Delete your account": "刪除帳戶",
            "Are you sure you don’t want to just": "您確定不希望僅僅是",
            "downgrade your account": "降級您的帳戶",
            "to a": "為",
            "FREE": "免費",
            "account? We won’t charge your payment information anymore.": "帳戶嗎？我們不會再收取您的支付信息。",
                "Are you sure you want to do this?": "您確定要這麼做嗎？",
                "This is extremely important.": "這是極其重要的。",
                "We will": "我們將",
                ", along with all of your forks, wikis, issues, pull requests, and GitHub Pages sites.": "以及您所有的復刻、Wiki、議題、拉取請求和 GitHub Pages 站點。",
                "You will no longer be billed, and after 90 days your username will be available to anyone on GitHub.": "您將不再被收取費用，並且 90 天后您的用戶名將被 GitHub 上的任何人使用。",
                "For more help, read our article \"": "如需更多幫助，請閱讀我們的文章 “",
                "Deleting your user account": "刪除您的帳戶",
                "\".": "”。",
                "Your username or email:": "您的用戶名或電子郵箱：",
                "To verify, type": "為了驗證，請輸入",
                "below:": "在下面：",
                "Confirm your password:": "確認您的密碼：",
                "Cancel plan and delete this account": "取消計劃並刪除此帳戶",

    },
    "regexp": [ // 正則翻譯
        [/is available\./, "可用。"],
        [/Username ([^ ]+) is not available\. Please choose another\. To submit a trademark claim, please see our/, "用戶名 $1 不可用。請重新選擇。要提交商標索賠，請看我們的"],
        [/By clicking \"Add Successor\" below, I acknowledge that I am the owner of the([^@]+@[^\n]+) account, and am authorizing GitHub to transfer content within that account to my GitHub Successor,/, "通過點擊下面的 “添加繼任者”，我承認我是 $1 帳戶的所有者，並授權 GitHub 將該帳戶內的內容轉讓給我的 GitHub 繼任者。"],
        [/immediately delete all of your repositor(y|ies) \((\d+)\)/, "立即刪除您所有的倉庫（$1個）"],
    ],
};

I18N.zh["settings/appearance"] = { // 設置 - 外觀
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Appearance 外觀 https://github.com/settings/appearance
            "Theme preferences": "主題首選項",
            "Choose how GitHub looks to you. Select a single theme, or sync with your system and automatically switch between day and night themes.": "選擇 GitHub 在您眼中的樣子。選擇單一主題，或與您的系統同步並自動在白天和夜晚的主題之間切換。",
            "Theme mode": "主題模式",
                "Single theme": "單一主題",
                "Sync with system": "與系統同步",
            "GitHub will use your selected theme": "GitHub 將使用您選擇的主題",
            "GitHub theme will match your system active settings": "GitHub 主題將匹配您的系統設置",
            "Light default": "亮 - 默認",
            "Light high contrast": "亮 - 高對比",
            "Light Protanopia & Deuteranopia": "亮 - 紅綠色盲",
            "Light Tritanopia": "亮 - 藍色盲",
            "Dark default": "暗 - 默認",
            "Dark high contrast": "暗 - 高對比",
            "Dark Protanopia & Deuteranopia": "暗 - 紅綠色盲",
            "Dark Tritanopia": "暗 - 藍色盲",
            "Dark dimmed": "昏暗",
            "Day theme": "日間主題",
            "Night theme": "夜間主題",
            "Active": "激活",
            "This theme will be active when your system is set to “light mode”": "當您的系統設置為 “燈光模式” 時，該主題將被激活。",
            "This theme will be active when your system is set to “dark mode”": "當您的系統設置為 “暗夜模式” 時，該主題將被激活。",

            "Emoji skin tone preference": "表情符號膚色首選項",
            "Preferred default emoji skin tone": "默認的表情符號膚色",

            "Tab size preference": "制表符首選項",
            "Choose the number of spaces a tab is equal to when rendering code": "在渲染程式碼時，選擇一個制表符等於多少個空格",
            "8 (Default)": "8 (默認)",

            "Markdown editor font preference": "Markdown 編輯器字體首選項",
            "Font preference for plain text editors that support Markdown styling (e.g. pull request and issue descriptions, comments.)": "支持 Markdown 樣式的純文本編輯器的字體首選項（例如拉取請求和議題描述、評論。）",
            "Use a fixed-width (monospace) font when editing Markdown": "編輯 Markdown 時使用固定寬度（等寬）字體",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/accessibility"] = { // 設置 - 無障礙
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Accessibility 無障礙 https://github.com/settings/accessibility
            "GitHub keyboard shortcuts": "GitHub 鍵盤快捷鍵",
            "General": "通常",
            "Character keys": "字符鍵",
                "GitHub shortcuts": "GitHub 快捷鍵",
                "that don't use modifier keys in their activation. For example, the": "，這些快捷鍵在激活時不使用修改鍵。例如，",
                "shortcut to navigate notifications, or": "快捷鍵來導航到通知，或",
                "to view context relevant shortcuts.": "查看與上下文相關的快捷鍵。",
                "Learn more about character key shortcuts": "了解更多關於字符快捷鍵的信息",

            "Command palette": "命令面板",
                "Modify the shortcuts to trigger the Command Palette for the default search mode and the command mode": "修改快捷鍵以觸發默認搜索模式和命令模式的命令面板",
                "Search mode": "搜索模式",
                    "control + k or control + alt + k (default)": "control + k 或 control + alt + k (默認)",
                    "Disabled": "禁用",
                "Command mode": "命令模式",
                    "control + shift + k (default)": "control + shift + k (默認)",
                "Save keyboard shortcut preferences": "保存鍵盤快捷鍵首選項",

            // 頂部提醒
            "Keyboard shortcut preference successfully saved.": "鍵盤快捷鍵首選項已成功保存。",

            "Motion": "動態",
            "Autoplay animated images": "自動播放動態圖片",
            "Select whether animated images should play automatically.": "選擇是否需要自動播放動態圖片。",
            "Sync with system": "與系統同步",
            "Adopts your system preference for reduced motion": "採用您的系統偏好以減少運動",
            "Enabled": "啟用",
            "Automatically plays animated images": "自動播放動態圖片",
            "Prevents animated images from playing automatically": "防止自動播放動態圖片",
            "Save motion preferences": "保存動態首選項",

            // 頂部提醒
            "Motion preferences successfully saved.": "動態首選項已成功保存。",

            "Content": "內容",
            "Link underlines": "鏈接下劃線",
            "Show or hide underlines for links within text blocks. Something isn't working as expected?": "顯示或隱藏文本塊內鏈接的下劃線。有什麼東西沒有按預期工作嗎？",
            "Let us know": "請告知我們",
            "Hide link underlines": "隱藏鏈接下劃線",
            "Show link underlines": "顯示鏈接下劃線",

            // 頂部提醒
            "Link underline preferences successfully saved.": "鏈接下劃線首選項已成功保存。",

            "Editor settings": "編輯器設置",
                "URL paste behavior": "URL 粘貼行為",
                "Select if URLs should be formatted on paste. You can use": "選擇是否應在粘貼時格式化 URL。您可以使用",
                "to paste a link in the opposite way.": "以相反的方式粘貼鏈接。",
                "Formatted link": "格式化鏈接",
                    "Pasting a URL while having text selected will format to a Markdown link": "在選擇了文本的情況下，粘貼 URL 將格式化為 Markdown 鏈接",
                "Plain text": "純文本",
                    "Pasting a URL while having text selected will replace the text": "在選擇了文本的情況下，粘貼 URL 將替換文本",
                "Save editor settings": "保存編輯器設置",
                    // 頂部提醒
                    "Paste behavior preferences successfully saved.": "粘貼行為首選項已成功保存。",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/notifications"] = { // 設置 - 通知
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Notification center 通知 https://github.com/settings/notifications
            "Default notifications email": "默認郵件通知設置",
                "Choose where you'd like emails to be sent. You can add more email addresses. Use custom routes to specify different email addresses to be used for individual organizations.": "選擇您希望將郵件發送到的郵箱。您可以添加更多電子郵件地址。使用自定義路由來指定用於各個組織的不同電子郵件地址。",
                "Custom routing": "自定義路由",

            "Automatically watch repositories": "自動關注倉庫",
                "When you're given push access to a repository, automatically receive notifications for it.": "當您給一個倉庫推送權限時，自動接收相關通知。",
            "Automatically watch teams": "自動關注團隊",
                "Anytime you join a new team, you will automatically be subscribed to updates and receive notification when that team is @mentioned.": "當您加入新團隊時，您將自動訂閱更新，並在該團隊 @提及 時收到通知。",

                "On": "開啟",
                "Off": "關閉",

            "Subscriptions": "訂閱",
                "Watching": "關注倉庫",
                    "Notifications for all repositories, teams, or conversations you're watching.": "所有您正在關注的倉庫、團隊或對話的通知。",
                    "View watched repositories": "查看正在關注的倉庫",
                    "Notify me:": "提醒我：",
                    "Select notification channels": "選擇通知通道",
                    "Close": "關閉",
                    "on GitHub, Email, CLI": "在 GitHub、電子郵件、CLI 上",
                    "on GitHub, CLI": "在 GitHub、CLI 上",
                    "on GitHub, Email, CLI": "在 GitHub、電子郵件、CLI 上",
                    "on GitHub, Email": "在 GitHub、電子郵件 上",
                    "On GitHub": "在 GitHub 上",
                    "on GitHub": "在 GitHub 上",

                "Participating, @mentions and custom": "參與、@提及和自定義",
                    "Notifications for the conversations you are participating in, or if someone cites you with an @mention. Also for all activity when subscribed to specific events.": "您正在參與的對話的通知，或者如果有人 @您。也適用於訂閱特定事件時的所有活動。",

                "Customize email updates": "自定義電子郵件更新",
                    "Choose which additional events you'll receive emails for when participating or watching.": "選擇參與或關注時，您將收到哪些額外活動的電子郵件。",
                    "Select events": "選擇事件",
                    "Reviews": "審查",
                    "Reviews, Pushes": "審查、推送",
                    "Reviews, Pushes, Comments": "審查、推送、評論",
                    "Reviews, Pushes, Comments, My own updates": "審查、推送、評論、自我更新",
                    "Pull Request reviews": "拉取請求審核",
                    "Pull Request pushes": "拉取請求推送",
                    "Comments on Issues and Pull Requests": "關於議題和拉取請求的評論",
                    "Includes your own updates": "包括您自己的更新",
                "Ignored repositories": "忽略的倉庫",
                "You'll never be notified.": "您將永遠不會收到通知。",
                "View ignored repositories": "查看忽略的倉庫",

            "System": "系統",
                "Actions": "操作",
                    "Notifications for workflow runs on repositories set up with": "倉庫的工作流程通知，設置在",
                    ". (": "。（",
                    "Failed workflows only": "僅工作流程失敗時",
                    "Only notify for failed workflows": "只對失敗的工作流程進行通知",

            "Dependabot alerts: New vulnerabilities": "Dependabot 警報：新漏洞",
                "When you're given access to": "當您獲得",
                "Dependabot alerts": "Dependabot 警報",
                "automatically receive notifications when a new vulnerability is found in one of your dependencies.": " 訪問權限時，當您的某個依賴關係中發現新的漏洞時，就會自動收到通知。",

            "Email weekly digest": "每周電子郵件摘要",
                "Email a weekly summary summarizing alerts for up to 10 of your repositories.": "通過電子郵件發送每周摘要，匯總最多 10 個倉庫的警報。",
                "Don't send": "不發送",
                "Send weekly": "每周發送",
                "Send daily": "每日發送",

            "\'Deploy key\' alert email": "“部署密鑰” 警報電子郵件",
                "When you are given admin permissions to an organization, automatically receive notifications when a new deploy key is added.": "當您獲得組織的管理員權限時，會在添加新部署密鑰時自動接收通知。",

        // 通知 自定義路由 https://github.com/settings/notifications/custom_routing
                "/ Custom Routing": "/ 自定義路由",
                    "You can send notifications to different": "您可以將通知發送到不同的",
                    "verified": "經確認",
                    "email addresses depending on the organization that owns the repository.": "電子郵件地址，根據擁有倉庫的組織。",
                    "is your current default email for notifications.": "是您目前默認的通知郵箱。",

                    "No custom routes yet.": "尚無自定義路由",
                    "Add new route": "添加新路由",
                        "Pick organization": "挑選組織",
                            "Select an item": "選擇一項",
                        "Search organizations": "搜索組織",
                        "Select email": "選擇郵箱",
                        "Saved": "已保存",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/billing"] = { // 設置 - 賬單和計劃
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],
        ...I18N.zh["orgs-settings-menu"]["static"], // 組織設置

        // 賬單和計劃 https://github.com/settings/billing/summary
            "Billing summary": "賬單摘要",
            "Your next payment": "您的下一次應付款",
            "This amount does not include the spend on usage of metered service. View your": "該金額不包括使用計量服務的支出。在下面查看您的",
            "usage this month": "本月使用情況",
            "below.": "。",

            // 組織設置
                "Current monthly bill": "當前月度賬單",
                "Switch to yearly billing and save": "切換到按年計費並保存",

                "Next payment due": "下一次應付款",

            "Payment information": "支付信息",
            "Manage spending limit": "管理支出限額",
            "View payment history": "查看支付記錄",
            "Switch to yearly billing": "切換到按年計費",

            "Current plan": "當前計劃",
                "Compare all plans": "比較所有計劃",

                "GitHub Free": "GitHub 免費",
                "The basics for all developers": "基礎計劃（所有開發者）",

                "The basics for organizations and developers": "組織和開發者的基本計劃", // 組織設置
                "Unlimited public/private repos": "無限的公共/私有倉庫",
                "Unlimited collaborators": "無限協作者",
                "2,000 Actions minutes/month": "每月 2,000 分鐘 GitHub Actions",
                "500MB of Packages storage": "500MB 的包存儲空間",
                "120 core-hours of Codespaces compute per developer": "每位開發者擁有 120 個核心小時的程式碼空間計算能力",
                "15GB of Codespaces storage per developer": "每位開發者擁有 15GB 的程式碼空間存儲空間",
                "Community support": "社區支持",

                "Not included:": "不包含：",
                "Free Codespaces usage per organization": "每個組織的免費程式碼空間使用量",
                "Protected branches on all repos": "所有倉庫上的受保護分支",
                "Increase Codespaces": "提高程式碼空間",
                "spend limits": "消費限額",
                "Multiple reviewers in pull requests": "拉取請求中多個審查者",
                "Required status checks": "狀態檢查",
                "Code owners": "程式碼所有者",
                "Required reviewers": "所需的審查者",
                "Pages for static website hosting": "靜態網站頁面託管",
                "Web-based support": "基於網絡的支持",
                "See all features and compare plans": "查看所有功能並比較計劃",

            "Start your first organization": "開設您的第一個組織帳戶",
            "With CI/CD, Dependabot, and the world's largest developer community, GitHub gives your team everything they need to ship better software faster": "藉助 CI/CD、Dependabot 和世界上最大的開發者社區，GitHub為您的團隊提供了他們所需的一切，以更快地發布更好的軟件。",
            "Create an organization": "創建組織",

            // [/In addition to your personal account, you manage (\d+) organizations?./, "除了您的個人帳戶之外，您還管理 $1 個組織。"],
            "Manage your organizations": "管理您的組織",
                "Create a new organization": "創建新組織",

            "Add-ons": "附加組件",
                // "GitHub Copilot": "",
                    "Your AI pair programmer": "您的人工智能助理程序員",
                    "Your AI powered pair programmer": "您的人工智能助理程序員",
                    "Enable GitHub Copilot": "啟用 GitHub Copilot",
                    "GitHub Copilot uses the GPT-3.5 Turbo model to suggest code and entire functions in real-time, right from your editor": "GitHub Copilot 使用 GPT-3.5 Turbo 模型實時在您的編輯器中提供程式碼和整個函數建議",

                     // 組織設置
                    "Learn more about Copilot Business": "了解更多關於 GitHub Copilot 商業版的信息",
                    "Copilot Business": "GitHub Copilot 商業版",
                    "GitHub Copilot uses the OpenAI large language models to suggest code and entire functions in real-time, right from your editor. You can set up a GitHub Copilot Business subscription for your organization.": "GitHub Copilot 使用 OpenAI 大型語言模型，可在編輯器中實時建議程式碼和整個函數。您可以為您的組織設置 GitHub Copilot 商業版訂閱。",
                    "Sign up for Copilot Business": "註冊 GitHub Copilot 商業版",

            "Usage this month": "本月使用情況",
                "Get usage report": "獲取使用報告",
                "Included": "包含",
                "Paid": "支出",
                "Total": "總價",
                // 操作
                    "Usage minutes": "使用分鐘數",
                    "Included minutes quota only applies to Ubuntu 2-core, Windows 2-core and macOS 3-core runners. Windows 2-core and macOS 3-core runners consume included minutes at higher rates.": "包含的分鐘配額僅適用於 雙核 Ubuntu、雙核 Windows 和三核 macOS 運行器。雙核 Windows 和三核 macOS 運行器以更高的速度消耗包括的分鐘數。",
                    "Price / minute": "單價 / 分鐘",
                    "Ubuntu 2-core": "雙核 Ubuntu",
                    "Windows 2-core": "雙核 Windows",
                    "macOS 3-core": "三核 macOS",
                // 軟件包
                    "Data transfer out": "數據轉出",
                    "Data transfer out (rounded)": "數據轉出（四捨五入）",
                    "Price estimate / GB": "估算單價 / GB",
                // 軟件包與操作的存儲空間
                    "Storage for Actions and Packages": "軟件包與操作的存儲空間",
                    "Shared storage consists of Actions artifacts and Packages usage. This graph shows the account's storage usage in GB-months. Removing stored artifacts will not reduce this number, but it will lower its rate of growth. To see your account's current storage, download a usage report.": "共享存儲由操作產生的文件和軟件包使用組成。此圖以每月 GB 數為單位顯示帳戶的存儲使用情況。刪除存儲的文件不會減少這個數字，但會降低其增長率。若要查看您帳戶的當前存儲空間，請下載使用情況報告。",
                    "Storage": "存儲空間",
                    "Shared Storage": "共享存儲空間",
                // 程式碼空間
                    "Usage hours": "使用小時數",
                    "Core hours are calculated by multiplying the compute types by their per-hour rates, which can vary": "核心小時數是通過將計算類型乘以其每小時費率來計算的，該費率可能會有所不同",
                    "Price / hour": "單價 / 小時",
                    "2-core": "雙核",
                    "4-core": "四核",
                    "8-core": "八核",
                    "16-core": "十六核",
                    "32-core": "三十二核",
                    "Storage usage is updated daily and billed monthly": "存儲使用情況每天更新，每月計費",
                    "Price / GB": "單價 / GB",
                    "Prebuild Storage": "預構建存儲",
                // Git LFS 數據
                    "Git LFS Data": "Git LFS 數據",
                    "Add more data": "添加更多數據",
                    "Bandwidth": "帶寬",
                "See billing documentation": "查看計費政策",
                "monthly spending limit": "每月支出限額",
                "monthly spending limit |": "每月支出限額 |",  // 組織設置
                "Set up a spending limit": "設置支出限額",

            "GitHub Sponsors": "GitHub 贊助",
                "Connect with the community that builds the tools you use": "與構建您使用的工具的社區聯繫",
                "Start sponsoring": "開始贊助",
                "You're currently not sponsoring anyone.": "您目前沒有贊助任何人。",
                "Learn more about GitHub Sponsors": "了解更多關於 GitHub 贊助",
                "Switch to invoiced billing": "切換到發票賬單", // 組織

            "GitHub Marketplace": "GitHub 市場",
                "Change plan": "更改計劃",
                "Cancel plan": "取消計劃",
                "Do you have any questions? Contact": "您有任何問題嗎？請聯繫",

            // 組織設置
            "Billing Management": "賬單管理",
                "Receipts are sent to billing managers and email recipients.": "收據會被發送給賬單管理員和郵件接收者。",

                "Billing managers": "賬單管理員",
                    "You have not invited any billing managers": "您尚未邀請任何賬單管理員",
                    "Invite": "邀請",

                "Email recipients": "郵件接收者",
                    "Add": "添加",
                    "Primary": "主帳戶",

                    // 編輯賬單電子郵箱對話框
                        "Edit billing email address": "編輯賬單電子郵箱",
                        "Billing primary email": "賬單主帳戶郵箱",
                        "Update": "更新",

                    // 添加賬單接收者對話框
                        "Add billing recipient": "添加賬單接收者",
                        "Add billing recipient email": "添加賬單接收者郵箱",

                "Metered billing via Azure": "通過 Azure 計量計費",
                    "Add Azure Subscription": "添加 Azure 訂閱",
                    "To manage metered billing for this account through Microsoft Azure an Azure Subscription ID must be added to your account.": "通過 Microsoft Azure 管理此帳戶的計量計費，必須將 Azure 訂閱 ID 添加到您的帳戶中。",

        // 支付信息 https://github.com/settings/billing/payment_information
            "Billing & plans": "賬單和計劃",
            "/ Payment information": "/ 支付信息",

            "Please update your billing information in order to add a payment method.": "請更新您的賬單信息，以便添加支付方式。",

            "Billing information": "賬單信息",
            // 組織設置
            "An organization owner's personal billing information must be linked with this organization account.": "組織所有者的個人賬單信息必須與該組織賬戶關聯。",
            "Update your billing information": "更新您的賬單信息",
            "to be able to link it with this organization.": "以便將其與該組織關聯。",

            "First name": "名字",
            "Last name": "姓氏",
            "Address (P.O. box, company name, c/o)": "地址（郵政信箱、公司名稱、c/o）",
            "Address line 2 (Apartment, suite, unit)": "地址第 2 行（公寓、套房、單元）",
            "City": "城市",
            "Postal/Zip code": "郵政編碼",
                "Required for certain countries": "某些國家/地區需要",
            "Country/Region": "國家/地區",
                "Choose your country": "選擇您所在的國家/地區",
            "State/Province": "州/省",
            "You have not added any billing information.": "您尚未添加賬單方式。",

            "Payment method": "支付方式",
            "Add Information": "添加信息",
            "You have not added a payment method.": "您尚未添加支付方式。",

            "Last payment": "最後一次支付",
            "You have not made any payments.": "您尚未支付任何款項。",

            "Coupon": "優惠■",
            "Redeem a coupon": "兌換優惠券",
            "You don't have an active coupon.": "您沒有有效的優惠券。",

            "Additional information": "附加信息",
                "Add specific contact or tax information to your receipts, like your full business name, VAT/GST identification number, or address of record here. We’ll make sure it shows up on every receipt.": "在您的收據上添加具體的聯繫方式或稅務信息，例如您的企業全稱、VAT/GST 識別號碼或記錄地址。我們將確保它顯示在每張收據上。",
            "Add information": "添加信息",
            "No additional information added to your receipts.": "您的收據上沒有添加任何額外的信息。",

            // 對話框
            "Extra billing information": "額外的賬單信息",
            "This information will appear on all your receipts.": "此信息將出現在您的所有收據上。",
            "For your security, do not include any confidential or financial information (like credit card numbers).": "為了您的安全，請勿包含任何機密或財務信息（如信用卡號）。",
            "Full business name or address of record": "企業全稱或記錄地址",
            "Save contact information": "保存聯繫信息",

        // 支付方式 https://github.com/settings/billing/payment
            "/ Payment method": "/ 支付方式",
            "Loading payment information…": "正在加載支付信息…",
            "Pay with": "支付方式：",
                "Credit card": "信用卡",
                    "Card Number": "卡號",
                    "Expiration Date": "終止日期",
                        "- Select One -": "- 選擇一個 -",
                    "Address 1": "地址 1",
                    "Address 2": "地址 2",
                    "Country": "國家/地區",
                    "City": "城市",
                    "State": "州/省",
                    "Postal Code": "郵政編碼",
                    "Submit": "提交",
                "PayPal account": "PayPal 帳戶",
                    "Sign in to": "登錄到",
                    "Connecting to PayPal…": "正在連接到 PayPal…",
            "Back to billing settings": "返回賬單設置",
            "There are no upcoming charges to your account.": "您的帳戶沒有即將發生的費用。",

        // 支出限額 https://github.com/settings/billing/spending_limit
            "/ Monthly spending limits": "/ 每月支付限額",
            "/ Monthly spending limit": "/ 每月支付限額", // 組織設置
            "Set up a monthly spending limit. You can adjust it at any time. Read more information about": "設置每月支出限額。您可以隨時調整它。閱讀更多關於",
            "spending limits": "支付限額",
            "Actions spending limits": "GitHub 操作支付限額", // 組織設置
            "Packages spending limits": "軟件包支付限額", // 組織設置

            "Payment method is missing": "缺失支付方式",
            "You can’t increase the spending limits until you set up a valid payment method.": "在您設置有效的支付方式之前，您無法提高支出限額。",
            "Add payment method": "添加支付方式",

            "Actions & Packages": "操作與軟件包",
            "Limit spending": "限制支出",
                "Set up a spending limit on a monthly basis": "設置每月支出限額",
                "Update limit": "更新限額",
                // [/Leaving it at (\$\d+\.\d{2}) will avoid any extra expenses/, "將其限制在 $1 美元將避免任何額外的費用。"],
            "Unlimited spending": "不限制支出",
                "Pay as much as needed to keep Actions & Packages running": "按需支付，以保持操作和軟件包的運行",

            "Email alerts": "電子郵件提醒",
            "Receive email notifications when usage reaches 75%, 90% and 100% thresholds.": "當使用率達到 75%、90% 和 100% 的閾值時，會收到電子郵件通知。",
            "Included resources alerts": "包含資源提醒",
            "Spending limit alerts": "支出限額提醒",

            // 程式碼空間
                "Pay as much as needed to keep Codespaces running": "按需支付，以保持程式碼空間的運行",

        // 賬單歷史 https://github.com/account/billing/history
            "/ Payment history": "/ 支付歷史",
            "Amounts shown in USD": "以美元顯示的金額",

        // 用戶計劃 https://github.com/account/billing/plans
        // https://github.com/account/billing/plans
            "Compare plans": "比較計劃",
            "Free": "免費",
                "All the basics": "所有基礎",
            "Pro": "專業",
                "Advanced tools for private repos": "用於私人倉庫的高級工具",
            // 具體內容
                "Code management": "程式碼管理",
                    "Public repositories": "公共倉庫",
                        "Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.": "在 GitHub 公共倉庫中託管開源項目，可通過網絡或命令行訪問。任何人都可以訪問 GitHub.com 上的公共倉庫。",
                    "Private repositories": "私有倉庫",
                        "Host code in private GitHub repositories, accessible via appliance, web, and command line. Private repositories are only accessible to you and people you share them with.": "在私有 GitHub 倉庫中託管程式碼，可通過設備、網絡和命令行訪問。只有您和與您共享的人才能訪問私有倉庫。",

                "Code workflow": "程式碼工作流",
                    "GitHub Codespaces": "GitHub 程式碼空間",
                        "Spin up fully configured dev environments in the cloud with the power of your favorite editor. A \"core hour\" denotes compute usage. On a 2-core machine, you would get 60 hours free. On a 4-core machine, you would get 30 hours free, etc. Free hours are assigned to personal accounts, rather than free organizations.": "利用您喜愛的編輯器的強大功能，在雲中快速配置完整的開發環境。“核心小時” 表示計算使用量。在雙核機器上，您將獲得 60 小時的免費時長。在 4 核機器上，您將獲得 30 小時的免費時長，以此類推。免費時長數分配給個人賬戶，而不是免費組織。",
                    "Github Actions": "Github 操作",
                        "Use execution minutes with GitHub Actions to automate your software development workflows. Write tasks and combine them to build, test, and deploy any code project on GitHub. Minutes are free for public repositories.": "利用 GitHub Actions 的幾分鐘執行時間，實現軟件開發工作流程自動化。編寫任務並組合它們，即可在 GitHub 上構建、測試和部署任何程式碼項目。對於公共倉庫，執行時間是免費的。",
                    "GitHub Packages": "Github 軟件包",
                        "Host your own software packages or use them as dependencies in other projects. Both private and public hosting available. Packages are free for public repositories.": "託管您的軟件包，或將其用作其他項目的依賴項。提供私有和公共託管。對於公共倉庫，軟件包是免費的。",
                    "Code reviews": "程式碼審查",
                        "Review new code, see visual code changes, and confidently merge code changes with automated status checks.": "審查新程式碼，查看可視化的程式碼更改，並通過自動化狀態檢查自行地合併程式碼更改。",
                    // 拉取請求
                        "Allow contributors to easily notify you of changes they've pushed to a repository – with access limited to the contributors you specify. Easily merge changes you accept.": "允許貢獻者輕鬆通知您他們推送到倉庫的更改，訪問權限僅限於您指定的貢獻者。輕鬆合併您接受的更改。",
                    "Protected branches": "受保護的分支",
                        "Enforce restrictions on how code branches are merged, including requiring reviews by selected collaborators, or allowing only specific contributors to work on a particular branch.": "對程式碼分支的合併方式實施限制，包括要求由選定的協作者進行審查，或僅允許特定的貢獻者在特定分支上工作。",
                    // 程式碼所有者
                        "Automatically request reviews – or require approval – by selected contributors when changes are made to sections of code that they own.": "當選定的貢獻者對其擁有的程式碼部分進行修改時，自動要求審查或要求批准。",
                    "Draft pull requests": "拉取請求草案",
                        "Easily discuss and collaborate on pull requests before submitting to formal review.": "在提交正式審查之前，輕鬆討論和協作拉取請求。",
                    "Multiple pull request assignees": "多個拉取請求受理人",
                        "Assign more than one person to a pull request.": "為拉取請求指派多人受理。",
                    "Repository insights": "倉庫洞察",
                        "See data about activity and contributions within your repositories, including trends. You can use this data to improve collaboration and make development faster and more effective.": "查看有關倉庫中的活動和貢獻數據，包括趨勢。您可以利用這些數據來改善協作，使開發更加迅速和有效。",
                    // 定時提醒
                        "Send scheduled messages to you or your team listing open pull requests.": "按計劃的向您或您的團隊發送信息，列出打開的拉取請求。",
                    "Automatic code review assignment": "自動程式碼審查分配",
                        "Automatically assign code reviews to members of your team based on one of two algorithms.": "根據兩種算法之一，自動為團隊成員分配程式碼審查。",
                    "Environment protection rules": "環境保護規則",
                        "When a workflow job references an environment, the job won't start until all of the environment's protection rules pass.": "當工作流作業引用環境時，只有環境的所有保護規則都通過後，作業才會啟動。",
                    "Environment deployment branches and secrets": "環境部署分支和機密",
                        "A job cannot access secrets that are defined in an environment unless it is running on the specified branch.": "除非作業在指定的分支上運行，否則無法訪問環境中定義的機密。",

                "Collaboration": "協作",
                    "Collaborators for public repositories": "公共倉庫協作者",
                        "Invite any GitHub member, or all GitHub members, to work with you on code in a public repository you control – including making changes and opening issues.": "邀請任何 GitHub 成員或所有 GitHub 成員，在您控制的公共倉庫上與您共同處理程式碼，包括進行更改和提出議題。",
                    "Collaborators for private repositories": "私有倉庫協作者",
                        "Invite any GitHub member, or all GitHub members, to work with you on code in a private repository you control – including making changes and opening issues.": "邀請任何 GitHub 成員或所有 GitHub 成員，在您控制的私有倉庫上與您共同處理程式碼，包括進行更改和提出議題。",
                    // 議題
                        "Track bugs, enhancements, and other requests, prioritize work, and communicate with stakeholders as changes are proposed and merged.": "跟蹤漏洞、增強功能和其他請求，確定工作的優先級，並在提出和合併變更時與利益相關者溝通。",
                    // 項目
                        "Visualize and manage issues and pull requests across tables, boards, and roadmaps with custom fields and views that you can arrange to suit your workflow.": "通過自定義字段和視圖，在表格、面板和路線圖上可視化管理議題和拉取請求，以適應您的工作流程。",
                    "Milestones": "里程碑",
                        "Track progress on groups of issues or pull requests in a repository, and map groups to overall project goals.": "跟蹤倉庫中議題或拉取請求組的進展，並將組映射到整體項目目標。",
                    // 團隊討論
                        "Discuss any topic, unattached to a specific project or issue. Control who has access, notify discussion participants with updates, and link from anywhere.": "討論任何主題，不與特定項目或議題相關。控制訪問權限，通知討論參與者最新情況，並從任何地方進行鏈接。",
                    "Organization and team management": "組織和團隊管理",
                        "Manage access to projects on a team-by-team, or individual user, basis.": "以團隊或個人用戶為基礎管理對項目的訪問。",
                    "Pages and wikis": "GitHub Pages 和 Wiki",
                        "Host documentation and simple websites for your project in a wiki format that contributors can easily edit either on the web or command line.": "以 Wiki 格式為您的項目託管文檔和簡單網站，貢獻者可以輕鬆在網絡或命令行上進行編輯。",
                    "Multiple issue assignees": "多個議題受理人",
                        "Assign more than one person to an issue.": "為議題指派多人受理",
                    "GitHub organizations give you team-based access control and discussions.": "GitHub 組織為您提供基於團隊的訪問控制和討論。",
                        "Learn more about organizations": "了解更多關於組織的信息",

                "Security and compliance": "安全性與合規性",
                    "Code scanning": "程式碼掃描",
                        "Integrate automated security review into your pull requests with CodeQL. Find, prioritize, and fix vulnerabilities in your repositories without disrupting your workflow.": "使用 CodeQL 將自動化安全審查集成到您的拉取請求中。在不中斷工作流程的情況下，發現、優先處理並修復倉庫中的漏洞。",
                    "Secret scanning": "機密掃描",
                        "Detect credentials exposed in your git history, comments, or discussions. Prevent further exposures with push protection, which proactively blocks secrets from being pushed into your code.": "檢測您的 git 歷史記錄、評論或討論中暴露的憑證。通過推送保護，主動阻止機密被推送到您的程式碼中，防止進一步的暴露。",
                    "Dependency review": "依賴審查",
                        "Understand the security impact of newly introduced dependencies during pull requests, before they get merged.": "在拉取請求合併之前，了解新引入的依賴關係對安全的影響。",
                    "Security overview": "安全概述",
                        "Get a centralized view of your organization's security risks. Know where security features have and haven’t yet been configured.": "集中查看組織的安全風險。了解哪些安全功能已經配置，哪些尚未配置。",
                    "Dependabot alerts": "Dependabot 警報",
                        "Get notified when there are new vulnerabilities affecting dependencies in your repositories.": "當您的倉庫中出現影響依賴項的新漏洞時，您會收到通知。",
                    "Dependabot security updates": "Dependabot 安全更新",
                        "Keep projects secure by automatically opening pull requests that update vulnerable dependencies to secure versions.": "通過自動打開拉取請求，更新易受攻擊的依賴項至安全版本，保持項目的安全性。",
                    "Dependabot version updates": "Dependabot 版本更新",
                        "Keep projects up-to-date by automatically opening pull requests that update out-of-date dependencies.": "通過自動打開拉取請求，更新過時的依賴項，保持項目的最新狀態。",
                    "Repository rules": "倉庫規則",
                        "Enforce branch and tag protections across repositories. Rule insights allow you to review rule enforcement and understand its impact.": "跨倉庫實施分支和標籤保護限制。規則洞察允許您審查規則執行並了解其影響。",
                    "Required reviews": "批准審查",
                        "Ensure that pull requests have a specific number of approving reviews before collaborators can make changes to a protected branch.": "確保拉取請求通過特定數量的批准審查後，協作者才能對受保護分支進行更改。",
                    // 所需的狀態檢查
                        "Ensure that all required CI tests are passing before collaborators can make changes to a protected branch.": "確保所有必要的 CI 測試通過後，協作者才能對受保護分支進行更改。",
                    "GitHub Security Advisories": "GitHub 安全公告",
                        "Privately discuss, fix, and publish information about security vulnerabilities found in your repository.": "私人討論，修復和發布倉庫程式碼中的安全漏洞的信息。",
                    "Role-based access control": "基於角色的訪問控制",
                        "Define users' level of access to your code, data and settings.": "定義用戶訪問程式碼、數據和設置的級別。",
                    "Required 2FA": "雙重身份驗證（2FA）",
                        "Use an extra layer of security with two factor authentication (2FA) when logging into GitHub.": "登錄 GitHub 時，使用雙重身份驗證（2FA）作為額外的安全層。",
                    // 審計日誌
                        "Quickly review the actions performed by members of your organization.": "快速審查組織成員執行的操作。",
                    "Enterprises can connect to advanced systems like LDAP and SAML single sign-on (SSO).": "企業可以連接到如 LDAP 和 SAML 單一登錄 (SSO) 等高級系統。",
                        "Learn more about GitHub Enterprise": "了解更多關於 GitHub 企業版的信息。",

                "Marketplace and integrations": "市場和集成",
                    // Github應用
                        "Install apps that integrate directly with GitHub's API to improve development workflows – or build your own for private use or publication in the GitHub Marketplace.": "安裝直接與 GitHub API 集成的應用，改進開發工作流程，或創建自己的應用，供個人使用或在 GitHub 市場發布。",
                    "Status checks": "狀態檢查",
                        "Define tests that GitHub automatically runs against code being committed to your repository, and get details about failures and what is causing them.": "定義 GitHub 針對提交到倉庫的程式碼自動運行的測試，並獲取有關失敗和失敗原因的詳細信息。",
                    "Enterprise Server customers create pre-receive hooks to automatically accept or reject a push.": "企業服務器客戶創建預接收掛鉤，以自動接受或拒絕推送。",
                        "Learn more about pre-receive hooks": "了解更多關於預接收掛鉤的信息。",

                "Support and deployment": "支持與部署",
                    "Community Support": "社區支持",
                        "Get help with most of your GitHub questions and issues in our Community Forum.": "在我們的社區論壇中，獲取大多數有關 GitHub 問題和議題的幫助。",
                    "Standard Support": "標準支持",
                        "GitHub Support can help you troubleshoot issues you run into while using GitHub. Get support via the web.": "GitHub 支持可幫助您解決使用 GitHub 時遇到的問題。通過網絡獲取支持。",
                    "Enterprises also get Premium Support, invoice billing, and self-hosted deployment.": "企業還可以獲得高級支持、發票計費和自託管部署。",
                       // "Learn more about GitHub Enterprise": "了解更多關於 GitHub 企業版的信息。",

                // 表格中內容
                "per user/month": "每人/月",
                "Upgrade to Pro": "升級到專業版",
                "Unlimited": "無限",
                "$0 spend limit": "$0 支出限額",
                    "With policies and controls": "帶策略及限制",
                "180 core-hours compute/month and 20GB storage": "每月 180 個核心小時計算和 20GB 存儲",
                "2,000 minutes/month": "2000 分鐘/月",
                    "Free for public repositories": "免費用於公共倉庫",
                "3,000 minutes/month": "3,000 分鐘/月",
                "Public repositories": "公共倉庫",

        // 組織設置 邀請賬單管理員 '/organizations/<org-login>/billing_managers/new'
            "Billing": "賬單",
            "/ Add a billing manager": "/ 添加賬單管理員",
            "A": " ",
            "billing manager": "賬單管理員",
            "is a user who manages the billing settings of your organization.": "是管理您組織的賬單設置的用戶。",
            "will": "會",
            "will not": "不會",
            "have the ability to:": "具備以下能力：",
                "Change the billing plan": "更改賬單計劃",
                "Add, update, or remove payment methods": "添加、更新或刪除支付方式",
                // "": "查看支付記錄",
                "Download, and receive receipts": "下載並接收收據",
                "View a list of billing managers": "查看帳單管理員列表",
                "Invite additional billing managers": "邀請其他賬單管理員",
                "Remove other existing billing managers": "移除其他現有的賬單管理員",
                "Start, modify, or cancel sponsorships": "開始、修改或取消贊助",
            "be able to:": "能夠：",
                "Create or access repositories in your organization": "在您的組織中創建或訪問倉庫",
                "See private members of your organization": "查看您組織的私人成員",
                "Be seen in the list of organization members": "在組織成員列表中可見",
                "Use the organization’s payment method": "使用組織的支付方式",
                "Enable or manage Copilot": "啟用或管理 GitHub Copilot",
                "Purchase, edit, or cancel Marketplace subscriptions": "購買、編輯或取消市場訂閱",

            "Search by username, full name or email address": "搜索用戶名、全名、或電子郵箱",
            "Send invitation": "發送邀請",

    },
    "regexp": [ // 正則翻譯
        [/Included minutes quota resets (\d+) 天之內./, "包含的分鐘配額將在 $1 天之內重置"],
        [/Data transfer quota resets (\d+) 天之內./, "數據傳輸配額將在 $1 天之內重置"],
        [/Included quotas resets (\d+) 天之內./, "包含的配額將在 $1 天之內重置"],
        [/Bandwidth quota resets resets (\d+) 天之內./, "帶寬使用配額將在 $1 天之內重置"],
        [/In addition to your personal account, you manage (\d+) organizations?./, "除了您的個人帳戶之外，您還管理 $1 個組織。"],
        [/Leaving it at (\$\d+\.\d{2}) will avoid any extra expenses/, "將其限制在 $1 美元將避免任何額外的費用。"],
        [/isn’t a GitHub member/, "不是 GitHub 成員"], // 組織設置
    ],
};
I18N.zh["account/billing/history"] = I18N.zh["settings/billing"];
I18N.zh["orgs/settings/billing"] = I18N.zh["settings/billing"];
I18N.zh["orgs/billing_managers/new"] = I18N.zh["settings/billing"];
I18N.zh["orgs/billing/history"] = I18N.zh["settings/billing"];

I18N.zh["settings/emails"] = { // 設置 - 電子郵箱
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Emails 電子郵箱 https://github.com/settings/emails
            "Email settings": "電子郵箱設置",
            "Primary": "主帳戶",
            "Unverified email addresses cannot receive notifications or be used to reset your password.": "未經驗證的電子郵件地址無法接收通知或用於重置您的密碼。",
            "This email will be used for account-related notifications and can also be used for password resets.": "該電子郵箱將用於與帳戶有關的通知，也可用於密碼重置。",
            "Not visible in emails": "在電子郵件中不可見",
            "Visible in emails": "在電子郵件中可見",
                "This email may be used as the 'author' or 'committer' address for web-based Git operations, e.g., edits and merges.": "該電子郵箱可用作基於 Web 的 Git 操作（例如：編輯和合併）的 ‘作者’ 或 ‘提交者’ 地址。",
            "Receives notifications": "接收通知",
            "This email address is the default used for GitHub notifications, i.e., replies to issues, pull requests, etc.": "該電子郵箱默認用於 GitHub 的通知，即對議題和拉取請求的回覆，等等。",
            "At least one email is required.": "至少需要一個電子郵箱。",
            // 刪除按鈕 提醒信息
                "Are you sure you want to remove this email from your account? Once removed, commits attributed to this email address will no longer be associated with your account. One of your other emails will become your primary address.": "您確定要從您的帳戶中刪除此電子郵箱嗎？刪除後，歸因於該電子郵箱地址的提交將不再與您的帳戶相關聯。您的其他電子郵箱之一將成為您的主要地址。",

            "Add email address": "添加電子郵箱",
            "Email address": "電子郵箱",
                // 頂部提醒
                "Resend verification email": "重新發送驗證郵件",
                "Your email was verified.": "您的電子郵箱地址驗證成功！",

            "Primary email address": "主電子郵箱",
            // 未電子郵箱隱私
            "will be used for account-related notifications and can be used for password resets.": "將用於與帳戶相關的通知，並可用於密碼重置。",
            // 電子郵箱隱私
            "Because you have email privacy enabled,": "因為您已經啟用了電子郵箱隱私，",
            "will be used for account-related notifications as well as password resets.": "將用於與帳戶相關的通知以及密碼重置。",
            "will be used for web-based Git operations, e.g., edits and merges.": "將用於基於 Web 的 Git 操作，例如編輯和合併。",
            // 頂部提醒
            "Your primary email was changed to": "您的主電子郵箱已更改為",
            ". Your default notification email address is still set to": "。您的默認通知電子郵箱仍然設置為",
            ". Would you like to update that as well?": "。您也想更新它嗎？",
            "Yes， update my notification email": "是的，更新我的通知電子郵箱",

            "Backup email address": "備用電子郵箱",
            "Your backup GitHub email address will be used as an additional destination for security-relevant account notifications and can also be used for password resets.": "您的備用 GitHub 電子郵箱將額外的用作安全相關帳戶通知，也可以用於密碼重置。",
            "Allow all verified emails": "允許所有已驗證的電子郵箱",
                // 頂部提醒
                "All verified emails can now be used for password resets.": "所有已驗證的電子郵箱現在均可用於密碼重置。",
            "Only allow primary email": "僅允許主電子郵箱",
                // 頂部提醒
                "Only your primary email address can now be used for password resets.": "現在只有您的主電子郵箱可用於密碼重置。",
            "Please add a verified email, in addition to your primary email, in order to choose a backup email address.": "請在您的主電子郵箱之外，添加一個經驗證的電子郵箱，以便選擇一個備用電子郵箱。",

            "Keep my email addresses private": "保持我的電子郵箱地址的私密性",
                // 頂部提醒
                "Your primary email address is now public. To select which email to display on your profile, visit": "您的主電子郵箱地址現已公開。要選擇在您的個人資料中顯示哪個電子郵箱，請訪問",
                "profile settings.": "個人資料設置。",
                "Your primary email address is now private. If you previously made your email public, we’ve removed it from your profile.": "您的主電子郵箱地址現已設為私密。如果您以前公開過您的電子郵箱，我們已經從您的個人資料中刪除了它。",
            "We’ll remove your public profile email and use": "我們將刪除您的公開個人資料中的電子郵箱，並使用",
            "when performing web-based Git operations (e.g. edits and merges) and sending email on your behalf. If you want command line Git operations to use your private email you must": "執行基於 Web 的 Git 操作（例如：編輯和合併）並以您的名義發送電子郵件。如果您想在命令行 Git 操作中使用您的私人電子郵箱，您必須",
            "set your email in Git": "在 Git 中設置您的電子郵箱",
            "Previously authored commits associated with a public email will remain public.": "以前創建的與公共電子郵件相關的提交將保持公開狀態。",

            "Block command line pushes that expose my email": "阻止在命令行推送中暴露我的電子郵箱",
                // 頂部提醒
                "Commits pushed with a private email will no longer be blocked.": "使用私人電子郵箱推送的提交將不再被阻止。",
                "Commits pushed with a private email will now be blocked and you will see a warning.": "使用私人電子郵箱推送的提交將被阻止，您會看到一個警告。",
            "When you push to GitHub, we’ll check the most recent commit. If the author email on that commit is a private email on your GitHub account, we will block the push and warn you about exposing your private email.": "當您推送到 GitHub 時，我們會檢查最近的提交。如果該提交的作者電子郵箱是您 GitHub 帳戶上的私人電子郵箱，我們會阻止推送並警告您不要暴露您的私人電子郵箱。",

            "Email preferences": "郵件首選項",
                "Subscriptions through our various marketing platforms. Each email address has its own subscriptions.": "通過我們的各種營銷平台進行訂閱。每個電子郵件地址都有自己的訂閱。",
                "Manage": "管理",

        // 訂閱偏好 https://github.com/settings/emails/subscriptions
            "No subscriptions found": "未找到訂閱信息",
            "Save subscription preferences": "保存訂閱首選項",
            "Back to email settings": "返回電子郵件設置",
            "To stop receiving emails for the topics below, uncheck any topics you don't want to receive, then select Save subscription preferences": "要停止接收以下主題的電子郵件，請取消選中任何不想接收的主題，然後選擇“保存訂閱首選項”",
            "General info and offers from GitHub": "GitHub 的一般信息和優惠",
            "Get tips, solutions and exclusive offers from GitHub about products, services and events we think you might find interesting.": "從 GitHub 獲取我們認為您可能感興趣的產品、服務和活動的提示、解決方案和獨家優惠。",
            "Unsubscribe from all topics": "取消訂閱所有主題",
    },
    "regexp": [ // 正則翻譯
        [/This email will not be used as the 'from' address for web-based Git operations, e\.g\., edits and merges. We will instead use ([^@]+@users.noreply.github.com)\./, "該電子郵箱不會用作基於 Web 的 Git 操作（例如編輯和合併）的 “發件人” 地址。我們將改為使用 $1。"],
        [/Your primary email was changed to ([^@]+@[^\n]+)\./, "您的主電子郵箱已更改為 $1"],
        [/Subscription preferences for ([^@]+@[^\n]+)/, "$1 的訂閱偏好"],
    ],
};

I18N.zh["settings/security"] = { // 設置 - 密碼和身份身份驗證
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // 密碼和身份身份驗證 - 帳戶安全 https://github.com/settings/security
            "Change password": "更改密碼",
            "Old password": "舊密碼",
            "New password": "新密碼",
            "Confirm new password": "確認新密碼",
            "Make sure it's": "請確保",
            "at least 15 characters": "至少需要15個字符",
            "OR": " 或者",
            "at least 8 characters": "至少需要8個字符",
            "including a number": "包括數字",
            "and a lowercase letter": "和小寫字母",
            "Password is too short (minimum is 8 characters)": "密碼太短（最少8個字符）",
            "Password is too short (minimum is 8 characters), needs at least 1 lowercase letter, and is in a list of passwords commonly used on other websites": "密碼太短（最少8個字符），至少需要1個小寫字母，而且已在其他網站常用密碼列表中",
            "Password is too short (minimum is 8 characters), needs at least 1 lowercase letter, cannot include your login, and is in a list of passwords commonly used on other websites": "密碼太短（最少為8個字符），至少需要1個小寫字母，而且不能包括您的登錄名，以及在其他網站常用的密碼列表中。",
            "Password is too short (minimum is 8 characters), needs at least 1 number, cannot include your login, and is in a list of passwords commonly used on other websites": "密碼太短（最少8個字符），需要至少1個數字，不能包含您的登錄名，以及在其他網站常用的密碼列表中",
            "Password is too short (minimum is 8 characters) and is in a list of passwords commonly used on other websites": "密碼太短（最少為8個字符），而且已在其他網站常用的密碼列表中。",
            "Password needs at least 1 lowercase letter and is in a list of passwords commonly used on other websites": "密碼需要至少 1 個小寫字母，而且已在其他網站常用的密碼列表中",
            "Password is in a list of passwords commonly used on other websites": "密碼在其他網站常用的密碼列表中",
            "Update password": "更新密碼",
            "I forgot my password": "我忘記了我的密碼",

            "Passkeys": "通行密鑰",
                "Passwordless sign-in with passkeys": "使用通行密鑰進行無密碼登錄",
                "Passkeys are a password replacement that validates your identity using touch, facial recognition, a device password, or a PIN. Passkeys can be used for sign-in as a simple and secure alternative to your password and two-factor credentials.": "通行密鑰是一種密碼替代品，可通過觸摸、面部識別、設備密碼或 PIN 驗證您的身份。通行密鑰可用於登錄，作為密碼和雙重身份驗證的一種簡單而安全的替代方式。",
                "This browser or device does not fully support passkeys - you may be able to use a passkey from another device.": "此瀏覽器或設備不完全支持通行密鑰 - 您可以嘗試使用來自其他設備的通行密鑰。",
                "Add a passkey": "添加通行密鑰",

                "Passkeys are a password replacement that validates your identity using touch, facial recognition, a device password, or a PIN.": "通行密鑰是一種密碼替代品，可通過觸摸、面部識別、設備密碼或 PIN 驗證您的身份。",
                    "This browser or device is reporting partial passkey support, but you may be able to use a passkey from a nearby device.": "此瀏覽器或設備報告支持部分通行密鑰，但您也許可以嘗試使用附近設備的通行密鑰。",
                "Your passkeys": "您的通行密鑰",
                "Seen from this browser": "該瀏覽器中查看",
                "| Last used": "| 最後使用",
                // | Last used less than 1 小時之前
                "Edit passkey nickname": "編輯密鑰昵稱",
                // [/Delete `([^ ]+)` passkey/, "刪除 “$1” 通行密鑰"],

                // 刪除密鑰對話框
                    "Delete passkey?": "刪除通行密鑰？",
                    // [Are you sure you want to delete your `([^ ]+)` passkey?/, "您確定要刪除您的 “$1” 通行密鑰嗎？"],
                    "You will no longer be able to use it to sign-in to your account.": "您將無法再使用它登錄您的帳戶。",
                    "Note: You may continue to see this passkey as an option during sign-in until you also delete it from your browser, device or associated account's password management settings.": "注意：您可能會在登錄過程中繼續看到此通行密鑰作為一個選項，直到您將其從瀏覽器、設備或關聯帳戶的密碼管理設置中刪除。",
                    "Deleting…": "刪除中…",

            // 雙重身份驗證
                // 頂部提醒
                    "You can now manage your two-factor authentication methods from this page.": "您現在可以從此頁面管理您的雙重身份驗證方法。",
                    "Two-factor authentication successfully disabled.": "成功禁用雙重身份驗證。",
                    "SMS/Text message successfully configured.": "短信/文本信息配置成功。",

            "Two-factor authentication": "雙重身份驗證",
                "Two-factor authentication is not enabled yet.": "尚未啟用雙重身份驗證。",
                "Enable two-factor authentication": "啟用雙重身份驗證",

                //" Because of your contributions on GitHub, two-factor authentication is required for your account. Thank you for helping keep the ecosystem safe!": "基於您在 GitHub 上的貢獻，您的帳戶需要雙重身份驗證。感謝您幫助維護生態系統安全！",
                "Because of your contributions on GitHub, two-factor authentication will be required for your account starting": "基於您在 GitHub 上的貢獻，從",
                ". Thank you for helping keep the ecosystem safe!": " 開始，您的帳戶將需要雙重身份驗證，感謝您幫助維護生態系統的安全！",
                "Learn more about our two-factor authentication initiative": "了解更多關於我們的雙重身份驗證的倡議",

                "Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to sign in.": "雙重身份驗證不僅僅要求密碼登錄，還為您的帳戶增加了一層額外的安全性。",
                "Learn more about two-factor authentication": "了解更多關於雙重身份驗證的信息",


                "Enable": "啟用",
                "Enabled": "啟用",
                    "Two-factor authentication is required for at least one organization or enterprise account you're affiliated with.": "至少有一個您所屬的組織或企業賬戶需要進行雙重身份驗證。",
                "Disable": "停用",

            "Preferred 2FA method": "首選 2FA 方法",
                "Set your preferred method to use for two-factor authentication when signing into GitHub.": "設置登錄 GitHub 時用於雙重身份驗證的首選方法。",

            "Two-factor methods": "雙重身份驗證方式",
                "Configured": "已配置",

                "Authenticator app": "身份驗證器應用",
                    "Use an authentication app or browser extension to get two-factor authentication codes when prompted.": "在出現提示時，使用身份驗證應用或瀏覽器擴展獲取雙重身份驗證碼。",
                    "Use an authentication app or browser extension to generate one-time codes.": "使用身份驗證應用或瀏覽器擴展生成一次性程式碼。",

                    "Manage Authenticator app": "管理身份驗證器應用",

                    "Authenticator apps and browser extensions like": "身份驗證器應用和瀏覽器擴展，例如",
                    ", etc. generate one-time passwords that are used as a second factor to verify your identity when prompted during sign-in.": "等生成一次性密碼，在登錄過程中出現提示時用作第二個因素來驗證您的身份。",

                    "Scan the QR code": "掃描二維碼",
                    "Re-scan the QR code": "重新掃描二維碼",
                    "Use an authenticator app or browser extension to scan.": "請使用身份驗證器應用或瀏覽器擴展進行掃描。",
                    "Learn more about enabling 2FA": "了解更多關於啟用 2FA 的信息",

                    "Unable to scan? You can use the": "無法掃描？您可以使用",
                    "setup key": "設置密鑰",
                    "to manually configure your authenticator app.": "手動配置您的身份驗證器應用。",
                        "Your two-factor secret": "您的雙因素密鑰",

                    "Verify the code from the app": "驗證來自身份驗證器應用的驗證碼",
                    "Two-factor code verification failed. Please try again.": "雙重身份驗證碼驗證失敗。請重試。",

                "SMS/Text message": "短信/文字信息",
                    "Manage SMS/Text message": "管理短信/文字信息",

                    "Get one-time codes sent to your phone via SMS to complete authentication requests.": "通過短信向您的手機發送一次性程式碼，以完成認證請求。",

                    "Get authentication codes by SMS on your mobile phone when signing into GitHub. Make sure that": "登錄 GitHub 時通過手機短信獲取驗證碼。確保",
                    "your country or region is supported": "支持您的國家/地區",
                    "for SMS delivery.": "用於短信發送。",

                    "Verify account": "驗證賬戶",
                    "Before setting up SMS, please verify that you're a human.": "在設置短信之前，請驗證您是人類。",

                    "Country code": "國家程式碼",
                    "Your phone number": "您的手機號碼",
                    "Send authentication code": "發送驗證碼",
                    "Sent. It may take a minute for the SMS to arrive.": "已發送。短信可能需要一分鐘時間才能送達。",
                    "Verify the code sent to your phone": "驗證發送到您手機的驗證碼",

                    // [/You will receive one-time codes at this phone number:/, "您將通過以下電話號碼收到一次性驗證碼："], // 已設置短信/文字信息

                "Security keys": "安全密鑰",
                    "Security keys are hardware devices that can be used as your second factor of authentication.": "安全密鑰是一種硬件設備，可以作為您的第二個驗證步驟。",
                    "Hide": "隱藏",
                    "No security keys": "沒有安全密鑰",

                    "Register new security key": "註冊新安全密鑰",
                    "Enter a nickname for this security key": "輸入安全密鑰的昵稱",
                    "Waiting for input from browser interaction...": "等待來自瀏覽器交互的輸入...",
                    "Security key registration failed.": "安全密鑰註冊失敗。",
                    "Try again": "請重試",

                "GitHub Mobile": "GitHub Mobile",
                    "GitHub Mobile can be used for two-factor authentication by installing the GitHub Mobile app and signing in to your account.": "通過安裝 GitHub Mobile 應用並登錄帳戶，可以使用 GitHub Mobile 來進行雙重身份驗證。",
                    "Manage GitHub Mobile": "管理 GitHub Mobile",

                    // [/(\d+) devices?/, "$1 設備"], // 設置--> 密碼和身份驗證頁
                    "Show": "顯示",

            "Recovery options": "恢複選項",
                "Recovery codes": "恢復碼",
                    "Recovery codes can be used to access your account in the event you lose access to your device and cannot receive two-factor authentication codes.": "恢復碼可用於在您無法訪問設備且無法接收雙重身份驗證碼的情況下訪問您的帳戶。",
                    "Viewed": "已查看",
                    "View": "查看",

            // 授權訪問 sudo 模式身份驗證
                "Confirm access": "授權訪問",
                "Authentication code": "驗證碼",
                    "More information about sudo mode authentication": "更多關於 sudo 模式身份驗證的信息",
                "Open your two-factor authenticator (TOTP) app or browser extension to view your authentication code.": "打開您的雙重身份驗證器 (TOTP) 應用或瀏覽器擴展以查看您的身份驗證碼。",
                "Verify": "驗證",
                "Verify": "驗證",
                "Verifying…": "驗證中…",
                "Your authentication code has been sent.": "您的驗證碼已發送。",

                "Having problems?": "有問題嗎？",
                "Use GitHub Mobile": "使用 GitHub Mobile",
                "Use your passkey": "使用您的通行密鑰",
                "Use your authenticator app": "使用您的身份驗證器應用",
                "Use your password": "使用您的密碼",

                "GitHub Mobile": "GitHub Mobile",
                "Creating a verification request for your GitHub Mobile app.": "為您的 GitHub Mobile 應用創建驗證請求。",
                "We sent you a verification request on your GitHub Mobile app. Enter the digits shown below to enter sudo mode.": "我們向您的 GitHub Mobile 應用發送了一個驗證請求。輸入下面顯示的數字以進入 sudo 模式。",
                "We could not verify your identity": "我們無法核實您的身份",
                "Retry": "請重試",

                "Password": "密碼",
                "Forgot password?": "忘記密碼？",
                "Confirm": "確認",

                "Passkey": "通行密鑰",
                "When you are ready, authenticate using the button below.": "準備好後，請使用下面的按鈕進行身份驗證。",
                "This browser or device does not fully support passkeys.": "此瀏覽器或設備不完全支持通行密鑰。",
                "Use passkey": "使用通行密鑰",

                "Authentication failed.": "認證失敗。",
                "Retry passkey": "重試通行密鑰",

                "Unable to verify with your passkey?": "無法驗證您的通行密鑰？",

    },
    "regexp": [ // 正則翻譯
        [/(\d+) devices?/, "$1 個設備"], // 設置--> 密碼和身份驗證頁
        [/You will receive one-time codes at this phone number:/, "您將通過以下電話號碼收到一次性驗證碼："], // 已設置短信/文字信息
        [/Delete `([^ ]+)` passkey/, "刪除 “$1” 通行密鑰"],
        [/Are you sure you want to delete your `([^ ]+)` passkey?/, "您確定要刪除您的 “$1” 通行密鑰嗎？"],
    ],
};

I18N.zh["settings/auth"] = {
    "static": { // 靜態翻譯

        // 查看恢復碼 https://github.com/settings/auth/recovery-codes
            // 頂部提醒
                "New two-factor recovery codes successfully generated. Save them in a safe, durable location and discard your previous codes.": "已成功生成新的雙重身份驗證恢復碼。將它們保存在安全、耐用的位置，並丟棄以前的恢復碼。", // 生成新恢復碼

            "Two-factor recovery codes": "雙重身份驗證恢復碼",
                "Recovery codes can be used to access your account in the event you lose access to your device and cannot receive two-factor authentication codes.": "恢復碼可用於在您無法訪問設備且無法接收雙重身份驗證碼的情況下訪問您的帳戶。",

            "Recovery codes": "恢復碼",
                "Keep your recovery codes as safe as your password. We recommend saving them with a password manager such as": "保持您的恢復碼與您的密碼一樣安全。我們建議使用密碼管理器保存它們，例如",
                "Keep your recovery codes in a safe spot.": "將您的恢復碼保存在一個安全的地方。",
                "These new codes have replaced your old codes. Save them in a safe spot.": "這些新恢復碼已取代您的舊恢復。請將它們保存在安全的地方。", // 生成新恢復碼
                "These codes are the last resort for accessing your account in case you lose your password and second factors. If you cannot find these codes, you": "這些恢復碼是在您丟失密碼和第二要素的情況下訪問您賬戶的最後手段。如果您找不到這些恢復碼，您",
                "will": "將",
                "lose access to your account.": "無法訪問您的帳戶。",

                "Download": "下載",
                "Print": "打印",
                "Copy": "複製",

            "Generate new recovery codes": "生成新恢復碼",
                "When you generate new recovery codes, you must download or print the new codes.": "當您生成新恢復碼時，您必須下載或打印新恢復碼。",
                "Your old codes won't work anymore.": "您的舊恢復碼將失效。",

            "Back to settings": "返回設置",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/sessions"] = {
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // 會話詳情 https://github.com/settings/sessions
            "Web sessions": "網絡會話",
            "GitHub Mobile can be used to verify your identity when signing in from a new device and as a two-factor authentication method.": "GitHub Mobile 可用於從新設備登錄時驗證您的身份，並作為一種雙重身份驗證方法。",
            "Learn more about authentication with GitHub Mobile.": "了解更多關於 GitHub Mobile 身份驗證的信息。",
            "To get started, install GitHub Mobile for": "首先，安裝 GitHub Mobile 適用於",
            "and sign in to your account.": "並登錄您的帳戶。",

            "This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.": "這是已登錄您帳戶的設備列表。 撤銷任何您不認識的會話。",
            "See more": "查看更多",
            "Your current session": "您當前的會話",
            "Last accessed on": "最後訪問日期：",

            "GitHub Mobile sessions": "GitHub Mobile 會話",
            "This is a list of devices that have logged into your account via the GitHub Mobile app. Revoke any session that you do not recognize or you can": "這是已通過 GitHub Mobile 應用登錄到您帳戶的設備列表。撤銷任何您不認識的會話，或者您可以",
            "revoke": "撤消",
            "your GitHub Mobile app authorization to sign out of all your devices.": "您的 GitHub Mobile 應用授權，以登出您的所有設備。",
            "Revoke": "撤消",
            "Registered -": "註冊於 -",
            "Last accessed -": "最後訪問 -",
            "Last used for authentication -": "最後一次認證 -",
            "Never used": "未使用",

        // 會話詳情 https://github.com/settings/sessions/<id>
            "Session details": "會話詳情",
            "Revoke session": "撤銷會話",
            "Device:": "設備：",
            "Last location:": "最後的位置：",
            "Signed in:": "登錄：",
            "View all sessions": "查看所有會話",
    },
    "regexp": [ // 正則翻譯
        [/Seen in/, "登錄於"],
    ],
};

I18N.zh["settings/keys"] = { // 設置 - SSH 與 GPG 公鑰
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // SSH and GPG keys SSH 與 GPG 公鑰 https://github.com/settings/keys
            "SSH keys": "SSH 密鑰",
            "New SSH key": "新建 SSH 密鑰",
            "Authentication keys": "認證密鑰",
            "There are no SSH keys associated with your account.": "沒有與您的帳戶關聯的 SSH 密鑰。",
            "This is a list of SSH keys associated with your account. Remove any keys that you do not recognize.": "這是與您的帳戶相關的 SSH 密鑰的列表。刪除任何您無法識別的密鑰。",
            "Last used within the last week": "上周內最後一次使用",
            "Check out our guide to": "請看我們的指南",
            "connecting to GitHub using SSH keys": "使用 SSH 密鑰連接到 GitHub",
            "or troubleshoot": "或解決",
            "common SSH problems": "常見的 SSH 問題",

            "GPG keys": "GPG 密鑰",
            "New GPG key": "新建 GPG 密鑰",
            "There are no GPG keys associated with your account.": "沒有與您的帳戶關聯的 GPG 密鑰。",
            "This is a list of GPG keys associated with your account. Remove any keys that you do not recognize.": "這是與您的帳戶相關的 GPG 密鑰的列表。刪除任何您無法識別的密鑰。",

            "Email address:": "電子郵件地址：",
            "Key ID:": "密鑰 ID：",
            "Subkeys:": "子密鑰：",
            "Added": "添加於",

            "Learn how to": "了解如何",
            "generate a GPG key and add it to your account": "生成 GPG 密鑰並將其添加到您的帳戶",

            "Vigilant mode": "警戒模式",
            "Flag unsigned commits as unverified": "將未簽名的提交標記為未驗證",
            "This will include any commit attributed to your account but not signed with your GPG or S/MIME key.": "這將包括任何歸屬於您的帳戶但沒有用您的 GPG 或 S/MIME 密鑰簽名的提交。",
            "Note that this will include your existing unsigned commits.": "請注意，這將包括您現有的未簽名的提交。",
            "Learn about vigilant mode": "了解警戒模式",

            // SSH 密鑰刪除 對話框
            "Are you sure you want to delete this SSH key?": "您確定要刪除此 SSH 密鑰嗎？",
            "This action": "該操作",
            "CANNOT": "不能",
            "be undone. This will permanently delete the SSH key and if you’d like to use it in the future, you will need to upload it again.": "被撤銷。這將永久地刪除 SSH 密鑰，如果您想在未來使用它，您將需要再次上傳它。",
            "I understand, delete this SSH key": "我明白了，刪除此 SSH 密鑰",

            // GPG 密鑰刪除 對話框
            "Are you sure you want to delete this GPG key?": "您確定要刪除此 GPG 密鑰嗎？",
            "be undone. This will permanently delete the GPG key, and if you’d like to use it in the future, you will need to upload it again.": "被撤銷。這將永久地刪除 GPG 密鑰，如果您想在未來使用它，您將需要再次上傳它。",
            "Any commits you signed with this key will become unverified after removing it.": "刪除後，您使用此密鑰簽名的任何提交都將變成未驗證。",
            "I understand, delete this GPG key": "我明白了，刪除此 GPG 密鑰",
            "Okay, you have successfully deleted that key.": "好的，您已成功刪除該密鑰。",

            // 頂部提醒
            "Key is invalid. You must supply a key in OpenSSH public key format": "密鑰無效。您必須提供 OpenSSH 公鑰格式的密鑰",
            "We got an error doing that.": "我們在這樣做時出錯了。",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/ssh"] = { // 設置 - SSH 與 GPG 公鑰 - 添加 SSH 公鑰
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // 添加 SSH 公鑰 https://github.com/settings/ssh/new
            "Add new SSH Key": "添加新 SSH 密鑰",
            "Title": "標題",
            "Key type": "密鑰類型",
                "Authentication Key": "認證密鑰",
                "Signing Key": "簽名密鑰",
            "Key": "密鑰",
            "Add SSH key": "添加 SSH 密鑰",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/gpg"] = { // 設置 - SSH 與 GPG 公鑰 - 添加 GPG 公鑰
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // 添加 GPG 公鑰 https://github.com/settings/gpg/new
            "Add new GPG key": "添加新 GPG 密鑰",
            "Title": "標題",
            "Key": "密鑰",
            "Add GPG key": "添加 GPG 密鑰",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/organizations"] = { // 設置 - 組織
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Organizations 組織 https://github.com/settings/organizations
            "You are not a member of any organizations.": "您暫無任何組織。",

            "Owner": "所有者",
            "Compare plans": "比較計劃",
            "Leave": "離開",

            "Transform account": "帳戶變更",
            "You cannot transform this account into an organization until you leave all organizations that you’re a member of.": "在您離開您所屬的所有組織之前，您無法將此帳戶轉換為組織。", // 存在所屬組織時
            "You cannot transform this account into an organization because you have an active GitHub Sponsors account.": "由於您有一個活躍的 GitHub 贊助者帳戶，因此您無法將此帳戶轉換為組織。", // 存在贊助者賬戶時
            "Account transformation warning": "帳戶變更警告",
            "What you are about to do is an irreversible and destructive process. Please be aware:": "這將是一個不可逆轉的過程，請確認：",
            "Any user-specific information (OAuth tokens, SSH keys, Job Profile, etc) will be erased": "任何用戶特定的信息（OAuth 令牌, SSH 密鑰, 職位簡介, 等）將被刪除。",
            "create a new personal account": "創建一個新的個人帳戶",
            "The total amount of collaborators across private repositories will be the total amount of seats for the organization": "跨私人倉庫的合作者總數將是該組織的席位總數",

    },
    "regexp": [ // 正則翻譯
        [/Turn ([^ ]+) into an organization/, "變更 $1 為組織"],
        [/Outside collaborator on (\d+) repositor(y|ies)/, "$1 個倉庫的外部協作者"], // 設置 - 組織
        [/Member and collaborator on (\d+) repositor(y|ies)/, "$1 個倉庫的成員和協作者"],
        [/Are you positive you want to leave ([^ ]+)\? You will lose access to all repositories and teams./, "您確定要離開 $1 嗎？您將失去對所有倉庫和團隊的訪問權。"], // 設置 - 組織 離開按鈕 提醒
        [/Are you positive you want to leave ([^ ]+)\? You will lose access to all repositories./, "您確定要離開 $1 嗎？您將失去對所有倉庫的訪問權。"], // 設置 - 組織 離開按鈕 提醒
    ],
};

I18N.zh["settings/enterprises"] = { // 設置 - 企業版
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // 企業版 https://github.com/settings/enterprises
        "Enterprises": "企業版",
        "You don't have any enterprises": "您還沒有任何企業版",
        "Designed for businesses or teams who collaborate on GitHub.com": "專為在 GitHub.com 上協作的企業或團隊而設計",

        "Start free trial": "開啟免費體驗",
        "Learn more about enterprises": "了解更多關於企業版信息",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/blocked_users"] = { // 設置 - 黑名單
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Blocked users 黑名單 https://github.com/settings/blocked_users
            "Block a user": "拉黑用戶",
            "Blocking a user prevents the following on all your repositories:": "拉黑用戶可以防止所有倉庫中的以下操作：",
            "opening or commenting on issues or pull requests": "打開或評論議題或拉取請求",
            "starring, forking, or watching": "加星標、復刻、關注",
            "adding or editing wiki pages": "添加或編輯 Wiki 頁面",
            "Additionally, blocked users are not able to:": "此外，被拉黑用戶無法：",
            "invite you as a collaborator to their repositories": "邀請您作為其倉庫的協作者",
            "follow your account’s public activity": "關注您的帳戶的公共活動",
            "send you notifications by @mentioning your username in public repositories": "在公共倉庫中通過 @您 向您發送通知",
            "Search by username, full name or email address": "搜索用戶名、全名、或電子郵箱",
                "Learn more about blocking a user": "了解更多關於拉黑用戶的信息",
            "Block user": "拉黑用戶",
            "You have not blocked any users.": "您還沒有拉黑任何用戶。",
            "Unblock": "取消拉黑",
            "Warn me when a blocked user is a prior contributor to a repository": "請警告我，當被拉黑的用戶是倉庫的先前貢獻者時",
            "On repositories you haven’t contributed to yet, we’ll warn you when a user you’ve blocked has previously made contributions.": "在您還沒有貢獻的倉庫裡，當您拉黑的用戶之前有貢獻時，我們會警告您。",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/interaction_limits"] = { // 設置 - 互動限制
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Interaction limits 互動限制 https://github.com/settings/interaction_limits
            "Temporary interaction limits": "臨時互動限制",
            "Temporarily restrict which external users can interact with your repositories (comment, open issues, or create pull requests) for a configurable period of time.": "在配置的時間段內，可臨時限制哪些外部用戶與您的倉庫互動（評論、打開議題或創建拉取請求）。",
            "This may be used to force a \"cool-down\" period during heated discussions or prevent unwanted interactions.": "可用於在激烈討論期間，強制進入 “冷靜” 期或防止不必要的互動。",
            "Interaction limits may already exist in your account's": "互動限制可能已經存在於您的",
            "public repositories": "公開倉庫",
            ". Any changes here will override those limits.": " 的設置中。此處的全局設置將覆蓋那些倉庫的局部設置。",
            "Limit to existing users": "僅限現有用戶",
                "Users that have recently created their account will be unable to interact with your repositories.": "最近創建帳戶的用戶將無法與您的倉庫互動。",
            "Limit to prior contributors": "僅限于先前的貢獻者",
                "Users that have not previously committed to the default branch of one of your repositories will be unable to interact with that repository.": "以前從未提交到您某個倉庫默認分支的用戶將無法與該倉庫互動。",
            "Limit to repository collaborators": "僅限倉庫協作者",
                "Users that are not collaborators of one of your repositories will not be able to interact with that repository.": "不是您某個倉庫的協作者將無法與該倉庫互動。",
            "New users": "新用戶",
            "Users": "用戶",
            "Contributors": "貢獻者",
            "Collaborators": "協作者",
            // 交互限制時間 下拉菜單
            "Enable interaction limits for:": "啟用交互限制：",
            "24 hours": "24 小時",
            "3 days": "3 天",
            "1 week": "1 周",
            "1 month": "1 個月",
            "6 months": "6 個月",
            // 頂部提醒
            "User interaction limit settings saved.": "用戶交互限制設置已保存。",

    },
    "regexp": [ // 正則翻譯
        [/Enabled with (.+) remaining./, "已啟用，還剩 $1。"],
    ],
};

I18N.zh["settings/code_review_limits"] = { // 設置 - 程式碼審查限制
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Code review limits 程式碼審查限制 https://github.com/settings/code_review_limits
            "Restrict users who are permitted to approve or request changes on pull requests in your public repositories.": "限制允許批准或請求更改公共倉庫中拉取請求的用戶。",
            "Code review limits may already be specified by individual repositories. Any changes here will override those limits until unset.": "程式碼審查限制可能已經由各個倉庫指定。此處的任何更改都將覆蓋這些限制，直至取消設置。",
            "Code review limits are currently managed individually for all repositories. Enable limits to permit only users who have explicitly been granted access to each repository to submit reviews that \"approve\" or \"request changes\". Remove limits to allow all users to submit pull request reviews. All users able to submit comment pull request reviews will continue to be able to do so.": "目前，所有倉庫程式碼審查限制都是單獨管理的。啟用限制，只允許明確授予每個倉庫訪問權的用戶提交 “批准” 或 “請求更改” 的審查。刪除限制，允許所有用戶提交拉取請求審查。所有能夠提交評論拉取請求審查的用戶將繼續能夠這樣做。",
            "Limit reviews on all repositories": "限制對所有倉庫的審查",
            "Remove review limits from all repositories": "取消對所有倉庫的審查限制",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/repositories"] = { // 設置 - 倉庫
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Repository 倉庫 https://github.com/settings/repositories
            "Repository default branch": "倉庫默認分支",
            "Choose the default branch for your new personal repositories. You might want to change the default name due to different workflows, or because your integrations still require “master” as the default branch name. You can always change the default branch name on individual repositories.": "為您新的個人倉庫選擇默認的分支。由於工作流程的不同，或者由於您的集成仍然需要 “master” 作為默認分支名，您可能想改變默認名稱。您可以隨時改變個人倉庫的默認分支名稱。",
            "Learn more about default branches.": "了解更多關於默認分支的信息。",
            "Update": "更新",
            "Deleted repositories": "刪除的倉庫",
            "Leave": "離開",

    },
    "regexp": [ // 正則翻譯
        [/(\d+) collaborators?/, "$1 位合作者"]
    ],
};

I18N.zh["settings/deleted_repositories"] = { // 設置 - 倉庫 - 刪除的倉庫
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // 刪除的倉庫 https://github.com/settings/deleted_repositories
            "Deleted repositories": "刪除的倉庫",
            "It may take up to an hour for repositories to be displayed here. You can only restore repositories that are not forks, or have not been forked.": "倉庫可能需要一個小時的時間才能顯示在這裡。您只能恢復不是復刻或沒有被復刻的倉庫。",
            "Learn more about restoring deleted repositories": "了解更多關於恢復已刪除倉庫的信息",

            "These repositories were deleted, but can't be restored by you. Contact support if you want to restore them.": "這些倉庫已被刪除，但您無法恢復。如果您想恢復它們，請聯繫 GitHub 支持人員。",

            "Deleted": "刪除於",
            // [/by/, "由"], // 刪除的倉庫
            "Restore": "恢復",
            "Queue…": "排隊中…",
            "Done!": "完成!",

            // 恢復倉庫 對話框
            // [/Are you sure you want to restore ([^ ]+)?/, "您確定要恢復 $1 嗎？"],
            "This repository will be in a private state when it is restored. To change this state, go to settings once the repo is restored.": "此倉庫在恢復時將處於私有狀態。要更改此狀態，請在倉庫恢復後轉到設置。",
            "Any team or collaborator permissions that previously existed for this repository will not be restored. If you require specific team or collaborator permissions, you will need to configure them in settings.": "此倉庫以前存在的任何團隊或協作者的權限將不會被恢復。如果您需要特定的團隊或協作者權限，則需要在設置中配置。",
            "I understand, restore this repository": "我明白了，依然恢復該倉庫。",

    },
    "regexp": [ // 正則翻譯
        [/No recoverable repositories were found for ([^ ]+)\./, "沒有找到 $1 的可恢復倉庫。"],
        [/by/, "由"], // 刪除的倉庫
        [/Are you sure you want to restore ([^ ]+)?/, "您確定要恢復 $1 嗎？"], // 刪除的倉庫
    ],
};

I18N.zh["settings/codespaces"] = { // 設置 - 程式碼空間
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // 程式碼空間 https://github.com/settings/codespaces
            "Dotfiles": "點文件",
            "Automatically install dotfiles": "自動安裝點文件",
            "Codespaces can automatically install your dotfiles into every codespace you create.": "程式碼空間可以自動將您點文件安裝到您創建的每個程式碼空間。",
            "Learn how to set up your dotfiles for Codespaces.": "了解如何為程式碼空間設置點文件。",
            "Search for a repository": "搜索倉庫",

            "Codespaces secrets": "程式碼空間機密",
            "New secret": "新建機密",
            "Development environment secrets are environment variables that are": "開發環境機密是",
            "encrypted": "被加密的環境變量",
            ". They are available to any codespace you create using repositories with access to that secret.": "。它們可用於您使用訪問該機密的倉庫創建的任何程式碼空間。",
            "There are no Codespaces secrets.": "尚無程式碼空間機密",
            "Secrets created at the user level can be shared with specified repositories.": "在用戶級別創建的機密可以與指定的倉庫共享。",

            // [/(\d+) repositor(y|ies)/, "$1 個倉庫"],
            "Updated": "更新於",
            // [/Are you sure you want to delete ([^ ]+)\?/, "您確定要刪除 $1 嗎？"],

            "GPG verification": "GPG 驗證",
                "Codespaces can have GPG commit signing capabilities so that GitHub can verify that commits made in the codespace come from a trusted source. When enabled, this setting will be applied to your list of trusted repositories.": "程式碼空間可以具有 GPG 提交簽名功能，以便 GitHub 可以驗證程式碼空間中的提交是來自受信任的來源。啟用後，該設置將被應用到您的受信任倉庫列表中。",
                // "Enabled": "啟用",
                    "GPG signing will be available in Codespaces": "GPG 簽名將在程式碼空間中可用",

            "Settings Sync": "設置同步",
                "By enabling, your codespaces will be able to pull from VS Code Settings Sync service and push only for the trusted repositories you specify. Only enable this for repositories that you trust.": "通過啟用，您的程式碼空間將能夠從 VS Code 設置同步服務中提取數據，並僅推送您指定的受信任倉庫。請只對您信任的倉庫啟用此功能。",
                // "Enabled": "啟用",
                    "VS Code Settings Sync will be available in Codespaces": "VS Code 設置同步將在程式碼空間中可用",

            "Trusted repositories": "受信任倉庫",
                "The following repositories will be referenced by GPG verification and Settings Sync.": "以下倉庫將被 GPG 驗證和設置同步所引用。",

                "All repositories": "所有倉庫",
                    "GPG signing and VS Code Settings Sync will be available for codespaces for all repositories": "GPG 簽名和 VS Code 設置同步將適用於所有倉庫的程式碼空間",
                "Selected repositories": "選定的倉庫",
                    "GPG signing and VS Code Settings Sync will be available for codespaces from the selected repositories": "GPG 簽名和 VS Code 設置同步將適用於選定倉庫的程式碼空間",
                    "Select repositories": "選擇倉庫",
                    // [/Selected (\d+) repositor(y|ies)./, "選定 #1 個倉庫"],
                    "GPG and VS Code Settings Sync will be available for Codespaces from these repositories.": "GPG 和 VS Code 設置同步將可用於這些倉庫的程式碼空間。",

            "Access and security": "訪問和安全",
            "Deprecated": "棄用",
            "Codespaces you create for your personal account can either be restricted to accessing the repository it was opened for, or granted read access to other repositories you own.": "您為您個人帳戶創建的程式碼空間可以限制訪問已啟用的倉庫或您其他被賦予讀取權限的倉庫",
            "Disabled": "禁用",
            "Limit access of personal Codespaces to the repository they were opened for": "限制個人程式碼空間只能訪問對其打開的倉庫",
            "All Codespaces can access other repositories I own": "所有程式碼空間都可以訪問我擁有的其它倉庫",
            "Personal Codespaces created for specific repositories can access other repositories I own": "為特定倉庫創建的個人程式碼空間可以訪問我擁有的其它倉庫",

            "Editor preference": "編輯器偏好",
                // VS code
                    "Connect to the cloud from your local desktop client. Requires": "從本地桌面客戶端連接到雲。要求",
                    "with the": "安裝",
                    "GitHub Codespaces": "GitHub 程式碼空間",
                    "extension.": "插件。",

                "Visual Studio Code for the Web": "網絡版的 Visual Studio Code",
                    "Edit and preview changes straight from the browser.": "直接從瀏覽器編輯和預覽更改。",

                // "JetBrains Gateway": "",
                    "Connect to the cloud from your local desktop client. Requires the": "從本地桌面客戶端連接到雲。要求",
                    "plugin, and a JetBrains license.": "插件和 JetBrains 許可證。",

                // JupyterLab
                    "Edit and run notebooks from the browser with JupyterLab.": "使用 JupyterLab 從瀏覽器編輯和運行筆記本。",

            "Default idle timeout": "默認空閒超時",
                "A codespace will suspend after a period of inactivity. You can specify a default idle timeout value, which will apply to all codespaces created after the default is changed. You will be charged for the entire time your codespace is running, even if it is idle. The maximum value is": "一段時間不活動後，程式碼空間將暫停。您可以指定一個默認的空閒超時值，該值將應用於更改默認值後創建的所有程式碼空間。您將在程式碼空間運行的整個過程中付費，即使它是空閒的。最大值是",
                "minutes (4 hours).": "分鐘（4小時）。",
                "minutes": "分鐘",

            "Default retention period": "默認保留期",
                "Inactive codespaces are automatically deleted 30 days after the last time they were stopped. A shorter retention period can be set, and will apply to all codespaces created going forward. The default and maximum value is": "不活躍的程式碼空間在上次停止後 30 天自動刪除。可以設置更短的保留期，並將應用於以後創建的所有程式碼空間。默認值和最大值是",
                "days.": "天。",
                "Learn about retention setting": "了解關於保留時間的設置",
                "days": "天",

            "Host image version preference": "主機鏡像版本偏好",
                "The host image defines the operating system in which development containers run. These images receive periodic upgrades for security, functionality, and performance. GitHub Codespaces offers early access to beta images to ensure compatibility with existing development container configurations. Any codespace created or resumed after changing this setting will use the specified image configuration.": "主機鏡像定義了開發容器運行的操作系統。這些鏡像會定期進行安全、功能和性能升級。GitHub 程式碼空間提供對測試版鏡像的早期訪問，以確保與現有開發容器配置的兼容性。更改此設置後創建或恢復的程式碼空間都將使用指定的鏡像配置。",
                "Learn more about host images": "了解更多關於主機鏡像的信息",
                "Stable": "穩定版",
                    "Always use the latest stable configuration.": "始終使用最新的穩定版。",
                "Beta": "測試版",
                    "Use a beta image configuration when available. Otherwise, use the latest stable configuration.": "如果可用，請使用測試版映像配置。否則，請使用最新的穩定配置。",

            "Region": "地區",
                "Your default region will be used to designate compute resources to your codespaces. GitHub can set your region automatically based on your location, or you can set it yourself. Codespaces are deployed to a subset of Azure regions.": "您的默認區域將被用來為您的程式碼空間指定計算資源。 GitHub 可以根據您的位置自動設置您的區域，您也可以自己設置。程式碼空間部署到 Azure 區域的子集。",
                "Set automatically": "自動設置",
                "We will determine the closest available region based on your location (IP address) at codespace creation time.": "我們將在創建程式碼空間時根據您的位置（IP地址）確定最近的可用區域。",
                "Set manually": "手動設置",
                "Choose your default region": "選擇您的默認區域",
                    "United States": "美國",
                        "US West": "美國西部",
                        "US East": "美國東部",
                    "Europe": "歐洲",
                        "Europe West": "歐洲西部",
                    "Asia Pacific": "亞太地區",
                        "Southeast Asia": "東南亞",
                    "Australia": "澳大利亞",

            // 頂部提醒
                "Secret added.": "機密已添加。",
                "Secret deleted.": "機密已刪除。",
                "Secret updated.": "機密已更新。",

        // 程式碼空間 機密新建 https://github.com/settings/codespaces/secrets/new
            "/ New secret": "/ 新建機密",
            "Add secret": "添加機密",
                "Adding…": "添加中…",

            "Name": "名稱",
                "YOUR_SECRET_NAME": "您的機密名稱",
                "Secret name is required and must not start with GITHUB": "機密名稱是必需的，並且不能以 GITHUB 開頭",
            "Value": "值",

            "Repository access": "倉庫權限",
            "Available to": "適用於",
            "repository": "倉庫",
            "This secret will not be active until at least 1 repository is selected.": "至少選擇 1 個倉庫，否則此密鑰不會處於活動狀態。",

        // 編輯機密 https://github.com/settings/codespaces/secrets/<機密名稱>/edit
            "/ Update secret": "/ 更新機密",
            "Secret values are encrypted and cannot be displayed, but you can": "機密值已加密，無法顯示，但您可以",
            "enter a new value.": "輸入一個新值。",
            "Update secret": "更新機密",
                "Updating…": "更新中…",
            "Save changes": "保存更改",

    },
    "regexp": [ // 正則翻譯
        [/Selected (\d+) repositor(y|ies)./, "選定 $1 個倉庫"],
        [/(\d+) repositor(y|ies)/, "$1 個倉庫"],
        [/Are you sure you want to delete ([^ ]+)\?/, "您確定要刪除 $1 嗎？"],
    ],
};

I18N.zh["settings/packages"] = { // 設置 - 軟件包
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],
        ...I18N.zh["orgs-settings-menu"]["static"], // 組織設置

        // Packages 軟件包 https://github.com/settings/packages
            "Packages permissions": "軟件包權限",

            // 組織設置
                "Package creation": "包的創建",
                "Members will be able to publish only the selected visibility types for packages and containers. Outside collaborators can never publish packages or containers.": "成員只能發布選定可見性類型的軟件包和容器。外部協作者永遠不能發布軟件包或容器。",
                "Public": "公共",
                    "Members will be able to create public packages, visible to anyone.": "成員將能夠創建公共包，對任何人都可見。",
                "Private": "私有",
                    "Members will be able to create private packages, visible to organization members with permission.": "成員將能夠創建私有包，對具有權限的組織成員可見。",
                "Internal": "內部",
                    "Members will be able to create internal packages, visible to all organization/enterprise members.": "成員將能夠創建內部包，對所有組織/企業成員可見。",

            "Default Package Setting": "默認軟件包設置",
            "Default package settings": "默認軟件包設置", // 組織
            "This setting will be applied to new Container, npm, rubygems and NuGet packages.": "此設置將應用於新的容器、npm、rubygems 和 NuGet 軟件包。",
            "Inherit access from source repository": "從源倉庫繼承訪問權限",
            "Save": "保存",

            "Deleted Packages": "刪除的軟件包",
            "Deleted packages": "刪除的軟件包", // 組織
            "These are packages that have been previously deleted belonging to you. You can restore a package deleted within the last 30 days.": "這些是先前已刪除的屬於您的軟件包。您可以恢復在過去 30 天內刪除的包。",
            "These are packages that have been previously deleted belonging to this organization. You can restore a package deleted within the last 30 days.": "這些是先前已刪除的屬於您組織的軟件包。您可以恢復在過去 30 天內刪除的包。", // 組織設置
            "Search deleted packages": "搜索已刪除的軟件包",

    },
    "regexp": [ // 正則翻譯
        [/No recoverable packages were found for ([^ ]+)./, "沒有找到 $1 的可恢復包。"],
    ],
};
I18N.zh["orgs/settings/packages"] = I18N.zh["settings/packages"];

I18N.zh["settings/copilot"] = { // 設置 - GitHub Copilot
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // GitHub Copilot https://github.com/settings/copilot
            "Trained on billions of lines of code,": "經過數十億行程式碼的訓練，",
            "turns natural language prompts into coding suggestions across dozens of languages.": "將自然語言提示轉換為多種語言的編碼建議。",
            "Start free trial": "開始免費試用",
            "After that $10/month": "結束試用後 $10 / 月",
            "Get Copilot from an organization": "從組織中獲取 GitHub Copilot",
            "Organizations can provide their members (including you) and their teams access to GitHub Copilot.": "組織可以為其成員（包括您）及其團隊提供使用 GitHub Copilot 的權限。",
            "Organizations owned by enterprise accounts": "企業帳戶擁有的組織",
            "are not currently listed.": "目前未包含在此計劃中。",
            "You do not belong to any organizations.": "您不屬於任何組織。",
            "Create an organization": "創建一個組織",

            "Ask admin for access": "向管理員請求訪問權限",
            "Requesting...": "請求中...",
            "Remove request": "撤銷請求",
            "Cancelling...": "撤銷中...",
            "Buy Copilot Business": "購買 GitHub Copilot 企業版",
            "Owner": "所有者",

    },
    "regexp": [ // 正則翻譯
        [/Outside collaborator on (\d+) repositor(y|ies)/, "$1 個倉庫的外部協作者"],
        [/Member and collaborator on (\d+) repositor(y|ies)/, "$1 個倉庫的成員和協作者"],
    ],
};

I18N.zh["settings/pages"] = { // 設置 - GitHub Pages
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],
        ...I18N.zh["orgs-settings-menu"]["static"], // 組織設置菜單

        // GitHub Pages https://github.com/settings/pages
            "Verified domains": "經驗證的域名",
            "Add a domain": "添加域名",
            "There are no verified domains.": "暫無經驗證的域名",
            "There are no verified domains for this organization.": "此組織暫無經驗證的域名", // 組織設置
            "Verify domains to restrict who can publish GitHub Pages on them.": "驗證域名以限制誰可以在上面發布 GitHub Pages。",
            "One of your domains is unverified. Please verify it to prevent others from claiming it for their Pages sites.": "您添加的域名之一未經驗證，請對其進行驗證，以防止其他人在其主頁網站上聲明該信息。",
            "Please verify your domain": "請驗證您的域名",
            "Continue verifying": "繼續驗證",
            "Review verification steps": "查看驗證步驟",

            // 域名刪除對話框
            "Delete verified domain": "刪除已驗證的域名",
            "This is a destructive action. Your GitHub Pages sites may lose their custom domains.": "這是一個破壞性的操作，您的 GitHub Pages 網站可能會失去自定義域名。",
            "Your GitHub Pages sites may be unpublished from their custom domains if another organization claims ownership of this domain.": "如果其他組織聲稱擁有此域名的所有權，您的 GitHub Pages 網站可能會被從此自定義域名中取消發布。",
            "Please type": "請輸入",
            "to confirm.": "進行確認",
            "I understand, delete verified domain": "我明白了，依然刪除已驗證的域名",

        // GitHub Pages - 添加域名 https://github.com/settings/pages_verified_domains/new
            "Add a verified domain": "經驗證的域名",
            "What domain would you like to add?": "您想添加什麼域名？",
            "Add domain": "添加域名",
            "Domain name has already been added": "域名已添加",
            "Add a DNS TXT record": "添加 DNS TXT 記錄",
            "Before we can verify": "在我們驗證",
            ", you'll need to complete these steps:": " 之前，您需要完成以下步驟：",
            "Create a TXT record in your DNS configuration for the following hostname:": "在 DNS 配置中為以下主機創建 TXT 記錄：",
            "Use this code for the value of the TXT record:": "使用以下程式碼作為 TXT 記錄的值：",
            "Wait until your DNS configuration changes. This could take up to 24 hours to propagate.": "等待您的 DNS 變更解析生效，最長可能需要 24 小時。",
            "Verify": "驗證",
            "Copy verification steps": "複製驗證步驟",
            "Your domain is verified. No further action is needed.": "您的域名已驗證，無需其它操作。",
    },
    "regexp": [ // 正則翻譯
        [/Successfully verified/, "已成功驗證"],
    ],
};
I18N.zh["orgs/settings/pages"] = I18N.zh["settings/pages"];

I18N.zh["settings/replies"] = { // 設置 - 快捷回覆
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Saved replies 快捷回覆 https://github.com/settings/replies
            "Saved replies are re-usable text snippets that you can use throughout GitHub comment fields. Saved replies can save you time if you’re often typing similar responses.": "快捷回覆是可重複使用的文本片段，您可以在整個 GitHub 評論區使用。如果您經常輸入類似的回覆，快捷回覆可以節省您的時間。",
            "Learn more about working with saved replies": "了解更多關於使用快捷回覆的信息",
            "No saved replies yet.": "暫時沒有快捷回覆。",
            "Add a saved reply": "添加快捷回覆",
            "Saved reply title": "快捷回覆的標題",
            "Add a short title to your reply": "為您的快捷回覆添加簡短的標題",
            "Add your saved reply": "添加您的快捷回覆",
            "Add saved reply": "添加快捷回覆",
            "Your saved reply was created successfully.": "您的快捷回覆已成功創建。",
            "Edit saved reply": "編輯快捷回覆",
            "Update saved reply": "更新快捷回覆",
            "Your saved reply was updated successfully.": "您的快捷回覆已成功更新。",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/security_analysis"] = { // 設置 - 程式碼安全性與分析
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // 程式碼安全性與分析 https://github.com/settings/security_analysis
            "Security and analysis features help keep your repositories secure and updated. By enabling these features, you're granting us permission to perform read-only analysis on your repositories.": "安全和分析功能有助於確保您的倉庫安全和更新。通過啟用這些功能，您授予我們對您的倉庫執行只讀分析的權限。",

            "User": "用戶",
                "Security and analysis features help keep you secure and updated, wherever you are.": "無論您身在何處，安全和分析功能都可以幫助您保持安全並及時更新。",

                "Keep your public pushes safe with push protection": "通過推送保護確保您的公共推送安全",
                "GitHub will enable push protection for all GitHub Free individuals in January 2024. Enable below to try it now in beta.": "GitHub 將於 2024 年 1 月為所有 GitHub 免費用戶啟用推送保護。在下面啟用以立即在測試版中嘗試。",
                    "Dismiss": "忽略",

                "Push protection for yourself": "啟用推送保護",
                    "Block commits that contain": "阻止提交，包含",
                    "supported secrets": "受支持的機密",
                    "across all public repositories on GitHub.": "涵蓋 GitHub 上的所有公共倉庫。",

                    // 對話框
                        "Enable push protection for yourself": "為自己啟用推送保護",
                            "Pushes that contain secrets will be blocked on public repositories. You'll have the option to bypass the block.": "包含機密的推送將在公共倉庫中被阻止。您可以選擇繞過該阻止。",
                            "Enable push protection": "啟用推送保護",

                        "Disable push protection for yourself": "為自己禁用推送保護",
                            "Pushes that contain secrets will not be blocked.": "包含機密的推送將不會被阻止。",
                            "Disable push protection": "禁用推送保護",

                        // 頂部提醒
                            // [/Security settings updated for ([^ ]+)\'s repositories./, "更新了 $1 的倉庫的安全設置。"],

            // 倉庫
                "Security and analysis features help keep your repositories secure and updated.": "安全和分析功能可幫助您確保倉庫的安全和更新。",

            "Disable all": "禁用全部",
            "Enable all": "啟用全部",

            "Private vulnerability reporting": "私下漏洞報告",
                "Allow your community to privately report potential security vulnerabilities to maintainers and repository owners.": "允許您的社區向維護者和倉庫所有者私下報告潛在的安全漏洞。",
                "Learn more about private vulnerability reporting": "了解更多關於私下漏洞報告的信息",
                "Automatically enable for new public repositories": "為新公共倉庫自動啟用",

                // 對話框
                "Disable private vulnerability reporting": "禁用私下漏洞報告",
                // [/You're about to disable private vulnerability reporting on all public repositories in ([^ ]+)./, "您即將在 $1 的所有公共倉庫中禁用私下漏洞報告。"],
                "Enable by default for new public repositories": "默認啟用新公共倉庫",

                "Enable private vulnerability reporting": "啟用私下漏洞報告",
                // [/You're about to enable private vulnerability reporting on all public repositories in ([^ ]+)./, "您即將在 $1 的所有公共倉庫中啟用私下漏洞報告。"],

            "Dependency graph": "依賴關係圖",
                "Understand your dependencies.": "了解您的依賴項。",
                "Automatically enable for new private repositories": "為新私有倉庫自動啟用",

                // 對話框
                    "Enable dependency graph": "啟用依賴關係圖",
                        "You're about to enable dependency graph on all your private repositories.": "您即將啟用您所有私有倉庫上的依賴關係圖。",
                        "Enable by default for new private repositories": "默認為新私有倉庫啟用",

                    "Disable dependency graph": "禁用依賴關係圖",
                        "You're about to disable dependency graph on all your private repositories. This will also disable Dependabot alerts and Dependabot security updates on those repositories.": "您即將禁用您所有私有倉庫上的依賴關係圖。這也將禁用這些倉庫的 Dependabot 警報和 Dependabot 安全更新。",

            // Dependabot
                "Keep your dependencies secure and up-to-date.": "保持您的依賴關係的安全和最新",
                "Learn more about Dependabot": "了解更多關於 Dependabot 的信息",

                "Dependabot alerts": "Dependabot 警報",
                    "Receive alerts for vulnerabilities that affect your dependencies and manually generate Dependabot pull requests to resolve these vulnerabilities.": "接收影響您的依賴關係的漏洞警報，並手動生成 Dependabot 拉取請求以解決這些漏洞。",
                        "Configure alert notifications": "配置警報通知",
                    "Automatically enable for new repositories": "為新倉庫自動啟用",

                    // 對話框
                        "Enable Dependabot alerts": "啟用 Dependabot 警報",
                            "You're about to enable Dependabot alerts on all your repositories. Alerts require the dependency graph, so we'll also turn that on for all repositories. No notifications will be sent while Dependabot alerts are being enabled.": "您即將啟用您所有倉庫上的 Dependabot 警報。Dependabot 警報需要依賴關係圖，因此我們還將為所有倉庫開啟它。啟用 Dependabot 警報時不會發送任何通知。",
                                "Enable by default for new repositories": "默認為新倉庫啟用",

                        "Disable Dependabot alerts": "禁用 Dependabot 警報",
                            "You're about to disable Dependabot alerts on all your repositories. This will also disable Dependabot security updates on those repositories.": "您即將禁用您所有倉庫上的 Dependabot 警報。這也將禁用這些倉庫的 Dependabot 安全更新。",

                "Dependabot security updates": "Dependabot 安全更新",
                    "Enabling this option will result in Dependabot automatically attempting to open pull requests to resolve every open Dependabot alert with an available patch.": "啟用後，Dependabot 會自動嘗試打開拉取請求，以使用可用補丁解決每個打開的 Dependabot 警報。",
                        "Dependabot rules": "Dependabot 規則",

                    // 對話框
                        "Enable Dependabot security updates": "啟用 Dependabot 安全更新",
                            "You're about to enable Dependabot security updates on all your repositories. Dependabot security updates require the dependency graph and Dependabot alerts, so we'll also turn that on for all repositories.": "您即將啟用您所有倉庫上的 Dependabot 安全更新。Dependabot 安全更新需要依賴關係圖和 Dependabot 警報，因此我們也將為所有倉庫啟用他們。",

                        "Disable Dependabot security updates": "禁用 Dependabot 安全更新",
                            "You're about to disable Dependabot security updates on all your repositories.": "您即將禁用您所有倉庫上的 Dependabot 安全更新。",

                "Grouped security updates": "分組安全更新",
                    "Groups all available updates that resolve a Dependabot alert into one pull request (per package manager and directory of requirement manifests). This option may be overridden by group rules specified in dependabot.yml -": "將解決可靠警報的所有可用更新分組為一個拉取請求（每個包管理器和需求清單目錄）。此選項可能會被 dependentabot.yml 中指定的分組規則覆蓋 -",
                    "learn more here": "了解更多",

                    // 對話框
                        "Enable grouped security updates": "啟用分組安全更新",
                            "You're about to enable grouped security updates on all your repositories. Grouped security updates require the dependency graph, Dependabot alerts and Dependabot security updates, so we'll also turn that on for all repositories.": "您即將啟用您所有倉庫上的分組安全更新。分組安全更新需要依賴關係圖、Dependabot 警報和Dependabot 安全更新，因此我們也將為所有倉庫啟用他們。",

                        "Disable grouped security updates": "禁用分組安全更新",
                            "You're about to disable grouped security updates on all your repositories.": "您即將禁用您所有倉庫上的分組安全更新。",

            "Secret scanning": "機密掃描",
                "Receive alerts on GitHub for detected secrets, keys, or other tokens.": "在 GitHub 上接收有關檢測到的機密、密鑰或其他令牌的警報。",
                "GitHub will always send alerts to partners for detected secrets in public repositories.": "GitHub 會隨時向合作夥伴發送公共倉庫中檢測到的機密警報。",
                "Learn more about partner patterns": "了解更多關於合作夥伴模式的信息",

                // 對話框
                    "Enable secret scanning for eligible repositories?": "啟用符合條件的倉庫的機密掃描？",
                        "This will turn on secret scanning for all public repositories.": "這將為所有公共倉庫啟用機密掃描。",
                        "Enable for eligible repositories": "啟用符合條件的倉庫",

                    "Disable secret scanning?": "禁用機密掃描？",
                        "This will disable secret scanning on all repositories where it is enabled.": "這將禁用所有倉庫的機密掃描。",
                        "Disable secret scanning": "禁用機密掃描",

                "Push protection": "推送保護",
                    // "Block commits that contain": "阻止提交，包含",
                    // "supported secrets": "受支持的機密",
                    "Automatically enable for repositories added to secret scanning": "自動啟用對添加到機密掃描的倉庫進行掃描",

                    // 對話框
                        "Enable push protection for eligible repositories?": "啟用符合條件的倉庫的推送保護？",
                            "This will turn on push protection for all repositories that have secret scanning enabled.": "這將為所有已啟用秘密掃描的倉庫啟用推送保護。",

                        "Disable push protection?": "禁用推送保護？",
                            "This will disable push protection on all repositories where it is enabled.": "這將禁用所有倉庫的推送保護。",
                            "You can still enable push protection at the repository level.": "您仍然可以在倉庫級別啟用推送保護。",

    },
    "regexp": [ // 正則翻譯
        [/You're about to disable private vulnerability reporting on all public repositories in ([^ ]+)./, "您即將在 $1 的所有公共倉庫中禁用私下漏洞報告。"],
        [/You're about to enable private vulnerability reporting on all public repositories in ([^ ]+)./, "您即將在 $1 的所有公共倉庫中啟用私下漏洞報告。"],
        [/Security settings updated for ([^ ]+)\'s repositories./, "更新了$1 的倉庫的安全設置。"],
    ],
};

I18N.zh["settings/installations"] = { // 設置 - 應用/安裝的 GitHub 應用
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],
        ...I18N.zh["orgs-settings-menu"]["static"],

        "Installed GitHub Apps": "安裝的 GitHub 應用",
        "Authorized GitHub Apps": "授權的 GitHub 應用",
        "Authorized OAuth Apps": "授權的 OAuth 應用",

        // 安裝的 GitHub 應用 https://github.com/settings/installations
            // 頂部提醒
                // [/You're all set! (.*) has been uninstalled./, "一切就緒！$1 已被卸載。"],
                // [/Okay, (.*) was installed on the (@[^ ]+) account./, "好的，$1 已安裝在 $2 賬戶上。"],
                // [/Okay, (.*) was updated for the (@[^ ]+) account./, "好的，$1 帳戶的 $1 已更新。"],

            // "Installed GitHub Apps": "安裝的 GitHub 應用",
                "GitHub Apps augment and extend your workflows on GitHub with commercial, open source, and homegrown tools.": "GitHub 應用通過商業、開源和自主開發的工具來增強和擴展您在 GitHub 上的工作流程。",

            "Pending GitHub Apps installation requests": "待處理的 GitHub 應用安裝請求", // 組織設置
                "Members in your organization can request that GitHub Apps be installed. Pending requests are listed below.": "您組織中的成員可以請求安裝 GitHub 應用。下面列出了待處理的請求。",

            "No installed applications": "沒有已安裝的應用",
            "You have no applications installed on this account.": "此帳戶上沒有安裝任何應用。",
            "Configure": "配置",
            "Suspended": "已暫停",

        // 安裝的 GitHub 應用設置 https://github.com/settings/installations/<id>
            // 頂部提醒
                // [/Your installation was suspended by you on/, "您的安裝已暫停於"],
                "Your app has been unsuspended": "您的應用已被取消暫停",

            "Installed": "安裝於",
            "Developed by": "開發者",
            "App settings": "應用設置",
            "Permissions": "權限",
                // [/is requesting an update to its permissions./, "正在請求更新其權限。"],
                "Review request": "審核請求",

            "Repository access": "倉庫訪問權限",
            "All repositories": "所有倉庫",
                "This applies to all current": "這適用於所有當前",
                "and": "和",
                "future repositories owned by the resource owner.": "資源所有者未來擁有的倉庫。",
                "Also includes public repositories (read-only).": "還包括公共倉庫（只讀）。",
            "Only select repositories": "僅選定的倉庫",
                "Select at least one repository.": "至少選擇一個倉庫。",
                "Also includes public repositories (read-only).": "還包括公共倉庫（只讀）。",
                // [/Selected (\d+) repositor(y|ies)./, "選擇了 $1 個倉庫。"],
            "Select repositories": "選擇倉庫",
            "Search for a repository": "搜索倉庫",

            "Danger zone": "危險區",
            "Suspend your installation": "暫停使用",
            "This will block the app access to your resources.": "這將阻止應用訪問您的資源。",
            "Suspend": "暫停",
                // 取消按鈕 提醒信息
                "Are you sure you want to suspend this GitHub App?": "您確定要暫停此 GitHub 應用嗎？",
            "This will remove the app and revoke access to all resources.": "這將刪除應用並撤銷對所有資源的訪問權限。",
            // [/Uninstall "(.*)"/, "卸載 “$1”"],
            "Uninstall": "卸載",
                // 取消按鈕 提醒信息
                // [/This action cannot be undone. Are you sure you want to uninstall this GitHub App from (\d+) repositor(y|ies)?/, "此操作無法撤消。您確定要從 1 個倉庫中卸載此 GitHub 應用嗎？"],
            "Unsuspend your installation": "取消暫停",
                "This grant the app access to your resources.": "這將授予應用訪問您的資源。",
                "Unsuspend": "取消暫停",

            "Report abuse": "舉報濫用",
            "Revoke": "撤銷",
            "Read more about connecting with third-party applications at": "了解更多關於與第三方應用連接的信息，請訪問",
            "GitHub Help": "GitHub 幫助",

        // 安裝的 GitHub 應用授權更新 https://github.com/settings/installations/<id>/permissions/update
            // [/The (.*) app by/, "$1 應用（由"],
            "is requesting updated permissions": "創建）正在請求更新權限",

            "Read and write": "讀寫權限",
            "Read-only": "只讀權限",
            "Admin": "管理員權限",
            "access to": "針對",
            "New request": "新請求",
            "Show unchanged permissions": "顯示未更改的權限",
            "Hide unchanged permissions": "隱藏未更改的權限",
            "Accept new permissions": "接受新權限",
            // [/The (.*) app will retain its current permissions if you choose not to accept the new permissions./, "如果您選擇不接受新權限，“$1” 應用將保留其當前權限。"],

        // 授權的 GitHub 應用 https://github.com/settings/apps/authorizations
            // "Authorized GitHub Apps": "授權的 GitHub 應用",
            "No authorized applications": "無授權申請",
            "You have no applications authorized to access your account.": "您沒有授權訪問您的帳戶的應用。",

        // 授權的 OAuth 應用 https://github.com/settings/applications
            // "Authorized OAuth Apps": "授權的 OAuth 應用",
            "You have granted": "您已經授權",
            "access to your account.": "訪問您的帳戶。",
            "Revoke all": "撤銷全部",
            "Sort": "排序",
            "Sort by": "排序方式",
            "Alphabetical": "按字母排列",
            "Recently used": "最近使用的",
            "Least recently used": "最近使用最少的",

            "Never used · Owned by": "從未使用 · 作者",
            "Last used within the last week · Owned by": "最後一次使用是最近 1 周之內 · 作者",

            "Report abuse": "舉報濫用",
            "Revoke": "撤銷",

            // 撤銷對話框
            "Are you sure you want to revoke authorization?": "您確定要撤銷授權嗎？",
            "I understand, revoke access": "我明白了，依然撤銷訪問",

            // 全部撤銷對話框
            "Are you sure you want to revoke access for all applications?": "您確定要撤銷對所有應用的訪問權限嗎？",
            "This will revoke access for": "這將撤銷訪問",
            "all third-party": "所有第三方",
            "OAuth applications. This action cannot be undone.": "OAuth 應用。此操作無法撤消。",
            "Any SSH keys created on your behalf by applications will also be deleted.": "任何由應用代表您創建的 SSH 密鑰也將被刪除。",
            "Type your username to confirm.": "輸入您的用戶名進行確認。",
            "I understand, revoke access for everything": "我明白了，依然撤銷對一切的訪問",

            // 舉報濫用對話框
            "Report Abuse": "舉報濫用",
            "More options": "更多選項",
            "Revoking will deny future access to your account": "撤銷授權，將拒絕今後訪問您的帳戶",

        // 授權的 GitHub 應用授權設置 https://github.com/settings/connections/applications/<client-id>
        // 授權的 OAuth 應用授權設置 https://github.com/settings/connections/applications/<id>
            "Never used": "從未使用",
            "Last used within the last week": "最後一次使用是最近一周之內",

            "Developed by": "開發者:",
            "Permissions": "權限",
            "Revoke access": "撤銷授權",
                "Are you sure you want to revoke authorization?": "您確定要撤銷授權嗎？",
                    // [/(.+) will no longer be able to access the GitHub API. You cannot undo this action./, "$1 將無法再訪問 GitHub API。您無法撤銷此操作。"],
                "I understand, revoke access": "我明白了，依然撤銷授權",
                    "Revoking…": "撤消中…",

            "Applications act on your behalf to access your data based on the permissions you grant them. Organizations control which applications are allowed to access their private data. Applications you authorize will always have access to public data in your organizations.": "應用根據您授予的權限代表您訪問數據。組織可控制允許哪些應用訪問其私人數據。您授權的應用始終可以訪問您組織中的公共數據。",
            "Read about third-party access.": "了解關於第三方訪問的信息。",

            "Organization access": "組織權限",
                "Grant": "批准",
                "This organization allows the application to access organization data as described in the permissions above.": "該組織允許應用訪問上述權限中所述的組織數據。",
                "Request": "請求",
                    "Until access is granted by an owner, the application cannot access the organization’s private data or modify its public data.": "在所有者授予訪問權限之前，應用無法訪問組織的私有數據或修改其公共數據。",

        // 組織 OAuth 應用策略設置 /orgs/<orgs-name>/policies/applications/<id>
            "approval requested by": "請求批准:",
            "Currently:": "當前",
                "No private access": "無法訪問私有",
                "Approved": "已批准",
            "Review third-party application access request": "審查第三方應用訪問請求",
                "Grant access": "批准訪問",
                "Granting access will give this application the ability to request access to private data in the": "授權該應用訪問私有數據在",
                "organization.": "組織。",

                "Deny access": "拒絕訪問",
                "Denying access will remove this application’s ability to request access to private data in the": "拒絕該應用訪問數據在",

            // 頂部提醒
                // [/(.*) is authorized to access this organization’s resources/, "$1 已獲授權訪問該組織的資源"],
                // [/(.*) is denied access this organization’s resources/, "$1 被拒絕訪問該組織的資源"],

            "Applications act on your behalf to access your data based on the permissions you grant them. Organizations control which applications are allowed to access their private data. Applications authorized by members will always have access to public data in your organization.": "應用根據您授予的權限代表您訪問數據。組織可控制允許哪些應用訪問其私有數據。成員授權的應用始終可以訪問組織中的公共數據。",
            "Read about organization OAuth app access restrictions.": "了解有關組織 OAuth 應用訪問限制的信息。",

    },
    "regexp": [ // 正則翻譯
        [/Your installation was suspended by you on/, "您的安裝已暫停於"],
        [/This action cannot be undone. Are you sure you want to uninstall this GitHub App from (\d+) repositor(y|ies)?/, "此操作無法撤消。您確定要從 $1 個倉庫中卸載此 GitHub 應用嗎？"],
        [/Uninstall "(.*)"/, "卸載 “$1”"],
        [/You will no longer be able to sign in to ([^ ]+) \(all administrative privileges will be bestowed upon the owners you choose\)/, "您將無法再登錄 $1（所有管理權限都將授予您選擇的所有者）"],
        [/(\d+) applications?/, "$1 個應用"],
        [/([^ ]+) will no longer be able to access your GitHub account. You cannot undo this action./, "$1 將無法再訪問您的 GitHub 帳戶。您無法撤消此操作。"],
        [/([^ ]+) has been revoked from your account./, "$1 已經從您的帳戶中被撤銷了。"],
        [/Last used within the last (\d+) weeks? · Owned by/, "最後一次使用是最近 $1 周之內 · 作者"],
        [/Last used within the last (\d+) months? · Owned by/, "最後一次使用是最近 $1 月之內 · 作者"],
        [/Selected (\d+) repositor(y|ies)./, "選擇了 $1 個倉庫。"],
        [/You're all set! (.*) has been uninstalled./, "一切就緒！$1 已被卸載。"],
        [/Okay, (.*) was installed on the (@[^ ]+) account./, "好的，$1 已安裝在 $2 賬戶上。"],
        [/Okay, (.*) was updated for the (@[^ ]+) account./, "好的，$2 帳戶的 $1 已更新。"],
        [/Last used within the last (\d+) weeks?/, "最後一次使用是最近 $1 周之內"],
        [/Last used within the last (\d+) months?/, "最後一次使用是最近 $1 月之內"],
        [/(.+) will no longer be able to access the GitHub API. You cannot undo this action./, "$1 將無法再訪問 GitHub API。您無法撤銷此操作。"],
        [/is requesting an update to its permissions./, "正在請求更新其權限。"],
        [/The (.*) app by/, "$1 應用（由"],
        [/The (.*) app will retain its current permissions if you choose not to accept the new permissions./, "如果您選擇不接受新權限，“$1” 應用將保留其當前權限。"],
        [/(.*) is authorized to access this organization’s resources/, "$1 已獲授權訪問該組織的資源"],
        [/(.*) is denied access this organization’s resources/, "$1 被拒絕訪問該組織的資源"],
    ],
};
I18N.zh["settings/apps/authorizations"] = I18N.zh["settings/installations"];
I18N.zh["settings/applications"] = I18N.zh["settings/installations"];
I18N.zh["settings/connections/applications"] = I18N.zh["settings/installations"];
I18N.zh["orgs/settings/installations"] = I18N.zh["settings/installations"];
I18N.zh["orgs/policies/applications"] = I18N.zh["settings/installations"];

I18N.zh["settings/reminders"] = { // 設置 - 定時提醒
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // 定時提醒 https://github.com/settings/reminders
            "Reminders allow you to push certain events to authorized instances of Microsoft Teams or Slack.": "提醒功能允許您將特定事件推送到 Microsoft Teams 或 Slack 的授權實例。",
            "To use scheduled reminders, make sure that the Slack or Microsoft Teams integration is installed and up-to-date. If you need help with this, please contact your organization's owner.": "要使用定時提醒，請確保已安裝 Slack 或 Microsoft Teams 集成並且是最新版本，如果您需要這方面的幫助，請聯繫您組織的所有者。",
            "Available organizations": "可用的組織",
            "Unavailable organizations": "不可用的組織",
            "Configure Reminder": "配置提醒",
            "No reminders": "沒有提醒",
            "Needs installing": "需要安裝",

        // 新的預定提醒 https://github.com/settings/reminders/<orgs-name>
            "New scheduled reminder": "新建預定提醒",
            "Slack workspace": "Slack 工作區",
            "Authorize Slack workspace": "授權 Slack 工作區",
            "Days": "天",
                "Weekdays": "工作日",
                "Monday"    : "周一",
                "Tuesday"   : "周二",
                "Wednesday" : "周三",
                "Thursday"  : "周四",
                "Friday"    : "周五",
                "Saturday"  : "周六",
                "Sunday"    : "周日",
            "Times": "時間",
                "Filter": "篩選",
            "Review requests assigned to you": "審查分配給您的請求",
                "Receive reminders for reviews waiting on you.": "接收等待您的審查提醒。",
            "Review requests assigned to your team": "審查分配給您團隊的請求",
                "Receive reminders for reviews waiting on your team.": "接收等待您的團隊的審查提醒。",
            "Enable real-time alerts": "啟用實時警報",
                "Receive immediate Slack messages when certain events happen": "當某些事件發生時，會立即收到 Slack 消息",

            "You will only receive notifications from public repositories in this organization because the current plan for": "您將只收到來自該組織中公共倉庫的通知，因為目前",
            "does not support reminders for private repositories.": "的計划不支持私人倉庫的提醒。",
            "Upgrade to Team": "升級為團隊",
            "Create reminder": "創建提醒者",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/security-log"] = { // 設置 - 安全日誌
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Security log 安全日誌 https://github.com/settings/security-log
            "Loading audit log entries…": "正在加載日誌條目...",
            "Filters": "篩選",
                "Filter audit logs": "篩選審計日誌",
                "Yesterday's activity": "昨天的活動",
                "Repository management": "倉庫管理",
                "Billing updates": "賬單更新",
                "Copilot activity": "Copilot 活動",
                "Personal access token activity": "個人訪問令牌活動",
                "View advanced search syntax": "查看高級搜索語法",
            "Search audit logs": "搜索審計日誌",
            "Search your security log": "搜索您的安全日誌",
            "Clear current search query": "清除當前的搜索查詢",
            "Export": "導出",
            "Recent events": "最近的事件",
            // [/Found (\d+) events?/, "發現 $1 個活動"],
            "Newer": "新的",
            "Older": "舊的",
            "ProTip!": "專業提示！",
                "View all events created yesterday": "查看昨天創建的所有事件",
                "View all events where you created something": "查看所有您創建內容時產生的事件",
                "Country changed from your previous session": "“國家/地區” 與上一次會話有所不同",

    },
    "regexp": [ // 正則翻譯
        [/Found (\d+) events?/, "發現 $1 個活動"],
    ],
};

I18N.zh["settings/sponsors-log"] = { // 設置 - 贊助日誌
    "static": { // 靜態翻譯
        ...I18N.zh["settings-menu"]["static"],

        // Sponsorship log 贊助日誌 https://github.com/settings/sponsors-log
            "Sponsors log": "贊助日誌",
            "New sponsorships, changes, and cancellations": "新的贊助、更改和取消",
            "Period:": "週期：",
            "Filter activity": "篩選活動",
            "All-time": "所有時間",
            "Past day": "過去一天",
            "Past week": "過去一周",
            "Past month": "過去一月",
            "Past year": "過去一年",
            "No sponsorship activity in this time period": "這段時間沒有贊助活動",
            "This is where you can review activity from your sponsorships.": "您可以在此處查看您的贊助活動。",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/apps"] = { // 設置 - 開發者設置/GitHub 應用
    "static": { // 靜態翻譯
        "Developer Settings": "開發者設置",
        "GitHub Apps": "GitHub 應用",
        "OAuth Apps": "OAuth 應用",
        "Personal access tokens": "個人訪問令牌",
            "Fine-grained tokens": "精細化的令牌",
            "Tokens (classic)": "令牌（經典）",

        // GitHub 應用 https://github.com/settings/apps
            // 頂部提醒
                "Job queued to revoke all user tokens": "撤銷所有用戶令牌的任務已排隊等待",

            "Register a new GitHub App": "註冊新的 GitHub 應用",
            "Want to build something that integrates with and extends GitHub?": "想要構建與 GitHub 集成和擴展的東西嗎？",
            "New GitHub App": "註冊新 GitHub 應用",
            "to get started developing on the GitHub API. You can also read more about building GitHub Apps in our": "，開始在 GitHub API 上進行開發。您還可以在我們的文檔中閱讀有關構建 GitHub 應用的更多信息",
            "developer documentation": "開發者文檔",
            "A GitHub App can act on its own behalf, taking actions via the API directly instead of impersonating a user. Read more in our": "GitHub 應用可以代表自己執行操作，直接通過 API 執行操作，而不是冒充用戶。閱讀我們的更多內容", // 存在 app時

        // 註冊 GitHub 應用 https://github.com/settings/apps/new
            "Register new GitHub App": "註冊新 GitHub 應用",
            "GitHub App name": "GitHub 應用名稱",
            "The name of your GitHub App.": "您的 GitHub 應用的名稱。",
            "Markdown supported": "支持 Markdown 語法",
            "This is displayed to users of your GitHub App": "展示給 GitHub 應用的使用者",
            "Homepage URL": "主頁地址",
                "The full URL to your GitHub App’s website.": "GitHub 應用網站的主頁地址",

            "Identifying and authorizing users": "識別並授權用戶",
                "The full URL to redirect to after a user authorizes an installation.": "用戶授權安裝後重定向到的完整地址。",
                "Callback URL documentation": "回調地址文檔",
                "Add Callback URL": "添加回調地址",

                "Callback URL": "回調地址",
                "Expire user authorization tokens": "用戶授權令牌",
                    "This will provide a": "這將提供一個",
                    "which can be used to request an updated access token when this access token expires.": "，用於在此訪問令牌到期時，請求更新訪問令牌。",
                "Request user authorization (OAuth) during installation": "在安裝期間請求用戶授權 (OAuth)",
                    "Requests that the installing user grants access to their identity during installation of your App": "請求用戶在安裝應用期間授予其身份訪問權限。",
                    "Identifying and authorizing users for GitHub Apps documentation": "關於 GitHub 應用識別並授權用戶的文檔",
                "Enable Device Flow": "啟用設備流",
                    "Allow this GitHub App to authorize users via the Device Flow.": "允許此 GitHub 應用通過設備流程授權用戶。",
                    "Read the": "閱讀",
                    "Device Flow documentation": "設備流程文檔",

            "Post installation": "安裝完成後",
                "Setup URL (optional)": "設置網址 (可選)",
                    "Users will be redirected to this URL after installing your GitHub App to complete additional setup.": "用戶在安裝完 GitHub 應用後，會被重定向到這個網址，以完成額外的設置。",
                    "Unavailable when requesting OAuth during installation.": "安裝過程中請求 OAuth 時不可用。",
                    "Users will be redirected to the 'User authorization callback URL' to complete additional setup.": "用戶將被重定向到 “用戶授權回調網址” 以完成其他設置。",
                "Redirect on update": "更新時重定向",
                    "Redirect users to the 'Setup URL' after installations are updated (E.g. repositories added/removed).": "在安裝後更新時將用戶重定向到 “設置網址”（例如: 添加/刪除倉庫）。",
                    "Redirect users to the 'User authorization callback URL' after installations are updated (E.g repositories added/removed).": "在安裝後更新時將用戶重定向到 “用戶授權回調網址”（例如: 添加/刪除倉庫）。",

            "Webhook": "Web 鉤子",
                "Active": "激活",
                    "We will deliver event details when this hook is triggered.": "當鉤子被觸發時，我們將提供事件詳細信息。",
                "Webhook URL": "Web 鉤子網址",
                    "Events will POST to this URL. Read our": "事件將 POST 到此網址。閱讀",
                    "webhook documentation": "關於 Web 鉤子",
                    "for more information.": "以獲取更多信息。",
                "Webhook secret (optional)": "Web 鉤子機密 (可選)",
                    "Read our": "閱讀我們",
                    "webhook secret documentation": "Web 鉤子機密文檔",

            "Permissions": "權限",
                "User permissions are granted on an individual user basis as part of the": "用戶權限的授予是以單個用戶為基礎的，是一個環節",
                "User authorization flow": "用戶授權流程",
                "permissions documentation": "權限文檔",
                "for information about specific permissions.": "以了解關於特定權限的信息。",

                "Access:": "訪問權限：",
                "Select an access level": "選擇訪問級別",
                "No access": "禁止訪問",
                "Read-only": "只讀",
                "Read and write": "讀寫",
                "Admin": "管理員",

                  "Selected": "項被選中",
                  "mandatory": "強制",

                "Repository permissions": "倉庫權限",
                    "Repository permissions permit access to repositories and related resources.": "倉庫權限允許訪問倉庫和相關資源。",

                    "Actions": "操作",
                        "Workflows, workflow runs and artifacts.": "工作流程、工作流程的運行和工件。",
                    "Administration": "管理",
                        "Repository creation, deletion, settings, teams, and collaborators.": "倉庫創建、刪除、設置、團隊和協作者。",
                    "Checks": "檢查",
                        "Checks on code.": "檢查程式碼。",
                    "Code scanning alerts": "程式碼掃描警報",
                        "View and manage code scanning alerts.": "查看和管理程式碼掃描警報。",
                    // "": "程式碼空間",
                        "Create, edit, delete and list Codespaces.": "創建、編輯、刪除和列出程式碼空間。",
                    "Codespaces lifecycle admin": "程式碼空間的生命週期管理",
                        "Manage the lifecycle of Codespaces, including starting and stopping.": "管理程式碼空間的生命週期，包括啟動和停止。",
                    "Codespaces metadata": "程式碼空間元數據",
                        "Access Codespaces metadata including the devcontainers and machine type.": "訪問程式碼空間元數據，包括開發容器和機器類型。",
                    "Codespaces secrets": "程式碼空間機密",
                        "Restrict Codespaces user secrets modifications to specific repositories.": "限制程式碼空間的用戶機密對特定倉庫的修改。",
                    "Commit statuses": "提交狀態",
                        "Commit statuses.": "提交狀態。",
                    "Contents": "內容",
                        "Repository contents, commits, branches, downloads, releases, and merges.": "倉庫內容、提交、分支、下載、發布和合併。",
                    // 自定義屬性
                        "View and set values for a repository's custom properties, when allowed by the property.": "在屬性允許的情況下，查看和設置倉庫自定義屬性的值。",
                    "Dependabot alerts": "Dependabot 警報",
                        "Retrieve Dependabot alerts.": "檢索 Dependabot 警報。",
                    "Dependabot secrets": "Dependabot 機密",
                        "Manage Dependabot repository secrets.": "管理 Dependabot 倉庫的機密。",
                    "Deployments": "部署",
                        "Deployments and deployment statuses.": "部署和部署狀態。",
                    "Discussions": "討論",
                        "Discussions and related comments and labels.": "討論及相關評論和標籤。",
                    "Environments": "環境",
                        "Manage repository environments.": "管理倉庫環境。",
                    "Issues": "議題",
                        "Issues and related comments, assignees, labels, and milestones.": "議題及相關評論、受理人、標籤和里程碑。",
                    "Merge queues": "合併列隊",
                        "Manage a repository's merge queues": "管理倉庫的合併隊列。",
                    "Metadata": "元數據",
                        "Search repositories, list collaborators, and access repository metadata.": "搜索倉庫、列出協作者，訪問倉庫元數據。",
                    "Packages": "軟件包",
                        "Packages published to the GitHub Package Platform.": "發布軟件包到 GitHub Package 平台。",
                    "Pages": "GitHub Pages",
                        "Retrieve Pages statuses, configuration, and builds, as well as create new builds.": "檢索頁面狀態、配置和構建，以及創建新的構建。",
                    "Projects": "項目",
                        "Manage classic projects within a repository.": "管理倉庫中的經典項目。",
                    "Pull requests": "拉取請求",
                        "Pull requests and related comments, assignees, labels, milestones, and merges.": "拉取請求及相關評論、受讓人、標籤、里程碑和合併。",
                    "Repository security advisories": "倉庫安全公告",
                        "View and manage repository security advisories.": "查看和管理安全公告",
                    "Secret scanning alerts": "機密掃描警報",
                        "View and manage secret scanning alerts.": "查看和管理機密掃描警報。",
                    "Secrets": "機密",
                        "Manage Actions repository secrets.": "管理操作倉庫機密。",
                    "Single file": "單個文件",
                        "Manage just a single file.": "只管理單個文件。",
                        "Path": "路徑",
                        "The content paths to single files your app can access.": "應用可以訪問的單個文件的內容路徑。",
                    "Variables": "變量",
                        "Manage Actions repository variables.": "管理操作倉庫變量。",
                    "Webhooks": "Web 鉤子",
                        "Manage the post-receive hooks for a repository.": "管理倉庫的接收後鉤子。",
                    "Workflows": "工作流程",
                        "Update GitHub Action workflow files.": "更新 GitHub Actions 工作流程文件。",

                "Organization permissions": "組織權限",
                    "Organization permissions permit access to organization related resources.": "組織權限允許訪問組織相關資源。",

                    // 管理
                        "Manage access to an organization.": "管理對組織的訪問。",
                    "Blocking users": "拉黑用戶",
                        "View and manage users blocked by the organization.": "查看和管理被組織拉黑的用戶。",
                    "Custom organization roles": "自定義組織角色",
                        "Create, edit, delete and list custom organization roles. View system organization roles.": "創建、編輯、刪除和列出自定義組織角色。查看系統組織角色。",
                    "Custom properties": "自定義屬性",
                        "View custom properties, write repository values, and administer definitions.": "查看自定義屬性、寫入倉庫值並管理定義。",
                    "Custom repository roles": "自定義倉庫角色",
                        "Create, edit, delete and list custom repository roles.": "創建、編輯、刪除和列出自定義倉庫角色。",
                    "Events": "活動",
                        "View events triggered by an activity in an organization.": "查看組織中某項活動所觸發的事件。",
                    "GitHub Copilot Business": "GitHub Copilot 商業版",
                        "Manage Copilot Business seats and settings": "管理 GitHub Copilot 商業版席位和設置",
                    "Members": "成員",
                        "Organization members and teams.": "組織成員和團隊。",
                    "Organization announcement banners": "組織公告橫幅",
                        "View and modify announcement banners for an organization.": "查看並修改組織的公告橫幅。",
                    "Organization codespaces": "組織程式碼空間",
                        "Manage Codespaces for an organization.": "管理組織的程式碼空間。",
                    "Organization codespaces secrets": "組織程式碼空間機密",
                        "Manage Codespaces Secrets for an organization.": "管理組織的程式碼空間機密。",
                    "Organization codespaces settings": "組織程式碼空間設置",
                        "Manage Codespaces settings for an organization.": "管理組織的程式碼空間設置。",
                    "Organization dependabot secrets": "組織 Dependabot 機密",
                        "Manage Dependabot organization secrets.": "管理 Dependabot 組織的機密。",
                    "Personal access token requests": "個人訪問令牌請求",
                        "Manage personal access token requests from organization members.": "管理來自組織成員的個人訪問令牌請求。",
                    "Personal access tokens": "個人訪問令牌",
                        "View and revoke personal access tokens that have been granted access to an organization.": "查看和撤銷已被授予組織訪問權限的個人訪問令牌。",
                    "Plan": "計劃",
                        "View an organization's plan.": "查看組織的計劃。",
                    // 項目
                        "Manage projects for an organization.": "管理組織的項目。",
                    // 機密
                        "Manage Actions organization secrets.": "管理操作組織機密",
                    "Self-hosted runners": "自託管運行器",
                        "View and manage Actions self-hosted runners available to an organization.": "查看和管理組織可用的 “操作自託管運行器”。",
                    "Team discussions": "團隊討論",
                        "Manage team discussions and related comments.": "管理團隊討論及相關評論。",
                    // 變量
                        "Manage Actions organization variables.": "管理操作組織變量。",
                    // Web 鉤子
                        "Manage the post-receive hooks for an organization.": "管理組織的接收後鉤子。",

                "Account permissions": "帳戶權限",
                    "These permissions are granted on an individual user basis as part of the User authorization flow.": "這些權限是在單個用戶的基礎上授予的，作為用戶授權流程的一部分",

                    "Block another user": "拉黑其他用戶",
                        "View and manage users blocked by the user.": "查看和管理被用戶拉黑的用戶。",
                    "Codespaces user secrets": "程式碼空間用戶機密",
                        "Manage Codespaces user secrets.": "管理程式碼空間用戶機密。",
                    "Email addresses": "電子郵箱地址",
                        "Manage a user's email addresses.": "管理用戶的電子郵箱地址。",
                    // 關注者
                        "A user's followers": "用戶的關注者",
                    "GPG keys": "GPG 密鑰",
                        "View and manage a user's GPG keys.": "查看和管理用戶的 GPG 密鑰。",
                    // Gist
                        "Create and modify a user's gists and comments.": "創建和修改用戶的程式碼片段和評論。",
                    "Git SSH keys": "Git SSH 密鑰",
                    "Interaction limits": "交互限制",
                        "Interaction limits on repositories": "倉庫的交互限制",
                    // 計劃
                        "View a user's plan.": "查看用戶的計劃。",
                    "Profile": "個人信息",
                        "Manage a user's profile settings.": "管理用戶的個人信息設置。",
                    "SSH signing keys": "SSH 簽名密鑰",
                        "View and manage a user's SSH signing keys.": "查看和管理用戶的 SSH 簽名密鑰。",
                    "Starring": "星標",
                        "List and manage repositories a user is starring.": "列出和管理用戶已加星標的倉庫。",
                    "Watching": "關注",
                        "List and change repositories a user is subscribed to.": "列出和更改用戶訂閱的倉庫。",

            // 以下的事件 與 鉤子頁面 一致
            // 添加鉤子 頁面 /<user-name>/<repo-name>/settings/hooks/new
            "Subscribe to events": "訂閱事件",
                "Based on the permissions you’ve selected, what events would you like to subscribe to?": "根據您選擇的權限，您想訂閱哪些事件？",
                "Installation target": "安裝目標",
                    "A GitHub App installation target is renamed.": "GitHub 應用安裝目標已重命名。",
                "Meta": "元數據",
                    "When this App is deleted and the associated hook is removed.": "當該應用被刪除和相關的鉤子被刪除時。",
                "Security advisory": "安全提示",
                    "Security advisory published, updated, or withdrawn.": "安全提示的發布、更新或撤銷。",
                "Branch protection configuration": "分支保護配置",
                    "All branch protections disabled or enabled for a repository.": "禁用或啟用倉庫的所有分支保護。",
                "Branch protection rule": "分支保護規則",
                    "Branch protection rule created, deleted or edited.": "分支保護規則的創建、刪除或編輯。",
                "Code scanning alert": "程式碼掃描警報",
                    "Code Scanning alert created, fixed in branch, or closed": "程式碼掃描警報的創建、在分支中修復或關閉。",
                "Check run": "檢查運行",
                    "Check run is created, requested, rerequested, or completed.": "檢查運行的創建、請求、重新請求或完成。",
                "Check suite": "檢查套件",
                    "Check suite is requested, rerequested, or completed.": "檢查套件的請求、重新請求或完成。",
                "Commit comment": "提交評論",
                    "Commit or diff commented on.": "提交或差異評論。",
                //"創建": "",
                    "Branch or tag created.": "分支或標籤的創建。",
                "Custom property": "自定義屬性",
                    "Custom property is created, updated, or deleted.": "自定義屬性的創建、更新或刪除。",
                "Custom property values": "自定義屬性值",
                    "Custom property values are changed for a repository": "倉庫自定義屬性值的更改。",
                "Discussion": "討論",
                    "Discussion created, edited, closed, reopened, pinned, unpinned, locked, unlocked, transferred, answered, unanswered, labeled, unlabeled, had its category changed, or was deleted.": "討論的創建、編輯、關閉、重新打開、置頂、取消置頂、鎖定、解鎖、轉移、答覆、取消答覆、標記、取消標記、更改其類別或刪除。",
                "Discussion comment": "討論評論",
                    "Discussion comment created, edited, or deleted.": "討論評論的創建、編輯或刪除。",
                //"刪除": "",
                    "Branch or tag deleted.": "分支或標籤的刪除。",
                "Dependabot alert": "Dependabot 警報",
                    "Dependabot alert auto_dismissed, auto_reopened, created, dismissed, reopened, fixed, or reintroduced.": "Dependabot 警報的自動解除、自動重新打開、創建、解除、重新打開、修復或重新引入。",
                "Deploy key": "部署密鑰",
                    "A deploy key is created or deleted from a repository.": "在倉庫中部署密鑰的創建或刪除。",
                "Deployment": "部署",
                    "Repository was deployed or a deployment was deleted.": "倉庫的部署或刪除部署。",
                "Deployment protection rule": "部署保護規則",
                    "Deployment protection rule requested for an environment.": "環境請求部署保護規則。",
                "Deployment review": "部署審查",
                    "Deployment review requested, approved or rejected": "部署審查的請求、批准或拒絕",
                "Deployment status": "部署狀態",
                    "Deployment status updated from the API.": "通過 API 更新部署狀態。",
                //"復刻": "",
                    "Repository forked.": "倉庫復刻。",
                "Gollum": "咕嚕",
                    "Wiki page updated.": "Wiki 頁面的更新。",
                "Issue comment": "議題評論",
                    "Issue comment created, edited, or deleted.": "議題評論的創建、編輯或刪除。",
                //"議題": "",
                    "Issue opened, edited, deleted, transferred, pinned, unpinned, closed, reopened, assigned, unassigned, labeled, unlabeled, milestoned, demilestoned, locked, or unlocked.": "議題的打開、編輯、刪除、轉移、置頂、取消置頂、關閉、重新打開、分配、取消分配、標記、取消標記、設置里程碑、取消里程碑、鎖定或解鎖。",
                "Label": "標籤",
                    "Label created, edited or deleted.": "標籤的創建、編輯或刪除。",
                "Milestone": "里程碑",
                    "Milestone created, closed, opened, edited, or deleted.": "里程碑的創建、關閉、打開、編輯或刪除。",
                "Member": "成員",
                    "Collaborator added to, removed from, or has changed permissions for a repository.": "協作者添加到倉庫、從倉庫中刪除或更改了倉庫的權限。",
                "Membership": "團隊成員",
                    "Team membership added or removed.": "團隊成員的添加或刪除。",
                "Merge group": "合併組",
                    "Merge Group requested checks, or was destroyed.": "合併組的請求檢查或銷毀。",
                "Merge queue entry": "合併隊列條目",
                    "Merge Queue entry added": "合併隊列條目的添加。",
                "Organization": "組織",
                    "Organization deleted, renamed, member invited, member added, or member removed.": "組織的刪除、重命名以及成員的邀請、添加或刪除。",
                "Page build": "構建 GitHub Pages",
                    "Pages site built.": "GitHub Pages 站點的建立。",
                "Personal access token request": "個人訪問令牌請求",
                    "Personal access token request created, approved, denied, or cancelled.": "個人訪問令牌請求的創建、批准、拒絕或取消。",
                "Project": "項目",
                    "Project created, updated, or deleted.": "項目的創建、更新或刪除。",
                "Project card": "項目面板卡",
                    "Project card created, updated, or deleted.": "項目面板卡的創建、更新或刪除",
                "Project column": "項目欄目",
                    "Project column created, updated, moved or deleted.": "項目欄目的創建、更新、移動或刪除。",
                "Projects v2 item": "項目 v2 條目",
                    "Project item created, edited, deleted, archived, restored, converted, or reordered.": "項目條目的創建、編輯、刪除、歸檔、恢復、轉換或重新排序。",
                "Projects v2": "項目 v2",
                    "Project created, updated, deleted, closed, or reopened.": "項目的創建、更新、刪除、關閉或重新打開。",
                // 公共
                    "Repository changes from private to public.": "倉庫從私有更改為公共。",
                "Pull request": "拉取請求",
                    "Pull request assigned, auto merge disabled, auto merge enabled, closed, converted to draft, demilestoned, dequeued, edited, enqueued, labeled, locked, milestoned, opened, ready for review, reopened, review request removed, review requested, synchronized, unassigned, unlabeled, or unlocked.": "拉取請求的分配、禁用自動合併、啟用自動合併、關閉、轉換為草稿、取消里程碑、取消隊列、編輯、隊列、標記、鎖定、設置里程碑、打開、準備審查、重新打開、取消審查請求、請求審查、同步、取消分配、取消標記或解鎖。",
                "Pull request review": "拉取請求審查",
                    "Pull request review submitted, edited, or dismissed.": "拉取請求審查的提交、編輯或駁回。",
                "Pull request review comment": "拉取請求審查意見",
                    "Pull request diff comment created, edited, or deleted.": "拉取請求差異評論的創建、編輯或刪除。",
                "Pull request review thread": "拉取請求線程",
                    "A pull request review thread was resolved or unresolved.": "拉取請求的審查線程解決或未解決。",
                "Push": "推送",
                    "Git push to a repository.": "Git 推送到倉庫。",
                "Registry package": "註冊軟件包",
                    "Registry package published or updated in a repository.": "倉庫中註冊軟件包的發布或更新。",
                "Release": "發行版",
                    "Release created, edited, published, unpublished, or deleted.": "發行版的創建、編輯、發布、取消發布或刪除。",
                "Repository": "倉庫",
                    "Repository created, deleted, archived, unarchived, publicized, privatized, edited, renamed, or transferred.": "倉庫的創建、刪除、歸檔、取消歸檔、公開、私有化、編輯、重命名或轉讓。",
                "Repository dispatch": "倉庫調度",
                    "When a message is dispatched from a repository.": "當信息從倉庫發出時。",
                "Repository ruleset": "倉庫規則集",
                    "Repository ruleset created, deleted or edited.": "倉庫規則集的創建、刪除或編輯。",
                "Security and analysis": "安全和分析",
                    "Code security and analysis features enabled or disabled for a repository.": "啟用或禁用倉庫的程式碼安全和分析功能。",
                "Secret scanning alert": "機密掃描警報",
                    "Secrets scanning alert created, resolved, reopened, or validated": "機密掃描警報的創建、解決、重新打開或驗證。",
                "Secret scanning alert location": "機密掃描警報位置",
                    "Secrets scanning alert location created": "機密掃描警報位置的創建。",
                // 星標
                    "A star is created or deleted from a repository.": "星標或取消倉庫星標。",
                //"狀態": "",
                    "Commit status updated from the API.": "通過 API 更新提交狀態。",
                //"團隊": "",
                    "Team is created, deleted, edited, or added to/removed from a repository.": "團隊的創建、刪除、編輯以及向倉庫添加團隊、從倉庫中移除團隊。",
                "Team add": "團隊添加",
                    "Team added or modified on a repository.": "倉庫團隊的添加或修改。",
                "Watch": "關注",
                    "User stars a repository.": "用戶星標倉庫。",
                "Workflow dispatch": "工作流程調度",
                    "A manual workflow run is requested.": "請求手動運行工作流程。",
                "Workflow job": "工作流程作業",
                    "Workflow job queued, waiting, in progress, or completed on a repository.": "倉庫中工作流作業的隊列、等待、正在進行或完成。",
                "Workflow run": "工作流程運行",
                    "Workflow run requested or completed on a repository.": "倉庫中工作流程運行的請求或完成。",
                "Org block": "組織黑名單", // 組織設置
                    "A user has been blocked or unblocked.": "用戶拉黑或解除拉黑。",
                "Repository advisory": "倉庫公告",
                    "Repository advisory published or reported.": "倉庫公告發布或報告。",

            "Where can this GitHub App be installed?": "這款 GitHub 應用可以安裝在哪裡？",
                "Only on this account": "僅在當前帳戶",
                    "Only allow this GitHub App to be installed on the": "只允許該 GitHub 應用被安裝在",
                    "account.": "帳戶。",
                "Any account": "任何帳戶",
                    "Allow this GitHub App to be installed by any user or organization.": "允許任何用戶或組織安裝此 GitHub 應用。",

            "Create GitHub App": "創建 GitHub 應用",

        // 某個 GitHub 應用 https://github.com/settings/apps/<app-name>
            // 頂部提醒
                // GitHub App 註冊成功
                "Registration successful. You must": "註冊成功。您必須",
                "generate a private key": "生成私鑰",
                "in order to install your GitHub App.": "才能安裝 GitHub 應用。",
                // GitHub App 已更新
                "Got it. Your GitHub App has been updated.": "GitHub 應用已更新。",
                "The GitHub App is now public. Anyone is free to install it.": "GitHub 應用已公開化。任何人都可以自由安裝。",
                "The GitHub App is now private. It can only be installed on this account.": "GitHub 應用已私有化。只能安裝在此賬戶上。",

            "Developer settings": "開發者設置",
            // 左側欄
                "General": "通常",
                "Permissions & events": "權限與事件",
                "Install App": "安裝應用",
                "Advanced": "高級",
                "Optional features": "可選功能",
                "Public page": "公共頁面",

            // 關於
                "Owned by:": "擁有者：",
                "Revoke all user tokens": "撤銷所有用戶令牌",
                "GitHub Apps can use OAuth credentials to identify users. Learn more about identifying users by reading our": "GitHub 應用可以使用 OAuth 憑據來識別用戶。閱讀我們的",
                "integration developer documentation": "集成開發者文檔",

                "Public link": "公共鏈接",

                // 撤銷所有用戶令牌對話框
                "Revoke all user tokens?": "撤銷所有用戶令牌？",
                    "Are you sure you want to revoke": "您確定要撤銷此應用的",
                    "all": "所有",
                    "user tokens for this application?": "用戶令牌嗎？",
                    "All users of this application will be forced back through the": "該應用的所有用戶都將被迫返回",
                    "authorization flow": "授權流程",
                    "before they can use your application again.": "，然後才能再次使用您的應用。",
                    "All SSH keys created by this application will also be deleted.": "此應用創建的所有 SSH 密鑰也將被刪除。",
                    "This action is not reversible.": "此操作不可逆轉。",
                    "I understand, revoke all user tokens": "我明白了，依然撤銷所有用戶令牌",

            "Client secrets": "客戶端機密",
                "Generate a new client secret": "生成客戶端機密",
                "You need a client secret to authenticate as the application to the API.": "您需要一個客戶端機密，才能以應用的身份驗證 API。",

            "Basic information": "基本信息",
                "Save changes": "保存更改",

            "Display information": "顯示信息",
                "Drag & drop": "拖放",
                "Upload a logo...": "上傳 Logo ...",
                    "Uploading...": "上傳中...",
                "You can also drag and drop a picture from your computer.": "您也可以從電腦中拖放圖片。",

                "Delete this image": "刪除圖片",
                "Badge background color": "徽章背景顏色",
                "The hex value of the badge background color. Hex colors should only contain numbers and letters from a-f.": "徽章背景顏色的十六進制值。十六進制顏色只能包含 a-f 之間的數字和字母。",
                // 剪裁對話框
                    "Crop your new avatar": "裁剪您的新頭像",
                    "Set new avatar": "設置新頭像",
                // 頂部提醒
                    "Your avatar has been updated. It may take a few minutes to update across the site.": "您的頭像已更新。整個網站的更新可能需要幾分鐘的時間。",
                    "This avatar has been deleted.": "該頭像已被刪除。",

            // 市場
                "List your GitHub App in the": "上架您的 GitHub 應用到",
                "GitHub Marketplace": "GitHub 市場",
                "so that other users can discover it.": "以便其他用戶可以發現它。",
                "List in Marketplace": "上架應用",

                "Edit how your GitHub App is presented in the Marketplace directory, including screenshots and links.": "編輯 GitHub 應用在市場索引中的展示方式，包括截圖和鏈接。",
                "Edit Marketplace listing": "編輯市場上架信息",

            "Private keys": "私鑰",
                "Generate a private key": "生成私鑰",
                "You need a private key to sign access token requests.": "您需要私鑰來簽署訪問令牌請求。",

                "Learn more about private keys": "了解更多關於私鑰的信息",
                "Private key": "私鑰",
                "Added": "已添加於",

            "IP allow list": "IP 允許列表",
                "Enter the IP addresses of your GitHub App to allow organizations with": "輸入 GitHub 應用的 IP 地址，以便在安裝時允許在",
                "IP allow lists": "IP 允許列表",
                "to selectively inherit the App's IP allow list when installed.": "的組織有選擇地繼承應用的 IP 允許列表。",
                "Learn more about App IP allow lists": "了解更多關於應用 IP 允許列表的信息",

                "There are no IP addresses on the allow list yet.": "允許列表中尚無 IP 地址。",
                "IP address or range in CIDR notation": "以 CIDR 表示的 IP 地址或範圍",
                "Short description of IP address or range": "IP 地址或範圍的簡短描述",

                "Check IP address": "檢查 IP 地址",
                    "Enter an IP address to check whether it is permitted by enabled entries on the IP allow list.": "輸入 IP 地址，檢查 IP 允許列表中的啟用條目是否允許該地址。",

        // 某個 GitHub 應用 - 權限 https://github.com/settings/apps/<app-name>/permissions
            "Changes to permissions will be applied to all future installations. Current users will be prompted to accept any changes and enable the new permissions on their installation.": "對權限的更改將應用於今後的所有安裝。系統將提示當前用戶接受任何更改，並在其安裝中啟用新權限。",

            "Add a note to users": "為用戶添加注釋",
                "This note will be displayed on the permissions update approval page.": "該注釋將顯示在權限更新批准審查頁面上。",
                    "Add a note to your users explaining why you are requesting these changes.": "向您的用戶添加注釋，解釋您請求這些更改的原因。",

                "Are you sure you want to update permissions?": "您確定要更新權限嗎？",
                    "Current users will be prompted to accept these changes and enable the new permissions on their installation.": "系統將提示當前用戶接受這些更改，並在其安裝中啟用新權限。",

        // 某個 GitHub 應用 - 安裝 https://github.com/settings/apps/<app-name>/installations
            // [/Install (.*)/, "安裝 $1"],
            // [/Choose an account to install (.*) on:/, "選擇要安裝 $1 的帳戶："],
            "Install": "安裝",
            // [/Install (.*) on this account./, "安裝 $1 到此賬戶上。"],
            "Installed": "已安裝",
            // [/(.*) is installed on this account./, "$1 已安裝在此帳戶上。"],

        // 某個 GitHub 應用 - 高級 https://github.com/settings/apps/<app-name>/advanced
            "Danger zone": "危險區",
                "Transfer ownership of this GitHub App": "轉讓此 GitHub 應用的所有權",
                    "Transferring may be delayed until the new owner approves the transfer.": "轉讓可能會延遲，直至新所有者批准轉讓",
                    "Transfer ownership": "轉讓所有權",
                        // [/Where should we transfer (.*)\?/, "將 $1 轉讓給誰？"],
                        "Type the name of the GitHub App to confirm": "鍵入要確認的 GitHub 應用名稱",
                        "New owner’s GitHub username or organization name": "新所有者的 GitHub 用戶名或組織名稱",
                        "Transfer this GitHub App": "轉讓所有權",
                "Delete this GitHub App": "刪除此 GitHub 應用",
                    "This cannot be undone. Please be certain.": "此操作無法撤銷。請確認。",

                    "Delete GitHub App": "刪除 GitHub 應用",
                        "Delete GitHub App?": "刪除 GitHub 應用？",
                            "Unexpected bad things will happen if you don’t read this!": "請仔細閱讀以下提示信息！！！",
                            "This action": "此操作",
                            "CANNOT": "無法",
                            "be undone. This will permanently delete the": "撤銷。這將永久刪除",
                            "GitHub App.": "GitHub 應用。",

                            "This will also uninstall the GitHub App from": "這還將卸載 GitHub 應用從",
                            // [/(\d+) accounts?/, "$1 個賬戶"],

                            "Please type in the name of the GitHub App to confirm.": "請鍵入 GitHub 應用的名稱進行確認。",
                            "I understand the consequences, delete this GitHub App": "我明白後果，依然刪除該 GitHub 應用",
                "Make this GitHub App public": "公開 GitHub 應用",
                    "Allow this GitHub App to be installed on other accounts.": "允許在其他賬戶中安裝此 GitHub 應用。",

                    "Make public": "轉為公開",
                        // [/Any user or organization will be able to install this GitHub App. Are you sure you want to make (.*) public\?/, "任何用戶或組織都可以安裝此 GitHub 應用。您確定要公開 $1 嗎？"],
                "Make this GitHub App private": "私有化 GitHub 應用",
                    "Private GitHub Apps cannot be installed on other accounts.": "私有 GitHub 應用不能安裝在其他賬戶上。",
                    "Make private": "轉為私有",
                        "This integration cannot be made private since it is already installed on other accounts.": "此應用無法轉為私有，因為它已安裝在其他帳戶上。",
                "Make this application private": "私有化應用",
                    "Private applications cannot be installed on other accounts.": "私有應用不能安裝在其他賬戶上。",
                        // [/This GitHub app will only be installable on the ([^ ]+) account. Are you sure you want to make (.*) private\?/, "此 GitHub 應用只能安裝在 $1 帳戶上。您確定要將 $2 設為私有嗎？"],

        // 某個 GitHub 應用 - 可選功能 https://github.com/settings/apps/<app-name>/beta
            // [/Activate optional features for (.*)/, "激活 $1 的可選功能"],
            // [/Choose a feature to activate for (.*):/, "選擇要為 $1 激活的功能："],

            "User-to-server token expiration": "用戶到服務器訪問令牌過期",
                "User-to-server access tokens will expire after 8 hours. A Refresh Token will be provided which can be exchanged for a new access token.": "用戶到服務器訪問令牌將在 8 小時後過期。我們將提供一個刷新令牌，用戶可以用它換取新的訪問令牌。",
                "Opt-out": "選擇退出",
                "Opt-in": "選擇加入",
                    "Disable user-to-server token expiration for this app.": "禁用此應用的用戶到服務器訪問令牌過期。",

    },
    "regexp": [ // 正則翻譯
        [/Choose an account to install (.*) on:/, "選擇要安裝 $1 的帳戶："],
        [/Install (.*) on this account./, "安裝 $1 到此賬戶上。"],
        [/Install (.*)/, "安裝 $1"],
        [/(.*) is installed on this account./, "$1 已安裝在此帳戶上。"],
        [/Where should we transfer (.*)\?/, "將 $1 轉讓給誰？"],
        [/Any user or organization will be able to install this GitHub App. Are you sure you want to make (.*) public\?/, "任何用戶或組織都可以安裝此 GitHub 應用。您確定要公開 $1 嗎？"],
        [/This GitHub app will only be installable on the ([^ ]+) account. Are you sure you want to make (.*) private\?/, "此 GitHub 應用只能安裝在 $1 帳戶上。您確定要將 $2 設為私有嗎？"],
        [/(\d+) accounts?/, "$1 個賬戶"],
        [/Activate optional features for (.*)/, "激活 $1 的可選功能"],
        [/Choose a feature to activate for (.*):/, "選擇要為 $1 激活的功能："],
    ],
};
I18N.zh["orgs/settings/apps/new"] = I18N.zh["settings/apps"];

I18N.zh["settings/developers"] = { // 設置 - 開發者設置/OAuth 應用
    "static": { // 靜態翻譯
            "Developer Settings": "開發者設置",
            "GitHub Apps": "GitHub 應用",
            "OAuth Apps": "OAuth 應用",
            "Personal access tokens": "個人訪問令牌",
                "Fine-grained tokens": "精細化的令牌",
                "Tokens (classic)": "令牌（經典）",

        // OAuth 應用 https://github.com/settings/developers
            "No OAuth applications": "沒有 OAuth 應用",
            "OAuth applications are used to access the GitHub API.": "OAuth 應用用於訪問 GitHub API。",
            "Read the docs": "閱讀文檔",
            "to find out more.": "以了解更多情況。",
            "Register a new application": "註冊新 OAuth 應用",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["settings/applications/new"] = { // 設置 - 開發者設置/OAuth 應用
    "static": { // 靜態翻譯

        // 註冊 OAuth 應用 https://github.com/settings/applications/new
            "Developer Settings": "開發者設置",

            "Register a new OAuth application": "註冊 OAuth 應用",
            "Application name": "應用名",
            "Something users will recognize and trust.": "讓用戶識別和信任。",
            "Homepage URL": "主頁地址",
            "The full URL to your application homepage.": "您的應用主頁地址。",
            "Application description": "應用描述",
            "Application description is optional": "應用描述 (可選)",
            "This is displayed to all users of your application.": "所有用戶都能看到您的應用描述。",
            "Authorization callback URL": "認證回調地址",
            "Your application’s callback URL. Read our": "您的應用授權回調地址。閱讀我們",
            "OAuth documentation": "OAuth 文檔",
            "for more information.": "了解更多信息。",
            "Enable Device Flow": "啟用設備流程",
            "Allow this OAuth App to authorize users via the Device Flow.": "允許此 OAuth 應用通過設備流程授權用戶。",
            "Read the": "閱讀",
            "Device Flow documentation": "設備流程文檔",
            "Register application": "註冊應用",

    },
    "regexp": [ // 正則翻譯
    ],
};
I18N.zh["orgs/settings/applications/new"] = I18N.zh["settings/applications/new"];

I18N.zh["settings/tokens"] = { // 設置 - 開發者設置/個人訪問令牌
    "static": { // 靜態翻譯
            "Developer Settings": "開發者設置",
            "GitHub Apps": "GitHub 應用",
            "OAuth Apps": "OAuth 應用",
            "Personal access tokens": "個人訪問令牌",
                "Fine-grained tokens": "精細化的令牌",
                "Tokens (classic)": "令牌（經典）",

        // 開發者設置/精細化的個人訪問令牌 https://github.com/settings/tokens?type=beta
            "Fine-grained personal access tokens": "精細化的個人訪問令牌",
                "Need an API token for scripts or testing?": "需要用於腳本或測試的 API 令牌？",
                "Generate a personal access token": "生成個人訪問令牌",
                "for quick access to the": "用於快速訪問",

                "These are fine-grained, repository-scoped tokens suitable for personal": "這些都是精細化的、倉庫域的令牌，適合個人",
                "use and for using Git over HTTPS.": "使用和通過 HTTPS 使用 Git。",

                "Make sure to copy your personal access token now as you will not be able to see this again.": "請務必立即複製您的個人訪問令牌，因為您將無法再次看到它。",
                "Loading expiration ...": "載入有效期 ...",
                "This token has expired.": "此令牌已過期。",
                    "To set a new expiration date, you must regenerate the token.": "要設置新的有效期，您必須重新生成令牌。",

            // 頂部提醒
                "Deleted personal access token": "已刪除個人訪問令牌",

        // 開發者設置/個人訪問令牌（經典） https://github.com/settings/tokens
            "Personal access tokens (classic)": "個人訪問令牌（經典）",
            "Generate new token": "生成新令牌",
                "Fine-grained, repo-scoped": "精細化、 倉庫域",
                "Generate new token (classic)": "生成新令牌（經典）",
                    "For general use": "一般用途",
            "Revoke all": "全部撤銷",
            "Tokens you have generated that can be used to access the": "生成令牌用於訪問",
            "Expires": "有效期至",
            "Expired": "有效期至",
            "This token has no expiration date": "此令牌未設置有效期",
            "Regenerate": "重新生成",
            "this token to take advantage of the": "此令牌使用",
            "new token formats": "新的令牌格式",
            "Personal access tokens (classic) function like ordinary OAuth access tokens. They can be used instead of a password for Git over HTTPS, or can be used to": "個人訪問令牌（經典）的功能類似於普通的 OAuth 訪問令牌。它們可以用來代替 HTTPS 上 Git 的密碼，或者可以用來",
            "authenticate to the API over Basic Authentication": "通過 ‘基本身份驗證’ 對 API 進行身份驗證",

            "Never used": "尚未使用",
            "Last used within the last week": "最後一次使用是最近 1 周之內",

            // 全部撤銷對話框
            "Are you sure you want to revoke access for all personal access tokens?": "對話框您確定要撤銷所有個人訪問令牌的訪問權限嗎？",
            "This will revoke access for": "這將撤銷訪問",
            "all personal access tokens": "所有個人訪問令牌",
            ", but will not revoke access for any authorized third-party OAuth applications. This action cannot be undone.": "，但不會撤銷任何授權第三方 OAuth 應用的訪問權限。此操作無法撤消。",
            "Any SSH keys created on your behalf by personal access tokens will also be deleted.": "任何由個人訪問令牌代表您創建的 SSH 密鑰也將被刪除",
            "Type your username to confirm": "輸入您的用戶名進行確認",
            "I understand, revoke access for everything": "我明白了，依然撤銷對一切的訪問",

        // 創建精細化個人訪問令牌 https://github.com/settings/personal-access-tokens/new
            "New fine-grained personal access token": "新建精細化個人訪問令牌",
            "Create a fine-grained, repository-scoped token suitable for personal API use and for using Git over HTTPS.": "創建精細化的、倉庫域的令牌，適合個人 API 使用和通過 HTTPS 使用 Git。",
            "Token name": "令牌名稱",
                "A unique name for this token. May be visible to resource owners or users with possession of the token.": "此令牌的唯一名稱。可能對資源所有者或持有該令牌的用戶可見。",
                "Name can't be blank": "名稱不能為空",
                "is a vaild name.": "是一個有效的名稱。",
                "is an invalid name. The token name has already been taken.": "是一個無效的名稱。令牌名稱已被占用。",
            "Description": "描述",
            "What is this token for?": "這個令牌是用來做什麼的？",
            "Resource owner": "資源所有者",
            "Authorizing...": "授權中...",

            "Custom expiration can't be blank. Please choose a date.": "自定義過期時間不能為空。請選擇日期。",

            "Repository access": "倉庫訪問",
                "Public Repositories (read-only)": "公共倉庫（只讀）",
                "All repositories": "所有倉庫",
                    "This applies to all current": "這適用於資源所有者擁有的所有當前",
                    "future repositories owned by the resource owner.": "未來的倉庫。",
                    "Also includes public repositories (read-only).": "還包括公共倉庫（只讀）。",
                "Only select repositories": "僅選定的倉庫",
                    "Select at least one repository. Max 50 repositories.": "至少選擇一個倉庫。最多 50 個倉庫。",
                    "Select repositories": "選擇倉庫",
                    "Search for a repository": "搜索倉庫",
                    // [/Selected (\d+) repositor(y|ies)./, "選定 #1 個倉庫"],
                        "No repositories found.": "未找到倉庫。",

            // 權限
            "Permissions": "權限",
                "Read our": "閱讀我們的",
                "permissions documentation": "權限文檔",
                "for information about specific permissions.": "以了解關於具體權限的信息。",

                "Access:": "訪問權限：",
                "Select an access level": "選擇訪問級別",
                "No access": "禁止訪問",
                "Read-only": "只讀",
                "Read and write": "讀寫",
                "Admin": "管理員",

                "Selected": "項被選中",
                "mandatory": "強制",

                "Repository permissions": "倉庫權限",
                    "Repository permissions permit access to repositories and related resources.": "倉庫權限允許訪問倉庫和相關資源。",

                    "Actions": "操作",
                        "Workflows, workflow runs and artifacts.": "工作流程、工作流程的運行和工件。",
                    "Administration": "管理",
                        "Repository creation, deletion, settings, teams, and collaborators.": "倉庫創建、刪除、設置、團隊和協作者。",
                    "Checks": "檢查",
                        "Checks on code.": "檢查程式碼。",
                    "Code scanning alerts": "程式碼掃描警報",
                        "View and manage code scanning alerts.": "查看和管理程式碼掃描警報。",
                    // "": "程式碼空間",
                        "Create, edit, delete and list Codespaces.": "創建、編輯、刪除和列出程式碼空間。",
                    "Codespaces lifecycle admin": "程式碼空間的生命週期管理",
                        "Manage the lifecycle of Codespaces, including starting and stopping.": "管理程式碼空間的生命週期，包括啟動和停止。",
                    "Codespaces metadata": "程式碼空間元數據",
                        "Access Codespaces metadata including the devcontainers and machine type.": "訪問程式碼空間元數據，包括開發容器和機器類型。",
                    "Codespaces secrets": "程式碼空間機密",
                        "Restrict Codespaces user secrets modifications to specific repositories.": "限制程式碼空間的用戶機密對特定倉庫的修改。",
                    "Commit statuses": "提交狀態",
                        "Commit statuses.": "提交狀態。",
                    "Contents": "內容",
                        "Repository contents, commits, branches, downloads, releases, and merges.": "倉庫內容、提交、分支、下載、發布和合併。",
                    // 自定義屬性
                        "View and set values for a repository's custom properties, when allowed by the property.": "在屬性允許的情況下，查看和設置倉庫自定義屬性的值。",
                    "Dependabot alerts": "Dependabot 警報",
                        "Retrieve Dependabot alerts.": "檢索 Dependabot 警報。",
                    "Dependabot secrets": "Dependabot 機密",
                        "Manage Dependabot repository secrets.": "管理 Dependabot 倉庫的機密。",
                    "Deployments": "部署",
                        "Deployments and deployment statuses.": "部署和部署狀態。",
                    "Discussions": "討論",
                        "Discussions and related comments and labels.": "討論及相關評論和標籤。",
                    "Environments": "環境",
                        "Manage repository environments.": "管理倉庫環境。",
                    "Issues": "議題",
                        "Issues and related comments, assignees, labels, and milestones.": "議題及相關評論、受理人、標籤和里程碑。",
                    "Merge queues": "合併列隊",
                        "Manage a repository's merge queues": "管理倉庫的合併隊列。",
                    "Metadata": "元數據",
                        "Search repositories, list collaborators, and access repository metadata.": "搜索倉庫、列出協作者，訪問倉庫元數據。",
                    "Packages": "軟件包",
                        "Packages published to the GitHub Package Platform.": "發布軟件包到 GitHub Package 平台。",
                    "Pages": "GitHub Pages",
                        "Retrieve Pages statuses, configuration, and builds, as well as create new builds.": "檢索頁面狀態、配置和構建，以及創建新的構建。",
                    "Projects": "項目",
                        "Manage classic projects within a repository.": "管理倉庫中的經典項目。",
                    "Pull requests": "拉取請求",
                        "Pull requests and related comments, assignees, labels, milestones, and merges.": "拉取請求及相關評論、受讓人、標籤、里程碑和合併。",
                    "Repository security advisories": "倉庫安全公告",
                        "View and manage repository security advisories.": "查看和管理安全公告",
                    "Secret scanning alerts": "機密掃描警報",
                        "View and manage secret scanning alerts.": "查看和管理機密掃描警報。",
                    "Secrets": "機密",
                        "Manage Actions repository secrets.": "管理操作倉庫機密。",
                    "Variables": "變量",
                        "Manage Actions repository variables.": "管理操作倉庫變量。",
                    "Webhooks": "Web 鉤子",
                        "Manage the post-receive hooks for a repository.": "管理倉庫的接收後鉤子。",
                    "Workflows": "工作流程",
                        "Update GitHub Action workflow files.": "更新 GitHub Actions 工作流程文件。",

                "Account permissions": "帳戶權限",
                    "User permissions permit access to resources under your personal GitHub account.": "用戶權限允許訪問您個人 GitHub 帳戶下的資源。",

                    "Block another user": "拉黑其他用戶",
                        "View and manage users blocked by the user.": "查看和管理被用戶拉黑的用戶。",
                    "Codespaces user secrets": "程式碼空間用戶機密",
                        "Manage Codespaces user secrets.": "管理程式碼空間用戶機密。",
                    "Email addresses": "電子郵箱地址",
                        "Manage a user's email addresses.": "管理用戶的電子郵箱地址。",
                    // 關注者
                        "A user's followers": "用戶的關注者",
                    "GPG keys": "GPG 密鑰",
                        "View and manage a user's GPG keys.": "查看和管理用戶的 GPG 密鑰。",
                    // Gist
                        "Create and modify a user's gists and comments.": "創建和修改用戶的程式碼片段和評論。",
                    "Git SSH keys": "Git SSH 密鑰",
                    "Interaction limits": "交互限制",
                        "Interaction limits on repositories": "倉庫的交互限制",
                    "Plan": "計劃",
                        "View a user's plan.": "查看用戶的計劃。",
                    "Private repository invitations": "私有倉庫邀請",
                        "View a user's invitations to private repositories": "查看用戶對私有倉庫的邀請",
                    "Profile": "個人信息",
                        "Manage a user's profile settings.": "管理用戶的個人信息設置。",
                    "SSH signing keys": "SSH 簽名密鑰",
                        "View and manage a user's SSH signing keys.": "查看和管理用戶的 SSH 簽名密鑰。",
                    "Starring": "星標",
                        "List and manage repositories a user is starring.": "列出和管理用戶已加星標的倉庫。",
                    "Watching": "關注",
                        "List and change repositories a user is subscribed to.": "列出和更改用戶訂閱的倉庫。",

                "Organization permissions": "組織權限",
                    "Organization permissions permit access to organization related resources.": "組織權限允許訪問組織相關資源。",

                    // 管理
                        "Manage access to an organization.": "管理對組織的訪問。",
                    "Blocking users": "拉黑用戶",
                        "View and manage users blocked by the organization.": "查看和管理被組織拉黑的用戶。",
                    "Custom properties": "自定義屬性",
                        "View custom properties, write repository values, and administer definitions.": "查看自定義屬性、寫入倉庫值並管理定義。",
                    "Custom repository roles": "自定義倉庫角色",
                        "Create, edit, delete and list custom repository roles.": "創建、編輯、刪除和列出自定義倉庫角色。",
                    "Events": "活動",
                        "View events triggered by an activity in an organization.": "查看組織中某項活動所觸發的事件。",
                    "GitHub Copilot for Business": "GitHub Copilot 商業版",
                        "Manage Copilot for Business seats and settings": "管理 GitHub Copilot 商業版席位和設置",
                    "Members": "成員",
                        "Organization members and teams.": "組織成員和團隊。",
                    "Organization announcement banners": "組織公告橫幅",
                        "View and modify announcement banners for an organization.": "查看並修改組織的公告橫幅。",
                    "Organization codespaces": "組織程式碼空間",
                        "Manage Codespaces for an organization.": "管理組織的程式碼空間。",
                    "Organization codespaces secrets": "組織程式碼空間機密",
                        "Manage Codespaces Secrets for an organization.": "管理組織的程式碼空間機密。",
                    "Organization codespaces settings": "組織程式碼空間設置",
                        "Manage Codespaces settings for an organization.": "管理組織的程式碼空間設置。",
                    "Organization dependabot secrets": "組織 Dependabot 機密",
                        "Manage Dependabot organization secrets.": "管理 Dependabot 組織的機密。",
                    "Plan": "計劃",
                        "View an organization's plan.": "查看組織的計劃。",
                    // 項目
                        "Manage projects for an organization.": "管理組織的項目。",
                    // 機密
                        "Manage Actions organization secrets.": "管理操作組織機密",
                    "Self-hosted runners": "自託管運行器",
                        "View and manage Actions self-hosted runners available to an organization.": "查看和管理組織可用的 “操作自託管運行器”。",
                    "Team discussions": "團隊討論",
                        "Manage team discussions and related comments.": "管理團隊討論及相關評論。",
                    // 變量
                        "Manage Actions organization variables.": "管理操作組織變量。",
                    // Web 鉤子
                        "Manage the post-receive hooks for an organization.": "管理組織的接收後鉤子。",

            // 概述
                // [/(\d+) permissions for none of your repositories/, ""],
                "permission": "項權限",
                "Organization permission": "項組織權限",
                "s": " ",
                "for": " ",
                "none": "無",
                "all": "所有",
                "of your repositories": "您的倉庫",
                "Account permission": "項帳戶權限",

                "This token will expire": "此令牌將過期：",
                "on an unselected custom date.": "未選擇的自定義日期。",
                "This token will be ready for use immediately.": "該令牌將即可可用。",

        // https://github.com/settings/personal-access-tokens/<id>
            "No description": "暫無描述",
            "Created": "創建於",
            "Access on": "訪問:",
            "Select the repositories this token can access. Personal access tokens can always read from all public repositories on GitHub.com": "選擇此令牌可以訪問的倉庫。個人訪問令牌始終可以讀取 GitHub.com 上所有公共倉庫中的內容。",
            "This token does not have access to any repositories.": "此令牌無權訪問任何倉庫。",
            "User permissions": "用戶權限",
            "This token does not have any user permissions.": "此令牌沒有任何用戶權限。",
            "This token does not have any repository permissions.": "此令牌沒有任何倉庫權限。",

            // 頂部提醒
                "Your personal access token has been updated": "您的個人訪問令牌已更新",

        // 重新生成精細化個人訪問令牌 https://github.com/settings/personal-access-tokens/<id>/regenerate
            "Regenerate fine-grained personal access token": "重新生成精細化個人訪問令牌",

        // 創建新個人訪問令牌 https://github.com/settings/tokens/new
            "New personal access token (classic)": "新建個人訪問令牌（經典）",
            "Note": "備註",
                "Note can't be blank": "備註不能為空",
            "What’s this token for?": "這個令牌有什麼用？",

            "Expiration": "有效期",
            // "This token expires": "該令牌有效期至",
            ". To set a new expiration date, you must": "。要設置一個新的有效期，您必須",

            // 有效期 下拉菜單
            "7 days": "7 天",
            "30 days": "30 天",
            "60 days": "60 天",
            "90 days": "90 天",
            "Custom...": "自定義...",
            "No expiration": "無有效期",
            "The token will never expire!": "此令牌永不過期！",
            "GitHub strongly recommends that you set an expiration date for your token to help keep your information secure.": "GitHub 強烈建議您為令牌設置有效期，以幫助確保您的信息安全。",

            "Select scopes": "選擇作用域",
            "Scopes define the access for personal tokens.": "作用域定義了個人令牌的訪問範圍。",
            "Read more about OAuth scopes.": "了解更多關於 OAuth 作用域的信息。",
            "Full control of private repositories": "完全控制私有倉庫",
            "Access commit status": "訪問提交狀態",
            "Access deployment status": "訪問部署狀態",
            "Access public repositories": "訪問公共倉庫",
            "Access repository invitations": "訪問倉庫邀請",
            "Read and write security events": "讀寫安全事件",
            "Update GitHub Action workflows": "更新 GitHub Actions 工作流程",
            "Upload packages to GitHub Package Registry": "將包上傳到 GitHub Packages 包註冊",
            "Download packages from GitHub Package Registry": "從 GitHub Packages 包註冊表下載包",
            "Delete packages from GitHub Package Registry": "從 GitHub Packages 包註冊表中刪除包",
            "Full control of orgs and teams, read and write org projects": "完全控制組織和團隊，讀寫組織項目",
            "Read and write org and team membership, read and write org projects": "讀寫組織和團隊成員，讀寫組織項目",
            "Read org and team membership, read org projects": "讀取組織和團隊成員，讀取組織項目",
            "Manage org runners and runner groups": "管理組織運行器和運行器組",
            "Full control of user public keys": "完全控制用戶公鑰",
            "Write user public keys": "寫入用戶公鑰",
            "Read user public keys": "讀取用戶公鑰",
            "Full control of repository hooks": "完全控制倉庫鉤子",
            "Write repository hooks": "寫入倉庫鉤子",
            "Read repository hooks": "讀取倉庫鉤子",
            "Full control of organization hooks": "完全控制組織鉤子",
            "Create gists": "創建 Gist",
            "Access notifications": "訪問通知",
            "Update ALL user data": " 更新所有用戶數據",
            "Read ALL user profile data": "讀取所有用戶個人資料數據",
            "Access user email addresses (read-only)": "訪問用戶電子郵箱地址（只讀）",
            "Follow and unfollow users": "關注和取消關注用戶",
            "Delete repositories": "刪除倉庫",
            "Read and write team discussions": "讀寫團隊討論",
            "Read team discussions": "讀取團隊討論",
            "Full control of enterprises": "完全控制企業",
            "Manage enterprise runners and runner groups": "管理企業運行器和運行器組",
            "Read and write enterprise billing data": "讀寫企業計費數據",
            "Read enterprise profile data": "讀取企業個人數據",
            "Full control of audit log": "完全控制審核日誌",
            "Read access of audit log": "讀取審核日誌",
            "Full control of codespaces": "完全控制程式碼空間",
            "Ability to create, read, update, and delete codespace secrets": "創建、讀取、更新和刪除程式碼空間機密",
            "Full control of GitHub Copilot settings and seat assignments": "完全控制 GitHub Copilot 設置和席位分配",
                "View and edit Copilot Business seat assignments": "查看和編輯 GitHub Copilot 商業版席位分配",
            "Full control of projects": "完全控制項目",
            "Read access of projects": "讀取項目",
            "Full control of public user GPG keys": "完全控制公共用戶 GPG 密鑰",
            "(Developer Preview)": "（開發者預覽版）",
            "Write public user GPG keys": "寫入公共用戶 GPG 密鑰",
            "Read public user GPG keys": "讀取公共用戶 GPG 密鑰",
            "Full control of public user SSH signing keys": "完全控制公共用戶 SSH 簽名密鑰",
            "Write public user SSH signing keys": "寫入公共用戶 SSH 簽名密鑰",
            "Read public user SSH signing keys": "讀取公共用戶 SSH 簽名密鑰",            "Generate token": "生成令牌",
                // 頂部提醒
                "Some of the scopes you’ve selected are included in other scopes. Only the minimum set of necessary scopes has been saved.": "您選擇的一些作用域包含在其他作用域中。只保存了必要作用域的最小集合。",

            "Make sure to copy your personal access token now. You won’t be able to see it again!": "確保立即複製您的個人訪問令牌。您將無法再看到它！",

            "Are you sure you want to delete this token?": "您確定要刪除此令牌嗎？",
            "Any applications or scripts using this token will no longer be able to access the GitHub API. You cannot undo this action.": "任何使用此令牌的應用或腳本將無法再訪問 GitHub API。您無法撤消此操作。",
            "I understand, delete this token": "我明白了，依然刪除該令牌。",

        // 編輯個人訪問令牌 https://github.com/settings/tokens/<id>
            "Edit personal access token (classic)": "編輯個人訪問令牌（經典）",
            "If you’ve lost or forgotten this token, you can regenerate it, but be aware that any scripts or applications using this token will need to be updated.": "如果您丟失或忘記了此令牌，則可以重新生成它，但請注意，需要更新使用此令牌的任何腳本或應用。",
            "This token has no expiration date. To set a new expiration date, you must": "此令牌未設置有效期。要設置新的有效期，您必須",
            "regenerate the token": "重新生成令牌",
            "Update token": "更新令牌",
            "Delete personal access token": "刪除個人訪問令牌",
            "Delete token": "刪除令牌",
            "Delete this token": "刪除令牌",

        // 重新生成個人訪問令牌 https://github.com/settings/tokens/<id>/regenerate
            "Regenerate personal access token (classic)": "重新生成個人訪問令牌（經典）",
            "Submitting this form will generate a new token. Be aware that any scripts or applications using this token will need to be updated.": "提交此表單將產生一個新的令牌。請注意，任何使用該令牌的腳本或應用將需要更新。",
            "Regenerate token": "重新生成令牌",

    },
    "regexp": [ // 正則翻譯
        [/The token will expire/, "該令牌有效期至"],
        [/Last used within the last (\d+) weeks?/, "最後一次使用是最近 $1 周之內"],
        [/Last used within the last (\d+) months?/, "最後一次使用是最近 $1 月之內"],
        [/Selected (\d+) repositor(y|ies)./, "選定 $1 個倉庫"],
        [/Access:/, "訪問權限:"],
    ],
};
I18N.zh["settings/personal-access-tokens"] = I18N.zh["settings/tokens"];

// 倉庫相關==
I18N.zh["repository-public"] = { // 倉庫 - 公共部分
    "static": { // 靜態翻譯
        // 倉庫頁面 /<user-name>/<repo-name>/
            // 被 GitHub 官方禁用
            "This repository has been disabled.": "此倉庫已被禁用。",
            "Access to this repository has been disabled by GitHub Staff due to a violation of GitHub's terms of service. If you are the owner of the repository, you may reach out to GitHub Support for more information.": "由於違反了 GitHub 的服務條款，GitHub 已禁止訪問此倉庫。如果您是倉庫的所有者，您可以聯繫 GitHub 支持以獲取更多信息。",

            // 倉庫違反 DMCA
            "Repository unavailable due to DMCA takedown.": "由於 DMCA 刪除，倉庫不可用。",
            "This repository is currently disabled due to a DMCA takedown notice. We have disabled public access to the repository. The notice has been": "由於 DMCA 刪除通知，此倉庫當前已被禁用。我們已經禁止公眾訪問該倉庫。該通知已",
            "publicly posted": "公開發布",
            "If you are the repository owner, and you believe that your repository was disabled as a result of mistake or misidentification, you have the right to file a counter notice and have the repository reinstated. Our help articles provide more details on our": "如果您是倉庫所有者，並且您認為您的倉庫由於錯誤或誤認而被禁用，您有權提交反通知並恢復倉庫。我們的幫助文章提供了關於我們的更多詳細信息",
            "DMCA takedown policy": "DMCA 刪除政策",
            "how to file a counter notice": "如何提交反通知",
            ". If you have any questions about the process or the risks in filing a counter notice, we suggest that you consult with a lawyer.": "。如果您對提交反通知的流程或風險有任何疑問，我們建議您咨詢律師。",

             // 用戶 浮動信息卡
                "- same time": "- 時間相同",
                "Recently edited these files": "最近編輯過這些文件",
                "Owns this repository": "擁有該倉庫",
                "Left a review": "留下了一個評論",
                "Committed to this repository": "已提交過這個倉庫",
                "Committed to this repository in the past day": "最近一天裡已提交過這個倉庫",
                "Committed to this repository in the past week": "最近一周裡已提交過這個倉庫",
                "Committed to this repository in the past month": "最近一個月裡已提交過這個倉庫",
                "Member of": "隸屬組織",
                // [/, and (\d+) more/, "，以及其他 $1 個組織"],
                "Opened this issue": "打開了該議題",
                "Opened this pull request": "打開了該拉取請求",
                "Opened this pull request (their first ever)": "打開了該拉取請求（他們有史以來的第一個請求）",
                "Started this discussion": "開啟了該討論",

            // 組織  浮動信息卡
                // [/(\d+) repositor(y|ies)/, "$1 個倉庫"],
                // [/(\d+) members?/, "$1 個成員"],

            "Some checks haven't completed yet": "部分檢查還未完成",

            "Jump to bottom": "跳到底部", //小屏模式

            // 標籤欄
            "Code": "程式碼",
            "Pull requests": "拉取請求",
            "Discussions": "討論",
            "Actions": "操作",
            "Projects": "項目",
            "Security": "安全",
            "Insights": "洞察",
            "Settings": "設置",

            "Additional navigation options": "更多導航選項", // 小屏

            // "Pulse": "統計",
            // "Graphs": "圖表",

            // 返回通知頁狀態條
            "Back to notifications": "回到通知",
            "Done": "已完成",
            "Unsubscribe": "退訂",
            "Mark as read": "標記為已讀",
            "Mark as unread": "標記為未讀",
            "Save": "保存",

            // 評論框頭部欄 (議題 & 拉取請求)
                "Contributor": "貢獻者",
                "Owner": "所有者",
                "Author": "作者",
                    "You are the author of this issue.": "您是這個議題的作者。",  // 議題
                    "You are the author of this pull request.": "您是這個拉取請求的作者。", // 拉取請求
                    "This user is the author of this issue.": "該用戶是這個議題的作者。",// 拉取請求
                    "This user is the author of this pull request.": "該用戶是這個拉取請求的作者。",// 拉取請求
                "Member": "成員",
                    //[/This user is a member of the ([^ ]+)./, "該用戶是 $1 組織的成員。"],
                "Collaborator": "協作者",
                    //[/This user has been invited to collaborate on the ([^ ]+) repository./, "該用戶已被邀請在 $1 倉庫上進行協作。"],
                "Pick your reaction": "選擇您的表情",
                "Copy link": "複製鏈接",
                "Quote reply": "引用回覆",
                "Reference in new issue": "引用到新議題",
                    // 引用到新議題 對話框
                    "Body": "正文",
                "Report content": "舉報內容",
                "Report": "舉報",
                // 評論刪除提醒
                    "Are you sure you want to delete this?": "您定要刪除這個嗎？",

                "commented": "評論於",
                "— with": "— 通過",
                "Update comment": "更新評論",
                "Hide": "隱藏",

                "created": "創建",
                "edited": "編輯",
                "(most recent)": "(最近的)",
                "(deleted)": "(已刪除)",
                "deleted this content": "刪除了該內容",
                // 評論歷史查看
                "Options": "選項",
                // 選項下拉菜單
                "More options": "更多選項",
                "The most recent revision cannot be deleted. Need to delete sensitive information? Go to the specific edit where the information was added.": "最近的修訂版不能被刪除。需要刪除敏感信息？請到信息的具體編輯處修改。",
                "Delete revision from history": "從歷史記錄中刪除修訂",
                "This edit’s content will no longer be visible": "此修改的內容將不再可見",

            // 切換分支/標籤 下拉菜單
                "Switch branches/tags": "切換分支/標籤",
                "Find or create a branch…": "查找或創建分支…",
                "Find a branch...": "查找分支...",
                "Filter branches/tags": "搜索分支/標籤",
                "Branches": "分支",
                "default": "默認",
                "View all branches": "查看全部分支",
                "Find a tag": "查找標籤",
                "Tags": "標籤",
                "Search for a tag": "搜索標籤",
                "Nothing to show": "暫無",
                "View all tags": "查看全部標籤",

                "Find or create a branch...": "查找或創建分支...",
                "View all": "查看全部",
                "branches": "分支",
                "Find a tag...": "查找標籤...",
                "Nothing to show": "暫無",
                "tags": "標籤",

                "View all rules": "查看全部規則",

            // 鍵盤快捷鍵
                "Open in codespace"  : "在程式碼空間中打開",
                "Open in github.dev editor"  : "在 github.dev 編輯器中打開",
                "Open github.dev editor in a new tab"  : "在新標籤頁中打開 github.dev 編輯器",
                "Open cs.github.com in a new tab": "在新標籤頁中打開 cs.github.com",
                "Focus secondary search bar" : "聚焦二級搜索欄",
                "Go to Code"                 : "跳轉到程式碼",
                "Go to Issues"               : "跳轉到議題",
                "Go to Pull Requests"        : "跳轉到拉取請求",
                "Go to Actions"              : "跳轉到操作",
                "Go to Projects"             : "跳轉到項目",
                "Go to Wiki"                 : "跳轉到 Wiki",
                "Go to Discussions"          : "跳轉到討論",

                "Copilot chat": "Copilot 聊天",
                "Open Copilot chat": "打開 Copilot 聊天",
                "Close Copilot chat": "關閉 Copilot 聊天",
                "Expand/collapse Copilot chat": "展開/摺疊 Copilot 聊天",

            // 議題
                "Submit comment": "提交評論",
                "Submit comment and close issue": "提交評論並關閉議題",
                "Preview comment": "預覽評論",
                "Create issue": "創建議題",
                // "篩選用戶": "",
                "Filter by or edit assignees"  : "按受理人篩選或編輯受理人",
                "Filter by or edit labels"     : "按標籤篩選或編輯標籤",
                "Filter by or edit projects"   : "按項目篩選或編輯項目",
                "Filter by or edit milestones" : "按里程碑篩選或編輯里程碑",
                "Reply (quoting selected text)": "答覆（引用所選文本）",
                "Open saved replies": "打開快捷回覆（引用所選文本）",
                "Insert saved reply (with open saved replies)": "插入快捷回覆（打開快捷回覆）",

                "Pull request list": "拉取請求列表",
                    "Open pull request"  : "打開拉取請求",
                "Pull request - Conversation tab": "拉取請求 - 對話標籤卡",
                    "Submit comment and close or open pull request": "提交評論和關閉或打開拉取請求",
                    "Request reviewers": "請求審查者",
                    "Link an issue or pull request from the same repository": "鏈接同一倉庫的議題或拉取請求",
                    "Toggle visibility of all collapsed review comments instead of just the current one": "切換所有摺疊審查意見的可見性，而不僅僅是當前的審查意見",
                "Pull request - Files changed tab": "拉取請求 - 文件更改標籤卡",
                    "Open commits list": "打開提交列表",
                    "Open files list": "打開文件列表",
                    "Next commit": "下一個提交",
                    "Previous commit": "上一個提交",
                    "Show or hide annotations": "顯示或隱藏批註",
                    "Show or hide comments": "顯示或隱藏評論",
                    "Submit a review comment": "提交審查意見",
                    "Collapse or expand all files instead of just the current one": "摺疊或展開所有文件，而不僅僅是當前文件",
                    "and click": "和點擊",

            // 高頻詞
                "Open": "打開",
                "Closed": "已關閉",
                "Merged": "已合併",
                "Draft": "草案",
                "Branch": "分支",
                "Branches": "分支",
                "Tags": "標籤",

            "Compare & pull request": "比較 & 拉取請求",

        // 倉庫 404 頁面（非刪庫狀態）
            "404 - page not found": "404 - 找不到頁面",
            "The": "該",
            "branch of": "分支",
            "does not contain the path": "倉庫，不包含路徑",
            "Return to the repository overview": "返回倉庫概述",
            "Cannot find a valid ref in": "未找到有效的引用",
            "Go to default branch": "跳轉到默認分支",

        // 頁面加載異常(倉庫)
            "Error loading page": "加載頁面出錯",
            "It looks like your internet connection is down. Please check it.": "您的網絡連接似乎出現故障。請檢查一下。",

        // 邀請繼任者提醒
            "Ensure the future of your work!": "確保您工作的未來！",
            "Consider inviting another GitHub user to be your successor.": "考慮邀請另一位 GitHub 用戶作為您的繼任者。",
            "Inviting a successor helps ensure the continuity of your work in case you are unable to access your account.": "邀請繼任者有助於在您無法訪問賬戶時確保工作的連續性。",
            "Invite a successor": "邀請繼任者",

        // 倉庫贊助
            "Couldn't load subscription status.": "無法加載贊助狀態。",
            "Retry": "重試",

        // 提交檢查對話框
            "Some checks haven’t completed yet": "部分檢查尚未完成",
            "Some checks were not successful": "部分檢查未成功",
            "All checks have passed": "所有檢查通過",
            "All checks have failed": "所有檢查失敗",
            "Waiting to run this check...": "正在等待運行此檢查...",
            "Queued": "隊列中",
            "Skipped": "已跳過",
            "Deployed": "已部署",
            "Pending": "待處理",
            "Build Failed": "構建失敗",
            "Build Passed": "構建通過",
            "Build Errored": "構建錯誤",
            "Build Canceled": "構建取消",
            "Waiting for build": "等待構建",
    },
    "regexp": [ // 正則翻譯
        [/Started (\d+) discussions? in this repository in the past week/, "過去一周內在此倉庫中開啟了 $1 個討論"], // 用戶 浮動信息卡
        [/Started (\d+) discussions? in this repository in the past month/, "過去一個月內在此倉庫中開啟了 $1 個討論"], // 用戶 浮動信息卡
        [/(\d+) successful checks/, "$1 個成功的檢查"],
        [/Successful in (\d+)s/, "在 $1 秒內成功"],
        [/(\d+) in progress check/, "$1 個正在運行的檢查"],
        [/, and (\d+) more/, "，以及其他 $1 個組織"], // 用戶 浮動信息卡
        [/(\d+) repositor(y|ies)/, "$1 個倉庫"], // 組織  浮動信息卡
        [/(\d+) members?/, "$1 個成員"], // 組織  浮動信息卡
        [/had recent pushes (\d+) seconds? ago/, "分支有了最新的推送，$1 秒之前"],
        [/had recent pushes (\d+) minutes? ago/, "分支有了最新的推送，$1 分鐘之前"],
        [/had recent pushes less than (\d+) minutes? ago/, "分支有了最新的推送，不到 $1 分鐘"],
        [/had recent pushes about/, "分支有了最新的推送，大約"],
        [/This user is a member of the ([^ ]+)./, "該用戶是 $1 組織的成員。"],
        [/This user has been invited to collaborate on the ([^ ]+) repository./, "該用戶已被邀請在 $1 倉庫上進行協作。"],
        [/You are the owner of the (.*) repository./, "您是 $1 倉庫的所有者。"],
        [/This user is the owner of the (.*) repository./, "該用戶是 $1 倉庫的所有者。"],
        [/You have previously committed to the (.*) repository./, "您之前有提交到 $1 倉庫。"],
        [/This user has previously committed to the (.*) repository./, "該用戶之前有提交到 $1 倉庫。"],
        [/This repository has been archived by the owner (on .+). It is now read-only./, "此倉庫已由所有者於 $1 存檔。它現在是隻讀的。"],
    ],
};

I18N.zh["page-new-repo"] = {// 倉庫 - 新建/導入/復刻倉庫
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 新建倉庫 https://github.com/new
            "Create a new repository": "創建新倉庫",
            "A repository contains all project files, including the revision history.": "倉庫包含項目中的所有文件，包括修訂歷史記錄。",
            "Already have a project repository elsewhere?": "在其他地方已有倉庫？",
            "Import a repository.": "導入倉庫",
            //"Cancel": "取消",
            //"Begin import": "開始導入",
            "Owner": "所有者",
            "Repository name": "倉庫名稱",
            "Great repository names are short and memorable. Need inspiration? How about": "好的倉庫名稱應該簡單且容易記憶。需要靈感嗎？這個怎麼樣：",
                "Checking availability…": "檢查可用性…",
                "is available.": "名稱可用。",
                "The repository": "倉庫",
                "already exists on this account.": "已經存在於此帳戶。",
                "Your new repository will be created as": "您的新倉庫將被創建為",
                "New repository name must not be blank": "新倉庫名稱不能為空",

                // 用戶名同名倉庫
                "You found a secret!": "您發現了一個秘密！",
                "is a ✨": "是一個 ✨",
                "special": "特別的",
                "✨ repository that you can use to add a": "✨ 倉庫，您可以用它來添加一個",
                "to your GitHub profile. Make sure it’s public and initialize it with a": "到您的 GitHub 個人資料。確保它是公開的，並在初始化時加入一個",
                "to get started.": "以便開始工作。",
                 // 組織 .github 倉庫
                "to your organization's GitHub profile. Make sure it’s public and initialize it with a": "到您組織的 GitHub 個人資料。確保它是公開的，並在初始化時加入一個",
                "in the": "在",
                "directory to get started.": "目錄下以便開始工作。",

            "Description": "描述",
                "(optional)": "(可選)",
            "Public": "公共",
                "Anyone on the internet can see this repository. You choose who can commit.": "任何人都可以看到這個倉庫，您可以選擇誰能提交。",
            "Private": "私有",
                "You choose who can see and commit to this repository.": "您可以選擇誰可以看和提交到該倉庫。",
            "Initialize this repository with:": "使用以下方式初始化此倉庫：",
                "Skip this step if you’re importing an existing repository.": "如果您要導入現有倉庫，請跳過此步驟。",
            "Add a README file": "添加 README 文件",
                "This is where you can write a long description for your project.": "您可以在此處為您的項目編寫詳細描述。",
                "Learn more about READMEs.": "了解更多關於 README 的信息。",
            "Add .gitignore": "添加 .gitignore 文件",
                "Choose which files not to track from a list of templates.": "從模板列表中選擇哪些文件不需要跟蹤。",
                "Learn more about ignoring files.": "了解更多關於忽略文件的信息。",
            ".gitignore template:": ".gitignore 模板：",
                ".gitignore template": ".gitignore 模板",
                "Filter…": "篩選…",
                "None": "無",
            "Choose a license": "選擇許可證",
                "A license tells others what they can and can't do with your code.": "許可證告訴其他人，他們可以使用您的程式碼做什麼和不能做什麼。",
                "Learn more about licenses.": "了解更多關於許可證的信息。",

                "License:": "許可證：",
                    "License": "許可證",

            "You are creating a public repository in your personal account.": "您正在個人帳戶中創建公共倉庫",
            "You are creating a private repository in your personal account.": "您正在個人帳戶中創建私有倉庫",

            "This will set": "這將設置",
            "as the default branch.": "為默認分支。",
            "Change the default name in": "變更默認名稱在",
            "your": "您的",
            "settings": "設置",

            "Create repository": "創建倉庫",
            "Creating repository…": "創建倉庫中…",

        // 依據模板新建倉庫 https://github.com/new?template_owner=<template-owner>&template_name=<template-name>
            "Repository template": "倉庫模板",
                "Fetching templates…": "正在獲取模板…",
                "No template": "不設置模板",
                "Start your repository with a template repository's contents.": "使用模板倉庫的內容新建倉庫。",
            "Include all branches": "包括所有分支",
                "Copy all branches from": "複製所有",
                "and not just the default branch.": "倉庫分支，而不僅僅是默認分支。",

        // 導入倉庫 第一頁 https://github.com/new/import
            "Import your project to GitHub": "將您的項目導入到 GitHub",
                "Import all the files, including revision history, from another version control system.": "導入的所有文件，包括修訂歷史記錄，來自其他版本控制系統。",
                "Support for importing Mercurial, Subversion and Team Foundation Version Control (TFVC) repositories will end on April 12, 2024. For more details, see the": "對導入 Mercurial、Subversion 和 Team Foundation 版本控制 (TFVC) 倉庫的支持將於 2024 年 4 月 12 日結束。有關詳細信息，請參閱",
                "changelog": "更新日誌",

            "Your old repository's clone URL": "您舊倉庫的克隆地址",
            "Learn more about the types of": "了解更多關於",
            "supported VCS": "VCS 的支持",
            "Your new repository details": "新倉庫詳情",
            //"Owner": "所有者",
            "Repository Name": "倉庫名稱",
                // "is available.": "名稱可用。",
                //"The repository": "倉庫",
                //"already exists on this account.": "已經存在於此帳戶。",
                //"Your new repository will be created as": "您的新倉庫將被創建為",
            //"Public": "公共",
            //"Anyone on the internet can see this repository. You choose who can commit.": "任何人都可以看到這個倉庫，您可以選擇誰能提交。",
            //"Private": "私有",
            //"You choose who can see and commit to this repository.": "您可以選擇誰可以看和提交到該倉庫。",
            "Cancel": "取消",
            "Begin import": "開始導入",
            "Preparing import…": "準備導入…",

        // 導入倉庫 第一頁 /<user-name>/<repo-name>/import
            "Import all the files, including the revision history, from another version control system.": "導入的所有文件，包括修訂歷史記錄，來自其他版本控制系統。",
            "Your old repository’s clone URL": "您舊倉庫的克隆地址",
            "supported VCS.": "VCS 的支持。",
            "Your existing repository": "您已存在的倉庫",
            "Change repository": "選擇倉庫",

        // 導入倉庫 第二頁 /<user-name>/<repo-name>/import
            "Preparing your new repository": "準備您的新倉庫",
                "There is no need to keep this window open, we’ll email you when the import is done.": "無需保持此窗口，導入完成後我們會通過電子郵件通知您。",
            "Detecting your project’s version control system…": "正在檢測項目的版本控制系統…",
            "Importing commits and revision history…": "導入提交和修訂歷史…",
            // [/Updating branches and (\d) commit authors?…/, "更新分支和 $1 個提交者…"],
            "Optimizing repository and pushing commits to GitHub…": "優化倉庫並將提交推送到 GitHub...",
            "Importing complete! Your new repository": "導入完成！您的新倉庫",
            "is ready.": "已準備就緒。",

        // 復刻倉庫 /<user-name>/<repo-name>/fork
            "Create a new fork": "創建新復刻",
            "A": " ",
            "is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.": "是一個倉庫的副本。復刻倉庫可以讓您在不影響原項目的情況下自由地進行修改實驗。",
            "View existing forks.": "查看現有復刻。",
            "No available destinations to fork this repository.": "沒有復刻此倉庫的可用目標。",
            "Required fields are marked with an asterisk (*).": "帶星號 (*) 的為必填項。",
            "Creating fork…": "正在創建復刻…",

            "Owners": "所有者",
                "Choose an owner": "選擇所有者",
            "Repository name": "倉庫名稱",

                // [/is available./, "名稱可用。"], // 復刻頁面
                "The repository": "倉庫",
                "already exists on this account.": "已經存在於此帳戶。",
                "Your new repository will be created as": "您的新倉庫將被創建為",
                    "The repository name can only contain ASCII letters, digits, and the characters": "倉庫名稱只能包含 ASCII 字母、數字和字符",

            "By default, forks are named the same as their upstream repository. You can customize the name to distinguish it further.": "默認情況下，復刻的名稱與他們的上游倉庫相同。您可以自定義名稱以進一步區分它。",
            "(optional)": "（可選）",

            "Copy the": "僅複製",
            "branch only": "分支",

            "Contribute back to": "回饋給",
            "by adding your own branch.": "通過添加您自己的分支。",

            "You are creating a fork in your personal account.": "您正在向您的個人帳戶中創建一個復刻。",
            "Create fork": "創建復刻",

    },
    "regexp": [ // 正則翻譯
        [/([^ ]+) is available\./,"$1 名稱可用。"],
        [/You are creating a public repository in the ([^ ]+) organization./,"您正在 $1 組織中創建一個公共倉庫。"], // 創建組織的公共倉庫
        [/You are creating a private repository in the ([^ ]+) organization./,"您正在 $1 組織中創建一個私有倉庫。"], // 創建組織的私有倉庫
        [/\(fork already exists\)/, "（復刻已存在）"], // 復刻頁面
        [/\(repository already exists\)/, "（倉庫已存在）"], // 復刻頁面
        [/is available./, "名稱可用。"], // 復刻頁面
        [/You are creating a fork in the ([^ ]+) organization./, "您正在 $1 組織中創建一個復刻。"], // 復刻頁面
        [/Updating branches and (\d+) commit authors?…/, "更新分支和 $1 個提交者…"], // 倉庫導入第二頁
        ...I18N.zh["repository-public"]["regexp"],
        // [/, and (\d+) more/, "，以及其他 $1 個組織"], // 用戶 浮動信息卡
        // [/(\d+) repositor(y|ies)/, "$1 個倉庫"], // 組織  浮動信息卡
        // [/(\d+) members?/, "$1 個成員"], // 組織  浮動信息卡
    ],
};
I18N.zh["new"] = I18N.zh["page-new-repo"];
I18N.zh["new/import"] = I18N.zh["page-new-repo"];
I18N.zh["repository/import"] = I18N.zh["page-new-repo"];
I18N.zh["repository/fork"] = I18N.zh["page-new-repo"];
I18N.zh["orgs/repositories/new"] = I18N.zh["page-new-repo"];

I18N.zh["repository"] = { // 倉庫頁面 /<user-name>/<repo-name>/
    "static": { // 靜態翻譯
            ...I18N.zh["repository-public"]["static"],

        // 程式碼標籤卡 & 倉庫首頁 /<user-name>/<repo-name>/ 和 /<user-name>/<repo-name>/tree/<branch>
            // [/Branch ([^ ]+) was renamed to ([^ ]+)./, "分支 $1 已更名為 $2。"],

            // 快捷鍵
                "Commands": "命令",
                "Clone repository: Copy HTTPS": "克隆倉庫：複製 HTTPS",
                "Clone repository: Copy SSH": "克隆倉庫：複製 SSH",
                "Clone repository: Copy GitHub CLI": "克隆倉庫：複製 GitHub CLI",
                "Copy file permalink": "複製文件永久鏈接",

            // 操作條
                "forked from": "復刻自",
                "generated from": "創建自",
                "mirrored from": "鏡像自",

                "Pin": "置頂", // 組織倉庫
                "Edit Pins": "編輯置頂", // 組織倉庫
                    "Pin to…": "置頂到…",
                    "Profile": "個人資料頁",
                        "Pin this to your personal profile, visible to everyone": "將此置頂到您的個人資料，對所有人可見",
                        "Limit reached": "已達上限",
                    "Public pins in this organization": "該組織的公共置頂",
                        "Visible to anyone": "對任何人可見",
                    "Private pins in this organization": "該組織的私有置頂",
                        "Visible to members only": "僅對成員可見",
                "Unpin": "取消置頂",

                "Ignoring": "忽略",
                "Stop ignoring": "取消忽略",
                "Watch": "關注",
                "Unwatch": "取消關注",

                "Star": "星標",
                "Unstar": "已加星標",
                "Fork": "復刻",
                "Unfork": "取消復刻",

                "Sponsor": "贊助",
                // 贊助對話框
                // [/Sponsor ([^ ]+)?/, "贊助 $1"], // 贊助按鈕 對話框 標題
                "External links": "外部鏈接",
                "Learn more about funding links in repositories": "了解更多關於倉庫中的贊助鏈接的信息",
                "Report abuse": "舉報濫用",

                // 提交欄 GitHub Action
                "All checks have passed": "已通過所有檢查",


                // 關注 & 訂閱通知設置 下拉菜單
                "Notification settings": "通知設置", //小屏模式
                "Notifications": "通知類型",
                "Participating and @mentions": "參與和 @您",
                    "Only receive notifications from this repository when participating or @mentioned.": "僅在參與或 @您 時接收來自此倉庫的通知。",
                "All Activity": "所有活動",
                    "Notified of all notifications on this repository.": "接收來自此倉庫所有通知。",
                "Ignore": "忽略",
                    "Never be notified.": "永不接收通知。",
                "Custom": "自定義",
                    "Select events you want to be notified of in addition to participating and @mentions.": "選擇除參與和 @您 之外還要接收通知的事件。",
                "Get push notifications on": "要獲取推送通知，使用",
                "Releases": "發行版",
                    "Issues are not enabled for this repository": "此倉庫未啟用議題功能",
                "Discussions": "討論",
                    "Discussions are not enabled for this repository": "該倉庫未啟用討論功能",
                    "Discussions are not enabled for this repo": "此倉庫未啟用討論功能",
                "Security alerts": "安全警報",
                //"Cancel": "取消",
                "Apply": "應用",

                // 復刻下拉
                "Cannot fork because repository is empty.": "無法復刻，因為倉庫是空的。",
                "Cannot fork because you own this repository and are not a member of any organizations.": "不能復刻，因為您擁有該倉庫，而且不是任何組織的成員。",
                "Existing forks": "現有的復刻",
                "You don't have any forks of this repository.": "您沒有此倉庫的任何復刻。",
                "Create a new fork": "創建復刻",

                //
                "Star this repository": "星標倉庫", //小屏模式
                "Unstar this repository": "取消倉庫星標", //小屏模式

            // 倉庫主頁 分支保護
                // [/Your ([^ ]+) branch isn't protected/, "您的 $1 分支不受保護"], // 倉庫主頁 分支保護
                "Your": "您的",
                "branch isn't protected": "分支不受保護", // 新版倉庫概述
                "Protect this branch from force pushing or deletion, or require status checks before merging.": "保護此分支免受強制推送或刪除，或在合併前要求狀態檢查。",
                "View documentation.": "查看文檔",
                "Protect this branch": "保護該分支",

            // 倉庫主頁 Dependabot 警告框
                "We found potential security vulnerabilities in your dependencies.": "我們在您的依賴項中發現了潛在的安全漏洞。",
                "Only the owner of this repository can see this message.": "僅此倉庫的所有者可以看到此消息。",
                "See Dependabot alerts": "查看 Dependabot 警報",

            // 空倉庫
                "This repository is empty.": "此倉庫是空的。",
                "Care to check out the": "是否願意查看",
                "GitHub Channel on YouTube": "YouTube 上的 GitHub 頻道",
                "while you wait?": "在您等待的時候？",

            // 已上架的 GitHub Action 項目
                "Use this GitHub action with your project": "將此 GitHub Actions 用於您的項目",
                "Add this Action to an existing workflow or create a new one": "將此操作添加到現有工作流程或創建新工作流程",
                "View on Marketplace": "去市場查看",

            // 未上架的 GitHub Action 項目
                "You can publish this Action to the GitHub Marketplace": "您可以將此 Action 發布到 GitHub 市場",
                "Draft a release": "起草發布",

            // 訪問已刪除的分支
            "This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository.": "這個提交不屬於本倉庫的任何分支，可能屬於倉庫以外的分支。",

            // 最近有了新提交提醒
            // [/had recent pushes less than/, "有了最近的推送，不到"], //最近有了新提交提醒
            // [/had recent pushes/, "有了最近的推送，"], //最近有了新提交提醒

            "Navigate back to": "導航回", // 小屏模式

            // 左側正文

            // 默認分支被重命名提醒框
                "The default branch has been renamed!": "默認分支已被重新命名!",
                "is now named": "已被重新命名為",
                "If you have a local clone, you can update it by running the following commands.": "如果您有一個本地克隆，您可以通過運行以下命令來更新它。",
                "OK, got it": "好的，我知道了！",

            "branch": "分支",
            "branches": "分支",
            "tag": "標籤",
            "tags": "標籤",

            "Go to file": "轉到文件",
                "No matches found": "未找到匹配項",
            "Add file": "添加文件",
                // 添加文件 下拉菜單
                "Create new file": "新建文件",
                "Upload files": "上傳文件",

            // 程式碼 下拉菜單
                "Local": "本地",
                    "Clone": "克隆",
                        // HTTPS
                        "Clone using the web URL.": "使用 Web URL 克隆。",
                        // SSH
                        "You don't have any public SSH keys in your GitHub account.": "您的 GitHub 帳戶中沒有任何公共 SSH 密鑰。",
                        "You can": "您可以",
                        "add a new public key": "添加新的公共密鑰",
                        ", or try cloning this repository via HTTPS.": "，或嘗試通過 HTTPS 克隆此倉庫。",

                        "Use a password-protected SSH key.": "使用受密碼保護的 SSH 密鑰。",
                        // GitHub CLI
                        "Work fast with our official CLI.": "使用我們的官方 CLI 快速工作。",
                        "Learn more about the CLI": "了解更多關於 CLI 的信息",

                    "Open with GitHub Desktop": "在 GitHub Desktop 中打開",
                        "Launching Github Desktop": "Github Desktop 啟動中",
                            "If nothing happens,": "如果沒有響應",
                            "download Github Desktop": "下載 Github Desktop",
                            "and try again.": "並重試",
                    "Open with Visual Studio": "在 Visual Studio 中打開",
                    "Download ZIP": "下載 ZIP 壓縮包",

                    "Code 55% faster with AI pair programming.": "與 AI 一起編程，寫程式碼速度提高55%。",
                        "Start my free trial": "開始我的免費試用",
                        "Don't show again": "不再顯示",

                    "Which remote URL should I use?": "我應該使用哪個遠程 URL ?",
                    "Copy url to clipboard": "複製鏈接到剪貼板",
                    // "Copy to clipboard": "複製到剪切板",
                    // "Copied!": "✅ 複製成功!",

                // 程式碼空間
                    "Your workspaces in the cloud": "您在雲端的工作空間",
                    //[/Create a codespace on ([^ ]+)/, "在 $1 上創建程式碼空間"],
                    "Codespace repository configuration": "程式碼空間倉庫配置",
                        "New with options...": "新建（選項）...",
                        "Configure dev container": "配置開發容器",
                        "Set up prebuilds": "設置預構建",
                        "Manage codespaces": "管理程式碼空間",
                        "Share a deep link": "分享深度鏈接",
                        "What are codespaces?": "什麼是程式碼空間？",
                    "No codespaces": "尚無程式碼空間",
                    "You don't have any codespaces with this repository checked out": "您沒有檢出此倉庫的任何程式碼空間",
                    //[/Create codespace on ([^ ]+)/, "在 $1 上創建程式碼空間"],
                    "Learn more about codespaces...": "了解更多關於程式碼空間的信息...",
                    "Codespace usage for this repository is paid for by": "該倉庫的程式碼空間使用費由以下人員支付",

                    "On current branch": "在當前分支",
                        "No codespaces on current branch": "當前分支上沒有程式碼空間",
                    "On other branches": "在其他分支",
                    "miniature adventure": "迷你探險",
                    "Open miniature adventure in web": "在網絡中打開迷你探險",
                    "Active": "激活",
                        "Open in ...": "打開 ...",
                            "Open in browser": "在瀏覽器中打開",
                            "Open in Visual Studio Code": "在 Visual Studio Code 中打開",
                            "Open in JetBrains Gateway": "在 JetBrains Gateway 中打開",
                            "Open in JupyterLab": "在 JupyterLab 中打開",
                        "Rename": "重命名",
                            "Change codespace display name to...": "將程式碼空間顯示名稱更改為...",
                        "Export changes to a branch": "將更改導出到分支",
                            "This will create a new branch with any unpushed changes": "這將創建一個包含任何未推送更改的新分支",
                            "Create branch": "創建分支",
                        "Change machine type": "更改機器類型",
                            "Change codespace machine type": "更改程式碼空間機器類型",
                            "Machine type": "機器類型",
                                "2-core": "雙核",
                                "4-core": "四核",
                            "Need even more power?": "需要更多的力量？",
                            "Contact our team": "聯繫我們團隊",
                            "to enable 32-core or GPU machines.": "啟用 32 核或 GPU 機器。",
                            "Update codespace": "升級程式碼空間",
                        "Stop codespace": "停止程式碼空間",
                    "Show more actions for codespace": "顯示程式碼空間的更多操作",
                        "Open in Browser": "在瀏覽器中打開",
                        "Open in Visual Studio Code": "在 Visual Studio Code 中打開",
                        "Open in JetBrains Gateway": "在 JetBrains Gateway 中打開",
                        "Open in JupyterLab": "在 JupyterLab 中打開",
                        "Rename": "重命名",
                            "Rename codespace": "重命名程式碼空間",
                            "Name": "名稱",
                        "Auto-delete codespace": "自動刪除程式碼空間",
                        "Export changes to a branch": "將更改導出到分支",
                            "This will create a new branch with any unpushed changes": "這將創建一個包含任何未推送更改的新分支",
                            "Checking branch status": "檢查分支情況",
                            "Create branch": "創建分支",
                        "Export changes to a fork": "將更改導出到復刻",
                            "You do not have write access to this codespace's repository. This will create a new fork of the repository at": "您沒有對此程式碼空間的存儲庫的寫訪問權限。這將創建一個新的存儲庫分支在",
                            ", reassign your codespace to that fork, and export your changes to a new branch.": "，將程式碼空間重新分配給該復刻，並將更改導出到新分支。",
                            "Create fork": "創建復刻",
                        "Change machine type": "修改機器類型",
                            "Change codespace machine type": "修改程式碼空間機器類型",
                            "Update codespace": "更新程式碼空間",
                        "Stop codespace": "停止程式碼空間",
                    "No changes": "未更改",

                    // [/Codespace \"(.+)\" stopped./, "程式碼空間 “$1” 已停止。"],
                    // [/Codespace \"(.+)\" deleted./, "程式碼空間 “$1” 已刪除。"],
                    // [/Are you sure you want to delete (.+)\?/, "您確定要刪除 $1 嗎？"],


            "Use this template": "使用此模板",
                "Create a new repository": "創建新倉庫",
                "Open in a codespace": "在程式碼空間中打開",

            // 個人倉庫 當前分支狀態
            "This branch is": "該分支",
            "ahead of": "領先與", // 新版倉庫概述
            "behind": "落後", // 新版倉庫概述
            "This branch is up to date with": "該分支保持同步與", // 新版倉庫概述

            "Contribute": "貢獻",
                // 貢獻按鈕下拉菜單
                "This branch is not ahead of the upstream": "這個分支不領先於上游",
                "No new commits yet. Enjoy your day!": "尚無新提交。祝您愉快！",
                "Open a pull request to contribute your changes upstream.": "打開拉取請求以向上游貢獻您的更改。",
                "This branch is not behind the upstream": "這個分支不落後於上游",
                "Open pull request": "打開拉取請求",

            "Sync fork": "同步復刻",
                // 同步復刻按鈕下拉菜單
                "This branch is out-of-date": "此分支已過時",
                "Update branch to merge the latest changes from the upstream repository into this branch.": "更新分支，將上游倉庫的最新修改合併到本分支。",
                // [/Update branch to keep this branch up-to-date by syncing (\d+) commits? from the upstream repository./, "通過從上游倉庫同步 $1 個提交來更新分支，以使該分支保持最新。"], // 同步復刻
                "Update branch to keep this branch up-to-date by syncing": "更新分支以保持該分支與最新狀態同步，需要同步",
                "from the upstream repository.": "來自上游倉庫。",
                "Learn more about syncing a fork": "了解更多關於復刻同步的信息",
                // [/This branch is not behind the upstream ([^ ]+)/, "該分支不落後與上游 $1"], // 同步復刻
                "No new commits to fetch. Enjoy your day!": "尚無新提交。祝您愉快！", //相同
                "Compare": "對比",
                "Update branch": "更新分支",
                "Updating...": "正在更新中…",

                "This branch has conflicts that must be resolved": "該分支有必須解決的衝突",
                // [/Discard (\d+) commits? to make this branch match the upstream repository. (\d+)commits? will be removed from this branch./, "丟棄 $1 個提交，以使本分支與上游倉庫一致。$2 個提交將從本分支中刪除。"],
                "Discard": "丟棄", // 新版倉庫概述
                "to make this branch match the upstream repository.": "，以使本分支與上游倉庫一致。", // 新版倉庫概述
                "will be removed from this branch.": "將從本分支中刪除。", // 新版倉庫概述
                "You can resolve merge conflicts using the command line and a text editor.": "您可以使用命令行和文本編輯器解決合併衝突。",
                // [/Discard (\d+) commits?/, "丟棄 $1 個提交"],
                "Discarding changes...": "放棄更改...",

                // 頂部提醒
                    // [/Successfully fetched and merged from upstream ([^ ]+)/, "成功從上游 $1 獲取並合併。"],

            // "Choose a head ref": "選擇一個頭引用",

            // "There isn’t anything to compare.": "沒有什麼可比較的。",
            // "and": "和",
            // "are entirely different commit histories.": "是完全不同的提交歷史。",
            // "No commit comments for this range": "在此範圍內沒有提交評論",
            // "No new commits yet. enjoy your day!": "尚無新提交。祝您愉快！",
            // "Find a branch": "查找分支",

            // 正文
            "commit": "次提交",
            "commits": "次提交",
            "failure": "失敗",
            "success": "成功",
            "Approved": "已批准",
            // [/([\d,]+) Commits?/, "$1 次提交"], // 新版倉庫概述

            "Failed to load latest commit information.": "載入最新提交信息失敗。",

            "View code": "查看程式碼", //小屏模式

            // 倉庫缺失 README 提醒
            "Help people interested in this repository understand your project by adding a README.": "通過添加 README，幫助對此倉庫感興趣的人了解您的項目。",
            "Add a README": "添加 README",

            // 右側欄

            // 與用戶名同名倉庫 編輯 README
            "is a special repository.": "是一個特殊的倉庫。",
            "Its": "它的",
            "will appear on your public profile.": "將出現在您的公開個人資料中。",
            "Edit README": "編輯 README",
            "Visit profile": "查看資料",

            "is special. If you": "是特殊的。如果您",
            "make this a public repository": "將倉庫設置為公開",
            ", its": "，它的",
            "Go to Settings": "前往設置",

            // 組織下.github 倉庫 README
                "is a special repository. Create a": "是一個特殊的倉庫。創建",
                "and it will appear on the organization's profile!": "並將出現在該組織資料中!",
                "Add profile README": "添加 profile/README",

                "is a special repository.": "是一個特殊的倉庫。",
                "will appear on the organization's profile.": "將出現在該組織資料中。",

            // 組織下.github-private 倉庫 README
                "Add a README with an overview of your project.": "為您項目添加一個概述 README 文件。",
                "The": " ",
                // [/will appear on ([^ ]+)'s member profile, visible only to organization members./, "將出現在 $1 的成員資料中，僅對組織成員可見。"],

            // "About": "關於"，
            "No description, website, or topics provided.": "未提供描述、網站或主題。",
            "Readme": "自述文件",
            "View license": "查看許可證",
            "Code of conduct": "行為準則",
            "Security policy": "安全政策",
            "Activity": "活動",
            "Custom properties": "自定義屬性",
            "star": "星標",
            "stars": "星標",
            "watching": "關注",
            "fork": "復刻",
            "forks": "復刻",
            "Report repository": "舉報倉庫",
            "Public repository": "公共倉庫", //小屏模式
            "Private repository": "私有倉庫", //小屏模式


            // 倉庫描述編輯 對話框
            "Edit repository details": "編輯倉庫簡述",
            "Description": "描述",
            "Short description of this repository": "簡短的描述下您的倉庫",
            "Website": "網址",
            "Enter a valid URL": "請輸入有效的 URL",
            "Use your GitHub Pages website": "使用您的 GitHub Pages 站點",
            "Topics": "主題",
            "(separate with spaces)": "（空格分隔）",
            "Suggested:": "建議：",
                "Add this topic": "接受該建議",
                "Decline this topic": "拒絕該建議",
                    "This isn’t relevant": "這並不相關",
                    "This is too specific": "這太具體了",
                    "This is too general": "這太籠統了",
                    "I just don’t like it": "我只是不喜歡它",
            "Include in the home page": "包含在主頁中",
            "Save changes": "保存更改",
                // 頂部提醒
                "Your repository details have been saved.": "您的倉庫簡述已保存。",

            "Releases": "發行版",
                "No releases published": "未發布任何版本",
                "Latest": "最新",
                "Create a new release": "創建發行版",
            // "Packages": "軟件包",
                "No packages published": "未發布軟件包",
                "Publish your first package": "發布軟件包",
            "Sponsor this project": "贊助本項目",
                "Learn more about GitHub Sponsors": "了解更多關於 GitHub 贊助者的信息",
            "Used by": "使用者",
            "Contributors": "貢獻者",
            "Environments": "環境",
            "Deployments": "部署",
                "+ more deployments": "+ 更多部署",
            "Languages": "語言",

            // "branch": "分支",
            // "branches": "分支",
            // "release": "次發布",
            // "releases": "次發布",
            // "contributor": "個貢獻者",
            // "contributors": "個貢獻者",

        // 新版倉庫概述
            // /<user-name>/<repo-name>#coc
                "Add a code of conduct": "添加行為準則",
                "Define community standards, signal a welcoming and inclusive project, and outline procedures for handling abuse by adding a code of conduct.": "通過添加行為準則，明確社區標準，體現項目的歡迎和包容性，並概述處理濫用行為的程序。",

            // /<user-name>/<repo-name>#license
                "License": "許可證",
                "Add a license": "添加許可證",
                "Add a license to your repository to make it clear how others can use, change, and contribute to your project.": "向倉庫中添加許可證，以明確其他人可以如何使用、更改您的項目並為您的項目做出貢獻。",

            // /<user-name>/<repo-name>#security
                "Add a security policy": "添加安全策略",
                "Help your community understand how to securely report security vulnerabilities for your project.": "幫助您的社區了解如何安全地報告項目的安全漏洞。",

        // Action 倉庫 右側欄
            "Suggested workflows": "建議的工作流程",
            "Based on your tech stack": "基於您的技術堆棧",
            "Set up": "設立",
            "Configure": "設置",
            "More workflows": "更多工作流程",
            "Dismiss suggestions": "隱藏建議",

        // 倉庫復刻中...
            // [/Forking ([^ ]+)/, "復刻 $1 中"], // 復刻中...
            "Generating your repository...": "正在創建您的倉庫...",
            "It should only take a few seconds.": "應該只需要幾秒鐘的時間。",
            "Refresh": "刷新",

        // 初始化空倉庫 /<user-name>/<repo-name>/
            // 組織倉庫
            "Set up GitHub Copilot": "設置 GitHub Copilot",
                "Use GitHub's AI pair programmer to autocomplete suggestions as you code.": "使用 GitHub 的 AI 配對程序員在您編碼時自動完成建議。",
                "Get started with GitHub Copilot": "開始使用 GitHub Copilot",
            "Add collaborators to this repository": "將合作者添加到此倉庫",
                "Search for people using their GitHub username or email address.": "使用 GitHub 用戶名或電子郵件地址搜索人員。",
                "Invite collaborators": "邀請合作者",
            "Quick setup": "快速安裝",
            "— if you’ve done this kind of thing before": "- 如果您以前做過這樣的事",
            "Set up in Desktop": "安裝到 GitHub Desktop",
            "Get started by": "通過",
            "creating a new file": "創建一個新文件",
            "uploading an existing file": "上傳一個現有的文件",
            ". We recommend every repository include a": "來開始。我們推薦每個倉庫都包括",
            ", and": "，和",
            "…or create a new repository on the command line": "…或在命令行上創建一個新的倉庫",
            "…or push an existing repository from the command line": "…或從命令行中推送現有的倉庫",
            "…or import code from another repository": "…或從另一個倉庫導入程式碼",
            "You can initialize this repository with code from a Subversion, Mercurial, or TFS project.": "您可以初始化此倉庫從一個 Subversion，Mercurial 或 TFS 項目導入。",
            "Import code": "導入程式碼",
            "ProTip!": "專業提示！",
                "Use the URL for this page when adding GitHub as a remote.": "將 GitHub 添加為遠程時，請使用此頁面上的 URL。",

        // 文件管理器 /<user-name>/<repo-name>/tree/<branch>/<文件夾路徑>/
          // /<user-name>/<repo-name>/?search=1
          // /<user-name>/<repo-name>/tree/?search=1
            // 文件樹側邊欄
                "Expand file tree": "展開文件樹",
                "Collapse file tree": "摺疊文件樹",
                // 搜索框
                    "Go to file": "轉到文件",
                        "No matches found": "未找到匹配項",

            "Add file": "添加文件",
                // 添加文件 下拉菜單
                "Create new file": "新建文件",
                "Upload files": "上傳文件",

            // 新三個點
                "Copy path": "複製路徑",
                "Copy permalink": "複製永久鏈接",
                "Delete directory": "刪除文件夾",
                "View options": "查看選項",
                    "Center content": "核心內容",

            "Copied path!": "✅ 路徑已複製！",

            "History": "歷史",

            "Top": "頂部",
            "Jump to file": "跳轉到文件",

            "Name": "文件名",
            "Last commit message": "最後提交消息",
            "Last commit date": "最後提交時間",

            // 編輯按鈕
            "Edit README": "編輯 README", // md 文件

        // 文件管理器 - 議題模板 /<user-name>/<repo-name>/tree/<branch>/.github/ISSUE_TEMPLATE
            "Customize the issue creation experience with a": "自定義議題的創建模板使用一個",
            "file.": "文件。",
            "Learn more about configuring a template chooser.": "了解更多關於配置模板選擇器的信息。",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/commits by (.+)/, "由 $1 提交"],
        [/Branch ([^ ]+) was renamed to ([^ ]+)./, "分支 $1 已更名為 $2。"],
        [/Your ([^ ]+) branch isn't protected/, "您的 $1 分支不受保護"], // 倉庫主頁 分支保護
        [/([\d,]+) Commits?/, "$1 次提交"], // 新版倉庫概述
        [/Create a codespace on (.+)/, "在 $1 上創建程式碼空間"], // 倉庫主頁 創建程式碼空間
        [/Create codespace on (.+)/, "在 $1 上創建程式碼空間"],
        [/Codespace \"(.+)\" stopped./, "程式碼空間 “$1” 已停止。"],
        [/Codespace \"(.+)\" deleted./, "程式碼空間 “$1” 已刪除。"],
        [/Are you sure you want to delete (.+)\?/, "您確定要刪除 $1 嗎？"],
        [/Sponsor ([^ ]+)?/, "贊助 $1"], // 贊助按鈕 對話框 標題
        [/\+ ([\d,]+) releases?/, "+ $1 個發行版"], // 倉庫首頁右側欄 發行版
        [/\+ ([\d,]+) packages?/, "+ $1 個軟件包"], // 倉庫首頁右側欄 軟件包
        [/\+ ([\d,]+) contributors?/, "+ $1 位貢獻者"], // 倉庫首頁右側欄 貢獻者
        [/\+ ([\d,]+) environments?/, "+ $1 個環境"], // 倉庫首頁右側欄 環境
        [/\+ ([\d,]+) deployments?/, "+ $1 個部署"], // 倉庫首頁右側欄 部署
        // 個人倉庫 貢獻和同步復刻操作後 信息提示條
        [/Successfully fetched and fast-forwarded from upstream ([^ ]+)\./, "成功從上游 $1 中獲取並快速轉發。"],
        [/Successfully discarded changes and synchronized branch to match upstream ([^ ]+)\./, "成功丟棄更改，並將分支與上游 $1 保持同步。"],
        // 同步復刻
        [/Update branch to keep this branch up-to-date by syncing (\d+) commits? from the upstream repository./, "通過從上游倉庫同步 $1 個提交來更新分支，以使該分支保持最新。"],
        [/This branch is not behind the upstream ([^ ]+)/, "該分支不落後與上游 $1"],
        [/Discard (\d+) commits? to make this branch match the upstream repository. (\d+) commits? will be removed from this branch./, "丟棄 $1 個提交，以使本分支與上游倉庫一致。$2 個提交將從本分支中刪除。"],
        [/Discard (\d+) commits?/, "丟棄 $1 個提交"],
        [/Successfully fetched and merged from upstream ([^ ]+)/, "成功從上游 $1 獲取並合併。"],
        // 貢獻
        [/This branch is not ahead of the upstream ([^ ]+)\./, "該分支並不領先上游 $1。"],
        [/This branch is (\d+) commits? ahead of ([^ ]+)\./, "該分支領先上游 $2 $1個提交。"],
        // 個人倉庫當前分支狀態
        [/This branch is up to date with ([^ ]+)\./, "該分支與上游 $1 保持同步。"],
        [/(\d+) commits? ahead/, "領先 $1 個提交"],
        [/(\d+) commits? behind/, "落後 $1 個提交"],
        [/(\d+) commits?/, "$1 個提交"], // 新版倉庫概述
        [/Save (.+?) to your computer and use it in GitHub Desktop./, "使用 GitHub Desktop，保存 $1 到您的電腦。"],
        [/Forking ([^ ]+)/, "復刻 $1 中"], // 復刻中...
        [/Fork your own copy of ([^ ]+)/, "復刻成您自己的 $1 副本"], // 復刻按鈕提示
        [/will appear on ([^ ]+)'s member profile, visible only to organization members./, "將出現在 $1 的成員資料中，僅對組織成員可見。"],
    ],
};

I18N.zh["repository/milestones"] = { // 倉庫 - 里程碑頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 里程碑頁面 /<user-name>/<repo-name>/milestones
            "Labels": "標籤",
            "Milestones": "里程碑",

            "You haven’t created any Milestones.": "您尚未創建任何里程碑。",
            "Use Milestones to create collections of Issues and Pull Requests for a particular release or project.": "使用里程碑為特定版本或項目創建議題和拉取請求的集合。",

            // 組織 倉庫 里程碑
            "No Milestones found!": "沒有發現里程碑!",
            "If this project had milestones, we’d show you them here. Promise!": "如果該項目有里程碑，我們會在此處向您展示。",

            "Create a Milestone": "創建里程碑",

            "Sort": "排序",
                "Recently updated": "最近更新",
                "Furthest due date": "最遲到期日",
                "Closest due date": "最近到期日",
                "Least complete": "最不完整",
                "Most complete": "最完整",
                "Alphabetically": "按字母順序",
                "Reverse alphabetically": "按字母倒序",
                "Most issues": "最多的議題",
                "Least issues": "最少的議題",

            "No due date": "沒有截止日期",
            // [/Due by (.*)/, "截止日期 $1"], // 里程碑截止日期
            "Last updated": "最後更新",
            "(more)": "（更多）",
            "Show less": "顯示更少",
            // 完成進度條
            "complete": "已完成",
            "open": "打開",
            "closed": "關閉",

        // 新建里程碑頁面 /<user-name>/<repo-name>/milestones/new
            "New milestone": "新建里程牌",
                "Create a new milestone to help organize your issues and pull requests. Learn more about": "創建一個新的里程碑來幫助組織您的議題和拉取請求。了解更多關於",
                "milestones and issues": "里程碑和議題",
            "Title": "標題",
            "Due date (optional)": "截止日期（可選）",
            "Description": "描述",
            "Create milestone": "創建里程碑",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/([\d,]+) Open/, "$1 打開"],
        [/([\d,]+) Closed/, "$1 已關閉"],
    ],
};

I18N.zh["repository/pull_issue_public"] = { // 倉庫 - 議題和拉取請求頁面公共部分
    "static": { // 靜態翻譯
        // pull 與 request 公共詞條
            "Filters": "篩選",
                // 篩選下拉菜單
                "Filter Issues": "篩選議題",
                "Open issues and pull requests": "打開的議題和拉取請求",
                "Your issues": "您提出的議題",
                "Your pull requests": "您的拉取請求",
                "Everything assigned to you": "任何分配給您的",
                "Everything mentioning you": "任何提及您的",
                "View advanced search syntax": "查看高級搜索語法",

            "Clear current search query, filters, and sorts": "清除當前的搜索查詢、篩選器和排序方式",

            "Labels": "標籤",
            "Milestones": "里程碑",
            "New issue": "創建議題",
            "New": "創建", // 小屏

            // 篩選工作條
            // "Author": "作者",
                "Filter by author": "按用戶篩選",
                "Filter users": "篩選用戶名",

            "Label": "標籤",
                "Filter by label": "按標籤篩選",
                "Filter labels": "篩選標籤",
                "Unlabeled": "無標籤",
                "to exclude labels": "排除標籤",
                "for logical OR": "表示邏輯“或”",

            // "Projects": "項目",
                "Filter by project": "按項目篩選",
                "Filter projects": "篩選項目",
                "Repository": "倉庫",
                "Organization": "組織",
                "No projects found. Sorry about that.": "很抱歉，未找到任何項目。",

            // "Milestones": "里程碑",
                "Filter by milestone": "按里程碑篩選",
                "Filter milestones": "篩選里程碑",
                "Issues with no milestone": "無里程碑的議題",
                "Pull requests with no milestone": "無里程碑的拉取請求", // pulls
                "Nothing to show": "暫無",

            "Assignee": "受理人",
                "Filter by who’s assigned": "按受理人篩選",
                "Assigned to nobody": "無受理人",
                // [/Awaiting requested review from ([^ ]+)/, "正在等待 $1 審查請求"],
                "Requested changes must be addressed to merge this pull request.": "要合併這個拉取請求，必須先解決所要求的更改。",

            "Sort": "排序",
                "Sort by": "排序",
                "Newest": "最新的",
                "Oldest": "最早的",
                "Most commented": "最多評論",
                "Least commented": "最少評論",
                "Recently updated": "最近更新",
                "Least recently updated": "最早更新", //?
                "Most reactions": "多數反應",
                "Best match": "最佳匹配",

            // 選中模式
                "selected": "選中",
                "Mark as": "標記為",
                "Apply labels": "應用標籤",
                "Assign": "分配",
                    "Assign someone": "分配給某人",
                    "Assign to nobody": "分配給任何人",

            // 篩選結果
            "No results matched your search.": "沒有與您的搜索匹配的結果。",
            "You could search": "您可以搜索",
            "all of GitHub": "所有 GitHub",
            "or try an": "或者嘗試",
            "advanced search": "高級搜索",

            // 狀態詞
            "was merged": "合併於",
            "was closed": "關閉於",
            "Approved": "已批准",
            "Review required": "需要審查", // 拉取請求 頁面狀態詞
                "Review required before merging": "合併前需要審查",
            "outdated": "陳舊的",
            "Pending": "待定",
            "Draft": "草案",

            // [/(\d+) linked pull requests?/, "鏈接 $1 個拉取請求"],

        // 某個拉取請求和某個議題 公共詞條
            // 右側欄
                "Reviewers": "審查者",
                    "Loading suggestions…": "載入推薦…",
                    // [/([^ ]+) left review comments/, "$1 發表了審查意見"],
                    // [/At least (\d+) approving reviews? are required to merge this pull request./, "至少需要 $1 次批准審查才能合併此拉取請求。"], // 具體的拉取請求 審查者
                    "No reviews—at least 1 approving review is required.": "未經審查—至少需要 1 次批准審查。",
                    "Re-request review": "重新請求審核",
                    "Still in progress?": "仍在進行中嗎？",
                    // [/Awaiting requested review from ([^ ]+)/, "等待 $1 的審查請求"]
                    "Learn about draft PRs": "了解拉取請求草案",
                    "Convert to draft": "設置為草案",
                        // 設置草案對話框
                            "Convert this pull request to draft?": "將此拉取請求轉換為草案？", // 拉取請求
                            "People who are already subscribed will not be unsubscribed.": "已訂閱的用戶將不會被取消訂閱。",
                    // 下拉
                    "Request up to 15 reviewers": "最多請求 15 個審查者",
                    // [/([^ ]+) approved these changes/, "$1 批准這些更改"], // 具體的拉取請求 審查者
                    "Request": "請求",
                    // [/Request review from ([^ ]+)/, "請求 $1 審查"], // 具體的拉取請求 審查者
                    "This pull request is waiting on your review.": "此拉取請求正在等待您的審核。",

                "Assignees": "受理人",
                    "No one assigned": "無人受理",
                    "No one—": "無人 - ",
                    "assign yourself": " 受理自己",
                    // 下拉框
                    "Assign up to 10 people to this issue": "最多指定 10 人", // 議題
                    "Assign up to 10 people to this pull request": "最多指定 10 人", // 拉取請求
                    "Clear assignees": "清除受理人",
                    "Type or choose a user": "輸入或選擇用戶",
                    "Suggestions": "建議",

                // "Labels": "標籤",
                    "None yet": "暫無",
                    // 下拉
                    "bug": "BUG",
                        "Something isn't working": "有些東西不工作",
                    "dependencies": "依賴性",
                        "Pull requests that update a dependency file": "更新一個依賴文件的拉取請求",
                    "documentation": "文檔",
                        "Improvements or additions to documentation": "文檔的改進或補充",
                    "duplicate": "重複",
                        "This issue or pull request already exists": "這個議題或拉取請求已經存在",
                    "enhancement": "增強",
                        "New feature or request": "新功能或請求",
                    "good first issue": "好的首發議題",
                        "Good for newcomers": "適合新人",
                    "help wanted": "需要幫助",
                        "Extra attention is needed": "需要特別關注",
                    "invalid": "無效",
                        "This doesn't seem right": "這似乎不對",
                    "question": "問題",
                        "Further information is requested": "要求提供更多信息",
                    "wontfix": "不會修復",
                        "This will not be worked on": "這將不會被處理",

                    "Apply labels to this issue": "應用標籤", // 議題
                    "Apply labels to this pull request": "應用標籤", // 拉取請求
                    "Edit labels": "編輯標籤",

                    // 拉取請求
                    "dependencies": "依賴關係",
                        "Pull requests that update a dependency file": "更新依賴文件的拉取請求",

                // 項目
                    "Recent": "最近",
                    "User": "用戶",
                    "No projects": "無項目",

                "Milestone": "里程碑",
                    "No milestone": "無里程碑",
                    //下拉
                    "Set milestone": "設置里程碑",
                        "Nothing to show": "暫無",

                "Development": "進展",
                    "Successfully merging this pull request may close these issues.": "成功合併此拉取請求可能會關閉這些議題。",
                    "Successfully merging a pull request may close this issue.": "成功合併一個拉取請求可能會關閉此議題。",
                    // 下拉
                    "Link an issue from this repository": "關聯來自此倉庫的議題",
                    "Filter": "篩選",
                    "No results": "無結果",

                // "Notifications": "通知類型",
                "Customize": "自定義",
                "Subscribe": "訂閱",
                // "Unsubscribe": "取消訂閱",
                "You’re not receiving notifications from this thread.": "您沒有收到來自該話題的通知。",
                "You’re receiving notifications because you’re watching this repository.": "您收到通知是因為您正在關注此倉庫。",
                "You’re receiving notifications because you authored the thread.": "您收到通知是因為您提出了該話題。",
                "You’re receiving notifications because you’re subscribed to this thread.": "您收到通知是因為您訂閱了該話題。",
                "You’re receiving notifications because you were mentioned.": "您收到通知是因為有人 @您。",
                "You’re receiving notifications because you commented.": "您收到通知是因為您發表了評論。",
                "You’re receiving notifications because you are watching pull requests on this repository.": "您收到通知是因為您正在關注此倉庫上的拉取請求。",
                "You’re receiving notifications because you are watching issues on this repository.": "您收到通知是因為您正在關注此倉庫上的議題。",
                "You’re receiving notifications because you modified the open/close state.": "您收到通知是因為您修改了打開/關閉狀態。",
                "You’re ignoring this repository.": "您忽略了這個倉庫。",

                    // 通知設置對話框
                    "Notification settings": "通知設置",
                    "Not subscribed": "未訂閱",
                        "Only receive notifications from this pull request when you have participated or have been @mentioned.": "只有在您參與或被 @您時才會收到來自此拉取請求的通知。",
                        "Only receive notifications from this issue when you have participated or have been @mentioned.": "只有在您參與或被 @您時才會收到來自此議題的通知。", // 議題頁面
                    "Subscribed": "訂閱",
                        "Receive all notifications from this pull request.": "接收來自此拉取請求的所有通知。",
                        "Receive all notifications from this issue.": "接收來自此議題的所有通知。",  // 議題頁面
                    "You will only be notified for the events selected from the list below.": "您只會收到從以下列表中選擇的事件的通知。",
                    "If you participate or are @mentioned you will be subscribed.": "如果您參與或 @您時，將自動訂閱。",
                    // 議題
                        "Receive a notification when this issue has been closed.": "當議題被關閉時，收到通知。",
                        "Reopened": "重新打開",
                            "Receive a notification when this issue has been reopened.": "當議題被重新打開時，收到通知。",
                    // 拉取請求
                        "Receive a notification when this pull request has been merged.": "當拉取請求被合併時，收到通知。",
                        "Receive a notification when this pull request has been closed.": "當拉取請求被關閉時，收到通知。",
                        "Receive a notification when this pull request has been reopened.": "當拉取請求被重新打開時，收到通知。",

                "Lock conversation": "鎖定對話",
                    "Lock conversation on this issue": "鎖定此議題的對話",
                    "Lock conversation on this pull request": "鎖定此拉取請求的對話",
                    "Other users": "其他用戶",
                    "can’t add new comments": "無法添加新評論",
                    "to this issue.": "到該議題。",
                    "to this pull request.": "到該拉取請求。",
                    "You and other collaborators": "您和其他協作者",
                    "with access": "有權限訪問",
                    "to this repository": "該倉庫",
                    "can still leave comments": "仍然可以發表評論",
                    "that others can see.": "其他人可以看到。",
                    "You can always unlock this issue again in the future.": "您今後仍可以隨時再次解鎖此議題。",
                    "You can always unlock this pull request again in the future.": "您今後仍可以隨時再次解鎖此拉取請求。",
                    "Reason for locking": "鎖定原因",
                    "Choose a reason": "選擇原因",
                        "Off-topic": "離題",
                        "Too heated": "過熱",
                        "Resolved": "已解決",
                        "Spam": "垃圾信息",
                    "Optionally, choose a reason for locking that others can see. Learn more about when it’s appropriate to": "或者，選擇其他人可以看到的鎖定原因。詳細了解何時適合",
                    "lock conversations": "鎖定對話",
                    // "Lock conversation on this issue": "鎖定對話",
                "Unlock conversation": "解鎖對話",
                    "Unlock conversation on this issue": "解鎖此議題的對話",
                    "Unlock conversation on this pull request": "解鎖此拉取請求的對話",
                    "Everyone": "任何人",
                    "will be able to comment on this issue once more.": "將能夠再次對這個議題發表評論。",
                    "will be able to comment on this pull request once more.": "將能夠再次對這個拉取請求發表評論。",
                    "You can always lock this pull request again in the future.": "您今後仍可以隨時再次鎖定此拉取請求。",
                    "You can always lock this issue again in the future.": "您今後仍可以隨時再次鎖定此議題。",

            "Remember, contributions to this repository should follow our": "請記住，對該倉庫的貢獻應遵循我們的",
            "GitHub Community Guidelines": "GitHub 社區準則",
            "Remember, contributions to this repository should follow its": "請記住，對該倉庫的貢獻應遵循",
            "contributing guidelines": "貢獻指南",
            "security policy": "安全政策",
            "code of conduct": "行為準則",

            // 底部贊助
                "Show your support for": "通過贊助來表達您對",
                "by sponsoring them.": "的支持。",

            // 底部提示欄 (未登錄)
                "Sign up for free": "免費註冊",
                "to join this conversation on GitHub": "加入 GitHub 上的這個討論",
                ". Already have an account?": "。已經有帳戶？",
                "Sign in to comment": "登錄後發表評論",

    },
    "regexp": [ // 正則翻譯
        [/(\d+) linked issues?/, "鏈接 $1 個議題"],
        [/Assigned to (.*)/, "分配給 $1"]
    ]
};

I18N.zh["repository/issues"] = { // 倉庫 - 議題頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository/pull_issue_public"]["static"],

        // 倉庫 --> 議題 標籤卡/<user-name>/<repo-name>/issues
        // /<user-name>/<repo-name>/labels/<label-name>
            // 歡迎信息
            "Welcome to issues!": "歡迎關注議題！",
            "Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should": "議題用於跟蹤待辦事項、錯誤、功能請求等。創建議題後，它們將出現在可搜索和可篩選的列表中。要開始，您應該",
            "create an issue": "創建議題",

            "Label issues and pull requests for new contributors": "標記新貢獻者的議題和拉取請求",
            "Now, GitHub will help potential first-time contributors": "現在，GitHub 將幫助潛在的首次貢獻者",
            "discover issues": "探索議題",
            "labeled with": "標記為",

            // [/Want to contribute to ([^ ]+)/, "想為 $1 做貢獻嗎？"], /issues
            "If you have a bug or an idea, read the": "如果您發現一個錯誤或有任何想法，請閱讀",
            "before opening an issue.": "，在打開議題之前。",
            "If you have a bug or an idea, browse the open issues before opening a new one. You can also take a look at the": "如果您發現一個錯誤或有任何想法，請在打開新議題之前瀏覽未解決的議題。您也可以看看",
            "Open Source Guide": "開源指南",
            "If you're ready to tackle some open issues,": "如果您準備好解決一些未解決的議題，",
            "we've collected some good first issues for you": "我們已為您收集了一些好的首發議題",

            "Dismiss": "忽略",
                // 忽略 下拉
                "Dismiss for this repository only": "僅對該倉庫不在提示",
                "Dismiss for all repositories": "對所有倉庫均不在提示",


            "There aren’t any open issues.": "暫無開放的議題。",

            // 狀態詞
            "Open": "打開",
            "Closed": "已關閉",
            "Merged": "已合併",
            // "open": "打開",
            // "Opened": "打開",
            // "opened": "打開",
            // "closed": "已關閉",

            "You commented on and opened this issue": "您打開了此議題併發表了評論",
            "You were mentioned on and commented on this issue": "您被提及並對此議題發表了評論",
            "You commented on this issue": "您對此議題發表了評論",
            "You opened this issue": "您打開了此議題",

            // 置頂議題
            "Pinned issues": "置頂議題",

            "ProTip!": "專業提示！",
                "Find everything you created by searching": "查找您創建的所有內容，使用",
                "Exclude your own issues with": "查看您自己的問題，使用",
                "Mix and match filters to narrow down what you’re looking for.": "混搭篩選器，以縮小範圍，找到您想看到的。",
                "Exclude everything labeled": "如果要找到所有標有",
                "with": "標籤的，請使用",

        // 新建議題 選擇議題模板  /<user-name>/<repo-name>/issues/new/choose
            "Get started": "開始",
            "Don’t see your issue here?": "在這裡沒有看到您的議題？",
            "Open a blank issue.": "打開一個空白議題。",
            "Edit templates": "編輯模板",

            "View organization templates": "查看組織模板", // 組織倉庫

        // 新建空白議題  /<user-name>/<repo-name>/issues/new
            "Title": "標題",
            "Helpful resources": "幫助性資源",

        // 從討論創建議題  /<user-name>/<repo-name>/issues/new?created_from_discussion_number=<id>
            "Documentation has changed since you last contributed": "自您上次貢獻以來，文檔已更改",
            ". Take a look before submitting an issue:": "。在提交議題之前先看一下：",
            "Contributing guidelines": "貢獻指南",
            "Last updated": "最後更新",

        // 某條具體的議題 /<user-name>/<repo-name>/issues/<id> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            // 快捷鍵
                "Convert issue to discussion…": "將議題轉化為討論...",

            "This issue was moved to a discussion.": "這個議題被轉移到討論中。",
            "You can continue the conversation there.": "您可以在那裡繼續討論。",
            "Go to discussion →": "轉到討論→",

            "Edit": "編輯",


            // 狀態詞 同 /<user-name>/<repo-name>/pull/<id>
            "changed the title": "修改了標題",
            "opened this issue": "打開了該議題",
            "· Fixed by": "· 修復了",
            "mentioned this issue": "提及了該議題",
            "opened this": "打開了這個",
            // "Issue": "議題",
            "added a commit that closed this issue": "在提交時關閉了這個議題",
            "closed this in": "關閉於",
            "added the": "添加了",
            "added": "添加了",
            "and removed": "並移除了",
            "removed the": "移除了",
            "removed": "移除了",
            "label": "標籤",
            "labels": "標籤",
            "self-assigned this": "自己受理了該議題",
            // "edited": "編輯的",
            "added this to the": "添加到",
            "added this to": "添加到",
            "milestone": "里程碑",
            "closed this": "關閉了",
            "closed this as": "已關閉因",
                "not planned": "非計劃中",
            "reopened this": "重新打開了",
            "This was referenced": "這是引用",
            "deleted a comment from": "刪除了評論，來自",
            "· May be fixed by": " · 可通過該方案修復",
            "pinned this issue": "置頂議題",
            "unpinned this issue": "取消置頂",
            "Repository owner locked as": "倉庫所有者鎖定為",
            "locked as": "鎖定為",
                "off-topic": "離題",
                "too heated": "過熱",
                "resolved": "已解決",
                "spam": "垃圾信息",
            "and limited conversation to collaborators": "並限制與協作者對話",
            "unlocked this conversation": "解鎖了對話",
            "merged commit": "已合併提交",
            // "into": "到",
            "deleted the": "刪除了",
            "locked and limited conversation to collaborators": "鎖定並限制與協作者對話",
            "converted this issue into discussion": "此議題已轉化為討論",
            "removed their assignment": "取消了他們的任務",
            "assigned": "分配給了",
            "and unassigned": "和取消了分配給",
            "marked this pull request as draft": "將此拉取請求標記為草案",
            "marked this pull request as ready for review": "將此拉取請求標記為可供審查",
            "dismissed a stale review via": "忽略了一個陳舊的審查，通過",
            "requested changes": "請求了更改",
            "added a commit that referenced this issue": "添加了一個引用此問題的提交",
            "referenced this issue": "提及這個議題",
            "closed this as completed": "已完成，關閉",

            "This comment has been minimized.": "此評論已最小化。",
            "Show comment": "顯示評論",
            "Hide comment": "隱藏評論",

            // 右側欄 補充
                // "Development": "進展",
                    "No branches or pull requests": "沒有分支或拉取請求",
                    "Shows branches and pull requests linked to this issue.": "顯示與該議題相關的分支和拉取請求。",
                    "Create a branch": "創建分支",
                    "for this issue or link a pull request.": "為這個議題或關聯一個拉取請求",
                    "When branches are created from issues, their pull requests are automatically linked.": "當從議題中創建分支時，它們的拉取請求會自動關聯。",

                    // 下拉
                    "Link a pull request from this repository": "關聯來自此倉庫的拉取請求",

                    // "linked a pull request that will": "關聯一個拉取請求, 將會",
                    // "close": "關閉",
                    // "this issue": "這個議題",

                    // 創建分支 對話框
                        "Create a branch for this issue": "為該議題創建一個分支",
                        "Branch name": "分支名稱",
                        "Repository destination": "倉庫目的地",
                            "Search for a repository": "搜索倉庫",
                        "Change branch source": "更改分支源",
                        "What's next?": "下一步是什麼？",
                            "Checkout locally": "檢出本地",
                            "Open branch with GitHub Desktop": "使用 GitHub Desktop 打開分支",
                        "Create branch": "創建分支",

                    // 在本地倉庫檢出對話框
                        "Checkout in your local repository": "在本地倉庫檢出",
                        "Run the following commands in your local clone.": "在您的本地克隆中運行以下指令。",

                    //
                        "Link a branch or pull request": "關聯分支或拉取請求",
                        "Select a repository to search for branches and pull requests or": "選擇一個倉庫來搜索分支和拉取請求或",
                        "create a branch": "創建一分支",
                        "Search for repositories": "搜索倉庫",
                        "Link a branch, pull request, or": "關聯分支、拉取請求或",
                        "Search for branches or pull requests": "搜索分支或拉取請求",

                "Pin issue": "置頂議題",
                    "Up to 3 issues can be pinned and they will appear publicly at the top of the issues page": "最多可以置頂 3 個議題，它們將公開顯示在議題頁面的頂部",
                    // 頂部提醒
                    "The issue has been pinned.": "該議題已置頂。",
                "Unpin issue": "取消置頂",
                    "Up to 3 issues can be pinned and they will appear at the top of the issues page": "最多可以置頂 3 個議題，它們將顯示在議題頁面的頂部",
                    // 頂部提醒
                    "The issue has been unpinned.": "該議題已取消置頂。",
                "Transfer issue": "轉移議題",
                    // 轉移議題 對話框
                        "Transfer this issue": "轉移議題",
                            "Repository projects assigned to this issue will not transfer to the new location": "分配給此議題的倉庫項目不會轉移到新位置",
                        "Choose a repository": "選擇倉庫",
                        "Find a repository": "搜索倉庫",
                        "Warning!": "警告！",
                            "Transferring an issue does not scrub any issue content. Content such as text references to other issues, pull requests, projects, teams will remain in this issue's descriptions and comments.": "轉移議題不會清除任何議題內容。諸如對其他議題、拉取請求、項目、團隊的文本引用等內容將保留在此議題的描述和評論中。",
                            "Assignees, labels and milestones will be transferred if they are present in the target repository.": "如果目標倉庫中存在受讓人、標籤和里程碑，它們將被轉移。",
                "Convert to discussion": "轉為討論",
                    // 轉換議題為討論 對話框
                    "Convert issue to a discussion": "轉換議題為討論",
                        "Are you sure you want to convert this issue to a discussion?": "您確定要將議題轉換為討論嗎？",
                        "What happens when an issue is converted into a discussion:": "將議題轉化為討論時，會發生什麼：",
                        "Issue will be closed and locked": "議題將被關閉並鎖定",
                        "Title, description, and author will be the same as the issue": "標題、描述和作者將與議題相同",
                        "All comments and reactions will be the same as the issue": "所有評論和反應將與議題相同",
                        "Category for new discussion": "新討論的類別",
                            "Announcements": "公告",
                            "General": "通常",
                            "Ideas": "想法",
                            "Polls": "投票",
                            "Q&A": "問與答",
                            "Show and tell": "展示與講述",
                        "I understand, convert this issue.": "我明白了，依然轉化該議題。",
                "Delete issue": "刪除議題",
                    "Are you sure you want to delete this issue?": "您確定要刪除此議題嗎？",
                    "This cannot be undone": "這不能被撤消",
                    "Only administrators can delete issues": "只有管理員可以刪除議題",
                    "Deletion will remove the issue from search and previous references will point to a placeholder": "刪除將會從搜索中刪除議題，以前的引用將指向一個占位符",
                    "Delete this issue": "刪除議題",
                    "Deleting issue…": "議題刪除中…",
                    // 頂部提醒
                    "The issue was successfully deleted.": "該議題已成功刪除。",

            "Load more…": "載入更多…",

            "This conversation has been locked as": "此對話已鎖定為",
            "and limited to collaborators.": "，並限制與協作者對話。",

            "This issue has been deleted.": "該議題已被刪除。",
            "deleted this from": "刪除了這個，從",

        // 議題標籤管理 /<user-name>/<repo-name>/issues/labels
        // 倉庫 --> 標籤頁面 /<user-name>/<repo-name>/labels
            "Labels": "標籤",
            "Milestones": "里程碑",
            "Search all labels": "搜索所有標籤",

            "labels": "標籤",

            "New label": "新建標籤",
                "Label preview": "標籤預覽",
                "Label name": "標籤名",
                "Description": "描述",
                "Description (optional)": "描述（可選）",
                "Color": "顏色",
                    "Get a new color": "獲得新顏色",
                    "Choose from default colors:": "從默認顏色中選擇：",
                "Create label": "創建標籤",
                "Saving...": "保存中...",
                "Save changes": "保存更改",

            "Sort": "排序",
                "Alphabetically": "按字母順序",
                "Reverse alphabetically": "按字母倒序",
                "Most issues": "最多的議題",
                "Fewest issues": "最少的議題",

            // 標籤
                "bug": "BUG",
                    "Something isn't working": "有些東西不工作",
                "dependencies": "依賴性",
                    "Pull requests that update a dependency file": "更新一個依賴文件的拉取請求",
                "documentation": "文檔",
                    "Improvements or additions to documentation": "文檔的改進或補充",
                "duplicate": "重複",
                    "This issue or pull request already exists": "這個議題或拉取請求已經存在",
                "enhancement": "增強",
                    "New feature or request": "新功能或請求",
                "good first issue": "好的首發議題",
                    "Good for newcomers": "適合新人",
                "help wanted": "需要幫助",
                    "Extra attention is needed": "需要特別關注",
                "invalid": "無效",
                    "This doesn't seem right": "這似乎不對",
                "question": "問題",
                    "Further information is requested": "要求提供更多信息",
                "wontfix": "不會修復",
                    "This will not be worked on": "這將不會被處理",

            // [/open issues? and pull requests?/, "個打開的議題和拉取請求"], // 標籤頁面
            // [/open issues? or pull requests?/, "個打開的議題或拉取請求"], // 標籤頁面

            // "Convert to discussions": "轉為討論",
                // 轉換議題為討論 對話框
                "Convert issue to discussion": "轉換議題為討論",
                    // [/Are you sure you want to convert (\d+) issues? with the following label to a discussion\?/, "您確定要將帶有以下標籤的 $1 條議題轉換為討論嗎？"],
                    // "What happens when an issue is converted into a discussion:": "將議題轉化為討論時，會發生什麼：",
                    "Issue will be locked": "議題將被鎖定",
                    // "Title, description, and author will be the same as the issue": "標題、描述和作者將與議題相同",
                    "Existing links will redirect to the new discussion": "現有鏈接將重定向至新討論",
                    // "All comments and reactions will be the same as the issue": "所有評論和反應將與議題相同",
                    "Discussions do not have tasklists": "討論沒有任務列表",
                    "Discussions do not have assignees": "討論沒有受理人",
                    "Discussions cannot be added to projects": "討論無法添加到項目",
                    "Discussions do not have milestones": "討論沒有里程碑",
                    "You must choose a category for the discussion to belong to. You will be able to change this after the conversion is complete.": "您必須為討論選擇一個所屬類別。轉換完成後，您可以更改類別。",
                    "Choose a category": "選擇類別",
                        "Announcements": "公告",
                        "General": "通常",
                        "Ideas": "想法",
                        "Polls": "投票",
                        "Q&A": "問與答",
                        "Show and tell": "展示與講述",
                    "I understand, convert issue to discussion": "我明白了，依然將議題轉換未討論",
                    "Future issues with this label will not be automatically converted into discussions.": "今後帶有此標籤的議題不會自動轉換為討論。",

        // 添加/編輯議題模板 /<user-name>/<repo-name>/issues/templates/edit
            "Propose changes": "提出更改",
            "Add template:": "添加模板：",
            "select": "選擇",
            "Bug report": "錯誤報告",
                "Standard bug report template": "標準錯誤報告模板",
                "Create a report to help us improve": "創建報告以幫助我們改進",
            "Feature request": "功能要求",
                "Standard feature request template": "標準功能請求模板",
                "Suggest an idea for this project": "為這個項目提出想法",
            "Custom template": "自定義模板",
                "Blank template for other issue types": "其他議題類型的空白模板",
                "Custom issue template": "自定義議題模板",
                "Describe this issue template's purpose here.": "在此處描述此議題模板的用途。",

            "Preview and edit": "預覽和編輯",
            "Close preview": "關閉預覽",

            "Template name": "模板名稱",
            "This file lives in": "該文件位於",
            "Template content": "模板內容",
            "Optional additional items": "可選附加項目",
            "Issue default title": "議題默認標題",
            "This will be suggested as the issue title": "建議作為議題標題",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        ...I18N.zh["repository/pull_issue_public"]["regexp"],

        [/Want to contribute to ([^ ]+)/, "想為 $1 做貢獻嗎？"],
        [/Awaiting requested review from ([^ ]+)/, "正在等待 $1 審查請求"],
        [/([\d,]+) Open/, "$1 打開"],
        [/([\d,]+) Closed/, "$1 已關閉"],
        [/#(\d+) opened/, "#$1 打開於"],
        [/#(\d+) by/, "#$1 打開者"],
        [/(\d+) linked pull requests?/, "鏈接 $1 個拉取請求"],
        [/([\d,]+) linked issues?/, "$1 個關聯議題"],
        [/(\d+) tasks? done/, "$1 個任務完成"],
        [/(\d+) of (\d+) tasks?/, "$1 / $2 個任務"],
        [/(\d+) tasks?/, "$1 個任務"],
        [/First time contributing to ([^ ]+)?/, "首次為 $1 做貢獻？"],

        // 具體某條議題 /<user-name>/<repo-name>/issues/<id>
        [/· ([\d,]+) comments?/, "• $1 條評論"],
        [/([\d,]+) participants?/, "$1 位參與者"],
        [/(\d+) similar comments?/, "$1 條類似評論"],
        [/(\d+) hidden items?/, "$1 條隱藏項目"],
        [/added a commit to ([^ ]+) that referenced this issue/, "為 $1 添加了引用這個議題的提交"],
        [/Only people who can see ([^ ]+) will see this reference./, "只有能看到 $1 的人才能看到這個參考。"],
        [/Sponsor ([^ ]+)?/, "贊助 $1"], // 贊助按鈕 對話框 標題
        [/Notify someone on an issue with a mention, like: @([^ ]+)./, "在某個問題上通知並提及某人，例如：@$1。"], // 專業提示
        [/Edited (\d+) time/, "已編輯 $1 次"],

        // 標籤頁面
        [/open issues? and pull requests?/, "個打開的議題和拉取請求"],
        [/open issues? or pull requests?/, "個打開的議題或拉取請求"],
        [/Are you sure you want to convert (\d+) issues? with the following label to a discussion\?/, "您確定要將帶有以下標籤的 $1 條議題轉換為討論嗎？"],
    ],
};
I18N.zh["repository/labels"] = I18N.zh["repository/issues"];

I18N.zh["repository/pull"] = { // 倉庫 - 拉取請求頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository/pull_issue_public"]["static"],

        // 倉庫 --> 拉取請求 標籤卡 /<user-name>/<repo-name>/pulls
            // 歡迎信息
            "Welcome to pull requests!": "歡迎使用拉取請求！",
            "Pull requests help you collaborate on code with other people. As pull requests are created, they’ll appear here in a searchable and filterable list. To get started, you should": "拉取請求可幫助您與其他人協作處理程式碼。創建拉取請求後，它們將出現在可搜索和可篩選的列表中。要開始，您應該",
            "create a pull request": "創建拉取請求",

            // [/First time contributing to ([^ ]+)?/, "首次為 $1 做貢獻？"], // /pulls
            "If you know how to fix an": "如果您知道如何修復一個",
            "issue": "議題",
            ", consider opening a pull request for it.": "，可考慮為它打開一個拉取請求。",
            "You can read this repository’s": "您可以閱讀該倉庫的",
            "to learn how to open a good pull request.": "，去學習如何打開一個好的拉取請求。",
            "If you would like to submit code to this repository, consider opening a pull request.": "如果您想向這個倉庫提交程式碼，請考慮打開一個拉取請求。",
            "If you would like to submit code to this repository, consider opening a pull request. You can read this repository’s": "如果您想向這個倉庫提交程式碼，請考慮打開一個拉取請求。您可以閱讀該倉庫的",

            "Label issues and pull requests for new contributors": "標記新貢獻者的議題和拉取請求",
            "Now, GitHub will help potential first-time contributors": "現在，GitHub 將幫助潛在的首次貢獻者",
            "discover issues": "探索議題",
            "labeled with": "標記為",

            "Dismiss": "忽略",
                // 忽略 下拉
                "Dismiss for this repository only": "僅對該倉庫不在提示",
                "Dismiss for all repositories": "對所有倉庫均不在提示",

            "New pull request": "發起拉取請求",

            "Reviews": "審查",
                // 篩選工作條
                "Filter by reviews": "按審查篩選",
                "No reviews": "未經審查",
                // "Review required": "需要審查",
                "Approved review": "已批准的審查",
                "Changes requested": "已請求更改",
                "Reviewed by you": "由您審查",
                "Not reviewed by you": "您未審查",
                "Awaiting review from you": "等待您審查",
                "Awaiting review from you or your team": "等待您或您的團隊的審查",
                "Awaiting review from you specifically": "特別等待您審查",

                // 篩選結果
                "There aren’t any open pull requests.": "暫無拉取請求。",

            "ProTip!": "專業提示！",
                "Find everything you created by searching": "查找您創建的所有內容，使用",
                "Exclude your own issues with": "查看您自己的問題，使用",
                "Mix and match filters to narrow down what you’re looking for.": "混搭篩選器，以縮小範圍，找到您想看到的。",
                "Exclude everything labeled": "如果要找到所有標有",
                "with": "標籤的，請使用",
                "Follow long discussions with": "要跟隨長討論，請使用",
                "on any issue or pull request to go back to the pull request listing page.": "在任何議題或拉取請求來返回拉取請求列表頁面。",

                "You commented on and opened this pull request": "您打開了此拉取請求併發表了評論",
                "You were mentioned on and commented on this pull request": "您被提及並對此拉取請求發表了評論",
                "You commented on this pull request": "您對此拉取請求發表了評論",
                "You opened this pull request": "您打開了此拉取請求",

        // 某條具體的拉取請求 /<user-name>/<repo-name>/pull/<id> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            // 頂部提醒
                "Your review was submitted on a merged pull request.": "您的審查已提交，一個合併的拉取請求。",
                "Marked pull request as ready for review.": "標記拉取請求為可審核。",
                "Your review was submitted successfully.": "您的審查已成功提交。",

            // 快捷鍵
                "Edit pull request title": "編輯拉取請求標題",
                "Edit pull request body": "編輯拉取請求主體",

            // 編輯 -> 選擇基礎庫
            "Choose a base branch": "選擇基礎分支",
                // 更改基礎分支對話框
                "Are you sure you want to change the base?": "您確定要更改基礎分支嗎？",
                "Some commits from the old base branch may be removed from the timeline, and old review comments may become outdated.": "舊的基礎分支的一些提交可能會從時間線上刪除，而舊的審查意見可能會變得過時。",
                "Change base": "更改基礎分支",

            // 程式碼 下拉菜單
                "Local": "本地",
                    "Checkout with GitHub CLI": "使用 GitHub CLI 檢出",
                    "Work fast with our official CLI.": "使用我們的官方 CLI 快速工作。",
                    "Checkout with GitHub Desktop": "使用 GitHub Desktop 檢出",

                // 程式碼空間
                    "This pull request must be reopened to create new codespaces on it.": "必須重新打開此拉取請求才能在其上創建新的程式碼空間。",
                    "Your workspaces in the cloud": "您在雲端的工作空間",
                    //[/Create a codespace on ([^ ]+)/, "在 $1 上創建程式碼空間"],
                    "Codespace repository configuration": "程式碼空間倉庫配置",
                        "New with options...": "新建（選項）...",
                        "Configure dev container": "配置開發容器",
                        "Set up prebuilds": "設置預構建",
                        "Manage codespaces": "管理程式碼空間",
                        "Share a deep link": "分享深度鏈接",
                        "What are codespaces?": "什麼是程式碼空間？",
                    "No codespaces": "尚無程式碼空間",
                    "You don't have any codespaces with this repository checked out": "您沒有檢出此倉庫的任何程式碼空間",
                    //[/Create codespace on ([^ ]+)/, "在 $1 上創建程式碼空間"],
                    "Learn more about codespaces...": "了解更多關於程式碼空間的信息...",

                    "On current branch": "在當前分支",
                        "No codespaces on current branch": "當前分支上沒有程式碼空間",
                    "On other branches": "在其他分支",
                    "miniature adventure": "迷你探險",
                    "Open miniature adventure in web": "在網絡中打開迷你探險",
                    "Active": "激活",
                        "Open in ...": "打開 ...",
                            "Open in browser": "在瀏覽器中打開",
                            "Open in Visual Studio Code": "在 Visual Studio Code 中打開",
                            "Open in JetBrains Gateway": "在 JetBrains Gateway 中打開",
                            "Open in JupyterLab": "在 JupyterLab 中打開",
                        "Rename": "重命名",
                            "Change codespace display name to...": "將程式碼空間顯示名稱更改為...",
                        "Export changes to a branch": "將更改導出到分支",
                            "This will create a new branch with any unpushed changes": "這將創建一個包含任何未推送更改的新分支",
                            "Create branch": "創建分支",
                        "Change machine type": "更改機器類型",
                            "Change codespace machine type": "更改程式碼空間機器類型",
                            "Machine type": "機器類型",
                                "2-core": "雙核",
                                "4-core": "四核",
                            "Need even more power?": "需要更多的力量？",
                            "Contact our team": "聯繫我們團隊",
                            "to enable 32-core or GPU machines.": "啟用 32 核或 GPU 機器。",
                            "Update codespace": "升級程式碼空間",
                        "Stop codespace": "停止程式碼空間",
                    "Codespace configuration": "程式碼空間設置",
                    "No changes": "未更改",

                    "Codespace usage for this repository is paid for by": "該倉庫的程式碼空間使用費由以下人員支付",

                    // [/Codespace \"(.+)\" stopped./, "程式碼空間 “$1” 已停止。"],
                    // [/Codespace \"(.+)\" deleted./, "程式碼空間 “$1” 已刪除。"],
                    // [/Are you sure you want to delete (.+)\?/, "您確定要刪除 $1 嗎？"],

            // 自動修復漏洞 提示
                "This automated pull request fixes a": "這個自動拉取請求將修復了一個",
                "security vulnerability": "安全漏洞",
                "Only users with access to Dependabot alerts can see this message.": "只有有權訪問 Dependabot 警報的用戶才能看到此消息。",
                "Learn more about Dependabot security updates": "了解更多關於 Dependabot 安全更新的信息",
                "opt out": "選擇退出",
            // 頂部提醒
                "Opted out of Dependabot security updates.": "選擇退出 Dependabot 安全更新。",

            // Dependabot 警報 拉取請求 提示
                "Merging this pull request will resolve a": "合併此拉取請求將解決",
                "high": "高",
                "severity": "嚴重性",
                "Dependabot alert": "Dependabot 警報",

                // 合併後頂部提醒
                    // [/This pull request resolved a Dependabot alert on ([^ ]+)./, "該請求解決了 $1 的 Dependabot 警報問題。"],

            // 狀態詞
            // [/merged (\d+) commits? into/, "將 4 個提交合併到"],
            "into": "到",
            // "merged": "已合併",
            "wants to merge": "希望合併",
            "commit into": "個提交到",
            "commits into": "個提交到",
            "from": "來自",

            // 標籤欄
            "Conversation": "討論",
            // "Commits": "提交",
            "Checks": "檢查",
            "Files changed": "更改的文件",

            // 右側欄 補充

                "Allow edits by maintainers": "允許維護者進行編輯",
                    "Allowing edits by maintainers": "允許維護者進行編輯",
                    "If checked, users with write access to": "若勾選此項，擁有對",
                    "can add new commits to": "具有寫入權限的用戶可以在您的",
                    "branch.": "分支上添加新的提交。",
                    "You can always change this setting later.": "您可以隨時修改此設置。",
                    "Note: By granting write access, maintainers could potentially edit your repository's workflows to reveal values of secrets and gain access to other branches.": "注意：通過授予寫入權限，維護者可能會編輯您倉庫的工作流程以揭示秘密值，並獲取對其他分支的訪問權限。",
                    "Got it": "知道了",
                    "If checked,": "如果選中，",
                    // [/users with write access to ([^ ]+) can add new commits/, "對 $1 具有寫權限的用戶可以添加新的提交"], // 具體拉取請求
                    "to your": "到您的",
                    "branch. You can always change this setting later.": "分支。您以後可以隨時更改此設置。",
                "Allow edits and access to secrets by maintainers": "允許維護者編輯和訪問密鑰",
                    "Maintainers could potentially edit this repository's workflows to reveal values of secrets and gain access to other branches.": "維護者有可能編輯這個倉庫的工作流程來獲取密鑰值，並獲得對其他分支的訪問。",

                "Maintainers are allowed to edit this pull request.": "允許維護者編輯此拉取請求。",

            // 討論標籤卡 主頁
            "Refresh": "刷新",

            "marked this pull request as draft": "將此拉取請求標記為草稿",
            "First-time contributor": "首次貢獻者",
            // [/This user is a first-time contributor to the ([^ ]+) repository./, "該用戶是第一次為 $1 倉庫做貢獻。"]
            "View changes": "查看更改",
            "View Changes": "查看更改",
            "Outdated": "陳舊的",
            "Resolve conversation": "解決對話",
                "Resolving conversation…": "解決對話中…",
            "Unresolve conversation": "未解決對話",
                "Unresolving conversation…": "未解決對話…",
                "marked this conversation as resolved.": "將此對話標記為已解決。",
            // "Changes requested": "更改請求",
            "Change requested": "更改請求",
            "Show resolved": "顯示已解決",
            "Hide resolved": "隱藏已解決",
            "Show all reviewers": "顯示所有審查者",
            "Hide all reviewers": "隱藏所有審查者",
            "New changes since you last viewed": "自您上次查看以來的新變化",
            "mentioned this pull request": "提及這個拉取請求",
            "dismissed": "忽略",
            "\’s": "的",
            "stale review": "陳舊審查",
            "via": "通過",
            "force-pushed": "強制推送",
            "the": " ",
            "branch from": "分支從",
            "and others": "和其他成員",
            "approved these changes": "批准這些更改",
                "See review": "查看審查",
                "Dismiss review": "駁回審查",
            "started a review": "開始審查",
                "View reviewed changes": "查看已審核的更改",
            "self-requested a review": "自我要求審查",
            "self-assigned this": "已自我審查",
            "marked this pull request as ready for review": "已將此拉取請求標記為可審核",
            "merged commit": "合併提交",
            "left a comment": "發表評論",
            "Add more commits by pushing to the": "添加更多提交，通過推送到",
            "branch on": "分支在",
            "This pull request was": "此拉取請求已",
            "Compare": "比較",
            "deleted the": "刪除",
            "branch": "分支",
            "added": "添加",
            "requested changes": "要求更改",
            "changed the title": "修改了標題",
            "added the": "添加",
            "label": "標籤",

            //
            "This branch has not been deployed": "該分支尚未部署",
            "No deployments": "未部署",

            // 拉取請求狀態
            "Review requested": "請求審查",
            "Review has been requested on this pull request. It is not required to merge.": "此拉取請求已請求進行審查。這不是合併的必要條件。",
            "Learn more about requesting a pull request review.": "了解更多關於申請拉取請求審核的信息。",
            // [/(\d+) pending reviewers?/, "$1 名待審者"],
            "was requested for review": "被請求審查",

            // 已請求更改
                // [/(\d+) reviews? requesting changes by reviewers with write access./, "$1 條評論請求更改由具有寫入權限的審查者進行更改。"], // 拉取請求

            "All conversations are resolved": "所有對話均已解決",
                // [/(\d+) resolved conversations?/, "2 條對話已解決"], // 拉取請求

            "No unresolved conversations": "沒有未解決的對話",
                "There aren't yet any conversations on this pull request.": "此拉取請求尚無任何對話。",
            "View": "查看",

            "This pull request is still a work in progress": "此拉取請求仍在進行中",
                "Ready for review": "準備審核",
                "Draft pull requests cannot be merged.": "拉取請求草稿不能合併。",
            "This pull request can be automatically merged by project collaborators": "此拉取請求可以由項目協作者自動合併",
                "Only those with": "只有對此倉庫具有",
                "write access": "寫入訪問權限",
                "to this repository can merge pull requests.": "的才可合併拉取請求。",
                "to this repository can mark a draft pull request as ready for review.": "的才可將拉取請求草案標記為可供審查。",

            // "Review required": "需要審查", // 拉取請求 頁面狀態詞
                "Add your review": "添加您的評論",
            // [/At least (\d+) approving reviews? are required by reviewers with write access./, "具有寫入權限的審查者至少需要 $1 次批准審查。"],
            "Code owner review required": "需要程式碼所有者審核",
                "was requested for review as a code owner": "要求以程式碼所有者身份進行審查",
            "Conversation resolution required": "需要解決對話",
                "A conversation must be resolved before this pull request can be merged.": "在合併此拉取請求前，必須先解決對話。",
            "Learn more about pull request reviews.": "了解更多關於拉取請求審核的信息。",
            "Changes approved": "變更已獲批准",
            "Approval not required": "不需要批准",
            "This pull request may be merged without approvals.": "可以在沒有批准的情況下合併此拉取請求。",
            // [/(\d+) approving reviews? by reviewers? with write access./, "$1 個批准的審查由具有寫入權限的審查者進行審查。"],
            // [/(\d+) approvals?/, "$1 項批准"],
            "Some checks haven’t completed yet": "有些檢查還沒有完成",
            // [/1 in progress check/, "$1個正在進行的檢查"],
            "Some checks were not successful": "有些檢查不成功",
            // [/1 skipped, 4 successful, and 2 failing checks/, "$1 個跳過, $2 個成功, $3 失敗"],
            // [/1 skipped, 4 successful, and 2 expected checks/, "$1 個跳過, $2 個成功, $3 個預先檢查"],
            "All checks have passed": "所有檢查均已通過",
            "All checks have failed": "所有檢查均失敗",
            // [/5 successful checks/, ""],
            // [/6 checks passed/, ""],
                "Show all checks": "顯示所有檢查",
                "Hide all checks": "隱藏所有檢查",
                "Details": "細節",
                "Required": "必須",
            // 未解決的評論
                // [/(\d+) conversations? must be resolved before merging./, "合併之前必須解決 $1 個對話。"],
            "Merging is blocked": "合併被阻止",
                "The base branch requires all conversations on code to be resolved.": "基礎分支要求解決所有關於程式碼的對話。",
                "The base branch requires all commits to be signed.": "基礎分支要求所有提交都經過簽名。",
                "Learn more about signing commits.": "了解更多關於簽名提交的信息。",
                "View rules": "查看規則",
            "Merging can be performed automatically once the requested changes are addressed.": "一旦請求的更改得到解決，合併就可以自動執行。",
            "This branch is out-of-date with the base branch": "此分支相比基礎分支已過時",
                "Merge the latest changes from": "將",
                "into this branch.": "的最新更改合併到此分支中。",
                    "Update branch": "更新分支",
                        "Update with merge commit": "使用合併提交更新",
                            "The latest changes will be merged into this branch with a merge commit.": "最新的更改將通過合併提交合併到此分支中。",
                        "Update with rebase": "使用變基更新",
                            "This pull request will be rebased on top of the latest changes and then force pushed.": "此拉取請求將會在最新的更改之上進行變基，並且會使用強制推送的方式提交。",
                            "This branch cannot be rebased due to conflicts": "由於衝突，無法對此分支執行變基操作。",

            "The base branch restricts merging to authorized users.": "基礎分支合併僅限於授權用戶。",
            "Learn more about protected branches.": "了解更多關於受保護分支的信息。",
            // [/Merging can be performed automatically with (\d+) approving review./, "合併可以通過 $1 次批准審查自動執行。"],
            "Merge without waiting for requirements to be met (bypass branch protections)": "合併而無需等待需求滿足（繞過分支保護）。",
                // [/This commit will be authored by ([^@]+@[^\n]+)/, "此提交的作者是 $1"],


            // [/(\d+) workflow awaiting approval/, "$1 個工作流等待批准"],
            "First-time contributors need a maintainer to approve running workflows.": "首次貢獻者需要維護者來批准正在運行的工作流。",
            "The base branch does not accept merge commits. Alternate merge methods are preferred.": "基礎分支不接受合併提交。其他合併方法是首選。",
            // [/The ([^ ]+) branch requires linear history/, "$1 分支為要求線性歷史記錄"],
            "Learn more about required linear history.": "了解更多關於要求線性歷史記錄。",

            "Checking for ability to merge automatically…": "檢測自動合併的能力…",
            "Hang in there while we check the branch’s status.": "請等待，我們正在檢查該分支的狀態",

            "Required statuses must pass before merging": "合併前必須通過所需的狀態",
            "All required": "所有必需",
            "statuses": "狀態",
            "and check runs on this pull request must run successfully to enable automatic merging.": "和檢查運行在該拉取請求上必須成功運行，才能啟用自動合併。",

            "Continuous integration has not been set up": "尚未設置持續集成",
            "several other apps": "其他一些應用",
            "can be used to automatically catch bugs and enforce style.": "可用於自動捕獲錯誤和強制執行樣式。",

            "This branch has no conflicts with the base branch": "該分支與基礎分支沒有衝突",
                "Merging can be performed automatically.": "可以自動地執行合併。",

            "This branch has no conflicts with the base branch when rebasing": "該分支基變時與基礎分支沒有衝突。",
                "Rebase and merge can be performed automatically.": "可以自動執行變基和合併。",

                "You’re not": "您無",
                "authorized": "權限",
                "to merge this pull request.": "合併此拉取請求。",

            "Merge pull request": "合併拉取請求",
            // 合併拉取請求 按鈕下拉
                "Create a merge commit": "創建合併提交",
                    "All commits from this branch will be added to the base branch via a merge commit.": "該分支的所有提交都將通過合併提交加入到基礎分支中。",
                    "Not enabled for this repository": "未為此倉庫啟用",
                "Squash and merge": "壓縮合併",
                    // [/The (\d+) commits? from this branch will be added to the base branch./, "該分支的 $1 個提交將合併到基本分支中。"],
                "Rebase and merge": "變基合併",
                    // [/The (\d+) commits? from this branch will be rebased and added to the base branch./, "該分支的 $1 個提交將變基合併到基礎分支中。"],
                    "Failed to load repo merge settings": "無法加載倉庫合併設置",

            //確認合併 對話框
            "Confirm merge": "確認合併",
            "Confirm squash and merge": "確認壓縮合併",
            "Confirm rebase and merge": "確認變基合併",
            "Merging…": "合併中…",

            "You can also": "您也可以",
            "open this in GitHub Desktop": "在 GitHub Desktop 中打開",
            "or view": "，或查看",
            "command line instructions": "命令行指令",

            // "Merged": "已合併",
            "View details": "查看詳情",
            "Hide details": "隱藏詳情",
            "Revert": "還原",
                "Create a new pull request to revert these changes": "創建一個新的拉取請求以恢復這些更改",
            "Closed with unmerged commits": "已關閉的未合併的提交",

            "Pull request successfully merged and closed": "拉取請求已成功合併並關閉",
            "Delete branch": "刪除分支",
            "Restore branch": "恢復分支",

            "Pull request closed": "拉取請求已關閉",
            "This pull request is closed, but the": "此拉取請求已關閉，但是",
            "branch has unmerged commits.": "分支具有未合併的提交。",
            "branch has unmerged commits. You can delete this branch if you wish.": "分支具有未合併的提交。您可以根據需要刪除此分支。",
            "If you wish, you can also delete this fork of": "如果需要，還可以刪除此復刻",
            "If you wish, you can delete this fork of": "如果需要，可以刪除此復刻",
            "in the": "在",
            "settings": "設置",

            // "Only those with": "只有對此倉庫具有",
            // "write access": "寫入訪問權限",
            // "to this repository can merge pull requests.": "的才可合併拉取請求。",
            "You’re all set — the": "一切就緒 —",
            "You’re all set—the": "一切就緒 —",
            "branch can be safely deleted.": "分支可以被安全刪除。",
            "This branch has conflicts that must be resolved": "該分支存在衝突，必須解決",
                "Use the command line": "使用命令行",
                "to resolve conflicts before continuing.": "解決衝突後再繼續。",

                "Checkout via command line": "通過命令行檢出",
                "If the conflicts on this branch are too complex to resolve in the web editor, you can check it out via command line to resolve the conflicts.": "如果該分支上的衝突過於複雜，無法在 Web 編輯器中解決，您可以通過命令行檢出來解決衝突。",
                "Step 1:": "第 1 步：",
                    "From your project repository, check out a new branch and test the changes.": "從項目倉庫中，檢出新分支並測試更改。",
                "Step 2:": "第 2 步：",
                    "Merge the changes and update on GitHub.": "合併更改並在 GitHub 上更新。",

            "Resolve conflicts": "解決衝突",
                "Use the": "使用",
                "web editor": "Web 編輯器",
                "or the": "或",
                "command line": "命令行",
                "to resolve conflicts.": "來解決衝突。",
            "Conflicting files": "衝突的文件:",

            "Require approval from specific reviewers before merging": "合併前需要特定審查者的批准",
                "Branch protection rules": "分支保護規則",
                "ensure specific people approve pull requests before they're merged.": "確保特定人員在合併之前批准拉取請求。",
            "Add rule": "添加規則",
            // [/Ensure specific people or teams approve pull requests before they're merged into your ([^ ]+) branch./, "確保特定的人或團隊在拉取請求被合併到您的 $1 分支之前批准它們。"], // 合併拉取請求

            // [/(\d+) workflows? awaiting approval/, "$1 個工作流程等待批准"],
            "This workflow requires approval from a maintainer.": "此工作流程需要維護者批准。",
            "Learn more about approving workflows.": "了解更多關於批准工作流程的信息。",
            "Approve and run": "批准並運行",

            // 狀態詞
            "reviewed": "審查",
            "requested a review from": "請求審查",
            "Reply...": "回覆...",

            // 程式碼審查回覆
            "Suggestions cannot be applied on outdated comments.": "建議不要應用於過時的評論。",
            "Suggested change": "更改建議",
            "This code change can be committed by users with write permissions.": "具有寫入權限的用戶可以提交此程式碼更改。",

        // 拉取請求 --> 提交 標籤卡 /<user-name>/<repo-name>/pull/<id>/commits
            "Commits": "提交",
            // [/Commits (.+)/, "提交於 $1"]
            "committed": "提交於",

            "Copy the full SHA": "複製完整的 SHA",
            "View commit details": "查看提交詳情",
            "Browse the repository at this point in the history": "瀏覽該階段的歷史倉庫內容",

        // 拉取請求--> 提交 --> 某提交詳情/<user-name>/<repo-name>/pull/<id>/commits/<full SHA>
            "commit": "提交",

            // 修改的文件 左側 展開按鈕
            "Expand all": "展開全部",
            "Expand All": "展開全部",
            "Expand Up": "向上展開",
            "Expand Down": "向下展開",

            // 修改的文件 右側下拉
            "Show comments": "顯示評論",
            "Show annotations": "顯示注釋",
            "View file": "查看文件",
            "Edit file": "編輯文件",
            "Delete file": "刪除文件",
            "Open in desktop": "在 GitHub Desktop 中打開",

            // 上一頁
            "You are viewing the earliest commit": "您正在查看最早的提交",
            // 下一頁
            "You are viewing the latest commit": "您正在查看最新的提交",

            "This merge commit was added into this branch cleanly.": "該合併提交被乾淨利落地添加到該分支中。",
                "There are no new changes to show, but you can still": "沒有新的更改可顯示，但您仍然可以",
                "view the diff.": "查看差異。",

        // 拉取請求 --> 更改的文件 標籤卡 /<user-name>/<repo-name>/pull/<id>/files
            // 工具條
            "Show file tree": "顯示文件樹",
            "Hide file tree": "隱藏文件樹",
            "Changes from": "更改自",
                "all commits": "所有提交",
                // 下拉
                "Show all changes": "顯示所有更改",
                // [/(\d+) commits?/, "$1 條提交"],
                "Show changes since your last review": "顯示自您上次評論以來的更改",
                // "You haven‘t reviewed this pull requeste": "您尚未審查過此請求請求",
                "You haven’t reviewed this pull request yet": "您尚未審查此請求請求",
                "Select commit": "選擇提交",
                "Hold shift + click to select a range": "按住 shift + 單擊以選擇一個範圍",
            "File filter": "文件篩選",
                "Filter by extension": "按文件後綴名篩選",
                    "No extension": "無後綴名",
                    // [/All (\d+) file types? selected/, "所有 $1 種文件類型被選中"],
                    // [/Select all 1 file types?/, "選擇所有 $1 種文件類型"],
                    "Only manifest files": "僅清單文件",
                "There are no files selected for viewing": "沒有選擇要查看的文件",
                "Viewed files": "查看過的文件",
                // "filter file types": "篩選文件類型",
                // "filter viewed files": "篩選已查看文件",
                // "hide viewed files": "隱藏已查看文件",
                // "filter by context": "按內容篩選",
            "Clear filters": "清除篩選",
            "Conversations": "討論",
            "Jump to conversation": "跳轉到討論",
                "Give feedback": "反饋",
                // [/Unresolved conversations/, "未解決的討論"],
                "Nice work!": "乾得好！",
                "All of your conversations have been resolved.": "您的所有討論都已解決。",
                // [/Resolved conversations/, "已解決的討論"],
                "No conversations yet": "尚無討論",
                "Review conversations will show up here.": "審查討論將顯示在這裡。",
            // "Jump to": "跳轉到",
                "Jump to file": "跳轉到文件",
                "Filter changed files": "篩選已更改文件",
            // 差異視圖
                "Diff view": "差異視圖",
                // "Always": "總是",
                "Unified": "同屏",
                "Split": "分屏",
                // "Just for now": "僅當前",
                // "Hide whitespace changes": "隱藏空白更改",
                "Hide whitespace": "隱藏空白",
                "Apply and reload": "應用並重新加載",
            "Show whitespace": "顯示空白",
            // "Refresh": "刷新",

            "files viewed": "查看過的文件",
                "Marking files as viewed can help keep track of your progress, but will not affect your submitted review": "將文件標記為已查看可以幫助您跟蹤進度，但不會糾正您提交的審查",
            "Review in codespace": "在程式碼空間中審查",
            // "Review changes": "審查更改", // 使用 Selector 規則翻譯
                // 下拉
                "Finish your review": "完成審查",
                    "Submit general feedback without explicit approval.": "未批准，並提出一般性反饋意見。",
                "Approve": "批准",
                    "Submit feedback approving these changes.": "批准，並提出反饋意見。",
                    "Submit feedback and approve merging these changes.": "提交反饋意見並批准合併這些更改。",
                    "Pull request authors can’t approve their own pull request": "拉取請求作者無法批准自己的拉取請求",
                    "Only users with explicit access to this repository may approve pull requests": "只有對這個倉庫有明確訪問權限的用戶才能批准拉取請求",
                "Request changes": "請求更改",
                    "Submit feedback suggesting changes.": "請求更改，並提出更改反饋意見。",
                    "Submit feedback that must be addressed before merging.": "提交合併前必須解決的反饋意見",
                    "Pull request authors can’t request changes on their own pull request": "拉取請求作者不能在自己的拉取請求上請求更改",
                    "Only users with explicit access to this repository may request changes to pull requests": "只有對這個倉庫有明確訪問權限的用戶才能請求更改拉取請求",
                "Abandon review": "放棄審核",
                "Submit review": "提交審查",
                    // 頂部提醒
                        "You need to leave a comment indicating the requested changes.": "您需要留下評論，說明所要求的更改。",
                "Cancel review": "取消審核",
                "pending": "條待處理",
                "comment": "評論",
                "comments": "評論",

            "Review changes": "審查更改",
                // 被鎖定
                "This conversation has been locked and limited to collaborators.": "此對話已鎖定，並限制與協作者對話。",

            "Viewed": "已查看",
            "Comment on this file": "評論此文件",

            "Load diff": "載入差異",
            "This file was deleted.": "該文件已被刪除",
            "Large diffs are not rendered by default.": "默認情況下，大的差異不會被呈現。",
            "Some generated files are not rendered by default. Learn more about": "某些生成的文件默認不呈現。了解更多信息關於",
            "how customized files appear on GitHub": "更改文件在 GitHub 中的顯示方式",
            "File renamed without changes.": "文件僅重命名，內容沒有更改。",

            "These merge commits were added into this branch cleanly.": "這些合併提交已被乾淨利落地添加到該分支中。",
                "There are no new changes to show.": "沒有任何新的變化。",

            // 建議更改
                "Suggested change": "建議更改",
                "Sign off and commit suggestion": "簽署並提交建議",
                    "Suggestions cannot be applied from pending reviews.": "無法應用待審核中的更改",
                "Add suggestion to batch": "批量添加建議",
                    "Add this suggestion to a batch that can be applied as a single commit.": "將此建議添加到可批量處理的單個提交中。",
                    "Batching suggestions must be done from the files tab.": "批處理建議必須在 “文件” 選項卡中進行。",

                "Pending in batch": "待批量處理",
                "Remove from batch": "從批量處理中移除",
                    "Remove this suggestion from those to be applied in batch": "從批量應用的建議中刪除此建議",
                "Sign off and commit suggestions": "簽署並提交建議",
                    "Apply all batched suggestions as a single commit": "將所有批量建議作為單個提交應用",
                "Sign off and commit changes": "簽署並提交更改",
                    "Applying commit...": "正在應用提交...",

                "This diff has recently been updated.": "該差異最近已更新。",
                "Refresh and try again.": "刷新並重試。",

                "Multiple suggested changes can be batched together in a single commit. Each suggestion author will be attributed in the commit as a co-author.": "多個建議更改可以在一次提交中批量處理。每個建議作者都將在提交中被歸為共同作者。",

        // 拉取請求 --> 更改的文件 標籤卡 /<user-name>/<repo-name>/pull/<id>/files/<full SHA>
            "You are viewing a condensed version of this merge commit. You can view the": "您正在查看該合併提交的濃縮版本。您可以查看",
            "full changes here": "完整的更改",

        // 拉取請求 --> 解決衝突 /<user-name>/<repo-name>/pull/<id>/conflicts
            "Resolving conflicts": "解決衝突",
            "between": "",
            "and committing changes": "並提交更改",
            // [/(\d+) conflicting files?/, "$1 個衝突文件"],
            // [/(\d+) conflicts?/, "$1 處衝突"],
            "Mark as resolved": "標記為已解決",
                "Remove all conflict markers to resolve this file": "刪除所有衝突標記以解決此文件衝突",
            "Indent mode": "縮進模式",
                "Spaces": "空格",
                "Tabs": "制表符",
            "Indent size": "縮進尺寸",
            "Line wrap mode": "換行模式",
                "No wrap": "不換行",
                "Soft wrap": "軟換行",

            "Commit merge": "提交合併",
            "Sign off and commit merge": "簽署並提交合併",
                "Heads up, this will commit to": "請注意，這將提交到",
                // [/I understand, sign off and update/, "我明白了，依然簽署並更新"],
                "You are": "您將",
                "signing off": "簽署",
                // [/on this commit as ([^@]+@[^\n]+)/, "該提交以 $1 身份"],
                "Committing merge…": "正在提交合併...",

                "conflict": "衝突",
                "conflicts": "衝突",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        ...I18N.zh["repository/pull_issue_public"]["regexp"],

        [/([\d,]+) Open/, "$1 打開"],
        [/([\d,]+) Closed/, "$1 已關閉"],
        [/#(\d+) opened/, "#$1 打開於"],
        [/#(\d+) by/, "#$1 打開者"],
        [/(\d+) tasks? done/, "$1 個任務完成"],
        [/(\d+) of (\d+) tasks?/, "$1 / $2 個任務"],
        [/(\d+) tasks?/, "$1 個任務"],
        [/First time contributing to ([^ ]+)?/, "首次為 $1 做貢獻？"],
        // 具體某條拉取請求
        [/merged (\d+) commits? into/, "將 $1 個提交合併到"],
        [/([^ ]+) left review comments?/, "$1 發表了審查意見"],
        [/([^ ]+) approved these changes?/, "$1 批准這些更改"], // 具體的拉取請求 審查者
        [/Request review from ([^ ]+)/, "請求 $1 審查"], // 具體的拉取請求 審查者
        [/users with write access to ([^ ]+) can add new commits/, "對 $1 具有寫權限的用戶可以添加新的提交"], // 具體拉取請求
        [/At least (\d+) approving reviews? are required to merge this pull request./, "至少需要 $1 次批准審查才能合併此拉取請求。"], // 具體的拉取請求 審查者
        [/This user is a first-time contributor to the ([^ ]+) repository./, "該用戶是第一次為 $1 倉庫做貢獻。"],
        [/(\d+) pending reviewers?/, "$1 名待審者"],
        [/([\d,]+) participants?/, "$1 位參與者"],
        [/At least (\d+) approving reviews? are required by reviewers with write access./, "具有寫入權限的審查者至少需要 $1 次批准審查。"],
        [/(\d+) approving reviews? by reviewers? with write access./, "$1 個批准的審查由具有寫入權限的審查者進行審查。"],
        [/(\d+) approvals?/, "$1 項批准"],
        // [/(\d+) reviews? requesting changes by reviewers with write access/, "$1 項審查，要求有寫入權限的審查者進行更改"],
        [/(\d+) changes? requested/, "$1 項更改請求"],
        [/(\d+) in progress checks?/, "$1 個正在進行的檢查"],
        [/(\d+) skipped and (\d+) successful checks?/, "$1 個跳過, $2 個成功檢查"],
        [/(\d+) successful and (\d+) failing checks?/, "$1 個成功, $2 個失敗檢查"],
        [/(\d+) skipped, (\d+) successful, and (\d+) failing checks?/, "$1 個跳過, $2 個成功, $3 個失敗檢查"],
        [/(\d+) skipped, (\d+) successful, (\d+) cancelled, and (\d+) failing checks?/, "$1 個跳過, $2 個成功, $3 個取消, $4 個失敗檢查"],
        [/(\d+) skipped, (\d+) successful, and (\d+) expected checks?/, "$1 個跳過, $2 個成功, $3 個預先檢查"],
        [/(\d+) skipped, (\d+) successful, (\d+) queue, and (\d+) expected checks?/, "$1 個跳過, $2 個成功, $3 個排隊, $4 個預先檢查"],
        [/(\d+) skipped, (\d+) successful, (\d+) in progress, and (\d+) expected checks?/, "$1 個跳過, $2 個成功, $3 個正在進行, $4 個預先檢查"],
        [/(\d+) neutral checks?/, "$1 次中立檢查"],
        [/(\d+) successful checks?/, "$1 次成功檢查"],
        [/(\d+) checks? passed/, "$1 次檢查通過"],
        [/Merging can be performed automatically with (\d+) approving review./, "合併可以通過 $1 次批准審查自動執行。"],
        [/(\d+) workflow awaiting approval/, "$1 個工作流等待批准"],
        [/The ([^ ]+) branch requires linear history/, "$1 分支為要求線性歷史記錄"],
        [/The (\d+) commits? from this branch will be added to the base branch./, "該分支的 $1 個提交將合併到基本分支中。"], // 合併拉取請求 按鈕下拉
        [/The (\d+) commits? from this branch will be combined into one commit in the base branch./, "該分支的 $1 個提交將合併到基礎分支中。"], // 合併拉取請求 按鈕下拉
        [/The (\d+) commits? from this branch will be rebased and added to the base branch./, "該分支的 $1 個提交將變基合併到基礎分支中。"], // 合併拉取請求 按鈕下拉
        [/Ensure specific people or teams approve pull requests before they're merged into your ([^ ]+) branch./, "確保特定的人或團隊在拉取請求被合併到您的 $1 分支之前批准它們。"], // 合併拉取請求
        [/(\d+) commits?/, "$1 條提交"],
        [/All (\d+) file types? selected/, "所有 $1 種文件類型被選中"], // 文件篩選
        [/Select all (\d+) file types?/, "選擇所有 $1 種文件類型"],
        [/Unresolved conversations/, "未解決的討論"],
        [/Resolved conversations/, "已解決的討論"],
        // [/Commits (.+)/, "提交於 $1"], // 提交標籤卡
        // 程式碼空間
        [/Create a codespace on ([^ ]+)/, "在 $1 上創建程式碼空間"],
        [/Create codespace on ([^ ]+)/, "在 $1 上創建程式碼空間"],
        [/Codespace \"(.+)\" stopped./, "程式碼空間 “$1” 已停止。"],
        [/Codespace \"(.+)\" deleted./, "程式碼空間 “$1” 已刪除。"],
        [/Are you sure you want to delete (.+)\?/, "您確定要刪除 $1 嗎？"],
        [/(\d+) conflicting files?/, "$1 個衝突文件"], //conflicts
        [/(\d+) conflicts?/, "$1 處衝突"],  //conflicts
        [/Awaiting requested review from ([^ ]+)/, "等待 $1 審查請求"], // 具體的拉取請求
        [/([^ ]+) is a code owner/, "$1 是程式碼所有者"], // 具體的拉取請求
        [/This commit will be authored by ([^@]+@[^\n]+)/, "此提交的作者是 $1"], // 具體的拉取請求
        [/This pull request resolved a Dependabot alert on ([^ ]+)./, "該請求解決了 $1 的 Dependabot 警報問題。"],
        [/(\d+) workflows? awaiting approval/, "$1 個工作流程等待批准"],
        [/(\d+) reviews? requesting changes by reviewers with write access./, "$1 條評論請求更改由具有寫入權限的審查者進行更改。"], // 拉取請求
        [/(\d+) resolved conversations?/, "$1 條對話已解決"], // 拉取請求
        [/I understand, sign off and update/, "我明白了，依然簽署並更新"],
        [/on this commit as ([^@]+@[^\n]+)/, "該提交以 $1 身份"],
        [/Notify someone on an issue with a mention, like: @([^ ]+)./, "在某個問題上通知並提及某人，例如：@$1。"], // 專業提示
        [/(\d+) conversations? must be resolved before merging./, "合併之前必須解決 $1 個對話。"],
    ],
    "selector": [ // 元素篩選器規則
        ["span[data-message='Review changes']", "審查更改"], // 拉取請求 --> 更改的文件
    ],
};

I18N.zh["repository/compare"] = { // 倉庫 - 比較並創建拉取請求
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 變更比較 頁面 /<user-name>/<repo-name>/compare
            "Compare changes": "比較變更",
            "Compare changes across branches, commits, tags, and more below. If you need to, you can also": "比較跨分支，提交，標籤，和更多的變更。如果您需要，也可以",
            "compare across forks": "比較復刻庫和源倉庫",
            "Learn more about diff comparisons here": "點擊此處了解更多關於差異比較的信息",

            // 分支選擇欄
            "base repository:": "基礎倉庫：",
                "Choose a Base Repository": "選擇基礎倉庫",
                "Filter repos": "篩選倉庫",
            "head repository:": "頭部倉庫：",
                "Choose a Head Repository": "選擇頭部倉庫",

            "base:": "基礎庫：",
                "Choose a base ref": "選擇基礎引用",
                "Find a branch": "搜索分支",
                "Find a tag": "搜索標籤",
            "compare:": "比較庫：",
                "Choose a head ref": "選擇頭部引用",

            "Choose different branches or forks above to discuss and review changes.": "選擇不同的分支或復刻來討論和查看變化。",
            "Learn about pull requests": "了解拉取請求",

            "Create pull request": "創建拉取請求",

            "Compare and review just about anything": "比較和審查任何文件",
            "Branches, tags, commit ranges, and time ranges. In the same repository and across forks.": "分支，標籤，提交範圍和時間範圍。在同一倉庫和復刻的倉庫。",
            "Example comparisons": "比較例子",

        // 提出合併分支 /<user-name>/<repo-name>/compare/<branch>...<user-name-1>:<branch-1>
        // /<user-name>/<repo-name>/compare/<branch>...<branch-1>
        // <user-name>/<repo-name>/compare/<branch>...<user-name-1>:<repo-name-1>:<branch-1>
            "Comparing changes": "比較變更",
            "Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also": "選擇兩個分支，看看發生了什麼改變，或發起一個新的拉請求。如果您需要，您也可以",
            "learn more about diff comparisons": "了解更多關於差異比較的信息",
            // "base fork:": "基復刻：",
            "Documentation has changed since you last contributed": "文件已發生變化，自您上次提交文件於",
            ". Take a look before submitting a pull request:": "。在提交拉取請求前，請先看一下：",
            "Contributing guidelines": "貢獻指南",
            "Last updated": "最近更新於",

            "There isn’t anything to compare.": "沒有任何東西可比較。",
                "We couldn’t figure out how to compare these references, do they point to valid commits?": "我們不知道如何比較這些引用，它們是否指向有效的提交？",

                "You’ll need to use two different branch names to get a valid comparison.": "您需要使用兩個不同的分支名稱來進行有效的比較。",
                "Check out some of these sample comparisons.": "看看這些比較的例子吧。",

                "is up to date with all commits from": "已是最新，提交於",
                ". Try": "。嘗試",
                "switching the base": "切換基礎庫",
                "for your comparison.": "來進行比較。",

            "Discuss and review the changes in this comparison with others.": "與他人討論並回顧此次對比中的變化。",

            "This comparison is big! We’re only showing the most recent 250 commits": "這個比較是很大的! 我們只顯示最近的 250 個提交。",

            "You’ll need to use two different branch names to get a valid comparison.": "您需要使用兩個不同的分支名稱來進行有效的比較。",

            "are identical.": "是相同的。",

            "Create another pull request to discuss and review the changes again.": "創建另一個拉取請求，再次討論和審查這些更改。",

            "Unified": "同屏",
            "Split": "分屏",

        // 直接提交拉取請求 /<user-name>/<repo-name>/compare/<branch>...<branch-1>?quick_pull=1
            "Open a pull request": "新建一個拉取請求",
            "The change you just made was written to a new branch named": "您剛剛所做的更改已寫入新分支",
            ". Create a pull request below to propose these changes.": ". 請在下方創建拉取請求，提出這些更改。",
            "Create a new pull request by comparing changes across two branches. If you need to, you can also": "通過比較兩個分支的更改來創建一個新的拉請求。如果需要，還可以",

            // 提示框（第一次提交拉取請求時）
            "It looks like this is your first time opening a pull request in this project!": "看起來這是您在這個項目中首次發起的拉取請求呢！",
            "Be sure to review the": "請務必查閱",
            "contributing guidelines": "貢獻指南",

            "Checking mergeability…": "檢查可合併性…",
            "Don’t worry, you can still create the pull request.": "別擔心，您仍然可以創建拉取請求。",
            "Able to merge.": "可被合併。",
            "Can’t automatically merge.": "無法自動合併。",
            "These branches can be automatically merged.": "該分支可被自動合併。",

            "View pull request": "查看拉取請求", //存在拉取請求時

            "commit": "次提交",
            "commits": "次提交",
            "file changed": "個文件變更",
            "files changed": "個文件變更",
            "contributor": "位貢獻者",
            "contributors": "位貢獻者",
            // "No commit comments for this range": "該範圍變更沒有提交注釋",

            "Reviewers": "審查者",
                "Loading suggestions…": "載入推薦…",
                // [/([^ ]+) left review comments/, "$1 發表了審查意見"],
                "At least 0 approving review is required to merge this pull request.": "至少需要 0 次批准審查才能合併此拉取請求。",
                "No reviews—at least 0 approving review is required.": "未經審查 — 至少需要 0 次批准審查。",
                "Re-request review": "重新請求審核",
                "Still in progress?": "仍在進行中嗎？",
                // [/Awaiting requested review from ([^ ]+)/, "等待 $1 的審查請求"]
                "Learn about draft PRs": "了解拉取請求草案",
                "Convert to draft": "設置為草案",
                "Request up to 15 reviewers": "最多請求 15 個審查者",
                // [/([^ ]+) approved these changes/, "$1 批准這些更改"], // 具體的拉取請求 審查者
                "Request": "請求",
                // [/Request review from ([^ ]+)/, "請求 $1 審查"], // 具體的拉取請求 審查者
                "This pull request is waiting on your review.": "此拉取請求正在等待您的審核。",

            "Assignees": "受理人",
                "No one assigned": "無人受理",
                "No one—": "無人 - ",
                "assign yourself": " 受理自己",
                "Assign up to 10 people to this issue": "最多指定 10 人", // 議題
                "Assign up to 10 people to this pull request": "最多指定 10 人", // 拉取請求
                "Clear assignees": "清除受理人",
                "Type or choose a user": "輸入或選擇用戶",
                "Suggestions": "建議",

            "Labels": "標籤",
                "None yet": "暫無",
                "bug": "BUG",
                    "Something isn't working": "有些東西不工作",
                "dependencies": "依賴性",
                    "Pull requests that update a dependency file": "更新依賴文件的拉取請求",
                "documentation": "文檔",
                    "Improvements or additions to documentation": "文檔的改進或補充",
                "duplicate": "重複",
                    "This issue or pull request already exists": "這個議題或拉取請求已經存在",
                "enhancement": "增強",
                    "New feature or request": "新功能或請求",
                "good first issue": "好的首發議題",
                    "Good for newcomers": "適合新人",
                "help wanted": "需要幫助",
                    "Extra attention is needed": "需要特別關注",
                "invalid": "無效",
                    "This doesn't seem right": "這似乎不對",
                "question": "問題",
                    "Further information is requested": "要求提供更多信息",
                "wontfix": "不會修復",
                    "This will not be worked on": "這將不會被處理",

                "Apply labels to this issue": "應用標籤", // 議題
                "Apply labels to this pull request": "應用標籤", // 拉取請求
                "Edit labels": "編輯標籤",

                "dependencies": "依賴關係",
                    "Pull requests that update a dependency file": "更新依賴文件的拉取請求",
                "Recent": "最近",
                "User": "用戶",
                "No projects": "無項目",

            "Milestone": "里程碑",
                "No milestone": "無里程碑",
                "Set milestone": "設置里程碑",
                    "Nothing to show": "暫無",

        "Allow edits and access to secrets by maintainers": "允許維護人員編輯和訪問機密",
        // 創建拉取請求 按鈕下拉
            "Automatically requests reviews from code owners": "自動請求程式碼所有者進行審查",
            "Create draft pull request": "創建拉取請求草案",
            "Doesn't request code owners review and cannot be merged": "不請求程式碼所有者審核並且無法合併",
            "Draft pull request": "拉取請求草案",
        "Remember, contributions to this repository should follow its": "請記住，對該倉庫的貢獻應遵循其",
        "security policy": "安全政策",
        "code of conduct": "行為準則",
        "Remember, contributions to this repository should follow our ": "請記住，對此倉庫的貢獻應遵循我們的",
        "GitHub Community Guidelines": "GitHub 社區準則",

        // 右側欄補充
        // 關聯議題
        "Use": "使用",
        "Closing keywords": "關閉關鍵詞",
        "in the description to automatically close issues": "在描述中，以自動關閉議題",
        "Use Closing keywords to add a closing reference": "使用關閉關鍵詞添加一個關閉引用",

        "Helpful resources": "幫助性資源",
            // "GitHub Community Guidelines": "GitHub 社區準則",


        // 標籤對應版本比較 /<user-name>/<repo-name>/compare/<tag-id1>...<tag-id2>
            // 僅限 MD文件
            "Display the source diff": "顯示源差異",
            "Display the rich diff": "顯示富差異",

            "Load more commits": "載入更多的提交",

        // /<user-name>/<repo-name>/compare/<tag>...<branch>
            "Commit comments": "提交評論",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/committed/, "提交於"],
    ],
};

I18N.zh["repository/commit"] = { // 倉庫 - 提交頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 具體某個提交頁面 /<user-name>/<repo-name>/commit/<full SHA>
            "Commit": "提交",

            // 快捷鍵
            "Browsing commits": "瀏覽提交",
            // "": "提交評論",
            "Close form": "關閉評論",
            "Parent commit": "父提交",
            "Other parent commit": "其他父提交",

            // 訪問已刪除的提交
            "This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository.": "這個提交不屬於本倉庫的任何分支，可能屬於倉庫以外的分支。",

            "Browse files": "瀏覽文件",
            "Loading branch information": "載入分支信息",

            // [/This commit closes issue (#\d+)./, "此提交關閉了提議 $1。"], //具體提交頁面
            "committed": "提交於",
            "commit": "提交",

            "Showing": "顯示",
            "with": "包含",
            "always": "總是",
            "Whitespace": "顯示空白字符差異",
            "Ignore whitespace": "忽略空白字符差異",
            "Unified": "同屏",
            "Split": "分屏",

            "Display the source diff": "顯示源差異",
            "Display the rich diff": "顯示富差異",
            "Comment on this file": "評論此文件", // new code view

            "Filter changed files": "篩選已更改的文件", // new code view 側欄
            "Show file tree": "顯示文件樹", // new code view 側欄
            "Hide file tree": "隱藏文件樹", // new code view 側欄

            "Submodule": "子模塊",
            "updated": "已更新",
            // [/from ([^ ]+) to ([^ ]+)/, "從 $1 到 $2。"], //具體提交頁面

            "Binary file not shown.": "不顯示二進制文件",
            "Empty file.": "空文件。",
            "File renamed without changes.": "文件僅重命名，內容沒有更改。",

            "Load diff": "載入差異",
            "This file was deleted.": "該文件已被刪除",
            "Large diffs are not rendered by default.": "默認情況下，大的差異不會被呈現。",
            "Some generated files are not rendered by default. Learn more about": "某些生成的文件默認不呈現。了解更多信息關於",
            "how customized files appear on GitHub": "更改文件在 GitHub 中的顯示方式",
            "File renamed without changes.": "文件僅重命名，內容沒有更改。",

            // 修改的文件 左側 展開按鈕
            "Expand all": "展開全部",
            "Expand Up": "向上展開",
            "Expand Down": "向下展開",
            "Collapse expanded lines": "摺疊展開的線",

            // 修改的文件 右側下拉
            "Show comments": "顯示評論",
            "Show annotations": "顯示注釋",
            "View file": "查看文件",
            "Edit file": "編輯文件",
            "Delete file": "刪除文件",
            "Open in desktop": "在 GitHub Desktop 中打開",

            //底部評論框上部
            "Lock conversation": "鎖定對話",
                "Lock conversation on this commit": "鎖定關於此提交的對話",
                "Locking the conversation means:": "鎖定對話意味著：",
                    "Other users": "其他用戶",
                    "can’t add new comments": "無法添加新評論",
                    "to this commit.": "到這個提交。",
                    "You and other collaborators": "您和其他協作者",
                    "with access": "有權限訪問",
                    "to this repository": "該倉庫",
                    "can still leave comments": "仍然可以發表評論",
                    "that others can see.": "其他人可以看到。",
                "You can always unlock this commit again in the future.": "您可以隨時再次解鎖此提交。",
            "Unlock conversation": "解鎖對話",
                "Unlock conversation on this commit": "解鎖關於此提交的對話",
                "Unlocking the conversation means:": "解鎖對話意味著：",
                "will be able to comment on this commit once more.": "將能夠再次對此提交發表評論。",
                "You can always lock this commit again in the future.": "您可以隨時再次鎖定此提交。",

            "Subscribe": "訂閱",
            "Unsubscribe": "取消訂閱",
            "You’re not receiving notifications from this thread.": "您沒有收到來自該話題的通知。",
            "You’re receiving notifications because you authored the thread.": "您收到通知是因為您編寫了提交。",
            "You’re receiving notifications because you’re subscribed to this thread.": "您收到通知是因為您訂閱了該話題。",
            "You’re receiving notifications because you’re watching this repository.": "您收到通知是因為您關注了該倉庫。",

        // 提交 commits 頁面 /<user-name>/<repo-name>/commits/<branch> 或 /<user-name>/<repo-name>/commits
            "Commits": "提交",
            // 快捷鍵
                "Copy file permalink": "複製文件永久鏈接",

            "Copy the full SHA": "複製完整的 SHA",
            "View commit details": "查看提交詳情",
            "Browse the repository at this point in the history": "瀏覽該階段的歷史倉庫內容",

            "Newer": "新的",
            "Older": "舊的",

            // 拉取請求懸浮卡
                "You were mentioned on and commented on this pull request": "您在該請求中被提及併發表了評論",
                "You left a review": "您發表了評論",

            // 議題懸浮卡
                "You commented on this issue": "您對此議題發表了評論",
                "You commented on and opened this issue": "您評論並打開了此議題",

        // /commits?since=<start-date XXXX-XX-XX>&until=<end-date XXXX-XX-XX>&author=<author-name>
            "No commits history": "尚無提交歷史記錄",
            "There isn't any commit history to show here": "此處沒有可顯示",
            "for the selected date range": "所選日期範圍內的任何提交歷史記錄",

        // 新版提交 commits 頁面 /<user-name>/<repo-name>/commits/<branch> 或 /<user-name>/<repo-name>/commits
            // 用戶篩選
                "All users": "所有用戶",
                "Find a user...": "尋找一個用戶……",
                "View commits for all users": "查看所有用戶的提交",
            // 時間篩選
                "All time": "所有時間",
                "Today": "今天",
            "Browse repository at this point": "查看此時間點的倉庫",

            // 日曆
                "Su": "一",
                "Mo": "二",
                "Tu": "三",
                "We": "四",
                "Th": "五",
                "Fr": "六",
                "Sa": "日",

            // [/Copy full SHA for ([a-f0-9]{7})/, "複製提交 $1 的完整 SHA"],
            // [/Show description for ([a-f0-9]{7})/, "顯示提交 $1 的描述"],
            // [/Hide description for ([a-f0-9]{7})/, "隱藏提交 $1 的描述"],

        // 提交中文件歷史 /<user-name>/<repo-name>/commits/<branch>/<file> 或 /<user-name>/<repo-name>/commits/<full SHA>/<file>
            "History for": "歷史：",
            "View at this point in the history": "在這一歷史節點上查看",

            // [/Renamed from/, "重命名自"], // 提交中文件歷史
            "(Browse History)": "（瀏覽歷史）",

        // 提交中文件夾歷史 /<user-name>/<repo-name>/commits/<branch>/<folder> 或 /<user-name>/<repo-name>/commits/<full SHA>/<folder>
            "End of commit history for this file": "此文件的提交歷史結束",

        // 2/commits?author=maboloshi&since=2021-09-30&until=2021-10-13
            "Seeing something unexpected? Take a look at the": "看到了一些意想不到的東西？請看一下",
            "GitHub commits guide": "GitHub 提交指南",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/(\d+) parents?/, "$1 個父"],
        [/(\d+) changed files?/, "$1 個更改的文件"],
        [/(\d+) additions?$/, "$1 處增加"],
        [/(\d+) deletions?$/, "$1 處刪除"],
        [/(\d+) changes: (\d+) additions? & (\d+) deletions?$/, "$1 處更改：$2 處增加和 $3 處刪除"],
        [/This commit closes issue (#\d+)./, "此提交關閉了提議 $1。"], //具體提交頁面
        [/from ([^ ]+) to ([^ ]+)/, "從 $1 到 $2。"], //具體提交頁面
        [/([\d,]+) additions, ([\d,]+) deletions not shown because the diff is too large. Please use a local Git client to view these changes./, "$1 處增加，$2 處刪除未顯示，因為差異太大。請使用本地 Git 客戶端查看這些更改。"],
        [/(\d+) comments? on commit/, "該提交有 $1 條評論"],
        // [/Commits (.+)/, "提交於 $1"], // 提交頁面 /<user-name>/<repo-name>/commits/<branch
        [/Renamed from/, "重命名自"], // 提交中文件歷史
        [/Copy full SHA for ([a-f0-9]{7})/, "複製提交 $1 的完整 SHA"],
        [/Show description for ([a-f0-9]{7})/, "顯示提交 $1 的描述"],
        [/Hide description for ([a-f0-9]{7})/, "隱藏提交 $1 的描述"],
        [/View (\d+) commit comments?/, "查看 $1 條提交評論"], // 新版提交 commits 頁面 /<user-name>/<repo-name>/commits/<branch>
    ],
};

I18N.zh["repository/blob"] = { // 倉庫 - 瀏覽程式碼
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 文件程式碼頁面 /<user-name>/<repo-name>/blob/<brach>/<file>
            // 頂部提醒
                "This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository.": "此提交不屬於該倉庫上的任何分支，並且可能屬於倉庫的外部分支。",

            // 快捷鍵
                "Source code browsing": "源程式碼瀏覽",
                    "Jump to line": "跳轉到行",
                    "Switch branch/tag": "切換分支/標籤",
                    "Expand URL to its canonical form": "將 URL 擴展為其規範形式",
                    "Show/hide all inline notes": "顯示/隱藏所有內嵌注釋",
                    "Open blame": "打開追溯視圖",
                    "Copy file path": "複製文件路徑",
                    "Toggle symbols panel": "切換符號面板",
                    "Toggle file tree": "切換文件樹",
                    "Open code view": "打開程式碼視圖",
                    "Open preview": "打開預覽",
                    "Open raw file": "打開源文件",
                "File tree": "文件樹",
                    "Move focus to row starting with string": "將焦點移至字符串",
                    "Focus previous row": "聚焦上一行",
                    "Focus next row": "聚焦下一行",
                    "Collapse row, or focus parent row": "摺疊行或聚焦父行",
                    "Expand row, or focus child row": "展開行或聚焦子行",

            // 文件樹側邊欄
                "Expand file tree": "展開文件樹",
                "Collapse file tree": "摺疊文件樹",
                // 搜索框
                    "Go to file": "轉到文件",
                        "No matches found": "未找到匹配項",

            // Action的 action.yml 文件
                "You can publish this Action to the GitHub Marketplace": "您可以將此 Action 發布到 GitHub 市場",
                "Draft a release": "起草發布",
            // 工作流程文件 /blob/<brach>/.github/workflows/xxxx.yml
                "View Runs": "查看運行情況",
            // 添加文件按鈕, 文件夾模式下
                "Add file": "添加文件",
            // 三個點
                "Raw file content": "原始文件內容",
                    "Download": "下載",
                    // "Jump to line": "跳轉到行",
                    "Find in file": "在文件中查找", // 激活 “換行” 時顯示
                    "Copy path": "複製路徑",
                    "Copy permalink": "複製永久鏈接",
                    "View options": "查看選項",
                        "Show code folding buttons": "顯示程式碼摺疊按鈕",
                        "Wrap lines": "換行",
                        "Center content": "核心內容",
                        "Open symbols on click": "單擊打開符號",
                    "Delete file": "刪除文件",

            "Copied path!": "✅ 路徑已複製！",

            "History": "歷史",

            "Top": "頂部",
            "Jump to file": "跳轉到文件",

            // 程式碼操作欄
                "Blame": "追溯",
                // [/(\d+) lines? \((\d+) loc\) ·/, "$1 行 ($1 個位置) ·"],
                // Copilot 廣告
                    "Code 55% faster with GitHub Copilot": "使用 GitHub Copilot 編碼速度提高 55%",
                        "Spend less time creating boilerplate and repetitive code patterns, and more time building great software. Try it in Codespaces or your favorite file editor.": "花更少的時間創建模板和重複的程式碼模式，花更多的時間構建優秀的軟件。在 GitHub 程式碼空間或您最喜歡的文件編輯器中嘗試一下哈。",
                        "Get GitHub Copilot": "獲取 GitHub Copilot",
                        "Don't show again": "不再顯示",

                "Raw": "源碼",
                // 文件複製圖標
                    "Copy raw file": "複製原始文件",
                // 文件下載圖標
                    "Download raw file": "下載原始文件",
                // 文件編輯圖標
                    "Edit this file": "編輯本文件",
                    "Edit the file in your fork of this project": "在您的復刻中編輯文件",
                        "Edit file": "編輯文件",
                            "Edit in place": "就地編輯",
                        "Open with...": "打開...",

                    // 按鈕提示
                    "Fork this repository and edit the file": "復刻此倉庫並編輯文件",
                // 符號面板圖標
                    "Open symbols panel": "打開符號面板",
                    "Close symbols panel": "關閉符號面板",

            // 程式碼視圖 行號欄 菜單
                "Copy line": "複製行",
                "Copy lines": "複製行",
                "Copy permalink": "複製永久鏈接",
                "View git blame": "瀏覽 Git 追溯",
                "Reference in new issue": "引用到新議題",
                "Reference in new discussion": "引用到新討論",
                "View file in GitHub.dev": "在 GitHub.dev 中查看文件",
                "View file in different branch/tag": "查看不同分支/標籤中的文件",

            // 提醒
                "This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.": "此文件包含雙向 Unicode 文本，其解釋或編譯方式可能與下面的顯示不同。要查看，請在一個能顯示隱藏的 Unicode 字符的編輯器中打開文件。",
                "Learn more about bidirectional Unicode characters": "了解更多關於雙向 Unicode 字符的信息",
                "Show hidden characters": "顯示隱藏字符",

            // 正文部分
                // csv 文件
                    "Search this file": "搜索這個文件", // csv 文件
                    // 提醒
                        "We can make this file": "如果糾正此錯誤，我們可以使該文件",
                        "beautiful and searchable": "美觀且可搜索",
                        "if this error is corrected: No commas found in this CSV file in line 0.": "：在此 CSV 文件中的第 0 行中找不到逗號。",

                // 大文件
                    "View raw": "查看原始數據",
                    "(Sorry about that, but we can’t show files that are this big right now.)": "（很抱歉，但我們現在無法顯示這麼大的文件。）",
                // 無法渲染
                    "Sorry, something went wrong.": "抱歉，出了一些問題。",
                    "Reload?": "重新加載？",
                    "Unable to render code block": "無法渲染程式碼塊",

            "More Pages": "更多頁面",

            // 右側大綱面板
                "Outline": "大綱", // md 文件
                    "Filter headings": "篩選標題", // md 文件

            // 右側符號面板
                "Symbols": "符號",
                    "Symbol outline not available for this file": "大綱不適用於此文件",
                    "To inspect a symbol, try clicking on the symbol directly in the code view.": "要檢查一個符號，可以嘗試在程式碼視圖中直接點擊該符號。",
                    "Code navigation supports a limited number of languages.": "程式碼導航支持有限數量的語言。",
                    "See which languages are supported.": "查看支持哪些語言。",

                    "Find definitions and references for functions and other symbols in this file by clicking a symbol below or in the code.": "通過點擊下方或程式碼中的符號，查找此文件中函數和其他符號的定義和引用。",
                    "Filter symbols": "篩選符號",

                "All Symbols": "所有符號",
                    "Search for this symbol in this repository": "在此倉庫中搜索此符號",
                    "all repositories.": "所有倉庫。",
                    "In this file": "在這個文件中",
                    "Definition": "定義",
                    "search-based": "基於搜索",
                    "References": "引用",
                    "Reference": "引用",
                    "No definitions or references found": "未找到定義或引用",
                    "Show more": "顯示更多",
                    "Show less": "顯示更少",
                    "Search for this symbol": "搜索此符號",

        // 程式碼追溯頁面 /<user-name>/<repo-name>/blame/<branch>/<file>
            "Newer": "新的",
            "Older": "舊的",

            "Contributor": "貢獻者",
            "Contributors": "貢獻者",

            // 浮動搜索框
                "Find": "查找",
                "Press": "按",
                "again to open the browser's find menu": "打開瀏覽器的查找菜單",
                "Search this file": "搜索此文件",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/(\d+) lines? \((\d+) loc\) ·/, "$1 行 ($1 個位置) ·"],
        [/(\d+) References?/, "$1 次引用"],
        [/Blame prior to change ([a-f0-9]{7}), made on/, "追溯更改之前 $1 ，修改於"],
    ],
};
I18N.zh["repository/blame"] = I18N.zh["repository/blob"];

I18N.zh["repository/discussions"] = { // 討論頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 討論頁面 /<user-name>/<repo-name>/discussions
        // 組織討論頁 /orgs/<orgs-name>/discussions
            "Teams": "團隊", //組織倉庫
            "People": "成員", //組織倉庫

            "Start a new discussion": "開始新的討論",
            "Get started by creating the first": "開始吧，為您的社區創建",
            "discussion for your community.": "第一個討論。",
            "Got it": "知道了",

            "About pinned discussions": "關於置頂討論",
            "When you start a discussion,": "當您開始討論時，",
            "you can choose to feature it": "您可以選擇將",
            "here by pinning it.": "其置頂在此處。",

            "Personalize your categories": "自定義您的分類",
            "Choose categories that fit your community. These could be announcements, Q&A with marked answers, open-ended conversations, or polls for community voting.": "選擇適合您社區的類別。這些可以是公告、帶有標記答案的問答、開放式對話或用於調查的社區投票。",

            "Welcome to discussions!": "歡迎參與討論！",
            "Discussions are to share announcements, create conversation in your community, answer questions, and more.": "討論是為了分享公告，在您的社區創造對話，回答問題，以及更多。",
            "Discussions are to share announcements, create conversation in your community, answer questions, and more. To get started, you can create a": "討論是為了分享公告，在您的社區創造對話，回答問題，以及更多。首先，您可以創建一個",

            // 組織討論
            "Welcome to Organization Discussions!": "歡迎參與組織討論！",
            "There are no discussions here yet": "這裡還沒有討論",
            "Organization discussions are to broadcast news, create conversation in your community, answer questions, and share ideas. To get started, you can": "組織討論是為了廣播新聞，在您的社區創造對話，回答問題，並分享想法。要開始，您可以",
            "create a new discussion.": "創建新的討論。",

            // 左側欄
            "Submit search": "提交搜索",
            "Search all discussions": "搜索所有討論",
            "Suggested filters": "推薦的篩選器",
            "filter by discussion author": "按討論作者篩選",
            "filter by discussion category": "按討論分類篩選",
            "filter by answered or unanswered": "按已答覆或未答覆篩選",

            "Categories": "分類",
            "View all discussions": "查看全部討論", // 組織討論
            "View all": "查看全部", // 倉庫討論

            "Most helpful": "最有幫助",
                "Be sure to mark someone’s comment as an answer if it helps you resolve your question — they deserve the credit!": "如果某人的評論有助於您解決問題，請務必將其標記為答案——他們值得稱讚！",
            "Last 30 days": "最近 30 天",
            "Community guidelines": "社區指南",
            "Community insights": "社區見解",

            //
            "Sort by:": "排序方式：",
                "Latest activity": "最新活動",
                "Date created": "創建日期",
                "Top: Past week": "置頂：過去一周",
                "Top: Past month": "置頂：過去一月",
                "Top: Past day": "置頂：過去一天",
                "Top: Past year": "置頂：過去一年",
                "Top: All": "置頂：所有",
            "Label": "標籤",
                "Filter by label": "按標籤篩選",
                "Filter labels": "篩選標籤",
                "Unlabeled": "無標籤",

                "bug": "BUG",
                    "Something isn't working": "有些東西不工作",
                "dependencies": "依賴性",
                    "Pull requests that update a dependency file": "更新一個依賴文件的拉取請求",
                "documentation": "文檔",
                    "Improvements or additions to documentation": "文檔的改進或補充",
                "duplicate": "重複",
                    "This issue or pull request already exists": "這個議題或拉取請求已經存在",
                "enhancement": "增強",
                    "New feature or request": "新功能或請求",
                "good first issue": "好的首發議題",
                    "Good for newcomers": "適合新人",
                "help wanted": "需要幫助",
                    "Extra attention is needed": "需要特別關注",
                "invalid": "無效",
                    "This doesn't seem right": "這似乎不對",
                "question": "問題",
                    "Further information is requested": "要求提供更多信息",
                "wontfix": "不會修復",
                    "This will not be worked on": "這將不會被處理",

                "Edit labels": "編輯標籤",
            "Filter:": "篩選:",
                "Answered": "已答覆",
                "Unanswered": "未答覆",
                "Locked": "鎖定",
                "Unlocked": "未鎖定",
                "All": "所有",

            "New discussion": "新建討論",

            "There aren't any discussions.": "暫無任何討論。",
            "There are no matching discussions.": "沒有匹配的討論。",
            "There are no matching answered discussions.": "沒有匹配的已答覆討論。",
            "There are no matching unanswered discussions.": "沒有匹配的未答覆討論。",
            "You can open a": "您可以打開一個",
            "new discussion": "新討論",
            "to ask questions about this repository or get help.": "，詢問關於這個倉庫的問題或獲得幫助。",

            "asked": "回覆",
            "started": "標星",
            "· Unanswered": " · 未答覆",
            "· Answered": " · 已答覆",

            // 下拉補充
            "Use": "使用",
            "click/return": "點擊/迴車",
            "to exclude labels.": "去排除標籤。",

            // 狀態詞
            "asked a question in": "提出了一個問題在",
            "Unanswered Question": "未解答的問題",
            "announced": "公布於",
            "in": "在",

        // 討論分類 /<user-name>/<repo-name>/discussions/categories
            "Manage discussion categories": "管理討論分類",
                "Sections are a dropdown of categories. Categories have types of discussions, and discussions within them.": "本欄目是類別的下拉菜單。類別中包含討論類型和討論內容。",
            // [/(\d+) categories?/, "$1 個分類"],
            "Categories without section": "無欄目分類",
            "Announcements": "公告",
                "Updates from maintainers": "維護者的更新信息",
            "General": "通常",
                "Chat about anything and everything here": "在這裡談論任何事情",
            "Ideas": "想法",
                "Share ideas for new features": "分享對新功能的想法",
            "Polls": "投票",
                "Take a vote from the community": "社區中進行投票",
            "Q&A": "問答",
                "Ask the community for help": "向社會尋求幫助",
                "Answers enabled": "已啟用答案",
            "Show and tell": "展示與講述",
                "Show off something you've made": "炫耀您所做的事情",

            "New section": "新建欄目",
            "New category": "新建分類",

            "Edit Announcements category": "編輯 “公告” 分類",
            "Edit General category": "編輯 “通常” 分類",
            "Edit Ideas category": "編輯 “想法” 分類",
            "Edit Polls category": "編輯 “投票” 分類",
            "Edit Q&A category": "編輯 “問與答” 分類",
            "Edit Show and tell category": "編輯 “展示與講述” 分類",

            "Delete Announcements category": "刪除 “公告” 分類",
            "Delete General category": "刪除 “通常” 分類",
            "Delete Ideas category": "刪除 “想法” 分類",
            "Delete Polls category": "刪除 “投票” 分類",
            "Delete Q&A category": "刪除 “問與答” 分類",
            "Delete Show and tell category": "刪除 “展示與講述” 分類",

            // 刪除分類
                "If this category has discussions associated, where would you like to reassign them?": "如果此類別有相關的討論，您希望將它們重新分配到何處？",
                "Delete and move": "刪除並移動",

            // 刪除欄目
                // [/Delete (.*) section/, "刪除 “$1” 欄目"],
                "Are you sure you want to delete this section? All categories in this section will no longer belong to a section.": "您確定要刪除此欄目嗎？此欄目中的所有分類將不再屬於一個欄目。",

        // 新建 & 編輯 分類 /<user-name>/<repo-name>/discussions/categories/new
        // /<user-name>/<repo-name>/discussions/categories/<id>/edit
            "Create category": "創建分類",
            "Edit category": "編輯分類",
            "Category name": "分類名稱",
            "Description": "描述",
            "Add a description (optional)": "添加描述（可選）",
            "Discussion Format": "討論形式",
                "Open-ended discussion": "開放式討論",
                    "Enable your community to have conversations that don't require a definitive answer to a question. Great for sharing tips and tricks or just chatting.": "使您的社區能夠進行對話，不需要對問題作出明確的回答。很適合分享技巧和竅門，或者只是聊天。",
                "Question / Answer": "問 / 答",
                    "Enable your community to ask questions, suggest answers, and vote on the best suggested answer.": "使您的社區能夠提出問題、建議答案並投票選出最佳建議答案。",
                "Announcement": "公告",
                    "Share updates and news with your community. Only maintainers and admins can post new discussions in these categories, but anyone can comment and reply.": "與您的社區分享更新和新聞。只有維護者和管理員可以在這些類別中發布新討論，但任何人都可以發表評論和回覆。",
                "Poll": "投票",
                    "Gauge interest, vote, and interact with other community members using polls.": "調查興趣，投票，並使用投票與其他社區成員互動。",
                    "Cannot be changed to polls. Please create a new category for polls.": "不能更改為投票。請為投票創建一個新類別。",
            "Add this category to a section (optional)": "將此分類添加到一個欄目（可選）",
                "No section": "無欄目",

            "Create": "創建",
            "Save changes": "保存更改",
            "Submitting": "提交中",

            // 頂部提醒
                "Category Announcements has been created.": "分類 “公告” 已創建",
                "Category General has been created.": "分類 “通常” 已創建",
                "Category Ideas has been created.": "分類 “想法” 已創建",
                "Category Polls has been created.": "分類 “投票” 已創建",
                "Category Q&A has been created.": "分類 “問與答” 已創建",
                "Category Show and tell has been created.": "分類 “展示與講述” 已創建",

                "Category Announcements has been updated.": "分類 “公告” 已更新",
                "Category General has been updated.": "分類 “通常” 已更新",
                "Category Ideas has been updated.": "分類 “想法” 已更新",
                "Category Polls has been updated.": "分類 “投票” 已更新",
                "Category Q&A has been updated.": "分類 “問與答” 已更新",
                "Category Show and tell has been updated.": "分類 “展示與講述” 已更新",

                "Category Announcements has been deleted.": "分類 “公告” 已刪除",
                "Category General has been deleted.": "分類 “通常” 已刪除",
                "Category Ideas has been deleted.": "分類 “想法” 已刪除",
                "Category Polls has been deleted.": "分類 “投票” 已刪除",
                "Category Q&A has been deleted.": "分類 “問與答” 已刪除",
                "Category Show and tell has been deleted.": "分類 “展示與講述” 已刪除",

                // [/Category \"(.*)\" has been created./, "分類 “$1” 已創建。"],
                // [/Category \"(.*)\" has been updated./, "分類 “$1” 已更新。"],
                // [/Category \"(.*)\" has been deleted./, "分類 “$1” 已刪除。"],

        // 新建 & 編輯欄目 /<user-name>/<repo-name>/discussions/sections/new
            "Create section": "創建欄目",
            "Section name": "欄目名稱",
            "Add categories to this section": "向欄目添加分類",
            "A category can only belong to one section at a time.": "一個分類一次只能屬於一個欄目。",

            // 頂部提醒
                // [/Section \"(.*)\" has been created./, "欄目 “$1” 已創建。"],
                // [/Section \"(.*)\" has been updated./, "欄目 “$1” 已更新。"],
                // [/Section \"(.*)\" has been deleted./, "欄目 “$1” 已刪除。"],

        // 新建討論頁面 /<user-name>/<repo-name>/discussions/new
            "Start a new discussion": "開始新的討論",
            "Select a discussion category": "選擇討論分類",
            "Get started": "開始",
            "Category:": "分類：",
            "Contributing": "貢獻",
            "It looks like this is your first time starting a discussion in this repository!": "看起來這是您第一次在此倉庫中開始討論！",
            "This is a community we build together. Please be welcoming and open minded.": "這是我們共同建立的社區。請保持熱情和開放的態度。",

            // 投票類
            "Poll question": "投票問題",
            "Ask your question here (required)": "在此提出您的問題（必填）。",
            "Poll options": "投票選項",
            "Option 1 (required)": "選項 1（必填）",
            "Option 2 (required)": "選項 2（必填）",
            "Option": "選項",
            "+ Add an option": "+ 增加選項",

            // 右側欄
            "Labels": "標籤",
                "None yet": "暫無",
            "Helpful resources": "幫助性資源",
            "Code of conduct": "行為準則",
            "Security policy": "安全政策",
            "Support": "支持",
            "GitHub Community Guidelines": "GitHub 社區準則",

            "Ask a question, start a conversation, or make an announcement": "提出問題、開始對話或發布公告",

        // 新建討論頁面 /<user-name>/<repo-name>/discussions/new?category=general
            "If this doesn’t look right you can": "如果這個看起來不對，您可以",
            "choose a different category.": "選擇不同的類別。",
            "Fields marked with an asterisk (*) are required.": "標有星號（*）的字段是必填字段。",
            "Discussion title": "討論標題",

        // 新建討論頁面 /<user-name>/<repo-name>/discussions/new?category=announcements&welcome_text=true
            "Since you're new here, we're helping you to get started by generating your first post to the community. Don't worry, you can edit this discussion after you post!": "由於您是新來的，我們正在幫助您開始向社區發布您的第一個帖子。不用擔心，您可以在發布後編輯此討論！",

        // 某個討論頁面 /<user-name>/<repo-name>/discussions/<id>
            // [/Congratulations, you've created the first discussion in ([^ ]+)!/, "恭喜您，您已經在 $1 中創建了第一個討論!"],

            // 頂部提醒
                "Discussion has successfully been pinned.": "討論已成功置頂。",
                "Discussion has been unpinned.": "討論已取消置頂。",
                "Discussion pinned to Announcements": "在 “公告” 上置頂討論",
                "Discussion pinned to General": "在 “通常” 上置頂討論",
                "Discussion pinned to Ideas": "在 “想法” 上置頂討論",
                "Discussion pinned to Polls": "在 “投票” 上置頂討論",
                "Discussion pinned to Q&A": "在 “問與答” 上置頂討論",
                "Discussion pinned to Show and tell": "在 “展示與講述” 上置頂討論",
                "Discussion unpinned from Announcements": "取消在 “公告” 上置頂討論",
                "Discussion unpinned from General": "取消在 “通常” 上置頂討論",
                "Discussion unpinned from Ideas": "取消在 “想法” 上置頂討論",
                "Discussion unpinned from Polls": "取消在 “投票” 上置頂討論",
                "Discussion unpinned from Q&A": "取消在 “問與答” 上置頂討論",
                "Discussion unpinned from Show and tell": "取消在 “展示與講述” 上置頂討論",

            "Pinned": "已置頂",

            "announced in": "宣布於",
            "started this conversation in": "開始了這次討論，在",
            "asked this question in": "提出了這個問題，在",
            "Maintainer": "維護者",
            "Discussion options": "討論選項",
            "Category": "分類",

            // [/(\d+) answers?/, "$1 位答覆者"],
            "Return to top": "返回頂部",
            // [/(\d+) comments?/, "$1 條評論"],
            // [/(\d+) replies?/, "$1 條答覆"],
            // [/(\d+) suggested answer/, "$1 個建議答案"],

            "Answered by": "答覆者：",
            "View full answer": "查看完整答案",
            "Oldest": "最早",
            "Newest": "最新",
            "Top": "置頂",
            "Comment options": "評論選項",


            "Events": "活動",
            "Marked": "標記為",
            "an": "一個",
            "Marked then unmarked an answer": "標記後，又取消標記",
            "Marked as answer": "標記為答案",
            "Answer selected by": "被標記答案由",

            "This comment was marked as off-topic.": "這條評論被標記為離題。",
            "Show comment": "顯示評論",
            "Hide comment": "隱藏評論",
            // [/Show (\d+) previous repl(y|ies)/, "顯示 $1 條之前的答覆"],
            // [/(\d+) hidden items?/, "$1 條隱藏項目"],
            "Load more…": "載入更多…",
            "New": "新",

            "Remember, contributions to this repository should follow its": "請記住，對該倉庫的貢獻應遵循",
            "Remember, contributions to this repository should follow our": "請記住，對該倉庫的貢獻應遵循我們的",
            "code of conduct": "行為準則",

            // [/(\d+) new suggested answers?/, "$1 個新的建議答案"],
            "Answer selected": "已選擇答案",

            // 右側欄
            // /([\d,]+) participants?/, "$1 位參與者"
            "and others": "和其它",

            "Change category": "更改類別",
            "Converted from issue": "由議題轉化而來",
                // [/This discussion was converted from issue/, "本討論由以下議題轉換而來"],

            "Notifications": "通知類型",
                "Subscribe": "訂閱",
                "Unsubscribe": "退訂",
                "You’re not receiving notifications from this thread.": "您沒有收到來自該話題的通知。",
                "You’re receiving notifications because you’re watching this repository.": "您收到通知是因為您正在關注此倉庫。",
                "You’re receiving notifications because you authored the thread.": "您收到通知是因為您提出了該話題。",
                "You’re receiving notifications because you’re subscribed to this thread.": "您收到通知是因為您訂閱了該話題。",
                "You’re receiving notifications because you were mentioned.": "您收到通知是因為有人 @您。",
                "You’re receiving notifications because you commented.": "您收到通知是因為您發表了評論。",
                "You’re receiving notifications because you are watching pull requests on this repository.": "您收到通知是因為您正在關注此倉庫上的拉取請求。",
                "You’re receiving notifications because you are watching issues on this repository.": "您收到通知是因為您正在關注此倉庫上的議題。",
                "You’re receiving notifications because you modified the open/close state.": "您收到通知是因為您修改了打開/關閉狀態。",
                "You’re ignoring this repository.": "您忽略了這個倉庫。",

            // 鎖定對話
            "Lock conversation": "鎖定對話",
                "Are you sure you want to lock conversation on this discussion?": "您確定要鎖定此討論的對話嗎？",
                "Other users": "其他用戶",
                "can’t add new comments": "無法添加新評論",
                "to this discussion.": "到該討論。",
                "You and other collaborators": "您和其他合作者",
                "with access": "具有訪問權限",
                "to this repository": "該倉庫",
                "can still leave comments": "仍然可以留下評論",
                "that others can see.": "，其他人可以看到。",
                "You can always unlock this discussion again in the future.": "您今後仍可以隨時再次解鎖此討論。",
                "This conversation has been locked and limited to collaborators.": "此對話已鎖定，僅合作者可評論。",
            "Unlock conversation": "解鎖對話",
                "Are you sure you want to unlock conversation on this discussion?": "您確定要解鎖此討論的對話嗎？",
                "Everyone": "任何人",
                "will be able to comment on this discussion once more.": "將能夠再次對這個討論發表評論。",
                "You can always lock this discussion again in the future.": "您今後仍可以隨時再次鎖定此討論。",
            "Transfer this discussion": "轉移討論",
                // 轉移議題 對話框
                "Results are limited to top repositories, search to find more.": "結果僅限於置頂倉庫，請搜索以查找更多信息。",
                "Move this discussion to another repository you own.": "將此討論移至您擁有的另一個倉庫。",
                "Search repositories": "搜索倉庫",
                "There aren't any eligible repositories that match your query.": "沒有任何符合條件的倉庫與您的查詢匹配。",
                "Transfer discussion": "轉移討論",
            "Pin discussion": "置頂討論",
                "You can pin up to 4 discussions. They will appear publicly at the top of the discussions page.": "您最多可以置頂 4 個討論。它們將公開顯示在討論頁面的頂部。",
                "Configure pinned discussion": "設置置頂討論",
                    "Background": "背景色",
                    "Pattern": "圖案",
                "Pinning discussion…": "置頂討論…",
            "Edit pinned discussion": "編輯置頂討論",
            "Unpin discussion": "取消置頂討論",
                "Are you sure you want to unpin this discussion?": "您確定要取消置頂討論嗎？",
                "The discussion itself won't be deleted, it just won't be shown prominently above the list of discussions.": "討論本身不會被刪除，只是不會突出顯示在討論列表上方。",
                // 頂部提醒
                // [/Discussion \"([^ ]+)\" has been unpinned./, "討論 “$1” 已取消置頂。"],
            "Pin discussion to Announcements": "將討論置頂到 “公告”",
                "Pin this discussion to this category": "將此討論置頂到此類別",
                    "This will pin this discussion to the top of the Announcements category.": "這將此討論置頂到 “公告” 類別頂部。",
                    "Pin to Announcements": "置頂到 “公告”",
            "Pin discussion to General": "將討論置頂到 “通常”",
                    "This will pin this discussion to the top of the General category.": "這將此討論置頂到 “通常” 類別頂部。",
                    "Pin to General": "置頂到 “通常”",
            "Pin discussion to Ideas": "將討論置頂到 “想法”",
                    "This will pin this discussion to the top of the Ideas category.": "這將此討論置頂到 “想法” 類別頂部。",
                    "Pin to Ideas": "置頂到 “想法”",
            "Pin discussion to Polls": "將討論置頂到 “投票”",
                    "This will pin this discussion to the top of the Polls category.": "這將此討論置頂到 “投票” 類別頂部。",
                    "Pin to Polls": "置頂到 “投票”",
            "Pin discussion to Q&A": "將討論置頂到 “問與答”",
                    "This will pin this discussion to the top of the Q&A category.": "這將此討論置頂到 “問與答” 類別頂部。",
                    "Pin to Q&A": "置頂到 “問與答”",
            "Pin discussion to Show and tell": "將討論置頂到 “展示與講述”",
                    "This will pin this discussion to the top of the Show and tell category.": "這將此討論置頂到 “展示與講述” 類別頂部。",
                    "Pin to Show and tell": "置頂到 “展示與講述”",
            "Unpin discussion from this category": "從此類別取消置頂",
                "Are you sure you want to unpin this discussion from Announcements?": "您確定要從 “公告” 中取消置頂此討論嗎？",
                "Are you sure you want to unpin this discussion from General?": "您確定要從 “通常” 中取消置頂此討論嗎？",
                "Are you sure you want to unpin this discussion from Ideas?": "您確定要從 “想法” 中取消置頂此討論嗎？",
                "Are you sure you want to unpin this discussion from Polls?": "您確定要從 “投票” 中取消置頂此討論嗎？",
                "Are you sure you want to unpin this discussion from Q&A?": "您確定要從 “問與答” 中取消置頂此討論嗎？",
                "Are you sure you want to unpin this discussion from Show and tell?": "您確定要從 “展示與講述” 中取消置頂此討論嗎？",
                "The discussion itself won't be deleted, it just won't be shown at the top of this category.": "討論本身不會被刪除，只是不會顯示在該類別的頂部。",
            "Create issue from discussion": "從討論中創建議題",
            "Delete discussion": "刪除討論",
                "Delete discussion?": "刪除討論？",
                "The discussion will be deleted permanently. You will not be able to restore the discussion or its comments.": "該討論將被永久刪除。您將無法恢復該討論或其評論。",
                "Deleting discussion…": "正在刪除討論...",
                // 頂部提醒
                "The discussion was successfully deleted.": "該討論已成功刪除。",

            "The original post will be copied into a new issue, and the discussion will remain active.": "原帖將被複製到一個新的議題中，討論將保持活躍。",
            "OK, got it!": "好的，我知道了！",

            "Convert issues": "轉換為議題",
            // [/Convert (\d+) issues? to discussions?/, "將 $1 個議題轉換為討論"], // 標籤頁面
            // [/Are you sure you want to convert (\d+) issues? with the following label to discussions?/, "您確定要將帶有以下標籤的 $1 個議題轉換為討論嗎？"], // 標籤頁面
            // "What happens when an issue is converted into a discussion:": "將議題轉化為討論時，會發生什麼：",
            "Issue will be locked": "議題將被鎖定",
            // "Title, description, and author will be the same as the issue": "標題、描述和作者將與議題相同",
            "Existing links will redirect to the new discussion": "現有鏈接將重定向到新討論",
            // "All comments and reactions will be the same as the issue": "所有評論和反應將與議題相同",
            "Discussions do not have milestones": "討論沒有里程碑",
            "Discussions cannot be added to projects": "討論不能被添加到項目中",
            "Discussions do not have assignees": "討論沒有受理人",
            "You must choose a category for the discussion to belong to. You will be able to change this after the conversion is complete.": "您必須為討論選擇一個所屬的類別。在轉換完成後，您將能夠更改此設置。",
            "Choose a category": "選擇類別",
            "Future issues with this label will not be automatically converted into discussions.": "今後帶有此標籤的議題並不會自動轉化為討論。",
            "I understand, convert these issues to discussions.": "我明白了，依然把這些議題轉化為討論。",

            // 頂部提醒
            // [/Open issues with label \'([^ ]+)\' are being converted to discussions./, "帶有 “$1” 標籤的打開議題正在被轉換為討論。"], // 標籤頁面

        // 轉移議題到討論 /<user-name>/<repo-name>discussions/<id>?converting=<討論id>
            "This discussion is being migrated": "此討論正在遷移",
                "The issue and any comments are still being copied to this discussion thread, please check back later.": "該議題和所有評論仍在複製到此討論話題中，請稍後查看",
                "Refresh": "刷新",

        // /<user-name>/community/discussions
            // [/This is a ✨special✨ repository containing the organization level discussions for ([^ ]+). Everything posted here will also be visible at the organization level./, "這是一個 ✨ 特別的 ✨ 倉庫，包含 $1 的組織層面的討論。這裡發布的所有內容在組織層面上也是可見的。"],
            "View organization discussions": "查看組織討論",
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Fillter: /, "篩選："],
        [/(\d+) categories?/, "$1 個分類"],
        [/Congratulations, you've created the first discussion in ([^ ]+)!/, "恭喜您，您已經在 $1 中創建了第一個討論!"],
        [/(\d+) answers?/, "$1 位答覆者"],
        [/(\d+) comments?/, "$1 條評論"],
        [/(\d+) repl(y|ies)/, "$1 條答覆"],
        [/(\d+) suggested answers?/, "$1 個建議答案"],
        [/(\d+) participants?/, "$1 位參與者"],
        [/Show (\d+) previous repl(y|ies)/, "顯示 $1 條之前的答覆"],
        [/(\d+) hidden items?/, "$1 條隱藏項目"],
        [/Discussion \"([^ ]+)\" has been unpinned./, "討論 “$1” 已取消置頂。"],
        [/Convert (\d+) issues? to discussions?/, "將 $1 個議題轉換為討論"], // 標籤頁面
        [/Are you sure you want to convert (\d+) issues? with the following label to discussions?/, "您確定要將帶有以下標籤的 $1 個議題轉換為討論嗎？"], // 標籤頁面
        [/Open issues with label \'([^ ]+)\' are being converted to discussions./, "帶有 “$1” 標籤的打開議題正在被轉換為討論。"], // 標籤頁面
        [/Edited (\d+) times?/,"編輯 $1 次"], //評論框編輯次數
        [/edited by ([^ ]+)/,"被 $1 編輯"], //評論框 被他人編輯
        [/This is a ✨special✨ repository containing the organization level discussions for ([^ ]+). Everything posted here will also be visible at the organization level./, "這是一個 ✨ 特別的 ✨ 倉庫，包含 $1 的組織層面的討論。這裡發布的所有內容在組織層面上也是可見的。"],
        [/Category \"(.*)\" has been created./, "分類 “$1” 已創建。"],
        [/Category \"(.*)\" has been updated./, "分類 “$1” 已更新。"],
        [/Category \"(.*)\" has been deleted./, "分類 “$1” 已刪除。"],
        [/Section \"(.*)\" has been created./, "欄目 “$1” 已創建。"],
        [/Section \"(.*)\" has been updated./, "欄目 “$1” 已更新。"],
        [/Section \"(.*)\" has been deleted./, "欄目 “$1” 已刪除。"],
        [/Edit (.*) category/, "編輯 “$1” 分類"],
        [/Delete (.*) category/, "刪除分類 “$1”"],
        [/Edit section (.*)/, "編輯欄目 “$1”"],
        [/Delete section (.*)/, "刪除欄目 “$1”"],
        [/Delete (.*) section/, "刪除 “$1” 欄目"],
        [/(\d+) new suggested answers?/, "$1 個新的建議答案"],
        [/This discussion was converted from issue/, "本討論由以下議題轉換而來"],
    ],
};
I18N.zh["repository/orgs/discussions"] = I18N.zh["repository/discussions"] ;

I18N.zh["repository/actions"] = { // 倉庫 - 操作頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 復刻倉庫操作頁面提示
            "Workflows aren’t being run on this forked repository": "這個分支倉庫並未運行任何工作流程。",
            "Because this repository contained workflow files when it was forked, we have disabled them from running on this fork. Make sure you understand the configured workflows and their expected usage before enabling Actions on this repository.": "因為這個倉庫在被分支時含有工作流文件，我們已禁止在此分支上運行它們。在開啟此倉庫的操作之前，請務必理解配置的工作流程及其預期的使用方式。",
            "I understand my workflows, go ahead and enable them": "我已理解我的工作流程，可以放心啟用它們。",
            "View the workflows directory": "查看工作流程目錄",

        //無工作流程
            "There are no workflow runs yet.": "無工作流程運行。",

        // 新建操作 /<user-name>/<repo-name>/actions/new
            "Get started with GitHub Actions": "開始使用 GitHub Actions",
            "Choose a workflow": "選擇工作流程",
            "Build, test, and deploy your code. Make code reviews, branch management, and issue triaging work the way you want. Select a workflow to get started.": "構建、測試和部署您的程式碼。以您想要的方式進行程式碼審查、分支管理和議題分類。選擇一個工作流以開始使用。",
            "Skip this and": "跳過並",
            "set up a workflow yourself": "建立工作流程",
            "Search workflows": "搜索工作流",

            "Suggested for this repository": "建議該倉庫採用",
            "Categories": "類別",
            "Configure": "設置",
            "Deployment": "部署",
            "Continuous integration": "持續集成",
            "Automation": "自動化",
            "Browse all categories": "瀏覽所有類別",
                "Code scanning": "程式碼掃描",
            "View all": "查看全部",

            "Learn more about GitHub Actions": "了解更多關於 GitHub Actions 的信息",
            "Getting started and core concepts": "入門和核心概念",
            "New to Actions? Start here. Learn the core concepts and how to get started.": "初次接觸 Actions？從這裡開始。了解核心概念和如何開始。",
            "Configuring and managing workflows": "配置和管理工作流程",
            "Create custom workflows to control your project's life cycle processes.": "創建自定義工作流程以控制項目的生命週期過程。",
            "Language and framework guides": "語言與框架指南",
            "Guides for projects written in many programming languages.": "項目指南由多種編程語言編寫。",

            "Didn't find what you're looking for?": "沒有找到您需要的？",
            "Fill out a 2-minute survey to request a new workflow template for GitHub Actions." :"填寫一份 2 分鐘的調查，為 GitHub Actions 申請一個新的工作流模板。",
            "Request": "申請",

        // 新建操作 /<user-name>/<repo-name>/actions/new?category=xxxx
            // [/Found (\d+) workflows?/, "發現 $1 個工作流程"],

        // 操作 /<user-name>/<repo-name>/actions
            // 快捷鍵
                "Go to usage": "跳轉到運用",
                "Go to workflow file": "跳轉到工作流程文件", // /actions/runs/<id>
                "Toggle timestamps in logs": "切換日誌中的時間戳",
                "Toggle fullscreen logs": "切換全屏日誌",
                "Exit fullscreen logs": "退出全屏日誌",
                "Actions main view search bar": "操作主視圖搜索欄",

            "Automate your workflow from idea to production": "從創意到產品，使您的工作流程自動化",
            "GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.": "GitHub Actions 現在可以使用世界一流的 CI/CD 輕鬆自動化所有軟件工作流程。直接從 GitHub 構建、測試和部署您的程式碼。",
            "Learn more about getting started with Actions.": "了解更多關於開始使用 Actions 的信息。",
            "Linux, macOS, Windows, ARM, and containers": "Linux、macOS、Windows、ARM 和容器",
            "Hosted runners for every major OS make it easy to build and test all your projects. Run directly on a VM or inside a container. Use your own VMs, in the cloud or on-prem, with self-hosted runners.": "為每一個主要的操作系統提供的託管運行程序，使您能夠輕鬆地構建和測試您的所有項目。直接在虛擬機上或容器內運行。在雲端或本地使用您自己的虛擬機，以及自託管的運行器。",

            "Matrix builds": "矩陣式構建",
            "Save time with matrix workflows that simultaneously test across multiple operating systems and versions of your runtime.": "使用矩陣工作流程可同時跨多個操作系統和版本運行，節省時間",

            "Any language": "任何語言",
            "GitHub Actions supports Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET, and more. Build, test, and deploy applications in your language of choice.": "GitHub Actions 支持 Node.js、Python、Java、Ruby、PHP、Go、Rust、.NET 等。以您選擇的語言構建、測試和部署應用。",

            "Live logs": "實時日誌",
            "See your workflow run in realtime with color and emoji. It’s one click to copy a link that highlights a specific line number to share a CI/CD failure.": "使用顏色和表情符號實時查看您的工作流程。只需單擊即可複製突出顯示特定行號的鏈接以共享 CI/CD 故障。",

            "Built-in secret store": "內置的秘密存儲",
            "Automate your software development practices with workflow files embracing the Git flow by codifying it in your repository.": "通過將工作流程文件編碼到您的倉庫，您的軟件開發實踐，包括 Git 流程自動化。",

            "Multi-container testing": "多容器測試",
            "Test your web service and its DB in your workflow by simply adding some": "在您的工作流程中測試您的網絡服務和它的數據庫，只需添加一些",
            "docker-compose": "docker-組合",
            "to your workflow file.": "到您的工作流程文件。",


            // 左側欄
            "Workflows": "工作流程",
            "New workflow": "新建工作流程",
            "Select workflow": "選擇工作流程",
            "Show more workflows...": "顯示更多工作流程...",
            "Management": "管理",
            "Caches": "緩存",
            "Deployments": "部署",
            "Runners": "運行器",

            "Help us improve GitHub Actions": "幫助我們改進 GitHub Actions",
            "Tell us how to make GitHub Actions work better for you with three quick questions.": "通過三個快速問題告訴我們如何讓 GitHub Actions 更好地為您服務。",

            "All workflows": "全部工作流程",
            "Showing runs from all workflows": "顯示所有工作流程的運行情況",

            //篩選條
            "Filter workflow runs": "篩選工作流程",
                "Narrow your search": "縮小搜索範圍",

            // [/(\d+) workflow runs?$/, "$1 個工作流程運行"],
            // [/(\d+) workflow runs results/, "$1 個工作流程運行結果"],
            "Event": "事件",
                "Filter by event": "按事件篩選",
                "Find an event": "查找事件",
                "push": "推送",
                "pull_request": "拉取請求",
                "pull_request_target": "拉取請求目標",
                "schedule": "日程",
                "watch": "關注",
                "workflow_dispatch": "工作流程調度",
                "dynamic": "動態",
            // 狀態
                "Filter by status": "按狀態篩選",
                "Find a status": "查找狀態",
                "queued": "排隊",
                "in progress": "正在進行中",
                "waiting": "等待中",
                "completed": "已完成",
                "neutral": "中立",
                "success": "成功",
                "failure": "失敗",
                "cancelled": "已取消",
                "action required": "需要採取行動",
                "timed out": "已超時",
                "skipped": "跳過",
                "stale": "陳舊",
            "Branch": "分支",
                "Filter by branch": "按分支篩選",
                "Find a branch": "查找分支",
            "Actor": "角色",
                "Filter by actor": "按角色篩選",
                "Find a user": "查找用戶",

            // 日誌 右側按鈕
            "Cancel run": "取消運行",
            "Delete workflow run": "刪除工作流程運行",
                // 刪除工作流程運行 對話框
                    "Are you sure you want to permanently delete this workflow run?": "您確定要永久刪除此工作流程運行嗎？",
                    "This action cannot be undone": "此操作無法撤消",
                    "Yes, permanently delete this workflow run": "是的，永久刪除此工作流程運行",
                // 頂部提醒
                    "Workflow run deleted successfully.": "工作流程運行刪除成功。",

            // 篩選結果
            "all workflow runs": "所有工作流程運行",
            "or try different filters.": "或嘗試不同的篩選器。",

            // 列表區域
                // 工作流程運行狀態
                "In progress": "進行中",
                "Queued": "排隊中",
                "Pending": "待定中",

            // 頂部提醒
                "You have successfully requested the workflow to be canceled.": "您已成功請求取消工作流。",

        // 緩存 /<user-name>/<repo-name>/actions/caches
            "Showing caches from all workflows.": "顯示所有工作流程的緩存。",
            "Learn more about managing caches.": "了解更多關於管理緩存的信息。",
            "Filter caches": "篩選緩存",

            // [/(\d+) caches?/, "$1 個緩存"],
            "Sort": "排序",
            "Sort by": "排序方式",
                // 排序下拉菜單
                "Recently used": "最近使用",
                "Least recently used": "最近最少使用",
                "Newest": "最新",
                "Oldest": "最早",
                "Largest size": "最大尺寸",
                "Smallest size": "最小尺寸",
            "No caches": "尚無緩存",
            "Nothing has been cached by workflows running in this repository.": "在此倉庫中運行的工作流程尚未緩存任何內容。",
            "Learn more about caching": "了解更多關於緩存的信息",
            "dependencies and build outputs to improve workflow execution time.": "依賴關係和構建輸出以縮短工作流執行時間。",
            "Last used": "最近使用",

            // [/(\d+) cache results?/, "$1 個緩存結果"],
            "No caches matched your search": "沒有與您的搜索相匹配的緩存",
            // [/No caches matched your search branch:([^ ]+)/, "沒有與您搜索的分支: $1 相匹配的緩存"],
            "Remove the filters": "刪除篩選器",
            "or try a different search query.": "或嘗試不同的搜索查詢。",

            "Remove cache": "刪除緩存",
                "Are you sure you want to delete this cache?": "您確定要刪除此緩存嗎？",
                "Yes, permanently delete this cache": "是的，永久刪除此緩存",

                "Deleting Cache...": "刪除緩存中...",
                // 頂部提醒
                "Cache deleted successfully.": "緩存已成功刪除。",

        // 運行器 /<user-name>/<repo-name>/actions/runners
            "Runners available to this repository": "此倉庫可用的運行器",
            "New runner": "新建運行器",
            "GitHub-hosted runners": "GitHub 託管的運行器",
                // [/(\d+) available runners?/, "$1 個可用運行器"],
                "Larger GitHub-hosted runners": "大型 GitHub 託管運行程序",
                "New": "新",
                "Unprovisioned": "未配置",
                "Team & Enterprise": "團隊與企業",
                "Sizes up to:": "尺寸可達：",
                "Standard GitHub-hosted runners": "標準 GitHub 託管的運行器",
                "Ready-to-use runners managed by GitHub.": "由 GitHub 管理的即用型運行器。",
                "Learn more about GitHub-hosted runners.": "了解更多關於 GitHub 託管運行器的信息。",
                "Copy ubuntu-latest": "複製 ubuntu-latest",
                "Copy windows-latest": "複製 windows-latest",
                "Copy macos-latest": "複製 macos-latest",

                "View larger runner docs": "查看大型運行器文檔",
                "See pricing": "查看定價",
            "Self-hosted runners": "自託管運行器",
                "You don't have any": "此倉庫尚無任何",
                "self-hosted": "自託管",
                "runners for this repository": "運行器",
                    "Self-hosted runners are virtual machines for GitHub Actions workflows that you manage and maintain outside of GitHub.": "自託管運行器是您在 GitHub 外部管理和維護的 GitHub Actions 工作流程的虛擬機。",

        // /<user-name>/<repo-name>/actions/workflows/<file>.yml
            "This workflow has a": "這個工作流程有一個",
            "event trigger.": "事件觸發器。",

            "Run workflow": "運行工作流程",
                "Use workflow from": "使用工作流程來自：",
                "Branch:": "分支：",
                "Select branch": "選擇分支",
                "Select ref": "選擇引用",
                "Select a tag": "選擇標籤",
                    "Nothing to show": "暫無",

                    "Workflow does not exist or does not have a": "工作流程不存在或沒有",
                    "trigger in this branch.": "觸發在此分支。",
                    "Learn more about manual workflows": "了解更多關於手工工作流程的信息",
                // 頂部提醒
                "Workflow run was successfully requested.": "工作流程已成功請求運行。",

            "This scheduled workflow is disabled because there hasn't been activity in this repository for at least 60 days.": "此計劃工作流程已禁用，因為此倉庫至少 60 天沒有活動。",
            "Enable workflow": "啟用工作流程",
                // 頂部提醒
                "Workflow enabled successfully.": "工作流程已成功啟用。",
            "Disable workflow": "禁用工作流程",
                // 提醒
                "This workflow was disabled manually.": "工作流程已被手動禁用。",
                // 頂部提醒
                "Workflow disabled successfully.": "工作流程已成功禁用。",
            "Re-run jobs": "重新運行作業",

            "This workflow has no runs yet.": "此工作流程尚未運行。",

            "No results matched your search.": "沒有與您的搜索匹配的結果。",
            "You could search": "您可以搜索",

        // /<user-name>/<repo-name>/actions/runs/<id>
            // 頂部提醒
                "Logs deleted successfully.": "日誌已成功刪除。",

            // 標題
            "Re-run all jobs": "重新運行所有作業",
            "Cancel workflow": "取消工作流程",
            //右側按鈕
            "View workflow file": "查看工作流程文件",
            "View workflow runs": "查看工作流程運行",
            "Workflow run options": "工作流程運行選項",
            "Create status badge": "創建狀態徽章",
                "Copy status badge Markdown": "複製狀態徽章 Markdown 程式碼",
            "Delete all logs": "刪除所有日誌",

            // 左側欄
            "Summary": "摘要",
            "Jobs": "作業",
            "Run details": "運行詳情",
            "Usage": "運用",

            //狀態條
            "Triggered via pull request": "通過拉取請求觸發",
            "Triggered via issues": "通過議題觸發",
            "Triggered via push": "通過推送觸發",
            "Triggered via schedule": "通過計劃表觸發",
            "Triggered via dynamic": "通過動態觸發",
            "Triggered via GitHub Pages": "通過 GitHub 頁面觸發",
            "Manually triggered": "手動觸發",

            // 狀態
                "Success": "成功",
                "Failure": "失敗",
                "Cancelled": "取消",
            "Total duration": "總時長",
            "Billable time": "計費時間",

            // 右側中間欄
                "This workflow graph cannot be shown": "無法顯示此工作流圖表",
                "A graph will be generated the next time this workflow is run.": "下次運行此工作流時將生成一個圖表。",

                "This run and associated checks have been archived and are scheduled for deletion.": "此運行和相關檢查已存檔並計劃刪除。",
                "Learn more about checks retention": "了解更多關於檢查保留的信息",

            "Artifacts": "附件",
                "Produced during runtime": "在運行期間生成",
                "Name": "名稱",
                "Size": "大小",
                // [/Delete artifact ([^ ]+)/, "刪除附件 $1"],
                "Expired": "已過期",
                    "This artifact has expired and you can no longer download it": "此附件已過期，您無法再下載",
            "Annotations": "說明",
                // [/1 error/, "$1 個錯誤"],
                "Show more": "顯示更多",
                "Show less": "顯示更少",

        // /<user-name>/<repo-name>/actions/runs/<id>/jobs/<id2>

        // /<user-name>/<repo-name>/actions/runs/<id>/usage
            "Run and billable time": "運行和計費時間",
            "Learn about OS pricing on GitHub Actions": "了解 GitHub Actions 上的操作系統定價",
            "Job": "工作",
            "Run time": "運行時間",
            "Billable": "計費",
            "time": "時間",

        // /<user-name>/<repo-name>/actions/runs/<id>/workflow
            "Workflow file": "工作流程文件",
            "Workflow file for this run": "本次運行的工作流程文件",

        // /<user-name>/<repo-name>/runs/<id>
            "The logs for this run have expired and are no longer available.": "此運行日誌已過期，不再可用。",

            "Search logs": "搜索日誌",
            "Re-run this job": "重新運行此作業",
            // 設置按鈕
                "Show timestamps": "顯示時間戳",
                "Show full screen (Shift+F)": "全屏顯示（Shift+F）",
                "Download log archive": "下載日誌存檔",
                "View raw logs": "查看原始日誌",

            "Try broadening your search filters.": "嘗試擴大您的搜索篩選器。",

            // GitHub Pages
                "GitHub Pages / Page Build": "GitHub Pages / 頁面構建",
                "Page Build": "頁面構建",
                "succeeded": "成功於",
                "GitHub Pages successfully built your site.": "GitHub Pages 成功構建了您的站點。",
                "Your website is ready at": "您的網站已準備就緒，網址為",
                "View more details on GitHub Pages": "在 GitHub Pages 查看更多細節",

                //頂部提醒
                    "You have successfully requested checks from GitHub Pages.": "您已成功請求來自 GitHub Pages 的檢查。",

            "Re-run all checks": "重新運行所有檢查",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Found (\d+) workflows?/, "發現 $1 個工作流程"],
        [/(\d+) workflow runs?$/, "$1 個工作流程運行"],
        [/(\d+) workflow runs? results?/, "$1 個工作流程運行結果"],
        [/Delete artifact ([^ ]+)/, "刪除附件 $1"],
        [/(\d+) errors?/, "$1 個錯誤"],
        [/(\d+) cache results?/, "$1 個緩存結果"],
        [/(\d+) caches?/, "$1 個緩存"],
        [/No caches matched your search branch:([^ ]+)/, "沒有與您搜索的分支: $1 相匹配的緩存"],
        [/(\d+) available runners?/, "$1 個可用運行器"],
    ],
};
I18N.zh["repository/runs"] = I18N.zh["repository/actions"];

I18N.zh["repository/deployments"] = { // 倉庫 - 部署頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // /<user-name>/<repo-name>/deployments
            // [/Deployed to ([^ ]+)/, "部署到 $1"],
            "was deployed by": "部署者",
            "Deployment history": "部署歷史",
            "Try the new deployments view": "嘗試新的部署視圖",
            "Show:": "顯示：",
                "All environments": "所有環境",
            "Loading information…": "載入信息…",
            "at": "在",
            "Deployed": "部署",
            "Deployed by": "部署者",
            "Active": "活躍",
            "Inactive": "不活躍",
            "Abandoned": "廢棄",
            "View deployment": "查看部署情況",

            "View full deployment history": "查看完整的部署歷史",

            // 測試版部署
                "Environments": "環境",
                "Manage environments": "管理環境",
                "Give beta feedback": "提供測試反饋",
                "Opt out of beta view": "選擇退出測試版視圖",
                "Active deployments": "活躍的的部署",
                "From select environments": "來自選擇的環境",
                "Last": "最後",
                "deployed": "部署於",
                "Latest deployments from": "最新部署來自",
                "all environments": "所有環境",
                "Deployed to": "部署到",
                "Latest": "最新",
                "View logs": "查看日誌",
                "View workflow run": "查看工作流程運行",

                "Status: Deployed (completed).": "狀態：已部署（已完成）",
                "Status: Failed to deploy (completed).": "狀態：部署失敗（已完成）",
                "No status available for": "無可用狀態",

        // /<user-name>/<repo-name>/deployments/activity_log?environment=github-pages
            "Deployments": "部署",
            "/ History": "/ 歷史",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Deployed to ([^ ]+)/, "部署到 $1"],
        [/(\d+) deployments?/, "$1 次部署"],
    ],
};

I18N.zh["repository/watchers"] = { // 倉庫 - 關注者頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 關注者頁面  /<user-name>/<repo-name>/watchers
            "Watchers": "關注者",
            "No one’s watching this repository yet. You could be the first.": "暫無關注者。您可以成為第一個",
            "Learn more about how watching repositories works on GitHub": "了解更多關於如何在 GitHub 上關注倉庫的工作方式",
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        // [/Joined/,"加入於"], // 追星者，關注者頁面
    ],
};

I18N.zh["repository/stargazers"] = { // 倉庫 - 追星者頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 追星者頁面  /<user-name>/<repo-name>/stargazers
            "Stargazers": "追星者",
            "All": "全部",
            "You know": "您關注的",
            "Be the first to star this repository.": "成為第一個為這個倉庫加星標的人。",
            "about how starring works on GitHub.": "關於如何在 GitHub 上加注星標。",
            "Be the first of your friends to star this repository.": "成為第一個為這個倉庫加星標的朋友。",

        // /<user-name>/<repo-name>/stargazers/you_know
            "No one you follow has starred this repository yet.": "您關注的任何人都未星標此倉庫。",
            "Learn more about how starring works on GitHub.": "了解在 GitHub 上星標的工作原理。",
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        // [/Joined/,"加入於"], // 追星者，關注者頁面
    ],
};

I18N.zh["repository/new"] = { // 倉庫 - 新建/編輯/上傳/刪除文件頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 新建文件頁面 /<user-name>/<repo-name>/new/<branch>
            // 文件樹側邊欄
                "Expand file tree": "展開文件樹",
                "Collapse file tree": "摺疊文件樹",
                // 搜索框
                    "Go to file": "轉到文件",
                        "No matches found": "未找到匹配項",

            "Name your file...": "文件名...",
            "in": "在",

            "Cancel changes": "取消更改",
                "You have unsaved changes. Do you want to discard them?": "您有未保存的更改。您想丟棄它們嗎？",
            "Commit changes...": "提交更改...",

            "Preview": "預覽",
                "Loading preview…": "載入預覽…",
                    "There is no content to preview.": "沒有可預覽的內容。",
                    "There has been an error generating the preview.": "生成預覽時發生錯誤。",
                    "Unable to load this preview, sorry.": "抱歉，無法加載此預覽。",
                    "There are no changes to show.": "沒有要顯示的更改。",
                    "But you can preview the whole file.": "但您可以預覽整個文件。", // new code view

            // 程式碼編輯框
                // Copilot 廣告
                    "Code 55% faster with GitHub Copilot": "使用 GitHub Copilot 編碼速度提高 55%",
                        "Spend less time creating boilerplate and repetitive code patterns, and more time building great software. Try it in Codespaces or your favorite file editor.": "花更少的時間創建模板和重複的程式碼模式，花更多的時間構建優秀的軟件。在 GitHub 程式碼空間或您最喜歡的文件編輯器中嘗試一下哈。",
                        "Get GitHub Copilot": "獲取 GitHub Copilot",
                        "Don't show again": "不再顯示",

                "Indent mode": "縮進模式",
                    "Spaces": "空格",
                    "Tabs": "Tab",
                "Indent size": "縮進大小",
                "Line wrap mode": "換行模式",
                    "No wrap": "不換行",
                    "Soft wrap": "軟換行",

            "Show Diff": "顯示差異",

            // 提交對話框
                "Sign off and propose changes": "簽署並提出變更建議",
                "Sign off and commit changes": "簽署並提交更改", // 編輯模式
                    "Commit message": "提交信息",
                    "Extended description": "擴展描述",
                        "Add an optional extended description..": "添加描述.. (可選)",

                    "You are": "您將",
                    "signing off": "簽署",
                    // [/on this commit as/,"該提交以"],

                    "You can’t commit to": "您不能提交到",
                    "because its is a": "，因為它是一個",
                    "protected branch": "受保護分支",

                    "Commit directly to the": "提交到",
                    "branch": "分支",

                    "Some rules will be bypassed by committing directly": "直接提交可以繞過一些規則",
                    "Bypass rules and commit changes": "繞過規則並提交更改",

                    "Create a": "創建",
                    "new branch": "新分支",
                    "for this commit and start a pull request": "為這個提交，並且發起一個拉取請求",
                    "Learn more about pull requests": "了解更多關於拉取請求的信息",

                "Something went wrong. Please fork the project, then try from your fork.": "出錯了。請復刻該項目，然後從您的復刻處嘗試。",

            // 底部欄
                "Use": "使用",
                "to toggle the": "切換",
                "key moving focus. Alternatively, use": "鍵移動對焦。或者使用",
                "then": "鍵，然後",
                "to move to the next interactive element on the page.": "鍵移動到頁面上的下一個交互元素。",

            // 頂部提醒
            // [/Your license is ready. Please review it below and either commit it to the ([^ ]+) branch or to a new branch./, "您的許可證已準備就緒。請在下面審查它並將其提交到 $1 分支或新分支。"],

        // 編輯文件頁面 /<user-name>/<repo-name>/edit/<branch>/<file>
            // 非本人倉庫
                "You need to fork this repository to propose changes.": "您需要復刻此倉庫以提出更改。",
                    "Sorry, you’re not able to edit this repository directly—you need to fork it and propose your changes from there instead.": "抱歉，您無法直接編輯此倉庫——您需要將其復刻並從那裡提出您的更改。",
                "Fork this repository": "復刻此倉庫",
                    "Learn more about forks": "了解更多關於復刻的信息",

                "You’re making changes in a project you don’t have write access to. Submitting a change will write it to a new branch in your fork": "您正在對沒有寫入權限的項目進行更改。提交更改會將其寫入您的復刻",
                ", so you can send a pull request.": " 中的新分支，這樣您就可以發送拉取請求。",

            // 組織倉庫 編輯文件頁面
                "You’re making changes in a project you don’t have write access to. We’ve": "您正在對沒有寫入權限的項目進行更改。我們已經",
                "created a fork of this project": "為該項目創建復刻",
                "for you to commit your proposed changes to. Submitting a change will write it to a new branch in your fork, so you can send a pull request.": "供您提交建議的更改。提交更改會將其寫入復刻中的新分支，這樣您就可以發送拉取請求。",

            // 混合換行符
                "We’ve detected the file has mixed line endings. When you commit changes we will normalize them to": "我們檢測到該文件具有混合行結尾。當您提交更改時，我們會將它們標準化為",
                "Windows-style": "Windows 樣式",

            // 與用戶名同名倉庫 編輯 README.md 文件
                "is a special repository: its": "是一個特殊的倉庫：它的",
                "will appear on your profile!": "將出現在您的個人資料中！",

                "New": "新",
                "is now a special repository: its": "現在是一個特殊的倉庫：它的",

            // 組織下.github 倉庫 編輯 /profile/README.md 文件
                "is a special repository: this": "是一個特殊的倉庫：這個",
                "will appear on your organization's profile!": "將出現在您的組織資料中!",

            // 編輯 .gitignore 文件
                "Choose .gitignore template": "選擇 .gitignore 模板",
                    ".gitignore template": ".gitignore 模板",
                    "Filter…": "篩選…",
                    "None": "無",

            // 編輯 工作流程文件 .github/workflows/xxxx.yml
                "Collapse help panel": "摺疊幫助面板",

                // 幫助面板側邊欄
                    "Search Marketplace for Actions": "搜索 Actions 市場",
                    "Featured Actions": "特色 Actions",
                    "Featured categories": "特色分類",
                        "Code quality": "程式碼質量",
                        "Monitoring": "監控",
                        "Continuous integration": "持續集成",
                        "Project management": "項目管理",
                        "Deployment": "部署",
                        "Project management": "項目管理",
                        "Testing": "測試",
                    "Browse all actions on the GitHub Marketplace": "瀏覽 GitHub 市場 上的所有 Actions",

                // 底部欄補充
                    "Space": "空格",
                    "to trigger autocomplete in most situations.": "在大多數情況下將觸發自動完成。",
                    "Documentation": "文檔",

            // 編輯 LICENSE 許可證文件
                "Choose a license template": "選擇許可證模板",

            // 查找工具欄
                "Find": "查找",
                "next": "下一處",
                "previous": "上一處",
                "all": "全部",
                "match case": "區分大小寫",
                "regexp": "正則",
                "by word": "全字匹配",
                "Replace": "替換",
                "replace": "替換",
                "replace all": "全部替換",

        // 刪除文件頁面 /<user-name>/<repo-name>/delete/<branch>/<file>
            // 頂部提醒
            "File successfully deleted.": "文件已成功刪除。",

        // 上傳文件頁面 /<user-name>/<repo-name>/upload/<branch>
            // 自有倉庫
                "Drag files here to add them to your repository": "拖拽文件添加到當前倉庫",
                "Drag additional files here to add them to your repository": "拖拽其他文件添加到當前倉庫",
                "Or": "或",
                "choose your files": "選擇文件",
                "Drop to upload your files": "拖拽上傳您的文件",
                // 處理反饋
                "Yowza, that’s a big file. Try again with a file smaller than 25MB.": "我勒個擦，這麼大的文件，單文件不得超過25MB",
                "Yowza, that’s a lot of files. Try again with fewer than 100 files.": "我勒個擦，這麼多文件，一次不能超過100個",
                "This file is": "這個文件是",
                "empty": "空的",
                "Something went really wrong, and we can’t process that file.": "遇到錯誤，我們無法處理這個文件。",

                // 文件上傳進度條
                "Uploading": "文件上傳中",
                "of": "/",

                // 提交框 補充
                    "Add files via upload": "通過上傳添加文件",
                    "Add an optional extended description…": "添加可選的擴展描述...",

                    "branch.": "分支。", // 上傳頁面
                    "for this commit and start a pull request.": "為這個提交，並且發起一個拉取請求。", // 上傳頁面
                    "Learn more about pull requests.": "了解更多關於拉取請求的信息。", // 上傳頁面

            // 他人倉庫
                "Uploads are disabled.": "上傳功能已禁用。",
                "File uploads require push access to this repository.": "文件上傳需要推送訪問此倉庫。",

        // new code view
            "Top": "頂部",
            "Jump to file": "跳轉到文件",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/on this commit as/,"該提交以"],
        [/Your license is ready. Please review it below and either commit it to the ([^ ]+) branch or to a new branch./, "您的許可證已準備就緒。請在下面審查它並將其提交到 $1 分支或新分支。"],
    ],
};
I18N.zh["repository/edit"] = I18N.zh["repository/new"];
I18N.zh["repository/delete"] = I18N.zh["repository/new"];
I18N.zh["repository/upload"] = I18N.zh["repository/new"];

I18N.zh["repository/find"] = { //  倉庫 - 查找文件頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // Find file 頁面 /<user-name>/<repo-name>/find/<branch>
            "You’ve activated the": "您已激活",
            "file finder": "文件搜索模式",
            ". Start typing to filter the file list. Use": "。輸入關鍵詞查找您的文件。使用",
            "and": "和",
            "to navigate,": "選擇文件",
            "to view files,": "查看文件",
            "to exit.": "返回。",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/wiki"] = { // 倉庫 - wiki 頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // wiki 頁面  /<user-name>/<repo-name>/wiki
            // [/Welcome to the ([^ ]+) wiki!/, "歡迎訪問 $1 的 Wiki"], // wiki頁面
            "Wikis provide a place in your repository to lay out the roadmap of your project, show the current status, and document software better, together.": "Wiki 為您的倉庫提供了一個更好的文檔資料。",
            "Create the first page": "創建第一個頁面",

            // [/edited this page/, "編輯此頁"], // wiki
            // [/(\d+) revisions?/, "$1 次修訂"], // wiki
            "New page": "新建頁面",
            "Add a custom footer": "添加自定義頁腳",

            // 右側欄
            "Pages": "頁面",
                "Find a page…": "搜索頁面…",
            "Add a custom sidebar": "添加自定義側邊欄",
            "Clone this wiki locally": "在本地克隆這個 Wiki",

            "Last updated": "最後更新",

        // 新建 wiki 頁面 /<user-name>/<repo-name>/wiki/_new
            "Create new page": "創建新頁面",
            "Title": "標題",
            "Write": "編輯",
            "Preview": "預覽",
            "Edit mode:": "編輯模式：",
            "Edit message": "提交信息",

            "Write a small message here explaining this change. (Optional)": "在這裡寫一條小消息，解釋這一變化。(可選)",
            "Save page": "保存頁面",
            // 頂部提醒
                "Your Wiki was created.": "您的 Wiki 已創建。",

        // 編輯 wiki 頁面 /<user-name>/<repo-name>/wiki/<page name>/_edit
            // [/Editing/, "編輯"], //編輯 wiki
            "Page history": "頁面歷史",
            "Delete page": "刪除頁面",
                "Are you sure you want to delete this page?": "您確定要刪除此頁面嗎？",

            "Someone has edited the wiki since you started. Please reload this page and re-apply your changes.": "自您開始以來，有人編輯了 wiki。請重新加載此頁面並重新應用您的更改。",

            // 頂部提醒
                "The wiki page was successfully deleted.": "Wiki 頁面已成功刪除。",

        // wiki頁面歷史 /<user-name>/<repo-name>/wiki/<page name>/_history
            "Edit page": "編輯頁面",
            "Revisions": "修訂",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Welcome to the ([^ ]+) wiki!/, "歡迎訪問 $1 的 Wiki"], // wiki頁面
        [/edited this page/, "編輯此頁"], // wiki
        [/(\d+) revisions?/, "$1 次修訂"], // wiki
        [/Editing/, "編輯"], //編輯 wiki
        [/Could not find version "([^ ]+)"/, "找不到版本 “$1”"],
    ],
};

I18N.zh["repository/branches"] = { // 倉庫 - 分支頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 分支頁面 branches  /<user-name>/<repo-name>/branches
            // 標籤卡欄
            "Overview": "概況",
            "Yours": "您的",
            "Active": "活躍的",
            "Stale": "陳舊的",
            "All branches": "所有分支",
            "All": "所有",
            "branches": "分支",
            "New branch": "新建分支",
                // 創建分支對話框
                "Branch source": "源分支",
                    "Choose from this fork or its upstream repository.": "從此復刻或其上游倉庫中進行選擇。",
                    "Choose a source branch": "選擇源分支",
                "Share feedback": "分享反饋",

            "Search branches…": "搜索分支…",

            "Default branch": "默認分支",
            "Switch default branch": "切換默認分支",
            "View branch activity": "查看分支活動",
            "Default": "默認",

            // [/Your ([^ ]+) branch isn't protected/, "您的 $1 分支不受保護"],
            "Your": "您的",
            "branch isn't protected": "分支不受保護",
            "Protect this branch from force pushing or deletion, or require status checks before merging.": "保護此分支不被強制推送或刪除，或在合併之前要求狀態檢查。",
            "Dismiss": "駁回",
            "Protect this branch": "保護該分支",

            "Updated": "更新於",
            "New pull request": "發起拉取請求",

                // 重命名分支對話框
                "Rename default branch": "重命名默認分支", // 重命名默認分支 標題
                "Rename this branch": "重命名分支", // 重命名其他分支 標題
                "Rename": "重命名",
                "to:": "為：",
                "Most projects name the default branch": "大多數項目將默認分支名為",
                "Renaming this branch:": "重命名此分支：",
                    // 該分支存在來自其他分支的拉取請求時
                        "Will update": "將更新",
                        "pull request targeting this branch.": "條針對該分支的拉取請求。",
                        "pull": "條拉取請求",
                        "request": " ",
                        "targeting this": "針對",
                        "branch.": "該分支。",
                        "branch protection rule that explicitly targets": "條分支保護規則明確針對",

                    // 該分支存在用於其他分支的拉取請求時
                        "Will close": "將關閉",
                        "open pull request for this branch.": "個該分支的拉取請求。",
                        "open pull": "個打開的拉取請求",
                        "for this branch.": "針對該分支。",

                    // 重命名 GitHub Pages 所在分支
                        "Will unpublish current GitHub Pages site.": "將取消當前發布的 GitHub Pages 站點。",
                            "Your current GitHub Pages site will become unpublished. A new commit on the renamed branch will publish the GitHub Pages site again.": "您當前的 GitHub Pages 站點將被取消發布。重命名分支上的新提交將再次發布 GitHub Pages 站點。",

                    "Will not update your members' local environments.": "不會更新您成員的本地環境。",
                "Renaming this branch will not update your members' local environments.": "重命名此分支不會更新您成員的本地環境。",
                    "Your members will have to manually update their local environments. We'll let them know when they visit the repository, or you can share the following commands.": "您的成員將不得不手動更新他們的本地環境。我們會在他們訪問倉庫時通知他們，或者您可以共享以下命令。",

                "Rename branch": "重命名分支",
                "Saving…": "保存中…",

                "Deleted": "已刪除",
                // 刪除分支後
                "Restore": "還原",
                "Deleted just now by": "剛剛被刪除",

                // 刪除對話框 僅當該分支存在拉取請求
                "The branch": "分支",
                // [/is associated with (\d+) open pull requests?:/, "與 $1 個拉取請求相關聯："], // 分支頁面
                "is associated with an open pull request:": "與 1 個拉取請求相關聯：", // 分支頁面
                "If you delete this branch, the pull request will be closed.": "如果您刪除此分支，則拉取請求將被關閉。",
                "Are you sure you want to delete this branch?": "您確定要刪除此分支嗎？",

                // 頂部提醒
                // [/Branch ([^ ]+) will be renamed to ([^ ]+) shortly./,"分支 $1 將很快重命名為 $2。"], //分支重命名成功

            "Your branches": "您的分支",
            "You haven’t pushed any branches to this repository.": "您沒有推送任何分支到該倉庫。",
            "Active branches": "活躍的分支",
            "There aren’t any active branches.": "沒有任何活躍的分支。",
            "Stale branches": "陳舊的分支",
            "There aren’t any stale branches.": "沒有任何陳舊的分支。",
            "View more active branches": "查看更多活躍的分支",
            "View more stale branches": "查看更多陳舊的分支",

            // [/(\d+) commits? ahead, (\d+) commits? behind ([^ ]+)/, "領先 $1 個提交，落後 $2 個提交於 $3"],

            // 新版分支視圖
                // 創建分支對話框
                "Create a branch": "創建分支",
                    "New branch name": "新分支名稱",
                    "Source": "源分支",
                        "Switch branches": "切換分支",
                        "Find a branch...": "查找分支...",
                        "default": "默認",
                    "Create new branch": "創建新分支",

                "Search branches...": "搜索分支...",

                "Check status": "檢查狀態",
                "Behind": "落後",
                "Ahead": "領先",
                "Pull request": "拉取請求",

                "Copy branch name to clipboard": "將分支名稱複製到剪貼板",
                "This branch is protected by branch protections": "該分支受分支保護的保護",

                "Activity": "活動",
                "View rules": "查看規則",

                "View more branches": "查看更多分支",

                // 底部提醒
                    "You can't delete this protected branch.": "您無法刪除此受保護分支。",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Your ([^ ]+) branch isn't protected/, "您的 $1 分支不受保護"],
        [/Rename default branch/, "重命名默認分支"],
        [/Rename branch/, "重命名分支"],
        [/Delete/, "刪除分支"],
        // [/is associated with (\d+) open pull requests?:/, "與 $1 個拉取請求相關聯："],
        [/Branch ([^ ]+) will be renamed to ([^ ]+) shortly./,"分支 $1 將很快重命名為 $2。"], //分支重命名成功
        [/(\d+) commits? ahead, (\d+) commits? behind ([^ ]+)/, "領先 $1 個提交，落後 $2 個提交於 $3"],
        [/(\d+) commits? behind ([^ ]+)/, "落後 $1 個提交於 $2"],
        [/(\d+) commits? ahead ([^ ]+)/, "領先 $1 個提交於 $2"],
        [/Ahead behind count: (\d+)/, "領先落後數：$1"],
    ],
    "selector": [ // 元素篩選器規則
        ["a[data-target='branch-filter.allFilter']", "所有分支"],
    ],
};

I18N.zh["repository/activity"] = { // 倉庫 - 活動頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 活動頁面 /<user-name>/<repo-name>/activity
            "Activity": "活動",

            "All branches": "所有分支",
                "Switch branches": "切換分支",
                "Find a branch...": "查找分支...",
                "Branches": "分支",
                "default": "默認",
                "View activity for all branches": "查看所有分支的活動",

            "All activity": "所有活動",
                "Direct pushes": "直接推送",
                "Pull request merges": "拉取請求合併",
                "Merge queue merges": "合併隊列合併",
                "Force pushes": "強制推送",
                "Branch creations": "創建分支",
                "Branch deletions": "刪除分支",

            "All users": "所有用戶",
                "Find a user...": "查找用戶...",
                "View activity for all users": "查看所有用戶的活動",

            "All time": "所有時間",
                "Last 24 hours": "過去 24 小時",
                "Last week": "上星期",
                "Last month": "上個月",
                "Last quarter": "上季度",
                "Last year": "去年",


            "Showing oldest first": "顯示最早的",
            "Showing most recent first": "顯示最近的",

            "Compare changes": "比較變更",
            "Restore Branch": "恢復分支",

            "Previous": "上一頁",
            "Next": "下一頁",

            "Direct push": "直接推送",
            "Pull request merge": "拉取請求合併",
            "Force push": "強制推送",
            "Branch creation": "創建分支",
            "Branch deletion": "刪除分支",

            "force pushed to": "強制推送到",
            "deleted": "刪除",

            "Share feedback about this page": "分享關於此頁面的反饋",

        // 活動頁面 - 指定分支 /<user-name>/<repo-name>/activity?ref=<branch-name>
            "created this branch": "創建此分支",
            "deleted this branch": "刪除此分支",
            "force pushed": "強制推送",

            "No activity matched your search.": "沒有與您搜索相匹配的活動。",
            "Try expanding your search by selecting a different branch, activity type, user, or timeframe.": "嘗試通過選擇不同的分支、活動類型、用戶或時間範圍來擴大搜索範圍。",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/pushed (\d+) commits? to/, "推送 $1 個提交到"],
        [/pushed (\d+) commits?/, "推送 $1 個提交"],
    ],
};

I18N.zh["repository/releases"] = { // 倉庫 - 發行版頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 發行版 頁面 /<user-name>/<repo-name>/releases
            "Releases": "發行版",
            // 無發行版時
            "There aren’t any releases here": "沒有任何發行版",
            "You can create a release to package software, along with release notes and links to binary files, for other people to use. Learn more about releases in": "您可以創建一個發行版來打包軟件，以及發行說明和二進制文件鏈接，供其他人使用。了解更多關於發布的信息查看",
            "our docs": "文檔",
            "Releases are powered by": "發行版是指通過對倉庫中",
            "tagging specific points of history": "特定歷史點",
            "in a repository. They’re great for marking release points like": "進行標記來發布。用於發布的版本號類似",
            "Create a new release": "創建發行版",

            // 有發行版時
            "Draft a new release": "起草發行版",
            "Find a release": "搜索發行版",
            // 左側欄
            "Pre-release": "預發行版",
            "Latest": "最新發行版",
            "Draft": "草案",

            "Compare": "對比",
                "Choose a tag to compare": "選擇標籤進行比較",
                "Find a tag": "搜索標籤",
                "View all tags": "查看全部標籤",

            "Read more": "閱讀更多內容",
            "Contributors": "貢獻者",
            "Assets": "資源",
            // [/Show all (\d+) assets?/, "顯示所有 $1 個資產？"],

            "Join discussion": "加入討論",

            // [/Edit: (.*)/, "編輯：$1"],
            // [/Delete: (.*)/, "刪除：$1"],

        // 發行版 標籤卡 /<user-name>/<repo-name>/tags
            "Create release": "創建發行版",
            "Edit release": "編輯發行版",

            "Toggle commit message": "顯示/隱藏提交消息",

            "Notes": "說明",
            "Downloads": "下載",

            "Delete tag": "刪除標籤",
                // 刪除標籤 對話框
                    "Delete this tag?": "刪除此標籤？",
                    "This will delete the information for the tag": "這將刪除標籤信息",
                    "and cannot be undone.": "而且無法撤銷。",
                    "Delete this tag": "刪除此標籤",

        // 某個發行版標籤 /<user-name>/<repo-name>/releases/tag/<tag>
            // 不存在發行版時
            // "Create release": "創建發行版",
            "from tag": "來自該標籤",
            // "Edit": "編輯",
            "release": "發行版",

            // "Read release notes": "閱讀發布說明",
            // 狀態詞
            "released this": "發布於",
            "tagged this": "標記了",
            "drafted this": "起草了",

            // 刪除標籤對話框
            "Delete tag?": "刪除標籤？",
            "This will delete the information for this tag and cannot be undone.": "將刪除該標籤的所有信息，並且無法撤消。",
            "I understand, delete this tag": "我明白了，依然刪除該標籤",

            // 存在發行版時
            // 15 commits to master since this release

            "Delete release": "刪除發行版",
            // 刪除發行版對話框
            "Delete this release?": "刪除該發行版？",
            // "This will delete the information for this release.": "這將會刪除該發行版的信息。",
            // [/This will delete the information for the release ([^ ]+)./, "這將刪除發行版 $1 的信息。"],
            "Delete this release": "刪除發行版",

            // 頂部提醒框
            "Your tag was removed": "您的標籤已刪除",
            "Your release was removed": "您的發行版已刪除",

        // 創建發行版 /releases/new 和 編輯發行版 /releases/edit/<tag>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            // 提醒條
            "This is a draft and won’t be seen by the public unless it’s published.": "這是一個草案，除非發布，否則不會被公眾看到。",
            "Discard draft": "丟棄草案",

            "Choose a tag": "選擇標籤",
                "Find or create a new tag": "查找或創建新標籤",
            "Target:": "目標：",
                "Pick a branch or recent commit": "選擇分支或最近的提交",
                "Filter branches…": "篩選分支…",
                "Filter recent commits…": "篩選最近提交…",
                "Recent Commits": "最近提交…",
            "Choose an existing tag, or create a new tag on publish": "選擇現有的標籤，或在發布時創建新標籤",
            "Choose an existing tag, or create a new tag when you publish this release.": "選擇現有的標籤，或在您發布這個版本時，創建新標籤。",

            "Loading tag information…": "載入標籤信息…",
            // 在篩選標籤框輸入 標籤時
            "Create new tag:": "創建新標籤：",
            "on publish": "發布時",
            // 輸入結果
            "Duplicate tag name": "重複的標籤名",
                "This tag already has release notes. Would you like to": "這個標籤已經有發行說明。您是否願意",
                "edit them?": "編輯它們？",
                "Existing tag": "已存在的標籤",
            "Invalid tag name": "無效的標籤名",
                "We can’t create a tag with this name. Take a look at the suggestions in the sidebar for example tag names.": "我們不能用這個名字創建標籤。看看側邊欄的建議，看看標籤名稱的例子。",
            "Excellent! This tag will be created from the target when you publish this release.": "優秀! 當您發布這個版本時，這個標籤將從目標創建。",

            "Release title": "發行版標題",

            "Previous tag:": "上一個標籤：",
                "auto": "自動",
                "Select previous tag to compare": "選擇上一個標籤進行比較",
                    "Find previous tag": "篩選上一個標籤",
            "Generate release notes": "生成發行版說明",
                "Automatically add the Markdown for all the merged pull requests from this diff and contributors of this release": "自動為來自此差異和此發行版貢獻者的所有已合併拉取請求，添加 Markdown 說明。",
                "Clear existing notes to automatically add the Markdown for all the merged pull requests from this diff and contributors of this release": "清除現有的注釋，以自動添加來自此差異和此版本貢獻者的所有合併的拉取請求的標記。",

                "There were no pull requests associated with the commits included in this release.": "此版本中沒有與提交相關的拉取請求。",

            "Describe this release": "描述此發行版",

            // 編輯器按鈕(老版)
                "Add heading text": "添加標題文本",
                "Add bold text, <Ctrl+b>": "添加粗體文本 <Ctrl+b>",
                "Add italic text, <Ctrl+i>": "添加斜體文本 <Ctrl+i>",
                "Add a quote, <Ctrl+Shift+.>": "添加引用 <Ctrl+Shift+.>",
                "Add code, <Ctrl+e>": "添加程式碼 <Ctrl+e>",
                "Add a link, <Ctrl+k>": "添加鏈接 <Ctrl+k>",
                "Add a bulleted list, <Ctrl+Shift+8>": "添加無序列表 <Ctrl+Shift+8>",
                "Add a numbered list, <Ctrl+Shift+7>": "添加有序列表 <Ctrl+Shift+7>",
                "Add a task list, <Ctrl+Shift+l>": "添加任務列表 <Ctrl+Shift+l>",
                "Directly mention a user or team": "直接提及用戶或團隊",
                "Reference an issue, pull request or discussion": "引用議題，拉取請求或討論",
                "Add saved reply": "添加快捷回覆",
                    "Select a reply": "選擇回覆",
                        "Filter saved replies": "篩選快捷回覆",
                        "Create a new saved reply": "創建新快捷回覆",
                "Attach files by dragging & dropping, selecting or pasting them.": "通過拖拽、選擇或粘貼來附加文件。",

            // 附加文件
            "Attach binaries by dropping them here or selecting them.": "拖拽文件到這來或選擇它們來附加文件。",
            "Uploading your release now…": "正在上傳到您的發行版…",
            "An attachment with that filename already exists.": "同名附件已經存在。",
            "Try a different file.": "請嘗試不同的文件。",
            "We don’t support that file type.  try zipping it.": "我們不支持該文件類型，請嘗試壓縮它。",
            "Try another file.": "請嘗試另一個文件。",
            "Yowza, that’s a big file.": "喲，這可是個大文件。",
            "Try again": "請嘗試",
            "With a file smaller than 2GB.": "一個小於 2GB 的文件。",
            "This file is empty.": "這是一個空文件。",
            "with a file that’s not empty.": "一個非空的文件。",
            "Something went really wrong, and we can’t process that file.": "確實出了點問題，我們無法處理該文件。",
            "Try again.": "請重試。",

            "Delete and try uploading this file again.": "刪除並重新上傳。",
            "will be deleted": "將被刪除",
            "Remove": "刪除",
            "Undo": "撤銷",

            "Set as a pre-release": "設置為預發布版本",
                "This release will be labeled as non-production ready": "此版本將被標記為非正式版本。",
            "Create a discussion for this release": "為此版本創建討論",
                "People will be able to leave comments and reactions on this release using Discussions.": "人們將能夠使用“討論”對此版本發表評論和反應。",
                        "Category:": "類別：",
                            "Announcements": "公告",
                            "General": "通常",
                            "Ideas": "想法",
                            "Polls": "投票",
                            "Q&A": "問與答",
                            "Show and tell": "展示與講述",
            "Set as the latest release": "設置為最新版本", //edit
                "This release is labeled as the latest for this repository.": "此版本將被標記為此倉庫的最新版本。",

            "Publish release": "發布發行版",
                "Publishing…": "發布中…",
            "Update release": "更新發行版",
                "Updating…": "更新中…",
                "Saving release…": "保存中…",
            "Save draft": "保存草案",
            "Saved!": "已保存",
            "Saving draft failed. Try again?": "保存草案失敗。請重試？",

            // 丟棄草案 對話框
            "Are you sure?": "您確定哇?",
            "This will delete the information for this draft.": "這將會刪除該草案的信息。",
            "Delete this draft": "刪除草案",

            // 右側欄
            "Tagging suggestions": "標籤建議",
            "It’s common practice to prefix your version names with the letter": "通常的做法是在版本名稱前加上字母",
            ". Some good tag names might be": "。一些好的標籤名稱可能是",
            "If the tag isn’t meant for production use, add a pre-release version after the version name. Some good pre-release versions might be": "如果標籤不是用於生產的，就在版本名後面加上預發布版本。一些好的預發布版本可能是",

            "Semantic versioning": "語義版本管理",
            "If you’re new to releasing software, we highly recommend to": "如果您是發布新手，我們強烈您",
            "learn more about semantic versioning.": "了解更多關於語義版本管理的信息。",

            "A newly published release will automatically be labeled as the latest release for this repository.": "新發布的版本將自動標記為該倉庫的最新版本。",
            "If \'Set as the latest release\' is unchecked, the latest release will be determined by higher semantic version and creation date.": "如果未選中 “設置為最新版本”，則最新版本將由更高語義版本和創建日期確定。",
            "Learn more about release settings.": "了解更多關於發行版設置的信息。",

       // 創建 Action 發行版到市場 /releases/new?marketplace 和 編輯 /releases/edit/... >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            "Release Action": "發布 Action",
                "Publish this release to the GitHub Marketplace": "將此版本發布到 GitHub 市場",
                "You must": "您必須",
                "accept the GitHub Marketplace Developer Agreement": "接受 GitHub 市場開發者協議",
                "before publishing an Action.": "在發布之前。",

                "Publish this Action to the GitHub Marketplace": "將此 Action 發布到 GitHub  市場",
                "Your Action will be discoverable in the Marketplace and available in GitHub search.": "您的 Action 將在市場中被發現，並可在 GitHub 搜索中找到。",

                "Your action.yml needs changes before it can be published.": "您的 action.yml 需要更改才能發布。",
                "Everything looks good! You have all the required information.": "一切看起來都不錯！您擁有所有必需的信息。",

                "Name": "名稱",
                    "- Name must be unique. Cannot match an existing action, user or organization name.": "- 名稱必須唯一。不能與現有的操作、用戶或組織名稱相匹配。",
                "Description": "描述",
                "Icon": "圖標",
                "Color": "顏色",

                "A README exists.": "已經存在 README 文件。",

                "Primary Category": "主要類別",
                    "Choose an option": "請選擇",
                "Another Category": "其他分類",
                    "— optional": "— 可選",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Show all (\d+) assets?/, "顯示所有 $1 個資產"],
        [/(\d+) commits?/, "$1 個提交"],
        [/to ([^ ]+) since this release/, "至 $1 分支，該發行版"],
        [/This will delete the information for the release ([^ ]+)./, "這將刪除發行版 $1 的信息。"],
        [/Toggle (.*)'s commit message/, "切換 $1 的提交消息"],
        [/Edit: (.*)/, "編輯：$1"],
        [/Delete: (.*)/, "刪除：$1"],
    ],
};
I18N.zh["repository/tags"] = I18N.zh["repository/releases"];

I18N.zh["repository/packages"] = { // 倉庫 - 軟件包頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // /<user-name>/<repo-name>/packages
            "Get started with GitHub Packages": "開始使用 GitHub 軟件包",
            "Safely publish packages, store your packages alongside your code, and share your packages privately with your team.": "安全地發布包，將您的包與您的程式碼一起存儲，並與您的團隊私下共享您的包。",
             "Choose a registry": "選擇註冊表",

            "A software platform used for building applications based on containers — small and lightweight execution environments.": "用於構建基於容器的應用的軟件平台——小型輕量級執行環境。",
            "A default package manager used for the Java programming language and the Java runtime environment.": "用於 Java 編程語言和 Java 運行環境的一個默認包管理器。",
            "A free and open source package manager used for the Microsoft development platforms including .NET.": "一個自由和開源的開源包管理器，用於包括 .NET 在內的 Microsoft 開發平台。",
            "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.": "分發用於 Ruby 編程語言的 Ruby 程序和庫的標準格式。",
            "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.": "npm 是一個 JavaScript 的包管理器，包含在 Node.js 中。它使開發人員能夠輕鬆地分享和重用程式碼。",
            "Containers": "容器",
            "A single place for your team to manage Docker images and decide who can see and access your images.": "為您的團隊提供一個管理 Docker 鏡像的單一場所，並決定誰可以看到和訪問您的鏡像。",

            "Package settings": "軟件包設置",
            "Repository source": "倉庫來源",
            "This is the repository where the package's source code is stored. This is defined in the repository's package.json file using the": "這是軟件包源程式碼的倉庫。這是在倉庫中的 package.json 文件使用字段",
            "field.": "定義的。",
            "A GitHub repository has been identified as the source for this package. This package will be displayed in this repositories package list.": "GitHub 倉庫已被確定為該軟件包的來源，該軟件包將顯示在此倉庫的軟件包列表中。",
            "You have referenced a non-GitHub source for this package that cannot be verified.": "您引用了一個無法驗證的非 GitHub 來源的軟件包。",
            "Manage Actions access": "操作訪問權限管理",
            "Add Repository": "添加倉庫",
            "Pick the repositories that can access this package using": "選擇可以訪問此軟件包的倉庫，用於",
            "Role:": "角色:",
            "Choose role": "選擇角色",
            "Change role": "更改角色",
            "Read": "只讀",
            "Write": "編輯",
            "Admin": "管理",
            "Remove": "刪除",
            "Actions repository access": "操作倉庫訪問",
            "Pick the repositories that can access this package using GitHub Actions.": "選擇可以使用 GitHub Actions 訪問此軟件包的倉庫。",
            "Permissions added for selected repositories.": "為選定的倉庫添加了權限。",
            "Permissions updated for selected repositories.": "更新了選定倉庫的權限。",
            "Can upload and download this package. Can read and write package metadata.": "可以上傳和下載此軟件包，並且可以讀取和寫入元數據。",
            "Can download this package and read package metadata.": "可以下載此軟件包並讀取元數據。",
            "Can upload, download, and manage this package. Can read and write package metadata. Can delete and restore packages.": "可以上傳、下載和管理此軟件包，可以讀取和寫入元數據，可以刪除和恢復此軟件包。",
            "Can upload, download, and manage this package. Can read and write package metadata. Can grant package permissions.": "可以上傳、下載和管理此軟件包，可以讀取和寫入元數據，可以授予軟件包權限。",
            "Manage Codespaces access": "程式碼空間訪問管理",
            "Codespaces repository access": "程式碼空間倉庫訪問",
            "Pick the repositories that can read this package using GitHub Codespaces.": "選擇可以使用 GitHub 程式碼空間 讀取此軟件包的倉庫。",
            "Pick the repositories that can read this package using": "選擇可以讀取此軟件包的倉庫，用於",
            "Inherited access": "繼承訪問",
            "Inherit access from source repository (recommended)": "從源倉庫繼承訪問權限 (推薦)",
            "Go to": "轉到",
            "to change access, or remove inherited access to manage it separately. Inherited access is recommended.": "的訪問設置以更改訪問權限，或刪除繼承的訪問權限以單獨管理它，建議使用繼承訪問權限。",
            "Danger Zone": "危險操作",
            "Change package visibility": "更改軟件包可見性",
            "This package is currently public.": "該軟件包當前是公開的",
            "This package is currently private.": "該軟件包當前是私有的",
            "Change visibility": "更改可見性",
            "Delete this package": "刪除軟件包",
            "Once you delete a package, there is no going back. Please be certain.": "您一旦刪除了軟件包，將再也無法恢復，請確認！",
            "Manage access": "訪問管理",
            "Invite teams or people": "邀請團隊或人員",

        // 倉庫鏈接對話框
            "Confirm you want to unlink this repository": "確認您要取消與此倉庫的鏈接",
            "Yes, unlink this repository": "是的，取消鏈接此倉庫",

        // 添加倉庫對話框
            "Select repository that can access this package using GitHub actions": "選擇可以使用 GitHub 操作訪問此軟件包的倉庫",
            "Add repositories": "添加倉庫",

        // 刪除倉庫對話框
            "Confirm you want to remove this repository": "確認要刪除此倉庫",
            "Once removed,": "刪除後，",
            "will no longer have access to the": "將無法再訪問",
            "package.": "軟件包。",

        // 程式碼空間添加倉庫對話框
            "Select repository that can access this package using GitHub codespaces": "選擇可以使用 GitHub 程式碼空間訪問此軟件包的倉庫",

        // 更改軟件包可見性對話框
            "Make this package visible to anyone.": "使這個軟件包對所有人都可見。",
            "Make this package visible privately, to organization members that have access.": "僅這個軟件包有權訪問的組織成員可見。",
            "Please type": "請輸入",
            "to confirm:": "進行確認：",
            "I understand the consequences, change package visibility.": "我明白後果，依然更改軟件包可見性",

        // 刪除軟件包對話框
            "Are you absolutely sure?": "您真的確定嗎？",
            "Once this package is deleted, it will no longer be accessible.": "一旦刪除了這個軟件包，您將無法再訪問它。",
            "This action will delete package": "此操作將刪除軟件包",
            ". Versions of this package will no longer be accessible, and it will not appear in searches or package listings.": "。此軟件包的版本將不再可訪問，並且不會出現在搜索結果或軟件包列表中。",
            "I understand the consequences, delete this package": "我明白後果，依然刪除這個軟件包",

        // 更改倉庫角色對話框
            "Select a new role": "選擇新角色",
            "Recommended for non-code contributors who want to view or discuss your package.": "推薦給想要查看或討論您的軟件包的非程式碼貢獻者。",
            "Recommended for contributors who actively push to your package.": "推薦給積極推送程式碼到您的軟件包的貢獻者。",

        // 更改成員角色對話框
            "Recommended for people who need full access to the package, including sensitive and destructive actions like managing security and package visibility.": "建議需要完全訪問軟件包的人員使用，包括管理安全性和軟件包可見性等敏感和破壞性操作。",

        // 訪問管理刪除對話框
            "Confirm you want to remove this user": "確認刪除該用戶",

        // 邀請團隊或人員對話框
            "Invite teams or people to": "邀請團隊或人員參與",
            "Search by username, full name, or email": "搜索用戶名、全名或電子郵件"
    },
    "regexp": [
        [/Are you sure you want to unlink (.*) from (.*)\?/, "您確定要取消 $1 與 $2 的鏈接嗎？"],
        [/(\d+) repositor(y|ies) selected…/, "選中 $1 個倉庫"],
        [/Change the role of (\d+) repositor(y|ies)\?/, "更改 $1 個倉庫的角色？"],
        [/(\d+) repositor(y|ies)/, "$1 個倉庫"],
        [/(\d+) members? selected…/, "選中 $1 個成員"],
        [/Change the role of (\d+) members?\?/, "更改 $1 個成員的角色？"],
        [/(\d+) members?/, "$1 個成員"],
        [/(.*)'s access settings/, "$1 訪問設置"],
        [/Removed access from repository (.*)\./, "刪除了倉庫 $1 的訪問權限。"],
        [/Removed (.*) as a package collaborator\./, "刪除了 $1 作為軟件包的協作者。"],

        // 刪除倉庫對話框
        [/Remove (.*) from (.*)/, "從 $2 中刪除 $1"],

        // 更改倉庫角色對話框
        [/Change (\d+) Roles?/, "更改 $1 個角色"],
    ],
}

I18N.zh["repository/pkgs"] = { // 倉庫 - 軟件包
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository/packages"]["static"],

        // /<user-name>/<repo-name>/pkgs/container/<pag name>
            "Installation": "安裝",
            "Learn more about packages": "了解更多關於軟件包的信息",
            "Learn more about npm packages": "了解更多關於 npm 軟件包的信息",
            "Install from the command line": "從命令行安裝",
            "Install from the command line:": "從命令行安裝：",
            "Install via package.json:": "通過 package.json 安裝：",
            "Use as base image in Dockerfile:": "在 Dockerfile 中用作基礎鏡像：",
            "Recent tagged image versions": "最近被標記的映像版本",
            "latest": "最新",
            "Latest": "最新",
            // [/Published (.*) · Digest/, "發布於 $1 · 摘要"],
            "View all tagged versions": "查看所有被標記的版本",

            "Details": "詳細信息",
            "Readme": "自述文件",
            "Last published": "最新發布",
            "Total downloads": "總下載量",
            "Start a discussion": "開始討論",
            "Contributors": "貢獻者",
            "Open an issue": "打開一個議題",
            "Package settings": "軟件包設置",

            "Recent Versions": "最近版本",
            "View and manage all versions": "查看和管理所有版本",

            "Add a Readme to the linked repository": "添加一個 README 自述文件到鏈接的倉庫",
            "The linked repository's Readme will be shown here.": "鏈接倉庫中的 README 自述文件將在此處顯示。",

        // 全部版本 /<user-name>/<repo-name>/pkgs/container/<pag name>/versions
            "All versions": "所有版本",
            // [/Published (*)/, "發布於 $1"],
            // [/(\d+) tagged/, "$1 個標記"],
            // [/(\d+) untagged/, "$1 個未標記"],

        // 某個版本 /<user-name>/<repo-name>/pkgs/container/<pag name>/<version id>
            "About this version": "關於這個版本",
            "Manifest": "清單",
            "No description provided": "未提供說明",
            "This package version was published": "此版本軟件包發布於",

            "To provide a description, add the following line to your Dockerfile:": "要提供描述，請將以下行添加到您的 Dockerfile 中：",
            "For multi-arch images, set a value for the": "對於多架構鏡像，請設置",
            "key in the": "值在",
            "field of the manifest:": "字段：",
            "Learn more about labelling container images": "了解更多關於標記容器鏡像的信息",

            "Download activity": "下載活動",
                "Download activity of this version": "此版本的下載活動",
            "Last 30 days": "最近 30 天",
            "Last week": "最近一周",
            "Today": "今天",

            "Other tags on this version": "此版本的其他標籤",
            "View all versions": "查看全部版本",

        // 版本刪除對話框
            "Are you absolutely sure?": "您真的確定嗎？",
            "This cannot be undone. This will permanently delete the version": "這個操作不能撤銷，這將永久刪除版本",
            "so users and processes won’t be able to download this version.": "，用戶和程序將無法再下載該版本。",
            "Please type": "請輸入",
            "to confirm:": "進行確認：",
            "I understand the consequences, delete this version": "我明白後果，依然刪除此版本"
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository/packages"]["regexp"],

        [/Published (.*) · Digest/, "發布於 $1 · 摘要"],
        [/Published (.*)/, "發布於 $1"],
        [/(\d+) tagged/, "$1 個標記"],
        [/(\d+) untagged/, "$1 個未標記"],
        [/(\d+) dependencies/, "$1 個依賴包"],
        [/(\d+) active/, "$1 個可用"],
        [/(\d+) deleted/, "$1 個已刪除"]
    ],
};
I18N.zh["packages"] = { // 軟件包 - 未鏈接倉庫的軟件包
    "static": { // 靜態翻譯
        ...I18N.zh["repository/pkgs"]["static"],

        "Link this package to a repository": "將此軟件包鏈接到倉庫",
        "By linking to a repository, you can automatically add a Readme, link discussions, and show contributors on this page.": "通過鏈接到倉庫，您可以自動添加 README 自述文件、鏈接討論、在此頁面上顯示貢獻者。",
        "Connect Repository": "關聯倉庫",

        // 關聯倉庫對話框
        "Select a repository to link to this package.": "選擇一個倉庫以鏈接到此軟件包。"
    },
    "regexp": [  // 正則翻譯
        ...I18N.zh["repository/pkgs"]["regexp"],
    ],
};

I18N.zh["repository/security"] = { // 倉庫 - 安全頁面
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 安全標籤卡 & 安全概述 /<user-name>/<repo-name>/security

            // 公共部分
            "Reporting": "報告",
                "Policy": "政策",
                "Advisories": "咨詢",
            "Vulnerability alerts": "漏洞警報",
                "Code scanning": "程式碼掃描",
                "Secret scanning": "機密掃描",

            "Disabled": "禁用",
            "Enabled": "啟用",
            "Needs setup": "需要設置",

            "Security overview": "安全概述",
            "Security policy •": "安全政策 •",
                "Define how users should report security vulnerabilities for this repository": "定義用戶應如何報告此倉庫的安全漏洞",

                "Suggest how users should report security vulnerabilities for this repository": "建議用戶應如何報告此倉庫的安全漏洞",
                "Suggest a security policy": "安全政策建議",

                "View how to securely report security vulnerabilities for this repository": "查看如何安全地報告此倉庫的安全漏洞",
                "View security policy": "查看安全策略",

            "Security advisories •": "安全公告 •",
                "View or disclose security advisories for this repository": "查看或公開此倉庫的安全公告",
                "View security advisories": "查看安全公告",
                "View security advisories for this repository": "查看此倉庫的安全公告",

            "Private vulnerability reporting •": "私下漏洞報告 •",
                "Allow users to privately report potential security vulnerabilities": "允許用戶私下報告潛在的安全漏洞",
                "Enable vulnerability reporting": "啟用漏洞報告",
                "See reported vulnerabilities": "查看報告的漏洞",

            "Dependabot alerts •": "Dependabot 警報 •",
                "— Active": "— 激活",
                "Get notified when one of your dependencies has a vulnerability": "當您的一個依賴項存在漏洞時得到通知",
                "Enable Dependabot alerts": "啟用 Dependabot 警報",
                "View Dependabot alerts": "查看 Dependabot 警報",

            "Code scanning alerts •": "程式碼掃描警報 •",
                "Automatically detect common vulnerability and coding errors": "自動檢測常見漏洞和編碼錯誤",
                "Set up code scanning": "設置程式碼掃描",
                // 私有庫
                "Advanced Security is only available for Organizations": "高級安全只適用於組織",
                "Find out more": "了解更多",
                "Code scanning for private repositories is part of GitHub Advanced Security": "私有倉庫的程式碼掃描是 GitHub 高級安全的一部分", //組織倉庫
                "Contact sales": "聯繫銷售", //組織倉庫

            "Secret scanning alerts •": "機密掃描警報 •",
                "Get notified when a secret is pushed to this repository": "當機密被推送到倉庫時得到通知",
                "Enable in settings": "在設置中啟用",
                "View detected secrets": "查看檢測到的機密",

            // "Vulnerability details": "漏洞詳情",
            "High severity": "高風險",
            "Moderate severity": "中風險",
            "Low severity": "低風險",
            // "Create dependabot security update": "創建可靠的安全更新",

            "Suggest a policy": "建議政策",

        // 安全政策 /<user-name>/<repo-name>/security/policy
            "Set up a security policy": "制定安全政策",
            "Help your community understand how to securely report security vulnerabilities for your project.": "幫助您的社區了解如何安全地報告項目的安全漏洞。",
            "Start setup": "開始設置",

            "No security policy detected": "未檢測到安全策略",
            "This project has not set up a": "該項目尚未設置",
            "file yet.": "文件。",

        // 安全公告 /<user-name>/<repo-name>/security/advisories
            "Security Advisories": "安全公告",
            "Privately discuss, fix, and publish information about security vulnerabilities in your repository's code.": "私人討論，修復和發布倉庫程式碼中的安全漏洞的信息。",
            "New draft security advisory": "新的安全建議草案",

            // [/(\d+) Draft/, "$1 項草案"],
            // [/(\d+) Published/, "$1 項已發布"],
            // [/(\d+) Closed/, "$1 項已關閉"],

            "There aren’t any draft security advisories": "沒有任何安全建議草案",
            "There aren’t any published security advisories": "沒有任何已發布的安全公告",
            "There aren’t any closed security advisories": "沒有任何已關閉的安全公告",

            // 他人庫
            "View information about security vulnerabilities from this repository's maintainers.": "查看倉庫維護者提供的安全漏洞信息。",

        // Dependabot 警報 /<user-name>/<repo-name>/security/dependabot
            "Dependabot alerts": "Dependabot 警報",

            "Ignore the false alarms": "忽略誤報",
            "To help you focus on the alerts that matter, Dependabot now proactively dismisses low impact alerts. These alerts may only have limited effects (e.g. long-running builds or tests) or are unlikely to be exploitable.": "為了幫助您專注於重要的警報，Dependabot 現在會主動消除低影響警報。這些警報可能只會產生有限的影響（例如長時間運行的構建或測試）或不太可能被利用。",
            "Opt out": "設置",
            "learn more about auto-dismissing alerts.": "了解更多關於自動撤消警報的信息。",

            "Auto-triage your alerts": "自動分類您的警報",
                "Control how Dependabot opens pull requests, ignores false positives and snoozes alerts. Rules can be enforced at the organization level. Free for open source and available for private repos through": "控制 Dependabot 如何打開拉取請求、忽略誤報和推遲警報。規則可以在組織層面強制執行。免費供開源項目使用，私有倉庫需要通過",
                "GitHub Advanced Security.": "GitHub 高級安全性。",
                "Learn more about auto-triage": "了解更多關於自動分類的信息",

            "Dependabot alerts are disabled.": "Dependabot 警報已禁用。",
            "To receive Dependabot alerts, you must first enable Dependabot alerts in": "要接收 Dependabot 警報，必須首先啟用 Dependabot 警報",
            "this repository’s settings": "在倉庫的設置中",

            // "Tell us how to make Dependabot alerts work better for you with three quick questions.": "通過三個快速問題告訴我們如何讓 Dependabot 警報更好地為您服務。",

            "Welcome to Dependabot alerts!": "歡迎使用 Dependabot 警報！",
            "Dependabot alerts track security vulnerabilities that apply to your repository's dependencies. As alerts are created, they’ll appear here.": "Dependabot 警報跟蹤適用於倉庫依賴項的安全漏洞。創建警報後，它們將顯示在此處。",

            "Configure": "設置",
                "Manage repository vulnerability settings": "管理倉庫漏洞設置",
                "Manage Dependabot rules": "管理 Dependabot 規則",
                "Manage account notification settings": "管理帳戶通知設置",

            "Closed as": "關閉",
                "Filter by resolution": "按決議篩選",
                "A fix has already been started": "修復已經開始",
                "No bandwidth to fix this": "沒有帶寬來修復",
                "Risk is tolerable to this project": "風險可承受",
                "This alert is inaccurate or incorrect": "此警報不準確或不正確",
                "Vulnerable code is not actually used": "漏洞程式碼實際未使用",
                "Fixed": "已修復",
            "Package": "軟件包",
                "Filter by package": "按軟件包篩選",
                "Filter package": "篩選軟件包",
            "Ecosystem": "生態系統",
                "Filter by ecosystem": "按生態系統篩選",
                "Filter ecosystem": "篩選生態系統",
            "Manifest": "清單",
                "Filter by manifest": "按清單篩選",
                "Filter manifest": "篩選清單",
                "All": "所有",
            "Severity": "嚴重等級",
                "Filter by severity": "按嚴重性篩選",
            "Sort": "排序",
                "Sort by": "排序方式",
                "Newest": "最新的",
                "Oldest": "最早的",
                "Most important": "最重要的",
                "Manifest path": "表現路徑",
                "Package name": "包名稱",

            "selected": "條被選中",
            "Dismiss alerts": "忽略警報",
                "Select a reason to dismiss": "選擇駁回理由",

            "There aren’t any open alerts.": "尚無任何打開的警報。",
            "As alerts are created, they’ll appear here.": "創建警報後，它們將出現在此處。",

            // 底部信息
            "surface known security vulnerabilities in some dependency manifest files.": "表面已知的安全漏洞在某些依賴性清單文件中。",
            "Dependabot security updates": "Dependabot 安全更新",
            "automatically keep your application up-to-date by updating dependencies in response to these alerts.": "通過響應這些警報更新依賴項，自動保持您的應用是最新的。",
            "Dependabot version updates": "Dependabot 版本更新",
            "can also help keep dependencies updated.": "也可以幫助保持依賴項的更新。",

            "Protip!": "專業提示！",
                "See auto-dismissed alerts with": "要查看自動解除的警報，請使用",
                "to see alerts without an available fix.": "來查看沒有可用修復程序的警報。",

         // 具體某條Dependabot 警報 /security/dependabot/<id>
            "Dismiss alert": "忽略警報",

            "Opened": "打開",
            // [/Upgrade ([^ ]+) to fix/, "升級 $1 去修復"], // 某個 Dependabot 警報
            // [/Upgrade ([^ ]+) to version/, "升級 $1 到版本"], // 某個 Dependabot 警報
            "Create Dependabot security update": "創建 Dependabot 安全更新",

            // [/Dependabot cannot update ([^ ]+) to a non-vulnerable version/, "Dependabot 無法將 $1 更新為無漏洞的版本"],
            "The latest possible version that can be installed is": "最新可以安裝版本是",
            "because of the following conflicting dependency:": "，但是存在以下衝突的依賴關係：",
            "because of the following conflicting dependencies:": "，但是存在以下衝突的依賴關係：",
            "The earliest fixed version is": "最早修復版本為",
            "Try again": "再試一次",
            "View logs": "查看日誌",
            "Learn more about troubleshooting Dependabot errors": "了解更多關於排除 Dependabot 錯誤的信息",

            "Patched version": "補丁版本",

            "Impact": "影響",
            "Patches": "補丁",
            "Workarounds": "解決方法",
            "Workarounds / Mitigations": "解決方法/緩解措施",
            "References": "參考信息",
            "For more information": "更多信息",

            // [/Bump ([^ ]+) from ([^ ]+) to ([^ ]+)/, "將 $1 從 $2 升級到 $3"],
            "Merging this pull request would fix": "合併此拉取請求將修復",
            "Review security update": "審查安全更新",

            // 右側欄
                "CVSS base metrics": "CVSS 基本指標",
                    "Attack vector": "攻擊載體",
                        "More severe the more the remote (logically and physically) an attacker can be in order to exploit the vulnerability": "攻擊者為了利用該漏洞，可以在遠程（邏輯上和物理上）攻擊時更嚴重",
                        "Network": "網絡",
                        "Local": "本地",
                    "Attack complexity": "攻擊複雜性",
                        "More severe for the least complex attacks": "當最不複雜的攻擊時更嚴重",
                    "Privileges required": "所需權限",
                        "More severe if no privileges are required": "當不需要權限時更嚴重",
                        "None": "無",
                    "User interaction": "用戶交互",
                        "More severe when no user interaction is required": "當不需要用戶交互時更嚴重",
                        "Required": "必須",
                    "Scope": "範圍",
                        "More severe when a scope change occurs, e.g. one vulnerable component impacts resources in components beyond its security scope": "當範圍發生變化時更嚴重，例如一個易受攻擊的組件會影響超出其安全範圍的組件中的資源",
                        "Unchanged": "無變化",
                        "Changed": "已變化",
                    "Confidentiality": "保密性",
                        "More severe when loss of data confidentiality is highest, measuring the level of data access available to an unauthorized user": "當數據保密性損失最高時更為嚴重，衡量未授權用戶可獲得的數據訪問級別",
                    "Integrity": "完整性",
                        "More severe when loss of data integrity is the highest, measuring the consequence of data modification possible by an unauthorized user": "當數據完整性損失最高時更為嚴重，衡量未授權用戶可能修改數據的後果",
                    "Availability": "可利用性",
                        "More severe when the loss of impacted component availability is highest": "當受影響的組件可用性損失最高時更為嚴重",
                "Weaknesses": "缺陷",
                "See advisory in GitHub Advisory Database": "請參閱 GitHub 咨詢數據庫中的咨詢",
                "See all of your affected repositories": "查看您所有受影響的倉庫",
                "See something to contribute?": "看到有什麼可貢獻的嗎？",
                "Suggest improvements for this advisory on the GitHub Advisory Database.": "在 GitHub 咨詢數據庫上建議改進此咨詢。",

            // 生成安全更新
                // 頂部提醒
                    // [/Started generating a security update for ([^ ]+)./, "開始為 $1 生成安全更新。"],
                // [/Creating a security update for ([^ ]+)/, "為 $1 創建安全更新"],
                "Dependabot is creating a security update to fix": "Dependabot 正在創建一個安全更新來修復",
                // [/(\d+) Dependabot alerts?/, "$1 個 Dependabot 警報"],
                // [/on ([^ ]+) in/, "關於 $1 在"],
                // [/Or, manually upgrade ([^ ]+) to version/, "或者，手動將 $1 升級到版本"],
                "or later. For example:": "或更高。例如：",

         // 具體某條Dependabot 警報 日誌 /security/dependabot/<id>/update-logs/<id2>
            "Update logs": "更新日誌",

        // 程式碼掃描器 /<user-name>/<repo-name>/security/code-scanning
            "Automatically detect vulnerabilities in your code.": "自動檢測您程式碼中的漏洞。",
            "Code Scanning uses Actions to run the analysis. Enabling this feature will create a new workflow file. Learn more about": "程式碼掃描使用 Actions 來運行分析。啟用此功能將創建一個新的工作流程文件。了解更多關於",
            "Code Scanning": "程式碼掃描",
            "Configure CodeQL alerts": "配置 CodeQL 警報",
            "Configure other scanning tools": "配置其他掃描工具",

            "Configure tools that integrate with Code Scanning to keep the quality of your code under control. Learn more about": "與程式碼掃描集成的配置工具，使您的程式碼質量得到控制。了解更多關於",
            "Configure scanning tool": "配置掃描工具",

        // 機密掃描警報 /<user-name>/<repo-name>/security/secret-scanning
            "Secret scanning alerts": "機密掃描警報",
            "Secret scanning disabled": "機密掃描已停用",
                "To scan for secrets, you must first enable secret scanning in": "要掃描機密，您必須首先啟用機密掃描在",
                "this repository's settings": "此倉庫設置",

            "Bypassed": "繞行",
            "Validity": "有效性",
                "Active": "活躍",
                "Inactive": "不活躍",
                "Unknown": "未知",
            "Secret type": "機密類型",
                "Service Providers": "服務提供商",
                "Custom Patterns": "自定義模式",
                "Filter by secret type": "按機密類型篩選",
                "Filter secret type": "篩選機密類型",
                "Nothing to show": "暫無",

            "Provider": "提供者",
                "Filter by provider": "按提供者篩選",
                "Filter provider": "篩選提供者",

            // 排序
                "Recently updated": "最近更新",
                "Least recently updated": "最早更新",

            "Clear current search query, filters, and sorts": "清除當前搜索查詢、過濾器和排序",

            "No secrets found.": "沒有發現任何機密",
            "Your repository doesn't have any unresolved secrets.": "您的倉庫沒有任何未解決的秘密。",

        // 新建安全公告草案 /<user-name>/<repo-name>/security/advisories/new
            "Open a draft security advisory": "打開一個安全公告草案",
            "After the draft security advisory is open, you can privately discuss it with collaborators and create a temporary private fork where you can collaborate on a fix. If you've already fixed the vulnerability, just fill out the draft security advisory and then publish it.": "在安全公告草案打開後，您可以與協作者私下討論，並創建一個臨時的私有復刻，在那裡您們可以協作進行修復。如果您已經修復了該漏洞，只需填寫安全公告草案，然後發布即可。",

            "Advisory Details": "公告詳情",
            "Title *": "標題 *",
            "CVE identifier": "CVE 標識符",
                "Request CVE ID later": "稍後請求 CVE ID",
                "I have an existing CVE ID": "我有一個現有的 CVE ID",
            "Description *": "描述 *",

            "Affected products": "受影響的產品",
            "Ecosystem *": "生態系統 *",
                "Don't see the ecosystem you're looking for? It may not be supported yet.": "沒有看到您正在尋找的生態系統？可能還不支持。",
                "Select an ecosystem": "選擇一個生態系統",
                "Go": "",
                "Other": "其他",
            "Affected versions": "受影響的版本",
            "Patched versions": "補丁版本",
            "Add another affected product": "添加另一個受影響的產品",

            "Select severity": "選擇嚴重程度",
                "Low": "低風險",
                "Moderate": "中風險",
                "High": "高風險",
                "Critical": "關鍵風險",
                "Assess severity using CVSS": "使用 CVSS 評估嚴重程度",

            "Common weakness enumerator (CWE)": "常見弱點枚舉器 (CWE)",
                "Search by CWE": "按 CWE 搜索",

            "Create draft security advisory": "創建安全公告草案",

            // 右側欄
            "Access and visibility": "訪問和可見性",
                "Until it is published, this draft security advisory will only be visible to the owner of": "在發布之前，此安全公告草案僅對以下的所有者可見",
                ". Other users and teams may be added once the advisory is created.": "。 其他用戶和團隊可以在咨詢創建後加入。",
            "Once published, security advisories on public repositories are visible to everyone.": "一旦發布，公共倉庫上的安全公告對所有人都是可見的。",
            "Once reviewed by GitHub, security advisories may be broadcast on the": "一旦通過 GitHub 的審查，安全公告就可以出現在",
            "GitHub Advisory Database": "GitHub 咨詢數據庫",
            ". They may also trigger Dependabot alerts to users that depend on this repository.": "。它們還可能向依賴此倉庫的用戶觸發 Dependabot 警報。",

            "Security policy": "安全政策",
            "Glossary and documentation": "詞彙表和文檔",
            "Dependabot language support": "Dependabot 語言支持",
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/([\d,]+) Draft/, "$1 草案"],
        [/([\d,]+) Published/, "$1 發布"],
        [/([\d,]+) Open/, "$1 打開"],
        [/([\d,]+) Closed/, "$1 關閉"],
        [/(\d+) selected/, "$1 條被選中"],
        [/Upgrade ([^ ]+) to fix/, "升級 $1 去修復"], // 某個 Dependabot 警報
        [/Upgrade ([^ ]+) to version/, "升級 $1 到版本"], // 某個 Dependabot 警報
        [/Dependabot cannot update ([^ ]+) to a non-vulnerable version/, "Dependabot 無法將 $1 更新為無漏洞的版本"],
        [/Bump ([^ ]+) from ([^ ]+) to ([^ ]+)/, "將 $1 從 $2 升級到 $3"],
        [/Started generating a security update for ([^ ]+)./, "開始為 $1 生成安全更新。"],
        [/Creating a security update for ([^ ]+)/, "為 $1 創建安全更新"],
        [/(\d+) Dependabot alerts?/, "$1 個 Dependabot 警報"],
        [/on ([^ ]+) in/, "關於 $1 在"],
        [/Or, manually upgrade ([^ ]+) to version/, "或者，手動將 $1 升級到版本"],
    ],
};

I18N.zh["repository/contribute"] = { // 倉庫 - 貢獻頁面
    "static": { // 靜態翻譯

        // 貢獻頁面 /<user-name>/<repo-name>/contribute
            "Contribute to": "貢獻於",
            "Make your first contribution to this repository by tackling one of the issues listed below.": "通過解決下面列出的一個議題，為這個倉庫做出您的第一個貢獻。",
            "Each issue displayed here is a \"good first issue,\" selected for its relative approachability for first-time contributors.": "此處顯示的每個議題都是 “好的首發議題”，因其對首次貢獻者來說相對容易。",

            "Read the contributing guidelines": "閱讀貢獻指南",

            "Good first issues": "好的首發議題",
            "See all issues": "查看所有議題",

            "This repo doesn't have any good first issues, yet": "該倉庫暫無任何好的首發議題",
            "Once its maintainers label issues and pull requests for new contributors, they will begin to appear here.": "一旦它的維護者為新的貢獻者標記了議題和拉取請求，它們就會開始出現在這裡。",
            "All issues in this repository": "此倉庫中的所有議題",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["repository/subscription"] = { // 倉庫 - 通知狀態頁面
    "static": { // 靜態翻譯

        // 倉庫通知狀態管理 /<user-name>/<repo-name>/subscription
            "Your": "您的",
            "notifications status": "通知狀態",
            "A notification is created every time someone discusses something inside of the repository — Pull Requests, Issues, Comments, and Commit discussions. Whether you are watching the repository, not watching it, or ignoring it determines which notifications you receive.": "每當有人在版本庫內討論什麼，比如拉取請求、議題、評論和提交討論，都會產生一個通知。無論您是關注倉庫、不關注還是忽略它，都決定了您會收到哪些通知。",
            "Not watching": "不關注",
                "You will only receive notifications when you participate or are @mentioned.": "只有當您參與或被 @您 時，您才會收到通知。",
            "Releases only": "僅發行版",
                "You will only receive notifications for new releases, or when you participate or are @mentioned.": "您只會收到新版本的通知，或者當您參與或被 @您 時。",
            "Watching": "關注",
                "You will receive all notifications for this repository.": "您將收到此倉庫的所有通知。",
            "Ignored": "忽略",
                "You will not receive any notifications for this repository.": "您將不會收到有關此倉庫的任何通知。",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["repository/invitations"] = { // 倉庫 - 接受邀請頁面
    "static": { // 靜態翻譯

        // 接受邀請 /<user-name>/<repo-name>/invitations
            "invited you to collaborate": "邀請您進行協作",
            "Accept invitation": "接受邀請",
            "Decline": "拒絕",
            "Owners": "所有者",
            "Your public profile information": "您的公開個人資料信息",
            "Certain activity": "某些活動",
            "within this repository": "在這個倉庫中",
            "Country of request origin": "請求來源國家/地區",
            "Your access level for this repository": "您對該倉庫的訪問等級",
            "Your IP address": "您的 IP 地址",
            "Is this user sending spam or malicious content?": "此用戶是否發送垃圾郵件或惡意內容？",

    },
    "regexp": [ // 正則翻譯
        [/of ([^ ]+) will be able to see:/, "$1 將能夠看到："], // 邀請頁
    ],
};


// 洞察 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

I18N.zh["repository-insights-menu"] = { // 倉庫 -> 洞察 - 公共部分
    "static": { // 靜態翻譯
        // 公共部分
            // 左側菜單
            "Pulse": "統計",
            "Contributors": "貢獻者",
            "Community": "社區",
            "Community Standards": "社區準則",
            "Traffic": "流量",
            "Commits": "提交",
            "Code frequency": "程式碼頻率",
            "Dependency graph": "依賴關係圖",
            // "Punch card": "時刻",
            "Network": "網絡",
            // "Members": "成員",
            "Forks": "復刻",

            "People": "成員", //組織倉庫

            // 私有庫禁用部分功能的提醒
            "Upgrade to GitHub Pro or make this repository public to enable this feature.": "升級到 GitHub Pro 或將此倉庫設為公開以啟用此功能。",
            // 他人私有庫
            "Contact an administrator to upgrade to GitHub Team or make this repository public to enable this feature.": "請聯繫管理員升級到 GitHub 團隊或將此設為倉庫公開以啟用此功能。",

            "We want to know how these insights are helping you and where they could be improved.": "我們想知道這些洞察如何幫助您，以及在哪些方面可以改進。",
            "Give us your feedback": "向我們提供反饋意見",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["repository/pulse"] = { // 倉庫 -> 洞察 - 統計
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-insights-menu"]["static"],

        // 統計 /<user-name>/<repo-name>/pulse
            "Period:": "週期：",
                "Filter activity": "篩選活動",
                "24 hours": "24 小時",
                "3 days": "3 天",
                "1 week": "1 周",
                "1 month": "1 個月",
            "Active pull request": "活躍的拉取請求",
            "Active pull requests": "活躍的拉取請求",
            "Active issue": "活躍的議題",
            "Active issues": "活躍的議題",
            "Merged pull request": "合併的拉取請求",
            "Merged pull requests": "合併的拉取請求",
            "Open pull request": "打開的拉取請求",
            "Open pull requests": "打開的拉取請求",
            "Closed issue": "關閉的議題",
            "Closed issues": "關閉的議題",
            "New issue": "新議題",
            "New issues": "新議題",

            "Excluding merges,": "不包括合併，",
            // [/(\d+) authors?/, "$1 位作者"],
            "have pushed": "推送了",
            "has pushed": "推送了",
            "commit": "次提交",
            "commits": "次提交",
            // [/to ([^ ]+), and/, "到 $1 分支和"],
            // [/to all branches. On ([^ ]+),/, "到全部分支。在 $1 分支，"],
            // [/(\d+) files?/, "$1 個文件"],
            "have changed and there have been": "已經發生了變化，並且有",
            "has changed and there have been": "已經發生了變化，並且有",
            "additions": "處增加",
            "deletions": "處刪除",

            "commit authored by": "次提交，作者：",
            "commits authored by": "次提交，作者：",

            "Want to help out?": "想幫忙嗎？",
            "Fork this repository": "復刻倉庫",
            "Release published by": "個發行版已發布由",
            "Releases published by": "個發行版已發布由",
            "published": "發布",
            "Pull request merged by": "個拉取請求已合併由",
            "Pull requests merged by": "個拉取請求已合併由",
            "Pull request opened by": "個拉取請求打開由",
            "Pull requests opened by": "個拉取請求打開由",
            "Issue closed by": "個議題已關閉由",
            "Issues closed by": "個議題已關閉由",
            "Issue opened by": "個議題打開由",
            "Issues opened by": "個議題打開由",
            "person": "人",
            "people": "人",
            "Sometimes conversations happen on old items that aren’t yet closed. Here is a list of all the Issues and Pull Requests with unresolved conversations.": "有時會針對尚未關閉的舊項目進行討論。以下是所有未解決的討論的議題和拉取請求的列表。",
            // [/• (\d+) new comments/, "• $1 個新評論"],
            "Unresolved conversation": "個未解決的討論",
            "Unresolved conversations": "個未解決的討論",

            "merged": "已合併",
            "opened": "打開",
            "closed": "已關閉",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/(\d+) authors?/, "$1 位作者"],
        [/to ([^ ]+) and/, "到 $1 分支和"],
        [/to all branches. On ([^ ]+),/, "到全部分支。在 $1 分支，"],
        [/(\d+) files?/, "$1 個文件"],
        [/(\d+) commented on/, "$1 評論於",],
        [/• (\d+) new comments?/, "• $1 個新評論"],
        [/There hasn’t been any commit activity on ([^ ]+) in the last 24 hours./, "在過去的 24 小時裡，$1 沒有任何提交活動。"],
        [/There hasn’t been any commit activity on ([^ ]+) in the last 3 days./, "在過去的 3 天裡，$1 沒有任何提交活動。"],
        [/There hasn’t been any commit activity on ([^ ]+) in the last week./, "在過去的 1 周裡，$1 沒有任何提交活動。"],
        [/There hasn’t been any commit activity on ([^ ]+) in the last month./, "在過去的 1 月裡，$1 沒有任何提交活動。"],
    ],
};

I18N.zh["repository/graphs/contributors"] = { // 倉庫 -> 洞察 - 貢獻者
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-insights-menu"]["static"],

        // 貢獻者 /<user-name>/<repo-name>/graphs/contributors
            "Loading contributions…": "載入貢獻者…",
            // [/Contributions to (.*), excluding merge commits/, "貢獻到 $1 分支，不包括合併提交"],
            "Contributions:": "貢獻者：",
                // 下拉菜單
                "Filter contributions": "篩選貢獻者",
                "Additions": "添加數量",
                "Deletions": "刪除數量",
                // [/Contributions to (.*), excluding merge commits and bot accounts/, "貢獻到 $1 分支，不包括合併提交和機器人帳戶"],
            "Crunching the latest data, just for you. Hang tight…": "正在為您準備最新數據，請稍後…",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Contributions to (.*), excluding merge commits/, "貢獻到 $1 分支，不包括合併提交"],
        [/Contributions to (.*), excluding merge commits and bot accounts/, "貢獻到 $1 分支，不包括合併提交和機器人帳戶"],
        [/([\d,]+) commits?/, "$1 次提交"],
    ],
};

I18N.zh["repository/graphs/community"] = { // 倉庫 -> 洞察 - 社區
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-insights-menu"]["static"],

        // 社區 /<user-name>/<repo-name>/graphs/community
            "Enable Discussions to unlock Community Insights!": "啟用討論，以解鎖社區見解！",
            "Discussions is the central space for your community to share announcements, ask questions, and host conversations.": "討論是您的社區共享公告、提出問題和主持對話的中心空間。",
            "Set up discussions": "建立討論",

            "Community insights": "社區見解",
            "Period:": "週期：",
                "Filter activity": "篩選活動",
                "Last 30 days": "最近 30 天",
                "Last 3 months": "最近 3 個月",
                "Last year": "最近 1 年",

            "Contribution activity": "貢獻活動",
                "Count of total contribution activity to Discussions, Issues, and PRs": "對討論、議題和拉取請求的總貢獻活動計數",
                "discussions": "討論",
                "Quantity": "數量",
                "Timeline": "時間軸",
                // [/(\d+) pull requests created/, "$1 個拉取請求創建"],
            "We tried our best, but the graph wouldn’t load. Try reloading the page.": "我們盡了最大努力，但圖表無法加載。嘗試重新加載頁面。",
            "Discussions page views": "討論頁面瀏覽量",
                "Total page views to Discussions segmented by logged in vs anonymous users.": "按登錄用戶與匿名用戶劃分的討論的總頁面瀏覽量。",
                "logged in": "登錄",
                "anonymous": "匿名",

                "Not enough data yet.": "還沒有足夠的數據。",
                "It usually takes about a week to populate this chart.": "填充此圖表通常需要大約一周的時間。",
                "Read more about insights": "閱讀更多關於見解的信息",

            "Discussions daily contributors": "每日討論的貢獻者",
                "Count of unique users who have reacted, upvoted, marked an answer, commented, or posted in the selected period.": "在所選時間段內，作出反應、投票、標記答案、評論或發帖的唯一用戶的數量。",
            "Discussions new contributors": "討論的新貢獻者",
                "Count of unique new users to Discussions who have reacted, upvoted, marked an answer, commented, or posted in the selected period.": "在所選時間段內，對討論作出反應、投票、標記答案、評論或發帖的唯一新用戶的數量。",

            "Crunching the latest data, just for you. Hang tight…": "正在為您準備最新數據，請稍後…",
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/(\d+) pull requests? created/, "$1 個拉取請求創建"],
        [/(\d+) issues? created/, "$1 個議題創建"],
    ],
};

I18N.zh["repository/community"] = { // 倉庫 -> 洞察 - 社區準則
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-insights-menu"]["static"],

        // 社區準則 /<user-name>/<repo-name>/community
            "Here’s how this project compares to": "以下是該項目內容，不同於",
            "recommended community standards": "推薦的社區標準",
            "Checklist": "檢查清單",
            "Add": "添加",
            "Propose": "提議",

            "Description": "描述",
                "Add a description to your repository so people understand the goals of your project.": "向您的倉庫添加描述，以便人們了解您項目的目標。",
            "README": "自述文件（README）",
                "Writing a README": "編寫自述文件（README）",
            "Code of conduct": "行為準則",
                "What is a code of conduct?": "什麼是行為準則？",
            "Contributing": "貢獻",
                "Writing contributing guidelines": "編寫貢獻指南",
            "License": "許可證",
                "Choosing a license": "選擇許可證",
            "Security policy": "安全政策",
                "Set up a security policy": "設置安全策略",
            "Issue templates": "議題模板",
            "Pull request template": "拉取請求模板",
            "Repository admins accept content reports": "倉庫管理員接受內容報告", // 組織倉庫?
            "What is": "什麼是",
            "the community profile": "社區簡介",

        // 添加許可證 /<user-name>/<repo-name>/community/license/new?branch=main
            "Add a license to your project": "為您的項目添加許可證",
            "Choose a license to add to your project": "選擇要添加到項目的許可證",
            "Select a template on the left to get started.": "在左側選擇一個模板開始。",
            "Learn more about": "了解更多關於",
            "which license best fits your project": "哪種許可證最適合您的項目",

        // 添加許可證 /<user-name>/<repo-name>/community/license/new?branch=<branch name>&template=<template name>
            // 右側欄
                "You’ll have a chance to review before committing a": "您將有機會在提交之前進行審查",
                "file to a new branch or the root of your project.": "文件到新分支或項目的根目錄。",

                "To adopt": "採用",
                ", enter your details. You’ll have a chance to review before committing a": "，輸入您的詳細信息。您將有機會在提交之前進行審查",
                "Year": "年份",
                    "The current year": "當前年份",
                "Full name": "全名",
                    "The full name or username of the repository owner": "倉庫所有者的全名或用戶名",
                "Review and submit": "審查並提交",

            // 中間欄 頂部 權限信息
                "Permissions": "許可事項",
                "Limitations": "限制條件",
                    "Commercial use": "商業用途",
                    "Modification": "修改",
                    "Distribution": "分布",
                    "Patent use": "專利使用",
                    "Private use": "私人使用",
                    "Trademark use": "商標使用",
                    "Liability": "責任",
                    "Warranty": "擔保",
                    "Disclose source": "開源",
                    "Same license": "相同的許可證",
                "Conditions": "條件",
                    "License and copyright notice": "許可和版權聲明",
                    "State changes": "狀態變化",
                    "License and copyright notice for source": "來源許可和版權聲明",
                    "Network use is distribution": "網絡使用即分發",
                    "Same license (library)": "相同的許可證（庫）",
                    "Same license (file)": "相同的許可證（文件）",

                "This is not legal advice.": "這並不是法律建議。",
                "Learn more about repository licenses": "了解更多關於倉庫許可證的信息",

        // 添加行為準則 /<user-name>/<repo-name>/community/code-of-conduct/new
            "Add a code of conduct to your project": "為您的項目添加行為準則",
            "Choose a code of conduct to add to your project": "選擇要添加到項目中的行為準則",
            "what a code of conduct is": "什麼是行為準則",
            "and how to enforce it.": "以及如何執行。",
            "Contributor Covenant": "貢獻者協議",
                "Recommended for projects of all sizes": "建議用於各種規模的項目",
                "Contact method": "聯繫方式",
            "Citizen Code Of Conduct": "公民行為準則",
                "Suitable for large communities and events": "適合大型社區和活動",
                "Link to reporting guidelines": "報告指南鏈接",
                "Link to policy": "政策鏈接",
                "Note": "注釋",
                "Contact info": "聯繫信息",
                "Community name": "團隊名稱",
                "Governing body": "管理機構",
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/graphs/traffic"] = { // 倉庫 -> 洞察 - 流量
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-insights-menu"]["static"],

        // 流量 /<user-name>/<repo-name>/graphs/traffic
            "Git clones": "Git 克隆",
            "Clones": "克隆",
            "Unique cloners": "唯一克隆者",
            "clones": "次克隆",
            "clone": "次克隆",
            "unique cloners": "個唯一克隆者",
            "unique cloner": "個唯一克隆者",
            "Visitors": "訪客",

            "Referring sites": "引薦網站",
            "Site": "站點",
            "Views": "瀏覽",
            "Unique visitors": "唯一訪客",
            "views": "次瀏覽",
            "view": "次瀏覽",
            "unique visitors": "個唯一訪客",
            "unique visitor": "個唯一訪客",
            "Popular content": "熱門內容",
            "Content": "內容",

            "We don’t have enough data to show anything useful.": "我們沒有足夠的數據來顯示任何有用的東西。",
            "It usually takes about a week to populate this graph.": "通常需要一周左右的時間來填充此圖表。",
            "It looks like traffic to your repository is a little light. Go spread the word and check back later!": "看起來您的倉庫的流量有點少呀。去宣傳一下吧，稍後再回來查看！",

            "Crunching the latest data, just for you. Hang tight…": "正在為您準備最新數據，請稍後…",
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/graphs/commit-activity"] = { // 倉庫 -> 洞察 - 提交
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-insights-menu"]["static"],

        // 提交 /<user-name>/<repo-name>/graphs/commit-activity
            "Sunday"    : "周日",
            "Monday"    : "周一",
            "Tuesday"   : "周二",
            "Wednesday" : "周三",
            "Thursday"  : "周四",
            "Friday"    : "周五",
            "Saturday"  : "周六",

            "Crunching the latest data, just for you. Hang tight…": "正在為您準備最新數據，請稍後…",
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/graphs/code-frequency"] = { // 倉庫 -> 洞察 - 程式碼頻率
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-insights-menu"]["static"],

        // 程式碼頻率 /<user-name>/<repo-name>/graphs/code-frequency
            "Code frequency over the history of": "歷史上的程式碼頻率",
            "Additions": "添加數量",
            "Deletions": "刪除數量",
            "per week": "每周",
            "Crunching the latest data, just for you. Hang tight…": "正在為您準備最新數據，請稍後…",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/network/dependencies"] = { // 倉庫 -> 洞察 - 依賴關係圖 - 依賴關係
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-insights-menu"]["static"],

        "Dependencies": "依賴關係",
        "Dependents": "依賴者",
        // 依賴關係圖 - 依賴關係 /network/dependencies
            "Tell us how to make the Dependency Graph work better for you with a few quick questions.": "請通過幾個簡單的問題告訴我們，如何使 “依賴關係圖” 更好地為您工作。",

            "The dependency graph is not enabled": "依賴關係圖未啟用",
            "The owner of this repository has not yet enabled the dependency graph. Once enabled, you can": "此倉庫的所有者尚未啟用依賴關係圖。一旦啟用，您可以", //個人倉庫
            "The dependency graph has not yet been enabled by an organization owner or a user with admin permissions for this repository. Once enabled, you can": "依賴關係圖還沒有被組織所有者或具有該倉庫管理權限的用戶啟用。一旦啟用，您可以", // 組織倉庫
            "track this repository’s dependencies": "追蹤此倉庫的依賴關係",

            "Enable the dependency graph": "啟用依賴關係圖",
            "Track this repository’s dependencies and sub-dependencies": "追蹤該倉庫的依賴關係和子依賴關係",
            "The": " ",
            "is not enabled for this repository. Click on \"Enable the dependency graph\" below to enable it.": "暫未啟用。單擊下面的 “啟用依賴關係圖” 以啟用它。",
            "If you’d like to enable the": "如果您想啟用",
            "dependency graph": "依賴關係圖",
            "vulnerability alerting": "漏洞警報",
            "click on \"Allow access\" below to enable it.": "點擊下面的 “允許訪問” 來啟用它。",
            "Learn more about how we use your data": "了解更多關於我們如何使用您的數據的信息",
            "Allow access": "允許訪問",

            "No dependencies found.": "未找到依賴項",
            "To view your dependency graph, your repository must define dependencies in": "要查看依賴關係圖，您的倉庫必須定義依賴關係存在",
            "one of the supported manifest file types": "一個支持的清單文件",
            ", like": "，例如",
            ", and": "，和",

            "Export SBOM": "導出 SBOM",

            // "Dependencies": "依賴關係",
            "Search all dependencies": "搜索所有依賴項",

            "These dependencies are defined in": "這些依賴關係被定義在",
            "’s manifest files, such as": "的清單文件，例如",
            "Dependencies defined in": "依賴關係被定義在",

            // 發現已知漏洞
            "Dependencies defined in these manifest files have known security vulnerabilities and should be updated:": "這些清單文件中定義的依賴項具有已知的安全漏洞，應更新：",
            // [/(\d+) vulnerabilities? found/, "發現 $1 個漏洞"],
            "Known security vulnerability in": "已知的安全漏洞，在",
                "Known vulnerability found": "發現已知漏洞",
                "update suggested:": "更新建議：",
                "Always verify the validity and compatibility of suggestions with your codebase.": "始終驗證建議與程式碼庫的有效性和兼容性。",

            // [/(\d+) more dependencies/, "更多 $1 個依賴項"],
            // [/Load (\d+) more…/, "加載更多 $1個…"],

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Detected automatically/, "自動檢測於"]
        [/(\d+) vulnerabilities? found/, "發現 $1 個漏洞"],
        [/(\d+) more dependencies/, "更多 $1 個依賴項"],
        [/Load (\d+) more…/, "加載更多 $1個…"],
    ],
};

I18N.zh["repository/network/dependents"] = { // 倉庫 -> 洞察 - 依賴關係圖 - 依賴者
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-insights-menu"]["static"],

        "Dependencies": "依賴關係",
        "Dependents": "依賴者",
        // 依賴關係圖 - 依賴者 /network/dependents
            "GitHub does not currently determine the dependents of private repositories": "GitHub 目前無法確定私有倉庫的依賴者",

            "Export SBOM": "導出 SBOM",
            // "Dependents": "依賴者",
            "We haven’t found any dependents for this repository yet.": "我們尚未找到此倉庫的任何依賴者。",
            "We’ll keep looking!": "我們會繼續尋找！",

            "Repositories that depend on": "依賴的倉庫包括",
            "Package:": "軟件包：",

            // [/(\d+) Repositor(y|ies)/, "$1 倉庫"],
            // [/(\d+) Packages?/, "$1 軟件包"],

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/(\d+) Repositor(y|ies)/, "$1 倉庫"],
        [/(\d+) Packages?/, "$1 軟件包"],
    ],
};

I18N.zh["repository/network/updates"] = { // 倉庫 -> 洞察 - 依賴關係圖 - Dependabot
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-insights-menu"]["static"],

        "Dependencies": "依賴關係",
        "Dependents": "依賴者",

        "Export SBOM": "導出 SBOM",
        // 依賴關係圖 - Dependabot /network/updates
            "Enable Dependabot": "啟用 Dependabot",
            "Dependabot isn't enabled": "未啟用 Dependabot",
            "Dependabot isn't enabled on forks by default": "默認情況下，Dependabot 不會在復刻上啟用。",

            "Dependabot version updates aren't configured yet": "尚未配置 Dependabot 版本更新",
            "Dependabot creates pull requests to keep your dependencies up-to-date.": "Dependabot 創建拉取請求以保持您的依賴項是最新的。",
            "Create config file": "創建配置文件",

            "Recent update jobs": "最近更新的工作",

            "Dependabot version updates": "Dependabot 版本更新",
            "automatically keep your application up-to-date by periodically updating dependencies to their latest versions.": "通過定期將依賴項更新到最新版本，自動保持應用的最新狀態。",
            "Dependabot security updates": "Dependabot 版本更新",
            "can also help keep dependencies updated.": "還可以幫助保持依賴項更新。",

            "Monitored dependency files": "受監控的依賴文件",
            "Check for updates": "檢查更新",
            "Recent jobs": "近期工作",
            "view logs": "查看日誌",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/network"] = { // 倉庫 -> 洞察 - 網絡圖
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-insights-menu"]["static"],

        // 網絡圖 /<user-name>/<repo-name>/network
            // 鍵盤快捷鍵
                "Scroll left": "向左滑動",
                "Scroll right": "向右滑動",
                "Scroll up": "向上滑動",
                "Scroll down": "向下滑動",
                "Toggle visibility of the head labels": "切換頭部標籤的可見性",
                "Scroll all the way left": "一直向左滑動",
                "Scroll all the way right": "一直向右滑動",
                "Scroll all the way up": "一直向上滑動",
                "Scroll all the way down": "一直向下滑動",

            "Network graph": "網絡圖",
            "Timeline of the most recent commits to this repository and its network ordered by most recently pushed to.": "最近提交到此倉庫的時間軸及其網絡圖按最近推送的順序排序。",

            "The repository network shows the 100 most recently pushed forks.": "倉庫網絡圖顯示最近推送的 100 個復刻。",

            "Loading graph data": "加載網絡圖數據",
            "Keyboard shortcuts available": "可用的鍵盤快捷鍵",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/network/members"] = { // 倉庫 -> 洞察 - 復刻
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-insights-menu"]["static"],

        // 復刻 - 樹形視圖 /<user-name>/<repo-name>/network/members
            "switch to list view": "切換到列表視圖",

            "No one has forked this repository yet.": "目前，暫無人復刻該倉庫。",
            "Forks are a great way to contribute to a repository. After": "復刻是給該倉庫做貢獻的好方法。首先",
            "forking a repository": "復刻倉庫",
            ", you can send the original author a": "，然後您可向原作者發送",
            "pull request": "拉取請求",

            "Woah, this network is huge! We’re showing only some of this network’s repositories.": "哇，這個網絡太龐大了! 我們只展示了這個網絡中的一部分倉庫。",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/forks"] = { // 倉庫 -> 洞察 - 復刻
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-insights-menu"]["static"],

        // 復刻 - 列表視圖 /<user-name>/<repo-name>/forks
            "Switch to tree view": "切換到樹形視圖",

            "No one has forked this repository yet": "目前，暫無人復刻該倉庫",
            "Forks are a great way to contribute to a repository. After": "復刻是給該倉庫做貢獻的好方法。首先",
            "forking a repository": "復刻倉庫",
            ", you can send the original author a": "，然後您可向原作者發送",
            "pull request": "拉取請求",

            "No forked repositories found": "尚無復刻倉庫",
            "Try changing your filters, or search for": "嘗試更改篩選器，或搜索",
            "active forked repositories": "活躍的復刻倉庫",

            "Period:": "週期:",
                "Filter by period": "篩選週期",
                "1 month": "1 個月",
                "6 months": "6 個月",
                "1 year": "1 年",
                "2 years": "2 年",
                "5 years": "5 年",
                "All time": "所有時間",

                "Any repository that has not been created or updated during this period will be excluded.": "在此期間未被創建或更新的任何倉庫將被排除在外。",
            "Repository type:": "倉庫類型:",
                "Filter by repository type": "篩選倉庫類型",
                "None": "無",
                "Active": "活躍",
                    "Repositories with push activity": "有推送活動的倉庫",
                "Inactive": "不活躍",
                    "Repositories with no push activity": "無推送活動的倉庫",
                "Network": "網絡",
                    "Forks of other forks": "其他復刻的復刻",
                "Archived": "存檔",
                    "Archived repositories": "已存檔的倉庫",
                "Starred": "星標",
                    "Repositories with at least 1 star": "至少有 1 個星標的倉庫",
            "Sort:": "排序:",
                "Sort by": "排序方式",
                    "Most starred": "最多星標",
                    "Recently updated": "最近更新",
                    "Open issues": "打開的議題",
                    "Open pull requests": "打開的拉取請求",
                "Defaults Saved": "默認值已保存",
                "Save Defaults": "保存默認值",

            "Never updated": "從未更新",
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Created/, "創建於"],
        [/Updated/, "更新於"],
    ],
};

// 洞察 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

I18N.zh["repository-settings-menu"] = { // 倉庫設置公共部分
    "static": { // 靜態翻譯
        // >>>>>>>>>>>>>>>>>>   倉庫設置 公共部分  <<<<<<<<<<<<<<<<<<<
            // 頂部提醒欄
            "Most repository settings are hidden for archived repositories. This repository must be unarchived to change them.": "對於存檔的倉庫，大多數倉庫設置都是隱藏的。 必須解除倉庫存檔才能更改它們。",
            "This repository has been archived by the owner. It is now read-only.": "此倉庫已由所有者存檔。它現在是隻讀的。",
            "Repository settings saved.": "倉庫設置已保存。",


            // 左側菜單
            "General": "通常",

            "Access": "訪問",
                // "Collaborators": "協作者",
                "Collaborators and teams": "協作者和團隊", // 組織倉庫
                "Team and member roles": "團隊和成員職責",  // 組織倉庫
                "Moderation options": "節制選項",
                    "Interaction limits": "互動限制",
                    "Code review limits": "程式碼審查限制",

            "Code and automation": "程式碼與自動化",
                "Branches": "分支",
                "Tags": "標籤",
                "Rules": "規則",
                    "Rulesets": "規則集",
                // "Actions": "操作",
                    // "General": "通常",
                    "Runners": "運行器",
                "Webhooks": "Web 鉤子",
                "Environments": "環境",
                "Pages": "GitHub Pages",
                "Custom properties": "自定義屬性",  // 組織倉庫

            // "Security": "安全",
                "Code security and analysis": "程式碼安全性與分析",
                "Deploy keys": "部署密鑰",
                "Secrets and variables": "機密和變量",

            "Integrations": "集成",
                "GitHub Apps": "GitHub 應用",
                "Email notifications": "郵件通知",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["repository/settings"] = { // 倉庫設置 - 通常 /<user-name>/<repo-name>/settings
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 通常 - 設置頁面 /<user-name>/<repo-name>/settings ====================================
            "Repository name": "倉庫名稱",
            "Rename": "重命名",
                // [/is available./, "名稱可用。"],
                "The repository": "倉庫",
                "already exists on this account.": "已經存在於此帳戶。",
                "Your new repository will be created as": "您的新倉庫將被創建為",
                // 頂部提醒
                "Repository name was not changed": "倉庫名稱未更改",

            "Template repository": "模板庫",
                "Template repositories let users generate new repositories with the same directory structure and files.": "模板倉庫允許用戶生成具有相同目錄結構和文件的新倉庫。",
                "A repository with LFS content cannot be used as a template.": "帶有 LFS 內容的倉庫不能作為模板使用。",
                "Learn more about template repositories": "了解更多關於模板庫的信息",

                "Require contributors to sign off on web-based commits": "要求貢獻者在基於 Web 的提交上簽署",
                "Enabling this setting will require contributors to sign off on commits made through GitHub’s web interface. Signing off is a way for contributors to affirm that their commit complies with the repository's terms, commonly the": "啟用此設置將要求貢獻者簽署通過 GitHub 的 Web 界面所做的提交。簽署是貢獻者確認他們的提交符合倉庫條款的一種方式，通常是",
                "Developer Certificate of Origin (DCO)": "開發者來源證書（DCO）",
                "Learn more about signing off on commits": "了解更多關於簽署提交的信息",

            "Default branch": "默認分支",
            "The default branch is considered the “base” branch in your repository, against which all pull requests and code commits are automatically made, unless you specify a different branch.": "默認分支被認為是倉庫中的 “基礎” 分支，所有的拉取請求和程式碼提交都是針對該分支進行的，除非您指定一個不同的分支。",
            "Rename branch": "重命名分支",
                // 重命名分支對話框
                "Rename this branch": "重命名分支",
                "Rename": "重命名",
                "to:": "為：",
                // [/is already the branch name./, "已經是分支的名稱了。"],
                // [/Your branch name will be/, "您的分支的名稱將重命名為"],
                "Most projects name the default branch": "大多數項目將默認分支名為",
                "Renaming this branch:": "重命名此分支：",
                    // 該分支存在來自其他分支的拉取請求時
                        "Will update": "將更新",
                        "pull request targeting this branch.": "條針對該分支的拉取請求。",
                        "pull requests targeting this branch.": "條針對該分支的拉取請求。",
                        "branch protection rule that explicitly targets": "條分支保護規則明確針對",

                    // 該分支存在用於其他分支的拉取請求時
                        "Will close": "將關閉",
                        "open pull request for this branch.": "個該分支的拉取請求。",

                    // 重命名 GitHub Pages 所在分支
                        "Will unpublish current GitHub Pages site.": "將取消當前發布的 GitHub Pages 站點。",
                            "Your current GitHub Pages site will become unpublished. A new commit on the renamed branch will publish the GitHub Pages site again.": "您當前的 GitHub Pages 站點將被取消發布。重命名分支上的新提交將再次發布 GitHub Pages 站點。",

                    "Will not update your members' local environments.": "不會更新您成員的本地環境。",
                "Renaming this branch will not update your members' local environments.": "重命名此分支不會更新您成員的本地環境。",
                    "Your members will have to manually update their local environments. We'll let them know when they visit the repository, or you can share the following commands.": "您的成員將不得不手動更新他們的本地環境。我們會在他們訪問倉庫時通知他們，或者您可以共享以下命令。",
                "Saving…": "保存中…",

            "Switch to another branch": "切換到另一分支",
                // 分支切換對話框
                "Switch default branch to another branch": "將默認分支切換到另一分支",
                // [/Choose another branch to use as the default branch of ([^ ]+) instead of/,"選擇另一分支作為 $1 的默認分支而不是"], // 分支切換 對話框
                "Update": "更新",
                "Switch default branch": "切換默認分支",
                "Filter branches": "篩選分支",
                "default": "默認",
                // 更新默認分支對話框
                "Update default branch": "更新默認分支",
                "Changing your default branch": "更改您的默認分支",
                "can have unintended consequences that can affect new pull requests and clones.": "可能會產生意想不到的後果，影響新的拉取請求和克隆。",
                "I understand, update the default branch.": "我明白了，依然更新默認分支",
                // 頂部提醒
                    // [/Default branch changed to ([^ ])/, "默認分支更改為 $1"]

            "Social preview": "社交預覽",
            // 關於私有庫提醒
            "You can upload a social image, but it will not be visible publicly while": "您可以上傳社交圖片，但當",
            "is private.": "是私密時，它不會公開顯示。",
            "Upload an image to customize your repository’s social media preview.": "上傳圖像以自定義倉庫的社交媒體預覽。",
            "Images should be at least 640×320px (1280×640px for best display).": "圖片至少應為 640×320 像素（1280×640 像素以獲得最佳顯示效果）。",
            "Download template": "下載模板",
            "Edit": "編輯",
                "Upload an image…": "上傳圖片…",
                "Remove image": "刪除圖片",

            "Features": "功能",
            // "Wikis": "",
                "Wikis host documentation for your repository.": "Wikis 為您的倉庫託管文檔。",
                "Restrict editing to collaborators only": "僅限協作者進行編輯",
                "Restrict editing to users in teams with push access only": "僅限具有推送訪問權限的團隊中的成員進行編輯", //組織倉庫
                    "Public wikis will still be readable by everyone.": "公共 Wikis 仍然可供所有人閱讀。",

            // 私人庫 啟用 Wiki 提醒
                "Upgrade or make this repository public to enable Wikis": "升級或公開此倉庫，以啟用 Wiki",
                "GitHub Wikis is a simple way to let others contribute content. Any GitHub user can create and edit pages to use for documentation, examples, support, or anything you wish.": "GitHub Wikis 是一種讓他人貢獻內容的簡單方法。任何 GitHub 用戶都可以創建和編輯頁面，用於文檔、示例、支持或任何您想要的東西。",
                // "Upgrade": "升級",
                    "Learn more about wikis": "了解更多關於 Wiki 的信息",

            // 議題
            "Issues integrate lightweight task tracking into your repository. Keep projects on track with issue labels and milestones, and reference them in commit messages.": "議題將輕量級任務跟蹤集成到您的倉庫中。使用議題標籤和里程碑保持項目正常運行，並在提交消息中引用它們。",
            "Get organized with issue templates": "使用議題模板進行組織",
            "Give contributors issue templates that help you cut through the noise and help them push your project forward.": "為貢獻者提供議題模板，幫助您消除干擾並幫助他們推進您的項目。",
            "Set up templates": "設置模板",

            "Allow forking": "允許復刻", // 組織倉庫
            "If disabled, existing forks will be unaffected.": "如果禁用，現有復刻將不受影響。", // 組織倉庫

            // 贊助
            "Sponsorships": "贊助",
            "Sponsorships help your community know how to financially support this repository.": "贊助可幫助您的社區了解如何在資金上支持此倉庫。",
            "Display a \"Sponsor\" button": "顯示 “贊助” 按鈕",
            "Add links to GitHub Sponsors or third-party methods your repository accepts for financial contributions to your project.": "添加指向 GitHub 贊助者或您的倉庫接受的第三方收款鏈接，以便為您的項目提供資金捐助。",
            "Set up sponsor button": "設置贊助按鈕",

            // 項目
            "Projects on GitHub help you organize and prioritize your work. You can create projects for specific feature work, comprehensive roadmaps, or even release checklists.": "GitHub 上的項目可以幫助您組織工作並確定其優先次序。您可以為特定的功能工作、全面的路線圖、甚至是發布清單創建項目",

            "Preserve this repository": "保留這個倉庫",
            "Include this code in the": "將此程式碼包含在",
            "GitHub Archive Program": "GitHub 存檔計劃中",

            "Table of contents": "目錄",
            "Autogenerate table of contents for markdown files in this repository. the table of contents will be displayed near the top of the file.": "自動生成此倉庫中 Markdown 文件的目錄。目錄將顯示在文件頂部附近。",

            // "Discussions": "討論",
            "Discussions is the space for your community to have conversations, ask questions and post answers without opening issues.": "討論是您的社區進行對話、提問和發布答案的地方，而無需打開議題。",
            "Get started with Discussions": "開始討論",
            "Engage your community by having discussions right in your repository, where your community already lives": "通過在您的社區已經存在的倉庫中進行討論來吸引您的社區",
            "Set up discussions": "建立討論",

            // 項目
            "Projects on GitHub are created at the repository owner's level (organization or user) and can be linked to a repository's Projects tab. Projects are suitable for cross-repository development efforts such as feature work, complex product roadmaps or even Issue triage.": "GitHub 上的項目是在倉庫所有者級別（組織或用戶）創建的，並且可以鏈接到倉庫的項目選項卡。項目適用於跨倉庫的開發工作，例如功能工作、複雜的產品路線圖，甚至問題分流。",

            // "Pull Requests": "拉取請求",
                "When merging pull requests, you can allow any combination of merge commits, squashing, or rebasing. At least one option must be enabled. If you have linear history requirement enabled on any protected branch, you must enable squashing or rebasing.": "當合併拉取請求時，您可以允許合併提交、壓縮或變基的任意組合。必須至少啟用一個選項。如果您在任何受保護分支上啟用了線性歷史要求，則必須啟用壓縮或變基。",

                "You must select at least one option": "您必須至少選擇一個選項",
                "Allow merge commits": "允許合併提交",
                    "Add all commits from the head branch to the base branch with a merge commit.": "使用合併提交將所有從頭部分支的提交添加到基礎分支。",
                        "Default commit message": "默認提交信息",
                            "Presented when merging a pull request with merge.": "當合併拉取請求時時出現。",
                        "Default message": "默認信息",
                        "Pull request title": "拉取請求標題",
                        "Pull request title and commit details": "拉取請求標題和提交詳情",
                        "Pull request title and description": "拉取請求標題和描述",

                "Allow squash merging": "允許壓縮合併",
                    "Combine all commits from the head branch into a single commit in the base branch.": "將來自頭部分支的所有提交合併到基礎分支中的單個提交中。",
                        // "Default commit message": "默認提交信息",
                            "Presented when merging a pull request with squash.": "當使用壓縮合併拉取請求時顯示。",
                        "Default to pull request title and commit details": "默認為拉取請求標題和提交詳細信息",

                    "Default to PR title for squash merge commits": "默認將拉取請求的標題作為壓縮合併提交的信息",
                    "This will pre-populate the commit message with the PR title when performing a squash merge.": "在執行壓縮合併時，將在提交信息中添加拉取請求的標題。",

                "Allow rebase merging": "允許變基合併",
                    "Add all commits from the head branch onto the base branch individually.": "將來自頭部分支的所有提交單獨添加到基礎分支。",

                "Control how and when users are prompted to update their branches if there are new changes available in the base branch.": "如果基礎分支中有可用的新更改，則控制提示用戶更新其分支的方式和時間。",
                "Always suggest updating pull request branches": "始終建議更新拉取請求分支",
                    "Whenever there are new changes available in the base branch, present an “update branch” option in the pull request.": "每當基礎分支中有可用的新更改時，就在拉取請求中顯示 “更新分支” 選項。",

                "You can allow setting pull requests to merge automatically once all required reviews and status checks have passed.": "一旦所有必需的審查和狀態檢查都通過，您可以允許設置拉取請求自動合併。",

                "Allow auto-merge": "允許自動合併",
                    "Waits for merge requirements to be met and then merges automatically.": "等待滿足合併要求，然後自動合併。",
                    "Why is this option disabled?": "為什麼該選項被禁用？",

                "After pull requests are merged, you can have head branches deleted automatically.": "合併拉取請求後，您可以自動刪除頭部分支。",

                    "Automatically delete head branches": "自動刪除頭部分支",
                        "Deleted branches will still be able to be restored.": "刪除的分支仍然可以恢復。",

            "Archives": "檔案",
            "When creating source code archives, you can choose to include files stored using Git LFS in the archive.": "創建源程式碼存檔時，您可以選擇在存檔中包含使用 Git LFS 存儲的文件。",

            "Include Git LFS objects in archives": "在檔案中包含 Git LFS 對象",
            "Git LFS usage in archives is billed at the same rate as usage with the client.": "歸檔中的 Git LFS 使用率與客戶端的使用率相同。",

            "Pushes": "推送",
            "Limit how many branches and tags can be updated in a single push": "限制一次推送中可以更新多少個分支和標籤",
                "Pushes will be rejected if they attempt to update more than this.": "如果推送嘗試更新超過該值，則推送將被拒絕。",
                "Learn more about this setting": "了解更多關於此設置的信息",
                ", and send us your": "，並向我們發送您的",
                "feedback": "反饋",

                "Up to": "在一次推送中最多可以更新",
                "branches and tags can be updated in a push": "個分支和標籤",

                // 提醒
                "Must be a whole number between 2 and 1000": "必須是 2 到 1000 之間的整數",

            "Danger Zone": "危險區",
            "Change repository visibility": "更改倉庫可見性",
            "You cannot change the visibility of a fork. please": "您無法更改復刻倉庫的可見性。請",
            "Duplicate the repository": "複製倉庫",
            "For security reasons, you cannot change the visibility of a fork.": "出於安全原因，您無法更改復刻倉庫的可見性。",

            // 更改倉庫可見性對話框
            "Change visibility": "更改可見性",
                "Change to private": "更改為私有",
                "Change to public": "更改為公開",
            "This repository is currently public.": "該倉庫當前是公開的。",
            "This repository is currently private.": "該倉庫當前是私有的。",
            "I want to make this repository public": "我想將此倉庫設為公開",
                "The code will be visible to everyone who can visit https://github.com": "所有可以訪問 https://github.com 的人都可以看到程式碼",
                "Attachments uploaded to this repository's issues and pull requests will not be accessible unless it is made private again.": "上傳到此倉庫的議題和拉取請求的附件將無法訪問，除非再次設為私有。",
                "Anyone can fork your repository.": "任何人都可以復刻您的倉庫。",
                "All push rulesets will be disabled.": "所有推送規則集都將被禁用。",
                "Your changes will be published as activity.": "您的更改將作為活動發布。",
                "Make this repository public": "我想將此倉庫設為公開",
            "I want to make this repository private": "我想將此倉庫設為私有",
                "Making this repository private could permanently erase these counts by removing stars and watchers associated to users that will no longer have access to this repository:": "該倉庫私有化，將會通過解除星標者和關注者，刪除這些計數。他們將無法訪問該倉庫：",
                    "star": "星標者",
                    "stars": "星標者",
                    "watcher": "關注者",
                    "watchers": "關注者",
                "If you decide to make this repository public in the future, it will not be possible to restore these stars and watchers and this will affect its repository rankings.": "即使您決定將來公開此倉庫，也無法恢復這些星標者和關注者，這將影響其倉庫排名。",
                "Dependency graph and Dependabot alerts will remain enabled with permission to perform read-only analysis on this repository.": "依賴關係圖和 Dependabot 警報將保持啟用，並有權限對該倉庫進行只讀分析。",
                "Dependency graph and Dependabot alerts will remain enabled with permission to perform read-only analysis on this repository. Any custom Dependabot alert rules will be disabled unless GitHub Advanced Security is enabled for this repository.": "依賴關係圖和 Dependabot 警報將繼續啟用，並允許對該倉庫執行只讀分析。除非為該倉庫啟用了 GitHub 高級安全功能，否則任何自定義的 Dependabot 警報規則都將被禁用。",
                "Code scanning will become unavailable.": "程式碼掃描將變得不可用。",
                "Current forks will remain public and will be detached from this repository.": "當前的復刻將保持公開，並將從該倉庫中分離出來。",
                "Make this repository private": "將此倉庫設為私有",
                "I have read and understand these effects": "我已閱讀並理解這些影響",

                "Warning: this is a destructive action": "警告：這是一個破壞性的行為",
                "To confirm, type the number of stars on this repository in the box below": "要確認，請在下面的框中輸入此倉庫的星標數",

            "Disable branch protection rules": "禁用分支保護規則",
                "Disable branch protection rules enforcement and APIs": "禁用分支保護規則執行和 API",

                // 頂部提醒
                    "Branch protection settings saved.": "分支保護設置已保存。",

            // 禁用分支保護對話框
                "This will hide the branch protection settings and disable branch protection rules for this repository.": "這將隱藏分支保護設置，並禁用該倉庫的分支保護規則。",
                "Disabling branch protection rules allows you to enforce branch and tag protections exclusively with Repository Rules.": "禁用分支保護規則後，允許您僅使用倉庫規則來執行分支和標籤保護。",

                "This action will disable:": "此操作將禁用：",
                    "Branch protection rule enforcement": "分支保護執行",
                    "Branch protection rule APIs": "分支保護 API",
                // [/(\d+) branch protection rules?/, "$1 項分支保護規則"],
                "will be disabled as part of this action": "作為此操作的一部分將被禁用",

            "Re-enable branch protection rules": "重新啟用分支保護規則",
                "Re-enable branch protection rules enforcement and APIs": "重新啟用分支保護規則執行和 API",

            // 重新啟用分支保護對話框
                "Re-enable branch protection": "重新啟用分支保護",
                "will be re-enabled as part of this action": "作為此操作的一部分將被重新啟用",

            "Transfer ownership": "轉讓所有權",
            "Transfer": "轉讓",
            "Transfer this repository to another user or to an organization where you have the ability to create repositories.": "將此倉庫轉讓給另一位用戶或您可以創建倉庫的組織。",

            "Archive this repository": "存檔倉庫",
            "Mark this repository as archived and read-only.": "將此倉庫標記為已存檔和只讀。",

            // 存檔倉庫對話框
            "Archive repository": "存檔倉庫",
            "This repository will become read-only.": "該倉庫將設置為只讀。",
            "You will still be able to fork the repository and unarchive it at any time.": "您仍然可以隨時訪問復刻倉庫並取消存檔。",
            "Unexpected bad things will happen if you don’t read this!": "如果您不閱讀此說明，將會發生意想不到的事情！",
            "All scheduled workflows will stop running.": "所有預定的工作流程將停止運行。",
            "Security features will be unavailable:": "安全功能將無法使用：",
            "Code scanning": "程式碼掃描",
            "Before you archive, please consider:": "在您存檔之前，請考慮：",
            "Updating any repository settings": "更新倉庫設置",
            "Closing all open issues and pull requests": "關閉所有打開的議題和拉取請求",
            "Making a note in your README": "在您的 README 中做個說明",
            "Please type": "請鍵入",
            "to confirm.": "進行確定。",
            "I understand the consequences, archive this repository": "我明白後果，依然存檔該倉庫",
            // "This repository has been archived by the owner. It is now read-only.": "此倉庫已由所有者存檔。它現在是隻讀的。",

            // 頂部提醒
            // [/Your repository \"([^ ]+)\" was successfully archived./, "您的倉庫 “$1” 已成功存檔。"], //倉庫存檔

            "Unarchive this repository": "解除倉庫存檔",
            "Mark this repository as unarchived and read-write.": "將此倉庫標記為未存檔和可讀寫。",

            // 解除倉庫存檔對話框
            "Unarchive repository": "解除倉庫存檔",
            "This will make": "這將使",
            "read-write.": "可讀寫。",
            "Once unarchived, the following can be modified and commented on:": "一旦解除存檔，就可以對以下內容進行修改和評論：",
            "Pull Requests": "拉取請求",
            "Labels": "標籤",
            "Releases": "發行版",
            "Milestones": "里程碑",
            "Security features will become available:": "安全功能將不可用：",
            "I understand the consequences, unarchive this repository": "我明白後果，依然解除該倉庫存檔",

            "Delete this repository": "刪除倉庫",
            "Once you delete a repository, there is no going back. Please be certain.": "您一旦刪除倉庫，將再也無法恢復。請確認。",

            // 頂部提醒
            // [/Your repository \"([^ ]+)\" was successfully unarchived./, "您的倉庫 “$1” 已成功解除存檔。"], //倉庫解除存檔

            // 刪除倉庫對話框
                // [/Delete/, "刪除"],
                "I want to delete this repository": "我想刪除這個倉庫",

                "This will permanently delete the": "這將永久刪除",
                "repository, wiki, issues, comments, packages, secrets, workflow runs, and remove all collaborator associations.": "倉庫、Wiki、議題、評論、軟件包、密鑰、工作流程，並刪除所有協作者關聯。",
                "repository, wiki, issues, comments, packages, secrets, workflow runs, and remove all team associations.": "倉庫、Wiki、議題、評論、軟件包、密鑰、工作流程，並刪除所有團隊關聯。", // 組織倉庫
                "This will not change your billing plan. If you want to downgrade, you can do so in your Billing Settings.": "這並不會更改您的結算方案。 如果您想降級，可以在結算設置中進行降級。",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/is available./, "名稱可用。"],
        [/Make ([^ ]+) private/, "將 $1 設為私有"],
        [/Make ([^ ]+) public/, "將 $1 設為公開"],
        [/(\d+) stars?/, "$1 位星標者"],
        [/(\d+) watchers?/, "$1 位關注者"],
        [/To confirm, type \"([^ ]+)\" in the box below/, "要確認，請在下面的方框中輸入 \"$1\""],
        [/Your repository \"([^ ]+)\" was successfully archived./, "您的倉庫 “$1” 已成功存檔。"], //倉庫存檔
        [/Your repository \"([^ ]+)\" was successfully unarchived./, "您的倉庫 “$1” 已成功解除存檔。"], //倉庫解除存檔
        [/is already the branch name./, "已經是分支的名稱了。"],
        [/Your branch name will be/, "您的分支的名稱將重命名為"],
        [/Choose another branch to use as the default branch of ([^ ]+) instead of/,"選擇另一分支作為 $1 的默認分支而不是"], // 分支切換 對話框
        [/(\d+) branch protection rules?/, "$1 項分支保護規則"], // 禁用/重啟啟用分支保護
        [/Delete/, "刪除"],
        [/Default branch changed to ([^ ])/, "默認分支更改為 $1"],
    ],
};

I18N.zh["repository/settings/access"] = { // 倉庫設置 - 協作者/(組織倉庫 協作者和團隊) /<user-name>/<repo-name>/settings/access
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 協作者 / 協作者和團隊 - 訪問管理頁面 /<user-name>/<repo-name>/settings/access ====================================
            // 頂部提醒
                "Repository invitation URLs work for invited users only. You may only share this URL with an invited user.": "倉庫邀請 URL 僅適用於受邀請的用戶。您只能與受邀請的用戶共享此 URL。",

            "Who has access": "誰有權訪問",
            "public repository": "公共倉庫",
            "This repository is public and visible to anyone.": "該倉庫是公開的，對任何人都可見。",
            "private repository": "私有倉庫",
            "Only those with access to this repository can view it.": "只有擁有該倉庫訪問權的用戶才能查看。",
            "Manage": "管理",

            "Direct access": "直接訪問",
            "collaborators have access to this repository. Only you can contribute to this repository.": "個協作者有權訪問此倉庫。 只有您可以對此倉庫做出貢獻。",
            "has access to this repository.": "位有權訪問此倉庫。",
            // 組織倉庫
            "teams or members have access to this repository. Only": "團隊或成員有權訪問此倉庫。只有",
            "Owners": "所有者",
            "can contribute to this repository.": "可以為此倉庫做出貢獻。",

            // 組織倉庫
            "Base role": "基本角色",
            "All": "所有",
            // [/(\d+) members?/, "$1 位成員"],
            "can access this repository.": "可以訪問此倉庫。",

            "Manage access": "訪問管理",
            "You haven't invited any collaborators yet": "您尚未邀請任何協作者",
            // "invite a collaborator": "邀請協作者",
            "Add people": "添加他人",

            "Select all": "全選",
                // [/(\d+) members? selected…/, "已選擇 $1 名成員..."],
                "Remove Access": "刪除訪問權限",
            "Type": "類型",
                "Filter by member type": "按成員類型篩選",
                    "Pending Invitations": "待處理邀請",
            "Find a collaborator…": "尋找協作者...",

            "Pending Invite": "待處理邀請",
            // [/Awaiting ([^ ]+)’s response/, "等待 $1 的回覆"],
            "Remove": "移除",

            // 邀請對話框
                "Add a collaborator to": "添加協作者到",
                "Search by username, full name, or email": "搜索用戶名、全名、或電子郵箱",
                "Select a collaborator above": "從上方選擇協作者",
                "Invite collaborator": "邀請協作者",
                "Add": "添加",
                "to this repository": "到這個倉庫",

            // 組織倉庫
            "Create team": "創建組織",
            "You haven't added any teams or people yet": "您尚未添加團隊或成員",
            "Organization owners can manage individual and team access to the organization's repositories. Team maintainers can also manage a team's repository access.": "組織所有者可以管理成員和團隊對組織倉庫的訪問。團隊維護者也可以管理一個團隊的倉庫訪問。",
            "Learn more about organization access": "了解更多關於組織訪問權限的信息",
            "Add teams": "添加團隊",

            "Add people to": "添加成員到",
            "Select a member above": "在上面選擇一名成員",
            "Add teams to": "添加團隊",
            "Search by team name": "按團隊名稱搜索",
            "Select a team above": "在上面選擇一個團隊",

    },
    "regexp": [ // 正則翻譯
        [/(\d+) members? selected…/, "已選擇 $1 名成員..."],
        [/(\d+) members?/, "$1 位成員"],
        [/(\d+) collaborators?/, "$1 位合作者"],
        [/(\d+) invitations?/, "$1 個邀請"],
        [/Awaiting ([^ ]+)’s response/, "等待 $1 的回覆"],
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/settings/interaction_limits"] = { // 倉庫設置 - 互動限制 /<user-name>/<repo-name>/settings/interaction_limits
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 審查設置 (倉庫)互動限制 /<user-name>/<repo-name>/settings/interaction_limits
        // 同全局 同組織倉庫
            "Temporary interaction limits": "臨時互動限制",
            "Temporarily restrict which external users can interact with your repository (comment, open issues, or create pull requests) for a configurable period of time.": "在配置的時間段內，可臨時限制哪些外部用戶與您的倉庫互動（評論、打開議題或創建拉取請求）。",
            "This may be used to force a \"cool-down\" period during heated discussions or prevent unwanted interactions.": "可用於在激烈討論期間，強制進入 “冷靜” 期或防止不必要的互動。",

            "You can restrict repository interactions across your account in your": "您可以限制倉庫交互，在您的帳戶設置中的",
            "account settings": "互動限制",

            // [/You can restrict repository interactions across the ([^ ]+) organization in your/, "您可以在您的 $1 組織中限制倉庫交互"],

            "Limit to existing users": "僅限現有用戶",
                "Users that have recently created their account will be unable to interact with the repository.": "最近創建帳戶的用戶將無法與該倉庫互動。",
            "Limit to prior contributors": "僅限于先前的貢獻者",
                "Users that have not previously": "以前從未",
                "committed": "提交",
                // [/to the ([^ ]+) branch of this repository will be unable to interact with the repository./, "到該倉庫的 $1 分支的用戶將無法與該倉庫互動。"],
            "Limit to repository collaborators": "僅限倉庫協作者",
                "Users that are not": "不是",
                // "collaborators": "",
                // "of one of your repositories will not be able to interact with that repository.": "",
                "will not be able to interact with the repository.": "將無法與該倉庫互動。",

            "New users": "新用戶",
            "Users": "用戶",
            "Contributors": "貢獻者",
            "Collaborators": "協作者",
            "Organization members": "組織成員", //組織倉庫

            "Enable": "啟用",
            "Disable": "禁用",
            // 交互限制時間 下拉菜單
            "Enable interaction limits for:": "啟用交互限制：",
            "24 hours": "24 小時",
            "3 days": "3 天",
            "1 week": "1 周",
            "1 month": "1 個月",
            "6 months": "6 個月",

            // 頂部提醒
            "Repository interaction limit settings saved.": "倉庫交互限制設置已保存。",
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
            [/You can restrict repository interactions across the ([^ ]+) organization in your/, "您可以在您的 $1 組織中限制倉庫交互"],
            [/to the ([^ ]+) branch of this repository will be unable to interact with the repository./, "到該倉庫的 $1 分支的用戶將無法與該倉庫互動。"],
    ],
};

I18N.zh["repository/settings/code_review_limits"] = { // 倉庫設置 - 程式碼審查限制 /<user-name>/<repo-name>/settings/code_review_limits
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // Code review limits 程式碼審查限制 /<user-name>/<repo-name>/settings/code_review_limits
            "Restrict users who are permitted to approve or request changes on pull requests in this repository.": "限制允許批准或請求更改該倉庫中拉取請求的用戶。",
            "Limit to users explicitly granted": "限於明確授予",
            "read": "讀取",
            "or higher access": "或 更高權限的用戶",
                "When enabled, only users explicitly granted access to this repository will be able to submit pull request reviews that \"approve\" or \"request changes\". All users able to submit comment pull request reviews will continue to be able to do so.": "啟用後，只有被明確授予該倉庫訪問權的用戶才能提交 “批准” 或 “請求更改” 的拉取請求審查。所有能夠提交評論拉取請求審查的用戶將繼續能夠這樣做。",

            // 頂部提醒
                "Code review limit settings saved.": "程式碼審查限制設置已保存。",
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/settings/branches"] = { // 倉庫設置 - 分支 /<user-name>/<repo-name>/settings/branches
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 分支管理頁面 /<user-name>/<repo-name>/settings/branches====================================
            "Branch protection rules": "分支保護規則",
            "Add rule": "添加規則",

            "Define branch protection rules to disable force pushing, prevent branches from being deleted, and optionally require status checks before merging. New to branch protection rules?": "定義分支保護規則，以禁止強制推送，防止分支被刪除，並可選擇要求在合併前進行狀態檢查。初次接觸分支保護規則？",

            "No branch protection rules defined yet.": "尚未定義分支保護規則。",

            "You haven't protected any of your branches": "您沒有保護任何分支",
            "Define a protected branch rule to disable force pushing, prevent branches from being deleted, and optionally require status checks before merging.": "定義分支保護規則，以禁用強制推送，防止分支被刪除，並可選擇在合併前進行狀態檢查。",
            "Learn more about protected branches": "了解更多關於受保護分支的信息",
            "Add branch protection rule": "添加分支保護規則",

            // 私有庫 分支保護 未執行 提醒
            "Your protected branch rules won't be enforced on this private repository until you move to a GitHub Team or Enterprise organization account.": "您的受保護分支規則不會在這個私有倉庫上執行，直到您遷移至 GitHub 團隊或企業組織賬戶。",
            "Move to an organization": "轉移到組織",

            "Not enforced": "未執行",
                "Rules on your private repos can't be enforced until you upgrade to GitHub Team or Enterprise.": "在您升級到 GitHub 團隊或企業版之前，您的私有倉庫的規則不能被執行。",

            // [/Currently applies to (\d+) branchs?/, "目前適用於 $1 個分支"], // 倉庫設置-->分支-->分支保護規則

            // 刪除分支保護規則
            "Delete this branch protection rule?": "刪除此分支保護規則？",
            "This action cannot be undone.": "此操作無法撤消。",
            "I understand, delete this rule.": "我明白了，依然刪除此規則。",

            // 頂部提醒
            "Branch protection rule settings saved.": "分支保護規則設置已保存。",
            "Branch protection rule created.": "分支保護規則已創建。",
            "Branch protection rule was successfully deleted.": "分支保護規則已成功刪除。",


    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Currently applies to (\d+) branch(?:es|)/, "目前適用於 $1 個分支"], // 倉庫設置-->分支-->分支保護規則
    ],
};

I18N.zh["repository/settings/branch_protection_rules"] = { // 倉庫設置 - 分支/分支保護 /<user-name>/<repo-name>/settings/branch_protection_rules
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 新建分支保護規則 頁面 /<user-name>/<repo-name>/settings/branch_protection_rules/new====================================
            "Branch protection rule": "分支保護規則",

            "Protect your most important branches": "保護您最重要的分支",
                "Branch protection rules": "分支保護規則",
                "define whether collaborators can delete or force push to the branch and set requirements for any pushes to the branch, such as passing status checks or a linear commit history.": "定義協作者是否可以刪除或強制推送到分支，並對任何推送到分支的內容設置要求，如通過狀態檢查或線性提交歷史。",

                "Your GitHub Free plan": "您的 GitHub 免費計劃",
                "Your organization's GitHub Free plan": "您組織的 GitHub 免費計劃", // 組織倉庫
                "can only enforce rules on its public repositories, like this one.": "只能對其公共倉庫執行規則，例如這個。",

                "Your rules won't be enforced on this private repository until you": "您的規則將不會在此私有倉庫上強制執行，直到您",
                "move to a GitHub Team or Enterprise organization account": "遷移至 GitHub 團隊或企業組織賬戶",
                "upgrade this organization to GitHub Team or Enterprise": "升級組織至 GitHub 團隊或企業版", // 組織倉庫

            "Branch name pattern": "分支名稱模式",
            "Protect matching branches": "保護匹配的分支",
                "Require a pull request before merging": "要求在合併前提交拉取請求",
                    "When enabled, all commits must be made to a non-protected branch and submitted via a pull request before they can be merged into a branch that matches this rule.": "啟用後，所有提交都必須提交到不受保護的分支，並通過拉取請求提交，然後才能將它們合併到與此規則匹配的分支中。",
                    "Require approvals": "要求批准審查",
                        "When enabled, pull requests targeting a matching branch require a number of approvals and no changes requested before they can be merged.": "啟用後，針對匹配分支的拉取請求需要若干次批准審查，並且在合併之前無需請求更改。",
                        "Required number of approvals before merging:": "合併前所需的批准審查數量：",
                    "Dismiss stale pull request approvals when new commits are pushed": "當新的提交被推送時，撤銷陳舊的拉取請求批准審查",
                        "New reviewable commits pushed to a matching branch will dismiss pull request review approvals.": "推送到匹配分支的新的可審查提交將撤銷之前的拉取請求的批准審查。",
                    "Require review from Code Owners": "要求程式碼所有者進行審查",
                        "Require an approved review in pull requests including files with a designated code owner.": "要求在拉取請求中進行批准審查，包括有指定程式碼所有者的文件。",
                    "Restrict who can dismiss pull request reviews": "限制誰可以駁回拉取請求審查", // 組織倉庫
                        "Specify people, teams, or apps allowed to dismiss pull request reviews.": "指定允許駁回拉取請求審查的人員、團隊或應用。",
                        "People, teams, or apps that can dismiss reviews.": "允許駁回審查的人員、團隊或應用。",
                            "Organization and repository administrators": "組織和倉庫管理員",
                                "These members can always dismiss.": "這些成員總是允許駁回。",
                                "These members cannot dismiss.": "這些成員不允許駁回。",
                    "Allow specified actors to bypass required pull requests": "允許指定的參與者繞過所需的拉取請求", //組織倉庫
                        "Specify people, teams, or apps who are allowed to bypass required pull requests.": "指定允許繞過所需拉取請求的人員、團隊或應用。",
                        "People, teams, or apps who can bypass required pull requests": "允許繞過所需拉取請求的人員、團隊或應用",
                            // "Organization and repository administrators": "組織和倉庫管理員",
                                "These members can always bypass required pull requests.": "這些成員始終允許繞過所需的拉取請求。",
                                "These members cannot bypass.": "這些成員不允許繞過。",
                    "Require approval of the most recent reviewable push": "要求批准最新的可審查推送",
                        "Whether the most recent reviewable push must be approved by someone other than the person who pushed it.": "最新的可審核推送是否必須得到推送者以外的其他人批准。",
                "Require status checks to pass before merging": "要求在合併前通過狀態檢查",
                    "Choose which": "選擇那些",
                    "status checks": "狀態檢查",
                    "must pass before branches can be merged into a branch that matches this rule. When enabled, commits must first be pushed to another branch, then merged or pushed directly to a branch that matches this rule after status checks have passed.": "必須通過，才能將分支合併到符合此規則的分支。啟用後，提交的內容必須先推送到另一個分支，然後在狀態檢查通過後再合併或直接推送到符合此規則的分支。",

                    "Require branches to be up to date before merging": "要求分支在合併前必須是最新的",
                        "This ensures pull requests targeting a matching branch have been tested with the latest code. This setting will not take effect unless at least one status check is enabled (see below).": "這可確保針對匹配分支的拉取請求已使用最新的程式碼進行了測試。除非啟用了至少一個狀態檢查，否則這個設置不會生效（見下文）。",

                    "Search for status checks in the last week for this repository": "搜索此倉庫最近一周的狀態檢查",
                    "Status checks that are required.": "需要進行的狀態檢查。",

                    "No status checks found": "尚無狀態檢查",
                        "Sorry, we couldn’t find any status checks in the last week for this repository.": "抱歉，我們最近一周未找此倉庫的任何狀態檢查。",
                    "Learn more about status checks": "了解更多關於狀態檢查的信息",
                "Require conversation resolution before merging": "要求在合併前解決對話",
                    "When enabled, all conversations on code must be resolved before a pull request can be merged into a branch that matches this rule.": "啟用後，必須先解決所有有關程式碼的對話，然後才能將拉取請求合併到與此規則匹配的分支中。",
                    "Learn more about requiring conversation completion before merging": "了解更多關於合併前要求完成對話的信息",
                "Require signed commits": "要求帶簽名的提交",
                    "Commits pushed to matching branches must have verified signatures.": "推送到匹配分支的提交必須帶有經過驗證的簽名。",
                "Require linear history": "要求線性歷史記錄",
                    "Prevent merge commits from being pushed to matching branches.": "防止合併後的提交被推送到匹配的分支。",
                "Require merge queue": "要求合併隊列", // 組織倉庫
                    "Merges to matching branches must be performed via a merge queue.": "對匹配分支的合併必須通過合併隊列執行。",
                    "Make sure to configure your CI to build branches created by the queue.": "確保您配置 CI 以構建由隊列創建的分支",
                    "Merge method": "合併模式",
                        "Method to use when merging changes from queued pull requests.": "合併來自列隊拉取請求的更改時使用的模式。",
                        "Method:": "模式：",
                            "Merge commit": "合併提交",
                            "Squash and merge": "壓縮合併",
                            "Rebase and merge": "變基合併",
                    "Build concurrency": "構建併發",
                        "Limit the number of queued pull requests building at the same time.": "限制同時構建的列隊拉取請求的數量。",
                        "Maximum pull requests to build:": "構建的最大拉取請求：",
                    "Merge limits": "合併限制",
                        "Limit the number of pull requests merged into the protected branch in a single merge operation.": "限制在單個合併操作中合併到受保護分支的拉取請求的數量。",
                        "Minimum pull requests to merge:": "合併的最小拉取請求：",
                            "or after": "或",
                            "minutes": "分鐘之後",
                        "Maximum pull requests to merge:": "合併的最大拉取請求：",
                        "Only merge non-failing pull requests": "僅合併未失敗的拉取請求",
                    "Status check timeout": "狀態檢查超時",
                        "Time (in minutes) a required status check must report a conclusion within to not be considered failed.": "所需的狀態檢查必須在規定的時間（以分鐘為單位）內報告結論才不會被視為失敗。",
                        "Consider check failed after:": "考慮檢查失敗：",
                "Require deployments to succeed before merging": "要求部署成功後再合併",
                    "Choose which environments must be successfully deployed to before branches can be merged into a branch that matches this rule.": "選擇必須成功部署到哪些環境才能將分支合併到與此規則匹配的分支中。",
                            "No deployment environments found": "尚無部署環境",
                            "Sorry, we couldn’t find any deployments for this repository.": "抱歉，我們未找到此倉庫的任何部署。",
                            "Deployment environments found in this repository": "在此倉庫中找到的部署環境",
                                "Required": "必須",
                "Lock branch": "鎖定分支",
                    "Branch is read-only. Users cannot push to the branch.": "分支為只讀。用戶無法推送到該分支。",
                "Do not allow bypassing the above settings": "不允許繞過上述設置",
                    "The above settings will apply to administrators and custom roles with the \"bypass branch protections\" permission.": "上述設置將應用於具有 “繞過分支保護” 權限的管理員和自定義角色。",
                "Restrict who can push to matching branches": "限制誰可以推送到匹配的分支", // 組織倉庫
                    "Specify people, teams, or apps allowed to push to matching branches. Required status checks will still prevent these people, teams, and apps from merging if the checks fail.": "指定允許推送到匹配分支的人員、團隊或應用。如果檢查失敗，所需的狀態檢查仍然會阻止這些人、團隊和應用的合併。",

                    "Restrict pushes that create matching branches": "限制創建匹配分支的推送",
                        "Only people, teams, or apps allowed to push will be able to create new branches matching this rule.": "只有允許推送的人員、團隊或應用才能創建符合此規則的新分支。",
                        "People, teams, or apps with push access": "允許推送的人員、團隊或應用",
                            "Organization administrators, repository administrators, and users with the Maintain role.": "組織管理員、倉管理員和具有維護角色的用戶。",
                            "Organization administrators, repository administrators, the merge queue, and users with the Maintain role.": "組織管理員、倉管理員、合併隊列和具有維護角色的用戶。", // 開啟需要合併隊列
                                "Admins can always push. Users with the Maintain role can push when required status checks pass.": "管理員始終允許推送。具有維護角色的用戶允許在所需狀態檢查通過時推送。",
                                "These members can push when required status checks pass.": "這些成員允許在所需狀態檢查通過時推送。",

            "Rules applied to everyone including administrators": "規則適用於每個人，包括管理員",
                "Allow force pushes": "允許強制推送",
                    "Everyone": "所有人",
                        "Permit force pushes for all users with push access.": "允許所有有推送權限的用戶強制推送。",
                    "Specify who can force push": "指定誰允許強制推送",
                        "Only these people, teams, or apps are allowed to force push.": "僅允許這些人、團隊或應用強制推送。",
                        "Search for people, teams, or apps": "搜索人員、團隊或應用",
                        "People, teams, or apps who can force push": "允許強制推送的人員、團隊或應用",
                            "Organization and repository administrators (automatic)": "組織和倉庫管理員（自動）",
                "Allow deletions": "允許刪除",
                    "Allow users with push access to delete matching branches.": "允許具有推送權限的用戶刪除匹配的分支。",

            "Create": "創建",

            // 頂部提醒
            "Branch protection rule created.": "分支保護規則已創建。",

        // 編輯分支保護規則 頁面 /<user-name>/<repo-name>/settings/branch_protection_rules/<id>===================================
            // [/Applies to (\d+) branchs?/, "應用於 $1 個分支"], //倉庫設置-->分支-->分支保護規則-->編輯

            "Save changes": "保存更改",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Applies to (\d+) branch(?:es|)/, "應用於 $1 個分支"], //倉庫設置-->分支-->分支保護規則-->編輯
    ],
};

I18N.zh["repository/settings/tag_protection"] = { // 倉庫設置 - 標籤 /<user-name>/<repo-name>/settings/tag_protection
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 標籤 頁面 /<user-name>/<repo-name>/settings/tag_protection===============================
            // 頂部提醒
                "Tag protection rule created.": "標籤保護規則已創建。",
                "Tag protection rule deleted.": "標籤保護規則已刪除。",

            "Protected tags": "受保護的標籤",
            "Protected tags are available to Pro, Team, and Enterprise users": "專業版、團隊版和企業版用戶均可使用受保護的標籤", //私有庫
            "Protected tags can only be created or deleted by users with enhanced permissions defined by your organization owners.": "受保護的標籤只能由具有由組織所有者定義的增強權限的用戶創建或刪除。",
            "Learn more about protected tags": "了解更多關於受保護標籤的信息",
            "No protected tag rules exist yet": "尚無受保護的標籤規則存在",
            "New rule": "新建規則",
            "Import to rulesets": "導入規則集",
                "Import your tag protection rules into repository rules": "將您的標籤保護規則導入倉庫規則集",
                    "Migrate your protected tags to one or more repository rulesets. This will implement the same tag protections you currently have today. Once created, the tag rulesets can take advantage of new ruleset features:": "將受保護的標籤遷移到一個或多個倉庫規則集。這將實現與當前相同的標籤保護。創建後，標籤規則集可利用規則集的新功能：",
                        "Requiring status checks to pass": "要求通過狀態檢查",
                        "Signed commits": "要求籤名提交",
                        "Requiring linear history": "需要線性歷史",
                        "and more": "和更多",
                    "Create separate rulesets for creating and deleting protected tags": "為創建和刪除受保護的標籤創建單獨的規則集",
                        "Users and Teams with at least Maintainer role will be able to create new protected tags. Administrators will be able to delete protected tags. This is the same behavior as existing tag protections.": "至少具有維護者角色的用戶和團隊可以創建新的受保護標籤。管理員可以刪除受保護標籤。這與現有標籤保護的行為相同。",
                    "Create one ruleset for all protected tag operations": "為所有受保護的標籤操作創建規則集",
                        "Administrators will be able to create and delete protected tags.": "管理員可以創建和刪除受保護的標籤。",

                    "Learn more about tag rulesets": "了解更多關於標籤規則集的信息",
                    "Import": "導入",

            "Delete tag protection rule": "刪除標籤保護規則",
                "Delete tag protection rule?": "刪除標籤保護規則？",
                    "Are you sure you want to delete this tag protection rule? Anyone who can write to this repository will be able to create tags with this pattern.": "您確定要刪除此標籤保護規則嗎？任何可以寫入此倉庫的人都能夠使用此模式創建標籤。",
                    "Yes, remove this tag protection rule": "是的，刪除此標籤保護規則",

            // [/(\d+) rules?/, "$1 條規則"],

        // 新建標籤規則 頁面 /<user-name>/<repo-name>/settings/tag_protection/new===============================
            "/ New rule": "/ 新建規則",
            "Tag name pattern": "標籤名稱模式",
            "Example: You can use": "示例：您可以使用",
            "to target tags named": "來鎖定名為",
            ", and so on.": "等的標籤。",

            "Add rule": "添加規則",

    },
    "regexp": [ // 正則翻譯
        [/(\d+) rules?/, "$1 條規則"],
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/settings/rules"] = { // 倉庫設置 - 規則 - 規則集 /<user-name>/<repo-name>/settings/rules
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],
        ...I18N.zh["orgs-settings-menu"]["static"], // 組織設置

        // 倉庫規則集頁面 /<user-name>/<repo-name>/rules
        // 規則集 頁面 /<user-name>/<repo-name>/settings/rules
            "Your rulesets won't be enforced on this private repository until you upgrade this organization account to GitHub Team.": "在您將此組織帳戶升級到 GitHub Team 之前，您的規則集不會在此私有倉庫上強制執行。", // 組織 私有倉庫

            "You haven't created any rulesets": "您尚未創建任何規則集",
                "Define whether collaborators can delete or force push and set requirements for any pushes, such as passing status checks or a linear commit history.": "定義協作者是否可以刪除或強制推送，並為任何推送設置要求，如通過狀態檢查或線性提交歷史。",
                "Learn more about rulesets.": "了解更多關於規則集的信息。",

            "Rulesets": "規則集",
            "New ruleset": "新建規則集",
                "New branch ruleset": "新建分支規則集",
                    "New tag ruleset": "新建標籤規則集",
                    "Import a ruleset": "導入規則集",

            "No rulesets have been added yet": "尚未添加任何規則集",

            "All": "全部",
            "• targeting": "• 針對",
            ", targeting": ", 針對",

            "Export ruleset": "導出規則集",
            "Delete ruleset": "刪除規則",

            // 刪除規則對話框
                "Delete ruleset?": "刪除規則？",
                "Are you sure you want to delete this ruleset? This action cannot be undone.": "您確定要刪除此規則集嗎？此操作無法撤消。",

        // 新建分支規則 /<user-name>/<repo-name>/settings/rules/new?target=branch&enforcement=disabled
        // 新建標籤規則 /<user-name>/<repo-name>/settings/rules/new?target=tag&enforcement=disabled
        // 編輯規則 /<user-name>/<repo-name>/settings/rules/<id>

            "Protect your most important branches": "保護您最重要的分支",
                "define whether collaborators can delete or force push and set requirements for any pushes, such as passing status checks or a linear commit history.": "定義協作者是否可以刪除或強制推送，並為任何推送設置要求，如通過狀態檢查或線性提交歷史。",

            "Tag": "標籤",
            "tags": "標籤",

            "Ruleset Name": "規則集名稱",
                "Ruleset name cannot be empty": "規則集名稱不能為空",
            "Enforcement status": "執行狀態",
                "Active": "激活",
                    "Rules will be enforced": "規則將被執行",
                    "Enable Organization Ruleset": "啟用組織規則集", // 組織設置
                        "I want rules enforced on targeted repositories in this ruleset.": "我希望此規則集中強制執行針對目標倉庫的規則。",
                "Evaluate": "評估", // 組織設置
                    "Evaluate Rulesets to trial rules and view insights": "評估規則集，以試用規則並查看洞察",
                    "Evaluate mode is only available to Enterprise organizations.": "評估模式僅適用於企業組織。",
                        "Upgrade to Enterprise to use this mode.": "升級到企業版即可使用此模式。",
                "Disabled": "禁用",
                    "Do not evaluate or enforce rules": "不評估或執行規則",

            "Bypass list": "旁路列表",
                "Exempt roles, teams, or apps from this ruleset by adding them to the bypass list": "通過將角色、團隊或應用程序添加到旁路列表，使其免受此規則集的約束",
                "Add bypass": "添加旁路",

                 // 添加旁路對話框
                    "Choose which roles, teams, and apps can bypass this ruleset": "選擇哪些角色、團隊和應用可繞過此規則集",

                    "No suggestions": "暫無建議",

                    "Suggestions": "建議",
                        "Role": "角色",
                        "App": "應用",
                        "Organization admin": "組織管理員",
                        "Repository admin": "倉庫管理員",
                        "Maintain": "維護",
                        "triage": "分類",
                        "maintain": "維持",
                        "read": "讀取",
                        "write": "寫入",
                        "vulnerability_reporter": "漏洞報告員",
                        "Add selected": "添加所選",

                "Always allow": "總是允許",
                "Allow for pull requests only": "僅允許拉取請求",
                    "Allow": "允許",
                        "Always": "總是",
                        "For pull requests only": "僅適用於拉取請求",
                    "Delete bypass": "刪除旁路",

                "Bypass list is empty": "旁路列表為空",

            "Targets": "目標",
                "Which branches do you want to make a ruleset for?": "您想為哪些分支制定規則集？",
                "Which tags do you want to make a ruleset for?": "您想為哪些標籤制定規則集？", // 標籤

                "Target": "目標",
                    "Branch targeting determines which branches will be protected by this ruleset. Use inclusion patterns to expand the list of branches under this ruleset. Use exclusion patterns to exclude branches.": "分支目標確定哪些分支將受此規則集保護。使用包含模式來擴展該規則集下的分支列表。使用排除模式來排除分支。",
                    "Tag targeting determines which tags will be protected by this ruleset. Use inclusion patterns to expand the list of tags under this ruleset. Use exclusion patterns to exclude tags.": "標籤目標確定哪些標籤將受此規則集保護。使用包含模式來擴展該規則集下的標籤列表。使用排除模式來排除標籤。", // 標籤

                    "Branch targeting criteria": "目標分支規則",
                    "Tag targeting criteria": "目標標籤規則", // 標籤
                        "Add target": "添加目標",
                            "Include default branch": "包含默認分支",
                            "Include all branches": "包含所有分支",
                            "Include all tags": "包含所有標籤", // 標籤
                            "Target by inclusion or exclusion pattern": "通過包含或排除規則確定目標",
                            "Include by pattern": "包含規則",
                            "Exclude by pattern": "排除規則",

                        "Branch targeting has not been configured": "尚未配置分支目標",
                        "Tag targeting has not been configured": "尚未配置標籤目標", // 標籤

                        "Default": "默認",
                        "All branches": "所有分支",
                        "All tags": "所有標籤", // 標籤

                        // 包含規則 對話框
                            "Branches that match the matching pattern will be targeted by this ruleset.": "與匹配規則相匹配的分支將成為該規則集的目標。",
                            "Tags that match the matching pattern will be targeted by this ruleset.": "與匹配規則相匹配的標籤將成為該規則集的目標。", // 標籤
                            "naming pattern": "命名規則",
                                "Pattern cannot be empty": "規則不能為空",
                            "Example patterns: \"": "示例：\"",
                            "Learn more about fnmatch": "了解更多關於 fnmatch 的信息",
                            "Add Inclusion pattern": "添加包含規則",

                        // 排除規則 對話框
                            "Branches that do not match the matching pattern will be targeted by this ruleset.": "與匹配規則不匹配的分支將成為該規則集的目標。",
                            "Tags that do not match the matching pattern will be targeted by this ruleset.": "與匹配規則不匹配的標籤將成為該規則集的目標。", // 標籤
                            "Add Exclusion pattern": "添加排除規則",

            // 規則
                "Which rules should be applied to the targets that you have selected?": "哪些規則應適用於您選擇的目標？",

                "protections": "保護",
                    "Restrict creations": "限制創建",
                        "Only allow users with bypass permission to create matching refs.": "只允許具有繞過權限的用戶創建匹配的引用。",
                    "Restrict updates": "限制更新",
                        "Only allow users with bypass permission to update matching refs.": "只允許具有繞過權限的用戶更新匹配的引用。",
                    "Restrict deletions": "限制刪除",
                        "Only allow users with bypass permissions to delete matching refs.": "只允許具有繞過權限的用戶刪除匹配的引用。",
                    "Require linear history": "需要線性歷史",
                        "Prevent merge commits from being pushed to matching refs.": "防止合併後的提交被推送到匹配的引用。",
                    "Require merge queue": "要求合併隊列", // 組織倉庫
                        "Merges must be performed via a merge queue.": "合併必須通過合併隊列進行。",
                        "Merge method": "合併模式",
                            "Method to use when merging changes from queued pull requests.": "合併來自列隊拉取請求的更改時使用的模式。",

                                "Merge commit": "合併提交",
                                "Squash and merge": "壓縮合併",
                                "Rebase and merge": "變基合併",
                        "Build concurrency": "構建併發",
                            "Limit the number of queued pull requests requesting checks and workflow runs at the same time.": "限制同時請求檢查和工作流運行的隊列拉取請求數量。",
                        "Minimum group size": "最小分組數",
                            "The minimum number of PRs that will be merged together in a group.": "將合併為一組的拉取請求的最小數量。",
                        "Maximum group size": "最大分組數",
                            "The maximum number of PRs that will be merged together in a group.": "將合併為一組的拉取請求的最大數量。",
                        "Wait time to meet minimum group size (minutes)": "達到最小分組數的等待時間（分鐘）",
                            "The time merge queue should wait after the first PR is added to the queue for the minimum group size to be met. After this time has elapsed, the minimum group size will be ignored and a smaller group will be merged.": "第一個拉取請求添加到隊列後，合併隊列為達到最小分組規模所需的等待時間。超過這一時間後，將忽略最小分組大小，合併一個較小的分組",
                        "Require all queue entries to pass required checks": "要求所有隊列條目通過必要的檢查",
                            "When this setting is disabled, only the commit at the head of the merge group, i.e. the commit containing changes from all of the PRs in the group, must pass its required checks to merge.": "禁用此設置後，只有位於合併組頭部的提交（即包含組內所有拉取請求 變更的提交）必須通過合併所需的檢查。",
                        "Status check timeout (minutes)": "狀態檢查超時（分鐘）",
                            "Maximum time for a required status check to report a conclusion. After this much time has elapsed, checks that have not reported a conclusion will be assumed to have failed": "報告結論所需的狀態檢查的最長時間。超過此時間後，未報告結論的檢查將被視為失敗",
                    "Require deployments to succeed": "要求部署成功",
                        "Choose which environments must be successfully deployed to before refs can be pushed into a ref that matches this rule.": "選擇必須成功部署到哪些環境，後才能將引用推送到與此規則匹配的引用中。",
                        "Hide additional settings": "隱藏附加設置",
                        "Show additional settings": "顯示附加設置",
                            "Search for deployment environments": "搜索部署環境",
                            "No deployment environments found": "未找到部署環境",
                            "Learn more about deployment environments": "了解更多關於部署環境的信息",
                    "Require signed commits": "要求帶簽名的提交",
                        "Commits pushed to matching refs must have verified signatures.": "推送到匹配引用的提交必須帶有經過驗證的簽名。",
                    "Require a pull request before merging": "要求在合併前提交拉取請求",
                        "Require all commits be made to a non-target branch and submitted via a pull request before they can be merged.": "要求所有的提交都必須在非目標分支上進行，並在合併前通過拉取請求提交。",
                            "Required approvals": "要求批准審查",
                                "The number of approving reviews that are required before a pull request can be merged.": "拉取請求合併前所需的批准審查次數。",
                            "Dismiss stale pull request approvals when new commits are pushed": "當新的提交被推送時，撤銷陳舊的拉取請求批准審查",
                            "New, reviewable commits pushed will dismiss previous pull request review approvals.": "推送新的可審查提交將撤銷之前的拉取請求的批准審查。",
                        "Require review from Code Owners": "要求程式碼所有者進行審查",
                            "Require an approving review in pull requests that modify files that have a designated code owner.": "要求對具有指定程式碼所有者的文件修改的拉取請求中進行批准審查。",
                        "Require approval of the most recent reviewable push": "要求批准最新的可審查推送",
                            "Whether the most recent reviewable push must be approved by someone other than the person who pushed it.": "最新的可審核推送是否必須得到推送者以外的其他人批准。",
                        "Require conversation resolution before merging": "要求在合併前解決對話",
                                "All conversations on code must be resolved before a pull request can be merged.": "在合併拉取請求之前，必須解決有關程式碼的所有對話。",
                    "Require status checks to pass": "要求通過狀態檢查",
                        "Choose which status checks must pass before the ref is updated. When enabled, commits must first be pushed to another ref where the checks pass.": "更新引用之前必須選擇通過哪些狀態檢查。啟用後，提交必須首先推送到檢查通過的另一個引用。",
                            "Require branches to be up to date before merging": "要求分支在合併前必須是最新的",
                                "Whether pull requests targeting a matching branch must be tested with the latest code. This setting will not take effect unless at least one status check is enabled.": "針對匹配分支的拉取請求，使用最新程式碼進行測試。至少啟用一項狀態檢查，否則此設置不會生效。",
                                // "Enter the name of a status check": "輸入狀態檢查的名稱",
                                    // [/Add '(.*)'/, "添加 $1"],
                                "No required checks": "無需進行必要的檢查",
                                    "Add checks": "添加檢查",
                                        "Add Checks": "添加檢查",
                                            "Search for checks": "搜索檢查",
                                            "No results": "無結果",
                                "No checks have been added": "未添加任何檢查",
                                "Learn more about status checks": "了解更多關於狀態檢查的信息",
                    "Block force pushes": "阻止強制推送",
                        "Prevent users with push access from force pushing to refs.": "防止具有推送權限的用戶強制推送到引用。",

            "Restrictions": "限制", // 組織設置
                "Restrict commit metadata": "限制提交元數據",
                    "Restrict commit author email addresses, committer email addresses, commit message content, and other metadata": "限制提交作者電子郵箱地址、提交者電子郵箱地址、提交消息內容和其他元數據",

                    "Metadata restrictions": "元數據限制",
                        "No metadata restrictions have been added": "尚無元素限制",
                        "Learn more about": "了解更多關於",
                        "metadata": "元素",
                        "restrictions": "限制",

                        "Add restriction": "添加限制",
                            // 添加元數據限制 對話框
                                "Add a metadata restriction": "添加元數據限制",
                                    "Applies To": "適用於",
                                        "Commit message": "提交信息",
                                        "Author email": "作者電子郵箱地址",
                            "Committer email": "提交者電子郵箱地址",
                            "Branch name": "分支名稱",
                        "Requirement": "要求",
                            "Must": "必須",
                            "start with a matching pattern": "以匹配規則開頭",
                            "end with a matching pattern": "以匹配規則結束",
                            "contain a matching pattern": "包含匹配規則",
                            "match a given regex pattern": "匹配給定的正則表達式規則",
                            "Must not": "不得",
                        "Matching pattern": "匹配規則",
                        "Description": "描述",
                            // [/Commit message must start with a matching pattern/, "提交信息必須以匹配規則開頭"],
                            // [/Commit message must end with a matching pattern/, "提交信息必須以匹配規則結束"],
                            // [/Commit message must contain with a matching pattern/, "提交信息必須包含匹配規則"],
                            // [/Commit message must match a given regex pattern/, "提交信息必須匹配給定的正則表達式規則"],
                            // [/Commit message must not start with a matching pattern/, "提交信息不得以匹配規則開頭"],
                            // [/Commit message must not end with a matching pattern/, "提交信息不得以匹配規則結束"],
                            // [/Commit message must not contain a matching pattern/, "提交信息不得包含匹配規則"],
                            // [/Commit message must not match a given regex pattern/, "提交信息不得匹配給定的正則表達式規則"],

                            // [/Author email must start with a matching pattern/, "作者電子郵箱地址必須以匹配規則開頭"],
                            // [/Author email must end with a matching pattern/, "作者電子郵箱地址必須以匹配規則結束"],
                            // [/Author email must contain a matching pattern/, "作者電子郵箱地址必須包含匹配規則"],
                            // [/Author email must match a given regex pattern/, "作者電子郵箱地址必須匹配給定的正則表達式規則"],
                            // [/Author email must not start with a matching pattern/, "作者電子郵箱地址不得以匹配規則開頭"],
                            // [/Author email must not end with a matching pattern/, "作者電子郵箱地址不得以匹配規則結束"],
                            // [/Author email must not contain a matching pattern/, "作者電子郵箱地址不得包含匹配規則"],
                            // [/Author email must not match a given regex pattern/, "作者電子郵箱地址不得匹配給定的正則表達式規則"],

                            // [/Committer email must start with a matching pattern/, "提交者電子郵箱地址必須以匹配規則開頭"],
                            // [/Committer email must end with a matching pattern/, "提交者電子郵箱地址必須以匹配規則結束"],
                            // [/Committer email must contain a matching pattern/, "提交者電子郵箱地址必須包含匹配規則"],
                            // [/Committer email must match a given regex pattern/, "提交者電子郵箱地址必須匹配給定的正則表達式規則"],
                            // [/Committer email must not start with a matching pattern/, "提交者電子郵箱地址不得以匹配規則開頭"],
                            // [/Committer email must not end with a matching pattern/, "提交者電子郵箱地址不得以匹配規則結束"],
                            // [/Committer email must not contain a matching pattern/, "提交者電子郵箱地址不得包含匹配規則"],
                            // [/Committer email must not match a given regex pattern/, "提交者電子郵箱地址不得匹配給定的正則表達式規則"],

                            // [/Branch name must start with a matching pattern/, "分支名稱必須以匹配規則開頭"],
                            // [/Branch name must end with a matching pattern/, "分支名稱必須以匹配規則結束"],
                            // [/Branch name must contain a matching pattern/, "分支名稱必須包含匹配規則"],
                            // [/Branch name must match a given regex pattern/, "分支名稱必須匹配給定的正則表達式規則"],
                            // [/Branch name must not start with a matching pattern/, "分支名稱不得以匹配規則開頭"],
                            // [/Branch name must not end with a matching pattern/, "分支名稱不得以匹配規則結束"],
                            // [/Branch name must not contain a matching pattern/, "分支名稱不得包含匹配規則"],
                            // [/Branch name must not match a given regex pattern/, "分支名稱不得匹配給定的正則表達式規則"],

                                    "How this rule will appear to your": "這個規則將如何在您的",
                                    "organization": "組織",
                                    "'s users throughout": "內的用戶中顯示",
                "Restrict branch names": "限制分支名",

            "Revert": "撤銷",
            "Reverting...": "撤銷...",
            "changes": "更改",
            "change": "更改",

            // 右下角提示
                "Unauthorized": "未經授權",
                "Ruleset created": "規則集已創建",
                "Changes reverted": "更改已恢復",
                "No changes have been made": "未作任何更改",
                "Invalid rules: 'Required status checks'": "無效規則：“必需的狀態檢查”",

            // 授權訪問 sudo 模式身份驗證
                "Confirm access": "授權訪問",
                "Authentication code": "驗證碼",
                    "More information about sudo mode authentication": "更多關於 sudo 模式身份驗證的信息",
                "Open your two-factor authenticator (TOTP) app or browser extension to view your authentication code.": "打開您的雙重身份驗證器 (TOTP) 應用或瀏覽器擴展以查看您的身份驗證碼。",
                "Verify": "驗證",
                "Verify": "驗證",
                "Verifying…": "驗證中…",
                "Your authentication code has been sent.": "您的驗證碼已發送。",

                "Having problems?": "有問題嗎？",
                "Use your passkey": "使用您的通行密鑰",
                "Use GitHub Mobile": "使用 GitHub Mobile",
                "Use your authenticator app": "使用您的身份驗證器應用",
                "Send a code via SMS": "通過短信發送驗證碼",
                "Resend SMS": "重新發送短信",
                "Use your password": "使用您的密碼",

                "GitHub Mobile": "GitHub Mobile",
                "When your phone is ready, click the button below.": "當您的手機準備就緒時，請單擊下面的按鈕。",
                "Creating a verification request for your GitHub Mobile app.": "為您的 GitHub Mobile 應用創建驗證請求。",
                "We sent you a verification request on your GitHub Mobile app. Enter the digits shown below to enter sudo mode.": "我們向您的 GitHub Mobile 應用發送了一個驗證請求。輸入下面顯示的數字以進入 sudo 模式。",
                "We could not verify your identity": "我們無法核實您的身份",
                "Retry": "請重試",

                "We just sent you a message via SMS with your authentication code. Enter the code in the form above to verify your identity.": "我們剛剛通過短信向您發送了一條消息，其中包含您的驗證碼。在上面的表格中輸入驗證碼以驗證您的身份。",

                "Password": "密碼",
                "Forgot password?": "忘記密碼？",
                "Confirm": "確認",

                "Incorrect password.": "密碼不正確。",

                "Passkey": "通行密鑰",
                "When you are ready, authenticate using the button below.": "準備好後，請使用下面的按鈕進行身份驗證。",
                "Use passkey": "使用通行密鑰",

                "Authentication failed.": "認證失敗。",
                "Retry passkey": "重試通行密鑰",

                "Unable to verify with your passkey?": "無法驗證您的通行密鑰？",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/(\d+) branch rules?/, "$1 條分支規則"],
        [/(\d+) rules?/, "$1 條規則"],
        [/(\d+) branch(?:es|)?/, "$1 個分支"],
        [/(\d+) tags?/, " $1 個標籤"],
        [/Add '(.*)'/, "添加 $1"],
        [/Commit message must start with a matching pattern/, "提交信息必須以匹配規則開頭"],
        [/Commit message must end with a matching pattern/, "提交信息必須以匹配規則結束"],
        [/Commit message must contain with a matching pattern/, "提交信息必須包含匹配規則"],
        [/Commit message must match a given regex pattern/, "提交信息必須匹配給定的正則表達式規則"],
        [/Commit message must not start with a matching pattern/, "提交信息不得以匹配規則開頭"],
        [/Commit message must not end with a matching pattern/, "提交信息不得以匹配規則結束"],
        [/Commit message must not contain a matching pattern/, "提交信息不得包含匹配規則"],
        [/Commit message must not match a given regex pattern/, "提交信息不得匹配給定的正則表達式規則"],
        [/Author email must start with a matching pattern/, "作者電子郵箱地址必須以匹配規則開頭"],
        [/Author email must end with a matching pattern/, "作者電子郵箱地址必須以匹配規則結束"],
        [/Author email must contain a matching pattern/, "作者電子郵箱地址必須包含匹配規則"],
        [/Author email must match a given regex pattern/, "作者電子郵箱地址必須匹配給定的正則表達式規則"],
        [/Author email must not start with a matching pattern/, "作者電子郵箱地址不得以匹配規則開頭"],
        [/Author email must not end with a matching pattern/, "作者電子郵箱地址不得以匹配規則結束"],
        [/Author email must not contain a matching pattern/, "作者電子郵箱地址不得包含匹配規則"],
        [/Author email must not match a given regex pattern/, "作者電子郵箱地址不得匹配給定的正則表達式規則"],
        [/Committer email must start with a matching pattern/, "提交者電子郵箱地址必須以匹配規則開頭"],
        [/Committer email must end with a matching pattern/, "提交者電子郵箱地址必須以匹配規則結束"],
        [/Committer email must contain a matching pattern/, "提交者電子郵箱地址必須包含匹配規則"],
        [/Committer email must match a given regex pattern/, "提交者電子郵箱地址必須匹配給定的正則表達式規則"],
        [/Committer email must not start with a matching pattern/, "提交者電子郵箱地址不得以匹配規則開頭"],
        [/Committer email must not end with a matching pattern/, "提交者電子郵箱地址不得以匹配規則結束"],
        [/Committer email must not contain a matching pattern/, "提交者電子郵箱地址不得包含匹配規則"],
        [/Committer email must not match a given regex pattern/, "提交者電子郵箱地址不得匹配給定的正則表達式規則"],
        [/Branch name must start with a matching pattern/, "分支名稱必須以匹配規則開頭"],
        [/Branch name must end with a matching pattern/, "分支名稱必須以匹配規則結束"],
        [/Branch name must contain a matching pattern/, "分支名稱必須包含匹配規則"],
        [/Branch name must match a given regex pattern/, "分支名稱必須匹配給定的正則表達式規則"],
        [/Branch name must not start with a matching pattern/, "分支名稱不得以匹配規則開頭"],
        [/Branch name must not end with a matching pattern/, "分支名稱不得以匹配規則結束"],
        [/Branch name must not contain a matching pattern/, "分支名稱不得包含匹配規則"],
        [/Branch name must not match a given regex pattern/, "分支名稱不得匹配給定的正則表達式規則"],
    ],
};
I18N.zh["orgs/settings/rules"] = I18N.zh["repository/settings/rules"];
I18N.zh["repository/rules"] = I18N.zh["repository/settings/rules"];

I18N.zh["repository/settings/actions"] = { // 倉庫設置 - 操作 /<user-name>/<repo-name>/settings/actions
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 操作頁面 /<user-name>/<repo-name>/settings/actions
            "Actions permissions": "操作權限",
                "This setting has been disabled by organization administrators.": "此設置已被組織管理員禁用。", // 組織倉庫
                "Allow all actions and reusable workflows": "允許所有操作和可復用的工作流程",
                    "Any action or reusable workflow can be used, regardless of who authored it or where it is defined.": "可以使用任何操作或可復用的工作流程，而不管它是誰創作的或在哪裡定義的。",
            "Disable actions": "禁用操作",
                "The Actions tab is hidden and no workflows can run.": "“操作” 選項卡將被隱藏，無法運行任何工作流程。",
            // [/Allow ([^ ]+) actions and reusable workflows/, "允許 $1 的操作和可復用的工作流程"],
                // [/Any action or reusable workflow defined in a repository within ([^ ]+) can be used./, "可以使用在 $1 的倉庫中定義的任何操作或可復用的工作流程。"], // 操作頁面
            // [/Allow ([^ ]+), and select non-([^ ]+), actions and reusable workflows/, "允許 $1，並選擇非 $2、操作和可復用的工作流程"],
                // [/Any action or reusable workflow that matches the specified criteria, plus those defined in a repository within ([^ ]+), can be used./, "可以使用符合指定條件的操作或工作流程，以及在 $1 的倉庫中定義的操作或可復用的工作流程。"], // 操作頁面
                "Learn more about allowing specific actions and reusable workflows to run.": "了解更多關於允許運行特定操作和可復用的工作流程的信息。",
                "Allow actions created by GitHub": "允許由 GitHub 創建的操作",
                "Allow actions by Marketplace": "允許來自市場的操作，",
                "verified creators": "由經驗證的創建者創建",
                "Allow specified actions and reusable workflows": "允許指定的操作和可復用的工作流程",
                "Enter a comma-separated list of actions and reusable workflows": "輸入以逗號分隔的操作和可復用的工作流程列表",
                "Wildcards, tags, and SHAs are allowed.": "允許使用通配符、標籤和 SHA。",
                "Action examples:": "操作示例：",
                "Reusable workflow examples:": "可復用的工作流程示例：",
                "Entire organization or repository examples:": "整個組織或倉庫的示例：",
                // "Save": "保存",
                "Saving...": "保存中...",
                // 頂部提醒
                    "Actions policy updated.": "操作政策已更新",

            "Artifact and log retention": "工件和日誌保留",
                "Choose the repository settings for artifacts and logs.": "選擇工件和日誌的倉庫設置。",
                "Your organization has set a maximum limit of": "您的組織已將上限設置為", //組織倉庫
                "days.": "天。", //組織倉庫
                "Learn more about the artifact and log retention policy.": "了解更多關於工件和日誌保留政策的信息。",

                "days": "天",

            "Fork pull request workflows": "復刻拉取請求工作流程",
                "Run workflows from fork pull requests": "從復刻拉取請求運行工作流程",
                    "This tells Actions to run workflows from pull requests originating from repository forks. Note that doing so will give maintainers of those forks the ability to use tokens with read permissions on the source repository.": "這告訴 Actions 運行工作流程，來自倉庫復刻的拉取請求。請注意，這樣做將使這些復刻的維護者有能力在源碼庫上使用具有讀取權限的令牌。",
                "Send write tokens to workflows from fork pull requests.": "從復刻拉取請求，發送可寫令牌到工作流程",
                    "This tells Actions to send tokens with": "這告訴 Actions 發送令牌",
                    "write": "寫入",
                    "permissions to workflows from pull requests originating from repository forks. Note that doing so will give maintainers of those forks": "權限到工作流程，來自倉庫復刻的拉取請求。請注意，這樣做將授予這些復刻的維護者",
                    "permissions against the source repository.": "權限，針對源倉庫。",
                "Send secrets to workflows from fork pull requests.": "從復刻拉取請求，發送機密到工作流程",
                    "This tells Actions to send repository secrets to workflows from pull requests originating from repository forks.": "這告訴 Actions 發送倉庫機密到工作流程，來自倉庫復刻的拉取請求。",

            "Fork pull request workflows from outside collaborators": "從外部協作者，復刻拉取請求工作流程",
                "Choose which subset of outside collaborators will require approval to run workflows on their pull requests.": "選擇哪些外部協作者的子集需要批准才能對他們的拉取請求運行工作流程。",
                "Learn more about approving workflow runs from public forks.": "了解更多關於批准來自公共復刻的工作流運行的信息。",
            "Require approval for first-time contributors who are new to GitHub": "要求對首次加入 GitHub 的貢獻者進行批准審查",
                "Only first-time contributors who recently created a GitHub account will require approval to run workflows.": "只有最近創建 GitHub 帳戶的首次貢獻者才需要獲得批准才能運行工作流程。",
            "Require approval for first-time contributors": "要求對首次貢獻者進行批准審查",
                "Only first-time contributors will require approval to run workflows.": "只有首次貢獻者才需要獲得批准才能運行工作流程。",
            "Require approval for all outside collaborators": "要求對所有外部協作者進行批准審查",
                "All outside collaborators will always require approval to run workflows on their pull requests.": "所有外部協作者將始終需要批准才能在他們的拉取請求上運行工作流程。",

            "Workflow permissions": "工作流程權限",
                "Choose the default permissions granted to the GITHUB_TOKEN when running workflows in this repository. You can specify more granular permissions in the workflow using YAML.": "在倉庫中運行工作流程時，選擇授予 GITHUB_TOKEN 的默認權限。您可以使用 YAML 在工作流程中指定更細化的權限。",
                "Learn more about managing permissions.": "了解更多關於管理權限的信息。",
                "Read and write permissions": "讀取和寫入權限",
                    "Workflows have read and write permissions in the repository for all scopes.": "工作流程在倉庫中對所有作用域具有讀和寫的權限。",
                "Read repository contents and packages permissions": "讀取倉庫的內容和軟件包的權限",
                    "Workflows have read permissions in the repository for the contents and packages scopes only.": "工作流程在倉庫中僅對內容和軟件包作用域具有隻讀的權限。",
                    "Choose whether GitHub Actions can create pull requests or submit approving pull request reviews.": "選擇 GitHub Actions 是否可以創建拉取請求或提交批准拉取請求審查。",
                        "Allow GitHub Actions to create and approve pull requests": "允許 GitHub Actions 創建和批准拉取請求",

                // 頂部提醒
                    "Default workflow permissions settings saved.": "已保存默認工作流程權限設置。",

        // 運行器頁面 /<user-name>/<repo-name>/settings/actions/runners
            "New self-hosted runner": "新建自託管運行器",
            "Host your own runners and customize the environment used to run jobs in your GitHub Actions workflows.": "託管您自己的運行器，並定制用於在您的 GitHub Actions 工作流程中運行作業的環境。",
            "Learn more about self-hosted runners": "了解更多關於自託管運行器的信息",
            "There are no runners configured": "暫無設置運行器",
            "Learn more about using runners": "了解更多關於使用運行器的信息",
            "to run actions on your own servers.": "在您自己的服務器上運行操作的信息。",

        // 創建運行器頁面 /<user-name>/<repo-name>/settings/actions/runners/new
            // [/\/ Add new self-hosted runner ·/, "/ 創建自託管運行器 ·"],
            "Adding a self-hosted runner requires that you download, configure, and execute the GitHub Actions Runner. By downloading and configuring the GitHub Actions Runner, you agree to the": "添加一個自託管運行器需要您下載、配置並執行 GitHub Actions 運行器。下載並配置 GitHub Actions 運行器 後，您同意",
                "GitHub Terms of Service": "GitHub 服務條款",
                "GitHub Corporate Terms of Service": "GitHub 企業服務條款",
                ", as applicable.": "，如適用。",
            "Runner image": "運行器鏡像",
            "Architecture": "架構",
            "Download": "下載",
            "We recommend configuring the runner under \"\\actions-runner\". This will help avoid issues related to service identity folder permissions and long path restrictions on Windows.": "我們建議在 “\\actions-runner” 下配置運行器。這將有助於避免與 Windows 上的服務標識文件夾權限和長路徑限制相關的議題。",
            "Configure": "設置",
            "Using your self-hosted runner": "使用您的自託管運行器",
            "For additional details about configuring, running, or shutting down the runner, please check out our": "關於配置、運行或關閉運行器的其他細節，請查看我們的",
            "product docs": "產品文檔",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/\/ Add new self-hosted runner ·/, "/ 創建自託管運行器 ·"],
        [/Allow ([^ ]+) actions and reusable workflows/, "允許 $1 的操作和可復用的工作流程"],
        [/Any action or reusable workflow defined in a repository within ([^ ]+) can be used./, "可以使用在 $1 的倉庫中定義的任何操作或可復用的工作流程。"], // 操作頁面
        [/Allow ([^ ]+), and select non-([^ ]+), actions and reusable workflows/, "允許 $1，並選擇非 $2、操作和可復用的工作流程"],
        [/Any action or reusable workflow that matches the specified criteria, plus those defined in a repository within ([^ ]+), can be used./, "可以使用符合指定條件的操作或工作流程，以及在 $1 的倉庫中定義的操作或可復用的工作流程。"], // 操作頁面
    ],
};

I18N.zh["repository/settings/hooks"] = { // 倉庫設置 - Web 鉤子 /<user-name>/<repo-name>/settings/hooks
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],
        ...I18N.zh["orgs-settings-menu"]["static"],

        // Web 鉤子 頁面 /<user-name>/<repo-name>/settings/hooks====================================
            "Add webhook": "添加 Web 鉤子",
            "Webhooks allow external services to be notified when certain events happen. When the specified events happen, we’ll send a POST request to each of the URLs you provide. Learn more in our": "Web 鉤子允許在發生某些事件時通知外部服務。當指定的事件發生時，我們將向您提供的每個 URL 發送 POST 請求。了解更多信息，在我們的",
            "Webhooks Guide": "Web 鉤子指南",

            "We will also send events from this repository to your": "我們還將把這個倉庫的事件發送到您的", // 組織倉庫
            "organization webhooks": "組織 Web 鉤子", // 組織倉庫

            // 刪除對話框
                "Delete webhook?": "刪除 Web 鉤子？",
                "This action cannot be undone. Future events will no longer be delivered to this webhook": "此操作無法撤消。未來的事件將不再傳遞到此 Web 鉤子",
                "Yes, delete webhook": "是的，刪除 Web 鉤子",

        // 添加鉤子 頁面 /<user-name>/<repo-name>/settings/hooks/new ====================================
            "Webhooks /": "Web 鉤子 /",
            "Add webhook": "添加 Web 鉤子",
            "We’ll send a": "我們將",
            "request to the URL below with details of any subscribed events. You can also specify which data format you’d like to receive (JSON,": "請求到以下 URL，其中包含任何訂閱事件的詳細信息。您還可以指定要接收的數據格式（JSON、",
            "etc": "等",
            "). More information can be found in": "）。更多信息可以在",
            "our developer documentation": "開發人員文檔",

            "Payload URL": "有效負載 URL",
            "Content type": "內容類型",
            "Secret": "密鑰",
                "Leave blank to remove secret": "留空以刪除密鑰",

            "SSL verification": "SSL 驗證",
            "By default, we verify SSL certificates when delivering payloads.": "默認情況下，我們在交付有效負載時驗證 SSL 證書。",
            "Enable SSL verification": "啟用 SSL 驗證",
            "Disable": "禁用",
            "(not recommended)": "（不推薦）",
                "Are you sure?": "您確定嗎？",
                "Warning": "警告",
                ": Disabling SSL verification has serious implications.": "：禁用 SSL 驗證具有嚴重的影響。",
                "SSL verification helps ensure that hook payloads are delivered to your URL endpoint securely, keeping your data away from prying eyes. Disabling this option is": "SSL 驗證有助於確保鉤子有效負載安全地傳送到您的 URL 端點，使您的數據遠離窺探。禁用此選項是",
                "not recommended": "不推薦的",
                "Disable, I understand my webhooks may not be secure": "禁用，我明白我的 web 鉤子可能不安全",

            "Which events would you like to trigger this webhook?": "您希望哪些事件觸發此 Web 鉤子？",
                "Just the": "僅",
                "push": "推送",
                "event.": "事件。",
                "Send me": "發送給我",
                "everything": "所有",
                "Let me select individual events.": "讓我選擇單個事件。",
                    "Branch or tag creation": "分支或標籤創建",
                        "Branch or tag created.": "分支或標籤的創建。",
                    "Branch or tag deletion": "分支或標籤刪除",
                        "Branch or tag deleted.": "分支或標籤的刪除。",
                    "Branch protection configurations": "分支保護配置",
                        "All branch protections disabled or enabled for a repository.": "禁用或啟用倉庫的所有分支保護。",
                    "Branch protection rules": "分支保護規則",
                        "Branch protection rule created, deleted or edited.": "分支保護規則的創建、刪除或編輯。",
                    "Check runs": "檢查運行",
                        "Check run is created, requested, rerequested, or completed.": "檢查運行的創建、請求、重新請求或完成。",
                    "Check suites": "檢查套件",
                        "Check suite is requested, rerequested, or completed.": "檢查套件的請求、重新請求或完成。",
                    "Code scanning alerts": "程式碼掃描警報",
                        "Code Scanning alert created, fixed in branch, or closed": "程式碼掃描警報的創建、在分支中的修復或關閉。",
                    "Collaborator add, remove, or changed": "協作者的添加、刪除或更改",
                        "Collaborator added to, removed from, or has changed permissions for a repository.": "協作者添加到倉庫、從倉庫中刪除或更改了倉庫的權限。",
                    "Commit comments": "提交評論",
                        "Commit or diff commented on.": "提交或差異評論。",
                    "Custom property": "自定義屬性",
                        "Custom property is created, updated, or deleted.": "自定義屬性的創建、更新或刪除。",
                    "Custom property values": "自定義屬性值",
                        "Custom property values are changed for a repository": "倉庫自定義屬性值的更改。",
                    "Dependabot alerts": "Dependabot 警報",
                        "Dependabot alert auto_dismissed, auto_reopened, created, dismissed, reopened, fixed, or reintroduced.": "Dependabot 警報自動解除、自動重新打開、創建、解除、重新打開、修復或重新引入。",
                    "Deploy keys": "部署密鑰",
                        "A deploy key is created or deleted from a repository.": "在倉庫中部署密鑰的創建或刪除。",
                    "Deployment statuses": "部署狀態",
                        "Deployment status updated from the API.": "通過 API 更新部署狀態。",
                    "Deployments": "部署",
                        "Repository was deployed or a deployment was deleted.": "倉庫的部署或刪除部署。",
                    "Discussion comments": "討論評論",
                        "Discussion comment created, edited, or deleted.": "討論評論的創建、編輯或刪除。",
                    // "Discussion": "討論",
                        "Discussion created, edited, closed, reopened, pinned, unpinned, locked, unlocked, transferred, answered, unanswered, labeled, unlabeled, had its category changed, or was deleted.": "討論的創建、編輯、關閉、重新打開、置頂、取消置頂、鎖定、解鎖、轉移、答覆、取消答覆、標記、取消標記、更改其類別或刪除。",
                    "Forks": "復刻",
                        "Repository forked.": "倉庫復刻。",
                    "Issue comments": "議題評論",
                        "Issue comment created, edited, or deleted.": "議題評論的創建、編輯或刪除。",
                    // "Issue": "議題",
                        "Issue opened, edited, deleted, transferred, pinned, unpinned, closed, reopened, assigned, unassigned, labeled, unlabeled, milestoned, demilestoned, locked, or unlocked.": "議題的打開、編輯、刪除、轉移、置頂、取消置頂、關閉、重新打開、分配、取消分配、標記、取消標記、設置里程碑、取消里程碑、鎖定或解鎖。",
                    "Labels": "標籤",
                        "Label created, edited or deleted.": "標籤的創建、編輯或刪除。",
                    "Memberships": "團隊成員", // 組織設置
                        "Team membership added or removed.": "團隊成員的添加或刪除。",
                    "Merge groups": "合併組",
                        "Merge Group requested checks, or was destroyed.": "合併組的請求檢查或銷毀。",
                    "Meta": "元數據",
                        "This particular hook is deleted.": "這個特定的鉤子被刪除。",
                    "Milestones": "里程碑",
                        "Milestone created, closed, opened, edited, or deleted.": "里程碑的創建、關閉、打開、編輯或刪除。",
                    "Org blocks": "組織黑名單", // 組織設置
                        "A user has been blocked or unblocked.": "用戶拉黑或解除拉黑。",
                    "Organizations": "組織", // 組織設置
                        "Organization deleted, renamed, member invited, member added, or member removed.": "組織的刪除、重命名以及成員的邀請、添加或刪除。",
                    // "Packages": "軟件包",
                        "GitHub Packages published or updated in a repository.": "倉庫中 GitHub 軟件包的發布或更新 。",
                    "Page builds": "構建 GitHub Pages",
                        "Pages site built.": "GitHub Pages 站點的建立。",
                    "Project cards": "項目面板卡",
                        "Project card created, updated, or deleted.": "項目面板卡的創建、更新或刪除。",
                    "Project columns": "項目欄目",
                        "Project column created, updated, moved or deleted.": "項目列目的創建、更新、移動或刪除。",
                    "Project v2 items": "項目項 v2", // 組織設置
                        "Project item created, edited, deleted, archived, restored, converted, or reordered. Feedback is welcome in": "項目條目的創建、編輯、刪除、歸檔、恢復、轉換或重新排序。歡迎提供反饋意見在",
                        "this discussion": "這個討論",
                    // "": "項目",
                        "Project created, updated, or deleted.": "項目的創建、更新或刪除。",
                    "Projects v2": "項目 v2", // 組織設置
                        "Project created, updated, deleted, closed, or reopened. Feedback is welcome in": "項目的創建、更新、刪除、關閉或重新打開。歡迎提供反饋意見在",
                    "Pull request review comments": "拉取請求審查意見",
                        "Pull request diff comment created, edited, or deleted.": "拉取請求差異評論的創建、編輯或刪除。",
                    "Pull request review threads": "拉取請求的審查線程",
                        "A pull request review thread was resolved or unresolved.": "拉取請求的審查線程的解決或未解決。",
                    "Pull request reviews": "拉取請求審查",
                        "Pull request review submitted, edited, or dismissed.": "拉取請求審查的提交、編輯或駁回。",
                    // "": "拉取請求",
                        "Pull request assigned, auto merge disabled, auto merge enabled, closed, converted to draft, demilestoned, dequeued, edited, enqueued, labeled, locked, milestoned, opened, ready for review, reopened, review request removed, review requested, synchronized, unassigned, unlabeled, or unlocked.": "拉取請求的分配、禁用自動合併、啟用自動合併、關閉、轉換為草稿、取消里程碑、取消隊列、編輯、隊列、標記、鎖定、設置里程碑、打開、準備審查、重新打開、取消審查請求、請求審查、同步、取消分配、取消標記或解鎖。",
                    "Pushes": "推送",
                        "Git push to a repository.": "Git 推送到倉庫。",
                    "Registry packages": "註冊軟件包",
                        "Registry package published or updated in a repository.": "倉庫中註冊軟件包的發布或更新。",
                    "Releases": "發行版",
                        "Release created, edited, published, unpublished, or deleted.": "發行版的創建、編輯、發布、取消發布或刪除。",
                    // "": "倉庫",
                        "Repository created, deleted, archived, unarchived, publicized, privatized, edited, renamed, or transferred.": "倉庫的創建、刪除、歸檔、取消歸檔、公開、私有化、編輯、重命名或轉讓。",
                    "Repository advisories": "倉庫公告",
                        "Repository advisory published or reported.": "倉庫公告發布或報告。",
                    "Repository imports": "倉庫導入",
                        "Repository import succeeded, failed, or cancelled.": "倉庫導入的成功、失敗或取消。",
                    "Repository rulesets": "倉庫規則集",
                        "Repository ruleset created, deleted or edited.": "倉庫規則集的創建、刪除或編輯。",
                    "Repository vulnerability alerts": "倉庫漏洞警報",
                        "Dependabot alert (aka dependency vulnerability alert) created, resolved, or dismissed on a repository.": "Dependabot 警報（又名依賴漏洞警報）在倉庫上的創建、解決或解除。",
                    "Secret scanning alert locations": "機密掃描警報位置",
                        "Secrets scanning alert location created": "機密掃描警報位置的創建。",
                    "Secret scanning alerts": "機密掃描警報",
                        "Secrets scanning alert created, resolved, reopened, or validated": "機密掃描警報的創建、解決、重新打開或驗證。",
                    "Security and analyses": "安全和分析",
                        "Code security and analysis features enabled or disabled for a repository.": "啟用或禁用倉庫的程式碼安全和分析功能。",
                    // "": "星標",
                        "A star is created or deleted from a repository.": "星標或取消倉庫星標。",
                    "Statuses": "狀態",
                        "Commit status updated from the API.": "通過 API 更新提交狀態。",
                    "Team adds": "團隊添加",
                        "Team added or modified on a repository.": "在倉庫上添加或修改的團隊。",
                    "Teams": "團隊",  // 組織設置
                        "Team is created, deleted, edited, or added to/removed from a repository.": "團隊的創建、刪除、編輯以及向倉庫添加團隊、從倉庫中移除團隊。",
                    "Visibility changes": "可見性變化",
                        "Repository changes from private to public.": "倉庫從私有更改為公共。",
                    "Watches": "關注",
                        "User stars a repository.": "用戶星標倉庫。",
                    "Wiki": "",
                        "Wiki page updated.": "Wiki 頁面的更新。",
                    "Workflow jobs": "工作流程作業",
                        "Workflow job queued, waiting, in progress, or completed on a repository.": "倉庫中工作流作業的隊列、等待、正在進行或完成。",
                    "Workflow runs": "工作流程運行",
                        "Workflow run requested or completed on a repository.": "倉庫中工作流程運行的請求或完成。",
                "Active": "激活",
                "We will deliver event details when this hook is triggered.": "當鉤子被觸發時，我們將提供事件詳細信息。",

            // 頂部提醒
            "Okay, that hook was successfully created. We sent a ping payload to test it out! Read more about it at https://docs.github.com/webhooks/#ping-event.": "好的，這個鉤子已經成功創建。我們發送了一個 ping 負載來測試它! 閱讀更多關於它的信息，請訪問 https://docs.github.com/webhooks/#ping-event。",

        // 管理 鉤子 /<user-name>/<repo-name>/settings/hooks/<id>
            "Manage webhook": "管理 Web 鉤子",
            "If you've lost or forgotten this secret, you can change it, but be aware that any integrations using this secret will need to be updated. —": "如果您丟失或忘記了此密鑰，則可以更改它，但請注意，使用此密鑰的任何集成都需要更新。 —",
            "Change Secret": "更改密鑰",
            "Update webhook": "更新 Web 鉤子",
            // 頂部提醒
                "Okay, the hook was successfully updated.": "好的，Web 鉤子已經成功更新。",
            "Delete webhook": "刪除 Web 鉤子",

        // 最近交付標籤 /<user-name>/<repo-name>/settings/hooks/<id>?tab=deliveries
            "Recent Deliveries": "最近交付",
                "redelivery": "再交付",
            "Loading deliveries…": "載入交付…",
            "Detailed delivery information will be shown here once the hook has been triggered.": "一旦觸發鉤子，詳細的交付信息將在此處顯示。",

            "Request": "請求",
            "Response": "應答",
            "Redeliver": "重新交付",
                "Redeliver payload?": "重新交付有效負載？",
                "The payload will be delivered to": "該有效負載將被發送到",
                "using the current webhook configuration.": "使用當前的 Web 鉤子 配置。",
                "Yes, redeliver this payload": "是的，重新發送此有效負載",
                    "Delivering payload…": "交付有效載荷...",
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Completed in (\d+(\.\d+)) seconds?./, "在 $1 秒內完成。"],
    ],
};
I18N.zh["orgs/settings/hooks"] = I18N.zh["repository/settings/hooks"];

I18N.zh["repository/settings/environments"] = { // 倉庫設置 - 環境 /<user-name>/<repo-name>/settings/environment
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 倉庫 環境 /<user-name>/<repo-name>/settings/environments
            "New environment": "新建環境",
            "You can configure environments with protection rules, variables and secrets.": "您可以使用保護規則，變量和機密配置環境。",
            "Learn more about configuring environments.": "了解更多關於配置環境的信息。",

            "There are no environments for this repository": "此倉庫尚無環境",
            "Environments are used by your workflows for deployments.": "您的工作流程使用環境進行部署。",
            "You can configure environments with protection rules and secrets.": "您可以使用保護規則和機密配置環境。",

            "Delete environment": "刪除環境",
            // 刪除環境對話框
            "Are you sure you want to delete this environment?": "您確定要刪除此環境嗎？",
                "Deleting an environment will delete all associated secrets, variables, and protection rules.": "刪除環境將刪除所有關聯的機密、變量和保護規則。",
                "I understand, delete this environment": "我明白了，依然刪除這個環境",
            // 頂部提醒
            "Environment deleted.": "環境已刪除。",

        // 倉庫 新建環境 /<user-name>/<repo-name>/settings/environments/new
            "/ Add": "/ 添加",
            "Name": "名稱",
            "Configure environment": "設置環境",

        // 編輯環境 /<user-name>/<repo-name>/settings/environments/<id>/edit
            "/ Configure": "/ 設置",

            "Deployment protection rules": "部署保護規則",
                "Configure reviewers, timers, and custom rules that must pass before deployments to this environment can proceed.": "配置審查者、計時器和自定義規則，在繼續部署到此環境之前必須通過這些規則。",

                "Required reviewers": "所需的審查者",
                    "Specify people or teams that may approve workflow runs when they access this environment.": "指定訪問此環境時可以批准工作流運行的人員或團隊。",
                        "Add up to": "最多添加",
                        "more": " ",
                        "reviewers": "位審查者",
                        "Search for people or teams...": "搜索人員或團隊...",

                    "Prevent self-review": "防止自我審查",
                        "Require a different approver than the user who triggered the workflow run.": "要求與觸發工作流程運行的用戶不同的批准審查者。",
                "Wait timer": "等待計時器",
                    "Set an amount of time to wait before allowing deployments to proceed.": "設置允許部署繼續之前等待的時間。",
                    "minutes": "分鐘",
                "Enable custom rules with GitHub Apps": "使用 GitHub Apps 啟用自定義規則",
                    "Learn about existing apps": "了解現有應用",
                    "create your own protection rules": "創建您自己的保護規則",
                    "so you can deploy with confidence.": "以便您可以放心地進行部署。",
                "Allow administrators to bypass configured protection rules": "允許管理員繞過配置的保護規則",
                "Save protection rules": "保存保護規則",

            "Deployment branches and tags": "部署分支和標籤",
                "Limit which branches and tags can deploy to this environment based on rules or naming patterns.": "根據規則或命名模式限制哪些分支和標籤可以部署到此環境。",
                "No restriction": "沒有限制",
                    "No restriction to which branch or tag from this repository can deploy.": "不限制倉庫中的分支或標籤進行部署。",
                "Protected branches only": "僅受保護的分支",
                    "Deployment limited to branches with protection rules.": "部署僅限於具有保護規則的分支。",
                "Selected branches and tags": "選中的分支和標籤",
                    "Specify a list of branches and tags using naming patterns.": "使用命名模式指定分支和標籤的列表。",

                "Applies to": "適用於",
                // [/(\d+) branch(?:es|)/, "$1 個分支"],
                ". Based on the existing": "。基於已有的",
                "repository branch protection rules": "倉庫分支保護規則",
                // [/Currently applies to (\d+) branch(?:es|)/, "目前適用於 $1 個分支"],

                "No branch or tag rules applied yet:": "尚未應用分支或標籤規則：",
                "all branches and tags are still allowed to deploy.": "仍允許所有分支和標籤進行部署。",

                // [/(\d+) branch(?:es|) allowed/, "允許 $1 個分支"],
                // [/(\d+) branch(?:es|) and (\d+)  tags? allowed/, "允許 $1 個分支和 $2 個標籤"],
                "Add deployment branch or tag rule": "添加部署分支或標籤規則",
                    // 添加部署分支規則 對話框
                    "Ref type:": "引用類型：",
                        "Tag": "標籤",
                    "Name pattern:": "名稱的模式：",
                    "Add rule": "添加規則",
                "Update deployment branch rule": "更新部署分支規則",
                    "Update rule": "更新規則",
                "Remove": "刪除",

                // 頂部提醒
                    "Environment changes successfully saved: all branches can deploy.": "環境更改已成功保存：所有分支都可以部署。",
                    "Environment changes successfully saved: only protected branches can deploy.": "環境更改已成功保存：只有受保護的分支才能部署。",
                    "Environment changes successfully saved: only selected branches and tags can deploy.": "環境更改已成功保存：只有選定的分支和標籤才能部署。",
                    // [/Deployment branch rule \"([^ ]+)\" saved successfully./ ,"部署分支規則 “$1” 已成功保存。"],
                    // [/Deployment branch rule \"([^ ]+)\" removed./, "部署分支規則 “$1” 已刪除。",]

            "Environment secrets": "環境機密",
                "Secrets are encrypted environment variables. They are accessible only by GitHub Actions in the context of this environment.": "機密是加密的環境變量。它們只能由 GitHub Actions 在這個環境中訪問。",
                "Add Secret": "添加機密",
                "Add secret": "添加機密",
                    // 添加機密對話框
                    "Name": "名稱",
                    "Value": "值",
                    "Secret value": "機密值",
                    "Adding…": "添加中…",
                    // 頂部提醒
                        "Environment secret added.": "環境機密已添加。",
                        "Environment secret updated.": "環境機密已更新。",
                "Update secret": "更新機密",
                    "Save secret": "保存機密",
                "Remove secret": "刪除機密",
                    "Yes, remove this secret": "是的，刪除該機密",
                    // 頂部提醒
                    "Secret deleted.": "機密已刪除。",

            // 頂部提醒
                "Failed to add secret. Secret names can only contain alphanumeric characters ([a-z], [A-Z], [0-9]) or underscores (_). Spaces are not allowed. Must start with a letter ([a-z], [A-Z]) or underscores (_).": "添加機密失敗。機密名稱只能包含字母數字字符（[a-z]、[A-Z]、[0-9]）或下劃線 (_)。不允許有空格。必須以字母 ([a-z], [A-Z]) 或下劃線 (_) 開頭。",

            "Environment variables": "環境變量",
                "Variables are used for non-sensitive configuration data. They are accessible only by GitHub Actions in the context of this environment. They are accessible using the": "變量用於非敏感配置數據。它們只能通過此環境上下文中的 GitHub Actions 訪問。它們可以使用",
                "vars context": "變量內容",
                "Add variable": "添加變量",
                    "Variable name can only start with a letter or underscore.": "變量名只能以字母或下劃線開頭。",
                    "Variable name can only contain alphanumeric characters. Special characters and spaces are not allowed.": "變量名稱只能包含字母數字字符。不允許特殊字符和空格。",

                    "Variable value": "變量值",
                    "Adding...": "添加中...",
                "Update variable": "更新變量",
                    "Save variable": "保存變量",
                    "Saving...": "保存中...",
                "Updated": "更新於",
                // 刪除變量 對話框
                    "Remove variable": "刪除變量",
                    "Are you sure you want to delete": "您確定要刪除",
                    "Yes, remove this variable": "是的，刪除該變量",
                    // 頂部提醒
                    "Variable deleted.": "變量已刪除。",

            // 頂部提醒
            // [/Environment \"([^ ]+)\" created./, "環境 “$1” 已創建。"],
            // [/Environment \"([^ ]+)\" updated./, "環境 “$1” 已更新。"],

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/(\d+) protection rules?/, "$1 個保護規則"], // /environments
        [/(\d+) secrets?/, "$1 個機密"], // /environments
        [/(\d+) variables?/, "$1 個變量"], // /environments
        [/Environment \"([^ ]+)\" created./, "環境 “$1” 已創建。"],
        [/Environment \"([^ ]+)\" updated./, "環境 “$1” 已更新。"],
        [/Currently applies to (\d+) branch(?:es|)/, "目前適用於 $1 個分支"],
        [/(\d+) branch(?:es|) and (\d+) tags? allowed/, "允許 $1 個分支和 $2 個標籤"],
        [/(\d+) branch(?:es|) allowed/, "允許 $1 個分支"],
        [/(\d+) branch(?:es|)/, "$1 個分支"],
        [/Deployment branch rule \"([^ ]+)\" saved successfully./ ,"部署分支規則 “$1” 已成功保存。"],
        [/Deployment branch rule \"([^ ]+)\" removed./, "部署分支規則 “$1” 已刪除。",]
    ],
};

I18N.zh["repository/settings/codespaces"] = { // 倉庫設置 - 程式碼空間 /<user-name>/<repo-name>/settings/codespaces
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 程式碼空間 /<user-name>/<repo-name>/settings/codespaces
            "Prebuild configuration": "預構建配置",
            "Set up prebuild": "設置預構建",
            "There are no prebuilds configured for this repository": "尚無預構建設置",
            "Prebuild configurations speed up Codespace creations significantly by pre-executing all the tasks required to build your development environment.": "預構建配置通過預先執行構建開發環境所需的所有任務，大大加快了程式碼空間的創建。",
            "Learn more about setting up prebuilds": "了解更多關於預構建設置的信息",

        // 程式碼空間 /<user-name>/<repo-name>/settings/codespaces
            "/ New prebuild configuration": "/ 新建預構建設置",
            "Configuration": "設置",
            "Your prebuild will be built from the branch and configuration file selected below. Learn more about": "您的預構建將從下面選擇的分支和配置文件中構建。了解更多關於",
            "prebuild configuration.": "預構建設置。",
            "Select branch": "選擇分支",
            "Find a branch": "查找分支",
            "Configuration File:": "設置文件：",
            "Default Codespaces Configuration": "默認程式碼空間設置",

            "Access and cost control": "訪問和成本控制",
            "Prebuild triggers": "預構建觸發器",
            "You can specify how often to prebuild your codespace based on changes to your repository or a schedule to manage Actions usage.": "您可以根據對倉庫的更改或管理操作使用的計劃來指定預構建程式碼空間的頻率。",
            "Learn about prebuild triggers": "了解預構建觸發器",
            "Every push": "每次推送",
                "Default": "默認",
                "Your codespace will prebuild on every push to this branch": "您的程式碼空間將在每次推送到該分支時預構建",
            "Configuration change": "配置改變時",
                "Your codespace will prebuild when a change is detected on the devcontainer.json and associated configuration files": "當檢測到 devcontainer.json 和相關的配置文件有變化時，您的程式碼空間將預構建。",
            "Scheduled": "計劃",
                "Your codespace will prebuild on a schedule": "您的程式碼空間將按計劃進行預構建",
            "Days": "天",
                "Weekdays": "工作日",
                "Every day": "每日",
                "Sunday"    : "周日",
                "Monday"    : "周一",
                "Tuesday"   : "周二",
                "Wednesday" : "周三",
                "Thursday"  : "周四",
                "Friday"    : "周五",
                "Saturday"  : "周六",
            "Times": "時間",
                "Filter": "篩選",

            "Region availability": "區域可用性",
            "Reduce prebuild available to only specific regions": "減少僅適用於特定區域的預構建",
                "By default, your prebuilt image will be available to all regions where codespaces are available and storage costs will apply for each region. You can adjust this to manage your storage usage.": "默認情況下，您的預構建映像將適用於所有程式碼空間可用的區域，並且每個地區都有存儲費用。。您可以調整此項以管理您的存儲使用情況。",
                "Learn about region availability": "了解區域可用性",
                    "US East": "美國東部",
                    "US West": "美國西部",
                    "Europe West": "歐洲西部",
                    "Southeast Asia": "東南亞",
                    "Australia": "澳大利亞",
            "Template history": "模板歷史",
                "You can specify the number of prebuild template versions retained to speed up codespaces from an older commit to manage storage costs. The maximum value is 5 versions.": "您可以指定保留的預構建模板版本的數量，以加快舊提交的程式碼空間，以管理存儲成本。最大值為 5 個版本。",
                "Learn about template history": "了解模板歷史",
            "versions": "個版本",

            "Failure notifications": "失敗通知",
            "You can specify users or teams to be notified via e-mail when prebuilds for this particular configuration fail.": "您可以指定用戶或團隊，當這個特定配置的預構建失敗時，通過電子郵件通知他們。",
            "Add by username, full name, or team name": "按用戶名、全名或團隊名稱添加",
            "You haven't added anyone yet": "尚未添加任何人",
            "Add members to receive email notifications when prebuilds fail for this configuration": "添加成員，以便在此配置的預構建失敗時接收電子郵件通知",
            "Show advanced options": "顯示高級選項",

            "Advanced options": "高級選項",
            "You can disable prebuild optimization if you're having issues where codespaces are several commits behind on a specific branch.": "如果您遇到程式碼空間在特定分支上落後多個提交的問題，您可以禁用預構建優化。",
            "Learn about prebuild optimization": "了解預構建優化",
            "Disable prebuild optimization": "禁用預構建優化",
                "This prevents codespaces from attempting to use an older image to speed up boot time. This could adversely affect performance.": "這可以防止程式碼空間嘗試使用舊的映像來加快啟動時間。這可能會對性能產生不利影響。",
            "Hide advanced options": "隱藏高級選項",
            "Create": "創建",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/settings/pages"] = { // 倉庫設置頁面(含組織倉庫) /<user-name>/<repo-name>/settings
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // GitHub Pages 頁面 /<user-name>/<repo-name>/settings/pages====================================
            "is designed to host your personal, organization, or project pages from a GitHub repository.": "旨在從 GitHub 倉庫託管您的個人、組織或項目頁面。",
            // 私有庫 提醒
            "Upgrade or make this repository public to enable Pages": "升級或公開該倉庫，以啟用 GitHub Pages",
            "GitHub Pages is designed to host your personal, organization, or project pages from a GitHub repository.": "GitHub Pages 旨在從 GitHub 倉庫中託管您的個人、組織或項目頁面。",
            // 存檔時 提醒
            "This repository has been archived. The associated GitHub Pages site remains published but settings are read-only.": "該倉庫已存檔。相關的 GitHub Pages 網站仍然發布，但設置是隻讀的。",

            // 已發布時
            "Your site is live at": "您的站點在",
                "Last": "最近",
                "deployed": "部署",
            "Visit site": "訪問網站",
            "Addtional site options": "站點附加選項",
            "Unpublish site": "取消站點發布",
                // 頂部提醒
                    "GitHub Pages unpublished.": "GitHub  Pages 未發布。",

            "Build and deployment": "構建和部署",
                // 頂部提醒
                    "GitHub Pages source saved.": "GitHub Pages 源已保存。",
            "Source": "來源",
                // "GitHub Actions": "",
                    "Best for using frameworks and customizing your build process": "最適合使用框架和自定義構建過程",
                "Deploy from a branch": "從分支部署",
                    "Classic Pages experience": "經典頁面體驗",

            // GitHub Actions 部署模式
                "Send feedback": "發送反饋",
                "Use a suggested workflow,": "使用建議的工作流程，",
                "browse all workflows": "瀏覽所有工作流程",
                ", or": "，或",
                "create your own": "自建",

                "Configure": "設置",

                "Workflow details will appear here once your site has been deployed.": "部署站點後，工作流程詳細信息將顯示在此處。",
                "View workflow runs.": "查看工作流程運行情況。",

                "Your site was last deployed to the": "您的站點上次部署到",
                "environment by the": "環境，由",
                "pages build and deployment": "頁面構建和部署",
                "workflow.": "工作流程。",
                "Learn more about deploying to GitHub Pages using custom workflows": "了解更多關於使用自定義工作流程部署到 GitHub Pages 的信息",

            // 從分支部署模式
            "Branch": "分支",
                // 禁用時
                "GitHub Pages is currently disabled. Select a source below to enable GitHub Pages for this repository.": "GitHub Pages 目前已被禁用。在下面選擇一個源，為該倉庫啟用 GitHub Pages。",
                "GitHub Pages is currently disabled. You must first add content to your repository before you can publish a GitHub Pages site.": "GitHub Pages 目前已被禁用。您必須先將內容添加到您的倉庫，然後才能發布 GitHub Pages 站點。",
                // 啟用時
                "Your GitHub Pages site is currently being built from the": "您的 GitHub Pages 站點，目前正建立於",
                "folder in the": "目錄在",
                "branch.": "分支。",
                "Learn more about configuring the publishing source for your site": "了解更多關於配置網站發布源的信息",

                "Select branch": "選擇分支",
                    "None": "無",
                "Select folder": "選擇文件夾",
                    "/ (root)": "/ (根目錄)",

                "Learn how to": "了解如何",
                "add a Jekyll theme": "添加 Jekyll 主題",
                "to your site.": "到您的站點。",

            "Custom domain": "自定義域",
                "Custom domains allow you to serve your site from a domain other than": "自定義域允許您從其他域為您的站點提供服務，而不是",
                "Learn more about configuring custom domains": "了解更多關於配置自定義域的信息",
                    "Remove": "移除",
                    "Check again": "再檢查一次",
                    // [/([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?) DNS check is in progress./, "$1 的 DNS 檢查正在進行。"],
                    "Please wait for the DNS check to complete.": "請等待 DNS 檢查結束。",
                    // [/([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?) is improperly configured/, "$1 配置不正確"],
                    // [/Your site's DNS settings are using a custom subdomain, ([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?), that's not set up with a correct CNAME record. We recommend you set this CNAME record to point at [YOUR USERNAME].github.io. For more information, see/, "您網站的 DNS 設置使用的是自定義子域 $1，該子域未設置正確的 CNAME 記錄。我們建議您將此 CNAME 記錄設置為指向 [YOUR USERNAME].github.io。有關詳細信息，請參閱"],

                    "DNS records should point to the": "DNS記錄應該指向",
                    "internationalized domain name": "國際化域名",

                    // 頂部提醒
                    "No changes to custom domain.": "沒有對自定義域進行修改。",
                    "Custom domain removed. Please remember to remove any GitHub Pages DNS records for this domain if you do not plan to continue using it with GitHub Pages.": "自定義域已刪除。如果您不打算繼續使用 GitHub Pages，請記得刪除此域的任何 GitHub Pages 的 DNS 記錄。",

                "Enforce HTTPS": "強制 HTTPS",
                    "— Required for your site because you are using the default domain (": "— 必須先設置自定義域，目前您正在使用默認域 (",

                    "HTTPS provides a layer of encryption that prevents others from snooping on or tampering with traffic to your site.": "HTTPS 提供了一層加密，防止他人窺探或篡改您站點的流量。",
                    "When HTTPS is enforced, your site will only be served over HTTPS.": "當開啟強制 HTTPS 時，您的站點將只通過 HTTPS 提供服務。",
                    "Learn more about securing your GitHub Pages site with HTTPS": "了解更多關於使用 HTTPS 保護 GitHub Pages 站點安全的信息",

            "Visibility": "可見性",
                "GitHub Enterprise": "GitHub 企業版",
                "With a GitHub Enterprise account, you can restrict access to your GitHub Pages site by publishing it privately. A privately published site can only be accessed by people with read access to the repository the site is published from. You can use privately published sites to share your internal documentation or knowledge base with members of your enterprise.": "使用 GitHub 企業版帳戶，您可以通過私下發布來限制對 GitHub Pages 站點的訪問。私下發布的站點只能由對發布該站點的倉庫具有讀取權限的人訪問。您可以使用私下發布的站點與企業成員共享您的內部文檔或知識庫。",
                "Try GitHub Enterprise risk-free for 30 days": "免費無風險試用 GitHub 企業版 30 天",
                "Learn more about the visibility of your GitHub Pages site": "了解更多關於GitHub Pages 站點可見性的信息",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?) DNS check is in progress./, "$1 的 DNS 檢查正在進行。"],
        [/([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?) is improperly configured/, "$1 配置不正確"],
        [/Your site's DNS settings are using a custom subdomain, ([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?), that's not set up with a correct CNAME record. We recommend you set this CNAME record to point at [YOUR USERNAME].github.io. For more information, see/, "您網站的 DNS 設置使用的是自定義子域 $1，該子域未設置正確的 CNAME 記錄。我們建議您將此 CNAME 記錄設置為指向 [YOUR USERNAME].github.io。有關詳細信息，請參閱"],
    ],
};

I18N.zh["repository/settings/security_analysis"] = { // 倉庫設置 - 程式碼安全性與分析 /<user-name>/<repo-name>/settings/security_analysis
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 程式碼安全性與分析 /<user-name>/<repo-name>/settings/security_analysis
            "Security and analysis features help keep your repository secure and updated. By enabling these features, you're granting us permission to perform read-only analysis on your repository. Unarchive your repository to access additional features.": "安全和分析功能有助於確保您的倉庫安全和更新。通過啟用這些功能，您授予我們對您的倉庫執行只讀分析的權限。解除您倉庫的存檔以訪問其他功能。", //存檔倉庫
            "Security and analysis features help keep your repository secure and updated. By enabling these features, you're granting us permission to perform read-only analysis on your repository.": "安全和分析功能有助於確保您的倉庫安全和更新。通過啟用這些功能，您授予我們對您的倉庫執行只讀分析的權限。",

            "Private vulnerability reporting": "私下漏洞報告",
                "Allow your community to privately report potential security vulnerabilities to maintainers and repository owners.": "允許您的社區向維護者和倉庫所有者私下報告潛在的安全漏洞。",
                "Learn more about private vulnerability reporting": "了解更多關於私下漏洞報告的信息",

            "Dependency graph": "依賴關係圖",
                "Understand your dependencies.": "了解您的依賴項。",
                "Dependency graph is always enabled for public repos.": "公共倉庫始終啟用依賴關係圖。",

                // 禁用對話框
                    "Disable dependency graph": "禁用依賴關係圖",
                        "Disabling the dependency graph will also disable Dependabot alerts and Dependabot security updates.": "禁用依賴關係圖也將同時禁用 Dependabot 警報和 Dependabot 安全更新。", // Dependabot 警報和 Dependabot 安全更新啟用時
                        "Disabling the dependency graph will also disable Dependabot alerts.": "禁用依賴關係圖也將同時禁用 Dependabot 警報。", // Dependabot 警報啟用, Dependabot 安全更新未啟用時

            // Dependabot
                "Keep your dependencies secure and up-to-date.": "保持您的依賴關係的安全和最新",
                "Learn more about Dependabot": "了解更多關於 Dependabot 的信息",

                "Dependabot alerts": "Dependabot 警報",
                    "Receive alerts for vulnerabilities that affect your dependencies and manually generate Dependabot pull requests to resolve these vulnerabilities.": "接收影響您的依賴關係的漏洞警報，並手動生成 Dependabot 拉取請求以解決這些漏洞。",
                    "Configure alert notifications": "配置警報通知",

                    // 啟用對話框
                        "Enable Dependabot alerts": "啟用 Dependabot 警報",
                            "Dependabot alerts needs the dependency graph to be enabled, so we'll turn that on too.": "Dependabot 警報需要啟用依賴關係圖，因此我們也將啟用它。", // 依賴關係圖未啟用時

                    // 禁用對話框
                        "Disable Dependabot alerts": "禁用 Dependabot 警報",
                            "Disabling Dependabot alerts will also disable Dependabot security updates.": "禁用 Dependabot 警報也將同時禁用 Dependabot 安全更新。", // Dependabot 安全更新啟用時

                    "Dependabot rules": "Dependabot 規則",
                        "Create your own custom rules and manage alert presets.": "創建您自己的自定義規則並管理警報預設。",
                        "Review and manage alert presets.": "查看和管理警報預設。", //私有庫
                        // [/(\d+) rules? enabled/, "已啟用 $1 條規則"],

            "Dependabot security updates": "Dependabot 安全更新",
                "Enabling this option will result in Dependabot automatically attempting to open pull requests to resolve every open Dependabot alert with an available patch.": "啟用後，Dependabot 會自動嘗試打開拉取請求，以使用可用補丁解決每個打開的 Dependabot 警報。",
                "Enabling this option will result in Dependabot automatically attempting to open pull requests to resolve every open Dependabot alert with an available patch. If you would like more specific configuration options, leave this disabled and use": "啟用後，Dependabot 會自動嘗試打開拉取請求，以使用可用補丁解決每個打開的 Dependabot 警報。如果您想要更具體的配置選項，請將其禁用並使用",
                    // "Dependabot rules": "Dependabot 規則",

                // 啟用對話框
                    "Enable Dependabot security updates": "啟用 Dependabot 安全更新",
                        "Dependabot security updates needs the dependency graph and Dependabot alerts to be enabled, so we'll turn them on too.": "Dependabot 安全更新需要啟用依賴關係圖和 Dependabot 警報，因此我們也將啟用他們。",
                        "Dependabot security updates needs Dependabot alerts to be enabled, so we'll turn that on too.": "Dependabot 安全更新需要啟用 Dependabot 警報，因此我們也將啟用它。",

            "Grouped security updates": "分組安全更新",
                "Groups all available updates that resolve a Dependabot alert into one pull request (per package manager and directory of requirement manifests). This option may be overridden by group rules specified in dependabot.yml -": "將解決可靠警報的所有可用更新分組為一個拉取請求（每個包管理器和需求清單目錄）。該選項可被 dependabot.yml 中指定的組規則覆蓋 -",
                "learn more here": "在此了解更多",

                // 對話框
                    "Grouped security updates needs the dependency graph, Dependabot alerts and Dependabot security updates to be enabled, so we'll turn them on too": "分組安全更新需要啟用依賴關係圖、Dependabot 警報和 Dependabot 安全更新，因此我們也將啟用他們。",
                    "Grouped security updates needs Dependabot alerts and Dependabot security updates to be enabled, so we'll turn them on too.": "分組安全更新需要啟用 Dependabot 警報和 Dependabot 安全更新，因此我們也將啟用他們。",
                    "Grouped security updates needs Dependabot security updates to be enabled, so we'll turn that on too.": "分組安全更新需要啟用 Dependabot 安全更新，因此我們也將啟用它。",

            "Dependabot version updates": "Dependabot 版本更新",
                "Enable Dependabot version updates": "啟用 Dependabot 版本更新",
                "Allow Dependabot to open pull requests automatically to keep your dependencies up-to-date when new versions are available.": "允許 Dependabot 自動打開拉取請求，以便在有新版本時保持您的依賴關係是最新的。",
                "Learn more about configuring a dependabot.yml file": "了解更多關於配置 dependabot.yml 文件的信息",
                "Configure": "配置",
                "― Create a config file": "― 創建配置文件",

            "Code scanning": "程式碼掃描",
                "Automatically detect common vulnerabilities and coding errors.": "自動檢測常見漏洞和編碼錯誤。",

                "Code scanning with GitHub Actions is not available for this repository.": "使用 GitHub Actions 進行程式碼掃描不適用於該倉庫。",

                // 組織倉庫
                "GitHub Actions is disabled on this repostiory by an enterprise or organization policy. To use code scanning, please ask your organization administrator to enable Actions, or": "企業或組織策略在此倉庫上禁用了 GitHub Actions。要使用程式碼掃描，請要求您的組織管理員啟用 GitHub Actions，或者",
                "submit code scanning results externally using the API": "使用 API 在程式碼掃描外部結果",

                "Tools": "工具",
                    "CodeQL analysis": "CodeQL 分析",
                        "Identify vulnerabilities and errors with": "識別程式碼中的漏洞和錯誤，通過",
                        "for": "為",
                        "eligible": "符合條件的",
                        "repositories.": "倉庫。",
                        "Set up": "設置",
                        "Default": "默認",
                            "CodeQL will automatically find the best configuration for your repository.": "CodeQL 將自動給您的倉庫找到最佳配置。",
                            "Languages detected in this repository are not compatible with this setup type at this time. Use the advanced setup instead.": "目前，該倉庫中檢測到的語言與該設置類型不兼容。請使用高級設置。",
                        "Advanced": "高級",
                            "Customize your CodeQL configuration via a YAML file checked into the repository.": "通過倉庫中的 YAML 文件定制您的 CodeQL 配置。",
                        "Not supported": "不支持",
                        "Languages on this repository are not compatible with this feature. Learn more about": "該倉庫上的語言與此功能不兼容。了解更多關於",
                        "supported languages and frameworks": "所支持的語言和框架",
                    "Other tools": "其他工具",
                        "Add any third-party code scanning tool.": "添加任意第三方程式碼掃描工具。",
                        "Explore workflows": "探索工作流程",

                "Protection rules": "保護規則",
                    "Pull request check failure": "拉取請求檢查失敗",
                        "Define which code scanning alert severity should cause a pull request check to fail. This also applies to analysis results uploaded via the API.": "定義哪種程式碼掃描警報嚴重程度會導致拉取請求檢查失敗。這也適用於通過 API 上傳的分析結果。",

                        "None": "無",
                        "Only critical": "僅關鍵風險",
                        "High or higher": "高風險及以上",
                        "Medium or higher": "中風險及以上",
                        "Any": "任何",
                        "Other": "其他",
                            "Only errors": "僅錯誤",
                            "Errors and warnings": "錯誤和警告",

                    "Check runs failure threshold": "檢查運行失敗閥值",
                        "Select the alert severity level for code scanning check runs to fail.": "選擇程式碼掃描檢查運行失敗的警報嚴重性級別。",
                        "Create a branch ruleset": "創建分支規則集",
                        "to prevent a branch from merging when these checks fail.": "以防止分支在這些檢查失敗時被合併。",

                // 頂部提醒
                "Code Scanning alert severity settings saved.": "程式碼掃描警報嚴重性設置已保存。",

            "Secret scanning": "機密掃描",
                "Receive alerts on GitHub for detected secrets, keys, or other tokens.": "在 GitHub 上接收有關檢測到的機密、密鑰或其他令牌的警報。",
                "GitHub will always send alerts to partners for detected secrets in public repositories.": "GitHub 會始終向合作夥伴發送檢測到公共倉庫中機密的警報。",
                "Learn more about partner patterns": "了解更多關於合作夥伴模式的信息",
                    "Push protection": "推送保護",
                    "Block commits that contain": "阻止推送包含",
                    "supported secrets": "支持的機密",

            // 組織倉庫
            "Access to alerts": "訪問警報",
            "Admins, users, and teams in the list below have permission to view and manage code scanning, Dependabot, or secret scanning alerts. These users may be notified when a new vulnerability is found in one of this repository's dependencies and when a secret or key is checked in. They will also see additional details when viewing Dependabot security updates. Individuals can manage how they receive these alerts in their": "以下列表中的管理員、用戶和團隊有權限查看和管理程式碼掃描、Dependabot 或機密掃描警報。當在此倉庫的依賴項之一中發現新的漏洞，以及當機密或令牌被嵌入時，可能會通知這些用戶。在查看 Dependabot 安全更新時，他們還會看到其他詳細信息。用戶可以管理他們如何接收這些警報，在他們的",
            "notification settings": "通知設置",

            "Choose the people or teams you would like to grant access": "選擇您要授予訪問權限的人員或團隊",
            "Search for people or teams": "搜索人員或團隊",
            "People and teams with access": "具有訪問權限的人員和團隊",
            "Organization administrators, repository administrators, and teams with the security manager role": "具有安全管理員角色的組織管理員、倉庫管理員和團隊",
            "These members always see code scanning, Dependabot, and secret scanning alerts.": "這些成員總是能看到程式碼掃描、Dependabot 和機密掃描警報。",
            "Save changes": "保存更改",
    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/(\d+) rules? enabled/, "已啟用 $1 條規則"],
    ],
};

I18N.zh["repository/settings/keys"] = { // 倉庫設置 - 部署密鑰 /<user-name>/<repo-name>/settings/keys
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 部署密鑰 頁面 /<user-name>/<repo-name>/settings/keys====================================
            "Add deploy key": "添加部署密鑰",
            "There are no deploy keys for this repository": "此倉庫暫無部署密鑰",
            "Check out our": "查看我們的",
            "guide on deploy keys": "部署密鑰指南",
            "to learn more.": "了解更多。",
            "Last used within the last week": "最後一次使用是最近 1 周之內",
            "— Read/write": "— 讀取和寫入權限",
            "— Read": "— 讀取權限",

            // 密鑰刪除對話框
            "Are you sure you want to delete this SSH key?": "您確定要刪除此 SSH 密鑰嗎？",
            "This action": "該操作",
            "cannot": "不能",
            "be undone. This will permanently delete the SSH key, and if you’d like to use it in the future, you will need to upload it again.": "被撤銷。這將永久地刪除 SSH 密鑰，如果您想在未來使用它，您將需要再次上傳它。",
            "I understand, delete this SSH key": "我明白了，依然刪除該 SSH 密鑰",

            // 頂部提醒
            "Okay, you have successfully deleted that key.": "好的，您已成功刪除該密鑰。",
            "Key is invalid. You must supply a key in OpenSSH public key format": "密鑰無效。您必須提供 OpenSSH 公鑰格式的密鑰",

        // 部署密鑰新建 頁面 /<user-name>/<repo-name>/settings/keys/new====================================
            "/ Add new": "/ 新添",
            "Title": "標題",
            "Key": "密鑰",
            "Allow write access": "允許寫訪問",
            "Can this key be used to": "該密鑰允許",
            "push": "推送",
            "to this repository? Deploy keys always have pull access.": "到這個倉庫？部署密鑰始終具有拉取訪問權限。",
            "Add key": "添加密鑰",
            // 頂部提醒
            "Key is invalid. You must supply a key in OpenSSH public key format": "密鑰無效。您必須提供 OpenSSH 公鑰格式的密鑰",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Last used within the last (\d+) weeks?/, "最後一次使用是最近 $1 周之內"], // /keys
        [/Last used within the last (\d+) months?/, "最後一次使用是最近 $1 個月之內"], // /keys
    ],
};

I18N.zh["repository/settings/secrets"] = { // 倉庫設置 - 機密 /<user-name>/<repo-name>/settings/secrets
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 操作機密 /<user-name>/<repo-name>/settings/secrets/actions
            "Actions secrets and variables": "操作機密和變量",
            "New repository secret": "新建倉庫機密",
            "Secrets and variables allow you to manage reusable configuration data. Secrets are": "秘密和變量允許您管理可重複使用的配置數據。機密是",
            "encrypted": "被加密",
            "and are used for sensitive data.": "並用於敏感數據。",
            "Learn more about encrypted secrets": "了解更多關於加密機密的信息",
            ". Variables are shown as plain text and are used for": "。變量顯示為純文本，用於",
            "non-sensitive": "不敏感",
            "data.": "數據。",
            "Learn more about variables": "了解更多關於變量的信息",

            "Anyone with collaborator access to this repository can use these secrets and variables for actions. They are not passed to workflows that are triggered by a pull request from a fork.": "任何有協作者權限的人都可以使用這些機密和變量進行操作。它們不會被傳遞到由復刻的拉取請求觸發的工作流中。",

            "Secrets": "機密",
            "Variables": "變量",

            "Updated": "更新於",
            "Remove": "移除",

            // 頂部提醒
            "Failed to add secret. Secret names can only contain alphanumeric characters ([a-z], [A-Z], [0-9]) or underscores (_). Spaces are not allowed. Must start with a letter ([a-z], [A-Z]) or underscores (_).": "添加機密失敗。機密名稱只能包含字母數字字符（[a-z]、[A-Z]、[0-9]）或下劃線 (_)。不允許有空格。必須以字母 ([a-z], [A-Z]) 或下劃線 (_) 開頭。",

            "Environment secrets": "環境機密",
                "This repository has no environment secrets.": "此倉庫尚無環境機密。",
                "Manage environment secrets": "管理環境機密",

            "Repository secrets": "倉庫機密",
                "This repository has no secrets.": "此倉庫尚無機密。",
                "Last updated": "最近更新時間",

            //組織倉庫
            "Secrets can also be created at the organization level and authorized for use in this repository.": "機密也可以在組織層面上創建，並授權在這個倉庫中使用。",
            "Organization secrets": "組織機密",
            "Manage organization secrets": "管理組織機密",
            "Organization secrets can only be used by public repositories on your plan.": "組織機密只能由您計劃中的公共倉庫使用。",
            "If you would like to use organization secrets in a private repository, you will need to upgrade your plan.": "如果您想在私有倉庫中使用組織機密，則需要升級您的計劃。",

            // 刪除機密對話框
            "Delete secret": "刪除機密",
                "Are you sure you want to delete": "您確定要刪除",
                "Yes, delete this secret": "是的，刪除該機密",
                "Yes, delete this": "是的，刪除該",
                "secret": "機密",

            // 頂部提醒
                "Repository secret added.": "添加了倉庫機密。",

        // 操作變量 /<user-name>/<repo-name>/settings/variables/actions
            "Environment variables": "環境變量",
                "This repository has no environment variables.": "此倉庫尚無環境變量。",
                "Manage environment variables": "管理環境變量",

                "Environment": "環境",

            "Repository variables": "倉庫變量",
                "New repository variable": "新建倉庫變量",
                "This repository has no variables.": "此倉庫尚無變量。",

            // 刪除變量對話框
            "Delete variable": "刪除變量",
                "Yes, delete this variable": "是的，刪除該變量",
                "variable": "變量",

        // 新建倉庫機密 /<user-name>/<repo-name>/settings/secrets/actions/new
            "Actions secrets": "操作機密",
            "/ New secret": "/ 新建機密",

            "Name": "名稱",
            "Secret": "機密",

            "Add secret": "添加機密",
                "Adding…": "添加中…",

        // 新建倉庫變量 /<user-name>/<repo-name>/settings/variables/actions/new
            "Actions variables": "操作變量",
            "/ New variable": "/ 新建變量",
            "Note: Variable values are exposed as plain text. If you need to encrypt and mask sensitive information,": "注意：變量值是以純文本形式暴露的。如果您需要對敏感信息進行加密和屏蔽，請使用",
            "create a secret": "創建機密",
            "instead.": "代替。",

            "Alphanumeric characters ([a-z], [A-Z], [0-9]) or underscores (_) only.": "字母數字字符（[A-Z]，[A-Z]，[0-9]）或僅下劃線（_）。",
            "Spaces are not allowed.": "不允許出現空格。",
            "Cannot start with a number.": "不能以數字開頭。",
            "Cannot start with": "不能以",
            "prefix.": "前綴開頭。",

            "Add variable": "添加變量",
                "Adding…": "添加中…",

        // 更新操作機密 /<user-name>/<repo-name>/settings/secrets/actions/<name>
            "/ Update secret": "/ 更新機密",

            "Value": "值",

            "Update secret": "更新機密",
                "Updating…": "更新中…",

        // 程式碼空間機密 /<user-name>/<repo-name>/settings/secrets/codespaces
            "Codespaces secrets": "程式碼空間機密",
            "Development environment secrets are environment variables that are": "開發環境機密是環境變量",
            ". Secrets are not passed to forks.": "。機密不會傳遞給復刻。",

            "Repository development environment secrets": "倉庫開發環境機密", // 組織倉庫
            "Organization development environment secrets": "組織開發環境機密", // 組織倉庫

        // Dependabot 機密 /<user-name>/<repo-name>/settings/secrets/dependabot
            "Dependabot secrets": "Dependabot 機密",
            "Secrets are credentials that are": "機密是憑證",
            ". Anyone with": "。任何對此倉庫具有",
            "collaborator": "協作者",
            "access to this repository can use these secrets for Dependabot.": "訪問權限的人可以將這些機密用於 Dependabot。",
            "Secrets are not passed to forks.": "機密不會傳遞給復刻。",
            "Encrypted secrets allow you to store private access tokens so that Dependabot can update dependencies from private registries.": "加密的機密允許您存儲私有訪問令牌，以便 Dependabot 可以從私有註冊表更新依賴項。",

            // 組織倉庫
            "No organization secrets have been authorized for this repository.": "該倉庫暫無授權任何組織機密。",
            // [/Organization secrets for ([^ ]+) can be managed within/, "$1  的組織機密可以管理，在"],
            "organization settings": "組織設置",

            // 頂部提醒
            "Secret updated.": "機密已更新",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
        [/Organization secrets for ([^ ]+) can be managed within/, "$1  的組織機密可以管理，在"], // /secrets/dependabot
    ],
};
I18N.zh["repository/settings/variables"] = I18N.zh["repository/settings/secrets"];

I18N.zh["repository/settings/installations"] = { // 倉庫設置 - GitHub 應用 /<user-name>/<repo-name>/settings/installations
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 集成應用 頁面 /<user-name>/<repo-name>/settings/installations====================================
        // 全局設置在 Applications 應用 /settings/installations
            "Installed GitHub Apps": "安裝的 GitHub 應用",
            "GitHub Apps augment and extend your workflows on GitHub with commercial, open source, and homegrown tools.": "GitHub 應用通過商業、開源和自主開發的工具來增強和擴展您在 GitHub 上的工作流程。",
            "Configure": "配置",

            "There aren't any GitHub Apps installed on this repository.": "此倉庫上未安裝任何 GitHub 應用。",
            "Suspended": "已暫停",
            "Developed by": "開發者:",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/settings/notifications"] = { // 倉庫設置 - 郵件通知 /<user-name>/<repo-name>/settings/notifications/edit
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],

        // 郵件通知管理 頁面 /<user-name>/<repo-name>/settings/notifications/edit ====================================
            "Setup email addresses to receive notifications when push events are triggered.": "設置電子郵箱地址，以便在推送事件被觸發時收到通知。",
            "Asterisk (*) denotes a required field": "星號 (*) 表示必填字段",
            "Address": "電子郵箱地址",
            "Whitespace separated email addresses (at most two).": "用空格分隔的電子郵箱地址（最多兩個）。",
            "Approved header": "批准的標題",
            "Sets the": "設置",
            "Active": "激活",
            "header to automatically approve the message in a read-only or moderated mailing list.": "標頭以自動批准只讀或審核郵件列表中的郵件。",
            "We will send notification emails to the listed addresses when a": "我們將向所列地址發送通知郵件，當",
            "event is triggered.": "事件被觸發。",
            "Setup notifications": "設置通知",

    },
    "regexp": [ // 正則翻譯
        ...I18N.zh["repository-public"]["regexp"],
    ],
};

I18N.zh["repository/transfer"] = { // 轉讓倉庫
    "static": { // 靜態翻譯

        // 轉讓倉庫 /<user-name>/<repo-name>/transfer
            "Transfer this repository to another user or to an organization where you have the ability to create repositories.": "將該倉庫轉讓給另一位用戶或一個您可以創建倉庫的組織。",
            "Required fields are marked with an asterisk (*).": "帶星號 (*) 的為必填項。",
            "To understand admin access, teams, issue assignments, and redirects after a repository is transferred, see": "要了解倉庫轉移後的管理員訪問權限、團隊、議題分配和重定向，請參閱",
            "Transferring a repository": "轉讓倉庫",
            "in GitHub Help.": "在 GitHub 幫助中。",
            "Transferring may be delayed until the new owner approves the transfer.": "轉讓可能會延遲，直到新所有者批准轉讓。",
            "There": "有",
            "are": " ",
            "is": " ",
            "that may be affected by this transfer.": "可能受到這次轉讓的影響。",
            "New owner": "新所有者",
            "Select one of my organizations": "選擇一個我的組織",
            "Choose an owner": "選擇所有者",
            "Filter…": "篩選…",
            "Specify an organization or username": "指定組織或用戶名",
            "Repository name": "倉庫名",
                "Checking availability…": "檢查可用性…",
                "The repository": "倉庫",
                "already exists on this account": "已經存在於此帳戶",
                "Your new repository will be created as": "您的新倉庫將被創建為",
                "New repository name must not be blank": "新倉庫名稱不能為空",

            // 私有倉庫轉讓
                "If": "如果",
                "username": "用戶名",
                "is using": "使用",
                "and accepts the transfer, they will lose access to private repository features:": "並接受轉移，他們將失去對私有倉庫功能的訪問：",
                "Code owners": "程式碼所有者",
                "Any existing": "任何已存在的",
                "wikis": "WiKi",
                "Pulse, Contributors, Community, Traffic, Commits, Code Frequency, Network,": "統計，貢獻者，社區，流量，提交，程式碼頻率，網絡，",
                "Forks": "復刻",
                "on the": "在",
                "Insights": "洞察",
                "tab": "標籤頁",
                "Draft": "草案",
                "PRs": "拉取請求",
                "Multiple assignees": "多個受讓人",
                "for issues and PRs": "的議題和拉取請求",
                "Multiple reviewers": "多個審查者",
                "for PRs": "的拉去請求",
                "Branch and tag protection rules": "分支和標籤保護規則",

                "can": "可",
                "upgrade": "升級",
                "their plan before accepting the transfer to avoid losing access.": "他們的計劃在接受轉讓之前，以避免失去訪問權。",

            "Individual users, teams, and apps will be removed from the following options:": "個人用戶、團隊和應用將從以下選項中刪除：",
                "Repository ruleset bypassers": "倉庫規則旁路設置",
                "Protected branch pull request bypassers": "受保護分支拉取請求旁路設置",
                "Protected branch authorized pull request review dismissers": "受保護分支授權拉取請求審核駁回者",
                "Protected branch authorized pushers": "受保護分支授權的推送者",
                "Protected branch allowed force pushers": "受保護分支允許強制推送者",

            "Warning: This is a potentially destructive action.": "警告：這是一個潛在的破壞性行為。",

            "to confirm.": "進行確認。",
            "I understand, transfer this repository.": "我明白了，依然轉讓該倉庫。",

    },
    "regexp": [ // 正則翻譯
        [/Transfer repository:/, "轉讓倉庫:"],
        [/(\d+) codespaces?/, "$1 個程式碼空間"],
        [/is available./, "名稱可用。"],
    ],
};

I18N.zh["repository/codespaces"] = { // 倉庫 - 程式碼空間界面 /<user-name>/<repo-name>/codespaces
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],

        // 倉庫 - 程式碼空間界面 /<user-name>/<repo-name>/codespaces
            "Codespace usage for this repository is paid for by": "該倉庫的程式碼空間使用費由以下人員支付",
            "Getting started with GitHub Codespaces": "GitHub 程式碼空間入門",
                "Learn core concepts": "學習核心概念",
                    "New to Codespaces?": "剛接觸程式碼空間？",
                    "Start here": "從這裡開始",
                    ". Learn the core concepts and how to get started.": "。學習核心概念以及如何開始。",
                "Configure and manage": "配置和管理",
                    "Learn more about features like": "了解更多關於功能的信息，例如",
                    "secret management": "機密管理",
                    "port forwarding": "端口轉發",
                "Develop locally": "在本地開發",
                    "Access codespaces from within": "從內部訪問程式碼空間，使用",

            "Go to docs": "轉到文檔",
            // [/Create codespace on ([^ ]+)/, "在 $1 上創建程式碼空間"],
                    "2-core • 8GB RAM • 32GB": "雙核 • 8GB 內存 • 32GB 硬盤",
                "Configure and create codespace": "配置並創建程式碼空間",
                    "Show advanced options before launching codespace": "啟動程式碼空間前顯示高級選項",
            "Opening in codespace": "在程式碼空間中打開",

            "4-core • 16GB RAM • 32GB": "四核 • 16GB 內存 • 32GB 硬盤",

            // [/(\d+) codespaces?/, "$1 個程式碼空間"],
            "Retrieving…": "正在檢索…",
            "Active": "活躍",
            "Show more actions for codespace": "顯示程式碼空間的更多操作",
                "Rename": "重命名",
                    "Rename codespace": "重命名程式碼空間",
                    "Name": "名稱",
                "Export changes to a branch": "將更改導出到分支",
                    "This will create a new branch with any unpushed changes": "這將創建一個包含任何未推送更改的新分支",
                    "Checking branch status": "檢查分支情況",
                    "Create branch": "創建分支",
                "Export changes to a fork": "將更改導出到復刻",
                    "You do not have write access to this codespace's repository. This will create a new fork of the repository at": "您沒有對此程式碼空間的存儲庫的寫訪問權限。這將創建一個新的存儲庫分支在",
                    ", reassign your codespace to that fork, and export your changes to a new branch.": "，將程式碼空間重新分配給該復刻，並將更改導出到新分支。",
                    "Create fork": "創建復刻",
                "Change machine type": "修改機器類型",
                    "Change codespace machine type": "修改程式碼空間機器類型",
                        "Machine type": "機器類型",
                            "2-core": "雙核",
                            "8GB RAM • 32GB": "8GB 內存 • 32GB 硬盤",
                            "4-core": "四核",
                            "16GB RAM • 32GB": "16GB 內存 • 32GB 硬盤",
                        "Update codespace": "更新程式碼空間",
                "Stop codespace": "停止程式碼空間",
                "Auto-delete codespace": "自動刪除程式碼空間",
                "Open in Browser": "在瀏覽器中打開",
                "Open in Visual Studio Code": "在 Visual Studio Code 中打開",
                "Open in JetBrains Gateway": "在 JetBrains Gateway 中打開",
                "Open in JupyterLab": "在 JupyterLab 中打開",

    },
    "regexp": [ // 正則翻譯
        [/Create codespace on ([^ ]+)/, "在 $1 上創建程式碼空間"],
        [/(\d+) codespaces?/, "$1 個程式碼空間"],
        [/Last used ([^ ]+)/, "上次使用 $1"],
    ],
};

// 倉庫相關==

I18N.zh["homepage"] = { // 未登錄的首頁
    "static": { // 靜態翻譯
        // 頂部欄
        "Product": "產品",
        "Team": "團隊",
        "Enterprise": "企業",
        // "Pricing": "價格",
        "Search GitHub": "在 GitHub 上搜索",
        "Sign in": "登錄",
        "Sign up": "註冊",

        "Let’s build from here": "讓我們從這裡開始",
        "The world’s leading AI-powered developer platform.": "全球領先的人工智能開發者平台。",

        "Email address": "電子郵箱地址",
        "Sign up for GitHub": "註冊 GitHub",
        "Start a free enterprise trial": "開始免費試用企業版",

        "Trusted by the world’s leading organizations ↘︎": "全球領先機構所信賴的合作夥伴 ↘︎",

        "Productivity": "生產力",
        "Accelerate innovation": "加快創新",
        "Our AI-powered platform increases the pace of software development.": "我們的人工智能平台加快了軟件開發的步伐。",

        "empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.": "能夠為開發者提供上下文化的 AI 編程輔助，幫助他們在整個工作流程中完成任務的速度提高 55%。",
        "Explore GitHub Copilot": "探索 GitHub Copilot",

        "Did you know?": "您知道嗎?",

        "22% increase": "22% 效率提升",
        "in developer productivity after three years with GitHub": "使用 GitHub 三年後，開發人員的工作效率",
        "Read the report": "閱讀報告",

        "automates your build, test, and deployment workflow with simple and secure CI/CD.": "可以使用簡單且安全的 CI/CD 來自動化您的構建、測試和部署工作流。",
        "Discover GitHub Actions": "探索 GitHub Actions",

        "GitHub Codespaces": "GitHub 程式碼空間",
        "offers a complete dev environment in seconds. Code, build, test, and open pull requests from any repo.": "可在幾秒鐘內提供完整的開發環境。可在任何程式碼庫中編寫程式碼、構建、測試並打開拉取請求。",
        "Check out GitHub Codespaces": "查看 GitHub 程式碼空間",

        "fits your projects in your pocket, so you never miss a beat while on the go.": "讓您的項目盡在掌握，讓您在旅途中永不遺漏任何信息。",
        "Download GitHub Mobile": "下載 GitHub Mobile",

        "Application security": "應用安全",
        "Empower developers": "為開發者賦能",
        "With GitHub, you can secure code in minutes.": "通過 GitHub，您可以在幾分鐘內保護程式碼安全",

        "GitHub Advanced Security": "GitHub 高級安全功能",
        "enables you to find and fix vulnerabilities with ease and ship secure code quickly.": "可幫助您輕鬆發現和修復漏洞，並快速發布安全程式碼。",
        "Dive into GitHub Advanced Security": "深入了解 GitHub 高級安全功能",

        "7x faster": "快 7 倍",
        "vulnerability fixes with GitHub": "GitHub 漏洞修復速度",

        "Code scanning": "程式碼掃描",
        "is our code analysis tool that helps you remediate issues in your code.": "是我們的程式碼分析工具，可以幫助您修復程式碼中的問題。",
        "Download the latest SAST ebook": "下載最新 SAST 電子書",

        "makes it easy to find and fix vulnerable dependencies in your supply chain.": "易於發現和修復供應鏈中的脆弱依賴項。",
        "Explore Dependabot": "探索 Dependabot",

        "Secret scanning": "機密掃描",
        "automatically looks for partner patterns and prevents fraudulent use of accidentally committed secrets.": "可以自動尋找合作夥伴模式，並防止意外泄露的機密被惡意使用。",
        "Read about secret scanning": "了解機密掃描",

        "Collaboration": "協作",
        "Supercharge collaboration": "加強協作",
        "GitHub helps your teams work more efficiently together.": "GitHub 幫助您的團隊更高效地協作。",

        "GitHub Issues and GitHub Projects": "GitHub 議題和 GitHub 項目",
        "supply project management tools that adapt to your team alongside your code.": "提供了適合您的團隊和程式碼的項目管理工具。",
        "Get started with GitHub Issues": "開始使用 GitHub 議題",

        "reduction in onboarding time with GitHub": "使用 GitHub 縮短入職時間",

        "GitHub Discussions": "GitHub 討論",
        "creates space to ask questions and have open-ended conversations.": "營造了提問和開放式對話的空間。",
        "Jump into GitHub Discussions": "跳轉到 GitHub 討論",

        "allow real-time communication and collaboration about code changes.": "允許就程式碼更改進行實時交流和協作。",
        "Check out pull requests": "查看拉取請求",

        "GitHub Sponsors": "GitHub 贊助者",
        "lets you support your favorite open source maintainers and projects.": "讓您能夠支持您喜歡的開源維護者和項目。",
        "Invest with GitHub Sponsors": "通過 GitHub 贊助者進行投資",

        "Over 100 million developers call GitHub home": "超過 1 億開發者把 GitHub 視為自己的家",
        "Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join the world’s largest developer platform to build the innovations that empower humanity. Let’s build from here.": "無論您是正在擴大創業規模，還是剛剛開始學習編程，GitHub 都是您的家。加入全球最大的開發者平台，構建賦予人類力量的創新。讓我們從這裡開始。",

        "This 7X times factor is based on data from the industry’s longest running analysis of fix rates Veracode State of Software Security 2023, which cites the average time to fix 50% of flaws as 198 天之前 vs. GitHub’s fix rates of 72% of flaws with 28 天之內 which is at a minimum of 7X faster when compared.": "這個 7 倍的修復速率是基於軟件安全領域持續時間最長的修復率分析數據 —— Veracode《2023 年軟件安全狀況》中提到的，修復 50% 漏洞的平均時間為 198 天，而 GitHub 在 28 天內修復了 72% 的漏洞，相比之下至少快 7 倍。",
        "The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced Security, a commissioned study conducted by Forrester Consulting, 2022. Results are for a composite organization based on interviewed customers.": "由 Forrester Consulting 開展的委託研究《GitHub Enterprise Cloud 和高級安全的總體經濟影響》(The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced Security)，其結果顯示了基於受訪客戶的綜合組織的結果。",
        "There are now 100 million developers around the world using GitHub.": "現在全球有 1 億開發者使用 GitHub。",
        "Read the blog post": "閱讀博客文章",

        "Sitemap": "網站地圖",
        "What is Git?": "什麼是 Git？",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["session-authentication"] = { // 登錄頁 包含(/login, /session, /sessions/two-factor, sessions/recovery, /sessions/recovery/token, /password_reset等)
    "static": { // 靜態翻譯

        // 登錄頁 https://github.com/login
            "Sign in to GitHub": "登錄 GitHub",
            "Sign in to": "登錄",
            "to continue to": "繼續登錄",
            "Username or email address": "用戶名或電子郵箱",
            "Password": "密碼",
            "Forgot password?": "忘記密碼？",
            "Sign in": "登錄",
            "Sign in with a passkey": "使用通行密鑰登錄",
            "Signing in…": "登錄中…",

            "Add an account": "添加賬號", // 添加新賬號
            "Want to create an account?": "想要新建一個帳戶嗎？", // 添加新賬號

            "Or": "或",
            // "This browser or device does not fully support passkeys.": "此瀏覽器或設備不完全支持通行密鑰。",
            "This browser or device is reporting partial passkey support.": "此瀏覽器或設備報告部分支持通行密鑰。",
            "Sign-in with a passkey": "使用通行密鑰登錄",

            "New to GitHub?": "初次接觸 GitHub？",
            "Create an account": "那就註冊個帳戶吧",

            "Contact GitHub Support": "聯繫 GitHub 支持",

            // 驗證狀態提醒
            "Incorrect username or password.": "用戶名或密碼不正確。",
            "Recovery code authentication failed.": "恢復碼身份驗證失敗。",

        // 設備激活 https://github.com/login/device
            "Device Activation": "設備激活",
            "Enter the code displayed on your device": "輸入您的設備上顯示的程式碼",
            "Continue": "繼續",
            "GitHub staff will never ask you to enter your code on this page.": "GitHub 工作人員絕不會要求您在此頁面上輸入您的程式碼。",

        // https://github.com/login/device/failure?reason=not_found
            "Uh oh, we couldn't find anything": "呃，我們找不到任何東西",
            "Please make sure you entered the user code correctly.": "請確保您輸入正確的用戶程式碼。",

        // 雙重身份驗證登錄 https://github.com/sessions/two-factor/app
            // "Learn more": "了解更多",
            // "Learn more.": "了解更多。",
            "Confirm password to continue": "確認密碼以繼續",
            "Confirm password": "確認密碼",
            "Tip:": "提示：",

            "Two-factor authentication": "雙重身份驗證",
            "Authentication code": "驗證碼",
                "More information about Authentication Codes": "更多關於驗證碼的信息",
            //"Signing in…": "登錄中…",
            "6-digit code": "6位驗證碼",
            "Verify": "驗證",
                "Verifying": "驗證中",
                "Verifying…": "驗證中…",
            "Open the two-factor authenticator (TOTP) app on your mobile device to view your authentication code.": "打開您的移動設備上的 “雙重身份驗證器” 應用（TOTP），以查看您的身份驗證碼。",

            "Use this method for future logins": "今後的登錄中使用此方法",
                "Future logins on this device will prompt you to use": "今後在該設備上的登錄將提示您使用",
                "an authentication code": "一個驗證碼",
                "by default.": "作為默認方式。",

            "Having problems?": "有問題嗎？",
                "Use your passkey": "使用您的通行密鑰",
                "Authenticate with GitHub Mobile": "使用 GitHub Mobile 進行身份驗證",
                "Use a recovery code or begin 2FA account recovery": "使用恢復碼或開始 2FA 帳戶恢復",

        // https://github.com/sessions/two-factor/mobile
            "We sent you a sign-in request on your GitHub Mobile app. Enter the digits shown below to verify your identity.": "我們向您的 GitHub Mobile 應用發送了一個登錄請求。輸入下面顯示的數字以驗證您的身份。",
            "We could not verify your identity": "我們無法核實您的身份",
            "Retry": "請重試",

            "Unable to verify with GitHub Mobile?": "無法使用 GitHub Mobile 進行驗證？",
                "Enter two-factor authentication code": "輸入雙重身份驗證碼",

            // 驗證狀態提醒
            "Sign-in request timed out.": "登錄請求超時。",

        // https://github.com/sessions/two-factor/webauthn
            "Passkey": "通行密鑰",
            "When you are ready, authenticate using the button below.": "準備好後，請使用下面的按鈕進行身份驗證。",
            "Use passkey": "使用通行密鑰",

            "Authentication failed.": "認證失敗。",
            "Retry passkey": "重試通行密鑰",

            "Unable to verify with your passkey?": "無法驗證您的通行密鑰？",

        // 雙重身份驗證恢復 https://github.com/sessions/two-factor/recovery
            "Two-factor recovery": "雙重身份驗證恢復",
            "Recovery code": "恢復碼",

            "If you are unable to access your mobile device, enter one of your recovery codes to verify your identity.": "如果您無法訪問您的移動設備，請輸入您的一個恢復碼以驗證您的身份。",

            "Don't have a recovery code?": "沒有恢復碼？",
            "Where to find recovery codes": "哪裡可以找到恢復碼",

            "Locked out?": "被鎖在外面了嗎？",
            "Try recovering your account, or unlink your account email address(es)": "請嘗試恢復您的帳戶，或取消關聯您的帳戶電子郵件地址。",

            // 恢復帳戶對話框
            "Recovering your account": "恢復您的帳戶",
            "If you can’t access a verified device or recovery codes you can request a reset of your authentication settings. For security reasons": "如果您無法訪問已驗證的設備或恢復碼，您可以請求重置您的驗證設置。出於安全考慮",
            "this can take 1-3 days": "這可能需要 1-3 天",
            "Step 1": "第一步",
            "Verify an email associated with this account.": "驗證與該帳戶相關的電子郵箱。",
            "Step 2": "第二步",
            "Verify a device, SSH key or personal access token.": "驗證一個設備、SSH 密鑰或個人訪問令牌。",
            "Step 3": "第三步",
            "GitHub support will review your request": "GitHub 支持將審查您的請求",
            "within 1-3 days": "在 1-3 天內",
            "I understand, get started": "我知道了，開始吧",

            "Two-factor authentication failed.": "雙重身份驗證失敗。",

        // 帳戶恢復 https://github.com/sessions/recovery
            "Account recovery": "帳戶恢復",
            "The account recovery process can take 1-3 business days. We recommend one of the following if possible.": "帳戶恢復過程可能需要 1-3 個工作日。如果可能，我們推薦以下其中一項。",
            "Enter a recovery code": "輸入恢復碼",
                "The file containing your recovery codes may exist on your computer - check for a file named": "包含恢復碼的文件可能存在於您的計算機上——請檢查一個名為",
            //使用 GitHub Mobile 應用進行身份驗證
            "It looks like you have a GitHub Mobile session that could be used for two-factor authentication. If you have access to your mobile device, you may be able to use it to login.": "看起來您有一個 GitHub Mobile 會話，可以用來進行雙重身份驗證。如果您能訪問您的移動設備，您也許能用它來登錄。",

            "First we need to verify an email address": "首先，我們需要驗證一個電子郵箱地址",
            "by sending a one-time password to all addresses associated with this account.": "用於通過向該帳戶關聯的所有地址發送一次性密碼。",
            "Send one-time password": "發送一次性密碼",

            // 驗證提醒
            "Recovery email sent": "已發送恢復電子郵件",

            "One-time password": "一次性密碼",
            "Verify email address": "驗證電子郵箱地址",
            "We sent an email to all addresses associated with this account containing a one-time password.": "我們向與該帳戶相關的所有郵箱地址發送了一封電子郵件，其中包含一個一次性的密碼。",
            "Resend email": "重新發送郵件",

            "Next we need to verify an alternative factor.": "接下來，我們需要驗證另一個因素。",
            "This can be a verified device, an SSH key or a personal access token associated with this account.": "這可以是一個經過驗證的設備，一個SSH 密鑰或一個與此帳戶相關的個人訪問令牌。",
            "Cannot verify this device": "無法驗證該設備",
            "or verify a": "或者驗證",
            "SSH key": "SSH 密鑰",
            "Personal access token": "個人訪問令牌",

            "Unable to verify an alternative factor?": "無法驗證另一個因素？",
            "Contact support": "聯繫支持部門",

            // "Sign in to": "登錄",
            // "To continue to": "繼續登錄",

            // 定時確認您的帳戶恢復設置
            "Confirm your account recovery settings": "確認您的帳戶恢復設置",
            "Are your account recovery settings up to date? If not, you risk getting locked out of your account.": "您的帳戶恢復設置是否最新？如果沒有，您就有被鎖定帳戶的風險。",
            "Emails": "電子郵箱",
                "View and update your email addresses": "查看和更新您的電子郵箱地址",

                "Verified emails": "經過驗證的電子郵箱",
                    // [/(\d+) verified emails?/, "$1 個經過驗證的郵箱"],
                "Verified emails give you access to more features on GitHub.": "經過驗證的電子郵箱讓您可以使用 GitHub 上的更多功能。",
            "Password Alternatives": "密碼替代方案",
                "Passkeys": "通行密鑰",
                // [/(\d+) keys?/, "$1 個通行密鑰"],
                "Passkeys are a password replacement that validates your identity using touch, facial recognition, a device password, or a PIN.": "通行密鑰是一種密碼替代品，可通過觸摸、面部識別、設備密碼或 PIN 驗證您的身份。",
                    "This browser or device is reporting partial passkey support, but you may be able to use a passkey from a nearby device.": "此瀏覽器或設備報告支持部分通行密鑰，但您也許可以嘗試使用附近設備的通行密鑰。",
            "Two-factor methods": "雙重身份驗證方式",
                "Your preferred 2FA method is": "您首選的 2FA 方式是",
                "Configured": "已配置",
                "Not configured": "未配置",

                "Authenticator app": "身份驗證器應用",
                    "Use an authentication app or browser extension to get two-factor authentication codes when prompted.": "在出現提示時，使用身份驗證應用或瀏覽器擴展獲取雙重身份驗證碼。",
                "SMS/Text message": "短信/文字信息",
                    // [/You will receive one-time codes at this phone number:/, "您將通過以下電話號碼收到一次性驗證碼："], // 已設置短信/文字信息
                "Security keys": "安全密鑰",
                    "Security keys are hardware devices that can be used as your second factor of authentication.": "安全密鑰是一種硬件設備，可以作為您的第二個驗證步驟。",
                "GitHub Mobile": "GitHub Mobile",
                    "GitHub Mobile can be used for two-factor authentication by installing the GitHub Mobile app and signing in to your account.": "通過安裝 GitHub Mobile 應用並登錄帳戶，可以使用 GitHub Mobile 來進行雙重身份驗證。",
                    "No devices": "沒有設備",
                "SMS number": "手機號碼",
            "Recovery options": "恢複選項",
                "Recovery codes": "恢復碼",
                    "Recovery codes can be used to access your account in the event you lose access to your device and cannot receive two-factor authentication codes.": "恢復碼可用於在您無法訪問設備且無法接收雙重身份驗證碼的情況下訪問您的帳戶。",
                    "Viewed": "已查看",

            "Make changes": "進行更改",
            "Confirm": "確認",
            "Remind me later": "稍後提醒我",

        // 驗證個人訪問令牌 https://github.com/sessions/recovery/token
            "Verify a personal access token": "驗證個人訪問令牌",
            "you've used in the past to verify your account. The token must have": "您過去曾用於驗證您的帳戶。令牌必須具有",
            "scope.": "範圍。",
            "Verify and submit for review": "驗證並提交審核",

            // 驗證提醒
            "Unable to verify personal access token": "無法驗證個人訪問令牌",

        // 配置無密碼身份驗證 https://github.com/sessions/trusted-device?return_to=%2Fsettings%2Fsecurity
            "Configure passwordless authentication": "配置無密碼身份驗證",
            "Add a passkey": "添加通行密鑰",
            "Your device supports passkeys, a password replacement that validates your identity using touch, facial recognition, a device password, or a PIN.": "您的設備支持密碼替代方案，通過觸摸、面部識別、設備密碼或者 PIN 碼來驗證您的身份。",

            "Passkeys can be used for sign-in as a simple and secure alternative to your password and two-factor credentials.": "通行密鑰可以作為一種簡單且安全的替代方式，用於登錄而不需要密碼和雙重身份驗證。",
            "Add passkey": "添加通行密鑰",
            "Passkey registration failed.": "密鑰註冊失敗。",
            "Ask me later": "稍後再問",
            "Not interested?": "沒興趣？",
            "Don't ask again for this browser": "不要再詢問此瀏覽器",

            "Successfully added a passkey": "已成功添加通行密鑰",
            "From now on, you can use this passkey to sign-in to GitHub.": "從現在起，您可以使用此通行密鑰登錄 GitHub。",
            "Passkey nickname": "通行密鑰昵稱",
            "Continue...": "繼續中...",

        // 重置密碼 https://github.com/password_reset
            "Reset your password": "重置您的密碼",
            "Enter your user account's verified email address and we will send you a password reset link.": "輸入您的用戶帳戶經過驗證的電子郵箱，我們將向您發送一份帶密碼重置鏈接的郵件。",
            "Enter your email address": "輸入您的郵箱地址",
            "Verify your account": "驗證您的帳戶",
            "Send password reset email": "發送密碼重置郵件",
            "Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.": "檢查您的電子郵件以獲取重置密碼的鏈接。如果它在幾分鐘內沒有出現，請檢查您的垃圾郵件文件夾。",
            "Return to Sign in": "返回登錄",

        // 授權訪問 sudo 模式身份驗證
            "Confirm access": "授權訪問",
            "Authentication code": "驗證碼",
                "More information about sudo mode authentication": "更多關於 sudo 模式身份驗證的信息",
            "Open your two-factor authenticator (TOTP) app or browser extension to view your authentication code.": "打開您的雙重身份驗證器 (TOTP) 應用或瀏覽器擴展以查看您的身份驗證碼。",
            "Verify": "驗證",
            "Verify": "驗證",
            "Verifying…": "驗證中…",
            "Your authentication code has been sent.": "您的驗證碼已發送。",

            "Having problems?": "有問題嗎？",
            "Use GitHub Mobile": "使用 GitHub Mobile",
            "Use your authenticator app": "使用您的身份驗證器應用",
            "Send a code via SMS": "通過短信發送驗證碼",
            "Resend SMS": "重新發送短信",
            "Use your password": "使用您的密碼",

            "GitHub Mobile": "GitHub Mobile",
            "Creating a verification request for your GitHub Mobile app.": "為您的 GitHub Mobile 應用創建驗證請求。",
            "We sent you a verification request on your GitHub Mobile app. Enter the digits shown below to enter sudo mode.": "我們向您的 GitHub Mobile 應用發送了一個驗證請求。輸入下面顯示的數字以進入 sudo 模式。",
            "We could not verify your identity": "我們無法核實您的身份",
            "Retry": "請重試",

            "We just sent you a message via SMS with your authentication code. Enter the code in the form above to verify your identity.": "我們剛剛通過短信向您發送了一條消息，其中包含您的驗證碼。在上面的表格中輸入驗證碼以驗證您的身份。",

            // "Password": "密碼",
            // "Forgot password?": "忘記密碼？",
            "Confirm": "確認",

            "You are entering": "您正在進入",
            "sudo mode": "Sudo 模式",
            ". After you've performed a sudo-protected action, you'll only be asked to re-authenticate again after a few hours of inactivity.": "。在您執行了受 sudo 保護的操作後，在幾個小時不活動後才會要求您重新進行身份驗證。",

        // 首次設置雙重身份驗證 https://github.com/settings/two_factor_authentication/setup/intro

            "Enable two-factor authentication (2FA)": "啟用雙重身份驗證 (2FA)",
            "Loading…": "載入中…",

            // 第1步
                "Setup authenticator app": "設置身份驗證器應用",
                "Authenticator apps and browser extensions like": "身份驗證器應用和瀏覽器擴展，例如",
                ", etc. generate one-time passwords that are used as a second factor to verify your identity when prompted during sign-in.": "等生成一次性密碼，在登錄過程中出現提示時用作第二個因素來驗證您的身份。",

                "Scan the QR code": "掃描二維碼",
                "Re-scan the QR code": "重新掃描二維碼",
                "Use an authenticator app or browser extension to scan.": "請使用身份驗證器應用或瀏覽器擴展進行掃描。",
                "Learn more about enabling 2FA": "了解更多關於啟用 2FA 的信息",

                "Unable to scan? You can use the": "無法掃描？您可以使用",
                "setup key": "設置密鑰",
                "to manually configure your authenticator app.": "手動配置您的身份驗證器應用。",
                    "Your two-factor secret": "您的雙因素密鑰",

                "Verify the code from the app": "驗證來自身份驗證器應用的驗證碼",
                "Two-factor code verification failed. Please try again.": "雙重身份驗證碼驗證失敗。請重試。",

                "Setup SMS authentication": "設置短信驗證",
                    "Get authentication codes by SMS on your mobile phone when signing into GitHub. Make sure that": "登錄 GitHub 時通過手機短信獲取驗證碼。確保",
                    "your country is supported": "支持您的國家/地區",
                    "for SMS delivery.": "用於短信發送。",
                    "Country code": "國家程式碼",
                    "Your phone number": "您的手機號碼",
                    "Send authentication code": "發送驗證碼",
                    "Sent. It may take a minute for the SMS to arrive.": "已發送。短信可能需要一分鐘時間才能送達。",
                    "Verify the code sent to your phone": "驗證發送到您手機的驗證碼",

                "Continue": "繼續",

                "Alternative 2FA option:": "備選 2FA 選項:",
                "SMS authentication": "短信驗證",
                    "Get one-time codes sent to your phone via SMS to complete authentication requests.": "通過短信向您的手機發送一次性程式碼，以完成認證請求。",
                "Authenticator app": "身份驗證器應用",
                    "Use an authentication app or browser extension to generate one-time codes.": "使用身份驗證應用或瀏覽器擴展生成一次性程式碼。",
                "Select": "選擇",

            // 第2步
                "Download your recovery codes": "下載您的恢復碼",
                "You can use recovery codes as a second factor to authenticate in case you lose access to your device. We recommend saving them with a secure password manager such as": "您可以使用恢復碼作為第二個因素來進行身份驗證，以防您無法訪問您的設備。我們建議使用安全的密碼管理器保存它們，例如",
                "Keep your recovery codes in a safe spot": "將您的恢復碼保存在安全的地方",
                "If you lose your device and don't have the recovery codes, you will lose access to your account.": "如果您丟失了您的設備，並且沒有恢復碼，您將無法訪問您的帳戶。",

                "Download": "下載",
                "I have saved my recovery codes": "我已經保存了我的恢復碼",

            // 第3步
                "Two-factor authentication (2FA) is now enabled for your GitHub account": "現已為您的 GitHub 帳戶啟用雙重身份驗證 (2FA)",
                "You have enabled two-factor authentication using SMS.": "您已使用 SMS 啟用雙重身份驗證",
                "You have enabled two-factor authentication using your authenticator app.": "您已使用身份驗證應用啟用雙重身份驗證",

                "Don't get locked out, configure additional authentication methods": "別被鎖在外面，配置額外的身份驗證方法",
                "Configuring additional authentication methods will help you gain access to your account in case you lose your device and don't have your recovery codes.": "配置額外的認證方法將幫助您在丟失設備和沒有恢復碼的情況下獲得對賬戶的訪問。",

                "Security key": "安全密鑰",
                    "Use your device with Touch ID, Windows Hello, etc. or a physical security key (e.g. YubiKey)": "使用您的設備配合 Touch ID、Windows Hello 等功能或物理安全密鑰（例如YubiKey）。",
                    "Manage": "管理",
                    "Register new security key": "註冊新安全密鑰",
                    "Enter a nickname for this security key": "輸入安全密鑰的昵稱",
                    "Waiting for input from browser interaction...": "等待來自瀏覽器交互的輸入...",
                    "Security key registration failed.": "安全密鑰註冊失敗。",
                    "Try again": "請重試",

                "GitHub Mobile": "GitHub Mobile",
                    "Install": "安裝",
                    "The GitHub Mobile app on your phone can be used as a 2FA method. Enable it by installing the GitHub Mobile app for": "您手機上的 GitHub Mobile 應用可用作雙重身份驗證方法。通過安裝 GitHub Mobile 應用（",
                    "and signing in to your account.": "）並登錄您的帳戶來啟用它。",
                "Done": "完成",

        // 定期驗證雙重身份驗證（2FA）設置
            "Verify your two-factor authentication (2FA) settings": "驗證您的雙重身份驗證（2FA）設置",
            "This is a one-time verification of your recent configured 2FA credentials.": "這是對您最近配置的雙重身份驗證憑據進行一次性驗證。",
            "Make sure that 2FA is correctly configured, and avoid a potential account lockout disaster. If you're having trouble verifying, you'll be able to reconfigure 2FA for your account.": "確保正確配置雙重身份驗證，避免可能的賬戶鎖定災難。如果您在驗證時遇到問題，可以重新為您的賬戶配置雙重身份驗證。",
            "Verify 2FA now": "現在驗證雙重身份驗證",
            "You can choose to": "您可以選擇",
            "skip 2FA verification": "跳過雙重身份驗證",
            "at this moment, we'll remind you again tomorrow.": "此刻，我們會在明天再次提醒您。",

        // https://github.com/settings/two_factor_checkup?
            "Open your two-factor authenticator (TOTP) app or browser extension to view your authentication code.": "打開您的雙重身份驗證器（TOTP）應用或瀏覽器擴展，以查看您的身份驗證碼。",
            "Verify your 2FA setup tomorrow": "明天驗證您的雙重身份驗證設置",
            "Reconfigure 2FA on this account": "重新配置雙重身份驗證",

        // https://github.com/settings/two_factor_checkup
            "2FA verification successful!": "雙重身份驗證成功！",
            "Keep your recovery codes safe and easy to access": "請將您的恢復碼保管好以便於訪問。",
            "As a reminder, recovery codes can be used as a second factor to authenticate in case you lose your device. If you don't have your recovery codes, you may lose access to your account.": "作為提醒，恢復碼可用作第二個身份驗證因素，以防您丟失設備。如果您沒有恢復碼，則可能無法訪問您的帳戶。",
            "Not sure where you saved them?": "您不確定把它們保存在哪裡了嗎？",

        // https://github.com/settings/security
            "Two-factor authentication (2FA)": "雙重身份驗證 (2FA)",
            "is required for your GitHub account": "您的 GitHub 帳戶需要",

            "This will only take a minute.": "只需一分鐘時間。",
            "Enable 2FA now. You'll be able to continue on with your work right after.": "立即啟用雙重身份驗證。之後您將能夠繼續您的工作。",

            "Two-factor authentication adds an": "雙重身份驗證增加了一個",
            "additional layer of account security": "額外的賬戶安全保護",
            ". It is a proven method of keeping you safe from hackers and account takeover, even if your password is stolen or compromised.": "。這是一種行之有效的方法，即使您的密碼被盜或泄露，也能保證您不被黑客和賬戶接管。",
            "Enable 2FA now": "立即啟用雙重身份驗證",

            "You have": "您還有",
            "left to enable 2FA. Take action now to avoid additional interruptions.": "時間啟用雙重身份驗證。請立即採取行動以避免額外的干擾。",
            "Remind me tomorrow": "明天提醒我",

        // 登出頁面 https://github.com/logout
            "Are you sure you want to sign out?": "您確定要登出？",
            "Sign out": "登出",

            "Select account to sign out": "選擇要登出的帳戶",
            "Sign out from all accounts": "登出所有賬戶",

        // 接受邀請 /<user-name>/<repo-name>/invitations
        // 跳轉至 協作者 / 協作者和團隊 - 訪問管理頁面 /<user-name>/<repo-name>/settings/access 驗證
            // 頂部提醒
                "Repository invitation URLs work for invited users only. You may only share this URL with an invited user.": "倉庫邀請 URL 僅適用於受邀請的用戶。您只能與受邀請的用戶共享此 URL。",

        // 切換賬戶 https://github.com/switch_account
            "Signed out": "已註銷",
            "Add a different account": "添加其他帳戶",

    },
    "regexp": [ // 正則翻譯
        [/(\d+) verified emails?/, "$1 個經過驗證的郵箱"],
        [/(\d+) keys?/, "$1 個通行密鑰"],
        [/(\d+) devices?/, "$1 設備"],
        [/You will receive one-time codes at this phone number:/, "您將通過以下電話號碼收到一次性驗證碼："], // 已設置短信/文字信息
        [/Continue as (.*)/, "以 $1 身份繼續使用"],
    ],
};
I18N.zh.login = I18N.zh["session-authentication"];
I18N.zh.logout = I18N.zh["session-authentication"];
I18N.zh.session = I18N.zh["session-authentication"];
I18N.zh.sessions = I18N.zh["session-authentication"];
I18N.zh.password_reset = I18N.zh["session-authentication"];

I18N.zh["signup"] = { // 註冊頁
    "static": { // 靜態翻譯
        "Already have an account?": "已經有帳戶嗎？",
        "Sign in →": "登錄 →",
        "Welcome to GitHub!": "歡迎來到 GitHub!",
        "Let’s begin the adventure": "讓我們開始探險吧",
        "Enter your email": "輸入您的電子郵箱地址",
            "Email is invalid or already taken": "電子郵箱地址無效或已被占用",
        "Continue": "繼續",
        "Create a password": "創建密碼",
            "Password is too short": "密碼太短",
            "Password needs a number and lowercase letter": "密碼需要有數字和小寫字母",
            "Password is strong": "密碼很強",
            "Make sure it's": "請確保",
                "at least 15 characters": "至少需要15個字符",
                "OR": " 或者",
                "at least 8 characters": "至少需要8個字符",
                "including a number": "包括數字",
                "and a lowercase letter": "和小寫字母",
            "Password may be compromised": "密碼可能被泄露",
            "Password is in a list of passwords commonly used on other websites": "密碼在其他網站常用的密碼列表中",
        "Enter a username": "輸入您的用戶名",
            "Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.": "用戶名只能包含字母數字字符或單個連字符，並且不能以連字符開頭或結尾。",
        "Would you like to receive product updates and announcements via email?": "您是否願意通過電子郵件接收產品更新和公告？",
        "Type \"y\" for yes or \"n\" for no": "輸入 \"y\" 表示願意，輸入 \"n\" 表示不願意。",
        "Verify your account": "驗證您的帳戶",
        "Create account": "創建帳戶",
        "By creating an account, you agree to the": "創建帳戶即表示您同意",
        "Terms of Service": "服務條款",
        ". For more information about GitHub's privacy practices, see the": "。關於 GitHub 隱私條款的更多信息，請參見",
        "GitHub Privacy Statement": "GitHub 隱私聲明",
        ". We'll occasionally send you account-related emails.": "。我們偶爾會向您發送與帳戶相關的電子郵件。",
    },
    "regexp": [ // 正則翻譯
        [/Username ([^ ]+) is not available./, "用戶名 $1 不可用。"],
        [/([^ ]+) is available./, "用戶名 $1 可用。"],
    ],
};

I18N.zh["notifications"] = { // 通知頁面
    "static": { // 靜態翻譯
        "Notifications": "通知",
        "All": "所有",
        "Unread": "未讀",

        "Inbox": "收件箱",
        "Saved": "已保存",
        "Save": "保存",
        "Done": "已完成",
        "Filters": "篩選",
        "Dismiss": "忽略",
        "get started": "開始",
        "Subscribe": "訂閱",
        "Unsubscribe": "退訂",

        "Filter notifications": "篩選通知",
            "Sorry, we don't support the": "抱歉，我們不支持",
            "filter yet.": "篩選器。",
            "Learn more about filters.": "了解更多關於篩選器的信息。",

            "- submit": "- 提交",

            "Available filters": "可用篩選器",
            "filter by repository": "按倉庫篩選",
            "filter by status or discussion type": "按狀態或評論類型篩選",
            "filter by notification reason": "按通知原因篩選",
            "filter by notification author": "按通知作者篩選",
            "filter by organization": "按組織篩選",
        "Group by:": "分組：",
        "Group by: Date": "分組：日期",
        "Group by: Repository": "分組：倉庫",
        "Date": "日期",
        "Repository": "倉庫",
        // [/(\d+) new notifications?/, "$1 條新通知"], // 通知管理頁

        // 篩選結果
        "No results": "無結果",
        "No notifications matched your query.": "沒有與您的查詢相匹配的通知。",

        "Select all": "全選",
        "selected": "條被選中",
        "Mark as read": "標記為已讀",
        "Mark as unread": "標記為未讀",
        "Mark as done": "標記為已完成",
        "Move to inbox": "移動到收件箱",

         "Clear selection": "清除選中",

        //"Mark all as read": "全部標為已讀",
        //"Are you sure?": "您確定嗎？",
        //"Are you sure you want to mark all unread notifications as read?": "您確定要將所有的未讀通知標記為已讀？",
        //"Mark all notifications as read": "全部標為已讀",

        "Clear out the clutter.": "清除混亂。",
        "Get the most out of your new inbox by quickly and easily marking all of your previously read notifications as done.": "快速輕鬆地將所有已閱讀的通知標記為已完成，以充分利用新的收件箱。",
        "Overwhelmed by notifications? We've found some repositories that may be causing notifications you don't need.": "通知不知所措？我們發現了一些倉庫，這些倉庫可能會導致您不需要的通知。",
        "Update watching settings": "更新關注設置",

        "Manage notifications": "管理通知",
        "Notification settings": "通知設置",
        "Watched repositories": "關注的倉庫",
        "Subscriptions": "訂閱",
        "Watching": "關注",

        "subscribed": "訂閱",
        "mention": "提及",
        "commented": "評論",
        "author": "作者",
        "manual": "手動",
        "state change": "狀態更改",

        "View all gist notifications": "查看全部 Gist 通知", // 倉庫分組模式

        "Prev": "上一頁",
        "Previous": "上一頁",
        "Next": "下一頁",

        "change notification settings": "更改通知設置",
        "you can change how you receive notifications from your account settings.": "您可以從帳戶設置更改接收通知的方式。",
        "unwatch suggestions": "取消關注建議",
        "these repositories may be causing unnecessary notifications.": "這些倉庫可能導致不必要的通知。",
        "unwatch all": "取消所有關注",
        "customize": "自定義",

        "🎯 Assigned": "🎯 已分配",
        "💬 Participating": "💬 參與",
        "✋ Mentioned": "✋ 提及",
        "🙌 Team mentioned": "🙌 提到的團隊",
        "👀 Review requested": "👀 審查請求",
        "Name": "名稱",
        "Filter inbox by…": "篩選收件箱…",
        "Create new filter": "創建新規則",
        "Create": "創建",
        "Query": "規則",

        "All caught up!": "處理完了！",
        "Take a break, write some code, do what you do best.": "休息一下，寫一些程式碼，做您最擅長的事。",
        "Save something important": "保存重要的東西",
        "Notifications you save will appear here to read later.": "您保存的通知會出現在這裡，以便以後閱讀。",
        "Mark notifications as done so you can move on with your work.": "將通知標記為已完成，以便您可以繼續工作。",
        "New activity appears in your inbox.": "新活動出現在您的收件箱中。",

        // /notifications?query=repo 某個倉庫
        "We've noticed that you rarely interact with this repository, are you sure you need notifications?": "我們注意到您很少與此倉庫交互，您確定需要通知嗎？",
        "Unwatch": "取消關注",
        // "Notifications": "通知類型",
            "Participating and @mentions": "參與和 @您",
            "Only receive notifications from this repository when participating or @mentioned.": "僅在參與或 @您 時接收來自此倉庫的通知。",
            "All Activity": "所有活動",
            "Notified of all notifications on this repository.": "接收來自此倉庫所有通知。",
            "Ignore": "忽略",
            "Never be notified.": "永不接收通知。",
            "Custom": "自定義",
            "Select events you want to be notified of in addition to participating and @mentions.": "選擇除參與和 @您 之外還要接收通知的事件。",
            "Discussions are not enabled for this repo": "此倉庫未啟用討論功能",
            "Releases": "發行版",
            "Discussions": "討論",
                "Discussions are not enabled for this repository": "該倉庫未啟用討論功能",
            "Security alerts": "安全警報",
            //"Cancel": "取消",
            "Apply": "應用",

        "ProTip!": "專業提示！",
            "Triage notifications on the go with GitHub Mobile for": "使用 GitHub Mobile 隨時隨地查看分類通知",
            "When viewing a notification, press": "在查看一條通知時，按下",
            "to mark it as Done.": "將其標記為 “已完成”。",
            "to mark it as Unread.": "將其標記為 “未讀”。",
            "Create custom filters to quickly access your most important notifications.": "創建自定義篩選器以快速訪問最重要的通知。",
    },
    "regexp": [ // 正則翻譯
        [/(\d+) selected/, "$1 條被選中"],
        [/Select all (\d+) notifications?/, "選中全部 $1 條通知"],
        [/View all (\d+) notifications?/, "查看全部 $1 條通知"], // 倉庫分組模式
        [/(\d+) new notifications?/, "$1 條新通知"],
        [/of (\d+)/, " 共 $1 條"],
    ],
};

I18N.zh["watching"] = { // 關注的倉庫頁面
    "static": { // 靜態翻譯
        "Notifications": "通知",
        "Watching": "關注",
        "Subscriptions": "訂閱",
        "Custom": "自定義",
        // "Ignoring": "忽略",

        "Unwatch suggestions": "取消關注建議",
        "These repositories may be causing unnecessary notifications.": "這些倉庫可能導致不必要的通知。",

        //
        "Are you sure?": "您確定嗎?",
        // [/By unwatching these (\d+) repositor(y|ies), you will only receive notifications when participating or @mentioned./, "取消對這 $1 個倉庫的關注，您將只在參與或 @您 時收到通知。"], //取消所以關注

        "Ignoring": "忽略",
        "Stop ignoring": "取消忽略",
        "Watch": "關注",
        "Unwatch": "取消關注",

        //"Watched repositories": "關注的倉庫",

        // "Stop ignoring": "取消忽略",
        //"Sorted by most recently watched.": "按最近關注排序",
        "Unwatch all": "取消所有關注",
            "Unwatch repositories by owner": "按所有者取消關注倉庫",
            "Find a repository owner": "查找倉庫所有者",
            "All repositories": "所有倉庫",
             // [/([^ ]+)'s repositories/, "$1 的倉庫"],
        "Stop watching all repositories": "取消關注所有的倉庫",

        // 取消所有者關注倉庫對話框
        // [/Confirm unwatching ([^ ]+)'s repositories/, "確認不關注 $1 的倉庫"],
        // [/You will stop receiving notifications for all repositories owned by ([^ ]+) that you are watching./, "您將停止接收您所關注的 $1 擁有的所有倉庫的通知。"],

        // 關注 & 訂閱通知設置 下拉菜單
        // "Notifications": "通知類型",
        "Participating and @mentions": "參與和 @您",
        "Only receive notifications from this repository when participating or @mentioned.": "僅在參與或 @您 時接收來自此倉庫的通知。",
        "All Activity": "所有活動",
        "Notified of all notifications on this repository.": "接收來自此倉庫所有通知。",
        "Ignore": "忽略",
        "Never be notified.": "永不接收通知。",
        // "Custom": "自定義",
        "Select events you want to be notified of in addition to participating and @mentions.": "選擇除參與和 @您 之外還要接收通知的事件。",
        "Discussions are not enabled for this repo": "此倉庫未啟用討論功能",
        "Releases": "發行版",
        "Discussions": "討論",
            "Discussions are not enabled for this repository": "該倉庫未啟用討論功能",
        "Security alerts": "安全警報",
        //"Cancel": "取消",
        "Apply": "應用",

        "Notification settings": "通知設置",
        "You can change how you receive notifications from your account settings.": "您可以從帳戶設置更改接收通知的方式。",
        "Change notification settings": "更改通知設置",
    },
    "regexp": [ // 正則翻譯
        [/By unwatching these (\d+) repositor(y|ies), you will only receive notifications when participating or @mentioned./, "取消對這 $1 個倉庫的關注，您將只在參與或 @您 時收到通知。"],
        [/Unwatch (\d+) repositor(y|ies)/, "取消對 $1 個倉庫關注"],
        [/You will stop receiving notifications for the (\d+) repositor(y|ies) you are watching./, "您將停止接收您正在關注的 $1 個倉庫的通知。"],
        [/Confirm unwatching ([^ ]+)'s repositories/, "確定不關注 $1 的倉庫"],
        [/You will stop receiving notifications for all repositories owned by ([^ ]+) that you are watching./, "您將停止接收您所關注的 $1 擁有的所有倉庫的通知。"],
        [/([^ ]+)'s repositories/, "$1 的倉庫"],
    ],
};

I18N.zh["notifications/subscriptions"] = { //訂閱的倉庫頁面
    "static": { // 靜態翻譯
        "Notifications": "通知",
        "Watching": "關注",
        "Subscriptions": "訂閱",

        "Reason": "原因",
            "Filter by reason": "按原因篩選",
            "Any reason": "任何原因",
            "Show all subscriptions": "顯示所有訂閱",
            "Assign": "分配",
            "You were assigned to the Issue/PR.": "您被分配到議題/拉取請求。",
            "Author": "作者",
            "You created the thread.": "您創造了這個話題。",
            "Comment": "評論",
            "You commented on the thread.": "您評論了這個話題。",
            "Manual": "手動",
            "You subscribed to the thread (via an Issue or Pull Request).": "您訂閱了該主題（通過議題或拉取請求）。",
            "Mention": "提及",
            "You were specifically @mentioned in the content.": "在內容中特別 @您。",
            "Review Requested": "請求審查",
            "You were requested for review.": "您被要求進行審查。",
            "State Change": "狀態變化",
            "You changed the thread state (for example, closing an Issue or merging a Pull Request).": "您更改了話題狀態（例如，關閉議題或合併拉取請求）。",
            "Team Mention": "提及團隊",
            "You were on a team that was mentioned.": "您在團隊中被提及。",
        "Repository": "倉庫",
            "Filter by repository": "按倉庫篩選",
            "Filter repository": "篩選倉庫",
            "All repositories": "所有倉庫",
            "Loading repositories…": "載入倉庫中…",
        "Sort:": "排序：",
            "Sort by": "排序方式",
            "Most recently subscribed": "最近訂閱最多的",
            "Least recently subscribed": "最近訂閱最少的",

        "Reason:": "原因：",
        "Repository:": "倉庫：",
        "Clear current filters": "清除當前篩選器",
        "No results matched your search.": "沒有符合您的搜索結果。",

        "selected": "個被選中",
        "Unsubscribe": "取消訂閱",

        "opened": "打開",
        "• subscribed": "• 訂閱於",
        "• updated": "• 更新於",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["stars"] = { // 星標 https://github.com/stars/<user-name>
    "static": { // 靜態翻譯
        "Your Stars": "我的星標",
        "Browse your starred repositories and topics": "瀏覽我的星標倉庫和主題",
        "Your Starred Repositories": "我的星標倉庫",
        "Browse your starred repositories": "瀏覽我的星標倉庫",
        "Your Starred Topics": "我的星標主題",
        "Browse your starred topics": "瀏覽我的星標主題",

        "Browse starred repositories and topics": "瀏覽星標倉庫和主題",
        "Starred Repositories": "星標倉庫", // 他人
        "Browse starred repositories": "瀏覽星標倉庫", // 他人
        "Starred Topics": "星標主題", // 他人
        "Browse starred topics": "瀏覽星標主題", // 他人

        "Search stars…": "搜索星標主題...",
        "Sort:": "排序：",
            // 篩選下拉
            "Sort options": "排序選項",
            "Recently starred": "最近標星",
            "Recently active": "最近活躍",
            "Most stars": "最多標星",

        "Sponsor": "贊助",
        "Unstar": "已加星標於",
        "See all starred repositories": "查看所有星標倉庫",
        "See all starred topics": "查看所有星標主題",

        "You don’t have any starred topics, yet.": "您尚無任何的星標主題。",
        "As you": "如果您",
        "explore GitHub": "探索 GitHub",
        ", star topics to save them for later and they’ll show up here.": " 時，將主題標星保存起來，它們會在這裡顯示出來。",


        // 右側欄
        "All stars": "所有星標",
        "All repositories": "所有倉庫",
        "Your repositories": "我的倉庫",
        "Others’ repositories": "其他倉庫",
        "Topics": "主題",

        "Filter by languages": "按語言篩選",
        "Jump to a friend": "去好基友那",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["issues"] = { // 議題頁面
    "static": { // 靜態翻譯
        "Pull Requests": "拉取請求", // pulls

        "Created": "已創建",
        "Assigned": "已分配",
        "Mentioned": "提到的",
            "Issues mentioning you": "提及您的議題",
            "Pull Requests mentioning you": "提及您的拉取請求", // pulls
        "Review requests": "審查請求", // pulls
            "Pull Requests requesting your review": "請求您審查的拉取請求", // pulls

        "Search all issues": "搜索所有議題",

        "Visibility": "可見性",
        "Repository visibility": "倉庫可見性",
        "Private repositories only": "只有私有倉庫",
        "Public repositories only": "只有公共倉庫",

        "Organization": "組織",
        "Filter by organization or owner": "按組織或所有者篩選",
        "Filter organizations": "篩選組織",

        "Sort": "排序",
        "Sort by": "排序方式",
        "Newest": "最新的",
        "Oldest": "最早的",
        "Most commented": "最多評論",
        "Least commented": "最少評論",
        "Recently updated": "最近更新",
        "Least recently updated": "最早更新",
        "Best match": "最佳匹配",
        "Most reactions": "最多回應",

        // 狀態詞
        "was merged": "已合併",
        "was closed": "已關閉",
        "Approved": "已批准",
        "Review required": "需要審查", // 拉取請求 頁面狀態詞
            "Review required before merging": "合併前需要審查",
        "Changes requested": "已請求更改",
        "outdated": "陳舊的",
        "Draft": "草案",

        // "No results matched your search.": "沒有符合您的搜索結果。",
        // 篩選結果
        "No results matched your search.": "沒有與您的搜索匹配的結果。",
        "You could search": "您可以搜索",
        "all of GitHub": "所有 GitHub",
        "or try an": "或者嘗試",
        "advanced search": "高級搜索",

        // "Use the links above to find what you’re looking for, or try": "使用上面的鏈接找到您要找的內容，或嘗試",
        // "a new search query": "新的搜索查詢",
        // ". The Filters menu is also super helpful for quickly finding issues most relevant to you.": "。篩選菜單也是快速找到議題最相關的您超級有幫助的。",
        // "Updated in the last three days": "更新了最後三天：",
        "ProTip!": "專業提示！",
            "Exclude your own issues with": "排除自己的問題",
            "Mix and match filters to narrow down what you’re looking for.": "通過混合和匹配篩選器以縮小您要查找的範圍。",
            "Exclude everything labeled": "如果要找到所有標有",
            "with": "標籤的，請使用",

        // 鍵盤快捷鍵
            "Pull request list"  : "拉取請求列表",
                "Open pull request"  : "打開拉取請求",
            "Pull request - Conversation tab": "拉取請求 - 對話選項卡",
                "Open in github.dev editor"  : "在 github.dev 編輯器中打開",
                "Open github.dev editor in a new tab"  : "在新標籤頁中打開 github.dev 編輯器",
                "Submit comment": "提交評論",
                "Submit comment and close or open pull request": "提交評論並關閉或打開拉取請求",
                "Submit comment and close issue": "提交評論並關閉??議題", // 議題
                "Preview comment": "預覽評論",
                "Create issue": "創建議題", //議題
                "Request reviewers": "請求審查者",
                "Filter by author"             : "按作者篩選",
                "Filter by or edit assignees"  : "按受理人篩選或編輯受理人",
                "Filter by or edit labels"     : "按標籤篩選或編輯標籤",
                "Filter by or edit projects"   : "按項目篩選或編輯項目",
                "Filter by or edit milestones" : "按里程碑篩選或編輯里程碑",
                "Link an issue or pull request from the same repository": "鏈接同一倉庫的議題或拉取請求",
                "Reply (quoting selected text)": "答覆（引用所選文本）",
                "Open saved replies": "打開快捷回覆（引用所選文本）",
                "Insert saved reply (with open saved replies)": "插入快捷回覆（打開快捷回覆）",
                "Toggle visibility of all collapsed review comments instead of just the current one": "切換所有摺疊審查意見的可見性，而不僅僅是當前的審查意見",
            "Pull request - Files changed tab": "拉取請求 - 文件更改標籤卡",
                "Open commits list": "打開提交列表",
                "Open files list": "打開文件列表",
                "Next commit": "下一個提交",
                "Previous commit": "上一個提交",
                "Show or hide annotations": "顯示或隱藏批註",
                "Show or hide comments": "顯示或隱藏評論",
                "Submit a review comment": "提交審查意見",
                "Collapse or expand all files instead of just the current one": "摺疊或展開所有文件，而不僅僅是當前文件",
                    "and click": "和點擊",
    },
    "regexp": [ // 正則翻譯
        [/(\d+) Open/, "$1 打開"],
        [/(\d+) Closed/, "$1 已關閉"],
        [/(\d+) tasks? done/, "$1 個任務完成"],
        [/(\d+) of (\d+) tasks?/, "$1 / $2 個任務"],
        [/(\d+) tasks?/, "$1 個任務"],
        [/(\d+) review approvals?/, "$1 次審查批准"],// 拉取請求頁 "已批准' 浮動提示
        [/(\d+) review requesting changes?/, "$1 條請求更改評論"],
        [/([\d,]+) linked issues?/, "$1 個關聯議題"],
        [/([\d,]+) linked pull requests?/, "$1 個關聯拉取請求"],
        [/(\d+) \/ (\d+) checks? OK/, "$1 / $2 檢查 OK"], // 對勾 的提醒 /pulls
        [/Assigned to ([^ ]+)/, "分配給 $1"],
        // [/Updated/, "更新於"],
        [/#(\d+) opened/, "#$1 打開於"],
        [/#(\d+) by/, "#$1 打開者"],
        [/Notify someone on an issue with a mention, like: @([^ ]+)./, "在某個問題上通知並提及某人，例如：@$1。"], // 專業提示
    ],
};
I18N.zh.pulls = I18N.zh.issues;

I18N.zh["search"] = { // 搜索頁面
    "static": { // 靜態翻譯
        "resluts": "結果",
        "View topic": "查看主題", //搜索結果中的主題
        // 搜索 https://github.com/search >>>>>>>>>>>>>>>>>>>>>>>>
            "Search GitHub": "在 GitHub 上搜索",

            // ProTip
            "ProTip!": "專業提示！",
            "Press the": "再次按",
            "key to activate the search input again and adjust your query.": "鍵激活搜索輸入並調整您的搜索結果。",
            "For an": "要進行",
            "advanced search": "高級搜索",
            ", use our": "，使用我們的",
            "prefixes": "前綴",

            // 搜索技巧 對話框 (忽略 不翻譯)
            "Search cheat sheet": "搜索小技巧",
            "GitHub’s search supports a variety of different operations. Here’s a quick cheat sheet for some of the common searches.": "GitHub 的搜索支持各種不同的操作。下面是一些常見搜索的快速小抄。",
            "For more information, visit our": "有關更多信息，請訪問我們的",
            "search help section": "搜索幫助章節",
            "Basic search": "基本搜索",
            "This search": "關鍵規則",
            "Finds repositories with…": "查找倉庫...",
            "Repository search": "倉庫搜索",
            "Code search": "程式碼搜索",
            "Issue search": "議題搜索",
            "User search": "用戶搜索",

        // 搜索結果頁面 https://github.com/search?q=  >>>>>>>>>>>>>>>>>>>>>>>>
            // 左側菜單
            "Filter by": "篩選",
            "Code": "程式碼",
            "Repositories": "倉庫",
            "Commits": "提交",
            "Discussions": "討論",
            "Topics": "主題",
            "Users": "用戶",
            "More": "更多",

            "States": "狀態",
            "Closed": "已關閉",
            "Open": "打開",

            "Languages": "語言",
            "More languages...": "更多語言...",

            // &type=code
            "More repositories...": "更多倉庫...",
            "Paths": "路徑",
            "More directories...": "更多路徑...",

            // &type=registrypackages
            "Types": "類型",

            // &type=issues
            "State": "狀態",

            "Advanced": "高級搜索",
                "Owner": "所有者",
                "Size": "尺寸",
                "Number of followers": "關注數",
                "Number of forks": "復刻數",
                "Number of stars": "星標數",
                "Date created": "創建日期",
                "Date pushed": "推送日期",
                "Topic": "話題",
                "License": "許可證",
                "Archived": "存檔",

                // &type=code
                "Symbol": "符號",
                "Exclude archived": "排除存檔",

                // &type=issues
                "Close reason": "關閉原因",
                "Has linked pull request": "已關聯的拉取請求",
                "Author": "作者",
                "Assignee": "受理人",
                "Mentioned user": "提及的用戶",
                "Mentioned team": "提及的團隊",
                "Commenter": "評論者",
                "Involved user": "相關用戶",
                "Label": "標籤",
                "Milestone": "里程碑",
                "Number of comments": "評論數",
                "Number of interactions": "互動數",

                // &type=pullrequests
                "CI status": "CI 狀態",
                "Review status": "審查狀態",
                "Merged": "已合併",
                "Not merged": "未合併",

                // &type=discussions
                "Organization": "組織",
                "Involves user": "相關用戶",

                // &type=users
                "Full name": "全稱",
                "Location": "地區",
                "Language": "語言",
                "Sponsorable": "可贊助",

                // &type=commits
                "Committer": "提交至",
                "Author email": "作者電子郵箱",
                "Committer email": "提交者電子郵箱",
                "Merge commits": "合併提交",
                "Hash": "哈希值",
                "Parent hash": "父哈希值",
                "Tree hash": "樹哈希值",

            "Advanced search": "高級搜索",
                // &type=wikis
                "User": "用戶",
                "Repository": "倉庫",
                "Last updated date": "最後更新日期",
                // &type=topics
                "Curated topics": "策劃主題",
                "Featured topics": "精選主題",
                "Number of repositories": "倉庫數",
                "Creation date": "創建日期",

            "Cheat sheet": "搜索技巧",

            "Sort by:": "排序方式：",
                // 篩選下拉
                // &type=repositories
                "Sort options": "排序選項",
                "Best match": "最佳匹配",
                "Most stars": "最多星標",
                "Fewest stars": "最少星標",
                "Most forks": "最多復刻",
                "Fewest forks": "最少復刻",
                "Recently updated": "最近更新",
                "Least recently updated": "最早更新",
                // 提交
                "Recently committed": "最近提交",
                "Least recently committed": "最早提交",
                "Recently authored": "最近撰寫",
                "Least recently authored": "最早撰寫",
                // 議題
                "Most commented": "最多評論",
                "Least commented": "最少評論",
                "Newest": "最新",
                "Oldest": "最早",
                // 討論
                "Highest score": "得分最高",
                "Lowest score": "得分最低",
                // 軟件包
                "Most downloads": "最多下載",
                "Fewest downloads": "最少下載",
                // 用戶
                "Most followers": "最多關注者",
                "Fewest followers": "最少關注者",
                "Most recently joined": "最近加入",
                "Fewest recently joined": "最早加入",
                "Least recently joined": "最早加入",
                "Most repositories": "最多倉庫",
                "Fewest repositories": "最少倉庫",

            "More options": "更多選項",
            "View search docs": "查看搜索文檔",

            // 部分狀態詞
            "Updated": "更新於", // &type=repositories
            "committ": "提交",
            "committed": "提交於", // &type=commits
            "Opened": "打開於", // &type=issues
            "Last updated": "最近更新於", // &type=wikis
            "posted": "發布於", // &type=discussions

            // 保存對話框
            "Create saved search": "創建保存的搜索",
                "Use saved searches to filter your results more quickly": "使用保存的搜索更快地篩選結果",
                "Name": "名稱",
                "Query": "詢問",
                "To see all available qualifiers, see our": "要查看所有可用的限定符，請參閱我們的",
                "documentation": "文檔",

                "Name has already been taken": "名稱被占用",

            // &type=repositories
                "Sponsor": "贊助",
                // [/Sponsor ([^ ]+)?/, "贊助 $1"], // 贊助按鈕 對話框 標題
                // 贊助對話框
                "External links": "外部鏈接",
                "Learn more about funding links in repositories": "了解更多關於倉庫中的贊助鏈接的信息",
                "Report abuse": "舉報濫用",

                // 右側欄
                    "Sponsor open source projects you depend on": "贊助您依賴的開源項目",
                    "Contributors are working behind the scenes to make open source better for everyone—give them the help and recognition they deserve.": "貢獻者們正在幕後努力，為每個人創造更好的開源環境——給予他們應有的幫助和認可",
                    "Explore sponsorable projects": "探索可贊助項目",

                    "How can we improve search?": "我們如何改進搜索？",
                    "Give feedback": "提供反饋意見",

            // &type=code
                // [/Show ([\d,]+) more matches?/, "顯示更多 $1 處匹配"],
                "Show less": "顯示更少",
                "This file contains": "該文件還包含",
                "more": "處",
                "match": "匹配",
                "matches": "匹配",
                "not shown.": "未顯示。",
                "See all": "查看完整文件中的所有",
                "matche in the full file": "處匹配",
                "matches in the full file": "處匹配",

            // &type=issues
                "Learn how you can use GitHub Issues to plan and track your work.": "了解如何使用 GitHub 議題計劃和跟蹤工作。",
                "Save views for sprints, backlogs, teams, or releases. Rank, sort, and filter issues to suit the occasion. The possibilities are endless.": "保存衝刺、待辦事項、團隊或發布的視圖。根據場合對議題進行排名、排序和篩選。可能性是無止境。",
                "Learn more about GitHub Issues": "了解更多關於 GitHub 議題的信息",

            // &type=registrypackages
                "Learn GitHub Packages": "了解 GitHub 軟件包",
                "GitHub Packages is a platform for hosting and managing packages, including containers and other dependencies. Get started with publishing or installing packages yourself.": "GitHub 軟件包是一個託管和管理包（包括容器和其他依賴項）的平台。開始自行發布或安裝軟件包吧",
                "Learn more about GitHub Packages": "了解更多關於 GitHub 軟件包的信息",

            // &type=topics
                "Related:": "相關的：",

            // &type=registrypackages
                "latest": "最新",

            "Your search did not match any": "您的搜索沒有匹配任何",
            "code": "程式碼",
            "issue": "議題",
            "issues": "議題",
            "pull request": "拉取請求",
            "pull requests": "拉取請求",
            "discussion": "討論",
            "discussions": "討論",
            "commit": "提交",
            "commits": "提交",
            "package": "軟件包",
            "packages": "軟件包",
            "wikis": "Wiki",
            "Try one of the tips below to find more code": "請嘗試使用以下提示查找更多程式碼",
            "Try one of the tips below to find more repositories": "請嘗試使用以下提示查找更多倉庫",

            "However we found": "然而我們發現",
            "code results": "程式碼結果",
            "code result": "程式碼結果",
            "and": "和",
            "that matched your search query. Alternatively try one of the tips below.": "與您的搜索查詢相匹配。或者嘗試以下提示之一。",

            "Search across repositories": "跨倉庫搜索",
                "Within a repository:": "在倉庫內：",
                "Across several:": "跨越幾個：",
                "Alternative way:": "替代方式：",

                "Note that we don't currently support regular expressions in the repo or org qualifiers. For more information on search syntax, see our": "請注意，我們目前不支持 repo 或 org 限定符中的正則表達式。更多關於搜索語法的信息，請參閱我們的",
                "syntax guide": "語法指南",

            "Search across an organization": "跨組織搜索",
                "Within an organization:": "在組織內：",
                "User's code:": "用戶程式碼：",

            "Find a particular file extension": "查找特定的文件擴展名",
                "With .txt extensions:": "帶有 .txt 擴展名：",
                "JavaScript and TypeScript files:": "JavaScript 和 TypeScript 文件：",

                "The path qualifier can search the entire file path, not just the extension, and supports regular expressions. For more information, see our": "路徑限定符可以搜索整個文件路徑，而不僅僅是擴展名，並且支持正則表達式。更多信息，請參閱我們的",

            "Why wasn't my code found?": "為什麼找不到我的程式碼？",
                "When you search within a repository for the first time, please note that the repository undergoes reindexing.": "首次在倉庫中搜索時，請注意倉庫會進行重新索引。",
                "This process may take a few minutes.": "這一過程可能需要幾分鐘。",

                "The index currently includes more than 70 million popular public repositories, plus all private repositories that users search for.": "該索引目前包括超過 7000 萬個流行的公共倉庫，以及用戶搜索的所有私有倉庫。",
                "Beyond that, we also don't include all files in the search index:": "除此之外，我們也不會將所有文件都納入搜索索引：",
                    "Vendored and generated code is excluded": "排除供應和生成的程式碼",
                    "Empty files and files over 350 kiB are excluded": "排除空文件和超過 350 kiB 的文件",
                    "Only UTF-8 encoded files are indexed": "僅對 UTF-8 編碼的文件進行索引",
                    "Very large repositories may not be indexed": "非常大的倉庫可能不會被索引",

                "We intend to continue to increase the amount of code available in the index as much as possible. If we are missing files that are useful to you, feel free to": "我們打算繼續盡可能增加索引中可用的程式碼量。如果我們缺少對您有用的文件，請隨意在此處",
                "provide feedback here": "提供反饋",

            "Regular expressions": "正則表達式",
                "Sparse followed by index:": "稀疏跟隨索引：",
                "Lines that end with return:": "以迴車結束的行：",
                "File paths matching:": "文件路徑匹配：",

                "Note that you'll have to escape any slashes in the regex. For more information, see our": "注意，您必須在 正則中轉義任何斜線。更多信息，請參閱我們的",

            "Saved searches": "保存搜索",
                "Always searching within the same organization or set of repositories? Try constructing a query and click the save button in the top right corner.": "總是在同一個組織或一組倉庫中搜索？請嘗試創建一個查詢，然後點擊右上角的保存按鈕。",

            "You could try an": "您可以嘗試",

        // 高級搜索 https://github.com/search/advanced >>>>>>>>>>>>>>>>>>>>>>>>
            // 高級搜索
            // "Advanced search": "高級搜索",
            "Search": "搜索",
            "Advanced options": "高級選項",
            "From these owners": "指定作者",
            "In these repositories": "指定倉庫",
            "Created on the dates": "創建日期",
            "Written in this language": "使用語言",
            "Any language": "任何語言",
                "Popular": "流行的",
                "Everything else": "其他語言",

            "Repositories options": "倉庫選項",
            "With this many stars": "指定星標數",
            "With this many forks": "指定復刻數",
            "Of this size": "倉庫大小",
            "Pushed to": "推送於",
            "With this license": "用何種許可證",
                "Any license": "任意許可證",
                "Licenses": "許可證",
                "License families": "許可證系列",
            "Return repositories": "搜索結果",
            "not": "不",
            // "and": "要",
            "only": "僅",
            "including forks.": "包含復刻倉庫。",

            "Code options": "程式碼選項",
            "With this extension": "文件後綴",
            "Of this file size": "文件大小",
            "In this path": "文件路徑",
            "With this file name": "文件名稱",
            "Return code": "搜索結果",
            // "Return code from forked repositories": "搜索結果包括被復刻的倉庫。",

            "Issues options": "議題選項",
            "In the state": "議題狀態",
                "open/closed": "打開/關閉",
                "open": "打開",
                "closed": "已關閉",
            "With the reason": "原因",
                "any reason": "任何原因",
                "completed": "已完成",
                "not planned": "未計劃",
                "reopened": "重新打開",
            "With this many comments": "評論數量",
            "With the labels": "議題標籤",
            "Opened by the author": "提議人",
            "Mentioning the users": "提及誰",
            "Assigned to the users": "分配給誰",
            "Updated before the date": "更新於",

            "Users options": "用戶選項",
            "With this full name": "用戶全稱",
            "From this location": "來自哪裡",
            "With this many followers": "有多少關注者",
            "With this many public repositories": "有多少公共倉庫",
            "Working in this language": "擅長什麼語言",
            "Wiki options": "Wiki 選項",

    },
    "regexp": [ // 正則翻譯
        [/Show ([\d,]+) more matches?/, "顯示更多 $1 處匹配"],
        [/(\d+) issues? needs? help/, "$1 個議題需要幫助"],
        [/Sponsor ([^ ]+)?/, "贊助 $1"], // 贊助按鈕 對話框 標題
    ],
    "selector": [ // 元素篩選器規則
        ["#search_form > div.container-lg.p-responsive.advanced-search-form > fieldset:nth-child(2) > label > select > option:nth-child(2)", "要"],
        ["#search_form > div.container-lg.p-responsive.advanced-search-form > fieldset:nth-child(3) > label > select > option:nth-child(2)", "要"],
    ],
};
I18N.zh["repository/search"] = I18N.zh["search"];

I18N.zh["discussions"] = {
    "static": { // 靜態翻譯
        // https://github.com/discussions
            "Discussions": "討論",

            "Created": "已創建",
            "Commented": "已評論",

            "Search all discussions": "搜索所有討論",

            "No discussions match the selected filters.": "沒有符合所篩選條件的討論。",
            "Discussions are used to ask questions and have open-ended conversations.": "討論用於提出問題並進行開放式對話。",

        // https://github.com/discussions/commented
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["gist"] = { // 程式碼片段頁面
    "static": { // 靜態翻譯
        // 快捷鍵
        "Site wide shortcuts": "全局快捷鍵",
        "Gists": "程式碼片段",
        "Go to Code": "跳轉到程式碼",
        "Go to Revisions": "跳轉到修訂",

        "Instantly share code, notes, and snippets.": "即時分享您的程式碼，筆記，片段，以及靈感。",
        "Search…": "搜索程式碼片段…",
            "No results.": "沒有結果。",
            "Yours": "您的",
        "All gists": "所有片段",
        "Back to GitHub": "返回到 GitHub",

        "Forked": "復刻",
        "Starred": "星標",

        // 左側用戶信息欄
        "Change your avatar": "修改頭像",
        "followers": "關注者",
        "following": "關注",
        "Joined": "加入於",
        "View GitHub Profile": "查看 GitHub 個人資料",

        //"New gist": "新建片段",
        // 右上角個人圖標下拉菜單
        "Your gists": "我的程式碼片段",
        "Starred gists": "我的標星程式碼片段",
        "Your GitHub profile": "我的 GitHub 個人資料",

        "View profile and more": "查看更多信息",
        "See all of your gists": "查看您的所有片段",

        // 返回通知頁狀態條
        "Back to notifications": "回到通知",
        "Done": "已完成",
        "Unsubscribe": "退訂",
        "Mark as unread": "標記為未讀",
        "Save": "保存",

        // 用戶 浮動信息卡
        "Member of": "隸屬組織",
        // [/, and (\d+) more/, "，以及其他 $1 個組織"],

        // 新建片段頁面
        "View your gists": "查看您的片段",
        "Gist description…": "片段描述…",
        "Filename including extension…": "文件名 (包括擴展名)…",
        "Create secret gist": "創建私密片段",
        "Secret gists are hidden by search engines but visible to anyone you give the URL to.": "私密片段對搜索引擎不可見，對直接訪問您分享的鏈接可見。",
        "Create public gist": "創建公開片段",
        "Public gists are visible to everyone.": "公開片段對所有人可見。",

        // 程式碼編輯框
        "Indent mode": "縮進模式",
        "Spaces": "空格",
        "Tabs": "Tab",
        "Indent size": "縮進大小",
        "Line wrap mode": "換行模式",
        "No wrap": "不換行",
        "Soft wrap": "軟換行",
        "Add file": "添加文件",
        "Remove file": "移除文件",

        // All gists 標籤卡
        // 篩選 & 排序工具欄
        "Sort:": "排序:",
        "Sort options": "排序選項",
        "Recently created": "最近創建",
        "Least recently created": "最早創建",
        "Recently updated": "最近更新",
        "Least recently updated": "最早更新",

        "Type:": "類型:",
        "Filter options": "篩選選項",
        "All": "所有",
        "Public": "公共",
        "Secret": "私密",

        "Created": "創建於",
        "Last active": "最後活動於",
        "Forked from": "復刻自",
        "— forked from": "— 復刻自",
        "View": "查看",

        "Newer": "新的",
        "Older": "舊的",

        // View 程式碼 頁面
        // 頭部通用信息
        "Only those with the link can see this gist.": "只有知道鏈接的人才能看到此 Gist。",
        "Edit": "編輯",
        "Delete": "刪除",
            "Are you positive you want to delete this Gist?": "您確定要刪除此 Gist 嗎？",
            // 頂部提醒
                "Gist deleted successfully.": "程式碼片段已成功刪除。",
        "Subscribe": "訂閱",
        // "Unsubscribe": "退訂",
        "Star": "星標",
            "Star this gist": "星標該程式碼片段",
        "Unstar": "取消星標",
            "Unstar this gist": "取消該程式碼片段星標",
        "User actions": "用戶操作",
        "Report abuse": "舉報濫用",

        "Code": "程式碼",
        "Revisions": "修訂",
        "Stars": "星標",
        "Forks": "復刻",

        "Drop one or more files here to prefill your gist!": "在此處拖放一個或多個文件以填充您的 Gist！",

        // 分享工具條
        "What would you like to do?": "您想做什麼？",
        "Embed": "嵌入",
        "Embed this gist in your website.": "嵌入到您的網頁中。",
        "Share": "分享",
        "Copy sharable link for this gist.": "複製片段共享鏈接。",
        "Clone via HTTPS": "通過 HTTPS 方式克隆",
        "Clone with Git or checkout with SVN using the repository’s web address.": "通過倉庫 web 地址進行 Git 克隆或 SVN 檢出。",
        "Clone via SSH": "通過 SSH 方式克隆",
        "Clone with an SSH key and passphrase from your GitHub settings.": "通過 GitHub 設置中的 SSH 密鑰和密碼進行克隆。",
        "Learn more about clone URLs": "了解更多關於克隆地址的信息",

        "Copy to clipboard": "複製到剪切板",
        "Copied!": "✅ 複製成功!",
        "Download ZIP": "下載 Zip 壓縮包",
        "Permalink": "永久鏈接",

        // 程式碼標籤卡
        "Raw": "源碼",
        "Load earlier comments...": "載入早期的評論...",

        // 修訂標籤卡
        "Unified": "同屏",
        "Split": "分屏",
        "created": "創建",
        "revised": "修訂",
        "renamed": "重命名",
        "this gist": "該片段於",
        "with": "包含",
        "and": "和",
        "No changes.": "無變化",

        "Show comments": "顯示評論",
        "View file": "查看文件",

        "Display the source diff": "顯示源差異",
        "Display the rich diff": "顯示富差異",
        "Empty file.": "空文件。",
        "File renamed without changes.": "文件僅重命名，內容沒有更改。",
        // [/([\d,]+) additions, ([\d,]+) deletions not shown because the diff is too large. Please use a local Git client to view these changes./, "$1 處添加，$2 處刪除未顯示，因為差異太大。請使用本地 Git 客戶端查看這些更改。"],

        // 星標標籤卡
        "Stargazers": "追星者",
        "Be the first to star this gist.": "成為第一個該程式碼片段標星人。",
        "Learn more about starring Gists": "了解更多關於標星程式碼片段的信息",

        // 復刻標籤卡
        "Modified": "修改",
        "View fork": "瀏覽復刻",

        // 編輯程式碼頁面
        "Editing": "編輯",
        "Edit file": "編輯文件",
        "Edit new file": "編輯新文件",
        "Preview changes": "預覽更改",
        "Loading preview…": "載入預覽…",
        "Make secret": "轉為私密",
        "Make public": "轉為公開",
        "Cancel": "取消",
        "Update public gist": "更新公開片段",
        "Update secret gist": "更新私密片段",

        // 已加星標頁面
        "You don’t have any starred gists yet.": "您還沒有標星任何片段。",

        // 評論框
        "Owner": "所有者",
        "Author": "作者",
        "Copy link": "複製鏈接",
        "Quote reply": "引用回覆",
        "Report content": "舉報內容",
        "Report": "舉報",
        // 評論刪除提醒
            "Are you sure you want to delete this?": "您定要刪除這個嗎？",

        "You are the owner of the gist.": "您是程式碼片段的所有者。",
        "You are the author of this gist.": "您是程式碼片段的作者。",
        "You are the author of this .": "您是程式碼片段的作者。",

        "commented": "評論於",
        "via email": "通過郵件",
        "Update comment": "更新評論",
        "Hide": "隱藏",

        "edited": "編輯",
        "(most recent)": "(最近的)",
        "(deleted)": "(已刪除)",
        "deleted this content": "刪除了該內容",
        "Options": "選項",
        "More options": "更多選項",
        "The most recent revision cannot be deleted. Need to delete sensitive information? Go to the specific edit where the information was added.": "最近的修訂版不能被刪除。需要刪除敏感信息？請到信息的具體編輯處修改。",
        "Delete revision from history": "從歷史記錄中刪除修訂",
        "This edit’s content will no longer be visible": "此修改的內容將不再可見",

        // 探索頁面
        "Discover gists": "探索程式碼片段",

    },
    "regexp": [ // 正則翻譯
        [/View ([^ ]+) on GitHub/, "查看 $1 的 GitHub"],
        [/(\d+) files?/, "$1 文件"],
        [/(\d+) forks?/, "$1 復刻"],
        [/(\d+) comments?/, "$1 評論"],
        [/(\d+) stars?/, "$1 星標"],
        [/Save (.+?) to your computer and use it in GitHub Desktop./, "使用 GitHub Desktop，保存 $1 到您的電腦。"],
        //程式碼修訂
        [/(\d+) changed files?/, "$1 個更改的文件"],
        [/(\d+) additions?$/, "$1 處增加"],
        [/(\d+) deletions?$/, "$1 處刪除"],
        [/(\d+) changes?: (\d+) additions? & (\d+) deletions?/, " $1 處更改：$2 處增加 & $3 處刪除"],
        [/([\d,]+) additions, ([\d,]+) deletions not shown because the diff is too large. Please use a local Git client to view these changes./, "$1 處增加，$2 處刪除未顯示，因為差異太大。請使用本地 Git 客戶端查看這些更改。"],
        [/Edited (\d+) times?/,"編輯 $1 次"], //評論框編輯次數
        [/edited by ([^ ]+)/,"被 $1 編輯"], //評論框 被他人編輯
        // [/Joined/,"加入於"], //星標標籤卡
        [/, and (\d+) more/, "，以及其他 $1 個組織"], // 用戶 浮動信息卡
        [/doesn’t have any public gists yet./, "尚無任何公開的程式碼片段。"],
    ],
};

I18N.zh["login/oauth"] = { // 應用授權
    "static": { // 靜態翻譯
        // 第三頁 安裝中

        // 第四頁 安裝後 授權
        // GitHub 應用安裝授權 /login/oauth/authorize?client_id=<client-id>&state=<state>
        // 示例 /login/oauth/authorize?client_id=Iv1.1a4d20f84a40d790&state=login
            "Resources on your account": "您帳戶中的資源",
            "Act on your behalf": "代表您行事",
            "Email addresses": "電子郵箱地址",
            "(read)": "(只讀)",
            "View your email addresses": "查看您的電子郵箱地址",
            "Authorizing will redirect to": "授權將重定向到",
            "Not": "不由",
            "owned or operated by GitHub": "GitHub 擁有或運營",
            "Created": "創建於",
            "GitHub users": "GitHub 用戶",

        // OAuth 應用安裝授權 /login/oauth/authorize?client_id=<client-id>&redirect_uri=<redirect-uri>&scope=<scope>&state=<>
        // 示例 /login/oauth/authorize?client_id=78a2ba87f071c28e65bb&redirect_uri=https%3A%2F%2Fcircleci.com%2Fauth%2Fgithub%3Freturn-to%3D%252Fdashboard%253Futm_medium%253Dpartner%2526utm_campaign%253Dghmarketplace%2526utm_source%253Dgithub&scope=repo%2Cuser%3Aemail&state=uZ9BTIkhQ3_98icRI09o1L1HJmfvIO8gK3FDGwytNAzbBRzXwTge440cKS7NaGtvS0tqCR_HzGMH2z3p
            "wants to access your": "想訪問您的",
            "account": "帳戶",
            "Public and": "公共庫和",
            "private": "私有庫",
            "This application will be able to": "該應用將能夠",
            "read and write all public and private repository data": "讀寫所有公共和私有倉庫數據",
            ". This includes the following:": "。這包括以下內容：",
            "Wikis": "Wiki",
            "Webhooks and services": "Web 鉤子和服務",
            "Deploy keys": "部署密鑰",
            "Collaboration invites": "合作的邀請",

            "Personal user data": "個人用戶資料",
            "Email addresses (read-only)": "電子郵箱地址(只讀)",
            "This application will be able to read your private email addresses.": "此應用將能夠讀取您的私人電子郵箱地址。",

            "Organization access": "組織訪問",
                "Request": "請求",
                "This organization allows the application to access organization data as described in the permissions above.": "該組織允許應用訪問上述權限中所述的組織數據。",
                "Until access is granted by an owner, the application cannot access the organization’s private data or modify its public data.": "在所有者授予訪問權限之前，應用無法訪問組織的私有數據或修改其公共數據。",
                "The application cannot access this organization’s private data or modify its public data.": "應用無法訪問該組織的私有數據或修改其公共數據。",

            // >>>>>具體的權限不打算漢化<<<<<<<

            "Owned & operated by GitHub": "由 GitHub 擁有和運營",

        // 第五頁 即將跳轉到 重定向頁面
            "You are being redirected to the authorized application.": "您將被重定向到授權的應用。",
            "If your browser does not redirect you back, please": "如果您的瀏覽器沒有將您重定向回來，請",
            "click here": "點擊這裡",
            "to continue.": "繼續。",
            "would like permission to:": "希望獲得以下許可：",
            "Know which resources you can access": "了解您可以訪問哪些資源",

    },
    "regexp": [ // 正則翻譯
        // /login/oauth/authorize?client_id=Iv1.1a4d20f84a40d790&state=login
        [/Verify your GitHub identity/, "驗證您的 GitHub 身份"],
        [/has not been installed on any accounts you have access to./, "尚未安裝在您有權訪問的任何帳戶上。"],
        [/Learn more about/, "了解更多關於"],
        [/More than ([^ ]+)/, "超過 $1"],
        // /apps/codacy-production/installations/new/permissions?target_id=7850715
        // [/Install & Authorize on your personal account/, "安裝和授權到您的個人帳戶"],
        // [/Install & Authorize/, "安裝和授權"],
        [/Authorize ([^ ]+)/, "授權 $1"], // /login/oauth/authorize?client_id=Iv1.1a4d20f84a40d790&state=login 調整位置避免覆蓋
        // [/Installing and authorizing (.*) immediately grants these permissions on your account:/, "安裝和授權 $1 則會立即授予您帳戶的以下權限："],
        [/Selected (\d+) repositor(y|ies)./, "選擇了 $1 個倉庫。"],
    ],
};
// I18N.zh["installations/new"] = I18N.zh["login/oauth"];

I18N.zh["explore"] = { // 探索頁面
    "static": { // 靜態翻譯

        // github.com/explore
            "Explore": "探索",
            "Topics": "主題",
            "Trending": "熱門",
            "Collections": "集合",
            "Events": "活動",
            "GitHub Sponsors": "GitHub 贊助",
            "Get email updates": "獲取電子郵件更新",
            "Change email updates": "更改電子郵件更新", // 已設置郵件更新通知

            // 右側信息欄
            "Trending repositories": "熱門倉庫",
            "See more trending repositories": "查看更多熱門倉庫",
            "Trending developers": "熱門開發者",
            "See more trending developers": "查看更多熱門開發者",

            // 中間信息欄
            "Here's what we found based on your interests...": "以下是我們根據您的興趣發現的內容...",
                "This recommendation was generated by GitHub computers": "此推薦由 GitHub 計算機生成",
                "Based on repositories you’ve starred": "基於您星標的倉庫",
                "Based on topics you've starred": "基於您星標的主題",
                "Based on people you follow": "基於您關注的人",
                "Based on repositories you’ve viewed": "基於您查看過的倉庫",
                "Based on your public repository contributions": "基於您對公共倉庫的貢獻",
                "App recommended by GitHub": "GitHub 推薦的應用",
                "Staff pick": "員工精選",
                "This recommendation was created by GitHub staff": "此推薦由 GitHub 工作人員創建",
                "Upcoming event recommended by GitHub": "GitHub 推薦的即將舉行的活動",

            "Star topics that interest you": "為您感興趣的主題加注星標",
            "and we'll show you the latest from the octoverse.": "我們將向您展示來自八維空間的最新信息。",
            "Explore more topics": "探索更多主題",

            "Collection recommended by GitHub": "GitHub 推薦的合集",

            "That's everything we found for you, for now.": "這就是我們目前為您找到的一切。",
                "Come back soon to see what we find next,": "請盡快回來查看我們接下來會發現什麼，",
                "get email updates.": "獲取電子郵件更新。",
                "check how often you receive email updates.": "檢查您收到電子郵件更新的頻率。", // 已設置郵件更新通知

            "Updated": "更新於",
            "See more matching repositories": "查看更多匹配的倉庫",

        // github.com/explore/email
            "Explore email newsletter": "探索電子郵件通訊",
                "Get email updates about what GitHub finds for you based on your interests": "根據您的興趣，通過電子郵件獲取 GitHub 為您找到的最新信息",

            "None": "無",
                "Email isn’t for everyone. Or maybe you’ve just made github.com/explore your homepage. We won’t send you any emails.": "電子郵件並不適合所有人。或者，您剛剛把 github.com/explore 作為您的主頁。我們不會給您發送任何電子郵件。",
            "Daily": "每天",
                "Start your day with a delicious cup of coffee (or perhaps an artisan matcha latte) and interesting repositories every day.": "每天以一杯美味的咖啡（或可能是手工抹茶拿鐵）和有趣的倉庫開始您的一天。",
            "Weekly": "每周",
                "The perfect way to keep on top of everything GitHub. Every Tuesday, we’ll send you an email with everything we found for you in the past week based on your interests.": "掌握 GitHub 一切信息的完美方式。每周二，我們會根據您的興趣向您發送一封電子郵件，內容是我們在過去一周為您找到的所有內容。",
            "Monthly": "每月",
                "The best option for lurkers who want to keep up with major happenings in the open source world.": "對於想了解開源世界重大事件的潛伏者來說，這是最佳選擇。",
            "Unsubscribed!": "已取消訂閱！",
            "Subscribed!": "已訂閱！",

    },
    "regexp": [ // 正則翻譯
        [/([\d,]+) starred topics?/, "$1 個星標主題"],
        [/([\d,]+) starred repositories?/, "$1 個星標倉庫"],
        [/There are ([\d,]+) public repositories? matching this topic/, "有 $1 個公共倉庫與此主題相匹配"],
        [/See the ([\d,]+) items? in this collection/, "查看該系列中的 $1 個項目"],
    ],
};

I18N.zh["topics"] = { // 探索-->主題頁面
    "static": { // 靜態翻譯

        // github.com/topics
            "Explore": "探索",
            "Topics": "主題",
            "Trending": "熱門",
            "Collections": "集合",
            "Events": "活動",
            "GitHub Sponsors": "GitHub 贊助",
            "Get email updates": "獲取電子郵件更新",
            "Change email updates": "更改電子郵件更新", // 已設置郵件更新通知

            "Browse popular topics on GitHub.": "瀏覽 GitHub 上的熱門主題。",
            "All featured topics": "所有主題",
            "Popular topics": "熱門主題",
            "Unstar": "已加星標",
            "Load more…": "載入更多…",
            "Loading more…": "載入中…",

        // github.com/topics/<某主題>
            "Created by": "創建者",
            "Released": "發布於",

            "Related Topics": "相關主題",
            "Updated": "更新於",
            "Sponsor": "贊助",

            "Language:": "語言:",
                "Filter by language": "按語言篩選",
                "All": "所有",
            "Sort:": "排序:",
                "Sort options": "排序選項",
                "Most stars": "最多標星",
                "Fewest stars": "最少星標",
                "Most forks": "最多復刻",
                "Fewest forks": "最少復刻",
                "Recently updated": "最近更新",
                "Least recently updated": "最早更新",

            "Improve this page": "改善此頁面",
                "Add a description, image, and links to the": "為",
                "topic page so that developers can more easily learn about it.": "主題頁面添加描述、圖片和鏈接，以便開發人員可以更輕鬆地了解它。",
                "Curate this topic": "整理此主題",
            "Add this topic to your repo": "將此主題添加到您的倉庫",
                "To associate your repository with the": "將您的倉庫與",
                "topic, visit your repo's landing page and select \"manage topics.\"": "主題關聯，請訪問倉庫的登錄頁面，然後選擇 “管理主題”。",

    },
    "regexp": [ // 正則翻譯
        [/followers?/, "個關注者"],
        [/Here are ([\d,]+) public repositories? matching this topic.../, "有 $1 個公共倉庫與此主題相匹配"],
    ],
};

I18N.zh["trending"] = { // 熱門頁面
    "static": { // 靜態翻譯
        "Explore": "探索",
        "Topics": "主題",
        "Trending": "熱門",
        "Collections": "集合",
        "Events": "活動",
        "GitHub Sponsors": "GitHub 贊助",
        "Get email updates": "獲取電子郵件更新",
        "Change email updates": "更改電子郵件更新", // 已設置郵件更新通知

        "See what the GitHub community is most excited about today.": "看看 GitHub 社區今天最受關注的項目。",
        "See what the GitHub community is most excited about this week.": "看看 GitHub 社區本周最受關注的項目。",
        "See what the GitHub community is most excited about this month.": "看看 GitHub 社區本月最受關注的項目。",

        "These are the developers building the hot tools today.": "這些是今天創建熱門項目的開發人員。",
        "These are the developers building the hot tools this week.": "這些是本周創建熱門項目的開發人員。",
        "These are the developers building the hot tools this month.": "這些是本月創建熱門項目的開發人員。",

        "Repositories": "倉庫",
        "Developers": "開發者",

        "Sponsor": "贊助",
        "Built by": "構建者",

        "Spoken Language:": "母語：",
            "Select a spoken language": "選擇母語：",
            "This setting can be saved in your": "此設置可以保存在您的",
            "This setting can be updated in your": "此設置可以更新於您的",
            "profile settings.": "個人資料。",
            "Filter spoken languages": "篩選母語",
            "Clear spoken language": "清除母語",
            "Any": "任何",
        "Language:": "語言：",
            "Select a language": "選擇語言：",
            "Filter languages": "篩選語言",
            "Unknown languages": "未知語言",
        "Date range:": "日期範圍：",
            "Adjust time span": "調整的時間跨度",
                "Today": "今天",
                "This week": "本周",
                "This month": "本月",
        "Sponsorable:": "可贊助：",
            "GitHub Sponsors participation": "參與 GitHub 贊助",
            "Sponsorable developers": "可贊助的開發者",
            "All developers": "所有開發者",
            "All": "所有",

    },
    "regexp": [ // 正則翻譯
        [/([\d,]+) stars today?/, "今日 $1 星標"],
        [/([\d,]+) stars this week?/, "本周 $1 星標"],
        [/([\d,]+) stars this month?/, "本月 $1 星標"],
    ],
};

I18N.zh["collections"] = { // 集合頁面
    "static": { // 靜態翻譯
        "Explore": "探索",
        "Topics": "主題",
        "Trending": "熱門",
        "Collections": "集合",
        "Events": "活動",
        "GitHub Sponsors": "GitHub 贊助",
        "Get email updates": "獲取電子郵件更新",
        "Change email updates": "更改電子郵件更新", // 已設置郵件更新通知
        "Curated lists and insight into burgeoning industries, topics, and communities.": "精心策劃的列表和對新興行業、主題和社區的見解。",
        "Create a collection": "創建一個集合",
        "Load more…": "載入更多...",
        "Loading more…": "載入中...",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["events"] = { // 活動頁面
    "static": { // 靜態翻譯
        "Explore": "探索",
        "Topics": "主題",
        "Trending": "熱門",
        "Collections": "集合",
        "Events": "活動",
        "GitHub Sponsors": "GitHub 贊助",
        "Get email updates": "獲取電子郵件更新",
        "Change email updates": "更改電子郵件更新", // 已設置郵件更新通知
        "Connect with the GitHub community at conferences, meetups, and hackathons around the world.": "在世界各地的會議、聚會和編程馬拉松上與 GitHub 社區建立聯繫。",
        "GitHub Events": "GitHub 活動",
        "Sponsored by GitHub": "由 GitHub 贊助",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["sponsors"] = { // 贊助界面
    "static": {
        // 贊助者首頁 https://github.com/sponsors
            "Invest in the software that powers your world": "投資驅動您世界的項目",
            "See your top dependencies": "查看您的首要依賴項",
            "Get sponsored": "獲得贊助",
            "A new way to contribute": "為開源做出貢獻的",
            "to open source": "新方式",
            "Invest in your supply chain": "投資您的供應鏈",
            "You depend on open source every day": "您每天都依賴於開源項目",
            "Make open source careers possible": "使開源生涯成為可能",
            "Thanks to our partners": "感謝我們的合作夥伴",
            "Available in 103 regions": "可用於 103 個地區",
            "to receive updates when we expand.": "以便在我們擴展時接收更新。",
            "View country and region list": "查看國家和地區支持列表",
            "Anyone can sponsor, but you must reside in a supported region to receive funds.": "任何人都可以贊助，但您必須居住在受支持的地區才能獲得資金。",
            "Frequently asked questions": "常見問題",
            "Invest in the projects you depend on": "投資您所依賴的項目",

        // 贊助者賬戶頁面 https://github.com/sponsors/accounts
            // 標題
                "GitHub Sponsors accounts": "GitHub 贊助者賬戶",
            // 管理
                "Manage who you sponsor": "管理您贊助的對象",
                    "You haven't sponsored anyone yet.": "您還沒有贊助任何人。",
                    "Find someone to sponsor": "尋找贊助對象",
            // 名單
                "GitHub Sponsors eligible accounts": "符合 GitHub 贊助者資格的賬戶",
                    "This account has not applied to join GitHub Sponsors.": "此帳戶尚未申請加入 GitHub 贊助者。",
                    "Join the waitlist": "加入等候名單",

        // 加入等候名單界面 https://github.com/sponsors/<user-name>/waitlist
            "GitHub Sponsors is now out of beta for 103 regions!": "GitHub 贊助者現已在 103 個地區推出測試版！",
                "If you have a bank account in": "如果您的銀行賬戶所在",
                "a country or region where GitHub Sponsors is generally available": "國家或地區普遍支持 GitHub 贊助者",
                ", you will get an email from us when your application has been reviewed.": "，您將在申請通過審核後收到我們的電子郵件。",
                "If you don't have an eligible bank account, don't worry! We're working hard to get more countries out of beta soon. Join the waitlist to be the first to know.": "如果您沒有符合條件的銀行賬戶，也不用擔心！我們正在努力讓更多的國家或地區通過測試。加入等候名單，第一時間獲知消息。",
            "Contact email": "聯繫電子郵箱",
                "Select a verified email address for us to contact you about your GitHub Sponsors profile. This will not be shared publicly.": "請選擇一個經過驗證的電子郵箱地址，以便我們就您的 GitHub 贊助者個人資料與您聯繫。該郵箱地址不會公開。",
                "You can manage verified email addresses in your": "您可以管理已驗證的電子郵箱地址在您的",
                "email settings": "電子郵箱設置",
            "Country or region of residence": "居住的國家或地區",
                "Select a country or region": "選擇一個國家或地區",
                "The country or region where you reside. This is required for tax purposes.": "您居住的國家或地區。這是出於稅務目的所必需的。",
            "How you receive payments": "收款方式",
                "Use a bank account": "使用銀行賬戶",
                    "You can use your bank account to join GitHub Sponsors.": "您可以使用您的銀行帳戶加入 GitHub 贊助者。",
                    "Note that you are responsible for all applicable taxes on payouts you receive. If you use a personal bank account, your country may tax your GitHub Sponsors payouts as personal income.": "請注意，您需承擔您收到的付款的所有適用稅款。如果您使用個人銀行賬戶，您所在國家或地區可能會將您的 GitHub 贊助者收款作為個人收入徵稅。",
                    "Learn more about setting up a Stripe account": "了解更多關於設置 Stripe 帳戶的信息",

                    "Country or region where your bank account is located:": "您的銀行賬戶所在的國家或地區：",
                        "Your region is": "您所在的地區",
                        "not supported": "不受支持",
                        "or may be in": "或者可能處於",
                        "beta": "測試階段",
                    "Use another bank account where GitHub Sponsors is available or complete signup to receive a notification if your region becomes available.": "使用另一個 GitHub 贊助者可用的銀行賬戶，或者在您所在的地區可用時完成註冊以收到通知。",
                "Use a fiscal host": "使用財務託管",
                    "You can use a fiscal host to join GitHub Sponsors instead of using your own bank account.": "您可以使用財務託管機構代替自己的銀行賬戶來加入 GitHub 贊助者。",
                    "Choose a fiscal host:": "選擇一個財務託管機構：",
                    "Select a fiscal host": "選擇一個財務託管機構",

                    "Fiscal host project profile URL:": "財務託管機構項目資料鏈接：",
                        "Please include a link to your profile on your fiscal host's site, if available.": "如果有的話，請提供您在的財務託管機構上的個人資料鏈接。",
                    "e.g.,": "例如，",
            "Join waitlist": "加入等候名單",

        // 探索 GitHub 贊助者界面 https://github.com/sponsors/explore
            "Explore": "探索",
            "Topics": "主題",
            "Trending": "熱門",
            "Collections": "集合",
            "Events": "活動",
            "GitHub Sponsors": "GitHub 贊助者",
            "Get email updates": "獲取電子郵件更新",
            "Change email updates": "更改電子郵件更新", // 已設置郵件更新通知

            "Explore GitHub Sponsors": "探索 GitHub 贊助者",
                "Fund the work of developers and projects you depend on.": "為您所依賴的開發者和項目提供資金。",

            // 左側欄
                "Explore as": "使用以下身份進行探索",
                "Ecosystem": "生態系統",
                    "All ecosystems": "所有生態系統",
                "Filters": "過濾器",
                    "Direct dependencies only": "僅直接依賴項",

            "None of your dependencies can be sponsored": "您的任何依賴項都尚未開放贊助",
                // [/([^ ]+) does not directly depend on any repositories whose maintainers can be sponsored./, "$1 不直接依賴於任何可以贊助其維護人員的倉庫。"],
            "developers who maintain your dependencies": "位開發人員維護您的依賴項",
            "Download your": "下載",
            "results as CSV": "結果（CSV格式）",

            "Most used": "較常使用",
            "Least used": "較少使用",
            "Most sponsors": "較多贊助者",
            "Fewest sponsors": "較少贊助者",
            "Newest Sponsors profile": "最新贊助者資料",
            "Oldest Sponsors profile": "最早贊助者資料",

            "You depend on": "您依賴於",
            // [/(\d+) repositor(y|ies) they own or maintain/, "他們擁有或維護 $1 個倉庫"],
            // [/others? sponsor, including (\d+) organizations?/, "位其他贊助者，包括 $1 個組織"],
            "sponsors": "贊助者",
            "others sponsor": "位其他贊助者",
            // [/(\d+)% towards goal/, "實現目標的 $1%"],

            "Explore people and projects": "探索人員和項目",
            "Bulk Sponsor": "批量贊助",
                "Sponsor multiple maintainers in one easy transaction.": "在一筆簡單的交易中贊助多位維護人員。",
                "Get started": "開始",
            "Don't see what you're looking for? Try": "沒有看到您在找的東西？嘗試",
            "searching for people you can sponsor": "尋找可以接受您贊助的人",
            "and filtering by language!": "並通過語言篩選！",
            "Clear filter": "清除篩選器",
            "Sponsor": "贊助",

            // [/Want to sponsor on behalf of ([^ ]+)?/, "想代表 $1 贊助嗎？"],
            "Talk to your organization about GitHub Sponsors": "與您的組織討論 GitHub 贊助者事宜",
            "Share this discovery page with your team to start a conversation about investing in the people and projects you rely on.": "與您的團隊分享本發現頁面，並就投資於您所依賴的人員和項目展開討論。",
            "Invest in open source software and we'll track your progress here!": "投資開源軟件，我們將在這裡跟蹤您的進度！",
    },
    "regexp": [ // 正則匹配
        [/([^ ]+) does not directly depend on any repositories whose maintainers can be sponsored./, "$1 不直接依賴於任何可以贊助其維護人員的倉庫。"],
        [/(\d+) repositor(y|ies) they own or maintain/, "他們擁有或維護 $1 個倉庫"],
        [/others? sponsor, including (\d+) organizations?/, "位其他贊助者，包括 $1 個組織"],
        [/(\d+)% towards goal/, "實現目標的 $1%"],
        [/Want to sponsor on behalf of ([^ ]+)?/, "想代表 $1 贊助嗎？"]
    ],
};

I18N.zh["showcases"] = { // 展示頁面
    "static": { // 靜態翻譯
        "Open source showcases": "開源展示",
        "Browse popular repositories based on the topic that interests you most.": "瀏覽熱門倉庫基於您最感興趣的主題。",
        "Search showcases": "搜索展示",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["account/organizations/new"] = { // 創建組織
    "static": { // 靜態翻譯
        // 創建免費的組織 https://github.com/account/organizations/new?coupon=&plan=team_free
        // https://github.com/account/organizations/new?coupon=&plan=free
        // 第 1 頁
        "Tell us about your organization": "告訴我們您的組織",
        "Set up your organization": "設置您的組織",
        "Organization name": "組織名稱",
            // [/The name \'(\d+)\' is already taken./, "名稱 '$1' 已被採用。"],
            // [/The name \'(\d+)\' may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen./, "名稱 '$1' 只能包含字母數字字符或單個連字符，並且不能以連字符開頭或結尾。"],
            // [/Organization name \'([^ ]+)\' is unavailable./, "組織名稱 '$1' 不可用。"], //
            "This will be the name of your account on GitHub.": "這將是您在 GitHub 上的帳戶名稱。",
            "Your URL will be: https://github.com/": "您的網址將是：https://github.com/",
        "Contact email": "聯繫電子郵箱",
            "Email is invalid": "電子郵箱無效",
        "This organization belongs to:": "該組織屬於：",
            "My personal account": "我的個人帳戶",
                // [/I.e.,/, "即："],
            "A business or institution": "企業或機構",
                "For example: GitHub, Inc., Example Institute, American Red Cross": "比如說：GitHub, Inc., Example Institute, American Red Cross",
                "Name of business or institution this organization belongs to": "該組織所屬的企業或機構的名稱",
                "This business or institution — not": "該企業或機構 — 不是",
                "(your personal account) — will control this organization.": "（您的個人帳戶）— 將控制此組織。",
        "Add-ons": "附加組件",
            "Get GitHub Copilot Business in this organization": "在組織中獲取 GitHub Copilot 商業版",
                "Boost developer productivity for $19/user/month. Pay only for assigned seats after setup.": "以 $19 /用戶/月的價格提高開發人員的工作效率。僅需在設置後為分配的席位付費。",
                "See Copilot Business docs.": "請參閱 GitHub Copilot 商業版文檔。",
        "I hereby accept the": "我特此接受",
            // 個人賬戶
            "Terms of Service": "服務條款",
            ". For more information about GitHub's privacy practices, see the": "。關於 GitHub 隱私條款的更多信息，請參見",
            "GitHub Privacy Statement": "GitHub 隱私聲明",
            // 企業或機構
            "GitHub Customer Agreement": "GitHub 客戶協議",
            "on behalf of my organization and confirm that I have the authority to do so": "代表我的組織，並確認我有權力這樣做",

        // ". We'll occasionally send you account-related emails.": "。我們偶爾會向您發送與帳戶相關的電子郵件。",

        // https://github.com/organizations/<org-name>/invite
        // 第 2 頁 邀請成員
        "Start collaborating": "開始合作",
        // [/Welcome to/, "歡迎來到"],
        "Add organization members": "添加組織成員",
        "Organization members will be able to view repositories, organize into teams, review code, and tag other members using @mentions.": "組織成員將能夠使用 @提及來查看倉庫、組織成團隊、審查程式碼以及標記其他成員。",
        "Learn more about permissions for organizations →": "了解更多關於組織權限的信息 →",
        "Search by username, full name or email address": "搜索用戶名、全名、或電子郵箱",
        "Complete setup": "完成設置",
        "Skip this step": "跳過",

        // https://github.com/orgs/<org-name>/invitations/bulk_create_for_new_org
        // https://github.com/orgs/<org-name>/welcome_survey/new
    },
    "regexp": [ // 正則翻譯
        [/The name \'([^ ]+)\' is already taken./, "名稱 '$1' 已被採用。"],
        [/The name \'([^ ]+)\' may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen./, "名稱 '$1' 只能包含字母數字字符或單個連字符，並且不能以連字符開頭或結尾。"],
        [/Organization name \'([^ ]+)\' is unavailable./, "組織名稱 '$1' 不可用。"],
        [/I.e.,/, "即："],
    ],
};

I18N.zh["account/choose"] = { // 賬戶升級選擇
    "static": { // 靜態翻譯
        // https://github.com/account/choose?action=upgrade
            "Which do you want to upgrade?": "您想升級哪個？",
            "Your personal account": "您的個人賬戶",
            "Organization": "組織",
            "Create a new organization": "創建新組織",
            "Try GitHub Enterprise": "試用 GitHub 企業版",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["marketplace"] = { // GitHub 市場
    "static": { // 靜態翻譯
        // GitHub 市場主頁 https://github.com/marketplace
            "Extend GitHub": "拓展 GitHub",
                "Add tools to help you build and grow": "添加工具來幫助您構建和成長",
                "Find tools to improve your workflow": "尋找改進工作流程的工具", // 未登錄
            "Explore apps": "探索應用",
            "Explore free apps": "探索免費應用", // 未登錄
            "Contact Sales": "聯繫銷售",

            "Types": "類型",
                "Build on your workflow with apps that integrate with GitHub.": "使用與 GitHub 集成的應用構建您的工作流程。",
                "An entirely new way to automate your development workflow.": "自動化開發工作流程的全新方式。",

            "Search for apps and actions": "搜索應用和操作",
                "Narrow your search": "縮小搜索範圍",

            "Sort:": "排序：",
                "Sort options": "排序選項",
                "Best Match": "最佳匹配",
                "Recently added": "最近添加",
                "Most installed/starred": "安裝次數最多/標星最多",

            // 類別
                "API management": "API 管理",
                    "Structure your API infrastructure to enable various internet gateways to interact with your service.": "構建應用接口基礎設施，使各種互聯網網關能夠與您的服務互動。",
                "Chat": "聊天",
                    "Bring GitHub into your conversations.": "將 GitHub 納入您的對話中。",
                "Code quality": "程式碼質量",
                    "Automate your code review with style, quality, security, and test‑coverage checks when you need them.": "在需要時，通過樣式、質量、安全性和測試覆蓋檢查自動進行程式碼審查。",
                "Code review": "程式碼審查",
                    "Ensure your code meets quality standards and ship with confidence.": "確保您的程式碼符合質量標準，並能放心交付。",
                "Continuous integration": "持續集成",
                    "Automatically build and test your code as you push it to GitHub, preventing bugs from being deployed to production.": "當您將程式碼推送到 GitHub 時，自動構建和測試您的程式碼，從而防止將錯誤部署到生產中。",
                    "Container CI": "容器持續集成",
                        "Continuous integration for container applications.": "容器應用的持續集成。",
                    "Game CI": "遊戲 CI",
                        "Tools for building a CI pipeline for game development": "用於構建遊戲開發 CI 管道的工具",
                    "Mobile CI": "移動 CI",
                        "Continuous integration for Mobile applications": "移動應用的持續集成",
                "Dependency management": "依賴管理",
                    "Secure and manage your third-party dependencies.": "保護和管理第三方依賴關係。",
                "Deployment": "部署",
                    "Streamline your code deployment so you can focus on your product.": "簡化程式碼部署，讓您專注於產品。",
                "IDEs": "集成開發環境",
                    "Find the right interface to build, debug, and deploy your source code.": "找到合適的界面來構建、調試和部署源程式碼。",
                "Learning": "學習",
                    "Get the skills you need to level up.": "獲得升級所需的技能。",
                "Localization": "本地化",
                    "Extend your software's reach. Localize and translate continuously from GitHub.": "擴展您的軟件的覆蓋範圍。從 GitHub 持續本地化和翻譯。",
                "Mobile": "移動",
                    "Improve your workflow for the small screen.": "針對小屏幕改進工作流程。",
                "Monitoring": "監視",
                    "Monitor the impact of your code changes. Measure performance, track errors, and analyze your application.": "監控程式碼更改的影響。衡量性能、跟蹤錯誤並分析您的應用。",
                "Project management": "項目管理",
                    "Organize, manage, and track your project with tools that build on top of issues and pull requests.": "使用基於置頂議題和拉取請求的工具來組織、管理和跟蹤您的項目。",
                "Publishing": "發布",
                    "Get your site ready for production so you can get the word out.": "讓您的網站做好生產準備，以便您可以宣傳。",
                "Recently added": "最新添加",
                    "The latest tools that help you and your team build software better, together.": "最新的工具可幫助您和您的團隊更好地共同構建軟件。",
                "Testing": "測試",
                    "Find, fix, and prevent security vulnerabilities before they can be exploited.": "發現、修復和預防安全漏洞，防患於未然。",
                // 支持
                    "Get your team and customers the help they need.": "為您的團隊和客戶提供所需的幫助。",
                // 測試
                    "Eliminate bugs and ship with more confidence by adding these tools to your workflow.": "通過將這些工具添加到您的工作流程中，消除錯誤並更有信心地交付。",
                "Utilities": "實用工具",
                    "Auxiliary tools to enhance your experience on GitHub": "輔助工具，提升您的 GitHub 使用體驗",
                    "Backup Utilities": "備份工具",
                        "Utilities providing periodic backups of your GitHub data": "定期備份 GitHub 數據的實用工具",

            "Filter": "篩選器",
                // 免費
                    "Tools that provide a free tier.": "提供免費套餐的工具。",
                "Free Trials": "免費試用",
                    "Tools that support free, time-limited, access to their service.": "支持免費、限時訪問其服務的工具。",
                "GitHub Enterprise": "GitHub 企業版",
                    "Tools that have GitHub Enterprise supported offerings.": "支持 GitHub 企業版的工具。",
                "GitHub Partners": "GitHub 合作夥伴",
                    "This category is used for tagging listings/actions for TPE team to use as a filter": "此類別用於標記列表/操作，以供 TPE 團隊用作篩選器",
                "Paid": "付費",
                    "Tools that require a paid subscription.": "需要付費訂閱的工具。",

            "Verification": "驗證",
                "Verified Creator": "經驗證的創建者",

            "Your items": "您的項目",
                "Pending orders": "待處理訂單",
                "Pending installations": "待安裝",
                "Purchases": "購買",

            "Recommended": "推薦",
            "View all": "查看全部",

            "List your tool on GitHub Marketplace": "在 GitHub 市場上列出您的工具",
            "Read the documentation": "閱讀文檔",
                "Learn how you can build tools to extend and improve developers' workflows.": "了解如何構建工具來擴展和改進開發人員的工作流程",

            "Submit your tool for review": "提交您的工具以供審核",
                "Share your app or GitHub Action with millions of developers.": "與數百萬開發者分享您的應用或 GitHub Action",

        // https://github.com/marketplace?type=
            "Search results": "搜索結果",
            "filtered by": "已篩選",
            "Publisher domain and email verified": "已驗證發布者域名和電子郵件",
            "Creator verified by GitHub": "創建者經 GitHub 驗證",

        // 待處理訂單頁面 https://github.com/marketplace/orders/pending
            "Review and complete your orders": "查看並完成您的訂單",
            "We noticed you started setting up some new plans but didn’t finish. You can complete your pending orders below or review any active subscriptions on the": "我們注意到您開始制定一些新計劃，但尚未完成。您可以完成下面的待處理訂單或查看任何有效的訂閱在",
            "billing overview page": "賬單概覽頁面",

            "Remove from pending orders": "從待處理訂單中刪除",
            "This will not affect your existing subscriptions.": "這不會影響您現有的訂閱。",

            // 頂部提醒
                // [/plan has been deleted./, "計劃已被刪除。"],

        // 待安裝頁面 https://github.com/marketplace/installations/pending
            "We noticed you’ve purchased some apps but didn't finish installing them. You can review and install them below.": "我們注意到您購買了一些應用，但尚未完成安裝。您可以在下面查看並安裝它們。",
            "View or cancel any active subscriptions on the": "查看或取消任何有效的訂閱",
            "Grant this app access to your GitHub account to complete installation.": "授予此應用訪問 GitHub 賬戶的權限，以完成安裝。",

        // 應用介紹頁面 https://github.com/marketplace/<app-name>
        // 示例: https://github.com/marketplace/codacy 第一頁
            "Apps": "應用",
            // 左側信息欄
            "GitHub has verified that the application meets the": "GitHub 已驗證了該應用符合",
            "requirements for listing": "上架要求",
            "GitHub has verified that the publisher controls the domain and meets other": "GitHub 已經驗證了發布者對該域名的控制權和滿足其他",
            "requirements": "要求",
            "Categories": "類別",
            "App Type": "應用類型",
                "GitHub Application": "GitHub 應用",
                "Oauth Application": "Oauth 應用",
            "Supported languages": "支持的語言",
            "and": "和",
            "Customers": "客戶",
            "Verified Domains": "經驗證的域名",
            "Developer links": "開發者鏈接",
            "Support": "支持",
            "Documentation": "文檔",
            "Privacy Policy": "隱私條款",
            "Terms of Service": "服務條款",
            "Report Abuse": "舉報濫用",

            // 右側正文
            "Application": "應用",
            "Set up a free trial": "免費試用",
            "Set up a plan": "制定一個計劃",
            "Set up a new plan": "制定一個新計劃",

            "You have already purchased this app on GitHub Marketplace.": "您已經在 GitHub 市場上購買了此應用。",
            "You’ve already granted this app access to GitHub outside of GitHub Marketplace.": "您已授予此應用在 GitHub 市場之外訪問 GitHub 的權限。",
            "grant this app access to your GitHub account": "授予此應用訪問您的 GitHub 帳戶的權限",
            "Configure access": "設置權限",
            "Edit your plan": "編輯您的計劃",
                "Choose an account’s plan to edit": "選擇要編輯的帳戶計劃",
            "Read more...": "了解更多...",

            // 下半部分
            "Pricing and setup": "定價與設置",

            "Open source": "開源",
            "Free for open source projects": "對開源項目免費",
            "Free for both open source and private projects": "對開源和私人項目免費",
            "Unlimited private repositories": "無限制私有項目",
            "Free Trial": "免費試用",

            "per seat": "每席位",
            "Seat(s) in this plan": "個席位在計劃中",

            "Search by name": "按名稱搜索",
            "Install it for free": "免費安裝",
            "Try free for 14 days": "免費試用 14 天",
            "Buy with GitHub": "通過 GitHub 購買",
            "Next: Confirm your installation location.": "下一步：確認您的安裝位置。",
            "Next: Confirm your installation location and payment information.": "下一步：確認您的安裝位置和支付信息。",
            // [/([^ ]+) is provided by a third-party and is governed by separate/, "$1 是由第三方提供的，並受單獨的"],
            "terms of service": "服務條款",
            "privacy policy": "隱私政策",
            ", and": "，和",
            "support documentation": "支持文檔",
            "support contact": "支持聯絡",

        // 應用的審查、編輯訂單 第二頁 https://github.com/marketplace/<app-name>/order/<order-id>?account=<account-name>
        // 收費應用示例: https://github.com/marketplace/travis-ci/order/MDIyOk1hcmtldHBsYWNlTGlzdGluZ1BsYW43MA==?account=maboloshi
            "Edit your plan": "編輯您的計劃",
            "Account:": "帳戶：",
            "Order summary": "訂單摘要",
            "Open Source": "開源",
            "(current plan)": "(當前計劃)",
            "Plans": "計劃",
                "/ month": "/ 月",

            "To complete this installation, you must": "要完成此安裝，您必須",
            "grant this app access": "授予此應用的權限",
            "to your GitHub account.": "訪問您的 GitHub 帳戶。",

            "Cancel this plan": "取消計劃",

            // 右側欄
            "Current plan": "當前計劃",
            "New plan": "新計劃",
                "Due today": "截止到今天",
                // [/Prorated for/, "按比例計算"],

            "Billing information": "賬單信息",
            "Please confirm your billing details to continue. You only need to do this once.": "請確認您的賬單詳情以繼續。您只需確認一次。",
            "Personal account": "個人帳戶",
            // "Terms of Service": "服務條款",
            // "and the": "和",
            // "Privacy Policy": "隱私政策",
            // ". You previously agreed to the": "。您已同意過",
            // "Marketplace Terms of Service.": "市場服務條款。",
            // "Issue plan changes": "議題計劃更改",

            "First name": "名字",
                "First name can't be blank.": "名字不能為空。",
                "First name can't be blank": "名字不能為空",
            "Last name": "姓氏",
                "Last name can't be blank.": "姓氏不能為空。",
                "Last name can't be blank": "姓氏不能為空",
            "Address (P.O. box, company name, c/o)": "地址（郵政信箱、公司名稱、c/o）",
                "Address can't be blank.": "地址不能為空。",
                "Address can't be blank": "地址不能為空",
            "Address line 2 (Apartment, suite, unit)": "地址第 2 行（公寓、套房、單元）",
            "City": "城市",
                "City can't be blank.": "城市不能為空。",
                "City can't be blank": "城市不能為空",
            "Country/Region": "國家/地區",
                "Country code can't be blank.": "國家/地區不能為空。",
                "Country code can't be blank": "國家/地區不能為空",
                "Choose your country": "選擇您所在的國家/地區",
            "State/Province": "州/省",
                "Required for certain countries": "某些國家/地區需要",
            "Postal/Zip code": "郵政編碼",

            "Save and continue": "保存並繼續",

            // 頂部提醒
                "An error occurred while saving payment information.": "保存支付信息時發生錯誤。",

        // 免費應用示例: https://github.com/marketplace/gitlocalize/order/MDIyOk1hcmtldHBsYWNlTGlzdGluZ1BsYW4zOTg=?account=maboloshi
            "Review your order": "審查您的訂單",
            "Free": "免費",
            "For individuals, teams, and communities, public and private projects": "對於個人、團隊和社區，公共和私人項目",
            "Total amount": "總金額",

            "An organization owner or billing manager must link their personal billing information with this organization account. You can switch to a business account to use your business’ billing information by": "組織所有者或賬單管理者必須將其個人賬單信息與該組織賬戶關聯。您可以切換到企業賬戶，以使用企業的賬單信息通過",
            "signing": "簽署",
            "the": " ",
            "GitHub Customer Agreement": "GitHub 客戶協議",

        // GitHub 應用頁面 https://github.com/apps/<app-name>
        // 示例: https://github.com/apps/codacy-production
            "GitHub App": "GitHub 應用",

            "No description": "尚無描述",
            "Read more about this app on the Marketplace": "了解更多關於市場中此應用的信息",

            // 未安裝
                "Install": "安裝",
                // "Next: Confirm your installation location.": "下一步：確認您的安裝位置。",

            // 已安裝
                "Configure": "設置",
                "Manage your installation settings.": "管理安裝設置。",

            "Developer": "開發者",
                "App settings": "應用設置", // 已安裝
                "Website": "網站",

            "is provided by a third-party and is governed by separate terms of service, privacy policy, and support documentation.": "是由第三方提供的，並受單獨的服務條款、隱私政策和支持文檔的約束。",

            "Report abuse": "舉報濫用",

        // GitHub 應用 安裝、授權頁面 https://github.com/apps/<app-name>/installations/new/permissions?target_id=<id>
        // 示例 https://github.com/apps/codacy-production/installations/new/permissions?target_id=7850715
            "Install & Authorize": "安裝與授權",
            "Authorize & Request": "授權與請求", // 他人的組織
            "Request": "請求",
            // [/Install & Authorize on your personal account (.*)/, "在您的個人帳戶 $1 上安裝與授權"],
            // [/Install on your personal account (.*)/, "在您的個人帳戶 $1 上安裝"],
            // [/Install & Authorize on your organization (.*)/, "在您的組織 $1 上安裝與授權"], // 組織
            // [/Install on your organization (.*)/, "在您的組織 $1 上安裝"], // 組織
            // [/Request on your organization (.*)/, "對於您的組織 $1 的請求"], // 組織
            // [/Authorize & Request on your organization (.*)/, "對於您的組織 $1 的授權與請求"], // 組織

            "for these repositories:": "對於這些倉庫：",
                "All repositories": "所有倉庫",
                    "This applies to all current": "這適用於資源所有者擁有的所有當前",
                    "and": "和",
                    "future repositories owned by the resource owner.": "未來的倉庫。",
                    "Also includes public repositories (read-only).": "還包括公共倉庫（只讀）。",
                "Only select repositories": "僅選定的倉庫",
                    "Select at least one repository.": "至少選擇一個倉庫。",
                    "Select repositories": "選擇倉庫",
                        "Search for a repository": "搜索倉庫",
                        // [/Selected (\d+) repositor(y|ies)./, "已選擇 $1 倉庫。"],
                        "request": "請求",

            "with these permissions:": "授權以下權限：",

            // >>>>>具體的權限不打算漢化<<<<<<<
            // >>>>>具體的權限不打算漢化<<<<<<<

            "User permissions": "用戶權限",
            // [/Installing and authorizing (.*) immediately grants these permissions on your account:/, "安裝 & 授權 $1 會立即在您的帳戶上授予以下權限："],
            // [/can also request users' permission to the following resources. These permissions will be requested and authorized on an individual-user basis./, "還可以請求用戶對以下資源的許可。這些權限將在個人用戶的基礎上請求和授權。"],
            "These permissions will also be requested and authorized as needed on an individual-user basis.": "這些權限也將根據個人用戶的需要進行申請和授權。", // 組織

            "Installing & Authorizing": "安裝與授權中",
            "Installing": "安裝中",
            "Requesting": "請求中",

            "Next: you'll be redirected to": "下一步：您將被重定向到",
            "Next: you’ll be directed to the GitHub App’s site to complete setup.": "下一步：您將被引導到GitHub 應用網站完成設置。", // 組織

        // 應用設置 - 選擇目標 https://github.com/apps/<app-name>/installations/select_target
            // [/Install (.*)/, "安裝 $1"],
            // [/Where do you want to install (.*)\?/, "您想把 $1 安裝在哪裡？"],
            // [/(.*) is installed. Click to configure.\?/, "$1 已安裝。點擊進行配置。"],

        // 操作介紹頁面 https://github.com/marketplace/actions/<action-name>
        // 示例: https://github.com/marketplace/actions/merge-upstream
            // 頂部提醒
                "Sorry, we couldn’t find that version of this Action. Here’s the latest version.": "對不起，我們找不到此 GitHub Action 的這個版本。 下面是最新的版本。",
                "You're viewing an older version of this GitHub Action. Do you want to see the": "您正在查看此 GitHub Action 的舊版本。您想查看",
                "latest version": "最新版本",
                "instead?": "嗎？",

            "Latest version": "最新發行版",
            "Use latest version": "使用最新發行版",
            "Choose a version": "選擇發行版",

            "Verified creator": "經驗證的創建者",
            "GitHub has verified that this action was created by": "GitHub 已經驗證該操作，創建由",
            "Learn more about verified Actions": "了解更多關於經驗證操作的信息",

            "Contributors": "貢獻者",
            "Links": "鏈接",
            "Open issues": "打開議題",
            "is not certified by GitHub. It is provided by a third-party and is governed by separate terms of service, privacy policy, and support documentation.": "未經 GitHub 認證。它由第三方提供，並受單獨的服務條款、隱私政策和支持文檔的約束。",

    },
    "regexp": [ // 正則翻譯
        [/plan has been deleted./, "計劃已被刪除。"],
        // /marketplace/codacy
        [/(\d+) other languages? supported/, "$1 種其他語言支持"],
        [/([^ ]+) is provided by a third-party and is governed by separate/, "$1 是由第三方提供的，並受單獨的"],
        // /marketplace/travis-ci/order/MDIyOk1hcmtldHBsYWNlTGlzdGluZ1BsYW43MA==?account=maboloshi
        [/Prorated for/, "按比例計算"],
        // [/By clicking "Issue plan changes", you are agreeing to ([^ ]+)’s/, "點擊 “議題計劃更改”，您同意 $1 的"],
        // [/By clicking "Complete order and begin installation", you are agreeing to ([^ ]+)’s/, "點擊 “完成訂購並開始安裝”，表示您同意 $1 的"],
        [/Next: Authorize ([^ ]+) to access your account./, "下一步：授權 $1 訪問您的帳戶。"],
        [/(\d+) results?/, "$1 個結果"],
        [/([0-9.k]+) stars?/, "$1 星標"],
        [/([0-9.k]+) installs?/, "$1 次安裝"],
        [/Install & Authorize on your personal account (.*)/, "在您的個人帳戶 $1 上安裝與授權"],
        [/Install & Authorize on your organization (.*)/, "在您的組織 $1 上安裝與授權"], // 組織
        [/Install on your personal account (.*)/, "在您的個人帳戶 $1 上安裝"],
        [/Install on your organization (.*)/, "在您的組織帳戶 $1 上安裝"],
        [/Selected (\d+) repositor(y|ies)./, "已選擇 $1 倉庫。"],
        [/Installing and authorizing (.*) immediately grants these permissions on your account:/, "安裝與授權 $1 會立即在您的帳戶上授予以下權限："],
        [/can also request users' permission to the following resources. These permissions will be requested and authorized on an individual-user basis./, "還可以請求用戶對以下資源的許可。這些權限將在個人用戶的基礎上請求和授權。"],
        [/Authorize & Request on your organization (.*)/, "對於您的組織 $1 的授權與請求"], // 組織
        [/Request on your organization (.*)/, "對於您的組織 $1 的請求"], // 組織
        [/Install (.*)/, "安裝 $1"],
        [/Where do you want to install (.*)\?/, "您想把 $1 安裝在哪裡？"],
        [/(.*) is installed\. Click to configure.\?/, "$1 已安裝。點擊進行配置。"],
    ],
};
I18N.zh["apps"] = I18N.zh["marketplace"];

I18N.zh["orgs"] = { // 組織頁面
    "static": { // 靜態翻譯
        //>>>>>>>>>>>>>>>>>> 組織主頁/概況頁 <<<<<<<<<<<<<<<<<<<<<
            // [/doesn't have any pinned public repositories yet./, "還沒有任何置頂的公共倉庫。"],

            "followers": "關注者",
            "Sponsor": "贊助",

            "Send feedback": "發送反饋",

            "Pinned": "已置頂",
            "Popular repositories": "流行的倉庫",

            // 倉庫
                // 搜索, 篩選 & 排序工具欄
                "Find a repository…": "搜索倉庫…",
                // "Type": "類型", // 與全局衝突 使用 Selector 規則翻譯
                    // 下拉菜單
                    "Select type": "選擇類型",
                    "All": "全部",
                    "Public": "公共",
                    "Private": "私有",
                    "Sources": "源碼",
                    "Forks": "復刻",
                    "Archived": "存檔",
                    "Can be sponsored": "可贊助",
                    "Mirrors": "鏡像",
                    "Templates": "模板",
                "Language": "語言",
                    // 下拉菜單
                    "Select language": "選擇語言",
                    "All languages": "所有語言",
                "Sort": "排序",
                    // 下拉菜單
                    "Select order": "選擇排序",
                    "Last updated": "最近更新",
                    "Name": "倉庫名",
                    // "Recently starred": "最近星標",
                    // "Recently active": "最近活躍",
                    // "Most stars": "最多星標",
                    // "Unstar": "取消星標",
                "New": "新建",

                // 篩選結果
                "result for": "個結果在",
                "results for": "個結果在",
                    "public": "公共",
                    "private": "私有",
                    "source": "源碼",
                    "forked": "復刻",
                    "archived": "存檔",
                    "sponsorable": "可贊助",
                    "mirror": "鏡像",
                    "template": "模板",
                // "repositories matching": "倉庫中匹配了",
                // "result for repositories matching": "個結果在倉庫中匹配了",
                // "results for repositories matching": "個結果在倉庫中匹配了",
                // "repositories sorted by": "倉庫，排序按",
                // "written in": "，使用語言",
                // "results for repositories written in": "個結果在倉庫中使用語言",
                // "star matching": "個星標匹配", //?tab=stars
                // "stars matching": "個星標匹配", //?tab=stars
                // "star written in": "個星標使用語言", //?tab=stars
                // "stars written in": "個星標使用語言", //?tab=stars
                "repositories sorted by": "倉庫，排序按",
                "sorted by": "，排序按",
                    "last updated": "最近更新",
                    "name": "倉庫名",
                    "stars": "星標",
                "all": "所有",
                "repositories written in": "倉庫中使用語言",

                "Clear filter": "清除篩選",

                // [/([^ ]+) doesn’t have any repositories that match./, "$1 沒有任何匹配的倉庫"],
                "No repositories matched your search.": "沒有與您的搜索相匹配的倉庫。",

                // 項目 狀態詞
                "Updated": "更新於",
                "Forked from": "復刻自",


            // 右側欄
                "View as:": "瀏覽：",
                    "Switch profile context": "切換視角",
                    "Member": "成員",

                // 公共視角
                    "You are viewing the README and pinned repositories as a public user.": "您正在以公共用戶的身份查看自述文件和置頂倉庫。",

                // 組織成員視角
                    // [/You are viewing the README and pinned repositories as a member of the ([^ ]+) organization./, "您正在以 $1 組織成員的身份查看自述文件和置頂倉庫。"],

                "You can": "您可以",
                "pin repositories": "置頂倉庫",
                "visible to anyone.": "讓任何人都能看到。",
                "visible only to members of the organization.": "僅對組織成員可見。",

                "Get started with tasks": "開始任務",
                "that most successful organizations complete.": "大多數成功的組織都會完成。",
                "hide the tasks we've suggested": "隱藏我們建議的任務",
                "on this page and bring them back later.": "在此頁面上，以後再把它們帶回來。",

                "Top discussions this past month": "上個月的熱門討論",
                    "Nothing to see here yet!": "這裡還沒什麼可看的!",
                    "Discussions are for sharing announcements, creating conversation in your community, answering questions, and more.": "討論是為了分享公告，在您的社區創建對話，回答問題，以及更多。",
                    "Start a new discussion": "開始新的討論",
                    "View all discussions": "查看全部討論", // 組織討論

                // "People": "成員",
                    "This organization has no public members. You must be a member to see who’s a part of this organization.": "該組織沒有公共成員。您必須是成員才能查看誰是該組織的成員。",
                    "Invite someone": "邀請他人",
                        // 邀請對話框
                        // [/Invite a member to/, "邀請成員加入"],
                        "Search by username, full name or email address": "搜索用戶名，全名或郵箱地址：",
                        "Invite": "邀請",
                        "Invite a billing manager": "邀請一位賬單管理員",
                        "Authenticate your members with SAML single sign-on": "使用 SAML 單一登錄對您的成員進行身份驗證",
                        "Try risk-free for 30 days": "無風險試用 30 天",
                        "learn more about SAML": "了解更多關於 SAML 的信息",
                        ", or": "，或",
                        "dismiss this message": "忽略此消息",
                    "View all": "查看全部",

                "Top languages": "熱門語言",
                    "Loading…": "載入中…",
                "Most used topics": "最常用的話題",
                "Developer Program Member": "開發者計劃成員",
                "Report abuse": "舉報濫用",

            "Create new repository": "新建倉庫",
            "Import": "導入",

            "This organization has no repositories.": "該組織暫無倉庫。",
            "View all repositories": "查看所有倉庫",

            // 設置置頂
            "Edit pinned repositories": "設置置頂項目",
            "Select up to six public repositories you'd like to show to anyone.": "最多選擇 6 個您想向任何人展示的公共倉庫。",
            "Select up to six public, internal, or private repositories you'd like to show only to members of the organization.": "最多選擇 6 個您想僅向組織成員展示的公共、內部或私有倉庫。",
            "No repositories or gists found.": "沒有發現倉庫或 Gists。",
            // 頂部提醒
            "You’re not a member of any teams in this organization.": "您不是該組織中任何團隊的成員。",

            // 新組織 入門任務
            "We think you’re gonna like it here.": "我們認為您會喜歡這裡的。",
            "We’ve suggested some tasks here in your organization's overview to help you get started.": "我們在這裡就您的組織概況提出了一些任務，以幫助您開始工作。",
            "Invite your people": "邀請同伴",
                "Invite your first member": "邀請首位成員",
                    "Find people by their GitHub username or email address.": "通過 GitHub 用戶名或電子郵件地址找到他們。",
                "Customize members' permissions": "自定義成員權限",
                    "Set everyone’s base permissions for your code.": "為您的程式碼設置每個人的基本權限。",
            "Collaborative coding": "協助編碼",
                "See more about collaborative coding": "查看更多關於協作式編碼的信息",
                "Create a pull request": "創建拉取請求",
                    "Propose and collaborate on changes to a repository.": "就對倉庫的更改提出建議並進行協作。",
                "Create a branch protection rule": "創建分支保護規則",
                    "Enforce certain workflows for one or more branches.": "為一個或多個分支強制執行某些工作流程。",
            "Automation and CI/CD": "自動化和 CI/CD",
                "See more about automation and CI/CD": "查看更多關於自動化和 CI/CD 的信息",
                "Auto-assign new issues": "自動分配新議題",
                    "Try automatically assigning work with GitHub Actions.": "嘗試使用 GitHub Actions 自動分配工作。",
                "Run a continuous integration test": "運行持續集成測試",
                    "Validate your code using a CI workflow.": "使用 CI 工作流程驗證您的程式碼。",
            "Discover new GitHub features": "發現 GitHub 的新功能",
                "See all features": "查看所有功能",
                "Client apps": "客戶端應用",
                "Project management": "項目管理",
                "Team administration": "團隊管理",
                "Community": "社區",

            // 組織關注 指引框
                "You can now follow organizations": "您現在可以關注組織",
                "Organization activity like new discussions, sponsorships, and repositories will appear in": "組織活動，如新的討論、贊助和倉庫將出現在",
                "your dashboard feed": "您的儀表板的信息上",
                "OK, got it!": "好的，知道了！",

            "This organization has no public repositories.": "該組織沒有公共倉庫。",

    },
    "regexp": [ // 正則翻譯
        [/doesn't have any pinned public repositories yet./, "還沒有任何置頂的公共倉庫。"],
        [/You are viewing the README and pinned repositories as a member of the ([^ ]+) organization./, "您正在以 $1 組織成員的身份查看自述文件和置頂倉庫。"],
        [/Invite a member to/, "邀請成員加入"],
    ],
    "selector": [ // 元素篩選器規則
        ["#type-options > summary > span:nth-child(1)", "類型"], // 組織主頁 --> 倉庫標籤頁-->類型篩選器 Type
    ],
};

I18N.zh["orgs/repositories"] = I18N.zh["page-profile/repositories"];

I18N.zh["orgs/projects"] = I18N.zh["page-profile/projects"];

I18N.zh["orgs/packages"] = I18N.zh["page-profile/packages"];

I18N.zh["orgs/people"] = { // 組織 - 成員標籤卡
    "static": { // 靜態翻譯

        // 成員標籤頁 https://github.com/orgs/<orgs-name>/people
            // 左側欄
            "Organization permissions": "組織權限",
            "Members": "成員",
            "Outside collaborators": "外部協作者",
            "Pending collaborators": "待定協作者",
            "Invitations": "邀請",
            "Failed invitations": "失敗邀請",

            "Find a member…": "搜索成員…",

            "Export": "導出",
            "Invite member": "邀請成員",

            "You are the only owner of this organization! We recommend a minimum of two people within each organization have the owner role.": "您是該組織的唯一所有者！我們建議每個組織內至少有兩人擔任所有者角色。",
            "Dismiss": "忽略",

            "Filter by two-factor authentication": "按雙重身份驗證篩選",
            "Everyone": "所有人",
            "Enabled": "禁用",
            "Disabled": "啟用",
            "Required": "必須",

            "Membership": "成員",
            "Filter by membership": "按成員篩選",
            "Owners": "所有者",

            "Organization visibility": "組織可見性",
            "Your membership is visible to everyone and is displayed on your public profile.": "您的成員資格對所有人都是可見的，並顯示在您的個人資料上。",
            "Your membership is only visible to other members of this organization.": "您的成員資格只對本組織的其他成員可見。",

            "Owner": "所有者",
            "Owners have full access to teams, settings, and repositories.": "所有者擁有對團隊、設置和倉庫的完全訪問權限。",
            // [/0 teams/, ""],

            "Member settings": "成員設置",
            "Manage": "管理",
            "Convert to outside collaborator…": "轉為外部協作者…",
            "Remove from organization…": "從組織移除…",

            "This organization has no public members.": "該組織沒有公開的成員。",

            // 邀請對話框
                // [/Invite a member to/, "邀請成員加入"],
                "Search by username, full name or email address": "搜索用戶名、全名、或電子郵箱",
                "Invite": "邀請",
                "Invite a billing manager": "邀請一位賬單管理員",
                "Authenticate members with": "對成員進行身份驗證，使用",
                "SAML single sign-on": "SAML 單點登錄",
                "Try it in a 30-day trial of GitHub Enterprise.": "嘗試試用 30 天 GitHub 企業版",
                "Start a free trial": "開始免費試用",

            // 轉換為外部合作者 對話框
                // [/Convert ([^ ]+) to outside collaborator?/, "將 $1 轉換為外部合作者？"],
                "Converting members to outside collaborators will remove them from this organization and from all teams, and if they do not currently have access to any private repositories in the organization their seat will be reclaimed.": "將成員轉換為外部協作者會將把他們從本組織和所有團隊中移除，如果他們目前無法訪問組織中的任何私有倉庫，他們的席位將被收回。",
                "Their repository access will be preserved by making them collaborators on all repositories that their teams gave them access to. They will retain access to repositories that they were previously collaborators on, but all other access to this organization’s repositories will be lost.": "通過使他們成為其團隊授予他們訪問權限的所有倉庫的協作者，他們的倉庫訪問權限將得到保留。他們將保留對之前作為合作者的倉庫的訪問權限，但對該組織倉庫的所有其他訪問權限都將丟失。",
                "Convert to outside collaborator": "轉換為外部合作者",

                //頂部提示
                    "You can't remove yourself from the organization. Have another admin do this for you.": "您無法將自己從組織中刪除。請讓其他管理員代勞。",
            // 移除成員 對話框
                // [/Removing (\d+) members? from/, "移除 $1 名成員，從"],
                "The following members will be removed:": "以下成員將被移除：",
                "Remove members": "移除成員",

                // 頂部提醒
                    "You can't remove the last owner of this organization.": "您無法移除該組織的最後一位所有者。",
            // 頂部提醒
                "You publicized 1 membership.": "您公開了 1 名成員資格",
                "You concealed 1 membership.": "您隱藏了 1 名成員資格",

        // 成員管理 https://github.com/orgs/<orgs-name>/people/<user-name>

        // 成員權限詳情 /orgs/<orgs-name>/people/<user-name>/repositories/<orgs-name>/<repo-name>

        // 外部協作者 https://github.com/orgs/<orgs-name>/outside-collaborators
            "Find a collaborator…": "尋找協作者…",
            "Select all": "全選",
            "No one outside of the organization has access to its repositories.": "組織外部的任何人都無法訪問其倉庫。",

        // 待定協作者 https://github.com/orgs/<orgs-name>/pending_collaborators
            "Find a pending collaborator…": "搜索待定協作者…",
            "There aren't any pending collaborators.": "暫無任何待定的協作者",

        // 待定邀請 https://github.com/orgs/<orgs-name>/people/pending_invitations
            "Find an invitation…": "搜索邀請…",

            "Role": "角色",

            "Source": "來源",
            "Filter by invitation source": "按邀請來源篩選",
            "All sources": "所有來源",

            // [/(\d+) invitations?/, "邀請"],

            "Sort": "排序",
            "Sort Order": "排序方式",
            "Newest": "最新的",
            "Oldest": "最早的",

            "No matching invitations.": "暫無匹配的邀請。",

        // 失敗邀請 https://github.com/orgs/<orgs-name>/people/failed_invitations
            // [/(\d+) Failed invitations?/, "個失敗邀請"],
            "No failed invitations.": "暫無失敗邀請。",

    },
    "regexp": [ // 正則翻譯
        [/(\d+) teams?/, "$1 團隊"],
        [/(\d+) invitations?/, "$1 邀請"],
        [/(\d+) Failed invitations?/, "$1 失敗邀請"],
        [/Invite a member to/, "邀請成員加入"],
        [/Convert ([^ ]+) to outside collaborator?/, "將 $1 轉換為外部合作者？"],
        [/Removing (\d+) members? from/, "移除 $1 名成員，從"],
   ],
};
I18N.zh["orgs/outside-collaborators"] = I18N.zh["orgs/people"];
I18N.zh["orgs/pending_collaborators"] = I18N.zh["orgs/people"];


I18N.zh["orgs/teams"] = { // 組織 - 團隊標籤卡
    "static": { // 靜態翻譯

        // 團隊標籤卡 https://github.com/orgs/<orgs-name>/teams
            "Seamless communication with teams": "與團隊的無縫溝通",
            "Teams are a great way for groups of people to communicate and work on code together. Take a look at why they’re great.": "團隊是一群人在一起交流和編寫程式碼的好方法。看看為什麼他們很棒。",
            "Flexible repository access": "靈活的倉庫訪問",
                "You can add repositories to your teams with more flexible levels of access (Admin, Write, Read).": "您可以將倉庫添加到您的團隊中，並有更靈活的訪問級別（管理員、寫入、讀取）。",
            "Request to join teams": "申請加入團隊",
                "Members can quickly request to join any team. An owner or team maintainer can approve the request.": "成員可以快速申請加入任何團隊。一個所有者或團隊維護者可以批准該請求。",
            "Team mentions": "團隊提及",
                "Use team @mentions (ex.": "使用團隊 @提及（例如",
                "for the entire team) in any comment, issue, or pull request.": "對於整個團隊）在任何評論、議題或拉取請求中。",
                "New team": "新建團隊",

        // 創建團隊 /orgs/<org-login>/new-team
            "Create new team": "新建團隊",
            "Team name": "團隊名稱",
            "You’ll use this name to mention this team in conversations.": "您將使用此名稱在對話中提及此團隊。",
            "Description": "描述",
            "What is this team all about?": "這個團隊是什麼？",
            "Parent team": "父團隊",
                "There are no teams that can be selected.": "沒有可以選擇的團隊。",
            "Team visibility": "團隊可見性",
                "Visible": "可見",
                    "Recommended": "推薦",
                    "A visible team can be seen and": "可見的團隊可以被看到並",
                    "@mentioned": "@提及",
                    "by every member of this organization.": "本組織的每一位成員。",
                "Secret": "私密",
                    "A secret team can only be seen by its members and may not be nested.": "私密團隊只能被其成員看到，而且不能被嵌套。",
                "Team notifications": "團隊通知",
                    "Enabled": "啟用",
                        "Everyone will be notified when the team is @mentioned.": "當團隊被 @提及 時，每個人都會收到通知。",
                    "Disabled": "禁用",
                        "No one will receive notifications.": "沒有人會收到通知。",
            "Create team": "創建團隊",

    },
    "regexp": [ // 正則翻譯
    ],
};
I18N.zh["orgs/new-team"]= I18N.zh["orgs/teams"]

I18N.zh["orgs/domain/new"] = { // 組織 - 添加域名
    "static": { // 靜態翻譯
        "Verified & approved domains": "經驗證和批准的域名",
        "Add a domain": "添加域名",
        "What domain would you like to add?": "您想添加什麼域名？",
        "Add domain": "添加域名",
        "Domain name has already been added": "域名已添加",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/profile"] = { // 組織設置 - 組織資料
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 組織資料 /organizations/<org-login>/settings/profile
            "Most organization settings are hidden for an archived organization. This organization must be unarchived to change them.": "對於已存檔的組織，組織大多數設置都是隱藏的。必須取消對該組織的歸檔才能更改它們。",

            "Organization profile": "基本資料",
                "Profile picture": "我的頭像",
                    "Upload new picture": "上傳新頭像",
                    "Note: To apply for a publisher verification your organization's profile picture should not be irrelevant, abusive or vulgar. It should not be a default image provided by GitHub.": "注意：需要申請發布者驗證，您的組織的個人資料圖片不應該是不相關的、辱罵性的或粗俗的。它不應該是由 GitHub 提供的默認圖片。",
                "Organization display name": "組織顯示名稱",
                "Email (will be public)": "公開電子郵箱",
                "Description": "描述",
                "URL": "網站",
                "Social accounts": "社交賬戶",
                "Link to social profile": "鏈接到社交賬戶",
                "Location": "位置",
                    "Select a location": "選擇位置",
                    "Find a location...": "搜索位置...",
                    "Clear Location": "清除位置",
                "Billing email": "賬單電子郵箱",
                "(Private)": "（私人）",
                    "Add more billing email recipients in the": "添加更多的賬單郵件收件人在",
                    "billing page": "賬單頁面",
                "Gravatar email": "Gravatar 電子郵箱",
                "Sponsors update email": "贊助者更新電子郵箱",
                    "The developers and organizations that your organization sponsors can send you updates to this email.": "您的組織贊助的開發人員和組織可以向您發送此電子郵箱的更新。",
                "Update profile": "更新資料",
                "Profile updated successfully": "資料更新成功。",

            "Link Patreon account": "關聯 Patreon 帳戶",
                "Connect a Patreon account for": "關聯",
                "to sponsor maintainers with. Get recognition on GitHub for sponsorships made on Patreon when the sponsored person has linked Patreon and GitHub, too, and has a public GitHub Sponsors profile.": "的 Patreon 帳戶，以便贊助維護者。當被贊助者也關聯 Patreon 和 GitHub 帳戶時，在 Patreon 上獲得的贊助也會顯示在 GitHub 上，並顯示 GitHub 贊助者的公開個人資料。",
                "Connect with Patreon": "關聯 Patreon 帳戶",

            "GitHub Developer Program": "GitHub 開發者計劃",
                "Building an application, service, or tool that integrates with GitHub?": "構建應用、服務或工具，集成到 GitHub 嗎？",
                "Join the GitHub Developer Program": "加入 GitHub 開發者計劃",
                ", or read more about it at our": "，或了解更多信息在我們的",
                "Developer site": "開發者站點",
                "Check out the Developer site": "查看開發者站點，",
                "for guides, our API reference, and other resources for building applications that integrate with GitHub. Make sure your contact information is up-to-date below. Thanks for being a member!": "以獲取指南、我們的 API 參考和其他用於構建與 GitHub 集成的應用的資源。請確保您的聯繫信息是最新的。感謝您成為我們的成員！",

            "Terms of Service": "服務條款",
                "Standard": "標準",
                    "Best for individuals wanting the freedom to move data and remain independent of a corporation.": "最適合希望自由移動數據並保持獨立於公司的個人。",
                    "Read the Standard Terms of Service": "閱讀 “標準服務條款”",
                "Corporate": "企業",
                    "Best for businesses that need to protect their intellectual property and secure visibility into their data.": "最適合需要保護知識產權並確保數據可見性的企業。",
                    "Read the GitHub customer agreement": "請閱讀 GitHub 用戶協議",
                    "Sign GitHub customer terms": "簽署 GitHub 用戶條款",

            "Danger zone": "危險區",
                "Rename organization": "重命名組織",
                    "Renaming your organization can have": "重命名您的組織可能會有",
                    "unintended side effects": "意想不到的副作用",
                    "This organization cannot be renamed because it is archived.": "該組織無法重命名，因為它已存檔。",
                "Really rename your organization?": "確定要重命名您的組織？",
                "Unexpected bad things will happen if you don’t read this!": "請仔細閱讀以下提示信息！！！",
                "We": "我們",
                "will not": "不會",
                "will": "會",
                "create redirects for your repositories (web and git access).": "為您的倉庫設置重定向（ web 和 git 訪問）。",
                "You will need to update your local repositories to point to the new location.": "您將需要更新您的本地倉庫，以指向新的位置。",
                "Renaming may take a few minutes to complete.": "重命名可能需要幾分鐘的時間來完成。",
                "I understand, let’s rename my organization": "我明白了，依然重命名我的組織",

                "Rename your organization": "重命名組織",
                "Change organization’s name": "更改組織名",
                // 頂部提醒
                    "Organization name may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen": "組織名稱只能包含字母數字字符或單連字符，不能以連字符開始或結束。",
                    "Organization name is not available": "組織名稱不可用",

                "Archive this organization": "存檔組織",
                    "Mark this organization and all its repositories as archived and read-only.": "將此組織及其所有倉庫標記為已存檔和只讀。",
                    "Please provide": "請提供",
                    "feedback": "反饋",
                    "on this feature.": "關於此功能。",

                    "Archive organization": "存檔組織",
                        "This organization will be archived.": "該組織將被存檔。",
                        "Modifying settings will be limited and creating new repositories will be blocked.": "修改設置將受到限制，並且創建新倉庫將被阻止。",

                        "All repositories will be": "所有倉庫都將被",
                        "archived": "存檔",
                        "and be read-only.": "並設為只讀。",
                        "Before you archive, please consider:": "在存檔之前，請考慮：",
                            "Updating any organization settings": "更新任何組織設置",
                            "Making a note in your": "請標記在您的",
                            "organization README": "組織 README",
                        "Please type": "請輸入",
                        "to confirm.": "進行確定。",
                        "I understand the consequences, archive this organization": "我明白後果，依然存檔該組織",

                        // 頂部提醒
                        // [/Your organization ([^ ]+) is being archived./, "您的組織 $1 已歸檔。"],

                "Unarchive this organization": "解鎖存檔組織",
                    "Mark this organization as unarchived and read-write.": "將此組織標記為未存檔且可讀寫。",

                    "Unarchive organization": "解除組織存檔",
                    "This organization will be unarchived.": "該組織將解除存檔。",
                    "Modifying settings will be possible and creating new repositories will be unblocked.": "可以修改設置，創建新倉庫也將不再受限。",

                    "Repositories will be remain": "倉庫將保持",
                    "and need to be unarchived separately.": "，並需要單獨解除存檔。",
                    "I understand the consequences, unarchive this organization": "我明白後果，依然解除該組織存檔",

                        // 頂部提醒
                        // [/Your organization ([^ ]+) has been unarchived./, "您的組織 $1 已解除歸檔。"],

                "Delete this organization": "刪除組織",
                    "Once deleted, it will be gone forever. Please be certain.": "您一旦刪除，將再也無法恢復。請確認！",

                   "Are you sure you want to delete this?": "您確定要刪除嗎？",
                   "Deleting the": "刪除",
                   "organization will delete all of its repositories. The": "組織，將會刪除其所有倉庫。",
                   "username will be unavailable for 90 days.": "用戶名將在 90 天內不可用。",
                   "Before proceeding, please be sure to review the": "在繼續之前，請務必查看",
                   "regarding account deletion.": "關於帳戶刪除。",
                   "Enter this organization’s name to confirm": "請輸入組織的名稱，進行確認",
                   "Cancel plan and delete the organization": "取消計劃並刪除此組織",

    },
    "regexp": [ // 正則翻譯
        [/Your organization ([^ ]+) is being archived./, "您的組織 $1 已歸檔。"],
        [/Your organization ([^ ]+) has been unarchived./, "您的組織 $1 已解除歸檔。"],
    ],
};

I18N.zh["orgs/settings/roles"] = { // 組織設置 - 倉庫角色
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 倉庫角色 /organizations/<org-login>/settings/roles
            "Roles are used to grant access and permissions for teams and members. In addition to the available pre-defined roles, you can create up to 0 custom roles to fit your needs.": "角色是用來為團隊和成員授予訪問和權限的。除了可用的預定義角色外，您可以創建多達 0 個自定義角色以滿足您的需求。",
                "Learn more about custom repository roles": "了解更多關於自定義倉庫角色的信息",
            "Pre-defined roles": "預定義角色",
                "You can": "您可",
                "set the base role": "設置基礎角色",
                "for this organization from one of these roles.": "從該組織的這些角色中設置",
                    "Read": "只讀",
                        "Read and clone repositories. Open and comment on issues and pull requests.": "讀取和克隆倉庫。打開並評論問題和拉取請求。",
                    "Triage": "分級",
                        "Read permissions plus manage issues and pull requests.": "讀取權限外加管理議題和拉取請求的權限。",
                    "Write": "可寫",
                        "Triage permissions plus read, clone and push to repositories.": "分級權限外加讀取、克隆和推送到倉庫。",
                    "Maintain": "維護",
                        "Write permissions plus manage issues, pull requests and some repository settings.": "可寫權限外加管理議題、拉取請求和一些倉庫設置。",
                    "Admin": "管理員",
                        "Full access to repositories including sensitive and destructive actions.": "對倉庫的完全訪問權限，包括敏感和破壞性操作。",
                        "Modify Admin Role": "修改管理角色",

            "Custom roles": "自定義角色",
                "Create a role": "創建角色",
                "Create custom roles with GitHub Enterprise": "使用 GitHub 企業版創建自定義角色",
                    "Enterprise accounts offer organizations more granular control over permissions by allowing you to configure up to three custom repository roles. This enables greater control over who and how your users access code and data in your organization.": "企業賬戶允許配置最多三個自定義倉庫角色，從而為企業提供更細粒度的權限控制。這樣就能更好地控制組織內用戶訪問程式碼和數據。",
                "Try GitHub Enterprise": "試用 GitHub 企業版",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/member_privileges"] = { // 組織設置 - 成員權限
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 成員權限 /organizations/<org-login>/settings/member_privileges
            "Member repository permissions": "成員倉庫權限",
                "Base permissions": "基本權限",
                    "Base permissions to the organization’s repositories apply to all members and excludes outside collaborators. Since organization members can have permissions from multiple sources, members and collaborators who have been granted a higher level of access than the base permissions will retain their higher permission privileges.": "組織倉庫的基本權限適用於所有成員，不包括外部協作者。由於組織成員可以擁有多個來源的權限，已經被授予比基本權限更高的訪問級別的成員和協作者將保留他們更高的權限。",

                    "Organization member permissions": "組織成員的權限",
                        "No permission": "無權限",
                            "Members will only be able to clone and pull public repositories. To give a member additional access, you’ll need to add them to teams or make them collaborators on individual repositories.": "成員只能克隆和拉取公共倉庫。要為成員提供額外的訪問權限，您需要將他們添加到團隊中，或者讓他們成為單個倉庫的協作者。",
                            // 對話框
                                "Change base permission to \"No permission\"": "將基本權限更改為 “無權限”",
                                "You are about to change the base repository permission for this organization.": "您即將更改此組織倉庫的基本權限。",
                                // [/This may change the permission that the organization’s (\d+) members? has on its (\d+) repositories?./, "這可能會更改組織的 $1 個成員對其 $2 個倉庫的權限。"],
                        "Read": "只讀",
                            "Members will be able to clone and pull all repositories.": "成員將能夠克隆和拉取所有倉庫。",
                            // 對話框
                                "Change base permission to \"Read\"": "將基本權限更改為 “只讀”",
                        "Write": "可寫",
                            "Members will be able to clone, pull, and push all repositories.": "成員將能夠克隆、拉取和推送所有倉庫。",
                            // 對話框
                                "Change base permission to \"Write\"": "將基本權限更改為 “可寫”",
                        "Admin": "管理員",
                            "Members will be able to clone, pull, push, and add new collaborators to all repositories.": "成員將能夠克隆、拉取、推送和向所有倉庫添加新的協作者。",
                            // 對話框
                                "Change base permission to \"Admin\"": "將基本權限更改為 “管理員”",
                        // 頂部提醒
                            "Base repository permission removed.": "基本倉庫權限已被刪除。",
                            "Base repository permission updated to \"Read\".": "基本倉庫權限已更新為 “只讀” 。",
                            "Base repository permission updated to \"Write\".": "基本倉庫權限已更新為 “可寫” 。",
                            "Base repository permission updated to \"Admin\".": "基本倉庫權限已更新為 “管理員” 。",
                        "Update in progress": "正在更新中",
                        ". Refresh to see if it’s done.": "。刷新看看是否完成。",

                "Repository creation": "倉庫創建",
                    "Members will be able to create only selected repository types. Outside collaborators can never create repositories.": "成員將只能創建選定類型的倉庫。外部協作者永遠不能創建倉庫。",
                    "Public": "公共",
                        "Members will be able to create public repositories, visible to anyone.": "成員將能夠創建任何人都可見的公共倉庫。",
                        "Why is this option disabled?": "為什麼該選項被禁用？",
                    "Private": "私有",
                        "Members will be able to create private repositories, visible to organization members with permission.": "成員將能夠創建私有倉庫，對有權限的組織成員可見。",
                    // 頂部提醒
                        "Members can no longer create public or private repositories.": "成員不能再創建公共或私有倉庫。",
                        "Members can now create public repositories.": "成員現在可以創建公共倉庫。",
                        "Members can now create public and private repositories.": "成員現在可以創建公共和私有倉庫。",

                "Repository forking": "倉庫復刻",
                    "Allow forking of private repositories": "允許復刻私有倉庫",
                        "If enabled, forking is allowed on private and public repositories. If disabled, forking is only allowed on public repositories. This setting is also configurable per-repository.": "如果啟用，則私有和公共倉庫都允許復刻。如果禁用，則只允許復刻公共倉庫。此設置也可以在每個倉庫中進行配置。",
                    // 頂部提醒
                        "Repository forking setting updated!": "倉庫復刻設置已經更新！",
                        "Repository forking setting not updated. Please try again.": "倉庫復刻設置不能更新。請重試。",

                "Repository discussions": "倉庫討論",
                    "Allow users with read access to create discussions": "允許具有讀取權限的用戶創建討論",
                        // [/If enabled, all users with read access can create and comment on discussions in ([^ ]+)’s repositories./, "如果啟用，所有具有讀取權限的用戶都可以在 $1 的倉庫中創建和評論討論。"],
                        "If disabled, discussion creation is limited to users with at least triage permission. Users with read access can still comment on discussions.": "如果禁用，討論的創建僅限於至少具有分級權限的用戶。具有讀取權限的用戶仍然可以對討論發表評論。",
                    // 頂部提醒
                        "Users with read access to repositories can create new discussions.": "對倉庫具有讀取權限的用戶可以創建新的討論。",
                        "Only users with at least triage access to repositories can create new discussions.": "只有至少對倉庫有分級權限的用戶才能創建新的討論。",

                "Projects base permissions": "項目基本權限",
                    "Projects created by members will default to the elected role below.": "成員創建的項目將默認為下面選定的角色。",

                    "No access": "無法訪問",
                        "Members will only be able to see projects that are made public. To give an organization member additional access, they can be added as part of a team or as a collaborator.": "成員只能看到公開項目。要賦予組織成員更多訪問權限，可以將其添加為團隊成員或協作者。",
                        // 對話框
                            "Change base permissions to \"No access\"": "將基本權限改為 “無法訪問”",
                                "You are about to change the base projects permission for this organization.": "您將更改該組織的基本項目權限",
                                "This won't affect any existing projects.": "這不會影響任何現有項目",
                    // 只讀
                        "Members can see projects.": "成員可以查看項目",
                        // 對話框
                            "Change base permissions to \"Read\"": "將基本權限改為 “只讀”",
                    // 可寫
                        "Members can see and make changes to projects.": "成員可以查看和修改項目",
                        // 對話框
                            "Change base permissions to \"Write\"": "將基本權限改為 “可寫”",
                    // 管理員
                        "Members can see, make changes to, and add new collaborators to projects.": "成員可以查看和修改項目，並可為項目添加新的協助者。",
                        // 對話框
                            "You are about to change the base projects permission for this organization.": "您將更改該組織的基本項目權限",
                    // 頂部提醒
                        "Base permission updated to \"None\" for projects.": "項目的基本權限已更新為 “無”。",
                        "Base permission updated to \"Read\" for projects.": "項目的基本權限已更新為 “只讀”。",
                        "Base permission updated to \"Write\" for projects.": "項目的基本權限已更新為 “可寫”。",
                        "Base permission updated to \"Admin\" for projects.": "項目的基本權限已更新為 “管理員”。",

                "Pages creation": "頁面創建",
                    "Members will be able to publish sites with only the selected access controls.": "成員將能夠發布僅只有選定的訪問控制的站點。",
                    // "Public": "公共",
                        "Members will be able to create public sites, visible to anyone.": "成員將能夠創建任何人都可見的公共站點。",
                    // "Private": "私有",
                        "Members will be able to create private sites, visible to anyone with permission.": "成員將能夠創建私有站點，對任何有權限的人可見。",
                    // 頂部提醒
                        "Projects settings updated for this organization.": "該組織的項目設置已經更新。",

                "Integration access requests": "集成訪問請求",
                    "Allow integration requests from outside collaborators": "允許來自外部協作者的集成請求",
                        "Outside collaborators will be able to request access for GitHub or OAuth apps to access this organization and its resources.": "外部協作者將能夠為 GitHub 或 OAuth 應用申請訪問該組織及其資源的權限。",
                        // 頂部提醒
                            "Outside collaborators can no longer request third party access.": "外部協作者無法再請求第三方訪問。",
                            "Outside collaborators can now request third party access.": "外部協作者現在可以請求第三方訪問。",

                "Admin repository permissions": "管理員倉庫權限",
                    "Repository visibility change": "倉庫可見性更改",
                        "Allow members to change repository visibilities for this organization": "允許成員更改此組織的倉庫可見性",
                            "If enabled, members with admin permissions for the repository will be able to change its visibility. If disabled, only organization owners can change repository visibilities.": "如果啟用，對倉庫有管理權限的成員將能夠更改其可見性。如果禁用，只有組織所有者可以更改倉庫的可見性。",
                        // 頂部提醒
                            "Members can now change repository visibility.": "成員現在可以更改倉庫可見性。",
                            "Members can no longer change repository visibility.": "成員不能再更改倉庫可見性。",

                    "Repository deletion and transfer": "倉庫的刪除和轉讓",
                        "Allow members to delete or transfer repositories for this organization": "允許成員刪除或轉讓此組織的倉庫",
                            "If enabled, members with admin permissions for the repository will be able to delete or transfer": "如果啟用，對倉庫有管理權限的成員將能夠刪除或轉讓",
                            "public": "公共",
                            "private": "私有",
                            "repositories. If disabled, only organization owners can delete or transfer repositories.": "倉庫。如果禁用，只有組織所有者可以刪除或轉讓倉庫。",
                        // 頂部提醒
                            "Members can now delete or transfer repositories.": "成員現在可以刪除或轉讓倉庫。",
                            "Members can no longer delete or transfer repositories.": "成員不能再刪除或轉讓倉庫。",

                    "Issue deletion": "議題刪除",
                        "Allow repository administrators to delete issues for this organization": "允許倉庫管理員刪除此組織的議題",
                            "If enabled, members with admin permissions for the repository will be able to delete issues. If disabled, only organization owners can delete issues.": "如果啟用，對倉庫有管理權限的成員將能夠刪除議題。如果禁用，只有組織所有者可以刪除議題。",
                            "Learn more about allowing people to delete issues in your organisation": "了解更多關於允許成員刪除組織內議題的信息",
                        // 頂部提醒
                            "Members can now delete issues.": "成員現在可以刪除議題。",
                            "Members can no longer delete issues.": "成員不能再刪除議題。",

                "Member team permissions": "成員團隊權限",
                    "Team creation rules": "團隊創建規則",
                        "Allow members to create teams": "允許成員創建團隊",
                            "If enabled, any member of the organization will be able to create new teams. If disabled, only organization owners can create new teams.": "如果啟用，組織的任何成員將能夠創建新的團隊。如果禁用，只有組織所有者可以創建新的團隊。",
                    // 頂部提醒
                        "Members can now create teams.": "成員現在可以創建團隊。",
                        "Members can no longer create teams.": "成員不能再創建團隊。",
    },
    "regexp": [ // 正則翻譯
        [/This may change the permission that the organization’s (\d+) members? has on its (\d+) repositories?./, "這可能會更改組織的 $1 個成員對其 $2 個倉庫的權限。"], // 組織 基本權限更改
        [/If enabled, all users with read access can create and comment on discussions in ([^ ]+)’s repositories./, "如果啟用，所有具有讀取權限的用戶都可以在 $1 的倉庫中創建和評論討論。"],
    ],
};

I18N.zh["orgs/settings/teams"] = { // 組織設置 - 團隊討論
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 團隊討論 /organizations/<org-login>/settings/teams
            "Team discussions provide a place for a team to have conversations that span across projects or repositories and that don’t belong in an issue or a pull request.": "團隊討論為團隊提供了一個進行跨項目或倉庫，且不屬於議題或拉取請求的對話的場所。",
            "Enable team discussions for this organization": "為此組織啟用團隊討論",
                "This allows members to start discussions in any team in the": "這允許成員在任何團隊中開始討論，在",
            "organization.": "組織中。",

            "Looking for": "尋找",
            "Organization Discussions": "組織討論",
            "? Go to": "？轉到",
            "Organization Discussions settings.": "組織討論設置。",

            // 頂部提醒
                "Team discussions enabled for this organization.": "該組織啟用了團隊討論。",
                "Team discussions disabled for this organization.": "該組織禁用了團隊討論。",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/import-export"] = { // 組織設置 - 導入/導出
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // Import/Export 導入/導出 - 占位帳戶 /organizations/<org-login>/settings/import-export
            "Mannequins": "占位帳戶",
            "Search mannequins by login or email...": "通過登錄名或電子郵箱地址搜索占位帳戶...",
            "There are no mannequins in this organization": "該組織尚無占位帳戶",
            "Mannequins represent authors of imported contributions. They do not have profile pages and cannot sign in. Their contributions can be reattributed to other members of your organization.": "占位帳戶代表導入貢獻的作者。他們沒有個人資料頁，也不能登錄。他們的貢獻可以重新歸屬於您組織的其他成員。",

        // Import/Export 導入/導出 - 歸屬邀請 /organizations/<org-login>/settings/import-export/attribution-invitations
            "Attribution Invitations": "歸屬邀請",
            "Below are the mannequin reattribution invitations that have been sent within this organization. If the state is \"invited,\" then the user has not yet replied; if it is \"completed,\" then the user has accepted and their contributions have been reattributed, and if it is \"rejected,\" then the user opted not to be credited for that mannequin's contributions.": "以下是該組織內已發送的占位帳戶重新歸屬的邀請。如果狀態是 “已邀請”，則用戶尚未回覆；如果是 “已完成”，那麼用戶已經接受並且他們的貢獻已經被重新歸屬；如果是 “已拒絕”，那麼用戶選擇不記入該占位帳戶的貢獻。",
            "No attribution invitations have been sent": "尚未發出歸屬邀請",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/blocked_users"] = { // 組織設置 - 黑名單
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // Blocked users 黑名單 /organizations/<org-login>/settings/blocked_users
            "Block a user": "拉黑用戶",
            "Blocking a user prevents the following on all your repositories:": "拉黑用戶可以防止所有倉庫中的以下操作：",
            "opening or commenting on issues or pull requests": "打開或評論議題或拉取請求",
            "starring, forking, or watching": "加星標、復刻、關注",
            "adding or editing wiki pages": "添加或編輯 Wiki 頁面",

            "Search by username, full name or email address": "搜索用戶名、全名、或電子郵箱",
                "Learn more about blocking a user": "了解更多關於拉黑用戶的信息",
            "Block options": "拉黑選項",
                "For 1 day": "1 天",
                "For 3 days": "3 天",
                "For 7 days": "7 天",
                "For 30 days": "30 天",
                "Until I unblock them": "直到取消拉黑",
            "Block user": "拉黑用戶",
            "You have not blocked any users.": "您還沒有拉黑任何用戶。",
            "Unblock": "取消拉黑",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/interaction_limits"] = { // 組織設置 - 互動限制
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // Interaction limits 互動限制 /organizations/<org-login>/settings/interaction_limits
            "Temporary interaction limits": "臨時互動限制",
            "Temporarily restrict which external users can interact with your repositories (comment, open issues, or create pull requests) for a configurable period of time. Users who are members of this organization will not be affected by these limits.": "在配置的時間段內，可臨時限制哪些外部用戶與您的倉庫互動（評論、打開議題或創建拉取請求）。作為該組織成員的用戶將不受這些限制的影響。",
            "This may be used to force a \"cool-down\" period during heated discussions or prevent unwanted interactions.": "可用於在激烈討論期間，強制進入 “冷靜” 期或防止不必要的互動。",
            "Interaction limits may already exist in your organization's": "互動限制可能已經存在於您的組織",
            "public repositories": "公開倉庫",
            ". Any changes here will override those limits.": " 的設置中。此處的全局設置將覆蓋那些倉庫的局部設置。",
            "Limit to existing users": "僅限現有用戶",
                "Users that have recently created their account will be unable to interact with this organization's repositories.": "最近創建帳戶的用戶將無法與您組織的倉庫互動。",
            "Limit to prior contributors": "僅限于先前的貢獻者",
                "Users that have not previously committed to the default branch of a repository in this organization will be unable to interact with that repository.": "以前從未提交到您組織某個倉庫默認分支的用戶將無法與該倉庫互動。",
            "Limit to repository collaborators": "僅限倉庫協作者",
                "Users that are not collaborators of a repository in this organization will not be able to interact with that repository.": "不是您組織某個倉庫的協作者將無法與該倉庫互動。",
            "New users": "新用戶",
            "Users": "用戶",
            "Contributors": "貢獻者",
            "Collaborators": "協作者",
            "Organization members": "組織成員",
            // 交互限制時間 下拉菜單
            "Enable interaction limits for:": "啟用交互限制：",
            "24 hours": "24 小時",
            "3 days": "3 天",
            "1 week": "1 周",
            "1 month": "1 個月",
            "6 months": "6 個月",
            // 頂部提醒
            "User interaction limit settings saved.": "用戶交互限制設置已保存。",


    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/code_review_limits"] = { // 組織設置 - 程式碼審查限制
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 程式碼審查限制 /organizations/<org-login>/settings/code_review_limits
            "Restrict users who are permitted to approve or request changes on pull requests in public repositories within this organization.": "限制該組織內允許批准或請求更改公共倉庫中拉取請求的用戶。",
            "Code review limits may already be specified by individual repositories. Any changes here will override those limits until unset.": "程式碼審查限制可能已經由各個倉庫指定。此處的任何更改都將覆蓋這些限制，直至取消設置。",
            "Code review limits are currently managed individually for all repositories. Enable limits to permit only users who have explicitly been granted access to each repository to submit reviews that \"approve\" or \"request changes\". Remove limits to allow all users to submit pull request reviews. All users able to submit comment pull request reviews will continue to be able to do so.": "目前，所有倉庫程式碼審查限制都是單獨管理的。啟用限制，只允許明確授予每個倉庫訪問權的用戶提交 “批准” 或 “請求更改” 的審查。刪除限制，允許所有用戶提交拉取請求審查。所有能夠提交評論拉取請求審查的用戶將繼續能夠這樣做。",
            "Limit reviews on all repositories": "限制對所有倉庫的審查",
            "Remove review limits from all repositories": "取消對所有倉庫的審查限制",


    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/moderators"] = { // 組織設置 - 版主
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // Moderators 版主 /organizations/<org-login>/settings/moderators
            "You can add organization members or teams as moderators for your organization. Moderators can block and unblock users from the organization, minimize comments, and manage interaction limits for all public organization repositories.": "您可以將組織成員或團隊添加為組織的主版主。版主可以阻止和解除對該組織用戶的阻止、最小化評論、並管理所有公共組織倉庫的交互限制。",

            "You may add up to": "您最多可以添加",
            "members or teams as moderators.": "成員或團隊作為版主。",
            "Add a member or team": "添加成員或團隊",
            "You don't have any moderators for this organization.": "該組織尚無任何版主",

            // [/Successfully added (@[^\n]+) as a moderator/, "已成功將 $1 添加為版主"],
            // [/Successfully removed (@[^\n]+) as a moderator/, "已成功將 $1 的版主身份移除"],
            "Remove moderator": "移除版主",


    },
    "regexp": [ // 正則翻譯
            [/Successfully added (@[^\n]+) as a moderator/, "已成功將 $1 添加為版主"],
            [/Successfully removed (@[^\n]+) as a moderator/, "已成功將 $1 的版主身份移除"],
    ],
};

I18N.zh["orgs/settings/repository-defaults"] = { // 組織設置 - 倉庫 / 默認值
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 倉庫默認分支 /organizations/<org-login>/settings/repository-defaults
            "Repository default branch": "倉庫默認分支",
                "Choose the default branch for new repositories in this organization. You might want to change the default name due to different workflows, or because your integrations still require “master” as the default branch name. You can always change the default branch name on individual repositories.": "為該組織中的新倉庫選擇默認的分支。由於工作流程的不同，或者由於您的集成仍然需要 “master” 作為默認分支名，您可能想改變默認名稱。您可以隨時改變單個倉庫的默認分支名稱。",
                "Learn more about default branches.": "了解更多關於默認分支的信息。",
            // "Update": "更新",
            "Updating…": "更新中…",
            // 頂部提醒
                // [/New repositories created in ([^ ]+) will use main as their default branch./, "在 $1 中創建的新倉庫將使用 main 作為其默認分支。"],

            "Commit signoff": "提交簽署",
                "Choose whether repositories will require contributors to sign off on commits they make through GitHub's web interface. Signing off is a way for contributors to affirm that their commit complies with the repository's terms, commonly the": "選擇倉庫是否要求貢獻者簽署通過 GitHub 的 Web 界面所做的提交。簽署是貢獻者確認他們的提交符合倉庫條款的一種方式，通常是",
                "Developer Certificate of Origin (DCO)": "開發者來源證書（DCO）",
                "Learn more about signing off on commits": "了解更多關於簽署提交的信息",
                "All repositories": "所有倉庫",
                    "Require signoff on web-based commits for all repositories in this organization": "要求對該組織中所有倉庫的基於 Web 的提交進行簽署",
                "No policy": "無政策",
                    "Each repository chooses whether to require signoff on web-based commits": "每個倉庫選擇是否要求對基於 Web 的提交進行簽署",

                // 頂部提醒
                    "Commit signoff settings were updated.": "提交簽署設置已更新。",

            "Repository labels": "倉庫標籤",
                "Set the labels that will be included when a new repository is created in this organization.": "設置在此組織中創建新的倉庫時將包含的標籤。",
                "Learn more about managing default labels for your organization.": "了解更多關於為您的組織管理默認標籤的信息。",
            "New label": "新建標籤",
                "Label preview": "標籤預覽",
                "Label name": "標籤名",
                "Description": "描述",
                "Description (optional)": "描述（可選）",
                "Color": "顏色",
                    "Get a new color": "獲得新顏色",
                    "Choose from default colors:": "從默認顏色中選擇：",
                "Create label": "創建標籤",
                "Saving...": "保存中...",
                "Save changes": "保存更改",
            // 刪除提醒
            "Are you sure? Deleting a label will remove as a default, and no future repositories will receive this label when created.": "您確定嗎？刪除標籤將作為默認值刪除，以後的倉庫在創建時不會收到此標籤。",

            "label": "個標籤",
            "labels": "個標籤",
            "bug": "BUG",
                "Something isn't working": "有些東西不工作",
            "dependencies": "依賴性",
                "Pull requests that update a dependency file": "更新一個依賴文件的拉取請求",
            "documentation": "文檔",
                "Improvements or additions to documentation": "文檔的改進或補充",
            "duplicate": "重複",
                "This issue or pull request already exists": "這個議題或拉取請求已經存在",
            "enhancement": "增強",
                "New feature or request": "新功能或請求",
            "good first issue": "好的首發議題",
                "Good for newcomers": "適合新人",
            "help wanted": "需要幫助",
                "Extra attention is needed": "需要特別關注",
            "invalid": "無效",
                "This doesn't seem right": "這似乎不對",
            "question": "問題",
                "Further information is requested": "要求提供更多信息",
            "wontfix": "不會修復",
                "This will not be worked on": "這將不會被處理",

    },
    "regexp": [ // 正則翻譯
        [/New repositories created in ([^ ]+) will use main as their default branch./, "在 $1 中創建的新倉庫將使用 main 作為其默認分支。"],
        [/Your default branch name will be ([^ ]+)/, "您的默認分支名稱將是 $1"],
    ],
};

I18N.zh["orgs/topics"] = { // 組織設置 - 倉庫 /倉庫主題
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 倉庫主題 /orgs/<org-login>/topics
            "No repositories": "尚無倉庫",
            "A code repository designed to show the best GitHub has to offer.": "旨在展示 GitHub 必須提供的最佳程式碼倉庫。",

    },
    "regexp": [ // 正則翻譯
        [/([^ ]+) repositories you contribute to/, "您貢獻的 $1 倉庫"],
        [/There are no repositories in ([^ ]+) that you’ve contributed to and that you can set topics on./, "$1  中沒有您貢獻過的並且可以設置主題的倉庫。"],
    ],
};

I18N.zh["orgs/settings/codespaces"] = { // 組織設置 - 倉庫 /程式碼空間
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],
        "To manage Codespace ownership settings, please": "要管理程式碼空間所有權設置，請",
        "upgrade your plan": "升級您的計劃",
        "to enable your organization.": "以啟用您的組織。",

        "Codespaces access": "程式碼空間訪問",
            "Manage access to GitHub Codespaces for your organization's members on private and internal repositories. Codespaces are always available on public repositories.": "管理組織成員對私有和內部倉庫中 GitHub 程式碼空間的訪問權限。程式碼空間始終在公共倉庫中可用。",

            "By enabling Codespaces, you agree to GitHub’s": "啟用程式碼空間即表示您同意 GitHub 的",
            "additional products and features terms": "附加產品和功能條款",
            "and approve of these terms on behalf of your organization.": "並代表您的組織批准這些條款。",

            "Disabled": "禁用",
                "Disable GitHub Codespaces for all organization owned private and internal repositories": "禁用所有組織擁有的私有和內部倉庫的 GitHub 程式碼空間",

            "Enable for specific members or teams": "為特定成員或團隊啟用",
                "Enable GitHub Codespaces for specific organization members or teams on all organization owned private and internal repositories": "在所有組織擁有的私有和內部倉庫上為特定組織成員或團隊啟用 GitHub 程式碼空間",

            "Enable for all members": "為所有成員啟用",
                "Enable GitHub Codespaces for all organization members on all organization owned private and internal repositories": "在所有組織擁有的私有和內部倉庫上為所有組織成員啟用 GitHub 程式碼空間",

            "Enable for all members and outside collaborators": "為所有成員和外部協作者啟用",
                "Enable GitHub Codespaces for all organization members and outside collaborators on all organization owned private and internal repositories": "在所有組織擁有的私有和內部倉庫上為所有組織成員和外部協作者啟用 GitHub 程式碼空間",

        "Codespace ownership": "程式碼空間所有權",
            "Control who owns codespaces created by your organization’s members on organization owned repositories. Codespace ownership dictates who is billed for usage, whose policies apply, and where audit logs are sent.": "控制誰擁有組織成員在組織擁有的倉庫上創建的程式碼空間。程式碼空間所有權決定了由誰來支付使用費、適用誰的策略以及審計日誌發送到何處。",

            "Organization ownership": "組織所有權",
                "All codespaces created by your organization’s members on your organization’s repositories are owned by the organization": "組織成員在組織倉庫上創建的所有程式碼空間都歸組織所有",

            "User ownership": "用戶所有權",
                "All codespaces created by your organization’s members on your organization’s repositories are owned by the creating member": "組織的成員在組織倉庫上創建的所有程式碼空間都歸創建成員所有",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/copilot"] = {  // 組織設置 - GitHub Copilot
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 組織設置 - GitHub Copilot /orgs/<org-login>/settings/copilot
            "The AI powered pair programmer for your organization. Once you complete onboarding, you’ll have the ability to manage policies and control which users or teams will have access to": "為您的組織提供人工智能助理程序員。完成入職後，您將能夠管理策略並控制哪些用戶或團隊有權訪問組織內的",
            "inside your organization.": "。",

            "Enable GitHub Copilot": "啟用 GitHub Copilot",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/actions"] = { // 組織設置 - 操作
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 操作頁面 /organizations/<org-login>/settings/actions
            "General actions permissions": "常規操作權限",

            "Policies": "政策",
                "Choose which repositories are permitted to use GitHub Actions.": "選擇允許哪些倉庫使用 GitHub Actions。",
                "All repositories": "所有倉庫",
                    "Actions can be run by any repository in the organization": "操作可以由組織中的任何倉庫運行",
                "Selected repositories": "選定的倉庫",
                    "Actions can only be run by specifically selected repositories": "操作只能由特定選擇的倉庫運行",
                    // [/(\d+) selected repositor(y|ies)/, "$1 個選定的倉庫"],
                    "selected repository": "個選定的倉庫",
                    "selected repositories": "個選定的倉庫",
                    // 對話框
                        "Select the organization repositories that may use Actions.": "選擇可以使用操作的組織倉庫。",
                        "Filter repositories": "篩選倉庫",
                        "No repositories found.": "未找到倉庫。",
                        "Select repositories": "選定倉庫",
                "Disabled": "禁用",
                    "GitHub Actions is disabled for all repositories in the organization": "對組織中的所有倉庫禁用 GitHub Actions",

                "Allow all actions and reusable workflows": "允許所有操作和可復用的工作流程",
                    "Any action or reusable workflow can be used, regardless of who authored it or where it is defined.": "可以使用任何操作或可復用的工作流程，而不管它是誰創作的或在哪裡定義的。",
                // [/Allow ([^ ]+) actions and reusable workflows/, "允許 $1 的操作和可復用的工作流程"],
                //     [/Any action or reusable workflow defined in a repository within the ([^ ]+) organization can be used./, "可以使用在 $1 組織內的倉庫中定義的任何操作或可復用的工作流程。"], // 操作頁面
                // [/Allow ([^ ]+), and select non-([^ ]+), actions and reusable workflows/, "允許 $1，並選擇非 $2、操作和可復用的工作流程"],
                //     [/Any action or reusable workflow that matches the specified criteria, plus those defined in a repository within the ([^ ]+) organization, can be used./, "可以使用符合指定條件的操作或可復用的工作流程，以及在 $1 組織內的倉庫中定義的操作或可復用的工作流程。"], // 操作頁面
                    "Learn more about allowing specific actions and reusable workflows to run.": "了解更多關於允許運行特定操作和可復用的工作流程的信息。",
                    "Allow actions created by GitHub": "允許由 GitHub 創建的操作",
                    "Allow actions by Marketplace": "允許來自市場的操作，",
                    "verified creators": "由經驗證的創建者創建",
                    "Allow specified actions and reusable workflows": "允許指定的操作和可復用的工作流程",
                    "Applies to": "適用於",
                    "repositories only": "倉庫，僅僅",
                        // "Workflows using these actions in private repositories will fail.": "在私有倉庫中使用這些操作的工作流程將失敗。",
                        // "Using a list of specific actions is only supported for public repositories on your current GitHub plan. To have this list apply to private repositories,": "只有當前 GitHub 計劃中的公共倉庫才支持使用特定操作列表。要將此列表應用於私有倉庫，",
                        // "upgrade your plan": "升級您的計劃",
                "Enter a comma-separated list of actions and reusable workflows": "輸入以逗號分隔的操作和可復用的工作流程列表",
                "Wildcards, tags, and SHAs are allowed.": "允許使用通配符、標籤和 SHA。",
                "Action examples:": "操作示例：",
                "Reusable workflow examples:": "可復用的工作流程示例：",
                "Entire organization or repository examples:": "整個組織或倉庫的示例：",

                // 頂部提醒
                    "Actions policy updated.": "操作政策已更新",

            // 運行器
                "Choose which repositories are allowed to create repository-level self-hosted runners.": "選擇哪些倉庫允許創建倉庫級自託管運行器。",
                // 私有倉庫
                    "Repo-level self-hosted runners can be used by any repository in the organization": "組織內的任何倉庫都可以使用倉庫級自託管運行器",
                // 選定的倉庫
                    "Repo-level self-hosted runners can be used by specifically selected repositories": "選定的倉庫允許使用倉庫級自託管運行器",
                    "Select the organization repositories that may use repository-level self-hosted runners.": "選擇組織中允許使用倉庫級自託管運行器的倉庫。",
                // 禁用
                    "Repo-level self-hosted runners are disabled for all repositories in the organization": "組織中的所有倉庫都禁用倉庫級別的自託管運行器",

                // 頂部提醒
                    "Repo-level self-hosted runners settings changed.": "倉庫級別的自託管運行器設置已更改。",

            "Artifact and log retention": "工件和日誌保留",
                "Choose the default repository settings for artifacts and logs.": "選擇工件和日誌的默認倉庫設置。",
                "days": "天",
                "You can set a maximum limit of": "您最多可以設置為",
                "days.": "天。",
                "Learn more about the artifact and log retention policy.": "了解更多關於工件和日誌保留政策的信息。",

            "Fork pull request workflows from outside collaborators": "從外部協作者，復刻拉取請求工作流程",
                "Choose which subset of outside collaborators will require approval to run workflows on their pull requests.": "選擇哪些外部協作者的子集需要批准才能對他們的拉取請求運行工作流程。",
                "Learn more about approving workflow runs from public forks.": "了解更多關於批准來自公共復刻的工作流運行的信息。",
                "Require approval for first-time contributors who are new to GitHub": "要求對首次加入 GitHub 的貢獻者進行批准審查",
                    "Only first-time contributors who recently created a GitHub account will require approval to run workflows.": "只有最近創建 GitHub 帳戶的首次貢獻者才需要獲得批准才能運行工作流程。",
                "Require approval for first-time contributors": "要求對首次貢獻者進行批准審查",
                    "Only first-time contributors will require approval to run workflows.": "只有首次貢獻者才需要獲得批准才能運行工作流程。",
                "Require approval for all outside collaborators": "要求對所有外部協作者進行批准審查",
                    "All outside collaborators will always require approval to run workflows on their pull requests.": "所有外部協作者將始終需要批准才能在他們的拉取請求上運行工作流程。",
                // 頂部提醒
                    "Fork pull request outside collaborators settings saved.": "外部協作者復刻拉取請求設置已保存。",

            "Fork pull request workflows in private repositories": "私有倉庫的復刻拉取請求工作流程",
                "These settings apply to private repositories. Repository administrators will only be able to change the settings that are enabled here.": "這些設置適用於私有倉庫。倉庫管理員只能改變這裡啟用的設置。",
                "Run workflows from fork pull requests": "從復刻拉取請求運行工作流程",
                    "This tells Actions to run workflows from pull requests originating from repository forks. Note that doing so will give maintainers of those forks the ability to use tokens with read permissions on the source repository.": "這告訴 Actions 運行工作流程，來自倉庫復刻的拉取請求。請注意，這樣做將使這些復刻的維護者有能力在源碼庫上使用具有讀取權限的令牌。",
                    "Send write tokens to workflows from fork pull requests.": "從復刻拉取請求，發送可寫令牌到工作流程",
                        "This tells Actions to send tokens with": "這告訴 Actions 發送令牌",
                        "write": "寫入",
                        "permissions to workflows from pull requests originating from repository forks. Note that doing so will give maintainers of those forks": "權限到工作流程，來自倉庫復刻的拉取請求。請注意，這樣做將授予這些復刻的維護者",
                        "permissions against the source repository.": "權限，針對源倉庫。",
                    "Send secrets and variables to workflows from fork pull requests.": "從復刻拉取請求，發送機密和變量到工作流程",
                        "This tells Actions to send repository secrets and variables to workflows from pull requests originating from repository forks.": "這告訴 Actions 發送倉庫機密和變量到工作流程，來自倉庫復刻的拉取請求。",
                    "Require approval for fork pull request workflows.": "要求批准復刻 拉取請求工作流程。",
                        "Fork pull requests from users without write access will require approval to run workflows.": "來自沒有寫入權限的用戶的復刻拉取請求需要獲得批准才能運行工作流程。",
                // 頂部提醒
                    "Fork pull request workflow settings saved.": "復刻拉取請求工作流程設置已保存。",

            "Workflow permissions": "工作流程權限",
                "Choose the default permissions granted to the GITHUB_TOKEN when running workflows in this organization. You can specify more granular permissions in the workflow using YAML.": "在組織中運行工作流程時，選擇授予 GITHUB_TOKEN 的默認權限。您可以使用 YAML 在工作流程中指定更細化的權限。",
                "Learn more about managing permissions.": "了解更多關於管理權限的信息。",

                "Repository administrators will only be able to change the default permissions to a more restrictive setting.": "倉庫管理員只能將默認權限改為更嚴格的設置。",
                    "Read and write permissions": "讀取和寫入權限",
                        "Workflows have read and write permissions in the repository for all scopes.": "工作流程在倉庫中對所有作用域具有讀和寫的權限。",
                    "Read repository contents and packages permissions": "讀取倉庫的內容和軟件包的權限",
                        "Workflows have read permissions in the repository for the contents and packages scopes only.": "工作流程在倉庫中僅對內容和軟件包作用域具有隻讀的權限。",
                    "Choose whether GitHub Actions can create pull requests or submit approving pull request reviews.": "選擇 GitHub Actions 是否可以創建拉取請求或提交批准拉取請求審查。",
                    "Allow GitHub Actions to create and approve pull requests": "允許 GitHub Actions 創建和批准拉取請求",
                        "This controls whether GitHub Actions can create pull requests or submit approving pull request reviews.": "這控制 GitHub Actions 是否可以創建拉取請求或提交批准的拉取請求審查。",
                    // 頂部提醒
                        "Default workflow permissions settings saved.": "默認工作流程權限設置已保存。",

            "Required workflows": "所需的工作流程",
                "Add workflow": "添加工作流",
                "Set required workflows to run in your organization’s repositories. These workflows will run alongside the repository workflows and branch merging will be blocked until the required checks succeed.": "設置所需的工作流程，在您的組織的倉庫中運行。這些工作流程將與倉庫的工作流程一起運行，分支合併將被阻止，直到所需的檢查成功。",
                "Learn more about required workflows.": "了解更多關於所需工作流程的信息。",
                "There are no required workflows in this organization.": "此組織中尚無所需的工作流程。",

        // 運行器頁面 /organizations/<org-login>/settings/actions/runners
            "Includes all runners across self-hosted and GitHub-hosted runners.": "包括所有自託管和 GitHub 託管的運行器。",

            "Host your own runners and customize the environment used to run jobs in your GitHub Actions workflows. Runners added to this organization can be used to process jobs in multiple repositories in your organization.": "託管您自己的運行器，並定制用於在您的 GitHub Actions 工作流程中運行作業的環境。添加到該組織的運行器可以用來處理您的組織中的多個倉庫的工作。",
            "Learn more about self-hosted runners": "了解更多關於自託管運行器的信息",

            "Search runners": "搜索運行器",
            "New runner": "創建運行器",
                "New self-hosted runner": "新建自託管運行器",
                    "Bring your own infrastructure": "自備基礎設施",
                "New GitHub-hosted runner": "新建 GitHub 託管運行器",
                    "Pay-as-you-go, customizable, secure, scaled &": "即用即付、可定制、安全、可擴展並",
                    "managed by GitHub": "由 GitHub 管理",
                "Only available on paid Team or Enterprise plans": "僅適用於付費團隊或企業計劃",

            "There are no runners configured": "暫無設置運行器",
            "Learn more about using runners": "了解更多關於使用運行器的信息",
            "to run actions on your own servers.": "在您自己的服務器上運行操作的信息。",

            "Standard GitHub-hosted runners": "標準 GitHub 託管運行器",
            "Ready-to-use runners managed by GitHub.": "由 GitHub 管理的即用型運行器。",
            // [/(\d+) active jobs?/ ,"$1 個活躍的工作"]

        // 由 GitHub 託管的運行器 /organizations/<org-login>/settings/actions/hosted-runners
            "/ GitHub-hosted runners": "/ GitHub 託管運行器",
            "All jobs usage": "所有工作的使用情況",
            "To increase your concurrency limit, upgrade your": "要增加您的併發限制，請升級您的",
            "GitHub plan.": "GitHub 計劃。",

            "Labels": "標籤",

            "Active jobs": "活躍的工作",
            "There are currently no running jobs": "目前沒有正在運行的工作",
            "Add `": "添加 `",
            "` to your workflow's YAML to send jobs to GitHub-hosted runners.": "`到您的工作流程的YAML中，以發送作業到 GitHub 託管的運行器。",

        // 創建運行器頁面 /organizations/<org-login>/settings/actions/runners/new
            "/ Create self-hosted runner": "/ 創建自託管運行器",
            "Adding a self-hosted runner requires that you download, configure, and execute the GitHub Actions Runner. By downloading and configuring the GitHub Actions Runner, you agree to the": "添加一個自託管運行器需要您下載、配置並執行 GitHub Actions 運行器。下載並配置 GitHub Actions 運行器 後，您同意",
                "GitHub Terms of Service": "GitHub 服務條款",
                "GitHub Corporate Terms of Service": "GitHub 企業服務條款",
                ", as applicable.": "，如適用。",
            "Runner image": "運行器鏡像",
            "Architecture": "架構",
            "Download": "下載",
            // win 64
            "We recommend configuring the runner under \"\\actions-runner\". This will help avoid issues related to service identity folder permissions and long path restrictions on Windows.": "我們建議在 “\\actions-runner” 下配置運行器。這將有助於避免與 Windows 上的服務標識文件夾權限和長路徑限制相關的議題。",
            // macOS-arm64
            "macOS-arm64 runners are currently in pre-release status and subject to change.": "macOS-arm64 的運行器目前處於預發布狀態，可能會有變化。",
            "Configure": "設置",
            "Using your self-hosted runner": "使用您的自託管運行器",
            "For additional details about configuring, running, or shutting down the runner, please check out our": "關於配置、運行或關閉運行器的其他細節，請查看我們的",
            "product docs": "產品文檔",

        // 運行器組 /organizations/<org-login>/settings/actions/runner-groups
            "Control access to your runners by specifying the repositories that are able to use your shared organization runners. New runners will be automatically assigned to the default group if no other group is specified. Upgrade to an Enterprise plan to create groups.": "通過指定能夠使用您的共享組織運行器的倉庫來控制對運行器的訪問。如果沒有指定其他組，新運行器將自動分配到默認組。升級到企業計劃以創建組。",

            "Search runner groups": "搜索運行器組",
            "New runner group": "創建運行器組",

            "Group": "組",
            "Default": "默認",
                "This group cannot be deleted and new runners will be automatically assigned to this group if no other group is specified.": "該組不能被刪除，如果沒有指定其他組，新的運行器將被自動分配到該組。",
                "All repositories, excluding public repositories": "所有倉庫，不包括公共倉庫",

        // 緩存 /organizations/<org-login>/settings/actions/caches
            "Caches": "緩存",
            "You can use caches for dependencies and other commonly reused files to speed up your workflows. The data on this page have at least 5 minutes of latency.": "您可以對依賴項和其他經常重複使用的文件的緩存來加快您的工作流程。此頁面上的數據至少有 5 分鐘的延遲。",
            "Learn more about caches": "了解更多關於緩存的信息",

            "Search repositories": "搜索倉庫",

            "Sort:": "排序：",
                "Largest size": "最大尺寸",
                "Smallest size": "最小尺寸",

            "No repository uses caches": "尚無倉庫使用緩存",
            "Nothing has been cached by workflows running in any repositories of this organization.": "該組織任何倉庫中運行的工作流程都未緩存任何內容。。",
            "Learn more about caching": "了解更多關於緩存",
            "dependencies and build outputs to improve workflow execution time.": "依賴關係和構建輸出以改善工作流程執行時間的信息。",

    },
    "regexp": [ // 正則翻譯
        [/(\d+) selected repositor(y|ies)/, "$1 個選定的倉庫"],
        [/Allow ([^ ]+) actions and reusable workflows/, "允許 $1 的操作和可復用的工作流程"],
        [/Any action or reusable workflow defined in a repository within the ([^ ]+) organization can be used./, "可以使用在 $1 組織內的倉庫中定義的任何操作或可復用的工作流程。"], // 操作頁面
        [/Allow ([^ ]+), and select non-([^ ]+), actions and reusable workflows/, "允許 $1，並選擇非 $2、操作和可復用的工作流程"],
        [/Any action or reusable workflow that matches the specified criteria, plus those defined in a repository within the ([^ ]+) organization, can be used./, "可以使用符合指定條件的操作或可復用的工作流程，以及在 $1 組織內的倉庫中定義的操作或可復用的工作流程。"], // 操作頁面
        [/(\d+) active jobs?/ ,"$1 個活躍的工作"], // settings/actions/runners
        [/(\d+) caches?/, "$1 項緩存"],
    ],
};

I18N.zh["orgs/settings/discussions"] = { // 組織設置 - 討論
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 討論 /organizations/<org-login>/settings/discussions
            "Discussions for your organization": "您組織的討論",
            "Setting up Discussions for your organization will allow you to broadcast updates, answer questions, and hold conversations for the entire organization.": "為您的組織設置 “討論”，將您能夠為整個組織廣播更新、回答問題和舉行對話。",
            "Enable discussions for this organization": "啟用組織的討論功能",

            "Choose a source repository that will host the discussions.": "選擇承載討論的源碼庫。",
                "All discussions on the source repository will be surfaced to the organization Discussions tab.": "源碼庫上的所有討論都將顯示在組織討論選項卡中。",
                "Permissions from the repository will be applied to the organization Discussions. By default, all members of the organization will be able to create and comment on discussions.": "來自倉庫的權限將應用於組織討論。默認情況下，組織的所有成員都可以創建討論併發表評論。",
                "Members can now share updates or ask questions to the entire organization.": "成員現在可以向整個組織共享更新或提問。",
                "For more information, see our documentation.": "有關更多信息，請參閱我們的文檔。",

                "Choose a repository": "選擇倉庫",
                "Search for a repository": "搜索倉庫",

            // 提醒
                "Organization discussions has been set up!": "組織討論已經建立！",
                "View organization discussions": "查看組織討論",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/projects"] = { // 組織設置 - 計劃 - 項目
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 項目 /organizations/<org-login>/settings/projects
            "Projects on GitHub help you organize and prioritize your work. You can create projects for specific feature work, comprehensive roadmaps, or even release checklists.": "GitHub 上的項目可以幫助您組織和安排工作的優先級。您可以為特定的功能工作、全面的路線圖、甚至是發布清單創建項目。",
            "Enable Projects for the organization": "啟用項目，為組織",
                "This allows members to create projects for the": "允許成員創建項目，為",
                "organization. Members can create projects to organize and track issues from any": "組織。成員可以創建項目來組織和跟蹤來自任何",
                "-owned repository.": "組織擁有的倉庫。",
            "Allow members to change project visibilities for this organization": "允許成員更改此組織的項目可見性",
                "If enabled, members with admin permissions on a project can make the project public or private. If disabled, only organization owners can make the project public or private. All projects are private by default.": "如果啟用，在項目上有管理權限的成員可以將項目設為公開或私有。如果禁用，則只有組織所有者可以將項目設為公開或私有。默認情況下，所有項目都是私有的。",

            "Recommended templates": "推薦模板",
                "Customize a selection of recommended project templates for this organization. These templates will be surfaced first when a member of the organization creates a new project.": "為此組織定制一系列推薦的項目模板。當組織成員創建新項目時，這些模板將首先出現。",

                "Create your first GitHub project template": "創建第一個 GitHub 項目模板",
                    "Templates can be used to quickly get started with a new project.": "模板可用於快速開始新項目。",
                "New template": "新建模板",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/security"] = { // 組織設置 - 身份驗證安全
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 身份驗證安全  /organizations/<org-login>/settings/security
            "Two-factor authentication": "雙重身份驗證",
            "Requiring an additional authentication method adds another level of security for your organization.": "要求額外的身份驗證方法為您的組織增加了另一個級別的安全性。",
            // [/Require two-factor authentication for everyone in the ([^]+) organization./, "要求對 $1 組織中的每個成員進行雙重身份驗證。"],
            "Members, billing managers, and outside collaborators who do not have two-factor authentication enabled for their personal account will be removed from the organization and will receive an email notifying them about the change.": "未為其個人帳戶啟用雙重身份驗證的成員、賬單管理員和外部協作者將從組織中刪除，並會收到一封電子郵件，通知他們有關更改。",

            // 頂部提醒
                "Enabling two-factor authentication requirement.": "啟用雙重身份驗證。",
                "Disabled two-factor authentication requirement.": "禁用雙重身份驗證。",

            "SSH Certificate Authorities": "SSH 證書頒發機構",
            "Provide SSH certificates that members can use to access your resources with Git": "提供 SSH 證書，成員可以用 Git 來訪問您的資源",
            "Try risk-free for 30 days": "無風險試用 30 天",
            "learn more": "了解更多",
            ", or": "，或",
            "dismiss this message.": "忽略此消息。",

            "IP allow list": "IP 允許列表",
            "An IP allow list lets your organization limit access based on the IP address a person is accessing from.": "IP 允許列表可讓您的組織根據成員訪問的 IP 地址來限制訪問。",
            "Restrict access to your organization's assets by configuring a list of IP addresses that are allowed to connect": "通過配置 IP 允許列表來限制對組織資產的訪問",
    },
    "regexp": [ // 正則翻譯
        [/Require two-factor authentication for everyone in the ([^]+) organization./, "要求對 $1 組織中的每個成員進行雙重身份驗證。"],
    ],
};

I18N.zh["orgs/settings/security_analysis"] = { // 組織設置 - 程式碼安全性與分析
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 程式碼安全性與分析 /organizations/<org-login>/settings/security_analysis
            "Try our new settings": "嘗試我們的新設置",
            // 頂部提醒
                "Something went wrong. Please try again.": "出了些問題。請再試一次。",

            "Security and analysis features help keep your repositories secure and updated. By enabling these features, you're granting us permission to perform read-only analysis on your organization's repositories.": "安全和分析功能有助於確保您的倉庫安全和更新。通過啟用這些功能，您授予我們對您組織的倉庫執行只讀分析的權限。",

            "Disable all": "禁用全部",
            "Enable all": "啟用全部",

            "Private vulnerability reporting": "私下漏洞報告",
                "Allow your community to privately report potential security vulnerabilities to maintainers and repository owners.": "允許您的社區向維護者和倉庫所有者私下報告潛在的安全漏洞。",
                "Learn more about private vulnerability reporting": "了解更多關於私下漏洞報告的信息",
                "Automatically enable for new public repositories": "為新公共倉庫自動啟用",

                // 對話框
                    "Enable private vulnerability reporting": "啟用私下漏洞報告",
                        // [/You're about to enable private vulnerability reporting on all public repositories in ([^ ]+)./, "您即將啟用 $1 組織中的所有私有倉庫上的私下漏洞報告。"],

                    "Disable private vulnerability reporting": "禁用私下漏洞報告",
                        // [/You're about to disable private vulnerability reporting on all public repositories in ([^ ]+)./, "您即將禁用 $1 組織中所有私有倉庫上的私下漏洞報告。"],
                        "Enable by default for new public repositories": "默認啟用新公共倉庫",

            "Dependency graph": "依賴關係圖",
                "Understand your dependencies.": "了解您的依賴項。",
                "Automatically enable for new private repositories": "為新私有倉庫自動啟用",

                // 對話框
                    "Enable dependency graph": "啟用依賴關係圖",
                        // [/You're about to enable dependency graph on all private repositories in ([^ ]+)./, "您即將啟用 $1 組織中的所有私有倉庫上的依賴關係圖。"],

                    "Disable dependency graph": "禁用依賴關係圖",
                        // [/You're about to disable dependency graph on all private repositories in ([^ ]+). This will also disable Dependabot alerts and Dependabot security updates on those repositories./, "您即將禁用 $1 組織中所有私有倉庫上的依賴關係圖。這也將禁用這些倉庫的 Dependabot 警報和 Dependabot 安全更新。"],
                        "Enable by default for new private repositories": "默認為新私有倉庫啟用",

            // Dependabot
                "Keep your dependencies secure and up-to-date.": "保持您的依賴關係的安全和最新",
                "Learn more about Dependabot": "了解更多關於 Dependabot 的信息",

                "Dependabot alerts": "Dependabot 警報",
                    "Receive alerts for vulnerabilities that affect your dependencies and manually generate Dependabot pull requests to resolve these vulnerabilities.": "接收影響您的依賴關係的漏洞警報，並手動生成 Dependabot 拉取請求以解決這些漏洞。",
                        "Configure alert notifications": "配置警報通知",
                    "Automatically enable for new repositories": "為新倉庫自動啟用",

                // 對話框
                    "Enable Dependabot alerts": "啟用 Dependabot 警報",
                        // [/You're about to enable Dependabot alerts on all repositories in ([^ ]+). Alerts require the dependency graph, so we'll also turn that on for all repositories. No notifications will be sent while Dependabot alerts are being enabled./, "您即將啟用 $1 組織中所有倉庫上的 Dependabot 警報。Dependabot 警報需要依賴關係圖，因此我們還將為所有倉庫開啟它。啟用 Dependabot 警報時不會發送任何通知。"],

                    "Disable Dependabot alerts": "禁用 Dependabot 警報",
                        // [/You're about to disable Dependabot alerts on all repositories in ([^ ]+). This will also disable Dependabot security updates on those repositories./, "您即將禁用 $1 組織中所有倉庫上的 Dependabot 警報。這也將禁用這些倉庫的 Dependabot 安全更新。"],
                        "Enable by default for new repositories": "默認為新倉庫啟用",

                "Dependabot rules": "Dependabot 規則",
                    "Create your own custom rules and manage alert presets.": "創建您自己的自定義規則並管理警報預設。",
                    // [/(\d+) rules? enabled/, "$1 條規則啟用"],

            "Dependabot security updates": "Dependabot 安全更新",
                "Enabling this option will result in Dependabot automatically attempting to open pull requests to resolve every open Dependabot alert with an available patch. If you would like more specific configuration options, leave this disabled and use": "啟用後，Dependabot 會自動嘗試打開拉取請求，以使用可用補丁解決每個打開的 Dependabot 警報。如果您想要更具體的配置選項，請將其禁用並使用",
                    // "Dependabot rules": "Dependabot 規則",

                // 對話框
                    "Enable Dependabot security updates": "啟用 Dependabot 安全更新",
                        // [/You're about to enable Dependabot security updates on all repositories in ([^ ]+). Dependabot security updates require the dependency graph and Dependabot alerts, so we'll also turn that on for all repositories./, "您即將啟用 $1 組織中的所有倉庫上的 Dependabot 安全更新。Dependabot 安全更新需要依賴關係圖和 Dependabot 警報，因此我們還將為所有倉庫開啟他們。"],

                    "Disable Dependabot security updates": "禁用 Dependabot 安全更新",
                        // [/You're about to disable Dependabot security updates on all repositories in ([^ ]+)./, "您即將禁用 $1 組織中的所有倉庫上的 Dependabot 安全更新。"],

            "Grouped security updates": "分組安全更新",
                "Groups all available updates that resolve a Dependabot alert into one pull request (per package manager and directory of requirement manifests). This option may be overridden by group rules specified in dependabot.yml -": "將解決可靠警報的所有可用更新分組為一個拉取請求（每個包管理器和需求清單目錄）。該選項可被 dependabot.yml 中指定的組規則覆蓋 -",
                "learn more here": "在此了解更多",

                // 對話框
                    "Enable grouped security updates": "啟用分組安全更新",
                        // [/You're about to enable grouped security updates on all repositories in ([^ ]+). Grouped security updates require the dependency graph, Dependabot alerts, Dependabot security updates and Dependabot security updates, so we'll also turn that on for all repositories./, "您即將啟用 $1 組織中的所有倉庫上的分組安全更新。分組安全更新需要依賴關係圖、Dependabot警報、Dependabot安全更新和 Dependabot安全更新，因此我們還將為所有倉庫開啟他們。"],

                    "Disable grouped security updates": "禁用分組安全更新",
                        // [/You're about to disable grouped security updates on all repositories in ([^ ]+)./, "您即將禁用 $1 組織中的所有倉庫上的分組安全更新。"],

            "Code scanning": "程式碼掃描",
                "Identify vulnerabilities and errors with": "識別程式碼中的漏洞和錯誤，通過",
                ". Default CodeQL analysis will be set up on": "。默認的 CodeQL 分析將被設置為",
                "eligible": "符合條件的",
                "public repositories.": "公共倉庫。",

                "Recommend the extended query suite for repositories enabling default setup": "建議為啟用默認設置的倉庫提供擴展查詢套件",
                    "The extended query includes the default suite, plus lower severity and precision queries.": "擴展查詢包括默認套件，以及較低嚴重性和精度的查詢。",

                // 對話框
                    "Enable code scanning default setup": "啟用程式碼掃描默認設置",
                        "This will turn on CodeQL default setup for all eligible public repositories and repositories with GitHub Advanced Security enabled.": "這將為所有符合條件的公共倉庫和已啟用 GitHub 高級安全功能的倉庫開啟 CodeQL 默認設置。",
                        "What makes a repository eligible for default setup?": "怎樣的倉庫符合默認設置？",
                        "Query suites": "查詢套件",
                            "Group of queries": "查詢套件",
                            "to run against your code.": "針對您的程式碼運行。",

                            "Default": "默認",
                                "Recommended": "推薦",
                                "CodeQL high-precision queries.": "CodeQL 高精度查詢。",
                            "Extended": "擴展",
                                "Queries from the default suite, plus lower severity and precision queries.": "來自默認套件的查詢，以及較低嚴重性和精度查詢。",
                                "Recommended by your organization. Queries from the default suite, plus lower severity and precision queries.": "由您的組織推薦。來自默認套件的查詢，以及較低嚴重性和精度的查詢。",
                        "Code scanning uses GitHub Actions. Also, repositories where code scanning is already enabled will not be re-enabled.": "程式碼掃描使用 GitHub Actions。此外，已啟用程式碼掃描的倉庫將不會重新啟用。",

                    "Disable code scanning default setup": "禁用程式碼掃描默認設置",
                        "This will disable CodeQL default setup on all repositories where it is enabled.": "這將禁用所有倉庫的 CodeQL 默認設置。",

            "Secret scanning": "機密掃描",
                "Receive alerts on GitHub for detected secrets, keys, or other tokens.": "在 GitHub 上接收有關檢測到的機密、密鑰或其他令牌的警報。",

                "Push protection": "推送保護",
                    "Block commits that contain": "阻止提交，包含",
                    "supported secrets": "受支持的機密",
                    "Automatically enable for repositories added to secret scanning": "自動啟用對添加到機密掃描的倉庫進行掃描",
                    "Add a resource link in the CLI and web UI when a commit is blocked": "當提交被阻止時，在 CLI 和 Web UI 中添加資源鏈接。",
                        "Link will show in addition to": "顯示鏈接和",
                        "the message GitHub displays": "GitHub 顯示的消息",
                        "Save link": "保存鏈接",

                // 對話框
                    "Enable secret scanning for eligible repositories?": "啟用適用倉庫的機密掃描？",
                        "This will turn on secret scanning for all public repositories.": "這將為所有公共倉庫啟用機密掃描。",
                        "Enable for eligible repositories": "啟用符合條件的倉庫",

                    "Disable secret scanning?": "禁用機密掃描？",
                        "This will disable secret scanning on all repositories where it is enabled.": "這將禁用所有倉庫的機密掃描。",
                        "Disable secret scanning": "禁用機密掃描",

                    "Enable push protection for eligible repositories?": "為符合條件的倉庫啟用推送保護？",
                        "This will turn on push protection for all repositories that have secret scanning enabled.": "這將為所有已啟用秘密掃描的倉庫啟用推送保護。",
                        "Push protection coverage": "推送保護覆蓋範圍",
                        "Already enabled": "已啟用",
                        "Will be enabled": "將啟用",
                        "Not eligible": "不符合條件",

                    "Disable push protection?": "禁用推送保護？",
                        // [/This will disable push protection on (\d+) repositori(y|es) where it is enabled./, "這將在已啟用推送保護的 $1 個倉庫中禁用推送保護。"],
                        "You can still enable push protection at the repository level.": "您仍然可以在倉庫級別啟用推送保護。",
                        "Disable push protection": "禁用推送保護",

            "Grant Dependabot access to private repositories": "授予 Dependabot 訪問私有庫權限",
                "In order to update dependencies in your organization, Dependabot accesses dependencies in all public repositories and the selected private repositories. The contents of these repositories will be accessible to all users in your organization through Dependabot updates. Be sure that you want to share these repositories with everyone in your organization or consider using private registries instead.": "為了更新組織中的依賴項，Dependabot 會訪問所有公共倉庫和選定的私有庫中的依賴項。您組織中的所有用戶都可以通過 Dependabot 更新訪問這些倉庫內容。請確保您想與組織中的每個人共享這些倉庫，或考慮使用私有註冊表。",
                "Add private repositories": "添加私有庫",
                    "Add a private repository": "添加私有庫",
                    // [/(\d+) selected repositor(y|ies)/, "$1 個選定的倉庫"],

            "Security managers": "安全管理員",
                "Grant a team permission to manage security alerts and settings across your organization. This team will also be granted read access to all repositories.": "授予團隊管理整個組織的安全警報和設置的權限。該團隊還將被授予對所有倉庫的讀取權限。",
                "Learn more about these security privileges": "了解更多關於這些安全特權的信息",
                "Search for teams": "搜索團隊",

    },
    "regexp": [ // 正則翻譯
        [/You're about to enable private vulnerability reporting on all public repositories in ([^ ]+)./, "您即將啟用 $1 組織中的所有私有倉庫上的私下漏洞報告。"],
        [/You're about to disable private vulnerability reporting on all public repositories in ([^ ]+)./, "您即將禁用 $1 組織中的所有私有倉庫上的私下漏洞報告。"],
        [/You're about to enable dependency graph on all private repositories in ([^ ]+)./, "您即將啟用 $1 組織中的所有私有倉庫上的依賴關係圖。"],
        [/You're about to disable dependency graph on all private repositories in ([^ ]+). This will also disable Dependabot alerts and Dependabot security updates on those repositories./, "您即將禁用 $1 組織中所有私有倉庫上的依賴關係圖。這也將禁用這些倉庫的 Dependabot 警報和 Dependabot 安全更新。"],
        [/You're about to enable Dependabot alerts on all repositories in ([^ ]+). Alerts require the dependency graph, so we'll also turn that on for all repositories. No notifications will be sent while Dependabot alerts are being enabled./, "您即將啟用 $1 組織中所有倉庫上的 Dependabot 警報。Dependabot 警報需要依賴關係圖，因此我們還將為所有倉庫開啟它。啟用 Dependabot 警報時不會發送任何通知。"],
        [/You're about to disable Dependabot alerts on all repositories in ([^ ]+). This will also disable Dependabot security updates on those repositories./, "您即將禁用 $1 組織中所有倉庫上的 Dependabot 警報。這也將禁用這些倉庫的 Dependabot 安全更新。"],
        [/You're about to enable Dependabot security updates on all repositories in ([^ ]+). Dependabot security updates require the dependency graph and Dependabot alerts, so we'll also turn that on for all repositories./, "您即將啟用 $1 組織中的所有倉庫上的 Dependabot 安全更新。Dependabot 安全更新需要依賴關係圖和 Dependabot 警報，因此我們還將為所有倉庫開啟他們。"],
        [/You're about to disable Dependabot security updates on all repositories in ([^ ]+)./, "您即將禁用 $1 組織中的所有倉庫上的 Dependabot 安全更新。"],
        [/You're about to enable grouped security updates on all repositories in ([^ ]+). Grouped security updates require the dependency graph, Dependabot alerts, Dependabot security updates and Dependabot security updates, so we'll also turn that on for all repositories./, "您即將啟用 $1 組織中的所有倉庫上的分組安全更新。分組安全更新需要依賴關係圖、Dependabot警報、Dependabot安全更新和 Dependabot安全更新，因此我們還將為所有倉庫開啟他們。"],
        [/You're about to disable grouped security updates on all repositories in ([^ ]+)./, "您即將禁用 $1 組織中的所有倉庫上的分組安全更新。"],
        [/This will disable push protection on (\d+) repositori(y|es) where it is enabled./, "這將在已啟用推送保護的 $1 個倉庫中禁用推送保護。"],
        [/(\d+) rules? enabled/, "$1 條規則啟用"],
        [/(\d+) selected repositor(y|ies)/, "$1 個選定的倉庫"],
    ],
};

I18N.zh["orgs/settings/dependabot_rules"] = { // 組織設置 - Dependabot 規則
    "static": { // 靜態翻譯
        ...I18N.zh["repository-public"]["static"],
        ...I18N.zh["repository-settings-menu"]["static"],
        ...I18N.zh["orgs-settings-menu"]["static"],

        // Dependabot 規則 /organizations/<org-login>/settings/dependabot_rules
            // 頂部提醒
                "Rule created.": "規則已創建。", // 倉庫規則
                "Rule saved. It may take a moment for this rule to be applied to matching alerts": "規則已保存。此規則可能需要一段時間才能應用於匹配的警報",
                "Rule saved.": "規則已保存。",
                "Rule was successfully deleted.": "規則已成功刪除。",

            "/ Dependabot rules": "/ Dependabot 規則",
            "New rule": "新建規則",
            "GitHub presets": "GitHub 預設",
                "Managed by GitHub": "由 GitHub 管理",
                "Edit curated rule": "編輯策劃規則",
                "Edit rule": "編輯規則",  // 倉庫規則
                "Dismiss low-impact alerts for development-scoped dependencies": "解除開發範圍下依賴關係的低影響警報",
                    "In a developer (non-production or runtime) environment, these alerts are unlikely to be exploitable or have limited effect like slow builds or long-running tests.": "在開發人員（非生產或運行時）環境中，這些警報不太可能被利用，或者影響有限，例如緩慢的構建或長時間運行的測試。",
                    "Learn more about this methodology.": "了解更多關於此方式的信息。",
            "Repository rules": "倉庫規則", // 倉庫規則
            "Organization rules": "組織規則",
                // [/Managed by ([^ ]+)/, "由 $1 管理"],
                "Edit custom rule": "編輯自定義規則",

        // 新建規則 /organizations/<org-login>/settings/dependabot_rules/new
            // 頂部警告
                "The following inputs have errors:": "以下輸入有錯誤：",

            "Dependabot rules": "Dependabot 規則",
            "/ New rule": "/ 新建規則",
            "Rule name": "規則名稱",
                "Add a rule name": "添加規則名稱",
            "State": "狀態",
                "Rules will target all public repositories in this organization.": "規則將針對該組織中的所有公共倉庫。",
                    "Enabled": "啟用",
                        "Rule is enabled by default for all public repositories.": "默認情況下，規則對所有公共倉庫啟用。",
                    "Enforced": "強制",
                        "Rule is enabled for all public repositories and can never be disabled by individual repositories.": "規則對所有公共倉庫啟用，單個倉庫永遠無法禁用。",
                    "Disabled": "禁用",
                        "Rule can never be enabled on any repositories.": "規則永遠不能在任何倉庫中啟用。",
            "Target alerts": "目標警告",
                "Add rule metadata": "添加規則元數據",
                    "Suggested filters": "建議的過濾器",
                        "severity:": "嚴重度：",
                            "critical, high, moderate, low": "嚴重、高、中、低",
                                "Severities": "嚴重度",
                                    "critical": "嚴重",
                                    "high": "高",
                                    "moderate": "中",
                                    "low": "低",
                        "package:": "軟件包：",
                            "package-name": "軟件包名稱",
                        "ecosystem:": "生態系統：",
                            "ecosystem-name": "生態系統名稱",
                        "scope:": "範圍：",
                            "runtime, development": "運行時、開發",
                                "Scopes": "範圍",
                                    "runtime": "運行時",
                                    "development": "開發",
                        "cwe:": "CWE：",
                            "cwe-number": "CWE 號碼",
                "Rules will be applied for alerts matching all included metadata.": "規則將應用於與所有包含的元數據匹配的警報。",
            "Rules": "規則",
                "Select one or more rules to apply to matching alerts.": "選擇一個或多個規則以應用於匹配的警報。",
                "Dismiss alerts": "忽略警報",
                    "Dependabot will automatically close or reopen alerts based on selected criteria.": "Dependabot 將根據選定的條件自動關閉或重新打開警報。",
                    "Until patch is available": "直到補丁可用為止",
                    "Indefinitely": "無限期",
                "Open a pull request to resolve alerts": "打開拉取請求以解決警報",
                    "Dependabot will attempt to open security updates based on selected criteria.": "Dependabot 將嘗試根據選定的標準打開安全更新。",
            "Create rule": "創建規則",

        // 編輯規則 /organizations/<org-login>/settings/dependabot_rules/edit/<id>
            "/ Edit rule": "/ 編輯規則",
            "Save rule": "保存規則",

            "Danger Zone": "危險區",
                "Delete this rule": "刪除規則",
                    "Deleting this rule can potentially reopen associated alerts.": "刪除此規則可能會重新打開相關警報。",
                    "Delete rule": "刪除規則",

                    "Are you sure you want to delete this rule?": "您確定要刪除此規則嗎？",
                        // [/This will permanently delete the rule \"(.*)\" and potentially reopen associated alerts./, "這將永久刪除規則 “$1” 並可能重新打開相關警報。"],

        // 編輯默認規則 /organizations/<org-login>/settings/dependabot_rules/edit_default/1
            "/ GitHub Preset rule": "/ GitHub 預設規則",

    },
    "regexp": [ // 正則翻譯
        [/Managed by ([^ ]+)/, "由 $1 管理"],
        [/This will permanently delete the rule \"(.*)\" and potentially reopen associated alerts./, "這將永久刪除規則 “$1” 並可能重新打開相關警報。"],
    ],
};
I18N.zh["repository/settings/dependabot_rules"] = I18N.zh["orgs/settings/dependabot_rules"];

I18N.zh["orgs/settings/domains"] = { // 組織設置 - 經驗證和批准的域名
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 經驗證和批准的域名 /organizations/<org-login>/settings/domains
            "Verified & approved domains": "經驗證和批准的域名",
            "Add a domain": "添加域名",
            "You can verify the domains controlled by your organization to confirm your organization's identity on GitHub. A": "您可以驗證組織控制的域，以確認組織在 GitHub 上的身份。一個",
            "badge will be added to your organization's profile page if all of the domains displayed on your profile (e.g. public email or website URL) are verified. You may also approve a domain by first adding it to the list of eligible domains. Approved domains may be used for email notification routing to users with verified emails that do not belong to a domain that you can verify.": "的徽章，您的組織的資料頁面上顯示，則表明您的資料中顯示的所有域名（例如公共電子郵箱地址或網站 URL）都經過驗證。您也可以通過，首先將一個域名添加到合格的域名列表中來批准該域名。已批准的域名可用於通過電子郵件通知具有經過驗證的郵箱地址的用戶，這些電子郵箱地址不屬於您可以驗證的域名。",
            "Learn more about verifying or approving a domain for your enterprise.": "了解更多有關驗證或批准企業域名的信息。",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/secrets"] = { // 組織設置 - 機密和變量
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 操作機密 /organizations/<org-login>/settings/secrets/actions
            "Actions secrets and variables": "操作機密和變量",
            "New organization secret": "新建組織機密",
            "Secrets and variables allow you to manage reusable configuration data. Secrets are": "秘密和變量允許您管理可重複使用的配置數據。機密是",
            "encrypted": "被加密",
            "and are used for sensitive data.": "，用於敏感數據。",
            "Learn more about encrypted secrets": "了解更多關於加密機密的信息",
            ". Variables are shown as plain text and are used for": "。變量是明文顯示，用於",
            "non-sensitive": "不敏感",
            "data.": "數據。",
            "Learn more about variables": "了解更多關於變量的信息",

            "Anyone with collaborator access to the repositories with access to a secret or variable can use it for Actions. They are not passed to workflows that are triggered by a pull request from a fork.": "任何具有協作者權限的人，只要能接觸到機密或變量，都可以將其用於操作。它們不會被傳遞到由復刻的拉取請求觸發的工作流中。",

            "Organization secrets and variables cannot be used by private repositories with your plan.": "在您的計劃中私有倉庫不能使用組織機密和變量。",
            "Please consider": "請考慮",
            "upgrading your plan": "升級您的計劃",
            "if you require this functionality.": "如果您需要此功能。",

            "Secrets": "機密",
            "Variables": "變量",

            "Organization secrets": "組織機密",
            "This organization has no secrets.": "該組織尚無機密。",

            "Visibility": "可見性",
            "Last updated": "最後更新",

            // 頂部提醒
                "Failed to add secret. Secret names can only contain alphanumeric characters ([a-z], [A-Z], [0-9]) or underscores (_). Spaces are not allowed. Must start with a letter ([a-z], [A-Z]) or underscores (_).": "添加機密失敗。機密名稱只能包含字母數字字符（[a-z]、[A-Z]、[0-9]）或下劃線 (_)。不允許有空格。必須以字母 ([a-z], [A-Z]) 或下劃線 (_) 開頭。",
                "Secret added.": "機密已添加。",
                "Secret updated.": "機密已更新。",
                "Secret deleted.": "機密已刪除。",

            // 刪除機密對話框
            "Delete secret": "刪除機密",
                "Are you sure you want to delete": "您確定要刪除",
                    "Deleting": "刪除",
                "Yes, delete this": "是的，刪除該",
                "secret": "機密",

        // 新建組織機密 /organizations/<org-login>/settings/secrets/actions/new
            "Actions secrets": "操作機密",
            "/ New secret": "/ 新建機密",
            "Add secret": "添加機密",
                "Adding…": "添加中…",

            "Name": "名稱",
            "Value": "值",

            "Repository access": "倉庫權限",
            "Public repositories": "公共倉庫",
                "This secret may be used by public repositories in the organization. Paid GitHub plans include private repositories.": "該機密可由組織中的公共倉庫使用。付費的 GitHub 計劃包括私有倉庫。",
            "Private repositories": "私有倉庫",
                "Organization secrets cannot be used by private repositories with your plan.": "在您的計劃中私有倉庫不能使用組織機密。",
            "Selected repositories": "選定的倉庫",
                "This secret may only be used by specifically selected repositories.": "該機密只能由特定倉庫使用。",
                    // [/(\d+) selected repositor(y|ies)/, "$1 個選定的倉庫"],
                // 機密倉庫訪問 對話框
                    "Secret repository access": "機密倉庫訪問",
                    "Select the organization repositories that may use this secret.": "選擇可以使用該機密的組織倉庫。",
                        "Filter repositories": "篩選倉庫",
                        "selected repository": "個選定的倉庫",
                        "selected repositories": "個選定的倉庫",
                    "Update selection": "更新選擇",

        // 更新操作機密 /organizations/<org-login>/settings/secrets/actions/<name>
            "/ Update secret": "/ 更新機密",
            "Secret values are encrypted and cannot be displayed, but you can": "機密值已加密，無法顯示，但您可以",
            "enter a new value.": "輸入一個新值。",
            "Save changes": "保存更改",
                "Updating…": "更新中…",

        // 操作變量 /organizations/<org-login>/settings/variables/actions
            "Create new organization variable": "新建組織變量",

            "Organization variables": "組織變量",
            "This organization has no variables.": "此組織尚無變量。",

            // 刪除變量對話框
            "Delete variable": "刪除變量",
                "variable": "變量",

        // 新建組織變量 /organizations/<org-login>/settings/variables/actions/new
            "Actions variables": "操作變量",
            "/ New variable": "/ 新建變量",
            "Note: Variable values are exposed as plain text. If you need to encrypt and mask sensitive information,": "注意：變量值是以純文本形式暴露的。如果您需要對敏感信息進行加密和屏蔽，請使用",
            "create a secret": "創建機密",
            "instead.": "代替。",

            "Variable names may only contain alphanumeric characters ([a-z], [A-Z], [0-9]) or underscores (_).": "變量名稱只能包含字母數字字符（[A-Z]，[A-Z]，[0-9]）或僅下劃線（_）。",
            "Variable names cannot start with a number.": "變量名稱不能以數字開頭。",
            "Variable names cannot start with": "變量名稱不能以",
            "prefix.": "前綴開頭。",

            // 變量名稱警示
                "Variable name can only contain alphanumeric characters. Special characters and spaces are not allowed.": "變量名稱只能包含字母數字字符。不允許特殊字符和空格。",
                "Variable name can only start with a letter or underscore.": "變量名稱只能以字母或下劃線開頭。",
                "Variable name cannot start with \"GITHUB_\" prefix.": "變量名稱不能以 “GITHUB_” 前綴開頭。",

            // "Public repositories": "公共倉庫",
                "This variable may be used by public repositories in the organization. Paid GitHub plans include private repositories.": "改變量可由組織中的公共倉庫使用。付費的 GitHub 計劃包括私有倉庫。",
            // "Private repositories": "私有倉庫",
                "Organization variables cannot be used by private repositories with your plan.": "在您的計劃中私有倉庫不能使用組織變量。",
            // "Selected repositories": "選定的倉庫",
                "This variable may only be used by specifically selected repositories.": "該變量只能由特定倉庫使用。",
                    // [/(\d+) selected repositor(y|ies)/, "$1 個選定的倉庫"],
                // 變量倉庫訪問 對話框
                    "Variable repository access": "變量倉庫訪問",
                    "Select the organization repositories that may use this variable.": "選擇可以使用該變量的組織倉庫。",

            "Add variable": "添加變量",

        // 更新組織變量 /organizations/<org-login>/settings/variables/actions/<name>
            "/ Update variable": "/ 更新變量",
            "Update variable": "更新變量",
                "Saving…": "保存中…",
                "Save variable": "保存變量",

        // 程式碼空間機密 /organizations/<org-login>/settings/secrets/codespaces
            "Codespaces secrets": "程式碼空間機密",
            "Development environment secrets": "開發環境機密",
                "Development environment secrets are environment variables that are": "開發環境機密是環境變量",
                "encrypted": "被加密",
                ". They are available to any codespace user with": "。任何程式碼空間用戶具有",
                "collaborator": "協作者",
                "access to the repositories with access to that secret.": "權限訪問該機密的倉庫。",

                "This organization has no development environment secrets.": "該組織尚無開發環境機密。",
                "New codespace secret": "新建程式碼空間機密",

        // Dependabot 機密 /organizations/<org-login>/settings/secrets/dependabot
            "Dependabot secrets": "Dependabot 機密",
            "Secrets are credentials that are": "機密是憑證",
            ". Anyone with": "。任何對此倉庫具有",
            "access to the repositories with access to each secret can use it for Dependabot.": "訪問權限的人都可以訪問倉庫的每個機密用於 Dependabot。",
            "Secrets are not passed to forks.": "機密不會傳遞給復刻。",

        // Dependabot 機密 /organizations/<org-login>/settings/secrets/dependabot/new
            "All repositories": "所有倉庫",
            "This secret may be used by any repository in the organization.": "組織中的任何倉庫都可以使用此機密。",
            "This secret may be used by any private repository in the organization.": "組織中的任何私有倉庫都可以使用此機密。",

    },
    "regexp": [ // 正則翻譯
        [/(\d+) selected repositor(y|ies)/, "$1 個選定的倉庫"],
    ],
};
I18N.zh["orgs/settings/variables"] = I18N.zh["orgs/settings/secrets"];

I18N.zh["orgs/settings/oauth_application_policy"] = { // 組織設置 - 第三方應用訪問策略
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 第三方應用訪問策略 /organizations/<org-login>/settings/oauth_application_policy
            "Third-party application access policy": "第三方應用訪問策略",
            "Policy:": "策略：",
                "Access restricted": "訪問受限",
                    "Only approved applications can access data in this organization. Applications owned by": "只有獲得批准的應用才能訪問該組織中的數據。應用由",
                    "always have access.": "擁有的始終可以訪問。",
                    "Remove restrictions": "解除限制",
                    // 解除限制對話框
                    "Are you sure?": "您確定嗎？",
                    "You’re about to remove all third-party application restrictions. Please read this carefully.": "您即將刪除所有第三方應用限制。請仔細閱讀。",
                    "Removing third-party application restrictions will immediately give member authorized applications access to private data in the": "取消第三方應用限制，將立即允許成員授權的應用訪問私人數據，在",
                    "Please be sure you want to do this.": "請確定您想這麼做。",
                    "Yes, remove application restrictions": "是的，取消應用限制",
                "No restrictions": "未受限",
                    "All applications authorized by organization members have access to": "所有由組織成員授權的應用都可以訪問",
                    "’s data.": "的數據。",
                    "Setup application access restrictions": "設置應用訪問限制",

            "Denied": "拒絕",
            "Approved": "已批准",

            "No pending requests": "沒有待處理的請求",
            "As members request access for specific applications, those requests will be listed here for your approval. You can start by browsing": "當成員請求訪問特定應用時，這些請求將在此處列出以供您批准。您可以瀏覽",
            "your own authorized applications": "您授權的應用",

            "When authorized, applications can act on behalf of organization members. Your access policy determines which applications can access data in your organization.": "獲得授權後，應用可以代表組織成員進行操作。您的訪問策略決定了哪些應用可以訪問您組織中的數據。",
            "Read more about third-party access and organizations.": "閱讀更多關於第三方訪問和組織的信息。",

        // 設置第三方應用訪問限制 /settings/oauth_application_policy/confirm
            "Third-party application restrictions": "第三方應用限制",
            "create an extra layer of security that allows owners to better control how applications access data in their organization.": "創建一個額外的安全層，使所有者能夠更好地控制應用如何訪問其組織中的數據。",

            "Organization owners maintain an allowlist of trusted applications.": "組織所有者維護受信任應用的允許列表。",
            "Applications owned by": "應用擁有者",
                "are always trusted.": "的應用始終受信任。",
            "Members can request organization approval for an application.": "成員可請求組織批准應用。",
            "Approval requests notify organization owners, allowing them to deny or approve application access.": "批准請求會通知組織所有者，允許他們拒絕或批准應用的訪問。",
            "Only trusted applications can:": "只有受信任的應用才能：",
                "Access private organization data via the API or SSH.": "通過 API 或 SSH 訪問私有組織數據。",
                "Change public organization data.": "更改公共組織數據。",
                "Receive webhooks for private events.": "接收私人事件的 Web 鉤子。",

            "Restrict third-party application access": "限制第三方應用訪問",
            "Restricting access will immediately block all unapproved applications and will disable SSH keys created before February 2014.": "限制訪問將立即阻止所有未經批准的應用，並禁用 2014 年 2 月前創建的 SSH 密鑰。",
            "Read more at GitHub Help.": "請訪問 GitHub 幫助了解更多信息。",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/personal-access-token"] = { // 組織設置 - 個人訪問令牌
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 個人訪問令牌 /organizations/<org-login>/settings/personal-access-tokens-onboarding
            "Restrict access via fine-grained personal access tokens": "通過精細化的個人訪問令牌限制訪問。",
                "By default, fine-grained personal access tokens cannot access content owned by your organization via the Public API or Git. This includes both public and private resources such as repositories.": "默認情況下，精細化的個人訪問令牌不能通過公共 API 或 Git 訪問您組織擁有的內容。這包括公共和私人資源，如倉庫。",
                "Allow access via fine-grained personal access tokens": "允許通過細化的個人訪問令牌進行訪問",
                    "API and Git access will be allowed using approved organization member's fine-grained personal access tokens": "API 和 Git 訪問將被允許使用經批准的組織成員的精細化個人訪問令牌",
                "Restrict access via fine-grained personal access tokens": "通過精細化的個人訪問令牌限制訪問。",
                    "Organization members will not be allowed to access your organization using a fine-grained personal access token": "不允許組織成員使用精細化的個人訪問令牌訪問您的組織",
            "Continue": "繼續",

            "Require approval of fine-grained personal access tokens": "要求批准精細化的個人訪問令牌",
                "Access requests by organization members can be subject to review by administrator before approval.": "組織成員的訪問請求在批准之前可能需要經過管理員審查。",
                "Require administrator approval": "需要管理員批准",
                    "All access requests by organization members to this organization must be approved before the token is usable.": "組織成員對該組織的所有訪問請求都必須在令牌可用之前得到批准。",
                "Do not require administrator approval": "不需要管理員批准",
                    "Tokens requested for this organization will work immediately, and organization members are not required to provide a justification when creating the token.": "為該組織申請的令牌將立即生效，並且組織成員在創建令牌時無需提供理由。",
            "Restrict access via personal access tokens (classic)": "通過個人訪問令牌限制訪問（經典）",
                "By default, personal access tokens (classic) can access content owned by your organization via the GitHub API or Git over HTTPS. This includes both public and private resources such as repositories.": "默認情況下，個人訪問令牌（經典）可以通過 GitHub API 或基於 HTTPS 的 Git 訪問您組織擁有的內容。這包括公共和私有資源，例如倉庫。",
                "Allow access via personal access tokens (classic)": "允許通過個人訪問令牌進行訪問（經典）",
                    "API and Git access will be allowed using an organization member's personal access token (classic)": "允許組織成員使用個人訪問令牌（經典）訪問 API 和 Git。",
                "Restrict access via personal access tokens (classic)": "通過個人訪問令牌限制訪問（經典）",
                    "Organization members will not be allowed to access your organization using a personal access token (classic)": "不允許組織成員使用個人訪問令牌（經典）訪問您的組織",

                "Enroll your organization": "註冊您的組織",
                    "You've selected the following options. If these don't look correct, you can go back through your previous choices before enrolling. These options can be configured at any time on the settings page.": "您已選擇以下選項。如果這些看起來不正確，您可以在註冊之前返回之前的選擇。這些選項可以隨時在設置頁面上進行配置。",
                "Enroll": "註冊",
                "Done": "完成",
                    "Your organization has been configured": "您的組織已配置",
                    "Click \"Continue\" to move on.": "點擊 “繼續”，繼續。",

                "Fine-grained personal access tokens": "精細化的個人訪問令牌",
                "Personal access token (classic)": "個人訪問令牌（經典）",

                "Are you sure you want to update your selection?": "您確定要更新您的選擇嗎？",
                // 頂部提醒
                    "Personal access tokens are now able to access your organization.": "個人訪問令牌能夠訪問您的組織。",
                    "Personal access tokens are no longer able to access your organization.": "個人訪問令牌不再能夠訪問您的組織。",
                    "All organization fine-grained personal access token requests are now subject to administrator review.": "所有組織精細化的個人訪問令牌請求現在都要經過管理員的審查。",
                    "All fine-grained personal access tokens requested for this organization will work immediately": "為該組織申請的所有精細化的個人訪問令牌將立即生效。",
                    "Personal access tokens (classic) are now able to access your organization.": "個人訪問令牌（經典）現在能夠訪問您的組織。",
                    "Personal access tokens (classic) are no longer able to access your organization.": "個人訪問令牌（經典）不再能夠訪問您的組織。",

        // 活躍的令牌  /organizations/<org-login>/settings/personal-access-tokens/active
            "Filter active fine-grained tokens": "篩選活躍的精細化令牌",
            "Tokens": "令牌",
            "Owner": "所有者",
                "Filter by owner": "按所有者篩選",
                "Filter users": "篩選用戶",

            // "Repository": "倉庫",
                "Filter by repository": "按倉庫篩選",
                "Filter repositories": "篩選倉庫",

            "Permissions": "權限",
                "Filter by permission": "按權限篩選",
                "Filter permissions": "篩選權限",
                    "read": "只讀",
                    "write": "可寫",
                    "Administration": "管理員",
                    "Code scanning alerts": "程式碼掃描警報",
                    "Codespaces lifecycle admin": "程式碼空間生命週期管理員",
                    "Codespaces metadata": "程式碼空間元數據",
                    "Codespaces secrets": "程式碼空間秘密",
                    "Commit statuses": "提交狀態",
                    "Contents": "內容",
                    "Dependabot alerts": "Dependabot 警報",
                    "Dependabot secrets": "Dependabot 機密",
                    "Deployments": "部署",
                    "Environments": "環境",
                    "Merge queues": "合併列隊",
                    "Metadata": "元數據",
                    "Repository announcement banners": "倉庫公告橫幅",
                    "Repository security advisories": "倉庫安全公告",
                    "Secret scanning alerts": "機密掃描警報",
                    "Secrets": "機密",
                    "Variables": "變量",
                    "Workflows": "工作流程",
                    "Organization": "組織",
                        "Blocking users": "拉黑用戶",
                        "Custom organization roles": "自定義組織角色",
                        "Custom repository roles": "自定義倉庫角色",
                        "Events": "活動",
                        "GitHub Copilot Business": "GitHub Copilot 商業版",
                        "Members": "成員",
                        "Organization announcement banners": "組織公告橫幅",
                        "Organization codespaces": "組織程式碼空間",
                        "Organization codespaces secrets": "組織程式碼空間機密",
                        "Organization codespaces settings": "組織程式碼空間設置",
                        "Organization dependabot secrets": "組織 Dependabot 機密",
                        "Plan": "計劃",
                        "Self-hosted runners": "自託管運行器",

            "There aren't any fine-grained tokens for this organization": "該組織尚無任何精細化令牌",

        // 精細化的個人訪問令牌請求  /organizations/<org-login>/settings/personal-access-token-requests
            "Fine-grained personal access token requests": "精細化的個人訪問令牌請求",
            "Filter fine-grained personal access tokens requests": "篩選精細化的個人訪問令牌請求",

            "Requests": "請求",

            "There aren't any personal access token requests for this organization": "該組織尚無任何個人訪問令牌的請求",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/reminders"] = { // 組織設置 - 定時提醒
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 定時提醒 /organizations/<org-login>/settings/reminders
            "No scheduled reminders created.": "未創建預定提醒。",
            "To keep projects moving, you can now remind your teams about pull requests they need to review.": "為了保持項目進展，您現在可以提醒您的團隊關於他們需要審查的拉取請求。",

            "Connect a Slack workspace to get started": "連接 Slack 工作區以開始使用",
            // 對話框
            "Add Slack workspace": "添加 Slack 工作區",
            "We have rolled out a new version of the GitHub app in Slack. If you are currently on the old app, please consider switching over to the new app! More info about migration can be found": "我們已經在 Slack 中推出了新版本的 GitHub 應用。如果您目前使用的是舊版應用，請考慮切換到新版應用！更多關於遷移的信息可以點擊",
            "here.": "這裡。",
            "1. Clicking on 'Add' will configure your Slack workspace with the new GitHub app.": "1. 點擊 “添加” 將用新的 GitHub 應用配置您的 Slack 工作區。",
            "2. If you already have the old app in Slack, it will uninstall the legacy app and install the new one.": "2. 如果您在 Slack 中已有舊應用，它將卸載舊應用並安裝新應用。",
            "Add workspace": "添加工作區",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/sponsors-log"] = { // 組織設置 - 贊助日誌
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // Sponsorship log 贊助日誌 /organizations/<org-login>/settings/sponsors-log
            "Sponsors log": "贊助日誌",
            "New sponsorships, changes, and cancellations": "新的贊助、更改和取消",
            "Period:": "週期：",
                "Filter activity": "篩選活動",
                "All-time": "所有時間",
                "Past Day": "過去一天",
                "Past Week": "過去一周",
                "Past Month": "過去一月",
                "Past Year": "過去一年",
            "No sponsorship activity in this time period": "這段時間沒有贊助活動",
            // "This is where you can review activity from your sponsorships.": "您可以在此處查看您的贊助活動。",
            // [/This is where you can review activity from ([^ ]+)'s sponsorships./ "在這裡您可以查看 $1 贊助的活動。"],
    },
    "regexp": [ // 正則翻譯
        [/This is where you can review activity from ([^ ]+)'s sponsorships./,  "在這裡您可以查看 $1 贊助的活動。"],
    ],
};

I18N.zh["orgs/settings/audit-log"] = { // 組織設置 - 審計日誌
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // Audit log 審計日誌 /organizations/<org-login>/settings/audit-log
            "Events": "活動",
            "Loading audit log entries…": "正在加載日誌條目…",
            "Filters": "篩選",
                "Filter audit logs": "篩選審計日誌",
                "Yesterday's activity": "昨日的活動",
                "Organization membership": "組織成員",
                "Team management": "團隊管理",
                "Repository management": "倉庫管理",
                "Billing updates": "帳單更新",
                "Copilot activity": "Copilot 活動",
                "Hook activity": "掛鉤活動",
                "Personal access token activity": "個人訪問令牌活動",
                "View advanced search syntax": "查看高級搜索語法",
            "Search audit logs": "搜索審計日誌",
            "Export Git Events": "導出 Git 事件",
                "Export Git events": "導出 Git 事件",
                "Export file will be limited to 100 Mb.": "導出文件將限制為 100 Mb。",
                "Select events from:": "選擇事件，從：",
                "To:": "到：",
                "Download Results": "下載結果",
            "Export": "導出",
                "Exporting": "導出中",
            "Recent events": "最近的事件",

            "Clear current search query": "清除當前搜索查詢",
            // [/Found (\d+) events?/, "找到 $1 個事件"],
            "We couldn’t find any events matching your search.": "我們未找到與您的搜索相匹配的活動。",

            "Newer": "新的",
            "Older": "舊的",

        // 源IP泄露 /organizations/<org-login>/audit-log/event_settings
            "Disclose actor IP addresses in audit logs": "在審計日誌中披露行為人 IP 地址",
            "Enable source IP disclosure": "啟用源 IP 泄露",
            "Enabling will allow you to view IP addresses of current members for organization audit log events. As this feature makes your users' IP addresses automatically available, you should review this change with your legal team to determine whether any user notification is required. When enabled at the enterprise level it will be automatically enabled for all organizations owned by the enterprise, the reverse is not true.": "啟用此功能將允許您查看組織審計日誌事件中當前成員的 IP 地址。由於此功能會自動公開用戶的 IP 地址，因此您應該與法律團隊一起審核此更改，以確定是否需要任何用戶通知。當在企業級別啟用時，它將自動為企業擁有的所有組織啟用，反之則不然。",
    },
    "regexp": [ // 正則翻譯
        [/Found (\d+) events?/, "找到 $1 個事件"],
    ],
};
I18N.zh["orgs/audit-log/event_settings"] = I18N.zh["orgs/settings/audit-log"];

I18N.zh["orgs/settings/deleted_repositories"] = { // 組織設置 - 刪除的倉庫
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 刪除的倉庫 /organizations/<org-login>/settings/deleted_repositories
            "Deleted Repositories": "刪除的倉庫",
            // [/No recoverable repositories were found for ([^ ]+)./, "沒有發現 $1 中可恢復倉庫"],
            "It may take up to an hour for repositories to be displayed here. You can only restore repositories that are not forks, or have not been forked.": "倉庫可能需要一個小時的時間才能顯示在這裡。您只能恢復沒有復刻，或沒有被復刻的倉庫。",
            "Learn more about restoring deleted repositories": "了解更多關於恢復已刪除倉庫的信息",
    },
    "regexp": [ // 正則翻譯
        [/No recoverable repositories were found for ([^ ]+)./, "沒有發現 $1 中可恢復倉庫"],
    ],
};

I18N.zh["orgs/settings/applications"] = { // 組織設置 - OAuth 應用
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // OAuth 應用 /organizations/<org-login>/settings/applications
            "No Organization Owned Applications": "沒有組織擁有的應用",
            "Do you want to develop an application that uses the": "您想開發一個應用，使用",
            "? Register an application to generate OAuth tokens.": "？註冊應用以生成 OAuth 令牌。",
            "Register an application": "註冊應用",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/apps"] = { // 組織設置 - GitHub 應用
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // GitHub 應用 /organizations/<org-login>/settings/apps
            "New GitHub App": "新 GitHub 應用",
            "Want to build something that integrates with and extends GitHub?": "想要構建與 GitHub 集成和擴展的東西嗎？",
            "Register a new GitHub App": "註冊新的 GitHub 應用",
            "to get started developing on the GitHub API. You can also read more about building GitHub Apps in our": "，開始在 GitHub API 上進行開發。您還可以在我們的文檔中閱讀有關構建 GitHub 應用的更多信息",
            "developer documentation": "開發者文檔",

            "Management": "管理人員",
            "Choose members that are allowed to manage all GitHub Apps belonging to this organization.": "選擇允許管理屬於該組織的所有 GitHub 應用的成員。",
            "Organization owner": "組織所有者",
            "Search by username or full name": "按用戶名或全名搜索",
            "Grant": "授予",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/settings/publisher"] = { // 組織設置 - GitHub 發布者驗證
    "static": { // 靜態翻譯
        ...I18N.zh["orgs-settings-menu"]["static"],

        // 發布者驗證 /organizations/<org-login>/settings/publisher
            "There must be 1 or more GitHub/OAuth App registered by the organization to request publisher verification": "組織必須有 1 個或多個 GitHub/OAuth 應用才能請求發布者驗證",
            "You can request publisher verification for your organization. A": "您可以為您的組織請求發布者驗證。一個",
            "badge will be added to your apps published in the marketplace, recognizing that apps and other published materials were created by you.": "徽章將添加到您在市場上發布的應用中，以識別應用和其他已發布材料是由您創建的。",
            "Learn more about publisher verification.": "了解更多關於發布者驗證的信息。",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["projects"] = { // 項目頁面(含倉庫項目)
    "static": { // 靜態翻譯
        // >>>>>>>>>>>>>>>>>>倉庫 公共部分<<<<<<<<<<<<<<<<<<<<<<<<<<<
            // 頭部條
            "forked from": "復刻自",
            "mirrored from": "鏡像自",

            "Unpin": "取消置頂",
            "Ignoring": "忽略",
            "Stop ignoring": "取消忽略",
            "Watch": "關注",
            "Unwatch": "取消關注",

            "Star": "星標",
            "Unstar": "已加星標",
            "Fork": "復刻",
            "Unfork": "取消復刻",

            // 贊助對話框
            "External links": "外部鏈接",
            "Learn more about funding links in repositories": "了解更多關於倉庫中的贊助鏈接的信息",
            "Report abuse": "舉報濫用",

            // 關注 & 訂閱通知設置 下拉菜單
            "Notifications": "通知類型",
            "Participating and @mentions": "參與和 @您",
            "Only receive notifications from this repository when participating or @mentioned.": "僅在參與或 @您時接收來自此倉庫的通知。",
            "All Activity": "所有活動",
            "Notified of all notifications on this repository.": "接收來自此倉庫所有通知。",
            "Ignore": "忽略",
            "Never be notified.": "永不接收通知。",
            "Custom": "自定義",
            "Select events you want to be notified of in addition to participating and @mentions.": "選擇除參與和 @您之外還要接收通知的事件。",
            "Discussions are not enabled for this repo": "此倉庫未啟用討論功能",
            // "Releases": "發行版",
            // "Discussions": "討論",
            "Security alerts": "安全警報",
            //"Cancel": "取消",
            "Apply": "應用",

            // 復刻下拉
            "Existing forks": "現有的復刻",
            "You don't have any forks of this repository.": "您沒有此倉庫的任何復刻。",
            "Create a new fork": "創建復刻",

            // 標籤欄
            "Code": "程式碼",
            "Pull requests": "拉取請求",
            "Discussions": "討論",
            "Actions": "操作",
            "Projects": "項目",
            "Security": "安全",
            "Insights": "洞察",
            "Settings": "設置",

            // 鍵盤快捷鍵
                "Open in codespace"  : "在程式碼空間中打開",
                "Open in github.dev editor"  : "在 github.dev 編輯器中打開",
                "Open github.dev editor in a new tab"  : "在新標籤頁中打開 github.dev 編輯器",
                "Open cs.github.com in a new tab": "在新標籤頁中打開 cs.github.com",
                "Focus secondary search bar" : "聚焦二級搜索欄",
                "Go to Code"                 : "跳轉到程式碼",
                "Go to Issues"               : "跳轉到議題",
                "Go to Pull Requests"        : "跳轉到拉取請求",
                "Go to Actions"              : "跳轉到操作",
                "Go to Projects"             : "跳轉到項目",
                "Go to Wiki"                 : "跳轉到 Wiki",
                "Go to Discussions"          : "跳轉到討論",

        // 公共詞 簡版 議題&拉取請求信息
            "opened by": "打開者",
            "Opened in": "打開在",
            "commented": "評論於",
            "Show less": "顯示更少",
            "Show more": "顯示更多",
            "Assignees": "受理人",
                "No one assigned": "無人受理",
            "Labels": "標籤",
            "Milestone": "里程碑",
                "No milestone": "尚無里程碑",
            "Linked pull requests": "關聯的拉取請求",
                "Successfully merging a pull request may close this issue.": "成功合併一個拉取請求可能會關閉此議題。",
            "None yet": "暫無",
            "Go to issue for full details": "跳轉到議題以獲取完整詳細信息",

            "Loading details…": "載入細節…",

        // 新建項目 https://github.com/new/project
          //同 倉庫 新建項目頁面  /<user-name>/<repo-name>/projects/new
            "Create a new classic project": "創建經典項目",
            "Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.": "在這裡協調、跟蹤和更新您的工作，使項目保持透明，並按計劃進行。",
            "Project board name": "項目面板名稱",
            "Description": "描述",
            "(optional)": "(可選)",
            "Project template": "項目模板",
            "Save yourself time with a pre-configured project board template.": "使用預先配置的項目面板模板可為您節省時間。",
            "Template:": "模板：",
                "Templates": "模板",
                "None": "無",
                    "Start from scratch with a completely blank project board. You can add columns and configure automation settings yourself.": "從一個完全空白的項目面板開始。您可以自己添加欄目並配置自動化設置。",
                "Basic kanban": "基礎看板",
                    "Basic kanban-style board with columns for To do, In progress and Done.": "基礎風格看板，帶有待辦、進行中和已完成等欄目。",
                "Automated kanban": "自動化看板",
                    "Kanban-style board with built-in triggers to automatically move issues and pull requests across To do, In progress and Done columns.": "帶有內置觸發器的風格看板，可以自動將議題和拉取請求移到待辦、進行中和已完成欄目中。",
                "Automated kanban with reviews": "帶審查的自動看板",
                    "Everything included in the Automated kanban template with additional triggers for pull request reviews.": "除了包含自動化看板模板中的所有內容，還有拉取請求審查的額外觸發器。",
                "Bug triage": "BUG 分類",
                    "Triage and prioritize bugs with columns for To do, High priority, Low priority, and Closed.": "使用待辦事項、高優先級、低優先級和已關閉的欄目對錯誤進行分類和優先級排序。",
            "Visibility": "可見性",
                // "Public": "公共",
                    "Anyone on the internet can see this project. You choose who can make changes.": "互聯網上的任何人都可以看到這個項目。您選擇誰可以進行更改。",
                "Private": "私有",
                    "You choose who can see and make changes to this project.": "您可以選擇誰可以查看此項目並對其進行更改。",
            "Linked repositories": "關聯的倉庫",
                "Search": "搜索",
                "to link repositories to this project for more accurate suggestions and better search results.": "將倉庫關聯到此項目，以獲得更準確的建議和更好的搜索結果。",
                "Search by repository name": "搜索倉庫名",
                "You've reached the limit of 25 linked repositories.": "您已經達到了 25 個關聯倉庫的上限。",
                "Linked repositories:": "關聯的倉庫",
                "None yet!": "啥也木有！",
            "Create project": "創建項目",

        // 倉庫 項目頁面  /<user-name>/<repo-name>/projects >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            "Welcome to the all-new projects": "歡迎訪問全新的項目",
            "Built like a spreadsheet, project tables give you a live canvas to filter, sort, and group issues and pull requests. Tailor them to your needs with custom fields and saved views.": "構建像電子表格一樣的項目表，給您一個實時的畫布來對議題和拉取請求進行篩選、排序和分組。通過自定義字段和保存的視圖，使它們符合您的需要。",

            "This repository doesn't have any projects yet": "該倉庫目前沒有任何項目",
            "Create a project": "創建一個項目",

            "Organize your issues with project boards": "使用項目面板組織您的議題",
            "Did you know you can manage projects in the same place you keep your code? Set up a project board on GitHub to streamline and automate your workflow.": "您知道您可以在保存程式碼的同一個地方管理項目嗎？在 GitHub 上設置項目面板以簡化和自動化您的工作流程。",

            "Sort tasks": "排序任務",
            "Add issues and pull requests to your board and prioritize them alongside note cards containing ideas or task lists.": "將議題和拉取請求添加到您的看板中，並將它們與包含想法或任務清單的筆記卡一起進行優先排序。",
            "Plan your project": "規劃項目",
            "Sort tasks into columns by status. You can label columns with status indicators like \"To Do\", \"In Progress\", and \"Done\".": "將任務按狀態分類成列。您可以用 “待辦”、“進行中” 和 “已完成” 等狀態指標給各欄貼上標籤。",
            "Automate your workflow": "自動化工作流程",
            "Set up triggering events to save time on project management—we’ll move tasks into the right columns for you.": "設置觸發事件，以節省項目管理的時間——我們將為您把任務移到正確的欄目中。",
            "Track progress": "追蹤進度",
            "Keep track of everything happening in your project and see exactly what’s changed since the last time you looked.": "追蹤項目中發生的一切，並準確查看自上次查看以來發生的變化。",
            "Share status": "共享狀態",
            "Each card has a unique URL, making it easy to share and discuss individual tasks with your team.": "每張卡片都有一個唯一的 URL，可以輕鬆地與您的團隊共享和討論個人任務。",
            "Wrap up": "結束工作",
            "After you wrap up your work, close your project board to remove it from your active projects list. On to the next project!": "結束工作後，關閉項目面板，並從活動項目列表中刪除。進入下一個項目！",

            "Try the": "嘗試",
            "new projects today.": "新版項目。",
            "Repository access coming soon ✨": "倉庫訪問即將推出 ✨",

            "Sort": "排序",
            "Sort by": "排序方式",
                // 排序下拉菜單
                "Newest": "最新",
                "Oldest": "最早",
                "Recently updated": "近期更新內容",
                "Least recently updated": "最近最少更新",
                "Name": "名稱",
            // 清除篩選
            "Clear current search query, filters, and sorts": "清除當前的搜索查詢、篩選器和排序方式",

            "No description": "無描述",
            "Close": "關閉",
            "Closed": "已關閉",
            "Reopen": "重新打開",

            // 頂部提醒
            "Project closed.": "項目已關閉。",
            "Project reopened.": "項目已重新打開。",

        // https://github.com/users/<user-name>/projects/<id>
            // 鍵盤快捷鍵
                "Project card shortcuts": "項目卡快捷鍵",
                    "Open the issue or pull request associated with the focused card in the sidebar": "聚焦卡片的側邊欄中打開相關聯的議題或拉取請求",
                "Moving a card": "移動卡片",
                    "Start moving the focused card": "開始移動聚焦卡片",
                    "Cancel the move in progress": "取消正在進行的移動",
                    "Complete the move in progress": "完成正在進行的移動",
                    "Move card down": "向下移動卡片",
                    "Move card to the bottom of the column": "移動到項目欄底部",
                    "Move card up": "向上移動卡片",
                    "Move card to the top of the column": "移動到項目欄頂部",
                    "Move card to the bottom of the column on the left": "移動到左側項目欄底部",
                    "Move card to the top of the column on the left": "移動到左側項目欄頂部",
                    "Move card to the bottom of the leftmost column": "移動到最左側項目欄底部",
                    "Move card to the top of the leftmost column": "移動到最左側項目欄頂部",
                    "Move card to the bottom of the column on the right": "移動到右側項目欄底部",
                    "Move card to the top of the column on the right": "移動到右側項目欄頂部",
                    "Move card to the bottom of the rightmost column": "移動到最右側項目欄底部",
                    "Move card to the top of the rightmost column": "移動到最右側項目欄頂部",
                "Moving a column": "移動欄目",
                    "Start moving the focused column": "開始移動聚焦欄目",
                    "Move column to the left": "將欄目移到左側",
                    "Move column to the leftmost position": "將欄目移到最左側",
                    "Move column to the right": "將欄目移到右側",
                    "Move column to the rightmost position": "將欄目移到最右側",
            // 頂部提醒
            "Project created from Basic kanban template.": "已從基礎看板模板創建項目。",

            "Updated": "更新於",
            "Filter cards": "篩選卡片",
                "Narrow your search": "縮小搜索範圍",
            // 工具欄
            "Add cards": "添加卡片",
                "You can use the filters available in": "您可使用的篩選器在",
                "issue search": "議題搜索",
                "Loading search results…": "載入搜索結果…",
                "Search results": "搜索結果",
                "More": "更多",
                "Loading more...": "載入更多...",
            "Fullscreen": "全屏",
            "Exit fullscreen": "退出全屏",
            "Menu": "菜單",
                "This project doesn’t have a description.": "該項目沒有描述。",
                "Add description": "添加描述",
                "Close project": "關閉項目",
                    "Are you sure you want to close": "您確定要關閉",
                "Activity": "活動",
                // ... 展開
                "Copy": "複製",
                "Loading activity": "載入活動",
                "View archive": "查看活動",
                "Showing all activity": "顯示所有活動",
            // 活動 狀態詞
                "added": "添加了",
                "created the project": "創建了項目",
                "updated the project": "更新了項目",
                "created the column": "創建了欄目",
                "To do.": "待辦。",
                "Done.": "已完成。",
                "In progress.": "進行中。",
                "archived": "存檔了",
                "restored": "恢復了",
                "moved": "移動了",
                "from": "來自",
                "From": "來自",

            // 編輯對話框
                "Edit project": "編輯項目",
                "Name": "名稱",
                "Description": "描述",
                "Track project progress": "跟蹤項目進度",
                    "A progress bar will be displayed to help you visualize the overall progress of your project based on your automated To Do, In Progress, and Done columns.": "將顯示一個進度條，以幫助您根據您的自動化的待辦、進行中和已完成欄目，直觀地了解項目的總體進展。",
                "Save project": "保存項目",
                // [/Delete/, "刪除"],
                "Once you delete a project, there is no going back. Please be certain.": "刪除項目後，將無法撤回。請確認。",
                "Delete project": "刪除項目",

            // 複製項目
                "Copy project board": "複製項目面板",
                "Your copy of this project includes column names and positions. Cards will not be copied.": "此項目的副本包括欄目名稱和位置。卡片不會被複製。",
                "Owner": "所有者",
                    "Choose an owner": "選擇所有者",
                    "Search organizations and repositories": "搜索組織和倉庫",
                    "Suggested": "建議",
                    "Everything else": "其他一切",
                "Project board name": "項目面板名稱",
                "Copy project": "複製項目",

            // 存檔的卡片
                "Archived cards": "存檔的卡片",
                "Loading archived cards…": "載入存檔的卡片…",
                "Show all archived cards": "顯示所有存檔卡片",
                "Filter by note or issue title": "按注釋或提議標題篩選",
                "Column:": "欄目：",
                    "All": "所有",
                "Restore": "恢復",
                "No archived cards": "無存檔卡片",
                "You haven't archived any cards yet.": "您尚未歸檔任何卡片。",

            "This project doesn’t have any columns or cards.": "該項目沒有任何欄目或卡片。",

            "Add a column": "添加欄目",
            "Add column": "添加欄目",
                "Column name": "欄目名稱",
                "Enter a column name (To Do, In Progress, Done)": "輸入欄目名稱（待辦、進行中、已完成）",
                "Automation": "自動化",
                "Choose a preset to enable progress tracking, automation, and better context sharing across your project.": "選擇預設值，以便在您的項目中實現進度跟蹤、自動化和更好的內容共享。",
                "Loading…": "載入中…",
                "Preset:": "預設：",
                    "Select type": "選擇類型",
                    "None": "無",
                        "This column will not be automated": "本欄目將不會自動化",
                    "To do": "待辦",
                        "Planned but not started": "已計劃但未開始",
                        "Move issues here when…": "當…時，將議題移至此處",
                            "Newly added": "新添加的",
                                "Issues will automatically move here when added to this project.": "添加到此項目時，議題將自動移至此處。",
                            "Reopened": "重新打開",
                                "If a closed issue in this project reopens, it will automatically move here.": "如果此項目中已關閉的議題重新打開，它將自動移至此處。",
                        "Move pull requests here when…": "當…時，將拉取請求移到此處",
                            "Pull requests will automatically move here when added to this project.": "添加到此項目時，拉取請求將自動移至此處。",
                            "If a closed pull request in this project reopens, it will automatically move here.": "如果此項目中已關閉的拉取請求重新打開，它將自動移至此處。",
                    "In progress": "進行中",
                        "Actively being worked on": "正在積極開展工作",
                        "Approved by reviewer": "由審查者批准",
                        "Pull requests in this project will automatically move here when they meet the minimum number of required approving reviews. Recommended when another column has the": "當該項目中的拉取請求達到所需的最低批准審查數時，將自動移至此處。當另一欄啟用了 “",
                        "automation enabled.": "” 的自動化功能時推薦使用。",
                        "Pending approval by reviewer": "由審查者待批准",
                        "Pull requests in this project will automatically move here when a reviewer requests changes, or it no longer meets the minimum number of required approving reviews. Recommended when another column has the": "當審查者請求更改或不再滿足所需的最小批准審查數時，此項目中的拉取請求將自動移至此處。當另一欄目啟用了 “",
                    "Done": "已完成",
                        "Items are complete": "項目已完成",
                        "Closed": "已關閉",
                            "If an open issue in this project is closed, it will automatically move here.": "如果該項目中的一個打開的議題被關閉，它將自動轉移到這裡。",
                        "Merged": "已合併",
                            "If an open pull request in this project is merged, it will automatically move here.": "如果該項目中的一個打開的拉取請求被合併，它將自動轉移到這裡。",
                        "Closed with unmerged commits": "已關閉的未合併的提交",
                            "If an open pull request in this project is closed with unmerged commits, it will automatically move here.": "如果該項目中的一個打開的拉取請求因未合併提交而關閉，它將自動移到這裡。",
                "Create column": "創建欄目",

            "Edit column": "編輯欄目",
            "Manage automation": "管理自動化",
            "Archive all cards": "存檔所有卡片",
                "Archiving cards...": "存檔卡片...",
            "Copy column link": "複製欄目鏈接",
            "Delete column": "刪除欄目",

            // "Manage automation for To do": "管理待辦的自動化",
            // "Manage automation for In progress": "管理進行中的自動化",
            // "Manage automation for Done": "管理已完成的自動化",
            "Update automation": "更新自動化設置",

            "Add a note to this column": "向此欄目添加注釋",
            "Enter a note": "輸入注釋",
            "Add": "添加",

            // "Edit To do": "編輯 “待辦”",
            // "Edit In progress": "編輯 “進行中”",
            // "Edit Done": "編輯 “已完成”",
            "Update column": "更新欄目",

            "Cards": "卡片",
            "Automation": "自動化",

            // "Archive all cards in To do": "存檔所有 “待辦” 卡片",
            // "Archive all cards in In progress": "存檔所有 “進行中” 卡片",
            // "Archive all cards in Done": "存檔所有 “已完成” 卡片",
            "Are you sure you want to archive all cards in the": "您確定要將存檔所有卡片",
            "column? You will not be able to undo this action.": "欄目？您將無法撤消此操作。",

            // "Delete To do": "刪除 “待辦” ",
            // "Delete In progress": "刪除 “進行中” ",
            // "Delete Done": "刪除 “已完成” ",
            "This action will remove any cards and automation preset associated with the column.": "此操作將刪除與該列關聯的所有卡片和自動化預設。",

            "Copy card link": "複製卡片鏈接",
            "Convert to issue": "轉換為議題",
                "Convert note to issue": "轉換注釋為議題",
                "Repository": "倉庫",
                    "Choose a repository for this issue": "為這個議題選擇一個倉庫",
                    "Find a repository": "查找倉庫",
                    "Title": "標題",
                    "Body": "內容",
            "Edit note": "編輯注釋",
                "Note": "注釋",
                "Save note": "保存注釋",
            "Archive": "存檔",
            "Delete note": "刪除注釋",
                "This will remove this note from the project": "這將從項目中刪除該注釋",

        // 自動化看板模板項目 https://github.com/users/<user-name>/projects/<id>?add_cards_query=is%3Aopen
            // 頂部提醒
            "Project created from Automated kanban template.": "已從自動化看板模板創建項目。",

            "Automated as": "自動化為",
            "Manage": "管理",

            // 管理自動化 補充
            "The": " ",
            "column is already using this rule.": "欄目已在使用此規則。",

            // 複製項目面板 補充
            "Your copy of this project includes column names, positions, and automation settings. Cards will not be copied.": "此項目的副本包括欄目名稱、位置和自動化設置。卡片不會被複製。",
            "Automation settings": "自動化設置",
            "Copy automation settings.": "複製自動化設置。",
            "Includes automation settings for": "包括自動化設置，關於",
            "To do, In progress, and Done": "待辦、進行中和已完成",


            "Pull Request closed without merge": "拉取請求關閉而不合併",
            "Pull Request merged": "合併拉取請求",
            "Issue closed": "議題已關閉",
            "Pull Request reopened": "拉取請求已重新打開",
            "Issue reopened": "議題已重新打開",
            "Pull Request pending card added": "添加了拉取請求待辦卡",
            "Issue pending card added": "添加了議題待辦卡",

            "automation": "自動化",
            "to the": "到",
            "column.": "欄目。",

        // 自動看板與審查模板項目 https://github.com/users/<user-name>/projects/<id>?add_cards_query=is%3Aopen
            // 頂部提醒
            "Project created from Automated kanban with reviews template.": "已從自動看板與審查模板創建項目。",

        // 錯誤分類模板項目 https://github.com/users/<user-name>/projects/<id>?add_cards_query=is%3Aopen
            // 頂部提醒
            "Project created from Bug triage template.": "已從錯誤分類模板創建項目。",

            "Needs triage": "需要分流",
            "High priority": "高優先級",
            "Low priority": "低優先級",

        // https://github.com/users/<user-name>/projects/<id>/settings
            "Collaboration settings": "協作設置",
                "Options": "選項",
                    "Visibility": "可見性",
                    "Visibility settings only impact the project itself. Project content that belongs to a repository the user does not have access to will be redacted.": "可見性設置隻影響項目本身。屬於用戶無權訪問的倉庫的項目內容將被編輯。",
                    "Public": "公開",
                        "Anyone on the internet can see this project. You choose who can make changes.": "互聯網上的任何人都可以看到這個項目。您選擇誰可以進行更改。",
                    "Private": "私密",
                        "You choose who can see and make changes to this project.": "您可以選擇誰查看此項目並對其進行更改。",
            // 協作者
                "This project doesn’t have any collaborators yet. Use the form below to add a collaborator.": "該項目還沒有任何協作者。使用下面的表格添加協作者。",
                "Search by username, full name or email address": "搜索用戶名、全名、或電子郵箱",

                "You’ll only be able to find a GitHub user by their email address if they’ve chosen to list it publicly. Otherwise, use their username instead.": "只有當 GitHub 用戶選擇公開電子郵箱地址時，您才能通過他們的電子郵箱地址找到他們。否則，請使用他們的用戶名代替。",
                "Add collaborator": "Add collaborator",
                // [/isn’t a GitHub member/, "不是 GitHub 成員"],
            "Linked repositories": "關聯的倉庫",
                "Link a repository": "關聯倉庫",
                "Get more accurate suggestions and better search results by linking up to 25 repositories to this project.": "通過將多達 25 個倉庫關聯到這個項目，獲得更準確的建議和更好的搜索結果。",
                // [/(\d+) linked repositories/, "$1 個關聯倉庫"],
                "This project doesn’t have any linked repositories yet.": "該項目暫無任何關聯的倉庫。",

        // https://github.com/users/<user-name>/projects/<id>/edit
            "(optional)": "(可選)",
            "Once you delete this project, there is no going back. Please be certain.": "一旦您刪除了這個項目，就再也無法恢復。請確認。",

        ...projects,
    },
    "regexp": [ // 正則翻譯
        [/Delete/, "刪除"],
        [/Edit/, "編輯"],
        [/Manage automation for/, "管理自動化"],
        [/Archive all cards in/, "存檔所有"],
        [/(\d+) linked repositories/, "$1 個關聯倉庫"],
        [/([\d,]+) Open/, "$1 打開"], // 項目標籤卡
        [/([\d,]+) Closed/, "$1 已關閉"],
        [/(\d+) tasks? done/, "$1 個任務完成"],
    ],
};

I18N.zh["new/project"] = I18N.zh["projects"];
I18N.zh["repository/projects/new"] = I18N.zh["projects"];

I18N.zh["redeem"] = { // 兌換頁面
    "static": { // 靜態翻譯
        "Enter coupon code": "輸入優惠券程式碼",
        "Redeem": "兌換",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["github-copilot/signup"] = { // GitHub Copilot 個人版獲取頁面
    "static": { // 靜態翻譯

        // https://github.com/github-copilot/signup
           "GitHub Copilot Individual": "GitHub Copilot 個人版",
           "The world's most widely adopted AI developer tool.": "世界上採用最廣泛的人工智能開發工具。",
           "GitHub Copilot is powered by generative AI to help you code faster and happier!": "GitHub Copilot 是由生成式 AI 驅動的，旨在幫助您更快樂、更高效地編碼！",
           "Start your 30-day free trial": "開始 30 天免費試用",
               //"GitHub Copilot uses the GPT-3.5 Turbo model to offer coding suggestions.": "GitHub Copilot 使用 GPT-3.5 Turbo 模型提供編碼建議。",
               "Chat with Copilot for assistance on a wide variety of scenarios, such as project-specific code explanations or help with debugging": "與 Copilot 聊天以獲取有關各種場景的幫助，例如特定於項目的程式碼解釋或調試幫助",
               "Get code suggestions as you type in more than a dozen coding languages, including Python, JavaScript, TypeScript, Go, and Ruby": "支持超過十種編程語言的程式碼建議，包括 Python、JavaScript、TypeScript、Go 和 Ruby。",
               "Plugs into IDEs, including VS Code, Visual Studio, JetBrains IDEs, and Neovim": "可以與包括 VS Code、Visual Studio、Neovim 和 JetBrains 在內的集成開發環境（IDE）配合使用",
               "Sign up for an annual subscription and get two months free!": "註冊年度訂閱，可享受兩個月免費福利。",
               "Cancel anytime before the trial ends to avoid getting billed": "在試用期結束前隨時取消，以避免收費。",

           "Pay frequency after trial": "試用結束後付費頻率",
               "Monthly plan": "月度計劃",
               "/month": "/ 月",
               "Yearly plan": "年度計劃",
               "Save $20!": "節省 $20 ！",
               "/year": "/ 年",

            "Or get GitHub Copilot from an organization": "您可以通過組織獲取 GitHub Copilot",
                "Organizations can provide their members (including you) and their teams access to GitHub Copilot.": "組織可以為其成員（包括您）和團隊提供訪問 GitHub Copilot 的權限。",
                "Access Copilot from an organization": "從組織中訪問 GitHub Copilot。",

           "Get access to GitHub Copilot": "獲取 GitHub Copilot 使用權限",

           "Next: Confirm your payment details": "下一步：確認您的付款詳細信息",

           "GitHub Copilot is free for maintainers of popular open source software on GitHub and verified students. Check out the": "GitHub Copilot 對於在 GitHub 上維護流行開源軟件的人員和經過驗證的學生是免費的。您可以查看",
           "free use FAQ": "免費使用常見問題解答（FAQ）",
           "for more details.": "以獲取更多詳細信息。",

    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["orgs/enterprise_plan"] = { // 企業版訂閱頁面
    "static": {
        "Pick your trial plan": "選擇您的試用計劃",
        "Recommended": "推薦",
            "Enterprise Cloud": "企業雲",
                "Build and deploy to GitHub-hosted cloud environments, directly from your repositories.": "直接從您的倉庫構建並部署到 GitHub 託管的雲環境。",
            "Enterprise Server": "企業服務器",
                "Manage and deploy GitHub Enterprise on your own servers, including AWS, Azure, or GC": "在您自己的服務器（包括 AWS、Azure 或 GC）上管理和部署 GitHub 企業版",
        "Why teams": "為何團隊",
        "it: Get started in minutes, and leave the infrastructure to us.": "它：只需幾分鐘即可開始使用，基礎設施則交給我們來處理。",
        "it: Control where your code and data live in a private cloud.": "它：控制您的程式碼和數據在私有雲中的存放位置。",
    },
    "regexp": [ // 正則翻譯
    ],
};

I18N.zh["codespaces"] = { // 程式碼空間頁面
    "static": {
        // https://github.com/codespaces
            "All": "所有",
            "Templates": "模版",
            "By repository": "按倉庫",
                "Created from a template": "通過模板創建",

            "Your instant dev environment": "您的即時開發環境",
            "Go from code to commit faster on any project.": "在任何項目中，從程式碼到提交速度更快。",
            "Go to docs": "轉到文檔",
            "New codespace": "新建程式碼空間",
            "Explore quick start templates": "瀏覽快速入門模板",
            "See all": "查看所有",
            "Use this template": "使用此模版",
            "Getting started with GitHub Codespaces": "GitHub 程式碼空間入門",
            "Learn core concepts": "學習核心概念",
            "Configure and manage": "配置和管理",
            "Develop locally": "在本地開發",
            "New to Codespaces?": "剛接觸程式碼空間？",
            "Start here": "從這裡開始",
            ". Learn the core concepts and how to get started.": "。學習核心概念以及如何開始。",
            "Learn more about features like": "了解更多關於功能的信息，例如",
            "secret management": "機密管理",
            "port forwarding": "端口轉發",
            "Access codespaces from within": "從內部訪問程式碼空間，使用",

            "Retrieving…": "正在檢索…",
            "Active": "活躍",
            "Last used": "上次使用",
            "Show more actions for codespace": "顯示程式碼空間的更多操作",
                "Rename": "重命名",
                    "Rename codespace": "重命名程式碼空間",
                    "Name": "名稱",
                "Export changes to a branch": "將更改導出到分支",
                    "This will create a new branch with any unpushed changes": "這將創建一個包含任何未推送更改的新分支",
                    "Checking branch status": "檢查分支情況",
                    "Create branch": "創建分支",
                "Export changes to a fork": "將更改導出到復刻",
                    "You do not have write access to this codespace's repository. This will create a new fork of the repository at": "您沒有對此程式碼空間的存儲庫的寫訪問權限。這將創建一個新的存儲庫分支在",
                    ", reassign your codespace to that fork, and export your changes to a new branch.": "，將程式碼空間重新分配給該復刻，並將更改導出到新分支。",
                    "Create fork": "創建復刻",
                "Publish to a new repository": "發布到新倉庫", // 從模板創建
                    "This will create a new repository and push up your work.": "這將創建一新倉庫，並推送您的工作。",
                    // 公共
                        "Anyone on the internet can see this repository. You choose who can commit.": "互聯網上的任何人都可以看到該倉庫。您可以選擇誰可以提交。",
                    // 私有
                        "You choose who can see and commit to this repository.": "您選擇誰可以查看並提交到此倉庫。",
                    "Create repository": "創建倉庫",
                "Change machine type": "修改機器類型",
                    "Change codespace machine type": "修改程式碼空間機器類型",
                        "Machine type": "機器類型",
                            "2-core": "雙核",
                            "8GB RAM • 32GB": "8GB 內存 • 32GB 硬盤",
                            "4-core": "四核",
                            "16GB RAM • 32GB": "16GB 內存 • 32GB 硬盤",
                        "Update codespace": "更新程式碼空間",
                "Stop codespace": "停止程式碼空間",
                "Delete": "刪除",
                    "Are you sure?": "您確定嗎？",
                "Auto-delete codespace": "自動刪除程式碼空間",
                "Open in Browser": "在瀏覽器中打開",
                "Open in Visual Studio Code": "在 Visual Studio Code 中打開",
                "Open in JetBrains Gateway": "在 JetBrains Gateway 中打開",
                "Open in JupyterLab": "在 JupyterLab 中打開",

            "Created from": "創建自",
            "2-core • 8GB RAM • 32GB": "雙核 • 8GB 內存 • 32GB 硬盤",
            "4-core • 16GB RAM • 32GB": "四核 • 16GB 內存 • 32GB 硬盤",

        // https://github.com/codespaces/templates
            "Choose a template": "選擇模版",
            "Start a codespace from a template and get to developing with the power of a virtual machine in the cloud.": "從模板開始創建程式碼空間，然後利用雲中虛擬機的能力進行開發。",
            "Use this template": "使用此模版",

        // https://github.com/codespaces/new
            "Create a new codespace": "新建程式碼空間",
            "Codespace usage for this repository is paid for by": "該倉庫的程式碼空間使用費由以下人員支付",
            "Repository": "倉庫",
                "To be cloned into your codespace": "要被克隆到您的程式碼空間",
                "Select a repository": "選擇倉庫",
                "Search for a repository": "查找倉庫",
            "Branch": "分支",
                "This branch will be checked out on creation": "創建時將顯示此分支",
                "Default branch": "默認分支",
                "Select branch": "選擇分支",
                "Find a branch": "查找分支",
            "Region": "區域",
                "Your codespace will run in the selected region": "您的程式碼空間將在所選區域運行",
                "US East": "美國東部",
                "US West": "美國西部",
                "Europe West": "歐洲西部",
                "Southeast Asia": "東南亞",
                "Australia": "澳大利亞",
            "Machine type": "機器類型",
                "Resources for your codespace": "程式碼空間的資源",
                "None": "無",
                "2-core": "雙核",
                "8GB RAM • 32GB": "8GB 內存 • 32GB 硬盤",
                "4-core": "四核",
                "16GB RAM • 32GB": "16GB 內存 • 32GB 硬盤",
            "Dev container configuration": "開發容器配置",
                "Your codespace will use this configuration": "您的程式碼空間將使用此配置",
            "Create codespace": "新建程式碼空間",
            "Creating codespace": "新建程式碼空間中",

        // https://github.com/codespaces/new?hide_repo_select=true&ref=<branch-name>&repo=<repo-id>
            "Create codespace for": "創建程式碼空間",

        // 在拉取請求上創建程式碼空間 https://github.com/codespaces/new/<user-name>/<repo-name>/pull/<pull-id>?resume=1
            "Get started with development in the cloud from an existing repository or a template.": "從現有倉庫或模板開始雲開發。",
            "Find out more about codespaces.": "了解更多關於程式碼空間的信息。",

            // 警示
                "You cannot create a codespace on a closed pull request. Please reopen it if you wish to create a new codespace.": "您無法在已關閉的拉取請求上創建程式碼空間。如果您想創建新的程式碼空間，請重新打開它。",

            "No codespace to resume": "沒有可恢復的程式碼空間",
                "You don't have a codespace matching these settings. You can continue to create a new one or customize your settings.": "您沒有符合這些設置的程式碼空間。您可以繼續創建一個新空間或自定義設置。",

            "Change options": "更改選項",
            "new codespace": "新程式碼空間",
    },
    "regexp": [
        [/By ([^ ]+)/, "$1 發布"],
        [/Owned by ([^ ]+)/, "擁有者為 $1"],
        [/Last used (\d+) days ago/, "上次使用 $1 天前"],
        [/Last used 大約 (\d+) 小時之前/, "上次使用大約 $1 小時以前"],
        [/Last used less than (\d+) 分鐘之前/, "上次使用小於 $1 分鐘以前"],
        [/Last used (\d+) 分鐘之前/, "上次使用 $1 分鐘以前"],
        [/Codespace "([^ ]+)" stopped./, "程式碼空間 “$1” 停止。"],
        [/Your codespace "([^ ]+)" will no longer be auto-deleted./, "您的程式碼空間 “$1” 將不再自動刪除。"],
    ],
};

I18N.zh["developer/register"] = { // 開發者註冊
    "static": {
        // https://github.com/developer/register
            // 標題
                "Register for the": "註冊",
                "GitHub Developer Program": "GitHub 開發者計劃",
                "The best way to integrate with GitHub.": "與 GitHub 集成最佳方法。",
            // 註冊表單
                "Select an account": "選擇賬戶",
                    "Select an account to register": "選擇一個賬戶進行註冊",
                    "You don’t belong to any organizations.": "您不屬於任何組織。",
                    "Create Organization": "創建組織",
                    "Support email address": "技術支持電子郵件地址",
                    "An email address where GitHub users can contact you for support.": "供 GitHub 用戶聯繫您尋求支持的電子郵件地址。",
                "Product or company website": "產品或公司網站",
                    "The URL for the product, company, or service that integrates with GitHub.": "與 GitHub 集成的產品、公司或服務的網址。",
                    "Website can't be blank": "網站不能為空",
            // 免責聲明
                "By clicking “Register for the GitHub Developer Program” below, you agree to the": "點擊 “註冊 GitHub 開發者計劃”，表示您已閱讀並同意",
                "developer terms of service": "開發者服務條款",
                "and the": "和",
                "privacy statement": "隱私聲明",
                ". We’ll occasionally send you account related emails.": "。我們會偶爾向您發送與帳戶相關的電子郵件。",

            "Register for the GitHub Developer Program": "註冊 GitHub 開發者計劃",

            "Program Benefits": "開發者權益",
                "Notification of API changes": "API 更改通知",
                "Early access eligibility on select features": "獲得部分功能的搶先體驗資格",
                "Eligibility for development licenses for GitHub products": "獲得 GitHub 產品的開發許可資格",
                "GitHub profile membership badge": "GitHub 個人資料成員徽章",
                "Learn more about the program": "了解更多關於 GitHub 開發者計劃的信息",
    },
    "regexp": [ // 正則匹配
    ],
};
