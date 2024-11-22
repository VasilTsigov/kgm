/*
 * File: app/view/NavigationViewAbout.js
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

Ext.define('iagKgmMob.view.NavigationViewAbout', {
    extend: 'Ext.navigation.View',
    alias: 'widget.navigationviewabout',

    requires: [
        'Ext.Panel',
        'Ext.Label'
    ],

    config: {
        items: [
            {
                xtype: 'container',
                title: 'За нас',
                centered: false,
                disabled: false,
                items: [
                    {
                        xtype: 'panel',
                        centered: false,
                        items: [
                            {
                                xtype: 'label',
                                centered: true,
                                html: '<div class="aboutus"><h1>ИЗПЪЛНИТЕЛНА АГЕНЦИЯ ПО ГОРИТЕ</h1><img src="resources/images/logo.jpg"><h2>гр. София, бул. Христо Ботев № 55<h2/><p>инж. Васил Цигов</p><p>инж. Ивайло Иванов</p><p>л. арх. Иван Богданов</p><p>тел.: +359298511506</p></div>'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});