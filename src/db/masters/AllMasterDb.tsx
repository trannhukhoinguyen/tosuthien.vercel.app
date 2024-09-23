import ViMasterDb from "../../db/masters/ViMasterDb.tsx";
import InMasterDb from "../../db/masters/InMasterDb.tsx";
import CnMasterDb from "../../db/masters/CnMasterDb.tsx";
import CnGuiyangMasterDb from "../../db/masters/CnGuiyangMasterDb.tsx";
import CnLinjiMasterDb from "../../db/masters/CnLinjiMasterDb.tsx";
import CnCaodongMasterDb from "../../db/masters/CnCaodongMasterDb.tsx";
import CnFayanMasterDb from "../../db/masters/CnFayanMasterDb.tsx";
import CnYunmenMasterDb from "../../db/masters/CnYunmenMasterDb.tsx";
import CnYangqiMasterDb from "../../db/masters/CnYangqiMasterDb.tsx";
import CnHuanglongMasterDb from "../../db/masters/CnHuanglongMasterDb.tsx";
import CnLv1MasterDb from "../../db/masters/CnLv1MasterDb.tsx";
import CnLv2MasterDb from "../../db/masters/CnLv2MasterDb.tsx";
import CnLv3MasterDb from "../../db/masters/CnLv3MasterDb.tsx";
import CnLv4MasterDb from "../../db/masters/CnLv4MasterDb.tsx";
import CnLv5MasterDb from "../../db/masters/CnLv5MasterDb.tsx";
import CnLv6MasterDb from "../../db/masters/CnLv6MasterDb.tsx";
const AllMasterDb = [
    ...ViMasterDb,
  ...InMasterDb,
  ...CnMasterDb,
  ...CnGuiyangMasterDb,
  ...CnLinjiMasterDb,
  ...CnCaodongMasterDb,
  ...CnFayanMasterDb,
  ...CnYunmenMasterDb,
  ...CnYangqiMasterDb,
  ...CnHuanglongMasterDb,
  ...CnLv1MasterDb,
  ...CnLv2MasterDb,
  ...CnLv3MasterDb,
  ...CnLv4MasterDb,
  ...CnLv5MasterDb,
  ...CnLv6MasterDb,
]
export default AllMasterDb;
