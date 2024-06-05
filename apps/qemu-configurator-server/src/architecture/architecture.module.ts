import { Module } from "@nestjs/common";
import { ArchitectureModuleBase } from "./base/architecture.module.base";
import { ArchitectureService } from "./architecture.service";
import { ArchitectureController } from "./architecture.controller";
import { ArchitectureResolver } from "./architecture.resolver";

@Module({
  imports: [ArchitectureModuleBase],
  controllers: [ArchitectureController],
  providers: [ArchitectureService, ArchitectureResolver],
  exports: [ArchitectureService],
})
export class ArchitectureModule {}
