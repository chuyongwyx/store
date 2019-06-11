export default {
    page:1,
    columns7: [
        {
            type: 'selection',
            width: 60,
            align: 'center'
        },
       {
            title:'用户名',
            key:'username',
            align: 'center'
       },
       {
            title:'真实姓名',
            key:'reallyname',
            align:'center'
       },
       {
            title:'部门',
            key:'department',
            align:'center'
       },
       {
            title:'职务',
            key:'job',
            align:'center'
       },
       {
            title:'电话',
            key:'tel',
            align:'center'
       },
       {
            title:'使用时长',
            key:'time',
            align:'center'
       },
       {
            title:'设备终端',
            key:'cpe',
            align:'center'
       },
       {
            title:'备注',
            key:'remarks',
            align:'center'
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