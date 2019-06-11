export default {
    page:1,
    columns7: [
        {
            type: 'selection',
            width: 60,
            align: 'center'
        },
        {
            title: '屏幕ID',
            key: 'screenId',
            align: 'center'
        },
        {
            title: '校区',
            key: 'schools',
            align: 'center'
        },
        {
            title: '教学楼',
            key: 'schoolName',
            align: 'center'
        },
        {
            title:'房间',
            key:'roomNum',
            align: 'center'
        },
        {
            title:'部门',
            key:'department',
            align: 'center'
        },
        {
            title:'使用时长',
            key:'time',
            align: 'center'
        },
        {
            title:'屏幕IP',
            key:'screenIp',
            align: 'center'
        },
        {
            title:'屏幕状态',
            key:'screenState',
            align: 'center'
        },
        {
            title:'屏幕类型',
            key:'screenType',
            align: 'center'
        },
        {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render:(h ,params)=>{
                     return h('div',[
                         h('span',{
                             class:'iconfont icon-shiliangzhinengduixiang',
                             props:{

                             },
                             style:{
                                     display:'inline-block',
                                     fontSize:'16px',
                                     width:'16px',
                                     height:'16px',
                                     marginRight:'10px'
                             }

                         }),
                         h('span',{
                             class:'iconfont  icon-shanchu',
                              props:{
                                  
                              },
                             style: {
                                     display:'inline-block',
                                     fontSize:'16px',
                                     width:'16px',
                                     height:'16px',
                                     marginRight:'10px'

                              }
                         }),
                         h('span',{
                             class:'iconfont icon-zhuanyi',
                             props:{

                             },
                             style:{
                                     display:'inline-block',
                                     fontSize:'12px',
                                     width:'16px',
                                     height:'16px',
                                     marginRight:'5px'

                             }
                         })
                        
                     ])
            }
        }
    ]
    }

