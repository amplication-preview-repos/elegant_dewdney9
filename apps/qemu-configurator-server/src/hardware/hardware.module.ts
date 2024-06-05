import { Module } from "@nestjs/common";
import { HardwareModuleBase } from "./base/hardware.module.base";
import { HardwareService } from "./hardware.service";
import { HardwareController } from "./hardware.controller";
import { HardwareResolver } from "./hardware.resolver";

@Module({
  imports: [HardwareModuleBase],
  controllers: [HardwareController],
  providers: [HardwareService, HardwareResolver],
  exports: [HardwareService],
})
export class HardwareModule {}
