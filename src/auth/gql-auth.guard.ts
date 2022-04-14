import { Injectable, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";



@Injectable()
export class GqlAuthGuard extends AuthGuard('local'){
    constructor(){
        super();
    }

    getRequest(context: ExecutionContext){
        // console.log('vo r ne');
        
        const ctx = GqlExecutionContext.create(context);
        const request = ctx.getContext();
        request.body = ctx.getArgs().input;
                // console.log('vo r ne',ctx.getArgs() );
        return request;
    }
}