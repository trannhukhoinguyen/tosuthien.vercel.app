import { AllMasters } from "../../db/masters/AllMasterDb.tsx";

const CnCaodongMasterDb = AllMasters?.filter(master => master.sect.includes('Caodong'));
export default CnCaodongMasterDb;
