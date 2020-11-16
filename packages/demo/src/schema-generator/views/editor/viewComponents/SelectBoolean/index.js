/**
 * Created by Liu.Jun on 2019/9/29 19:01.
 */

import genSchema from '../genSchema.js';

const viewSchema = {
    title: '是否选择',
    type: 'boolean'
};
export default {
    viewSchema,
    propsSchema: genSchema({
        options: {
            type: 'object',
            title: '选项',
            required: [],
            anyOfSelect: {
                'ui:title': '渲染组件'
            },
            anyOf: [{
                title: 'el-switch组件',
                type: 'object',
                properties: {
                    schemaOptions: {
                        type: 'object',
                        properties: {
                            'ui:widget': {
                                title: '使用组件',
                                type: 'string',
                                default: 'el-switch',
                                'ui:hidden': true
                            }
                        }
                    },
                    uiOptions: {
                        type: 'object',
                        properties: {
                            activeText: {
                                title: '选择文案',
                                type: 'string',
                                default: '是'
                            },
                            inactiveText: {
                                title: '非选择文案',
                                type: 'string',
                                default: '否'
                            }
                        }
                    }
                }
            }, {
                title: 'el-checkbox组件',
                type: 'object',
                properties: {
                    schemaOptions: {
                        type: 'object',
                        properties: {
                            'ui:widget': {
                                title: '使用组件',
                                type: 'string',
                                default: 'el-checkbox',
                                'ui:hidden': true
                            }
                        }
                    },
                    uiOptions: {
                        type: 'object',
                        properties: {
                            label: {
                                title: '标签文案',
                                type: 'string',
                                default: '是否'
                            }
                        }
                    }
                }
            }, {
                title: 'SelectWidget组件',
                type: 'object',
                properties: {
                    schemaOptions: {
                        type: 'object',
                        properties: {
                            'ui:widget': {
                                title: '使用组件',
                                type: 'string',
                                default: 'SelectWidget',
                                'ui:hidden': true
                            },
                            enumNames: {
                                type: 'array',
                                items: [{
                                    title: '选择文案',
                                    type: 'string',
                                    default: '是'
                                }, {
                                    title: '非选择文案',
                                    type: 'string',
                                    default: '否'
                                }]
                            }
                        }
                    },
                    uiOptions: {
                        type: 'object',
                        properties: {}
                    }
                }
            }, {
                title: 'RadioWidget组件',
                type: 'object',
                properties: {
                    schemaOptions: {
                        type: 'object',
                        properties: {
                            'ui:widget': {
                                title: '使用组件',
                                type: 'string',
                                default: 'RadioWidget',
                                'ui:hidden': true
                            },
                            enumNames: {
                                type: 'array',
                                items: [{
                                    title: '选择文案',
                                    type: 'string',
                                    default: '是'
                                }, {
                                    title: '非选择文案',
                                    type: 'string',
                                    default: '否'
                                }]
                            }
                        }
                    },
                    uiOptions: {
                        type: 'object',
                        properties: {}
                    }
                }
            }],
        }
    })
};
