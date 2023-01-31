export class apiError extends Error {
    status: number;
    constructor(status: number, message: string) {
        super()
        this.status = status;
        this.message = message;
    }

    static badRequest(message: string) {
        return new apiError(404, message);
    }

    static forbidden(message: string) {
        return new apiError(403, message);
    }

    static internal(message: string) {
        return new apiError(500, message)
    }
};