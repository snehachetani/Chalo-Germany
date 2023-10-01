/* Browser Theme based favicon */
matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);
onUpdate();

lightSchemeIcon = document.querySelector('link#light-scheme-icon');
darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

function onUpdate() {
    if (matcher.matches) {
        lightSchemeIcon.remove();
        document.head.append(darkSchemeIcon);
    } else {
        document.head.append(lightSchemeIcon);
        darkSchemeIcon.remove();
    }
}

/*-------------*/
/* Pre Loader */
let timeout;
function loadtimeout() {
    timeout = setTimeout(showPage, 2500);
}

function showPage() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}

