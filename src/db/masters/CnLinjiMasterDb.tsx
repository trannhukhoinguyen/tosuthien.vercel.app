import { AllMasters } from "../../db/masters/AllMasterDb.tsx";

const CnLinjiMasterDb = AllMasters?.filter(master => master.sect.includes('Linji'));
export default CnLinjiMasterDb;
