import * as graphql from "@nestjs/graphql";
import { HardwareResolverBase } from "./base/hardware.resolver.base";
import { Hardware } from "./base/Hardware";
import { HardwareService } from "./hardware.service";

@graphql.Resolver(() => Hardware)
export class HardwareResolver extends HardwareResolverBase {
  constructor(protected readonly service: HardwareService) {
    super(service);
  }
}
