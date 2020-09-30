export default{
    style:{
        backgroundColor:"#343641",
        textColor:"#fff",
        activeTextColor:"#fff"
    },
    menuData:[
        {
            "menu-item-name":"人员管理",
            "path":"/user-manag",
            "sub_menu":[
                {
                    "menu-item-name":"高级管理员",
                    "path":"/senior-admin"
                },
                {
                    "menu-item-name":"普通管理员",
                    "path":"/common-admin"
                },
                {
                    "menu-item-name":"使用人员管理",
                    "path":"/common-user-manag"
                }
            ],
            "icon":"el-icon-user"
        },
        {
            "menu-item-name":"物资管理",
            "path":"/resource-manag",
            "sub_menu":[
                {
                    "menu-item-name":"化学药品管理",
                    "path":"/chemicals"
                },
                {
                    "menu-item-name":"实验设备管理",
                    "path":"/devices"
                }
            ],
            "icon":"el-icon-box"
        },
        {
            "menu-item-name":"入库管理",
            "path":"/input-manag",
            "sub_menu":[
                {
                    "menu-item-name":"化学药品信息列表",
                    "path":"/chemical-info-list"
                },
                {
                    "menu-item-name":"设备信息列表",
                    "path":"/device-info-list"
                },
                {
                    "menu-item-name":"录入入库管理",
                    "path":"/entering-info"
                },
                {
                    "menu-item-name":"设备归还",
                    "path":"/return-input"
                }
            ],
            "icon":"el-icon-s-fold"
        },
        {
            "menu-item-name":"出库管理",
            "path":"/output-manag",
            "sub_menu":[
                {
                    "menu-item-name":"化学药品",
                    "path":"/chemical-info-list"
                },
                {
                    "menu-item-name":"设备",
                    "path":"/device-info-list"
                },
                {
                    "menu-item-name":"出库申请",
                    "path":"/output-apply"
                },
                {
                    "menu-item-name":"外借申请",
                    "path":"/outborrow-apply"
                }
            ],
            "icon":"el-icon-s-unfold"
        },
        {
            "menu-item-name":"通知功能",
            "path":"/inform-manag",
            "sub_menu":[
                
            ],
            "icon":"el-icon-bell"
        },
        {
            "menu-item-name":"系统设置",
            "path":"/setting",
            "sub_menu":[
                {
                    "menu-item-name":"预到期提醒",
                    "path":"/pre-expiration-remind"
                },
                {
                    "menu-item-name":"库存提醒",
                    "path":"/inventory-remind"
                }
            ],
            "icon":"el-icon-setting"
        },
        {
            "menu-item-name":"数据统计",
            "path":"/data-statistics",
            "sub_menu":[
               
            ],
            "icon":"el-icon-document"
        }
    ]
}