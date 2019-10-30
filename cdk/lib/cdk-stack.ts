import cdk = require('@aws-cdk/core')

// スタックの作成に必要な，要求する値をここで定義しておく
interface CdkStackProps extends cdk.StackProps {
  hoge: number
}
export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: CdkStackProps) {
    super(scope, id, props)

    props.hoge
  }
}
