<h1>OptimizedHTML - Start HTML Template</h1>

<p>OptimizedHTML is all-inclusive, optimized for Google PageSpeed start HTML5 template with Bootstrap (grid only), Gulp, Sass, Browsersync, Autoprefixer, Clean-CSS, Uglify, Imagemin, Vinyl-FTP, Bower (libs path) and Bourbon support. The template contains a <strong>.htaccess</strong> file with caching rules for web server.</p>

<p>OptimizedHTML Start Template uses the best practices of web development and optimized for Google PageSpeed.</p>

<p>Cross-browser compatibility: IE9+.</p>

<p>The template uses a Sass with <strong>Sass</strong> syntax and project structure with source code in the directory <strong>app/</strong> and production folder <strong>dist/</strong>, that contains ready project with optimized HTML, CSS, JS and images.</p>

<h2>How to use OptimizedHTML</h2>

<ol>
	<li><a href="https://github.com/agragregra/optimizedhtml-start-template/archive/master.zip">Download</a> <strong>optimizedhtml-start-template</strong> from GitHub;</li>
	<li>Install Node Modules: <strong>npm i</strong>;</li>
	<li>Run the template: <strong>gulp</strong>.</li>
</ol>

<h2>Gulp tasks:</h2>

<ul>
	<li><strong>gulp</strong>: run default gulp task (sass, js, watch, browserSync) for web development;</li>
	<li><strong>build</strong>: build project to <strong>dist</strong> folder (cleanup, image optimize, removing unnecessary files);</li>
	<li><strong>deploy</strong>: project deployment on the server from <strong>dist</strong> folder via FTP;</li>
	<li><strong>clearcache</strong>: clear all gulp cache.</li>
</ul>

<h2>Rules for working with the starting HTML template</h2>

<ol>
	<li>All HTML files should have similar initial content as in <strong>app/index.html</strong>;</li>
	<li><strong>Template Basic Images Start</strong> comment in app/index.html - all your custom template basic images (og:image for social networking, favicons for a variety of devices);</li>
	<li><strong>Custom Browsers Color Start</strong> comment in app/index.html: set the color of the browser head on a variety of devices;</li>
	<li><strong>Custom HTML</strong> comment in app/index.html - all your custom HTML;</li>
	<li>For installing new jQuery library, just run the command "<strong>bower i plugin-name</strong>" in the terminal. Libraries are automatically placed in the folder <strong>app/libs</strong>. Bower must be installed in the system (npm i -g bower). Then place all jQuery libraries paths in the <strong>'libs'</strong> task (gulpfile.js);</li>
	<li>All custom JS located in <strong>app/js/common.js</strong>;</li>
	<li>All Sass vars placed in <strong>app/sass/_vars.sass</strong>;</li>
	<li>All Bootstrap media queries placed in <strong>app/sass/_media.sass</strong>;</li>
	<li>All jQuery libraries CSS styles placed in <strong>app/sass/_libs.sass</strong>;</li>
	<li>Rename <strong>ht.access</strong> to <strong>.htaccess</strong> before place it in your web server. This file contain rules for files caching on web server.</li>
</ol>

<!--
    Как использовать

Установить модули Node.js командой npm i;
Запустить шаблон командой gulp. Готово, можно работать.

    Таски Gulp:

1. gulp: запуск дефолтного gulp таска (sass, js, watch, browserSync) для разработки;
2. build: сборка проекта в папку dist (очистка, сжатие картинок, удаление всего лишнего);
3. deploy: выгрузка проекта на рабочий сервер из папки dist по FTP;
4. clearcache: очистка кеша gulp. Полезно для очистки кеш картинок и закешированных путей.

    Правила работы со стартовым HTMl шаблоном

1. Все HTML файлы должны иметь одинаковое стартовое наполнение, как у файла app/index.html;
2. Найдите комментарий Template Basic Images Start в файле app/index.html. Все ваши кастомные базовые картинки, такие как og:image для социальных сетей и фавиконки для различных устройств, следует задать в этом месте шаблона.
3. Найдите комментарий Load Fonts CSS Start в файле app/index.html. Используйте функцию loadCSS, если сайт находится в подпапке. Используйте (раскомментируйте) функцию loadLocalStorageCSS, если сайт находится в корне домена (предпочтительный способ загрузки шрифтов). Все шрифты подключаются в файле app/sass/fonts.sass с использованием Bourbon;
4. Найдите комментарий Custom Browsers Color Start в файле app/index.html. Здесь можно задать цвет шапки браузера на различных устройствах;
5. Найдите комментарий Custom HTML в файле app/index.html. Здесь следует писать ваш HTML;
6. Найдите комментарий Optimized loading JS Start в файле app/index.html. Здесь происходит оптимизированная загрузка всех скриптов;
7. Для установки новой jQuery библиотеки просто выполните в терминале команду bower i plugin-name. Библиотека автоматически будет размещена в папке app/libs. Bower должен быть установлен в вашей системе. Для установки Bower просто выполните команду npm i -g bower в терминале. После этого укажите все ссылки на скрипты jQuery библиотек в таске 'libs' (gulpfile.js);
8. Весь ваш JS код пишите в app/js/common.js;
9. Все Sass переменные размещайте в app/sass/_vars.sass;
10. Все CSS медиазапросы размещайте в app/sass/_media.sass;
11. Все CSS стили jQuery библиотек размещайте в app/sass/_libs.sass;
12. Все базовые стили (html, body, fonts, buttons, etc...) размещайте в app/sass/_base.sass;
13. В файле app/header.sass должны размещаться стили, предназначенные для отображения верхней части сайта на первом экране (на самых больших мониторах). Здесь отображаются стили как главной, так и всех внутренних страниц;
14. Переименуйте ht.access в .htaccess перед размещением на рабочем сервере. Этот файл содержит правила для кеширования файлов на сервере.
-->