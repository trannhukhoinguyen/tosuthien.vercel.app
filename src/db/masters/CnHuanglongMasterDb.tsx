import { AllMasters } from "../../db/masters/AllMasterDb.tsx";

const CnHuanglongMasterDb = AllMasters?.filter(master => master.sect.includes('Huanglong'));
export default CnHuanglongMasterDb;
