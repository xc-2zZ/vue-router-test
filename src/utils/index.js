//节流
export function throttle(fn) {
    let canRun = true; // 通过闭包保持一个标记
    return function () {
        if (!canRun) return
        // 在函数开头判断标记是否为true，不为true则return
        canRun = false // 立即设置为false
        setTimeout(() => {
            fn.apply(this, arguments);
            // 最后在setTimeout执行完毕后再把标记设置为true表示可以执行下一次循环了，当定时器没有执行的时候标记为false
            canRun = true
        }, 500)
    }
}
//防抖
export function debounce(fn) {
    let timeout = null
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        },500)
    }
}