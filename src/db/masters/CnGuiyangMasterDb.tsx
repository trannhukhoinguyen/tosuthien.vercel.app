import { AllMasters } from "../../db/masters/AllMasterDb.tsx";

const CnGuiyangMasterDb = AllMasters?.filter(master => master.sect.includes('Guiyang'));
export default CnGuiyangMasterDb;
