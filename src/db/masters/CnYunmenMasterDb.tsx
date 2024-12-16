import { AllMasters } from "../../db/masters/AllMasterDb.tsx";

const CnYunmenMasterDb = AllMasters?.filter(master => master.sect.includes('Yunmen'));
export default CnYunmenMasterDb;

// https://wiki.scholarship.edu.vn/V%C3%A2n_M%C3%B4n_t%C3%B4ng#google_vignette
