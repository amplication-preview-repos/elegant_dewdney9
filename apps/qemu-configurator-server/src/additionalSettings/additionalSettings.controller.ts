import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdditionalSettingsService } from "./additionalSettings.service";
import { AdditionalSettingsControllerBase } from "./base/additionalSettings.controller.base";

@swagger.ApiTags("additionalSettings")
@common.Controller("additionalSettings")
export class AdditionalSettingsController extends AdditionalSettingsControllerBase {
  constructor(protected readonly service: AdditionalSettingsService) {
    super(service);
  }
}
