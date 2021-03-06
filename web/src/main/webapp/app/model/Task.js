Ext.define('TA.model.Task', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'complete', type: 'boolean'},
        {name: 'summary', type: 'string'},
        {name: 'priority', type: 'int'},
        {name: 'context', type: 'string'}
    ]
});
