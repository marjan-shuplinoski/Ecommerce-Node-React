/**
 * Logging middleware: logs method, url, status, and response time
 */
export function loggingMiddleware(req, res, next) {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        // You can enhance this log format as needed
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
    });
    next();
}
