import { get, post } from "./http";

/***菜单开始 ***/
// 添加
export const reqmenuadd = (params) => post("/api/menuadd", params);

// 修改
export const reqmenuedit=params=>post("/api/menuedit",params);

// 删除
export const reqmenudelete=params=>post("/api/menudelete",params);

// 列表
export const reqmenulist=params=>get("/api/menulist",params)

// 查询1条
export const reqmenuinfo=params=>get("/api/menuinfo",params)

/***菜单结束 ***/

/***角色开始 ***/
// 添加
export const reqroleadd = (params) => post("/api/roleadd", params);

// 修改
export const reqroleedit=params=>post("/api/roleedit",params);

// 删除
export const reqroledelete=params=>post("/api/roledelete",params);

// 列表
export const reqrolelist=params=>get("/api/rolelist",params)

// 查询1条
export const reqroleinfo=params=>get("/api/roleinfo",params)

/***角色结束 ***/