/*
 * File: app/view/LoginView.js
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

Ext.define('iagKgmMob.view.LoginView', {
    extend: 'Ext.Panel',
    alias: 'widget.loginview',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.Button'
    ],

    config: {
        centered: false,
        layout: {
            type: 'card',
            animation: 'flip',
            'animation.duration': 1000
        },
        items: [
            {
                xtype: 'fieldset',
                centered: true,
                margin: 20,
                hideOnMaskTap: false,
                instructions: 'Натиснете бутона и влезте в системата',
                title: 'Вход в системата:',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'txtUser',
                        label: 'Потребител:',
                        labelWidth: '45%',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        id: 'txtPass',
                        label: 'Парола:',
                        labelWidth: '45%',
                        required: true
                    },
                    {
                        xtype: 'button',
                        docked: 'bottom',
                        id: 'loginBtn',
                        margin: '50 50',
                        ui: 'confirm-round',
                        iconAlign: 'center',
                        text: 'Вход'
                    }
                ]
            }
        ]
    }

});