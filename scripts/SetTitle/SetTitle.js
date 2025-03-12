(function () {
    const titles = {
        ru: 'BMW FORCE - Кодирование, Диагностика автомобилей BMW',
        en: 'BMW FORCE - Coding, Diagnostics of BMW vehicles',
        de: 'BMW FORCE - Codierung, Diagnose von BMW-Fahrzeugen'
    };

    let lang = navigator.language.slice(0, 2);
    if (!titles[lang]) lang = 'en';

    document.title = titles[lang];
    document.documentElement.lang = lang;
})();