import { Module } from "@nestjs/common";
import { AdditionalSettingsModuleBase } from "./base/additionalSettings.module.base";
import { AdditionalSettingsService } from "./additionalSettings.service";
import { AdditionalSettingsController } from "./additionalSettings.controller";
import { AdditionalSettingsResolver } from "./additionalSettings.resolver";

@Module({
  imports: [AdditionalSettingsModuleBase],
  controllers: [AdditionalSettingsController],
  providers: [AdditionalSettingsService, AdditionalSettingsResolver],
  exports: [AdditionalSettingsService],
})
export class AdditionalSettingsModule {}
