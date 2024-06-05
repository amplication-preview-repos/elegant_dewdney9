import * as graphql from "@nestjs/graphql";
import { ArchitectureResolverBase } from "./base/architecture.resolver.base";
import { Architecture } from "./base/Architecture";
import { ArchitectureService } from "./architecture.service";

@graphql.Resolver(() => Architecture)
export class ArchitectureResolver extends ArchitectureResolverBase {
  constructor(protected readonly service: ArchitectureService) {
    super(service);
  }
}
