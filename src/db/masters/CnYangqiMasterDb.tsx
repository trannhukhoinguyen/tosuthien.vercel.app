import { AllMasters } from "../../db/masters/AllMasterDb.tsx";

const CnYangqiMasterDb = AllMasters?.filter(master => master.sect.includes('Yangqi'));
export default CnYangqiMasterDb;
