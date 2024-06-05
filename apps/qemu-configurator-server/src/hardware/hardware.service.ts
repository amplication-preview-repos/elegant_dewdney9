import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HardwareServiceBase } from "./base/hardware.service.base";

@Injectable()
export class HardwareService extends HardwareServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
