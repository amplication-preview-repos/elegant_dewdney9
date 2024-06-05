import * as graphql from "@nestjs/graphql";
import { AdditionalSettingsResolverBase } from "./base/additionalSettings.resolver.base";
import { AdditionalSettings } from "./base/AdditionalSettings";
import { AdditionalSettingsService } from "./additionalSettings.service";

@graphql.Resolver(() => AdditionalSettings)
export class AdditionalSettingsResolver extends AdditionalSettingsResolverBase {
  constructor(protected readonly service: AdditionalSettingsService) {
    super(service);
  }
}
