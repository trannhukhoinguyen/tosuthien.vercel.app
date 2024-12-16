import { CnMasters } from "../../db/masters/AllMasterDb.tsx";

const CnOtherMasterDb = CnMasters?.filter(master => master.sect.includes('-'));
export default CnOtherMasterDb;
