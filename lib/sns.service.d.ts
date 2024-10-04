export declare class SnsService {
    private static _instance;
    private constructor();
    static init(): SnsService;
    verifyNewTopic(subscriptionURL: string): Promise<any>;
    parseS3Webhook(event: any, filePrefix: string): string[];
}
