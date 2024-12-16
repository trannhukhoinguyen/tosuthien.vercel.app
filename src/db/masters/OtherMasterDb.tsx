import { AllMasters } from "../../db/masters/AllMasterDb.tsx";

const OtherMasterDb = AllMasters?.filter(master => master.sect.includes('-'));

export default OtherMasterDb;
