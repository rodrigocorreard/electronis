// Modules to control application life and create native browser window
const { app, Tray, Menu, nativeImage, BrowserWindow } = require("electron");
const cp = require("child_process");

//Adonis server
async function startAdonis() {
  cp.exec("node ace serve --watch");
}

let mainWindow;
async function createWindow() {
  // Create the browser window

  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    title: "Electronis",
    webPreferences: {
      nodeIntegration: true,
    },
    /// show to false mean than the window will proceed with its lifecycle, but will not render until we will show it up
    show: false,
    /// and set the transparency, to remove any window background color
    transparent: true,
  });

  // Remove toolbar
  mainWindow.setMenuBarVisibility(false);

  // Set Title Program
  mainWindow.on("page-title-updated", function (e) {
    e.preventDefault();
  });

  //load the index.html of the app
  mainWindow.loadFile("index.html");
  mainWindow.show();
}

let tray;

app.whenReady().then(() => {
  const icon = nativeImage.createFromPath("img/server.png");

  tray = new Tray(icon);
  tray.setToolTip("Electronis Server");

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Start Server",
      type: "normal",
      toolTip: "Start Server",
      icon: "img/start.png",
      click: async () => {
        console.log("Server started");
        contextMenu.items[0].enabled = false;
        await startAdonis();
      },
    },
    {
      label: "Stop Server",
      type: "normal",
      toolTip: "Stop Server",
      icon: "img/stop.png",
      click: () => {
        console.log("Server stopped");
      },
    },
    {
      label: "Close Application",
      type: "normal",
      icon: "img/exit.png",
      click: () => {
        app.exit(0);
      },
    },
  ]);

  tray.setContextMenu(contextMenu);

  //Auto start server
  contextMenu.items[0].click();
});

//Prevent exit app on window close
app.on("window-all-closed", (e) => e.preventDefault());
