var gui = require('nw.gui');
var win = gui.Window.get(),
    nativeMenuBar = new gui.Menu({
        type: "menubar"
    });

// check operating system for the menu
if (process.platform === "darwin") {
    nativeMenuBar.createMacBuiltin("Trello");
}

// Create a tray icon
// var tray = new gui.Tray({ title: 'nw', icon: 'img/icon.png' });
// var menu = new gui.Menu();
// menu.append(new gui.MenuItem({ type: 'checkbox', label: 'box1' }));


// actually assign menu to window
win.menu = nativeMenuBar;
// tray.menu = menu;


// Open external links in browser
$(window).load(function() {
    $('.iframe').contents().on('click','a[target="_blank"]', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        gui.Shell.openExternal(href);
        return false;
    });
});
