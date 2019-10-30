import cdk = require('@aws-cdk/core')

export class BaseCdkStack extends cdk.Stack {
    // 外部から参照できるようにreadonlyフィールドにしておく
    readonly hogeField: number
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        this.hogeField = 1234567
    }
}