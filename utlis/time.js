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
    } else if (seconds >= 0) {
        return `${seconds} 秒前`;
    } else {
        // 理论上这里不应该执行，除非时间戳是未来的时间  
        return '刚刚';
    }
}  