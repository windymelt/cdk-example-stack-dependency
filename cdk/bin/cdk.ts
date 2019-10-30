#!/usr/bin/env node
import 'source-map-support/register'
import cdk = require('@aws-cdk/core')
import { CdkStack } from '../lib/cdk-stack'
import { BaseCdkStack } from '../lib/cdk-base-stack'

const app = new cdk.App()

// 依存されるStackを作成する
const base = new BaseCdkStack(app, 'BaseCdkStack')
// 依存するStackを作成し，PropsとしてbaseのhogeFieldを渡す。
// hogeはinterfaceによって要求されている。
new CdkStack(app, 'CdkStack', { hoge: base.hogeField })
