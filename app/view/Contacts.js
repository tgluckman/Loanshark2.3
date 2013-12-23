/*
 * File: app/view/Contacts.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
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

Ext.define('Payback.view.Contacts', {
    extend: 'Ext.Panel',
    alias: 'widget.Contacts',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.dataview.DataView'
    ],

    config: {
        id: 'Contacts',
        layout: 'fit',
        items: [
            {
                xtype: 'toolbar',
                docked: 'bottom',
                id: 'contactToolbar',
                items: [
                    {
                        xtype: 'button',
                        id: 'addContact',
                        iconCls: 'icon-add-contact'
                    }
                ]
            },
            {
                xtype: 'dataview',
                itemId: 'contactDataView',
                padding: '4 0 4 0',
                defaultType: 'ContactListItem',
                store: 'PeopleStore',
                useComponents: true
            }
        ]
    }

});