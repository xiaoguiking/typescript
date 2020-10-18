/**
 * 元组
 */

 const arr = ["name", "age", 12];
 const arr1: (string | number)[] = ["name", "age", 12] // 问题所在数据对应性不明显

 // 元组: 数组类型一一对应

 const arr2: [string, string, number] = ["name", "age", 32];  // 数组类型不对应直接报错