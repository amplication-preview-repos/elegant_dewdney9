import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdditionalSettingsServiceBase } from "./base/additionalSettings.service.base";

@Injectable()
export class AdditionalSettingsService extends AdditionalSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
