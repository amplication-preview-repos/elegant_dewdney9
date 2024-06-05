import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArchitectureServiceBase } from "./base/architecture.service.base";

@Injectable()
export class ArchitectureService extends ArchitectureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
