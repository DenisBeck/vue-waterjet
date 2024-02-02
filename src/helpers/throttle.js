export const throttle = (fn, throttleTime) => {
    let isThrottled = false

    return async function() {
        if (isThrottled) return

        await fn.apply(this, arguments)

        isThrottled = true
        
        console.log(Date.now(), isThrottled)
        setTimeout(function() {
            isThrottled = false
        }, throttleTime)

    }
};