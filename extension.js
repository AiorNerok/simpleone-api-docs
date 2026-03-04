const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('SimpleOne API Documentation активировано');

    // Команда для открытия документации клиентского API
    let openClientApiDocs = vscode.commands.registerCommand('simpleoneApiDocs.openClientApiDocs', function () {
        vscode.env.openExternal(vscode.Uri.parse('https://docs.simpleone.ru/ru/platform/developer-help/developer-api/client-side-api/'));
    });

    // Команда для открытия документации серверного API
    let openServerApiDocs = vscode.commands.registerCommand('simpleoneApiDocs.openServerApiDocs', function () {
        vscode.env.openExternal(vscode.Uri.parse('https://docs.simpleone.ru/ru/platform/developer-help/developer-api/server-side-api/'));
    });

    // Команда для установки типов в проект
    let installTypes = vscode.commands.registerCommand('simpleoneApiDocs.installTypes', async function () {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        
        if (!workspaceFolders || workspaceFolders.length === 0) {
            vscode.window.showErrorMessage('Откройте папку проекта в VS Code');
            return;
        }

        const workspaceRoot = workspaceFolders[0].uri.fsPath;
        const typesDir = path.join(workspaceRoot, '.vscode-simpleone', 'types');
        
        try {
            // Создание директории
            if (!fs.existsSync(typesDir)) {
                fs.mkdirSync(typesDir, { recursive: true });
            }

            // Копирование файлов типов
            const extensionTypesDir = path.join(context.extensionPath, 'types');
            const filesToCopy = [
                'simpleone-client.d.ts',
                'simpleone-server.d.ts',
                's1-client.d.ts',
                's1-server.d.ts'
            ];

            for (const file of filesToCopy) {
                const src = path.join(extensionTypesDir, file);
                const dest = path.join(typesDir, file);
                if (fs.existsSync(src)) {
                    fs.copyFileSync(src, dest);
                    console.log(`Скопирован: ${file}`);
                }
            }

            // Создание jsconfig.json
            const jsconfigPath = path.join(workspaceRoot, 'jsconfig.json');
            if (!fs.existsSync(jsconfigPath)) {
                const jsconfigContent = {
                    compilerOptions: {
                        target: 'ES2020',
                        module: 'commonjs',
                        checkJs: true,
                        typeRoots: [
                            './node_modules/@types',
                            './.vscode-simpleone/types'
                        ]
                    },
                    include: ['**/*.js'],
                    exclude: ['node_modules']
                };
                fs.writeFileSync(jsconfigPath, JSON.stringify(jsconfigContent, null, 2));
                console.log('Создан jsconfig.json');
            }

            vscode.window.showInformationMessage(
                'SimpleOne API типы установлены! Перезапустите TypeScript Server (Cmd+Shift+P → TypeScript: Restart TS Server)',
                'Перезапустить TS Server'
            ).then(selection => {
                if (selection === 'Перезапустить TS Server') {
                    vscode.commands.executeCommand('typescript.restartTsServer');
                }
            });

        } catch (error) {
            console.error('Ошибка установки типов:', error);
            vscode.window.showErrorMessage('Ошибка установки типов: ' + error.message);
        }
    });

    // Коллекция диагностик
    const diagnosticCollection = vscode.languages.createDiagnosticCollection('simpleone');
    
    // Функция проверки файла на наличие директив
    function checkFileForReferences(document) {
        if (document.languageId !== 'javascript' && document.languageId !== 'typescript') {
            return;
        }
        
        const text = document.getText();
        const diagnostics = [];
        
        // Проверка на наличие директив reference
        const hasReference = text.includes('/// <reference');
        const hasSimpleOneReference = text.includes('s1-server') || text.includes('s1-client');
        
        // Проверка на использование SimpleOne API
        const simpleOnePatterns = [
            /\bnew\s+SimpleRecord\s*\(/,
            /\bss\./,
            /\bs_form\./,
            /\bs_go\./,
            /\bs_list\./,
            /\bs_i18n\./,
            /\bs_user\./,
            /\bs_modal\./,
            /\bs_pref\./,
            /\bs_widgets\./,
            /\bSimpleEventBus\./,
            /\bSimpleStorage\./,
            /\bSimpleMenu\./,
            /\bSimpleAjax\s*\(/,
            /\bsws\./,
            /\bnew\s+SimpleAttachment\s*\(/,
            /\bnew\s+SimpleWorkflow\s*\(/,
            /\bnew\s+SimpleSearch\s*\(/,
            /\bnew\s+SimpleTemplate\s*\(/,
            /\bnew\s+SimpleVcs\s*\(/,
            /\bnew\s+SimpleMail\s*\(/,
            /\bnew\s+SimpleCache\s*\(/,
            /\bnew\s+SimpleEngine\s*\(/,
            /\bnew\s+SimpleTable\s*\(/,
            /\bnew\s+SimpleDateTime\s*\(/,
            /\bnew\s+SimpleTime\s*\(/
        ];
        
        let usesSimpleOne = false;
        for (const pattern of simpleOnePatterns) {
            if (pattern.test(text)) {
                usesSimpleOne = true;
                break;
            }
        }
        
        // Если используется SimpleOne API, но нет директив
        if (usesSimpleOne && !hasSimpleOneReference) {
            // Найти первую строку с кодом (после всех импортов и директив)
            const firstLine = document.lineAt(0);
            const range = new vscode.Range(0, 0, 0, 0);
            
            const diagnostic = new vscode.Diagnostic(
                range,
                'SimpleOne API: Отсутствуют директивы типов. IntelliSense может не работать.',
                vscode.DiagnosticSeverity.Information
            );
            diagnostic.code = 'simpleone-missing-reference';
            diagnostics.push(diagnostic);
        }
        
        diagnosticCollection.set(document.uri, diagnostics);
    }
    
    // Команда для добавления директив в текущий файл
    let addReferenceDirectives = vscode.commands.registerCommand('simpleoneApiDocs.addReference', async function () {
        const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showInformationMessage('Откройте файл JavaScript/TypeScript');
            return;
        }
        
        const document = editor.document;
        if (document.languageId !== 'javascript' && document.languageId !== 'typescript') {
            vscode.window.showInformationMessage('Этот файл не JavaScript/TypeScript');
            return;
        }
        
        const text = document.getText();
        const hasServerReference = text.includes('s1-server');
        const hasClientReference = text.includes('s1-client');
        const hasPathReference = text.includes('/// <reference path=');
        
        // QuickPick для выбора типа API
        const items = [];
        
        if (!hasServerReference) {
            items.push({
                label: '$(server) Серверное API',
                description: '/// <reference types="s1-server" />',
                apiType: 'server'
            });
        }
        
        if (!hasClientReference) {
            items.push({
                label: '$(browser) Клиентское API',
                description: '/// <reference types="s1-client" />',
                apiType: 'client'
            });
        }
        
        if (!hasPathReference) {
            items.push({
                label: '$(file) Пользовательский путь',
                description: '/// <reference path="..." />',
                apiType: 'path'
            });
        }
        
        if (items.length === 0) {
            vscode.window.showInformationMessage('Все директивы уже добавлены');
            return;
        }
        
        const selected = await vscode.window.showQuickPick(items, {
            placeHolder: 'Выберите тип API для добавления'
        });
        
        if (!selected) {
            return;
        }
        
        let directiveText = '';
        
        if (selected.apiType === 'server') {
            directiveText = '/// <reference types="s1-server" />\n';
        } else if (selected.apiType === 'client') {
            directiveText = '/// <reference types="s1-client" />\n';
        } else if (selected.apiType === 'path') {
            const pathValue = await vscode.window.showInputBox({
                prompt: 'Введите путь к файлу типов',
                placeHolder: './types/simpleone/simpleone-server.d.ts',
                value: './.vscode-simpleone/types/global.d.ts'
            });
            
            if (pathValue) {
                directiveText = `/// <reference path="${pathValue}" />\n`;
            } else {
                return;
            }
        }
        
        if (directiveText) {
            await editor.edit(editBuilder => {
                // Вставить после последней существующей директивы или в начало
                let insertLine = 0;
                for (let i = 0; i < document.lineCount; i++) {
                    const line = document.lineAt(i).text;
                    if (line.includes('/// <reference')) {
                        insertLine = i + 1;
                    } else if (line.trim() && !line.includes('/// <reference')) {
                        break;
                    }
                }
                
                const position = new vscode.Position(insertLine, 0);
                editBuilder.insert(position, directiveText);
            });
            
            vscode.window.showInformationMessage('Директива добавлена!');
            
            // Перезапуск TS Server (опционально)
            const restart = await vscode.window.showInformationMessage(
                'Перезапустить TypeScript Server для применения?',
                'Да',
                'Нет'
            );
            
            if (restart === 'Да') {
                vscode.commands.executeCommand('typescript.restartTsServer');
            }
        }
    });
    
    // Подписка на события
    if (vscode.window.activeTextEditor) {
        checkFileForReferences(vscode.window.activeTextEditor.document);
    }
    
    const onDidChangeTextDocumentSubscription = vscode.workspace.onDidChangeTextDocument(event => {
        checkFileForReferences(event.document);
    });
    
    const onDidOpenTextDocumentSubscription = vscode.workspace.onDidOpenTextDocument(document => {
        checkFileForReferences(document);
    });
    
    const onDidChangeActiveTextEditorSubscription = vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            checkFileForReferences(editor.document);
        }
    });
    
    context.subscriptions.push(openClientApiDocs);
    context.subscriptions.push(openServerApiDocs);
    context.subscriptions.push(installTypes);
    context.subscriptions.push(addReferenceDirectives);
    context.subscriptions.push(diagnosticCollection);
    context.subscriptions.push(onDidChangeTextDocumentSubscription);
    context.subscriptions.push(onDidOpenTextDocumentSubscription);
    context.subscriptions.push(onDidChangeActiveTextEditorSubscription);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
