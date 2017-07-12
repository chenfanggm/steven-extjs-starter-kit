/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Steven.extjs.starter.kit.Application',

    name: 'Steven.extjs.starter.kit',

    requires: [
        // This will automatically load all classes in the Steven.extjs.starter.kit namespace
        // so that application classes do not need to require each other.
        'Steven.extjs.starter.kit.*'
    ],

    // The name of the initial view to create.
    mainView: 'Steven.extjs.starter.kit.view.main.Main'
});
