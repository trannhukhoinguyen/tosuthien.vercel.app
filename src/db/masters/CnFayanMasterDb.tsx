import { AllMasters } from "../../db/masters/AllMasterDb.tsx";

const CnFayanMasterDb = AllMasters?.filter(master => master.sect.includes('Fayan'));
export default CnFayanMasterDb;
