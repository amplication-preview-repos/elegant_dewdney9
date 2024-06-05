import { HardwareWhereInput } from "./HardwareWhereInput";
import { HardwareOrderByInput } from "./HardwareOrderByInput";

export type HardwareFindManyArgs = {
  where?: HardwareWhereInput;
  orderBy?: Array<HardwareOrderByInput>;
  skip?: number;
  take?: number;
};
