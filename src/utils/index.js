export const prefixCls = 'PG__'
export function cls(clsName){
    return prefixCls + clsName;
}
export function array_rand(items){
    return items[Math.random() * items.length | 0];
}
export function size(val){
    return typeof(val) == 'number' ? val+'px' : val
}