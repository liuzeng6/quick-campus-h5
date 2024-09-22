export function timeAgo(timestamp) {
    // 创建一个Date对象来表示给定的时间戳  
    const date = new Date(timestamp);

    // 获取当前时间  
    const now = new Date();

    // 计算时间差（毫秒）  
    const diff = now - date;

    // 将时间差转换为秒  
    const seconds = Math.floor(diff / 1000);

    // 将秒转换为分钟、小时、天等  
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    // 使用更准确的单位来表示时间差  
    if (years > 0) {
        return `${years} 年前`;
    } else if (months > 0) {
        return `${months} 个月前`;
    } else if (days > 0) {
        return `${days} 天前`;
    } else if (hours > 0) {
        return `${hours} 小时前`;
    } else if (minutes > 0) {
        return `${minutes} 分钟前`;
    } else if (seconds >= 5) {
        return `${seconds} 秒前`;
    } else {
        // 理论上这里不应该执行，除非时间戳是未来的时间  
        return '刚刚';
    }
}
export function toDate(timestamp) {
    // 创建一个Date对象  
    const date = new Date(timestamp);

    // 使用getFullYear()、getMonth() + 1（因为月份是从0开始的）、getDate()等  
    // 方法来获取年、月、日、时、分、秒，并使用padStart()方法来确保月份、日期和小时等  
    // 总是两位数（例如，"04" 而不是 "4"）  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // 拼接成MySQL日期时间格式  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}  