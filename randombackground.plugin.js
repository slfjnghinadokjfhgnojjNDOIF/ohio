/**
 * @name RandomBackground
 * @author Nik
 * @description Sets a random background image every time Discord loads.
 * @version 1.0.0
 */

module.exports = (() => {
    const config = {
        info: {
            name: "RandomBackground",
            authors: [
                {
                    name: "Nik",
                    discord_id: "803778203893628989",
                    github_username: "slfjnghinadokjfhgnojjndoif",
                    twitter_username: "idk"
                }
            ],
            version: "1.0.0",
            description: "Sets a random background image every time Discord loads.",
            github: "https://slfjnghinadokjfhgnojjndoif.github.io/ohio/",
            github_raw: "https://raw.githubusercontent.com/slfjnghinadokjfhgnojjNDOIF/ohio/main/randombackground.plugin.js"
        },
        changelog: [
            {
                title: "Initial Release",
                type: "added",
                items: ["Initial release of the RandomBackground plugin."]
            }
        ]
    };

    return !global.ZeresPluginLibrary ? class {
        constructor() { this._config = config; }
        getName() { return config.info.name; }
        getAuthor() { return config.info.authors.map(a => a.name).join(", "); }
        getDescription() { return config.info.description; }
        getVersion() { return config.info.version; }
        load() {
            BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
                confirmText: "Download Now",
                cancelText: "Cancel",
                onConfirm: () => {
                    require("request").get("https://betterdiscord.app/1B_plugins/0Library/0PluginLibrary.plugin.js", async (err, res, body) => {
                        if (err) return require("electron").shell.openExternal("https://betterdiscord.app/1B_plugins/0Library/0PluginLibrary.plugin.js");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                    });
                }
            });
        }
        start() {}
        stop() {}
    } : (([Plugin, Api]) => {
        const plugin = (Plugin, Api) => {
            const { Patcher, WebpackModules, ReactComponents } = Api;
            return class RandomBackground extends Plugin {
                constructor() {
                    super();
                }

                onStart() {
                    this.setRandomBackground();
                }

                onStop() {
                    this.removeBackground();
                }

                setRandomBackground() {
                    const images = [
                        'url(https://us.rule34.xxx//samples/5690/sample_efeeb1c540ee5566c0bfa0cf00e841a3.jpg?10370894)',
                        'url(https://us.rule34.xxx//samples/2120/sample_669d83b1e78cf32923b352be79d9c99b.jpg?10485389)',
                        'url(https://us.rule34.xxx//samples/1153/sample_6323e502cc5a0c10fef0dffc0ac57bf6.jpg?10792098)',
                        'url(https://us.rule34.xxx//images/1294/811b2a23fa5a795cb88c5b831f4d1529.png?9895876)',
                        'url(https://us.rule34.xxx//samples/2574/sample_5aaa7723fba056f005fe570842d966b7.jpg?9912067)',
                        'url(https://us.rule34.xxx//samples/2344/sample_f48da37feafd5b2e78e0a94e5d091aaa.jpg?10248603)',
                        'url(https://us.rule34.xxx//samples/2629/sample_8a85d2edda5e5b490ab232ddbdcc05fb.jpg?10464233)',
                        'url(https://us.rule34.xxx//samples/2366/sample_1f0e7d87567e7144c546b027e75aa66a.jpg?10416677)',
                    ];

                    const randomIndex = Math.floor(Math.random() * images.length);
                    const selectedImage = images[randomIndex];

                    document.documentElement.style.setProperty('--background-image', selectedImage);
                }

                removeBackground() {
                    document.documentElement.style.removeProperty('--background-image');
                }
            };
        };
        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();
