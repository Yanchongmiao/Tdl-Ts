type MyPick<T, K extends keyof T> = {
    [P in K] : T[P]
}
/**
 * 可以把MyPick看做是一个函数 T K 就是形参 T对应的是Obj{} K对应的是数组存放了对象里的某些key
 * [P in K] 的意思是，in 把K遍历，P就是对应下标0 1 2 的key  ...
 * T[P] 已知P是其中的某个K nT[P] 相当于 取对象Obj下的某个key t.p
 * **/