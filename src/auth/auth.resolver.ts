// import { UseGuards } from "@nestjs/common";
import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
// import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
// import { InputLogin } from "./dto/InputLogin";
// import { ReponseLogin } from "./dto/ReponseLogin";
// import { GqlAuthGuard } from "./gql-auth.guard";


@Resolver()
export class AuthResolver {
    constructor(
        private authService: AuthService
    ){}

    // @Mutation(() => ReponseLogin)
    // @UseGuards(GqlAuthGuard)
    // async logIn(@Args('input') inputLogin: InputLogin, @Context() context){
    //     // console.log(context.user);
    //     return this.authService.login(context.user)
    // }
}
