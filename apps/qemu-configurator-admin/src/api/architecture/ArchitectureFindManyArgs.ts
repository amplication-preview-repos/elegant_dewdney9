import { ArchitectureWhereInput } from "./ArchitectureWhereInput";
import { ArchitectureOrderByInput } from "./ArchitectureOrderByInput";

export type ArchitectureFindManyArgs = {
  where?: ArchitectureWhereInput;
  orderBy?: Array<ArchitectureOrderByInput>;
  skip?: number;
  take?: number;
};
