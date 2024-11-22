/*
 * File: app/controller/LoginController.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('iagKgmMob.controller.LoginController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        refs: {
            loginBtn: '#loginBtn'
        },

        control: {
            "loginBtn": {
                tap: 'onButtonTap'
            }
        }
    },

    onButtonTap: function(button, e, eOpts) {
        console.log('Клик ...');

        Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Зареждам ...', indicator:true});

        		var user = Ext.getCmp('txtUser').getValue();
        		var pass = Ext.getCmp('txtPass').getValue();


            if(user.length > 0 && pass.length > 0)

               {
                   var store = Ext.getStore('LoginStore');
                        store.load(
                            {
                                params: {
                                    user: user,
                                    pass: pass
                                },
                                callback: function(records, operation, success) {

                                    if(success)
                                    {
                                        Ext.Viewport.setMasked(false);
                                        Ext.Viewport.animateActiveItem(Ext.create('iagKgmMob.view.HomeView'),{type:'flip',duration: 400});
                                        console.log('success');
                                    }
                                    else
                                    {
                                        Ext.Viewport.setMasked(false);
                                        Ext.Msg.alert('Събщение', 'Грешна парола или потребителско име.', Ext.emptyFn);
                                        console.log('unsuccess');
                                    }
                                },
                                scope: this
                            });

                }
            else
                {
                    Ext.Msg.alert('Събщение', 'Полетата "Потребител" и "Парола" са задължителни за попълване', Ext.emptyFn);
        			Ext.Viewport.setMasked(false);
                }
    }

});