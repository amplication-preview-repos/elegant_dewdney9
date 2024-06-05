import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HardwareService } from "./hardware.service";
import { HardwareControllerBase } from "./base/hardware.controller.base";

@swagger.ApiTags("hardware")
@common.Controller("hardware")
export class HardwareController extends HardwareControllerBase {
  constructor(protected readonly service: HardwareService) {
    super(service);
  }
}
