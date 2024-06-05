import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArchitectureService } from "./architecture.service";
import { ArchitectureControllerBase } from "./base/architecture.controller.base";

@swagger.ApiTags("architectures")
@common.Controller("architectures")
export class ArchitectureController extends ArchitectureControllerBase {
  constructor(protected readonly service: ArchitectureService) {
    super(service);
  }
}
