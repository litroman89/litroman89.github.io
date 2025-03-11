<?php
 function applyLocalization() {
    // Получаем язык из куки или задаем язык по умолчанию
    $lang = $_COOKIE['lang'] ?? 'en';
    $lang = strtolower($lang);

    // Получаем имя текущего файла без расширения
    $currentFileName = pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);

    // Формируем путь к JSON файлу с переводами
    $jsonFilePath = $_SERVER['DOCUMENT_ROOT'] . "/locales/{$lang}/{$currentFileName}.json";

    // Проверяем, существует ли JSON файл
    if (!file_exists($jsonFilePath)) {
        return; // Если файл отсутствует, ничего не делаем
    }
    
    // Загружаем переводы из JSON
    $translations = json_decode(file_get_contents($jsonFilePath), true);
    // echo $translations;
    if (json_last_error() !== JSON_ERROR_NONE) {
        return; // Если ошибка JSON, ничего не делаем
    }

    // Захватываем текущий вывод (HTML-разметка страницы)
    $html = ob_get_clean();

    // Загружаем HTML в DOMDocument
    $dom = new DOMDocument();
    libxml_use_internal_errors(true); // Подавляем ошибки загрузки
    $dom->loadHTML($html, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
    libxml_clear_errors();

    // Ищем элементы с data-localization
    $elements = $dom->getElementsByTagName('*');
    foreach ($elements as $element) {
        if ($element->hasAttribute('data-localization')) {
            $localizationName = $element->getAttribute('data-localization');

            // Разделяем localizationName на части
            $keys = explode('-', $localizationName);

            // Получаем соответствующий текст из JSON
            $text = $translations;
            foreach ($keys as $key) {
                if (isset($text[$key])) {
                    $text = $text[$key];
                } else {
                    $text = null; // Если ключ не найден, прекращаем поиск
                    break;
                }
            }

            // Если текст найден, заменяем содержимое элемента
            if ($text !== null) {
                // Очищаем содержимое
                while ($element->firstChild) {
                    $element->removeChild($element->firstChild);
                }
            
                // Создаем временный div
                $tempDoc = new DOMDocument('1.0', 'UTF-8');
                
                // Устанавливаем подавление ошибок и расширенные опции
                libxml_use_internal_errors(true);
            
                // Безопасная обработка HTML с разрешением безопасных тегов
                $safeHtml = '<div>' . $text . '</div>';
                $result = $tempDoc->loadHTML('<?xml encoding="UTF-8">' . $safeHtml, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
            
                // Проверка успешности загрузки
                if ($result === false) {
                    $errors = libxml_get_errors();
                    libxml_clear_errors();
                    
                    error_log('HTML Loading Errors: ' . print_r($errors, true));
                    error_log('Original Text: ' . $text);
                    
                    return;
                }
            
                $tempDiv = $tempDoc->getElementsByTagName('div')->item(0);
            
                // Проверка существования div
                if ($tempDiv === null) {
                    error_log('Cannot find DIV in parsed HTML. Original text: ' . $text);
                    return;
                }
            
                // Переносим все дочерние элементы во входной элемент
                foreach ($tempDiv->childNodes as $childNode) {
                    $importedNode = $dom->importNode($childNode, true);
                    $element->appendChild($importedNode);
                }
            }
        }
    }

    // Выводим обновленный HTML
    echo $dom->saveHTML();
}
// Применяем локализацию
applyLocalization();